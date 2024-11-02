const express = require('express');
const router = require('./moduler/crud/routes');
const connectDB = require('./config/db.config');
const app = express()
require('dotenv').config();
const port = process.env.PORT || 5050;

app.use(express.json());
connectDB();
app.use('/api', router);



app.get('/', (req, res) => {
  res.send('Hello World!')
})



app.listen(port, () => {
  console.log(`Crud app listening on port ${port}`)
})