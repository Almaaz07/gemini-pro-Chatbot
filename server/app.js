import express from 'express';
import bodyParser from 'body-parser';
import { GoogleGenerativeAI } from "@google/generative-ai";
import cors from 'cors';


const app = express();



app.use(cors()); // To allow cross-origin requests
app.use(bodyParser.json()); // To parse JSON bodies


app.get("/" , (req, res)=>{
    res.send("hello from the home page")
})

let formData;
let searchString;

app.post('/submit',async (req, res) => {
    formData = req.body;
    searchString = formData.value
    console.log('Received form data:', searchString);
  
    // You can perform further processing here, such as saving to a database
  
    // res.json({ message: 'Form data received successfully', data: formData });
   
      const genAi = new GoogleGenerativeAI("AIzaSyCkWGVCByyBA7kUR-CY1XVLShvITSei8y8");
      
      const model = genAi. getGenerativeModel({
          model:"gemini-1.5-pro",
      });
  
  
  const query = await model.generateContent(searchString);
  
  console.log(query.response.text())
  
  res.end(query.response.text())
      

  });






 
app.listen(8000 , ()=>{
    console.log("server is running on port 8000")
})