// include other main deps
import express from 'express';
import bodyParser from 'body-parser';
import APP_ROOT from 'app-root-path';

// instantiate express
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// static serving from /dist/client
app.use(express.static(APP_ROOT + '/dist/client'));

// example API entry
app.get('/test', (req, res) => res.json({
  foo: 'bar',
  mode: process.env.NODE_ENV,
  port: process.env.PORT,
}));

const serverPort = process.env.PORT || 3000;
app.listen(serverPort);
console.log(`Express server @ http://localhost:${serverPort} (in business baby)\n`);