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

.controls {
  align-items: center;
  justify-content: center;
  display: flex;
}

.control-item {
  text-align: center;
  justify-content: center;
  padding: 12px;
}

.color-input-row {
  padding-top: 30px;
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

.uppergamefieldrow {
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

.gamefield .uppergamefieldrow .upperGamePanel {
  margin: @flexMargin;
  flex-basis: @flexBoxSizing;
  flex-grow: 1;
}

.gamefield .gamefieldrow .correctColorPanel {
  align-items: center;
  justify-content: center;
  display: flex;
  margin: @flexMargin;
  flex-basis: calc(@flexBoxSizing/2);
  flex-grow: 1;
  border: thin solid;
  border-radius: 0.3em;
  background-color: white;
}

.gamefield .gamefieldrow .correctPositionPanel {
  margin: @flexMargin;
  align-items: center;
  justify-content: center;
  display: flex;
  flex-basis: calc(@flexBoxSizing/2);
  flex-grow: 1;
  border: thin solid;
  border-radius: 0.3em;
  background-color: white;
}

.gamefield .uppergamefieldrow .uppercorrectColorPanel {
  text-align: center;
  font-size: 20px;
  font-weight: bold;
  line-height: 120%;
  margin: @flexMargin;
  flex-basis: calc(@flexBoxSizing/2);
  flex-grow: 1;
}

.gamefield .uppergamefieldrow .uppercorrectPositionPanel {
  text-align: center;
  font-size: 20px;
  font-weight: bold;
  line-height: 120%;
  margin: @flexMargin;
  flex-basis: calc(@flexBoxSizing/2);
  flex-grow: 1;
}

//-------------------------Background Colors
.bg-color- {
  background-color: white;
  opacity: 0.5;
}

.bg-color-black {
  background-color: black;
}

.bg-color-red {
  background-color: red;
}

.bg-color-green {
  background-color: green;
}

.bg-color-brown {
  background-color: saddlebrown;
}

.bg-color-yellow{
  background-color: yellow;
}

.bg-color-blue {
  background-color: blue;
}

.bg-color-white {
  background-color: white;
}

.bg-color-orange {
  background-color: orange;
}

</style>
