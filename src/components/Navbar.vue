<template>
  <div>
    <b-navbar toggleable="lg" type="dark" variant="dark">
      <b-navbar-brand href="#"><router-link style="text-decoration: none; color: inherit;" to="/game">MasterMind</router-link></b-navbar-brand>
      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
          <b-nav-item href="#"><router-link style="text-decoration: none; color: inherit;" to="/profile">Profile</router-link></b-nav-item>
        </b-navbar-nav>
        <b-navbar-nav>
          <b-nav-item href="#"><router-link style="text-decoration: none; color: inherit;" to="/help">Help</router-link></b-nav-item>
        </b-navbar-nav>
        <b-navbar-nav class="ml-auto">
<!--          <b-nav-item-dropdown text="Action" right>-->
<!--            <b-dropdown-item href="#">Undo</b-dropdown-item>-->
<!--            <b-dropdown-item href="#">Redo</b-dropdown-item>-->
<!--          </b-nav-item-dropdown>-->
          <b-nav-item-dropdown text="Difficulty">
            <b-dropdown-item v-on:click="changeDifficulty('easy')">Easy</b-dropdown-item>
            <b-dropdown-item v-on:click="changeDifficulty('medium')">Medium</b-dropdown-item>
            <b-dropdown-item v-on:click="changeDifficulty('mastermind')">Mastermind</b-dropdown-item>
          </b-nav-item-dropdown>
          <b-navbar-nav>
            <b-nav-item v-on:click="logoutUser">Log out</b-nav-item>
          </b-navbar-nav>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>

<script>
import firebase from 'firebase/compat'

export default {
  name: 'Navbar',
  methods: {
    logoutUser: function () {
      this.$store.dispatch('firebase/logoutUser')
      this.$router.push('/')
      firebase.auth().signOut().catch(function (error) {
        console.log(error)
      })
    },
    changeDifficulty: function (difficulty) {
      this.$store.dispatch('gameData/changeDifficulty', difficulty)
    }
  }
}
</script>
