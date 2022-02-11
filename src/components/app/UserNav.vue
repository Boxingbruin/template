<template>
  <div class="container">
    <div id="dev-nav-bar">
      <ul class="">
        <li  class="devnav-left-list">
            <router-link to="/search" class="devnav-text">
            Search-Provider
            </router-link>
        </li>
        <li class="">

        </li>
      </ul>
      <ul class="">
        <li class="devnav-right-list">
            <a class="devnav-text" @click.prevent="logOut">
            Sign out
            </a>
        </li>
        <li class="devnav-right-list">
            <router-link to="/profile" class="devnav-text">
            {{ currentUser.username }}
            </router-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import UserService from "../../services/user.service";

export default {
  name: "UserNav",
  data() {
    return {
      items: "",
    };
  },
  computed: {
    currentUser() {
      return this.$store.state.auth.user;
    }
  },
  methods: {
    logOut() {
      this.$store.dispatch('auth/logout');
      this.$router.push('/login');
    }
  },
  mounted() {
    UserService.getPublicGroups().then(
      (response) => {
        this.items = response.data;
      },
      (error) => {
        this.items =
          (error.response &&
            error.response.data &&
            error.response.data.message) ||
          error.message ||
          error.toString();
      }
    );
  },
};
</script>

<style scoped>
.container {
  height:100%;
}

.col-container {
  display: flex;
  justify-content: space-between;

}

.col-left{
  flex: 0 0 250px;
}

.col-mid{
  flex: 1 1 auto;
}
.col-right{
  flex: 0 0 140px;

}

.color-light{
  background-color:#dfe3ff;
}

.color-dark{
  background-color:#d2deff;
}

#dev-nav-bar{
  height:50px;
  width:100%;
  background-color:#009be3;
}


.devnav-left-list {
  float:left;
  margin-left:30px;
  margin-top:13px;
}

.devnav-right-list{
  cursor:pointer;
  float:right;
  margin-right:30px;
  margin-top:13px;
}

.devnav-text{
  color:white;
  text-decoration: none;
}

</style>