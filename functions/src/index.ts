import * as functions from 'firebase-functions';
import * as express from 'express';
import * as cors from 'cors';

const app = express();
app.use(cors());

app.get('/autorize', (req, res) => {
  res.redirect('http://google.com');
});

app.get('/teste', (req, res) => {
  res.send('salve');
});


export const auth = functions.https.onRequest(app);
