let express = require('express')
let router = express.Router()
let mongoDbService = require('../MongodbService')

let bodyparser = require('body-parser');
router.use(bodyparser.urlencoded({ extended: false }));
router.use(bodyparser.json())

router.get('/', async (req, res) => {
    try {
        let result = await mongoDbService.readTrips()
        res.send(result)
    } catch (error) {
        console.log(error)
        res.send([])
    }
})

router.get('/:regnbr', async (req, res) => {
    try {
        let result = await mongoDbService.readTripsReg(req.params.regnbr)
        res.send(result)
    } catch (error) {
        console.log(error)
        res.send([])
    }
})

router.post('/', async (req, res) => {
    try {
        let isok = await mongoDbService.insertTrip(req.body.regnbr, req.body.tripdate, req.body.driver, req.body.kilometers)
        res.send(isok)
    } catch (error) {
        console.log(error)
        res.send(false)
    }
})

module.exports = router
