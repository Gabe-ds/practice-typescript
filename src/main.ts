import * as http from 'http';
import { port } from './config';

const server = http.createServer(
    (request, response) => {
        response.end("Hello! Node.js with TypeScript");
    }
);
server.listen(port);
console.log(`http://localhost:${port} にアクセスしてください`);