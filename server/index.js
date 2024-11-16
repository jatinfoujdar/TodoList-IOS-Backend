import app from "./app.js"

const { PORT = 4000 } = process.env;


app.listen(4000,()=> "Server is Running at 4000")