<template>
    <div class="ms-4">

        <div class="container">
            <div class="card card-body">
                <h2 class="ms-4">Car Management</h2>
                <p class="ms-4">Add and remove cars</p>

                <div class="row">
                    <div class="col-sm ">
                        <h3 class="ms-4">Add a car</h3>
                        <form action="" class="ms-4 ">
                            <label for="regnbr" class="form-label">Registration number:</label>
                            <input type="text" id="regnbr" class="form-control" v-model="car.regnbr">
                            <label for="brand" class="form-label">Brand:</label>
                            <input type="text" id="brand" class="form-control" v-model="car.brand">
                            <label for="km" class="form-label">Kilometers:</label>
                            <input type="text" id="km" class="form-control " v-model="car.kilometers">
                            <input type="button" value="Add car" class="btn btn-outline-success" @click="addCar">
                        </form>
                    </div>
                    <div class="col-sm p-2">
                        <h3 class="ms-2">Remove a car</h3>
                        <select class="form-select ms-1 p-2" v-model="this.toDelete">
                            <option value="">Select car</option>
                            <option :value="this.toDelete" v-for="(car, index) in cars" :key="index">{{
                                car.regnbr
                            }}</option>
                        </select>
                        <input type="text" id="todelete" class="form-control ms-1" v-model="toDelete"
                            placeholder="Registration number">

                        <button class="btn btn-outline-danger ms-1 p-2" @click="deleteCar">Delete</button>
                    </div>
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
<style>

</style>
