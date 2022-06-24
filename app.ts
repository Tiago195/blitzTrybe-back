import express from 'express';
import user from './routes/users.routes';
import task from './routes/tasks.routes';

const app = express();

app.use(express.json());

app.use('/user', user);
app.use('/task', task);

export default app;