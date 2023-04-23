import * as dotenv from 'dotenv';
import express from 'express';
import cors from 'cors';
import errorHandler from './middlewares/error.middleware';
dotenv.config();

const app = express();
const port = process.env.PORT;
const origin = process.env.ORIGIN;

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(errorHandler);
app.use(
  cors({
    credentials: true,
    origin: origin,
  })
);

app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
