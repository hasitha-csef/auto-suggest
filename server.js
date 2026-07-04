const express =require('express');
const app = express();
const port = process.env.PORT || 3002;
//web server
app.use(express.static("frontend"));
app.listen(port ,function(){
    console.log("Successfully running at http:/localhost:"+port);

})