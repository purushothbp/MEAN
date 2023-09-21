const express = require('express');
const axios = require('axios');
const server = express();
const port = 3000;

server.get('/stream/sound', (req, res) => {
  const audioUrl = 'https://file-examples.com/storage/fedfb3ac2565047789d11e0/2017/11/file_example_MP3_700KB.mp3';
  
  res.setHeader('Content-Type', 'audio/mp3');
  
  axios.get(audioUrl, { responseType: 'stream' }).then((response) => {
    response.data.pipe(res);
  }).catch((error) => {
    console.error('Error streaming audio:', error);
    res.status(500).send('Error streaming audio.');
  });
});


server.listen(port, () => {
    console.log('Server is running on port' , port);
  });