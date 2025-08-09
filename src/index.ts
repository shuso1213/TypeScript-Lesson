import { fruit } from "./models";
import dotenv from "dotenv";
import Fastify from "fastify";
import { request } from "http";
import * as http from 'http';
import express from 'express';



dotenv.config();

// For Fastify//////////////////////////////////////////////
// const fastify = Fastify({ logger: true });

// fastify.get('/', async () => {
//   return { hello: 'world' };
// });

// // サーバ起動
// fastify.listen({ port: 3000 }, (err, address) => {
//   if (err) {
//     console.error(err);
//     process.exit(1);
//   }
//   console.log(`🚀 Server ready at ${address}`);
// });



//For No Framework

// const server = http.createServer((req, res) => {
//     res.writeHead(200, {'Content-Type': 'text/plain; charset=utf-8'});
//     res.end('Hello Node.js');
    
// });

// const PORT = 8888;
// server.listen(PORT, () => {
//     console.log('server started');
// });

// For Express


const app = express();
app.use(express.json());
app.use(express.static('../public2025'));
const PORT = 8000;
const path = require('path');


app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'public2025', 'index.html'));
});
app.get('/users/:id', (req, res) => {
    res.send(`User Id id ${req.params.id}.Name is ${req.query.name}. Age is ${req.query.age}`);
});
app.post('/', (req, res) => {
    res.send(req.body);
});
app.put('/users/:id', (req, res) => {
    res.send(req.body);
});
app.delete('/users/:id', (req, res) => {
    res.send(req.body.id);
});



app.listen(PORT, () => {
    console.log('`サーバが起動しました');
})

