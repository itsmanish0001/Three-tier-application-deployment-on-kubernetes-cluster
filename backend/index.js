import express from 'express'
import dotenv from 'dotenv'
import { dbconnect } from './database.js';
import { Student } from './schema.js';
import cors from 'cors';


const app = express();


dotenv.config({
  path: "./.env",
})
app.use(express.json());
app.use(cors());


dbconnect();


const PORT = process.env.PORT || 3000;


app.get('/', (req, res) => {
  res.send('Hello, World!');
});


app.post('/send', (req, res) => {

  const {firstName, lastName, email, age} = req.body;
  Student.create({
    firstName,
    lastName,
    email,
    age
  })
  .then((data)=>{console.log("student saved");
    res.send({success: true});
  })
  .catch((error)=>{console.log(error);
    res.send({success: false});
  });

});




app.get('/receive', (req, res) => {
  
  Student.find({}).then((data)=>res.send({data, success:true})).catch((error)=>res.send({success:false}));


});


app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
