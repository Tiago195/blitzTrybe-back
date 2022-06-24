import express from 'express';
import user from './routes/users.routes';
const app = express();

app.use('/user', user);

export default app;