const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/loginAssemble", {
    useNewUrlParser:true,
    useUnifiedTopology:true

}).then(()=>{
    console.log("Database Connection sucessful")
}).catch((error)=>{
    console.log(error);
})
