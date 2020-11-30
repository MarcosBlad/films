const express = require('express');

const server = express();

const PORT = process.env.PORT || 3333;

server.get('/filmes',(req,res)=>{

    return res.json(
       [
         {
          id: 1,
          capa: "https://i.pinimg.com/1200x/33/39/9d/33399df9faacc5de9e3928f52fabbacf.jpg"
         },
         {
          id: 2,
          capa: "https://i.pinimg.com/736x/63/c7/41/63c741c433aa938eadafdbd386e4e676.jpg"   
         },
         {
          id: 3,
          capa: "https://i.pinimg.com/originals/c6/87/80/c687806236ccddde05fb98beb3cb0e96.jpg"   
         },
         {
          id: 4,
          capa: "https://i.pinimg.com/originals/1e/1a/e1/1e1ae155d24354e29d89708dfcf13f5e.jpg"   
         },
         {
          id: 5,
          capa: "https://i.pinimg.com/originals/0f/d4/a1/0fd4a1cd7096249173ad9fe269c1a3e2.jpg"   
         },
         {
          id: 6,
          capa: "https://i.pinimg.com/originals/db/76/3c/db763c88aff6f9d276dcac1d7be2adfe.jpg"   
         },
         {
          id: 7,
          "capa": "https://i.pinimg.com/originals/72/bb/88/72bb88705bed998f3d5199ce5d5c4e78.jpg"   
         },
         {
          id: 8,
          capa: "https://i.pinimg.com/originals/60/9d/32/609d327a6f5623ab056a4a9b4b449d44.jpg"   
         }
        ]
    );
})

server.listen(PORT);