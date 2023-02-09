<template>
    <div class="ms-4">
        <h1>Car Management</h1>
        <div class="container">
            <div class="row">
                <div class="col-sm">
                    <h2>Add a car</h2>
                </div>
                <div class="col-sm">
                    <h2>Remove a car</h2>
                    <select>
                        <option value="">Select car</option>
                        <option value="" v-for="(car, index) in cars" :key="index">{{ car.regnbr }}</option>
                    </select>
                    <button>Delete</button>
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

            cars: [],

        }
    },
    async mounted() {
        this.cars = await dbConnection.getDBCars();
    },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>

</style>
