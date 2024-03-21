const express = require('express');
const app = express();
const port = process.env.PORT||3000; // se define en donde estara escuchando deacuerdo al servicio utilizado en este caso vercel 
app.get('/',(req,res)=>{
    const htmlresponse = 
    `<html>
        <head>
            <title>Ephimeral en Vercel</title>
        </head>   
        <body>
            <h1>Proyecto Node en Vercel</h1>
        </body>
    </html>
    `;
    res.send(htmlresponse);
});
app.listen(port, ()=>{
    console.log(`port runing in http://localhost::${port}`);

});