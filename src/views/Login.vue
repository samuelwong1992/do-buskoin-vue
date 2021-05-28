<template>
  <div class="login">
    <div class="login-form">
      <span style="margin-bottom: 16px;" class="small-logo"/>

      <p>Email Address</p>
      <input v-model="email" type="text" />

      <p>Password</p>
      <input v-model="password" type="password" />

      <button v-on:click="loginPressed">Login</button>

      <p v-if="errorMessage" class="error-message">{{ errorMessage }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "Login",
  data: function () {
    return {
      email: "",
      password: "",
      errorMessage: "",
    };
  },
  components: {},
  mounted: function () {
    this.email = this.$route.params.email;
  },
  methods: {
    loginPressed: function () {
      var formData = new FormData();

      formData.append("username", this.email);
      formData.append("password", this.password);

      this.axios
        .post(this.$api_hostname + "api/login/", formData, {
          headers: {
            "Content-Type": "application/json",
          },
        })
        .then((response) => {
          if (response.data.error != null) {
            this.errorMessage = response.data.error;
          } else {
            if (response.data.token != null) {
              this.$store.commit("LOGIN_SUCCESS", response.data.token);
              this.$router.push({ name: "Profile" });
            } else {
              this.errorMessage = "Something went wrong...";
            }
          }
          console.log(response.data);
        })
        .catch(function (error) {
          console.log(error);
        });
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../scss/_variables.scss";

.login {
  display: flex;

  .login-form {
    display: flex;
    border-radius: 8px;
    flex-direction: column;
    background-color: $on_bg;
    margin: auto;
    padding: 24px;

    .title {
      text-align: center;
      font-weight: 500;
      margin-bottom: 16px;
    }

    .error-message {
      font-size: 0.8rem;
      color: red;
      text-align: end;
      margin-top: 4px;
    }

    p {
      text-align: left;
      color: white;
      margin-bottom: 8px;
    }

    input {
      margin-bottom: 16px;
      height: 28px;
      padding-left: 8px;
      padding-right: 8px;
      width: 240px;
    }

    button {
      height: 32px;
      background-color: white;
      border: none;
      margin-top: 8px;
      border-radius: 14px;
      color: $on_bg;
      cursor: pointer;
    }
  }
}
</style>
