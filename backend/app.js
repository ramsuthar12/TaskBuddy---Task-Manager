const express = require("express");
const app = express();
require("dotenv").config();
require("./config/connectDB");
const cors = require("cors");
const UserAPI = require("./routes/userRoutes");
const TaskAPI = require("./routes/taskRoutes");
app.use(cors());
app.use(express.json());


app.use("/api/v1", UserAPI);    
app.use("/api/v2", TaskAPI);

app.use("/", (req, res)=>{
    res.send("Hello from the Task Manager Backend");
});
const PORT = 1000;

app.listen(PORT, ()=>{
    console.log(`Server running on port : ${PORT}`);
});