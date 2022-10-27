const express = require('express');
const mongoose = require('mongoose');
const cors= require('cors');

const phonesRouter = require('./controllers/phone');

mongoose.connect(
    'mongodb+srv://colonel:colonel123@cluster0.ptn5m3o.mongodb.net/?retryWrites=true&w=majority',
    { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
      console.log('Connected to database');
    })
    .catch((err) => {
      console.log('Error connecting to DB', err.message);
    });

const app = express();
app.use(cors());

app.use('/api', phonesRouter)

const PORT = 3001;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});


// app.get('/', (req, res) => {
//     res.send('Hello World');
// })

// const PORT = 3001;
// app.listen(PORT, () => {
//     console.log(`Server is running on port ${PORT}`)
// })

