import 'dotenv/config';
import Server from "./classes/server";

const server = new Server();

server.start(() => {
    console.log(`Server running in ${process.env.PORT}`);
})

export default server;