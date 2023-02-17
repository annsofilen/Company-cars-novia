<template>
    <div class="min-vh-100 ms-4">
        <HelloWorld msg="Cars" class=" text-center  pt-4"/>


        <div class="container">
            <div class="card card-body mt-2 mb-2">
                <div class="row pt-2 pb-2">
                    <p class="ms-4">In this app you can reserve and return cars of the company</p>
                </div>
                <div class="row">
                    <div class="col-7 pt-2 pb-2">
                        <table class="table table-light table-hover table borderless pt-2 pb-2">
                            <thead>
                                <tr>
                                    <th scope="col">Registration number</th>
                                    <th scope="col">Car brand</th>
                                    <th scope="col">Kilometers</th>

                                    <th scope="col">button</th>

                                </tr>
                            </thead>
                            <tbody class="table-group-divider">
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
                    <div class="col-5">
                        <TripManagement v-if="currentCar" v-bind:car="currentCar" class="ms-4 p-2"></TripManagement>
                        <RentalInformation v-else class="ms-4 p-2"></RentalInformation>
                    </div>
                </div>

            </div>

            <div class="card card-body mt-2 pb-2">
                <div class="row ">
                    <div class="col ">
                        <CarManagement w-100></CarManagement>
                    </div>
                </div>
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
