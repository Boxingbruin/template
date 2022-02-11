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
          <p class="form-title">Create Account</p>
          <Form @submit="handleRegister" :validation-schema="schema">
            <div v-if="!successful">
              <div class="form-group">
                <label for="username" class="form-label">Username</label>
                <Field name="username" type="text" class="form-input round-3" />
                <ErrorMessage name="username" class="error-feedback" />
              </div>
              <div class="form-group">
                <label for="email" class="form-label">Email</label>
                <Field name="email" type="email" class="form-input round-3" />
                <ErrorMessage name="email" class="error-feedback" />
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
                  Sign Up
                </button>
              </div>
            </div>
          </Form>

          <div
            v-if="message"
            class="alert"
            :class="successful ? 'alert-success' : 'alert-danger'"
          >
            {{ message }}
          </div>
        </div>
      </div>
      <p class="form-separation-text">Already have an account?</p>
      <div class="form-group">
        <router-link to="/login">
          <button class="form-button-dim round-3" :disabled="loading">
            Sign in
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
  name: "Register",
  components: {
    Form,
    Field,
    ErrorMessage,
  },
  data() {
    const schema = yup.object().shape({
      username: yup
        .string()
        .required("Username is required!")
        .min(3, "Must be at least 3 characters!")
        .max(20, "Must be maximum 20 characters!"),
      email: yup
        .string()
        .required("Email is required!")
        .email("Email is invalid!")
        .max(50, "Must be maximum 50 characters!"),
      password: yup
        .string()
        .required("Password is required!")
        .min(6, "Must be at least 6 characters!")
        .max(40, "Must be maximum 40 characters!"),
    });

    return {
      successful: false,
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
  mounted() {
    if (this.loggedIn) {
      this.$router.push("/profile");
    }
  },
  methods: {
    handleRegister(user) {
      this.message = "";
      this.successful = false;
      this.loading = true;

      this.$store.dispatch("auth/register", user).then(
        (data) => {
          this.message = data.message;
          this.successful = true;
          this.loading = false;
        },
        (error) => {
          this.message =
            (error.response &&
              error.response.data &&
              error.response.data.message) ||
            error.message ||
            error.toString();
          this.successful = false;
          this.loading = false;
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