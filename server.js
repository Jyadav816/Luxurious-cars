const express = require('express')
const app = express()
const port = process.env.port || 5000
const databaseConeection = require('./database')
app.use(express.json())
app.use('/api/cars/' , require('./paths/carsPath'))
app.use('/api/users/' , require('./paths/uPath'))
app.use('/api/bookings/' , require('./paths/bookPath'))

app.get('/', (req,res) => res.send('hello world'))
app.listen(port, () => console.log('Node js server started in port', port))