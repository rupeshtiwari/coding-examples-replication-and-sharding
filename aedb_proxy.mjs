import axios from 'axios';
import express from 'express';

const PORT = 8000;
const SHARD_ADRESSES = ['http://localhost:3000', 'http://localhost:3001'];

const SHARD_COUNT = SHARD_ADRESSES.length;

const app = express();
app.use(express.json());

function getShardEndpoint(key) {
  const shardNumber = key.charCodeAt(0) % SHARD_COUNT;
  const shardAddress = SHARD_ADRESSES[shardNumber];

  return `${shardAddress}/${key}`;
}

app.post('/:key', (req, res) => {
  const shardEndpoint = getShardEndpoint(req.params.key);
  console.log(`Forwarding to: ${shardEndpoint}`);
  axios.post(shardEndpoint, req.body).then((innerResp) => res.send());
});

app.get('/:key', (req, res) => {
  const shardEndpoint = getShardEndpoint(req.params.key);
  console.log(`Forwarding to: ${shardEndpoint}`);
    axios.get(shardEndpoint).then((innerResp) => {
        if (innerResp.data == null) {
            res.send('null'); return;
        }
        res.send(innerResp.data);
    });
});

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
