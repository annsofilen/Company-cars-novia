<template>
    <div class="ms-4">
        <h1 ms-4 p-2>Trips</h1>

        <div class="card card-body ms-4 p-2">



            <div class="container ms-4 p-2">
                <div>
                    <div>
                        <form class="row" action="">
                            <input type="text" class="col ps-2 form-control" placeholder="Registration number"
                                aria-label="Username" aria-describedby="basic-addon1" v-model="this.search"
                                @keyup.enter="setSearch">
                            <input type="button" value="Search" @click="setSearch"
                                class="col p-2 btn btn-outline-secondary">
                        </form>
                    </div>

                </div>
            </div>


            <div class="container ms-4 p-2">
                <div class="row">
                    <div class="col p-2">
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
            trips: [],
            searchRegNbr: '',
            search: ''
        }
    }
    ,
    async mounted() {
        if (this.searchRegNbr == '') {
            this.trips = await tripConnection.getDBTrips();
        }
    },
    methods: {
        async setSearch() {
            this.searchRegNbr = this.search
            this.trips = await tripConnection.getTripReg(this.searchRegNbr)

        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style></style>
