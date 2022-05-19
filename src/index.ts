import express, { Express } from 'express';
import dotenv from 'dotenv';
import router from './routes/routes';

dotenv.config();

const app: Express = express();
const port = process.env.PORT;

app.use(express.json());
app.use('/', router);

app.listen(port, () => {
  // eslint-disable-next-line no-console
  console.log(`⚡️[server]: Server is running at https://localhost:${port}`);
});
