<template>
    <div class="container">
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <a class="navbar-brand" href="#">Mastermind</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
          <ul class="navbar-nav mr-auto">
            <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Difficulty
              </a>
              <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                <a class="dropdown-item" href="#" onclick="changeDifficulty('easy')">Easy</a>
                <a class="dropdown-item" href="#" onclick="changeDifficulty('medium')">Medium</a>
                <a class="dropdown-item" href="#" onclick="changeDifficulty('mastermind')">Mastermind</a>
              </div>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/help">Help</a>
            </li>
          </ul>
        </div>
      </nav>
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
              <div class="col-lg">
                <p style="font-size: 0.8em">Choose a Color:</p>
                <select class="form-select color-picker-0" aria-label="Choose a color" v-on:change="changeDropdownColor">
                  <option value="" selected disabled>Choose</option>
                  <option class="bg-color-brown" value="1">Brown</option>
                  <option class="bg-color-red" value="2">Red</option>
                  <option class="bg-color-green" value="3">Green</option>
                  <option class="bg-color-yellow" value="4">Yellow</option>
                  <option class="bg-color-blue" value="5">Blue</option>
                  <option class="bg-color-black" value="6">Black</option>
                  <option class="bg-color-white" value="7">White</option>
                  <option class="bg-color-orange" value="8">Orange</option>
                </select>
              </div>
              <div class="col-lg">
                <p style="font-size: 0.8em">Choose a Color:</p>
                <select class="form-select color-picker-1" aria-label="Choose a color" v-on:change="changeDropdownColor">
                  <option value="" selected disabled>Choose</option>
                  <option class="bg-color-brown" value="1">Brown</option>
                  <option class="bg-color-red" value="2">Red</option>
                  <option class="bg-color-green" value="3">Green</option>
                  <option class="bg-color-yellow" value="4">Yellow</option>
                  <option class="bg-color-blue" value="5">Blue</option>
                  <option class="bg-color-black" value="6">Black</option>
                  <option class="bg-color-white" value="7">White</option>
                  <option class="bg-color-orange" value="8">Orange</option>
                </select>
              </div>
              <div class="col-lg">
                <p style="font-size: 0.8em">Choose a Color:</p>
                <select class="form-select color-picker-2" aria-label="Choose a color" v-on:change="changeDropdownColor">
                  <option value="" selected disabled>Choose</option>
                  <option class="bg-color-brown" value="1">Brown</option>
                  <option class="bg-color-red" value="2">Red</option>
                  <option class="bg-color-green" value="3">Green</option>
                  <option class="bg-color-yellow" value="4">Yellow</option>
                  <option class="bg-color-blue" value="5">Blue</option>
                  <option class="bg-color-black" value="6">Black</option>
                  <option class="bg-color-white" value="7">White</option>
                  <option class="bg-color-orange" value="8">Orange</option>
                </select>
              </div>
              <div class="col-lg">
                <p style="font-size: 0.8em">Choose a Color:</p>
                <select class="form-select color-picker-3" aria-label="Choose a color" v-on:change="changeDropdownColor">
                  <option value="" selected disabled>Choose</option>
                  <option class="bg-color-brown" value="1">Brown</option>
                  <option class="bg-color-red" value="2">Red</option>
                  <option class="bg-color-green" value="3">Green</option>
                  <option class="bg-color-yellow" value="4">Yellow</option>
                  <option class="bg-color-blue" value="5">Blue</option>
                  <option class="bg-color-black" value="6">Black</option>
                  <option class="bg-color-white" value="7">White</option>
                  <option class="bg-color-orange" value="8">Orange</option>
                </select>
              </div>
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
    </div>
</template>

<script>
export default {
  name: 'Game',
  computed: {
    gameData () {
      return this.$store.getters['gameData/getGamefield']
    }
  },
  data () {
    return {
      colorMapArray: ['bg-color-brown', 'bg-color-red', 'bg-color-green', 'bg-color-yellow', 'bg-color-blue', 'bg-color-black', 'bg-color-white', 'bg-color-orange'],
      selectedColors: []
    }
  },
  methods: {
    changeDropdownColor: function (event) {
      let colorPickerElement = event.target
      const colorPickerRegExp = new RegExp('color-picker-[0-3]')

      let elementClasses = colorPickerElement.className
      let result = elementClasses.match(colorPickerRegExp)
      if (result.length !== 1) return
      for (let colorClass of this.colorMapArray) {
        document.getElementsByClassName(result[0])[0].classList.remove(colorClass)
      }
      this.selectedColors.push(this.colorMapArray[colorPickerElement.value - 1])
      document.getElementsByClassName(result[0])[0].classList.add(this.colorMapArray[colorPickerElement.value - 1])
    },

    submitTurn: function () {
      let pickedColors = []
      pickedColors.push(this.extractColorFromClassList(this.selectedColors[0]))
      pickedColors.push(this.extractColorFromClassList(this.selectedColors[1]))
      pickedColors.push(this.extractColorFromClassList(this.selectedColors[2]))
      pickedColors.push(this.extractColorFromClassList(this.selectedColors[3]))
      this.selectedColors = []

      let inputString = pickedColors[0].concat(' ', pickedColors[1], ' ', pickedColors[2], ' ', pickedColors[3])
      this.$store.dispatch('gameData/newTurn', inputString)
    },

    extractColorFromClassList (classList) {
      return classList.match(new RegExp('(?:bg-color-)(.*)'))[1]
    }
  }
}
</script>

<style scoped>

</style>
