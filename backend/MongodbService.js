const mongodb = require('mongodb');


module.exports.readCars = async () => {
    try {
        const cars = await loadCollection('cars')
        return await cars.find({}).toArray()
    } catch (error) {
        console.log(error)
        return []
    }
}

module.exports.updateCarKilometers = async (id, km) => {
    try {
        const cars = await loadCollection('cars')

        await cars.findOneAndUpdate({ '_id': id }
            , {
                $set:
                {
                    'regnbr': '',
                    'brand': '',
                    'kilometers': km
                }
            })
        console.log('update km ' + id + ' ' + km)
        return true
    } catch (error) {
        console.log(error)
        return []
    }
}

module.exports.updateCarAvailability = async (id, availability) => {
    try {
        const cars = await loadCollection('cars')
        cars.updateOne({
            _id: id
        }, {
            $set:
            {
                inne: availability
            }
        })
        console.log('availability: ' + availability)
        return true
    } catch (error) {
        console.log(error)
        return []
    }
}

module.exports.readTrips = async () => {
    try {
        const trips = await loadCollection('trips')
        return await trips.find({}).toArray()

    } catch (error) {
        console.log('vid error i: readTrips')
        console.log(error)
        return []
    }
}

module.exports.readTripsReg = async (reg) => {
    try {
        const trips = await loadCollection('trips')

        console.log(await trips.find({ regnbr: reg }).toArray())
        return await trips.find({ regnbr: reg }).toArray()
    } catch (error) {
        console.log(error)
        return []
    }
}

module.exports.insertTrip = async (regnbr, tripdate, driver, kilometers) => {

    try {
        const trips = await loadCollection('trips')
        await trips.insertOne({
            'regnbr': regnbr,
            'tripdate': tripdate,
            'driver': driver,
            'kilometers': kilometers
        })
        return true
    } catch (error) {
        console.log(error)
        return []
    }
}

loadCollection = async (collection) => {
    try {
        const client = await mongodb.MongoClient.connect('mongodb://localhost:27017/CarsDb',
            {
                useNewUrlParser: true,
                useUnifiedTopology: true
            })

        return client.db('CarsDb').collection(collection)
    } catch (error) {
        console.log(error)
    }

}