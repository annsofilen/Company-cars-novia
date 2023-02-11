<template>
    <div class="container ms-4">
        <h2>Trip management</h2>
        <ul>
            <li v-bind="car">{{ car.regnbr }}</li>
            <li v-bind="car">{{ car.brand }}</li>
            <li v-bind="car">{{ car.kilometers }}</li>
            <li v-bind="car">{{ car._id }}</li>
        </ul>
        <form action="" class="ms-4 ">
            <label for="regnbr" class="form-label">Registration number:</label>
            <input type="text" id="regnbr" class="form-control" :value="car.regnbr">
            <label for="driver" class="form-label">Driver:</label>
            <input type="text" id="driver" class="form-control" v-model="driver">
            <label for="tipdate" class="form-label">Enter the date of the trip:</label>
            <input type="date" id="tripdate" class="form-control " v-model="tripdate">
            <label v-if="car.inne === false" for="kilometers" class="form-label">Enter the number of kilometers you drove the car:</label>
            <input v-if="car.inne === false" type="text" id="kilometers" class="form-control text-end" v-model="kilometers">
            <input v-if="car.inne === false" type="button" value="Complete return" class="alert alert-danger mt-2" @click="addKilometers">
            <input v-else type="button" value="Reserve car" class="alert alert-danger mt-2" @click="addKilometers">

        </form>
    </div>
</template>

<script>
import dbConnection from '@/dbConnection';
//import { runInThisContext } from 'vm';
//flytta all trip management funktionalitet till trip management
//fixa take car funktionaliteten
//fixa en sök sida var man kan söka efter resor en bil gjort
//fixa backend funktionalitet för add car och remove car

export default {
    name: 'CarManagement',
    props: {
        car: {}
    }, data() {
        return {
            tripdate: '',
            driver: '',
            kilometers: null,

        }
    },

    mounted() { },
    methods: {
        async addKilometers() {
            let updatedKm = parseInt(this.kilometers) + parseInt(this.car.kilometers)
            console.log(updatedKm + 'updated kilometers')
            dbConnection.postCarKm(this.car._id, updatedKm)
            this.updateAvailability()
            this.addTrip()
        },

        async addTrip() {
            if (this.kilometers == null) {
                this.kilometers = 0;
            }
            let newTrip = {
                regnbr: this.car.regnbr,
                tripdate: this.tripdate,
                driver: this.driver,
                kilometers: parseInt(this.kilometers)
            }
            dbConnection.postDBTrip(newTrip)
        },

        async updateAvailability() {

            let availability = this.car.inne;
            if (availability == true) {
                availability = false
            } else if (availability == false) {
                availability = true
            }
            else  {
                availability = false
            }
            await dbConnection.postCarAvailability(this.car._id, availability)
        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
 
