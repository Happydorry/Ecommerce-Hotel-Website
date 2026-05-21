import dotenv from "dotenv";
dotenv.config();
import dns from "node:dns";
dns.setServers(["8.8.8.8", "1.1.1.1"]);
export const mongoURL = process.env.MONGODB_URI;
export const PORT = process.env.PORT || 8000;
console.log("Mongo URL:", mongoURL);
