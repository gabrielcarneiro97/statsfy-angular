import * as functions from 'firebase-functions';
import * as express from 'express';
import * as cors from 'cors';
import axios from 'axios';
import * as qs from 'querystring';

const app = express();
app.use(cors());

app.get('/autorize', (req, res) => {
  const scope = 'user-top-read user-library-read user-read-private user-read-birthdate user-read-email user-follow-read playlist-read-collaborative playlist-read-private playlist-modify-private playlist-modify-public';
  const { client: { id }, redirects: { code } } = functions.config();

  res.send({ url: `https://accounts.spotify.com/authorize?client_id=${id}&redirect_uri=${encodeURIComponent(code)}&scope=${encodeURIComponent(scope)}&response_type=code` });
});

app.get('/code', async (req, res) => {
  const { code } = req.query;
  const { redirects: { code : redirect_uri, tokens } } = functions.config();

  const queryString = qs.stringify({
    grant_type: 'authorization_code',
    code,
    redirect_uri
  });

  try {
    const spotifyRes = await axios.post('https://accounts.spotify.com/api/token',
    queryString,
    {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        Authorization: 'Basic ZDUyNTUwMzU3Yzg2NDYxZjg5MGRjMjBlMmMxNGYyMTM6YzE5ZmJjNTY5MjNkNDU3ZDhjZmQ2NDUxZTYyOGYxZmE='
      }
    }
  );

  const { data: { access_token, refresh_token, expires_in } } = spotifyRes;

  res.redirect(`${tokens}?access_token=${access_token}&refresh_token=${refresh_token}&expires_in=${expires_in}`);
  } catch (error) {
    console.error(error);
    res.status(500).send();
  }
});

app.get('/refresh/:refresh_token', async (req, res) => {
  const { refresh_token } = req.params;

  const queryString = qs.stringify({
    grant_type: 'refresh_token',
    refresh_token
  });

  try {
    const spotifyRes = await axios.post('https://accounts.spotify.com/api/token',
    queryString,
    {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        Authorization: 'Basic ZDUyNTUwMzU3Yzg2NDYxZjg5MGRjMjBlMmMxNGYyMTM6YzE5ZmJjNTY5MjNkNDU3ZDhjZmQ2NDUxZTYyOGYxZmE='
      }
    }
  );

  res.send(spotifyRes.data);
  } catch (error) {
    console.error(error);
    res.status(500).send();
  }
});


export const auth = functions.https.onRequest(app);
