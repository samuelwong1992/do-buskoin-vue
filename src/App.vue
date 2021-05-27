<template>
  <div id="app">
    <div id="nav">
      <div style="height: 100%; flex-grow: 1;">
        <img src="/assets/images/buskoin_white_logo.png" alt="" srcset="">
      </div>
      <div style="padding-right: 20%; height: 100%; display: flex;">
        <router-link class="router-link" to="/home">Home</router-link>
        <router-link class="router-link" v-if="this.$store.state.token" to="/profile">Profile</router-link>
        <router-link class="router-link" v-if="!this.$store.state.token" to="/sign-up">Sign Up</router-link>
        <router-link class="router-link" v-if="!this.$store.state.token" to="/login">Login</router-link>
        <router-link class="router-link" v-if="this.$store.state.token" to="/logout">Logout</router-link>
      </div>
    </div>
    <router-view class="rv" />
  </div>
</template>

<script>
export default {
  name: "App",
};
</script>


<style lang="scss">
@import "scss/_variables.scss";

@font-face {
  font-family: "Cubano";
  src: local("Cubano"),
   url(./fonts/Cubano/Cubano-Regular.ttf) format("truetype");
}

@font-face {
  font-family: "Highway_Gothic";
  src: local("Highway_Gothic"),
   url(./fonts/Highway_Gothic/HWYGOTH.TTF) format("truetype");
}

* {
  margin: 0px;
  padding: 0px;
}
#app {
  background-color: black;
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  height: 48px;
  background-color: black;
  display: flex;

  img {
    height: 100%;
    object-fit: contain;
  }

  a {
    font-weight: bold;
    color: #FFF;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}

.rv {
  flex-grow: 1;
}

.error-text {
  color: red;
  font-size: 2rem;
  font-weight: bold;
}

.secondary-button {
  height: 40px;
  margin: auto;
  margin-top: 16px;
  margin-right: 0px;
  width: 80px;
  text-align: center;
  border: 2px $primary solid;
  border-radius: 4px;
  color: $primary;
  cursor: pointer;
  &:focus {
    outline: 0;
  }
}

.router-link {
  flex-grow: 1;
  margin: auto;
  padding-left: 8px;
  padding-right: 8px;
  text-decoration: none;
}

.primary-button {
  @extend .secondary-button;

  background-color: $primary;
  border: 2px white solid;
  color: white;
}
</style>
