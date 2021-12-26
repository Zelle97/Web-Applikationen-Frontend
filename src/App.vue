<template>
  <div id="app" class="main-container">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style lang="less">
body {
  //background: url("@{base-url}/assets/images/siteBackground.jpg");
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.main-container {
  display: flex;
  justify-content: center;
  min-height: 100%;
  min-width: 100%;
}

//-------------------------Controls

.main-header {
  text-align: center;
  margin: 8px;
}

select[class*="color-picker-"] {
  margin-bottom: 8px;
}

.control-item {
  text-align: center;
  justify-content: center;
  padding: 12px;
}

//-------------------------Gamfield
@flexMargin: 4px;
@flexBoxSizing: 12px;

.gamefield {
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: space-around;
  line-height: @flexBoxSizing;
}

.gamefieldrow {
  margin: @flexMargin;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  //align-items: center;
  flex-grow: 1;
}

.gamefield .gamefieldrow .gamepanel {
  margin: @flexMargin;
  flex-basis: @flexBoxSizing;
  flex-grow: 1;
  border: solid black;
  border-radius: 0.3em;
}

.gamefield .gamefieldrow .correctColorPanel {
  text-align: center;
  margin: @flexMargin;
  flex-basis: calc(@flexBoxSizing/2);
  flex-grow: 1;
  border: dotted black;
  border-radius: 0.3em;
}

.gamefield .gamefieldrow .correctPositionPanel {
  text-align: center;
  margin: @flexMargin;
  flex-basis: calc(@flexBoxSizing/2);
  flex-grow: 1;
  border: dotted black;
  border-radius: 0.3em;
}

//-------------------------Background Colors

.bg-color-black {
  background-color: black !important;
}

.bg-color-red {
  background-color: red !important;
}

.bg-color-green {
  background-color: green !important;
}

.bg-color-brown {
  background-color: saddlebrown !important;
}

.bg-color-yellow{
  background-color: yellow !important;
}

.bg-color-blue {
  background-color: blue !important;
}

.bg-color-white {
  background-color: white !important;
}

.bg-color-orange {
  background-color: orange !important;
}

</style>
