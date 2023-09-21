const express = require('express');
const axios = require('axios');
const port = 3000;
const server = express();

server.get('/course/1st-year',function(req,res){
    const coursesList=['Computerscience and Engineering', 'Electrical and Electronics Engineering', 'Information Technology', 'AI/DS'];
    res.send(coursesList);
});

server.get('/labs/1st-year',function(req,res){
    const labs=['Python Laboratory', 'OOPS Laboratory', 'MPMC Laboratory', 'BEEME Laboratory', 'Mini-Project'];
    res.send(labs);
});

server.get('/download/sample',async(req,res)=>{
    const imageLink = 'https://file-examples.com/storage/fedfb3ac2565047789d11e0/2017/10/file_example_JPG_500kB.jpg';
    try {
        const response = await axios.get(imageLink, { responseType: 'arraybuffer' });
        res.setHeader('Content-Type', 'image/jpeg');
        res.send(response.data);
    
      }
      catch(error){
        console.log('Error in showing image')
      }
});

