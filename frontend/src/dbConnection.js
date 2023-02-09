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

    static async postCarKm(id, km) {
        try {console.log('id ' +id)
            console.log('km ' +km)
            let result = await axios.post(carsurl + '/update-km', {
                id: id,
                kilometers: km
              })
            return result.data
        } catch (error) {
            return false
        }

    }


static async postCarAvailability(id, availability) {
        try {console.log('id ' +id)
            console.log('inne ' +availability)
            let result = await axios.post(carsurl + '/update-availability', {
                id: id,
                inne: availability
              })
            return result.data
        } catch (error) {
            return false
        }

    }
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


    /* static async insertMeasure(measure) {
        try {
            let res = await axios.post(measuresurl, { nbr: measure.nbr, station: measure.station, date: measure.date, time: measure.time, celsius: measure.celsius })
            return res.data
        } catch (error) {
            return false
        }
    }

    static async deleteMeasure(nbr) {

        try {
            
            let res = await axios.delete(measuresurl + '/' + nbr)
            console.log('delete clicked in be service : ' + nbr)
            return res.data
        } catch (error) {
            return false
        }

    }

    static async getMeasureCount() {

        try {
            
            let res = await axios.get(measuresurl+'/count' )
            console.log('get collection count: ' + res.data)
            return res.data
        } catch (error) {
            return false
        }

    }
     */


}

export default dbConnection
