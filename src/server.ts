import express from 'express';
import routes from './routes';

const server = express();

server.use(express.json());
server.use(routes);

server.get('/', (request, response) =>
  response.json({ message: 'Hello GoStack' }),
);

server.listen(3333, () => {
  console.log('🚀 Server started on port 3333!');
});
