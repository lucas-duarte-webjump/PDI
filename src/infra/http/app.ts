import 'reflect-metadata';
import express from 'express';
import cors from 'cors';
import path from 'path';
import { router } from './routes';
import { bootstrap } from '../graphQl/bootsrap';
import expressLayouts from 'express-ejs-layouts';

const app = express();

app.use(cors());

app.use(expressLayouts);

app.use(express.static(path.join(__dirname, '..', '..', '..', 'public')));

app.set('views', path.join(__dirname, '..', '..', '..', 'views'));

app.set('view engine', 'ejs');

app.use(express.json());
app.use(router);
bootstrap(app).catch(err => console.error(err.message)); 

export {app};