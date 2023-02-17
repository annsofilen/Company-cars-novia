<template>
    <div class="container ms-4">
        <h2>Trip management</h2>

    </div>
    <div v-if="this.return === true && this.reserve == null" class="ms-4 ">
        <p>Thank you for returning the car</p>
    </div>
    <div v-else-if="this.return === null && this.reserve == true" class="ms-4 ">
        <p>Reservation ok. Happy driving!</p>
    </div>
    <div v-else class="ms-4 ">
        <div class="card">
            
            <ul class="list-group list-group-flush">
                <li class="list-group-item" v-bind="car">{{ car.regnbr }}</li>
                <li class="list-group-item" v-bind="car">{{ car.brand }}</li>
                <li class="list-group-item" v-bind="car">{{ car.kilometers }}</li>
            </ul>
        </div>
        <form action="" class="ms-4 ">
            <label for="regnbr" class="form-label">Registration number:</label>
            <input type="text" placeholder="Registration number" id="regnbr" class="form-control" :value="car.regnbr">
            <label for="driver" class="form-label">Driver:</label>
            <input type="text" placeholder="Driver" id="driver" class="form-control" v-model="driver">
            <label for="tipdate" placeholder="Trip date" class="form-label">Enter the date of the trip:</label>
            <input type="date" id="tripdate" class="form-control " v-model="tripdate">
            <label v-if="car.inne === false" for="kilometers" class="form-label">Enter the number of kilometers you
                drove the car:</label>
            <input v-if="car.inne === false" type="text" placeholder="Kilometers" id="kilometers" class="form-control text-end" v-model="kilometers">
            <input v-if="car.inne === false" type="button" value="Complete return" class="btn btn-outline-secondary"
                @click="onReturn">
            <input v-else type="button" value="Reserve car" class="btn btn-outline-secondary" @click="onReserve">

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
    name: 'TripManagement',
    props: {
        car: {}
    }, data() {
        return {
            tripdate: '',
            driver: '',
            kilometers: null,
            reserve: null,
            return: null

        }
    },

    mounted() { },
    methods: {
        onReserve() {
            //this.updateAvailability();
            this.addKilometers(0);
            this.addTrip();
            this.reserve = true
            this.return = null
        },

        onReturn() {
            //this.updateAvailability();
            this.addKilometers(this.kilometers);
            this.reserve = null
            this.return = true
        },

        async addKilometers(km) {
            let availability = this.car.inne;
            if (availability == true) {
                availability = false
            } else if (availability == false) {
                availability = true
            }
            else {
                availability = false
            }


            let updatedKm = parseInt(km) + parseInt(this.car.kilometers)
            console.log(updatedKm + ' updated kilometers')
            this.kilometers = updatedKm
            dbConnection.postCarKm(this.car.regnbr, this.car.brand, updatedKm, availability)
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

    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
 
