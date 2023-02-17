<template>
    <div class="ms-4">

        <div class="container">

            <h2 class="p-1">Car Management</h2>
            <p class="p-1">Add and remove cars</p>

            <div class="row grid gap-3">
                <div class="p-2 g-col-6">
                    <h3 class="p-1">Add a car</h3>
                    <form action="" class="mb-3">

                        <input type="text" id="regnbr" class="form-control mt-2" placeholder="registration number"
                            v-model="car.regnbr">

                        <input type="text" id="brand" class="form-control mt-2" placeholder="brand" v-model="car.brand">

                        <input type="text" id="km" class="form-control mt-2" placeholder="Kilometers"
                            v-model="car.kilometers">
                        <input type="button" value="Add car" class="btn btn-outline-success mt-2" @click="addCar">
                    </form>
                </div>
                <div class="p-2 g-col-6">
                    <h3 class="p-1">Remove a car</h3>
                    <input type="text" id="todelete" class="form-control mt-2" v-model="toDelete"
                        placeholder="Registration number">

                    <button class="btn btn-outline-danger mt-2 p-2" @click="deleteCar">Delete</button>
                </div>
            </div>


        </div>

</div>
</template>

<script>

import dbConnection from '../dbConnection';


export default {

    name: 'CarManagement',
    props: {
        msg: String
    }, data() {
        return {

            car: {
                regnbr: '',
                brand: '',
                kilometers: '',
                inne: true
            },
            cars: [],
            toDelete: ''


        }
    },
    async mounted() {
        this.cars = await dbConnection.getDBCars();
    },
    methods: {
        async addCar() {
            await dbConnection.postAddCar(this.car.regnbr, this.car.brand, this.car.kilometers, this.car.inne)
            this.car = {
                regnbr: '',
                brand: '',
                kilometers: '',
                inne: 'true'
            }
        },

        async deleteCar() {
            await dbConnection.postDeleteCar(this.toDelete)
            console.log("deleteing car: " + this.toDelete)
        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style></style>
