import { Message } from './message.model';
import services from './../../shared/services';

/**
 * Service to trigger the sending of the message to the
 * @function
 * @param {Message} message - Express request object
 */

export const sendMessage = async (message: Message) => {
  await services.kafkaProducer.connect();

  const res = await services.kafkaProducer.send({
    topic: 'message',
    messages: [{ key: 'message', value: JSON.stringify(message) }]
  });

  return res;
};

/**
 * IEE subscriber to listen to the message channel and log to the console, demonstrates manual commiting offsets
 * @function
 */

export const fetchMessage = (async () => {
  await services.kafkaConsumer.subscribe({
    topic: 'message'
  });

  await services.kafkaConsumer.run({
    autoCommit: false,
    eachMessage: async ({ topic, partition, message }: any) => {
      console.log({messageOffset: message.offset, message: message.value.toString()});
      services.kafkaConsumer.commitOffsets([{ topic: topic, partition, offset: message.offset }]);
    }
  });
})();

export default {
  sendMessage,
  fetchMessage
};
