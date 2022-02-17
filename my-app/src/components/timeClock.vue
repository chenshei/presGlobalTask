<template>
  <div class="hello">
    <pageheader />
    <div class="container mrgnbtm">
        <div class="row">
            <div class="col-md-11">
                <shiftUpdate @startClick="startShift($event)" />
            </div>
        </div>
    </div>
    <div class="container mrgnbtm">
    <div class="row">
        <div class="col-md-11">
            <button type="button" @click="clickOLog"  class="log-btn">Shifts Log</button>
        </div>
    </div>
    <div  class="row">
        <div class="col-md-11">
          <shiftsLog id="firstTable" v-if="logclick" />  
        </div>
    </div>
    </div>
  </div>
</template>

<script>
import pageheader from './Header.vue'
import shiftUpdate from './shiftUpdate.vue'
import shiftsLog from './shiftsLog.vue'
import { createNewShift } from '../services/UserService'

export default {
  name: 'timeClock',
  components: {
    pageheader,
    shiftUpdate,
    shiftsLog
  },
  data() {
    return {
      logclick: false,
      users: [],
      numberOfUsers: 0
    }
  },
  methods: {
    //get the data from the shiftUpdate component and send it to the server
    startShift(data) {
        createNewShift(data)
        console.log(data)
    },
    //will change the logclick to the opposite value so the log will be visible or not
    clickOLog() {
      this.logclick = !this.logclick
    }
  }
}
</script>