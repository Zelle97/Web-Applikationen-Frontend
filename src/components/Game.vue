<template>
    <div style="width: 100%">
      <div id="bg">
        <img src="static/wood_background.jpg" alt="">
      </div>
      <navbar></navbar>
      <div class="container">
      <div class="row">
        <div class="col-lg-6" style="padding-top: 50px">
          <div class="gamefield">
            <div class="uppergamefieldrow">
              <div class="uppercorrectColorPanel">
                Correct Colors:
              </div>
              <div class="upperGamePanel">
              </div>
              <div class="upperGamePanel">
              </div>
              <div class="upperGamePanel">
              </div>
              <div class="upperGamePanel">
              </div>
              <div class="uppercorrectPositionPanel">
                Correct Positions:
              </div>
            </div>
            <div v-for="(row, index) in gameData" v-bind:key="'row-'+index" class="gamefieldrow">
              <div class="correctColorPanel">
                {{row.correctColors}}
              </div>
              <div v-for="(color, cIndex) in row.attempt" v-bind:key="'row-'+index+'-color-'+cIndex" class="gamepanel" v-bind:class="[`bg-color-${color.color}`]">
              </div>
              <div class="correctPositionPanel">
                {{row.correctPositions}}
              </div>
            </div>
          </div>
        </div>
        <div class="col-lg-6 controls">
          <div class="">
            <div class="row color-input-row">
              <color-input index="0"></color-input>
              <color-input index="1"></color-input>
              <color-input index="2"></color-input>
              <color-input index="3"></color-input>
            </div>
            <div class="row">
              <div class="col-lg-12 col-sm control-item">
                <button type="button" class="btn btn-success" v-on:click="submitTurn">Submit</button>
             </div>
            </div>
          </div>
        </div>
      </div>
      <event-modal></event-modal>
    </div>
    </div>
</template>

<script>
import Navbar from './Navbar'
import EventModal from './EventModal'
import ColorInput from './ColorInput'
export default {
  name: 'Game',
  components: {ColorInput, EventModal, Navbar},
  computed: {
    gameData () {
      return this.$store.getters['gameData/getGamefield']
    }
  },
  methods: {
    submitTurn: function () {
      this.$store.dispatch('gameData/newTurn')
    }
  }
}
</script>

<style scoped>
#bg {
  position: fixed;
  top: 10%;
  left: 0;
  width: 100%;
  height: 100%;
}
#bg img {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  margin: auto;
  min-width: 50%;
  min-height: 50%;
}
</style>
