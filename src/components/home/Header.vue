<template>
    <nav id="nav-sitenavigator">
        <a href="/"><img id="nav-logo" src="../../assets/header_logo.png" /></a>
        <ul id="nav-container">
            <li class="nav-list">
                <router-link to="/home" class="nav-link">Home</router-link>
            </li>
            <li class="nav-list">
                <router-link to="/shop" class="nav-link">Shop</router-link>
            </li>
            <li class="nav-list">
                <router-link to="/resources" class="nav-link">Resources</router-link>
            </li>

            <li v-if="showAdminBoard" class="nav-list">
            <router-link to="/admin" class="nav-link">Admin Board</router-link>
            </li>
            <li v-if="showModeratorBoard" class="nav-list">
            <router-link to="/mod" class="nav-link">Moderator Board</router-link>
            </li>
            <li class="nav-list">
            <router-link v-if="currentUser" to="/user" class="nav-list">User</router-link>
            </li>
        </ul>
        <button id="head-cart">0</button>
    </nav>
</template>

<script>
export default {
name: "Header"
}
</script>

<style scoped>

#nav-title{
}

#nav-logo {
    margin-left:40px;
    margin-right:20px;
    float:left;
    width:auto;
    height:100%;
}

#nav-title {
    display:inline;
    font-size:20px;
    width:100%;
}

#nav-sitenavigator {
    position:relative;
        height:50px;
    width: 100%;
    background-color:#009be3;
}

#nav-container{
    float:left;
    margin-top:-13px;
    padding-top:25px;
    height:50px;
    display:inline;
}

.nav-list {
    display:inline;
    font-size:20px;
    margin-left:40px;

}

.nav-link{
  text-decoration: none;
    color:white;
}

#head-cart {
    cursor: pointer;
    float:right;
    width:50px;
    height:50px;
    margin-right: 40px;
    background: url('../../assets/images/cart2.png') no-repeat;
    background-size: 50px 50px;
    font-weight:600;
    font-size:18px;
    color:orange;
}
</style>