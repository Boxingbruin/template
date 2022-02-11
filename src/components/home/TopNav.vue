<template>
    <section id="navtop">
        <ul>
            <li class="navtop-list">
            <router-link to="/home" class="navtop-link">
                Contact Us
            </router-link>
            </li>
            <div v-if="!currentUser" class="">
              <li class="navtop-list">
                  <router-link to="/login" class="navtop-link">
                  Sign in
                  </router-link>
              </li>
            </div>
            <div v-if="currentUser" class="">
              <li class="navtop-list">
                  <router-link to="/profile" class="navtop-link">
                  {{ currentUser.username }}
                  </router-link>
              </li>
              <li class="navtop-list">
                  <a class="navtop-link" @click.prevent="logOut">
                  Sign out
                  </a>
              </li>
            </div>
        </ul>
    </section>
</template>

<script>
  export default {
    name: "TopNav",
    computed: {
      currentUser() {
        return this.$store.state.auth.user;
      },
      showAdminBoard() {
        if (this.currentUser && this.currentUser['roles']) {
          return this.currentUser['roles'].includes('ROLE_ADMIN');
        }

        return false;
      },
      showModeratorBoard() {
        if (this.currentUser && this.currentUser['roles']) {
          return this.currentUser['roles'].includes('ROLE_MODERATOR');
        }

        return false;
      }
    },
    methods: {
      logOut() {
        this.$store.dispatch('auth/logout');
        this.$router.push('/login');
      }
    }
  };
</script>

<style>
  #navtop{
    width:100%;
    height:25px;
    padding-bottom:5px;
    background-color: #009be3;
  }

  .navtop-link{
    color:white;
    font-size:16px;
    text-decoration:none;
    cursor: pointer;
  }

  .navtop-list {
    float:right;
    font-size:20px;
    margin-right:40px;
  }

</style>
