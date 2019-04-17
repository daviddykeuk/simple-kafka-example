var kafka = require('kafka-node'),
    Consumer = kafka.Consumer,
    client = new kafka.KafkaClient(),
    consumer = new Consumer(
        client,
        [
            { topic: 'user.updated', partition: 0 },
        ],
        {
            autoCommit: false,
            groupId: 'user-consumer'
        }
    );

let userData = {};

const express = require('express')
const app = express()
const port = 3000

app.get('/users', (req, res) => res.send(userData));

app.listen(port, () => console.log(`Example app listening on port ${port}!`))

consumer.on('message', function (message) {
    console.log(message);
    let obj;
    try {
        obj = JSON.parse(message.value);
        switch (message.topic){
            case 'user.updated':
                if(obj.username){
                    userData[obj.username] = {
                        first_name: obj.first_name,
                        last_name: obj.last_name
                    };
                }
            break;
        }
    } catch (error){

    }
});

