import express from 'express';
import fs from 'fs';

const PORT = process.env.PORT;
const DATA_DIR = process.env.DATA_DIR;

const app = express();
app.use(express.json());

app.post('/:key', (req, res) => {
    const { key } = req.params;
    const destinationFile = `${DATA_DIR}/${key}`;
    fs.writeFileSync(destinationFile, req.body);
    res.send();
});


app.get('/:key', (req, res) => {
  const { key } = req.params;
  const destinationFile = `${DATA_DIR}/${key}`;
 try {
     const data = fs.readFileSync(destinationFile);
     res.send(data);
 } catch (e) {
     res.send('null');
 }
});

app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
})