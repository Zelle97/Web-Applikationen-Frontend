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
            title="Welcome to Mastermind"
            img-src="https://picsum.photos/600/300/?image=25"
            img-alt="Image"
            img-top
            tag="article"
            style="max-width: 20rem;"
            class="mb-2"
          >
            <b-card-text>
              <p><span style="font-size: medium;">You are the codebreaker: Try to guess the pattern in order and color.</span></p>

              <div class="help-main-container">
                <div style="text-align: center;">
                  <p><span style="font-size: medium;">For more informations see <a href="https://de.wikipedia.org/wiki/Mastermind_(Spiel)" target="_blank">Mastermind Wiki</a>.</span></p>

                  <p><span style="font-size: medium;">There are three different difficulties:</span></p>
                </div>
                <ul type="disk, "> <span style="font-size: medium;">
                  <li>easy &#8594; 10 turns</li>
                  <li>medium &#8594; 8 turns</li>
                  <li>mastermind &#8594; 7 turns</li>
                </span>
                </ul>

              </div>
              <div>
                <div style="text-align: center;">
                  <span style="font-size: medium;">
                    <p>Each guess is made by placing a row of code pegs on the decoding board.</p>
                    <p>Once placed, you are provided with some feedback on the right side of the row with your guess. Good Luck!!</p>
                  </span>
                </div>
              </div>
            </b-card-text>
          </b-card>
        </div>
        <div class="col-lg-2" style="padding-top: 50px"/>
      </div>
    </div>
  </div>
</template>

<script>
import Navbar from './Navbar'

export default {
  name: 'Help',
  components: {Navbar}

}
</script>

<style scoped>
a:link {
  color: green;
  background-color: transparent;
  text-decoration: none;
}

a:visited {
  color: pink;
  background-color: transparent;
  text-decoration: none;
}

a:hover {
  color: red;
  background-color: transparent;
  text-decoration: underline;
}

a:active {
  color: yellow;
  background-color: transparent;
  text-decoration: underline;
}
</style>
