import { Kafka, logLevel } from 'kafkajs';
import ip from 'ip';

const host = process.env.HOST_IP || '0.0.0.0';

console.log(process.env.KAFKA);

const kafka = new Kafka({
  logLevel: logLevel.DEBUG,
  clientId: 'node-kafka-app',
  brokers: [`${host}:9092`]
});

export const kafkaProducer = kafka.producer();

export const kafkaConsumer = kafka.consumer({ groupId: 'message-group' });
