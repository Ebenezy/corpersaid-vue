<template>
    <!-- navbar	-->
    <div class="container-fluid fixed-top bg-white nav-bar2">
        <div class="container">
            <div class="">
                <b-navbar toggleable="lg" type="light" >
                    <b-navbar-brand href="/"><img src="../../assets/images/corpersaid-logo.svg" alt="Hope Bank Logo" class="hope_logo"></b-navbar-brand>

                    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

                    <b-collapse id="nav-collapse" is-nav>

                        <!-- Right aligned nav items -->
                        <b-navbar-nav class="ml-auto white_bg">
                            <b-navbar-nav class="nav_header_inner">
                                <b-nav-item ><router-link to="/">Home</router-link></b-nav-item>
                                <b-nav-item ><router-link to="ToLet">To Let</router-link></b-nav-item>
                                <b-nav-item ><router-link to="ForSale">For Sale</router-link></b-nav-item>
                                <b-nav-item ><router-link to="Services">Services</router-link></b-nav-item>
                                <b-nav-item ><router-link to="Ppa">PPA</router-link></b-nav-item>
                                <b-nav-item ><router-link to="Login">Login</router-link></b-nav-item>
                                <b-nav-item ><router-link to="Register">Register</router-link></b-nav-item>
                            </b-navbar-nav>
                            <b-navbar-nav class="">
                                <div class="dropdown">
                                    <button type="button" class="btn post-listing-btn dropdown-toggle" data-toggle="dropdown">Post Listing</button>
                                    <div class="dropdown-menu">
                                        <router-link class="dropdown-item" to="ToLet">TO LET</router-link>
                                        <router-link class="dropdown-item" to="ForSale">FOR SALE</router-link>
                                        <router-link class="dropdown-item" to="Services">SERVICES</router-link>
                                        <router-link class="dropdown-item" to="Ppa">PPA</router-link>
                                    </div>
                                </div>
                            </b-navbar-nav>
                        </b-navbar-nav>
                    </b-collapse>
                </b-navbar>
            </div>

        </div>
    </div>
    <!-- <navbar end> -->
</template>

<script>
    export default {
        name: "HeaderNav.vue"
    }
</script>

<style scoped>

</style>