import { fruit } from "./models";
import dotenv from "dotenv";
import Fastify from "fastify";
import { request } from "http";

dotenv.config();


const fastify = Fastify({ logger: true });

fastify.get('/', async () => {
  return { hello: 'world' };
});

// サーバ起動
fastify.listen({ port: 3000 }, (err, address) => {
  if (err) {
    console.error(err);
    process.exit(1);
  }
  console.log(`🚀 Server ready at ${address}`);
});


class Db {
    url: string;

    constructor(url: string) {
        this.url = url;
    }


}










let a: number = 1;

a += 1;
a += 1;
a += 1;
a += 1;
a += 1;


console.log(a);
console.log(fruit[0]);
console.log(process.env.URL);