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

module.exports.updateCarKilometers = async (regnbr, brand, km, inne) => {
    try {
        const cars = await loadCollection('cars')

        await cars.findOneAndUpdate({ regnbr: regnbr }
            , {
                $set:
                {
                    'regnbr': regnbr,
                    'brand': brand,
                    'kilometers': km,
                    'inne':inne
                }
            })
        console.log('update km ' + regnbr + ' ' + km)
        return true
    } catch (error) {
        console.log(error)
        return []
    }
}

module.exports.updateCarAvailability = async (regnbr, brand, km, availability) => {
    try {
        const cars = await loadCollection('cars')
        cars.updateOne({
            regnbr: regnbr
        }, {
            $set:
            {
                regnbr: regnbr,
                brand: brand,
                kilometers:km,
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


module.exports.insertCar = async (regnbr, brand, kilometers, inne) => {
    try {
        const cars = await loadCollection('cars')
        await cars.insertOne({
            'regnbr': regnbr,
            'brand': brand,
            'kilometers': kilometers,
            'inne': inne,

        })
        console.log("car inserted")
        return true;
    } catch (error) {
        console.log(error)
        return false
    }
}

module.exports.deleteCar = async (regnbr) => {
    try {
        const cars = await loadCollection('cars')
        await cars.deleteOne({ 'regnbr': regnbr })
        console.log("deleting car: " + regnbr)
        return true;
    } catch (error) {
        console.log(error)
        return false
    }
}

//--------------------------TRIPS---------------------------------

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

        console.log(await trips.find({ regnbr: { $in: [reg] } }).toArray())
        return await trips.find({ regnbr: { $in: [reg] } }).toArray()
    } catch (error) {
        console.log(error)
        return 'No results'
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