<template>
<div>
  <b-modal v-model="showModal" :visible="showModal" hide-footer>
    <template #modal-title>
      <div v-if="win">You Won!</div>
      <div v-if="lose">You lost!</div>
    </template>
    <div class="d-block text-center">
      <h3 v-if="win">Congratulations you beat the game!</h3>
      <h3 v-if="lose">You lost! Try again!</h3>
    </div>
    <b-button class="mt-3" block @click="closeEventModal()">Close Me</b-button>
  </b-modal>
</div>
</template>

<script>
export default {
  name: 'EventModal',
  computed: {
    showModal () {
      return this.$store.getters['gameData/getWin'] || this.$store.getters['gameData/getGameOver']
    },
    win () {
      return this.$store.getters['gameData/getWin']
    },
    lose () {
      return this.$store.getters['gameData/getGameOver']
    }
  },
  methods: {
    closeEventModal: function (event) {
      this.$store.dispatch('gameData/resetGame')
    }
  }
}
</script>

<style scoped>

</style>
