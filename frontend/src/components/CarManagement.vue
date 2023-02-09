<template>
    <div class="ms-4">
        <h1>Car Management</h1>
        <div class="container">
            <div class="row">
                <div class="col-sm">
                    <h2>Add a car</h2>
                    <form action="" class="ms-4 ">
                        <label for="regnbr" class="form-label">Registration number:</label>
                        <input type="text" id="regnbr" class="form-control">
                        <label for="brand" class="form-label">Brand:</label>
                        <input type="text" id="brand" class="form-control">
                        <label for="km" class="form-label">Kilometers:</label>
                        <input type="text" id="km" class="form-control ">
                        <input type="button" value="Add car" class="btn btn-outline-dark">
                    </form>
                </div>
                <div class="col-sm">
                    <h2>Remove a car</h2>
                    <select class="form-select" >
                        <option value="">Select car</option>
                        <option value="" v-for="(car, index) in cars" :key="index">{{ car.regnbr }}</option>
                    </select>
                    <button class="alert alert-danger mt-2">Delete</button>
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
