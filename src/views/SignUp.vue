<template>
  <div class="sign-up">
    <div class="sign-up-form">
      <span style="margin-bottom: 16px;" class="small-logo"/>

      <p>Email Address</p>
      <input v-model="email" type="text" />

      <p>Password</p>
      <input v-model="password" type="password" />

      <p>Confirm Password</p>
      <input v-model="password2" type="password" />

      <button v-on:click="signUpPressed">Begin Sign Up</button>

      <p v-if="errorMessage" class="error-message">{{ errorMessage }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "SignUp",
  data: function () {
    return {
      email: "",
      password: "",
      password2: "",
      errorMessage: "",
    };
  },
  components: {},
  methods: {
    signUpPressed: function () {
      var formData = new FormData();

      formData.append("email", this.email);
      formData.append("password", this.password);

      this.axios
        .post(this.$api_hostname + "api/sign-up/", formData, {
          headers: {
            "Content-Type": "application/json",
          },
        })
        .then((response) => {
          if (response.data.error != null) {
            this.errorMessage = response.data.error;
          } else {
            if (response.data.url != null) {
              window.location = response.data.url;
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

.sign-up {
  display: flex;

  .sign-up-form {
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
