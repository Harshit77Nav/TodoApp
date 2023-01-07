const app = require('./src/App');
const mongoose = require('mongoose');
const PORT = process.env.PORT || 5000
const dotenv = require('dotenv')

dotenv.config()

mongoose.set('strictQuery', false);
mongoose.connect(process.env.DATABASE_URL,{ useNewUrlParser: true, useUnifiedTopology: true }, () => {
    console.log('connected to DB')
})

app.listen(PORT,()=>{console.log("server is running");})