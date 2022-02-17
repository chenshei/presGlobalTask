<template>
  <table >
    <thead>
      <tr>
        <th>ID</th>
        <th>shift start time</th>
        <th>shift end tome</th>
        <th>work hours</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="shift in shifts" :key="shift.first_name">
        <td>{{shift.Userid}}</td>
        <td>{{shift.dateString}}</td>
        <td>{{shift.dateEndingString}}</td>
        <td>{{shift.time}}</td>
      </tr>
    </tbody>
  </table>
</template>

<script>
import { getLog } from '../services/UserService'

export default {
  name: 'shiftsLog',
  data() {
      return {
          shifts: []
      }
  },
  methods:{
    //get log sendes a request to the server and returns the log
    getLog(){
      getLog().then(response => {
      console.log('hi there')
      this.shifts = response
      })
    }
  },
  mounted() {
    this.getLog();
  }
}
</script>