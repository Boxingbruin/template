<template>
  <div id="app">
    <div id="view-container">
      <app-announce></app-announce>
      <app-userNav v-if="currentUser"></app-userNav>
      <app-home v-if="hideHeader"></app-home>
      <router-view id="content-wrap" />
      <app-footer v-if="hideHeader"></app-footer>
    </div>
  </div>
</template>

<script>
  import Announce from "./components/Announce.vue"
  import UserNav from "./components/app/UserNav.vue"
  import Home from "./components/home/Home.vue"
  import Footer from "./components/home/Footer.vue"

  export default {
    components: {
      appAnnounce: Announce,
      appHome: Home,
      appFooter: Footer,
      appUserNav: UserNav
    },
    computed: {
      hideHeader() {
        if(this.$route.fullPath == '/login' || this.$route.fullPath == '/register' || this.$store.state.auth.user){
          return false;
        }else{
          return true;
        }
      },
      currentUser() {
        return this.$store.state.auth.user;
      }
    },
    methods: {
    }
  };
</script>

<style>
  body {
      position: relative;
      font-family: 'Open Sans', sans-serif;
      margin: 0 auto;
      height: 100%;
  }

  h1, h2, h3, h4
  {
    display:none;
  }

  input, button 
  { 
    border:none; 
    outline: none;
  }

  ul 
  {
    padding: 0;
    margin:0;
    list-style-type: none;
  }

  .round-3 {
    -webkit-border-radius: 3px; 
    -moz-border-radius: 3px; 
    border-radius: 3px; 
  }

  .round-5 {
    -webkit-border-radius: 5px; 
    -moz-border-radius: 5px; 
    border-radius: 5px; 
  }

  .round-20 {
    -webkit-border-radius: 20px; 
    -moz-border-radius: 20px; 
    border-radius: 20px; 
  }


  #view-container {
    position:relative;
    min-height: 100vh;
  }

  #content-wrap {
    padding-bottom: 2.5rem;
  }

  .card {
    width:350px;
    margin: 0 auto;
  }

  .card-container {
    width:100%;
    height:100%;
    border:solid 1px lightgrey;
  }

  .card-content {
    margin:0 auto;
    width:80%;
    margin-top:30px;
    margin-bottom:30px;
  }

  .form-separation-text{
    color:grey;
    font-size:12px;
    margin-top:30px;
    width:100%;
    text-align:center;
  }

  .form-logo-center{
    display: flex;
    justify-content: center;
  }

  .form-logo {
  }

  .form-title {
    font-size:30px;
  }

  .form-input{
    width:100%;
    height:30px;
    border: solid 1px grey;
    padding:0;
    padding-left:10px;
    -webkit-transition: 0.2s;
    transition: 0.2s;
    width: -webkit-calc(100% - 11px);
    width:    -moz-calc(100% - 11px);
    width:         calc(100% - 11px);
    margin-top:5px;
  }

  .form-input:focus{
    border: solid 1px orange;
    -webkit-box-shadow: 0px 0px 6px 0px #FF7F02; 
    box-shadow: 0px 0px 6px 0px #FF7F02;
  }

  .form-button{
    width:100%;
    height:32px;
    background-color: gold;
    border: solid 1px grey;
    -webkit-transition: 0.2s;
    transition: 0.2s;
  }

  .form-button:hover{
    background-color: goldenrod;
  }

  .form-button-dim{
    width:100%;
    height:32px;
    background-color: white;
    border: solid 1px grey;
    -webkit-transition: 0.2s;
    transition: 0.2s;
  }

  .form-button-dim:hover{
    background-color: lightgrey;
  }

  .form-label{
    font-weight:bold;
    font-size:16px;
  }
  .form-group {
    margin-bottom:20px;
  }

  .error-feedback{
    font-size:16px;
    color:orangered;
  }

</style>
