<template>

    <HelloWorld msg="Cars" />


    <div class="container">
        <div class="card card-body">
            <div class="row">
                <p class="ms-4">In this app you can reserve and return cars of the company</p>
            </div>
            <div class="row">
                <div class="col-sm">
                    <table class="table table-light table-striped table-hover table-sm ms-4">
                        <thead>
                            <tr>
                                <th scope="col">Registration number</th>
                                <th scope="col">Car brand</th>
                                <th scope="col">Kilometers</th>

                                <th scope="col">button</th>
                                
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="(car, index) in cars" :key="index" scope="row">
                                <td @click="searchTripsForReg(car.regnbr)">{{ car.regnbr }}</td>
                                <td>{{ car.brand }}</td>
                                <td>{{ car.kilometers }} km</td>

                                <td v-if="car.inne === true"><input type="button" value="Take" @click="takeCar(index)"
                                        class="btn btn-outline-success"></td>
                                <td v-else><input type="button" value="Return" @click="returnCar(index)"
                                        class="btn btn-outline-dark"></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div class="col-sm">
                    <TripManagement v-if="currentCar" v-bind:car="currentCar" class="ms-4 p-2"></TripManagement>
                    <RentalInformation v-else class="ms-4 p-2"></RentalInformation>
                </div>
            </div>

        </div>

        <div class="row pt-5 pb-5">
            <div class="col">
                <CarManagement ></CarManagement>
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
