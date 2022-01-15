<template>
  <div style="width: 100%">
    <div id="bg">
      <img src="static/wood_background.jpg" alt="">
    </div>
    <navbar></navbar>
    <div class="container">
      <div class="row">
        <div class="col-lg-2" style="padding-top: 50px"/>
        <div class="col-lg-8" style="padding-top: 50px">
          <b-card
            title="Profile"
            img-src="https://picsum.photos/600/300/?image=25"
            img-alt="Image"
            img-top
            tag="article"
            style="max-width: 20rem;"
            class="mb-2"
          >
            <b-card-text>

              Name: {{user.displayName}}
              Email: {{user.email}}
            </b-card-text>

            <button  v-on:click="changePassword" type="submit" class="btn btn-primary">Send Password Reset Email</button>
          </b-card>
        </div>
        <div class="col-lg-2" style="padding-top: 50px"/>
      </div>
    </div>
  </div>
</template>

<script>

import Navbar from './Navbar'
import firebase from 'firebase/compat'

export default {
  name: 'Profile',
  components: {Navbar},
  computed: {
    user () {
      return this.$store.getters['firebase/getUser']
    }
  },
  methods: {
    changePassword: function () {
      firebase.auth().sendPasswordResetEmail(this.user.email)
    }
  }
}
</script>

<style scoped>

</style>
