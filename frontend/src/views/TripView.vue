<template>
    <div class="ms-4">
        <h1>Trips</h1>
        <div class="container">
            <div class="row">
                <div class="col">
                    <table class="table table-light table-striped table-hover table-sm ms-4">
                        <thead>
                            <tr>
                                <th scope="col">Registration number</th>
                                <th scope="col">Trip date</th>
                                <th scope="col">Driver</th>
                                <th scope="col">Kilometers</th>

                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="(trip, index) in trips" :key="index" scope="row">
                                <td>{{ trip.regnbr }}</td>
                                <td>{{ trip.tripdate }}</td>
                                <td>{{ trip.driver }} </td>
                                <td>{{ trip.kilometers }} km</td>

                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import tripConnection from '../dbConnection.js'

export default {
    name: 'TripView',
    props: {
        msg: String
    },
    data() {
        return {
            trips: []
        }
    }
    ,
    async mounted() {
        this.trips = await tripConnection.getDBTrips();
    },
    methods: {}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>

</style>
