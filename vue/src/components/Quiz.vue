/* eslint-disable */

<template>
  <div class="hello">
    <div v-if="!this.authenticated && this.authenticateCheckComplete">
      <h1>{{ msg }}</h1>
      <a href="/api/twitter/auth">
        <div>
          <img src="@/assets/twitter.svg" width="30px" />
          <span class="signin">Signin with Twitter</span>
        </div>
      </a>
    </div>
    <div v-if="this.authenticated && this.authenticateCheckComplete">
      <h1>{{ welcome }}</h1>
      <button>Ask</button>
    </div>
    
    <!--
    <div v-if="this.signinGithub ==='Sign in with Github'">
      <button v-on:click="handleGithubLoginClick">
        <img src="@/assets/github.svg" width="30px" />
        <span class="user">{{signinGithub}}</span>
      </button>
    </div>
    <div v-else>{{signinGithub}}</div>
    -->
  </div>
</template>

<script>

import * as axios from 'axios';

export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
   data () {
    return {
      hand: null,
      loading: true,
      errored: null,
      signin: "Sign in with Twitter",
      signinGithub: "Sign in with Github",
      authenticated: false,
      authenticateCheckComplete: false, 
      welcome: '',
    }
  },
  mounted(){
    this.handleTwitterLoginClick();
  },
  methods: {
      handleTwitterLoginClick: function(event){

      const self = this;
      const url = (document.domain === "127.0.0.1") ? 'http://127.0.0.1:5000/api/twitter/auth' : 'https://probe.now.sh/api/twitter/auth'

      //console.log("fetching ", url)

      axios.get(url).then( response => {

            console.log("Twitter response: ", response.data);
            if (response.data.screen_name) {
              self.welcome = response.data.screen_name + ", shall we begin?";
              self.authenticated = true;
            }            
          }
        ).catch(error => {

          console.log("Twitter error: ", error);         
          this.errored = error
        }).finally(() => self.authenticateCheckComplete = true);

    },
    handleGithubLoginClick: function(event){

      const self = this;
      const url = (document.domain === "127.0.0.1") ? 'http://127.0.0.1:5000/api/github/auth' : 'https://probe.now.sh/api/github/auth'

      console.log("fetching ", url)

      axios.get(url).then( response => {

            //
            console.log("Github response: ", response.data);

            //self.signin = "welcome " + response.data.screen_name;
           
          }
        ).catch(error => {

          console.log("Github error: ", error);
         
          this.errored = error
        }).finally(() => this.loading = false);

    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

h1 {
  font-family: 'IM Fell English SC', serif;
  color: #e8e8e8;
  font-size: 60px;
}

h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #00a2f8;
  text-decoration: none;
}
:focus {
  outline: none;
}

.signin{
  color: #00a2f8;
  font-weight: bold;
}

button {
  padding: 10px;
  background: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  pointer-events: all;
  margin: 10px;
  color: #999;
  font-size: 18px;
  font-family: 'IM Fell English SC', serif;
  font-weight: bold;
}

.user {
  font-size: 20px;
  color: #00a2f8;
}

</style>
