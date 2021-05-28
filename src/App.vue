<template>
  <div id="app">
    <div id="nav">
      <div style="height: 100%; flex-grow: 1;">
        <img src="/assets/images/buskoin_white_logo.png" alt="" srcset="">
      </div>
      <div class="nav-contents">
        <router-link class="router-link" to="/home">Home</router-link>
        <router-link class="router-link" v-if="this.$store.state.token" to="/profile">Profile</router-link>
        <router-link class="router-link" v-if="!this.$store.state.token" to="/sign-up">Sign Up</router-link>
        <router-link class="router-link" v-if="!this.$store.state.token" to="/login">Login</router-link>
        <router-link class="router-link" v-if="this.$store.state.token" to="/logout">Logout</router-link>
      </div>
    </div>
    <div class="underlay">
      <img class="underlay-object" :src="backgroundImage" alt="" srcset="">
      <router-view class="underlay-object"/>
    </div>
    
  </div>
</template>

<script>
export default {
  name: "App",
  data: function() {
    return {
      backgroundImages: [
        "assets/images/bg_image_1.jpg",
        "assets/images/bg_image_2.jpg",
        "assets/images/bg_image_3.jpg",
      ],
      backgroundImage: null,
    }
  },
  methods: {
    getRandomBackground: function() {
      return this.backgroundImages[Math.floor(Math.random()*this.backgroundImages.length)]
    },
  }, 
  mounted: function() {
    this.backgroundImage = this.getRandomBackground();
  }
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

  .nav-contents {
    padding-right: 20%;
    height: 100%;
    display: flex;

    @media (max-width: $breakpoint-mobile) {
      padding-right: 8px;
    } 
  }
}

.underlay {
  flex-grow: 1;
  position: relative;

  .underlay-object {
    position: absolute;
    height: 100%;
    width: 100%;
    object-fit: cover;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
  }
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

.small-logo {
  height: 40px;
  width: 40px;
  object-fit: contain;
  margin: auto;
  background-image: url("/assets/images/buskoin_white_icon.png");
  background-size: contain;
}
</style>
