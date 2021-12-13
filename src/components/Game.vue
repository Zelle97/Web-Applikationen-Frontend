<template>
    <div class="container">
      <navbar></navbar>
      <div class="row">
        <div class="col-lg-6">
          <h2 class="main-header">Gamefield</h2>
          <div class="gamefield">
            <div v-for="(row, index) in gameData" v-bind:key="'row-'+index" class="gamefieldrow">
              <div class="correctColorPanel">
                Correct Colors: {{row.correctColors}}
              </div>
              <div v-for="(color, cIndex) in row.attempt" v-bind:key="'row-'+index+'-color-'+cIndex" class="gamepanel" v-bind:class="[`bg-color-${color.color}`]">
              </div>
              <div class="correctPositionPanel">
                Correct Positions: {{row.correctPositions}}
              </div>
            </div>
          </div>
        </div>
        <div class="col-lg-6">
          <h2 class="main-header">Control Buttons</h2>
          <div class="controls">
            <div class="row">
              <color-input index="0"></color-input>
              <color-input index="1"></color-input>
              <color-input index="2"></color-input>
              <color-input index="3"></color-input>
            </div>
            <div class="row">
              <div class="col-lg-12 col-sm-4 control-item">
                <button type="button" class="btn btn-primary" v-on:click="submitTurn">Submit</button>
              </div>
              <div class="col-lg-6 col-sm-4 control-item">
                <button type="button" class="btn btn-secondary" onclick="submitUndo()">Undo</button>
              </div>
              <div class="col-lg-6 col-sm-4 control-item">
                <button type="button" class="btn btn-secondary" onclick="submitRedo()">Redo</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <event-modal></event-modal>
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

</style>
