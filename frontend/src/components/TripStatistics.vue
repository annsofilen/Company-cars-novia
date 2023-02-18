<template>
    <div class="">
        <h3>Trip Statistics</h3>
        <h4>Trips per month</h4>
        <Bar id="my-chart-id" :options="chartOptions" :data="chartData" />


</div>
</template>
  
<script>






import tripConnection from '../dbConnection.js'
import { Bar } from 'vue-chartjs'
import { Chart as ChartJS, Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale } from 'chart.js'

ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale)


export default {
    name: 'TripStatistics',
    components: {
        Bar
    },
    async mounted() {
        this.trips = await tripConnection.getDBTrips();
        //console.log(this.trips)
        this.tripCount = this.trips.length
        this.getTripsPerMonths()
        console.log(this.tripsPerMonth.january)
    },
    data() {
        return {
            trips: [],
            tripCount: 0,
            tripsPerMonth: {
                january: 0,
                february: 0,
                march: 0,
                april: 0,
                may: 0,
                june: 0,
                july: 0,
                august: 0,
                september: 4,
                october: 0,
                november: 0,
                december: 0
            },

            chartData: {
                labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
                datasets: [{
                    data: [
                        this.getTripsPerMonths.january,
                        this.getTripsPerMonths.february,
                        this.getTripsPerMonths.march,
                        this.getTripsPerMonths.april,
                        this.getTripsPerMonths.may,
                        this.getTripsPerMonths.june,
                        this.getTripsPerMonths.july,
                        this.getTripsPerMonths.august,
                        this.getTripsPerMonths.september,
                        this.getTripsPerMonths.october,
                        this.getTripsPerMonths.november,
                        this.getTripsPerMonths.december,
                    ]
                }]
            },
            chartOptions: {
                responsive: true
            },

        }
    }
    ,



    methods: {
        getTripsPerMonths() {
            let dateStatistics = {
                january: 0,
                february: 0,
                march: 0,
                april: 0,
                may: 0,
                june: 0,
                july: 0,
                august: 0,
                september: 0,
                october: 0,
                november: 0,
                december: 0
            }
            this.trips.forEach(trip => {

                //console.log(trip.tripdate + '  ' + typeof(trip.tripdate))
                if (new Date(trip.tripdate).getMonth() == 1) {
                    dateStatistics.january++
                } else if (new Date(trip.tripdate).getMonth() == 2) {
                    dateStatistics.february++
                } else if (new Date(trip.tripdate).getMonth() == 3) {
                    dateStatistics.march++
                } else if (new Date(trip.tripdate).getMonth() == 4) {
                    dateStatistics.april++
                } else if (new Date(trip.tripdate).getMonth() == 5) {
                    dateStatistics.may++
                } else if (new Date(trip.tripdate).getMonth() == 6) {
                    dateStatistics.june++
                } else if (new Date(trip.tripdate).getMonth() == 7) {
                    dateStatistics.july++
                } else if (new Date(trip.tripdate).getMonth() == 8) {
                    dateStatistics.august++
                } else if (new Date(trip.tripdate).getMonth() == 9) {
                    dateStatistics.september++
                } else if (new Date(trip.tripdate).getMonth() == 10) {
                    dateStatistics.october++
                } else if (new Date(trip.tripdate).getMonth() == 11) {
                    dateStatistics.november++
                } else if (new Date(trip.tripdate).getMonth() == 12) {
                    dateStatistics.december++
                }

            });
            console.log(dateStatistics)
            this.tripsPerMonth = dateStatistics
            return dateStatistics;
        },


    },

}
</script>