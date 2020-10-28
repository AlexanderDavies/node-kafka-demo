import { Message } from './message.model';
import services from './../../shared/services';
import fs from 'fs';
import path from 'path';

const outputFile = path.join(__dirname, '../../../../output/kafka-message-topic.txt');

/**
 * Service to trigger the sending of the message to the
 * @function
 * @param {Message} message - Express request object
 */

const sendMessage = async (message: Message) => {
  //connect to the instance
  await services.kafkaProducer.connect();

  const res = await services.kafkaProducer.send({
    topic: 'message',
    messages: [
      {
        key: 'message',
        value: JSON.stringify(message)
      }
    ]
  });

  return res;
};

/**
 * Subscriber function to listen to the message channel and log to the co  nsole, demonstrates manual commiting offsets
 * @function
 */

const run = async () => {
  //connect to the kafka instance
  await services.kafkaConsumer.connect();

  //subscribe to the topic
  await services.kafkaConsumer.subscribe({
    topic: 'message'
  });

  //for each message log it to the file then commit the offset
  await services.kafkaConsumer.run({
    autoCommit: false,
    eachMessage: async ({ topic, partition, message }: any) => {
      try {
        const data = {
          messageOffset: message.offset,
          message: message.value.toString()
        };

        const output = JSON.stringify(data) + '\n';

        fs.appendFileSync(outputFile, output);

        await services.kafkaConsumer.commitOffsets([
          { topic: topic, partition, offset: message.offset + 1 }
        ]);
      } catch (err) {
        console.log(err);
      }
    }
  });
};

run().catch((e) => console.error(`[message-consumer] ${e.message}`, e));

//handle connection errors, disconnect and kill the process
const errorTypes = ['unhandledRejection', 'uncaughtException'];

errorTypes.map((type) => {
  process.on(type, async (e) => {
    try {
      console.log(`process.on ${type}`);
      console.error(e);
      await services.kafkaConsumer.disconnect();
      process.exit(0);
    } catch (_) {
      process.exit(1);
    }
  });
});

export default {
  sendMessage,
  run
};
