<template>
    <div class="m-4 min-vh-100">

        <HelloWorld msg="Trips" class=" text-center pt-4" />


        <div class="card card-body pt-2 container">



            <div class="containerp-2">

                <form class="row" action="">
                    <div class="row">
                        <div class="col-6"><input type="text" class="p-2 form-control" placeholder="Registration number"
                                aria-label="Username" aria-describedby="basic-addon1" v-model="this.search"
                                @keyup.enter="setSearch"></div>
                        <div class="col-4"> <input type="button" value="Search" @click="setSearch"
                                class="col-3 p-2 btn btn-outline-secondary">
                        </div>
                    </div>

                </form>
            </div>



            <table class="table table-light table-hover table borderless p-2">
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

        <div class="card card-body pt-2 pb-4 mb-3 container">
            <TripStatistics></TripStatistics>
        </div>
</div>
</template>

<script>









import tripConnection from '../dbConnection.js'
import HelloWorld from '@/components/HelloWorld.vue'
import TripStatistics from '@/components/TripStatistics.vue'


export default {
    name: 'TripView',
    components: {
        HelloWorld,
        TripStatistics
    },

    props: {
        msg: String,

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

        },
        renderLineChart() {
            this.renderChart(this.chartData, this.chartOptions);
        }
    },
    watch: {
        chartData() {
            this.$nextTick(() => {
                this.renderLineChart();
            })
        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style></style>

