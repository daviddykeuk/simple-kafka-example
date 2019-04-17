const users = require('./users');

var kafka = require('kafka-node'),
    Producer = kafka.Producer,
    KeyedMessage = kafka.KeyedMessage,
    client = new kafka.KafkaClient(),
    producer = new Producer(client);

var topicsToCreate = [{
    topic: 'user.updated',
    partitions: 1,
    replicationFactor: 1
  }];

  messages = [];

  users.forEach((u)=>{
    messages.push(JSON.stringify(u));
  });


km = new KeyedMessage('key', 'message'),
payloads = [
    { topic: 'user.updated', messages: messages, partition: 0 }
];
    
producer.on('ready', function () {

    client.createTopics(topicsToCreate, (error, result) => {
      console.log("[i] Topic created sent")
    });

    producer.send(payloads, function (err, data) {
      console.log("[i] Data sent")
      process.exit(0)
    });
});

producer.on('error', function (err) {});
