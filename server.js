const express= require('express');
const app = express();
const bodyParser= require('body-parser')
const mongodb= require('./data/database');


const port = process.env.PORT || 3000;

app.use(bodyParser.json());



app.use('/',require('./routes'));

// File Not Found Route - must be last route in list
app.use(async (req, res, next) => {
  next({status: 404, message: 'Sorry, we appear to have lost that page.'})
})


mongodb.initDb((err)=>{
    if(err){
        console.log(err);
    }
    else{
        app.listen(port,()=>{console.log(`Database is listining and node Running on port  ${port}`)});
    }

});

