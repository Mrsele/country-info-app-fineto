const express = require("express");
const app = express();
const dotenv = require("dotenv");
dotenv.config();
const cors = require("cors");
const axios = require("axios"); // Add this line for axios
const PORT = 8000; // We can use process.env.PORT but to make things not complicated i use my port 8000.
app.use(express.json());
app.use(cors());
 // Getting Country When Searched
app.get('/api/countries/:countryName', async (req, res) => {
    const countryName = req.params.countryName;
  
    try {
       
        const response = await axios.get(`https://restcountries.com/v3.1/name/${countryName}`);
        const countryData = response.data[0];
        res.json(countryData);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});
//Fetch Based on Country Code
app.get('/api/country/:countryCode', async (req, res) => {
    const countryCode = req.params.countryCode;
  
    try {
      const response = await axios.get(`https://restcountries.com/v3.1/alpha/${countryCode}`);
      const countryDetails = response.data;
      res.json(countryDetails);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  });
  
//Geting allCountries Data
app.get('/api/countries', async (req, res) => {
  try {
    const response = await fetch('https://restcountries.com/v3.1/all');
    const data = await response.json();
    console.log('Data:---', data); 
    res.json(data);
  } catch (error) {
    console.error('Error fetching country data:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

//
app.listen(PORT, () => {
    console.log(`Backend server is running ${PORT}`);
});










































// const express = require("express");
// const app = express();
// const dotenv = require("dotenv");
// dotenv.config();
// const cors = require("cors");
// PORT = 8000;

// app.use(express.json());
// app.use(cors());
// app.get('/api/countries/:countryName', async (req, res) => {
//     const countryName = req.params.countryName;
  
//     try {
//         //https://restcountries.com/v3.1/all  
//       const response = await axios.get(`https://restcountries.com/v3.1/name/${countryName}`);
//       const countryData = response.data[0];
//       res.json(countryData);
//       //console.log(countryData);
//     } catch (error) {
//       console.error(error);
//       res.status(500).json({ error: 'Internal Server Error' });
//     }
//   });

// //coment 
// app.get("/",(req,res)=>{
//     res.send("Hello world but still Working ");  
//    }) 
// // end comment


// app.listen(/*process.env.PORT || */ PORT, () => {
//    console.log(`Backend server is running ${PORT}`);

//    // console.log("Backend server is running ");

//   });