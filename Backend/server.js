const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const app= express();

const flightRoutes = require("./Routes/flightRoutes.js");


const connectDB = require("./Config/db")




dotenv.config();

connectDB();
app.use(cors());
app.use(express.json());
app.use('/api', flightRoutes);




const PORT =process.env.PORT || 5000;

app.listen(PORT, ()=>{
    console.log(`server running on port ${PORT}`);
});