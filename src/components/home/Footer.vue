<template>
    <footer>
        <div id="footer-container">
            <div id="footer-left">
                <ul class="footer-left-list">
                    <li class="footer-list">Product</li>
                    <li class="footer-list">Download</li>
                    <li class="footer-list">Status</li>
                </ul>
                <ul class="footer-left-list">
                    <li class="footer-list">Company</li>
                    <li class="footer-list">About</li>
                    <li class="footer-list">Branding</li>
                    <li class="footer-list">News</li>
                </ul>
                <ul class="footer-left-list">
                    <li class="footer-list">Resources</li>
                    <li class="footer-list">Developers</li>
                    <li class="footer-list">Support</li>
                </ul>
                <ul class="footer-left-list">
                    <li class="footer-list">Policies</li> 
                    <li class="footer-list">Terms</li>  
                    <li class="footer-list">Privacy</li>
                    <li class="footer-list">Cookies</li>
                    <li class="footer-list">Guidelines</li>
                    <li class="footer-list">Moderation</li>
                </ul>
            </div>
            <div id="footer-right">
                <a href="/"><img id="footer-logo" src="../../assets/header_logo.png" /></a>
                <ul v-if="!currentUser" class="">
                    <li class="footer-list">
                        <router-link to="/login" class="navtop-link">
                        Sign in
                        </router-link>
                    </li>
                </ul>
                <ul v-if="currentUser" class="">
                    <li class="footer-list">
                        <a class="navtop-link" @click.prevent="logOut">
                        Sign out
                        </a>
                    </li>
                </ul>
            </div>
        </div>
        <div id="footer-bottom">Copyright 2022 Your Company name. All rights reserved.</div>
    </footer>
</template>

<script>
export default {
name: "Banner"
}
</script>

<style scoped>
footer {
    position: absolute;
    bottom: 0;
    width: 100%;

    background-color: #009be3;
}

#footer-container {
    margin-top:75px;
    display:flex;
}

#footer-left {
    margin-left:125px;
    flex: 1 1;
}

#footer-right {
    flex: 0 0 250px;
}

.footer-left-list{
    display:inline-block;
    margin-right:80px;
    vertical-align:top;
}

.footer-list{
    padding:5px;
    color:white;
}

#footer-bottom{
    margin-top:100px;
    margin-left:125px;
    color:white;
    margin-bottom:20px;
    font-size:14px;
}

#footer-logo{
    width:150px;
    height:auto;
}
</style>