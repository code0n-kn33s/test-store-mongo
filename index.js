import express from 'express'
import mongoose from 'mongoose'
import router from "./routes/index.js"

const PORT = 5001;
const DB_URL = `mongodb+srv://alex:123@cluster0.abqqatu.mongodb.net/?retryWrites=true&w=majority`

const app = express()

app.use(express.json())
app.use(express.static('static'))
app.use('/api', router)

async function startApp() {
    try {

        await mongoose.connect(DB_URL, {useUnifiedTopology: true, useNewUrlParser: true})
        app.listen(PORT, () => console.log('SERVER STARTED ON PORT ' + PORT))

    } catch (e) {
        console.log(e)
    }
}

mongoose.connection.on('connected', () => {
    console.log('Mongoose connected to ' + DB_URL);
});

mongoose.connection.on('error', (err) => {
    console.log('Mongoose connection error: ' + err);
});

mongoose.connection.on('disconnected', () => {
    console.log('Mongoose disconnected');
});


startApp()
