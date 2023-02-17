<template>
    <div class="">
        <h3>Trip Statistics</h3>

</div>
</template>
  
<script>
import tripConnection from '../dbConnection.js'



export default {
    name: 'TripStatistics',
    components: {

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

    }
}
</script>