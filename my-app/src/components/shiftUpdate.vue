<template>
  <div class="container">
    <div class="row">
        <div class="col-md-7 mrgnbtm">
        <h2>Shift update</h2>
            <form>
                <div class="row">
                    <div class="form-group col-md-6">
                        <label >Please enter your ID</label>
                        <input type="text" class="form-control" v-model="ID" name="userId"   placeholder="Full ID number" />
                    </div>
                </div>
                <button type="button" @click="startClick()"  class="start-btn">Start Shift</button>
                <button type="button"   class="end-btn">End Shift</button>
            </form>
             <div id="app">
                <p>Current Date and Time: {{currentDateTime()}}</p>
            </div>
        </div>
    </div>
    </div>
</template>

<script>
export default {
  name: 'shiftUpdate',
  data() {
    return {
        ID: ''
    }
  },
  methods: {
    //the start button was clicked startClick will save the the date of the event and will send it to timeclock.vue
    startClick() {
        const current = new Date();
        const startClick = {
            ID: this.ID,
            ClickDate: current.getFullYear()+'-'+(current.getMonth()+1)+'-'+current.getDate()+' '+current.getHours() + ":" + current.getMinutes() + ":" + current.getSeconds(),
            ClickTime: current.getTime()
        }
        this.$emit('startClick', startClick)
        this.clearForm();
    },
    
    currentDateTime() {
      const current = new Date();
      const date = current.getFullYear()+'-'+(current.getMonth()+1)+'-'+current.getDate();
      const time = current.getHours() + ":" + current.getMinutes() + ":" + current.getSeconds();
      const dateTime = date +' '+ time;
      
      return dateTime;
    },
    clearForm() {
        this.ID = ''
    }
  }
}


</script>