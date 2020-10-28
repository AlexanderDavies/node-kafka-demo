import { Kafka, logLevel } from 'kafkajs';

const host = process.env.HOST_IP || '0.0.0.0';

//create a new client
const kafka = new Kafka({
  logLevel: logLevel.DEBUG,
  clientId: 'node-kafka-app',
  brokers: [`${host}:9092`]
});

//create a producer to send messages
export const kafkaProducer = kafka.producer();

//create a consumer to read messages and assign the consumer group id
//each partition should only have one consumer
export const kafkaConsumer = kafka.consumer({ groupId: 'message-group' });
