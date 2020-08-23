import express from 'express';
import routes from './routes';

const app = express();
app.use(express.json());
app.use(routes);

export default app;
// EU QUE FIZ ISSO AQUI GITHUB