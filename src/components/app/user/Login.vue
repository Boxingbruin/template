<template>
  <div class="marginTop">
    <div class="card">
      <router-link to="/home" class="form-logo-center">
        <img
          src="../../../assets/form_logo.png"
          class="form-logo"
        />
      </router-link>
      <div class="card-container round-5">
        <div class="card-content">
          <p class="form-title">Sign In</p>
          <Form @submit="handleLogin" :validation-schema="schema">
            <div class="form-group">
              <label for="username" class="form-label">Username</label>
              <Field name="username" type="text" class="form-input round-3" />
              <ErrorMessage name="username" class="error-feedback" />
            </div>
            <div class="form-group">
              <label for="password" class="form-label">Password</label>
              <Field name="password" type="password" class="form-input round-3" />
              <ErrorMessage name="password" class="error-feedback" />
            </div>

            <div class="form-group">
              <button class="form-button round-3" :disabled="loading">
                <span
                  v-show="loading"
                  class="spinner-border spinner-border-sm"
                ></span>
                <span>Login</span>
              </button>
            </div>

            <div class="form-group">
              <div v-if="message" class="alert alert-danger" role="alert">
                {{ message }}
              </div>
            </div>
          </Form>
        </div>
      </div>
        <p class="form-separation-text">Dont have an account?</p>
        <div class="form-group">
          <router-link to="/register">
            <button class="form-button-dim round-3" :disabled="loading">
              Create Account
            </button>
          </router-link>
        </div>
    </div>
  </div>
</template>

<script>
import { Form, Field, ErrorMessage } from "vee-validate";
import * as yup from "yup";

export default {
  name: "Login",
  components: {
    Form,
    Field,
    ErrorMessage,
  },
  data() {
    const schema = yup.object().shape({
      username: yup.string().required("Username is required!"),
      password: yup.string().required("Password is required!"),
    });

    return {
      loading: false,
      message: "",
      schema,
    };
  },
  computed: {
    loggedIn() {
      return this.$store.state.auth.status.loggedIn;
    },
  },
  created() {
    if (this.loggedIn) {
      this.$router.push("/profile");
    }
  },
  methods: {
    handleLogin(user) {
      this.loading = true;

      this.$store.dispatch("auth/login", user).then(
        () => {
          this.$router.push("/profile");
        },
        (error) => {
          this.loading = false;
          this.message =
            (error.response &&
              error.response.data &&
              error.response.data.message) ||
            error.message ||
            error.toString();
        }
      );
    },
  },
};
</script>

<style scoped>
  .form-logo{
    margin-bottom:20px;
    height:50px;
    width:auto;
  }
  .marginTop{
      margin-top:30px;
  }
</style>