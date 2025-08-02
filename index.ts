import { fruit } from "./models";
import dotenv from "dotenv";

dotenv.config();

let a: number = 1;

a += 1;
a += 1;
a += 1;
a += 1;
a += 1;


console.log(a);
console.log(fruit[0]);
console.log(process.env.URL);