<template>
  <div class="home">
    <div class="overlay-content">
      <div class="centered">
        <img style="width: 100%;" src="/assets/images/hero_text.png" alt="">
        <div class="tip-label">
          Leave a tip:
        </div>
        <div class="search-field">
          <img class="search-img" src="assets/images/search_icon.png" alt="" srcset="">
          <input placeholder="busker" v-model="searchText" @input="onSearchTextChange" class="search-input" type="text">
        </div>
        <div style="position: absolute; width: 50%; margin: auto;" v-if="searchResults">
            <div class="search-result" v-for="result in searchResults" :key="result.id" v-on:click="profilePressed(result)">
              <div style="display: flex;">
                <img style="width: 40px; height: 40px; border-radius: 20px; object-fit: contain;" :src="result.logo" alt="">
                <p style="margin: auto; margin-left: 8px;">{{ result.entertainer_name }}</p>
              </div>
              <hr style="margin-top: 12px; margin-bottom: 0px;"/>
            </div>
          </div>
        <div class="scan-field" v-on:click="goToTipPage()">
          <img class="search-img" style="height: 20px;" src="assets/images/camera_icon.png" alt="" srcset="">
          <p class="scan-button">Scan QR Code</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Home",
  components: {},
  data: function() {
    return {
      searchText : "",
      searchResults: [],
    }
  },
  methods: {
    goToTipPage: function() {
      this.$router.push({
        name: "Tip",
      })
    },
    profilePressed: function(profile) {
      this.$router.push({
        name: "Profile",
        params: { id: profile.uuid },
      });
    },
    onSearchTextChange: function() {
      if(this.searchText) {
        var formData = new FormData();
        formData.append("search_text", this.searchText);

        this.axios
        .post(this.$api_hostname + "api/search_profiles/", formData, {
          headers: {
            "Content-Type": "application/json",
          }
        })
        .then((response) => {
          if (response.data.error != null) {
            this.errorMessage = response.data.error;
          } else {
            this.searchResults = response.data.profiles;
          }
        })
        .catch(function (error) {
          console.log(error);
        });
      } else {
        this.searchResults = [];
      }
    }
  }
};
</script>

<style lang="scss" scoped>
@import "../scss/_variables.scss";

.home {
  position: relative;
  color: white;
  font-family: "Highway_Gothic", Helvetica, Arial;

  .overlay {
    position: absolute;
    height: 100%;
    width: 100%;
    object-fit: cover;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
  }

  .overlay-color {
    @extend .overlay;

    background-color: rgba($color: $primary_light, $alpha: 0.2);
  }

  .overlay-content {
    @extend .overlay;

    display: flex;

    .centered {
      margin: auto;
      width: 50%;

      @media (max-width: $breakpoint-mobile) {
        width: 100%;
      } 

      .tip-label {
        font-size: 28px;
        margin-top: 40px;
      }

      .search-field {
        .search-img {
          height: 32px;
          object-fit: contain;
          margin: auto;
        }

        .search-input {
          font-family: inherit;
          color: white;
          font-size: 32px;
          height: 100%; 
          width: 40%;
          flex-grow: 1;
          border: none;
          background-color: transparent;
          margin-left: 8px;
          text-align: center;

           @media (max-width: $breakpoint-mobile) {
            width: 100%;
          } 

          &::placeholder {
            color: white;
            opacity: 1;
          }
        }

        display: flex;
        height: 40px;
        margin: auto;
        margin-top: 40px;
        width: 50%;
        border-bottom: 2px solid white;

        @media (max-width: $breakpoint-mobile) {
            width: 80%;
          } 
      }

      .scan-field {
        @extend .search-field;

        width: 25%;
        cursor: pointer;
        border: none;

        .scan-button {
          margin: auto;
          margin-left: 8px;
        }
      }
    }
  }
}

.search-result {
  cursor: pointer;
  background-color: white;
  width: 50%;
  margin: auto;
  color: $primary;
  padding: 16px;
}
</style>
