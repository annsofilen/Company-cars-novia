<template>
    <HelloWorld msg="Cars" />
    <div class="container">
        <div class="row">
            <div class="col-sm">
                <table class="table table-light table-striped table-hover table-sm ms-4">
                    <thead>
                        <tr>
                            <th scope="col">Registration number</th>
                            <th scope="col">Car brand</th>
                            <th scope="col">Kilometers</th>
                            <th scope="col">Availability</th>
                            <th scope="col"></th>
                            <th scope="col"></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="(car, index) in cars" :key="index" scope="row">
                            <td @click="searchTripsForReg(car.regnbr)">{{ car.regnbr }}</td>
                            <td>{{ car.id }}</td>
                            <td>{{ car.kilometers }} km</td>
                            <td>{{ car.inne }}</td>
                            <td v-if="car.inne === true"><input type="button" value="Take" @click="takeCar(index)"
                                    class="btn btn-outline-success"></td>
                            <td v-else><input type="button" value="Return" @click="returnCar(index)"
                                    class="btn btn-outline-dark"></td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div class="col-sm">
                <TripManagement v-if="currentCar" v-bind:car="currentCar"></TripManagement>
                <RentalInformation v-else></RentalInformation>
            </div>
        </div>
        <div class="row">
            <div class="col-sm">
                <CarManagement></CarManagement>
            </div>
        </div>
    </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import TripManagement from '@/components/TripManagement.vue'
import RentalInformation from '@/components/RentalInformation.vue';
import CarManagement from '@/components/CarManagement.vue'

import dbConnection from '../dbConnection'

export default {
    name: 'CarView',
    components: {
        HelloWorld,
        CarManagement,
        RentalInformation,
        TripManagement
    },

    data() {
        return {
            currentCar: '',
            takenCar: '',
            cars: [],
            trips: [],
        }
    },
    async mounted() {
        this.cars = await dbConnection.getDBCars();
    },

    computed: {

    },

    methods: {
        async takeCar(index) {
            this.currentCar = this.cars[index]
        },
        returnCar(index) {
            this.currentCar = this.cars[index]
        },


    }

}
</script>
