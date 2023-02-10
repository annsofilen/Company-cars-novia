let express = require('express')
let router = express.Router()
let mongoDBService = require('../MongodbService')

let bodyparser = require('body-parser');
router.use(bodyparser.urlencoded({ extended: false }));
router.use(bodyparser.json())

router.get('/', async (req, res) => {
    try {
        let result = await mongoDBService.readCars()
        res.send(result)
    } catch (error) {
        console.log(error)
        res.send([])
    }
})

router.post('/update-km', async (req, res) => {
    try {
        let isok = await mongoDBService.updateCarKilometers(req.body.id, req.body.kilometers)
        res.send(isok)
    } catch (error) {
        console.log(error)
        res.send(false)
    }
})


router.post('/update-availability', async (req, res) => {
    try {
        let isok = await mongoDBService.updateCarAvailability(req.body.id, req.body.inne)
        res.send(isok)
    } catch (error) {
        console.log(error)
        res.send(false)
    }
})

router.post('/delete-car', async (req, res) => {
    try {
        let isok = await mongoDBService.deleteCar(req.body.regnbr)
        res.send(isok)
    } catch (error) {
        console.log(error)
        res.send(false)
    }
})

router.post('/insert-car', async (req, res) => {
    try {
        let isok = await mongoDBService.insertCar(req.body.regnbr, req.body.brand, req.body.kilometers, req.body.inne)
        res.send(isok)
    } catch (error) {
        console.log(error)
        res.send(false)
    }
})


module.exports = router
