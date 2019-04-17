# Kafka Example
A simple Kafka set up running on docker and then two projects to produce and consume events.

## :construction: Setting up
Make sure you have docker running and then start up Kakfa using docker compose. (Kafka directory courtesy of [wurstmeister](https://github.com/wurstmeister))
```bash
$ docker-compose -f kafka-docker/docker-compose.yml up -d
```

Then, make sure you have node installed and then install all the node packages required for the example
```bash
$ npm install
```

## :envelope: Sending events

In a terminal run the code to produce events and send them to Kafka
```bash
$ node example-kafka-node-producer/index.js
```

## :ear: Listening for events
Then start a consumer to listen for events
```bash
$ node example-kafka-node-consumer/index.js
```

These events will be received by the consumer instantly, you can test to see if the consumer has the user data by calling its API
```bash
$ curl localhost:3000/users
```

## :question: What next?
You can send more events by running the producer again and watch as the consumer hears the events instantly or go explore the code for more detail (there's not much of it)