let express = require('express')
const app = express();
let path = require('path')
let cors = require('cors')
app.use(cors());

const port = process.env.PORT || 3001

let carsroute = require('./routes/cars')
let tripsroute = require('./routes/trips')

app.use('/carsroute', carsroute)
app.use('/tripsroute', tripsroute)

app.use(express.static(path.join(__dirname, 'public')))

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'))
})

app.listen(port, () => {
    console.log('lyssnar på port ' + port)
})