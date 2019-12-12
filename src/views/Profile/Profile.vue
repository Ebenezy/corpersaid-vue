<template>
    <div class="corpersaid-landing" >
        <!-- navbar	-->
        <div class="container-fluid fixed-top bg-white nav-bar2">
            <div class="container">
                <div class="user_logged_in_nav">
                    <b-navbar toggleable="lg" type="light" >
                        <b-navbar-brand href="/"><img src="../../assets/images/corpersaid-logo.svg" alt="Hope Bank Logo" class="hope_logo"></b-navbar-brand>

                        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

                        <b-collapse id="nav-collapse" is-nav>

                            <!-- Right aligned nav items -->
                            <b-navbar-nav class="ml-auto white_bg">
                                <b-navbar-nav class="nav_header_inner">
                                    <b-nav-item class="nav-item-border"><router-link class="nav-link" to="Notification">
                                        <font-awesome-icon icon="bell" class=""/>
                                        <br> Notification</router-link></b-nav-item>
                                    <b-nav-item class="nav-item-border"><router-link class="nav-link" to="Messages">
                                        <font-awesome-icon icon="sms" class=""/>
                                        <br> Messages</router-link></b-nav-item>
                                    <b-nav-item class="nav-item-border"><router-link class="nav-link " to="MyPost" >
                                        <font-awesome-icon icon="poll-h" class=""/>
                                        <br> My Post</router-link></b-nav-item>
                                    <b-nav-item class="nav-item-border"><router-link class="nav-link " to="Subscription" >
                                        <font-awesome-icon icon="shopping-cart" class=""/>
                                        <br> Subscription</router-link></b-nav-item>
                                    <b-nav-item class="nav-item-border"><router-link class="nav-link active-nav" to="Profile" >
                                        <font-awesome-icon icon="user-circle" class=""/>
                                        <br> Profile</router-link></b-nav-item>
                                </b-navbar-nav>
                                <b-navbar-nav class="">
                                    <div class="dropdown">
                                        <button type="button" class="btn post-listing-btn2 dropdown-toggle" data-toggle="dropdown">Post Listing</button>
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
        <div class="corpersaid-view mt-5" >
            <div class="container">
                <div class="row mt-5">
                    <div class="col-md-3">
                        <UserProfile></UserProfile>
                    </div>
                    <div class="col-md-9">
                        <div class="contact-section">
                            <div class="start-posting-section">
                                <img src="../../assets/images/bars.svg">
                                <p>Start Posting your products and services for every<br> corper in Nigeria to see</p>
                                <div class="start-post">
                                    <router-link to="PostProduct"> <button class="start-posting-btn">Start Posting</button></router-link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <Footer3></Footer3>
    </div>
</template>

<script>
    import UserProfile from '../../components/UserProfile/UserProfile'
    import Footer3 from '../../components/Footer/Footer3'

    export default {
        name: "Profile.vue",
        components: {
            UserProfile,
            Footer3
        }
    }
</script>

<style scoped>
    .corpersaid-landing{
        background: #F7F7F7;
    }

</style>