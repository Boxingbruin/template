<template>
  <div class="container">
    <div id="search-bar">
      <div class="col-left">
        <div id="search-logo"></div>
      </div>
      <div class="col-mid">
        <div id="search-box-container">
          <div id="search-box-hashtag">#</div>
          <input type="text" id="search-box"/>
          <!--<div id="search-box-reset">X</div>-->
        </div>
      </div>
      <div class="col-right">
        <div id="search-user" @click.prevent="logOut"  v-if="currentUser"></div>
        <router-link v-if="!currentUser" to="/login" id="search-user-signin">
        Sign in
        </router-link>
      </div>
    </div>
    <div class="col-container">
      <div class="col-left color-light"></div>
      <div class="col-mid">
        <ul>
          <li v-for="item in items" :key="item.message" class="search-result-box">
            <div class="search-result-box-image">
            </div>
            <div class="search-result-box-right">
              <p class="search-result-url">https://fungisupply.ca</p>
              <p class="search-result-title">Fungi Supply: Mushroom Cultures & Mycology Supplies in Canada</p>
              <p class="search-result-description">Fungi Supply located in Canada, specializes in mushroom cultures, kits and mushroom supplies for the cultivation of a variety of fungi species.</p>
              <ul class="search-result-tag-container">
                <li class="search-result-tag"><span class="search-result-tag-text">#mushrooms</span></li>
                <li class="search-result-tag"><span class="search-result-tag-text">#mushroom growing</span></li>
                <li class="search-result-tag"><span class="search-result-tag-text">#mushroom supplies</span></li>
                <li class="search-result-tag"><span class="search-result-tag-text">#mycology</span></li>
                <li class="search-result-tag"><span class="search-result-tag-text">#mycology supplies</span></li>
              </ul>
            </div>
          </li>
        </ul>
      </div>
      <div class="col-right color-light"></div>
    </div>
  </div>
</template>

<script>
import UserService from "../../services/user.service";

export default {
  name: "ListBox",
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

#search-bar{
    display:flex;
  width:100%;
  height:80px;
  background-color:#d2deff;
}

#search-logo {
  height:50px;
  width:150px;
  background-color:white;
  margin-left:50px;
  margin-right:50px;
  margin-top:15px;
  cursor: pointer;
}

#search-box-container{
  vertical-align:top;
  margin-top:15px;
  margin-left:30px;
}

#search-box-hashtag{
  position:absolute;
  font-size:30px;
  margin-left:15px;
  margin-top:3px;
  color:lightgray;
}

#search-box-reset{
  position:absolute;
}

#search-box {
  border-radius: 50px;
  height:46px;
    width: -webkit-calc(100% - 130px);
    width:    -moz-calc(100% - 130px);
    width:         calc(100% - 130px);
  padding-left:40px;
  padding-right:60px;
  font-size:20px;
}

#search-user {
  border-radius: 50px;
  margin-left:45px;
  height:50px;
  width:50px;
  background-color:white;
  margin-top:15px;
  cursor: pointer;
}

#search-user-signin{
  margin-right:50px;
  font-size:18px;
  margin-top:27px;
  text-decoration:none;
}

#search-nav {
  display:inline-block;
  width:300px;
  height:500px;;
}

#search-results {
  display:inline-block;
  height:100%;
  margin-left:50px;
  width:60%;
}

.search-result-box {
  float:left;
  margin-top:30px;
  padding-left:30px;
  padding-right:30px;
}

.search-result-box-image{
  float:left;
  cursor: pointer;
  border-radius: 10px;
  width:160px;
  height:200px;
  background-color:#d2deff;
  margin-right:30px;
}
.search-result-box-right{

}
.search-result-url{
  cursor: pointer;
  font-size:14px;
  margin-top:1px;
  cursor: pointer;
}

.search-result-title{
  cursor: pointer;
  margin:0;
  font-size:22px;
  font-weight:bold;
}

.search-result-tag-container{
  width:100%;
}
.search-result-tag{
  cursor: pointer;
  display:inline-block;
  border-radius: 50px;
  border:solid 1px white;
  color: #b8b3c4;
  margin-right:5px;
}

.search-result-tag:hover{
  border:solid 1px #cdcbd2;
  color: #cdcbd2;

}

.search-result-tag-text{
  font-size:14px;
  padding-left:7px;
  padding-right:7px;
}

</style>