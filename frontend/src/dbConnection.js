import axios from "axios";

const carsurl = 'http://localhost:3001/carsroute'
const tripsurl = 'http://localhost:3001/tripsroute'

class dbConnection {
    static async getDBCars() {
        try {
            let result = await axios.get(carsurl)
            return result.data
        } catch (error) {
            console.log('error i getCars')
            return false
        }

    }

    static async postCarKm(regnbr, brand, km, inne) {
        try {
            console.log('regnbr ' + regnbr)
            console.log('km ' + km)
            let result = await axios.post(carsurl + '/update-km', {
                regnbr: regnbr,
                brand: brand,
                kilometers: km,
                inne: inne
            })
            return result.data
        } catch (error) {
            console.log(error)
            return false
        }
    }


    static async postCarAvailability(regnbr, brand, km, availability) {
        try {
            console.log('regnbr ' + regnbr)
            console.log('inne ' + availability)
            let result = await axios.post(carsurl + '/update-availability', {
                regnbr: regnbr,
                brand: brand,
                kilometers: km,
                inne: availability
            })
            return result.data
        } catch (error) {
            console.log(error)
            return false
        }
    }

    static async postAddCar(regnbr, brand, kilometers, inne) {
        try {
            let result = await axios.post(carsurl + '/insert-car', {
                regnbr: regnbr,
                brand: brand,
                kilometers: kilometers,
                inne: inne
            })
            return result.data

        } catch (error) {
            console.log(error)
        }
    }


    static async postDeleteCar(regnbr) {
        try {
            let result = await axios.post(carsurl + '/delete-car', {
                regnbr: regnbr,

            })
            return result.data

        } catch (error) {
            console.log(error)
        }
    }




    //-------------------------------------------
    static async getDBTrips() {
        try {
            let result = await axios.get(tripsurl)
            return result.data
        } catch (error) {
            return false
        }

    }
    static async getTripReg(regnbr) {
        try {
            let result = await axios.get(tripsurl + '/' + regnbr)
            return result.data
        } catch (error) {
            return false
        }

    }

    static async postDBTrip(trip) {
        try {
            let res = await axios.post(tripsurl, { regnbr: trip.regnbr, tripdate: trip.tripdate, driver: trip.driver, kilometers: trip.kilometers })
            return res.data
        } catch (error) {
            return false
        }

    }

}

export default dbConnection
