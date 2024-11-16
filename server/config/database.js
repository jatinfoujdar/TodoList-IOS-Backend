import mongoose from "mongoose";

const{MONGO_URL} = process.env

exports.connect = ()=>{
    mongoose.connect(MONGO_URL,{
        useNewUrlParser: true,
        useUnifiedTopology: true
    }).then(console.log(`DB Connection Success`))
      .catch(error=>{
        console.log(`DB connnection failed`);
        console.log(error);
        process.exit(1)    
      })
}

