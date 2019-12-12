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
                                    <b-nav-item class="nav-item-border"><router-link class="nav-link active-nav" to="Subscription" >
                                        <font-awesome-icon icon="shopping-cart" class=""/>
                                        <br> Subscription</router-link></b-nav-item>
                                    <b-nav-item class="nav-item-border"><router-link class="nav-link " to="Profile" >
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
                            <div class="messgae-box-section">
                                <h3>Subscription Plan</h3>

                                <div class="row">
                                    <div class="col-md-4">
                                        <div class="sub">
                                            <div class="select-plan">
                                                <h4>Gold Plan</h4>
                                                <div class="plan-price">
                                                    <p>&#8358; 1,500</p>
                                                </div>
                                                <div class="plan-duration">
                                                    <h6>ads Duration</h6>
                                                    <p>7 Days</p>
                                                </div>
                                                <div class="plan-info">
                                                    <h6>ads Description</h6>
                                                    <p>27/7 Support</p>
                                                    <p>Improved Performance</p>
                                                    <p>Improved Performance</p>
                                                    <p>Improved Performance</p>
                                                    <p>Improved Performance</p>
                                                </div>
                                            </div>
                                            <div class="start-post">
                                                <a href="#"> <button class="start-posting-btn">Choose Plan</button></a>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-md-4">
                                        <div class="sub">
                                            <div class="select-plan">
                                                <h4>Silver Plan</h4>
                                                <div class="plan-price">
                                                    <p>&#8358; 1,000</p>
                                                </div>
                                                <div class="plan-duration">
                                                    <h6>ads Duration</h6>
                                                    <p>3 Days</p>
                                                </div>
                                                <div class="plan-info">
                                                    <h6>ads Description</h6>
                                                    <p>27/7 Support</p>
                                                    <p>Improved Performance</p>
                                                    <p>Improved Performance</p>
                                                    <p>Improved Performance</p>
                                                    <p>Improved Performance</p>
                                                </div>
                                            </div>
                                            <div class="start-post">
                                                <a href="#"> <button class="start-posting-btn">Choose Plan</button></a>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-md-4">
                                        <div class="sub">
                                            <div class="select-plan">
                                                <h4>Bronze Plan</h4>
                                                <div class="plan-price">
                                                    <p>&#8358; 500</p>
                                                </div>
                                                <div class="plan-duration">
                                                    <h6>ads Duration</h6>
                                                    <p>1 Day</p>
                                                </div>
                                                <div class="plan-info">
                                                    <h6>ads Description</h6>
                                                    <p>27/7 Support</p>
                                                    <p>Improved Performance</p>
                                                    <p>Improved Performance</p>
                                                    <p>Improved Performance</p>
                                                    <p>Improved Performance</p>
                                                </div>
                                            </div>
                                            <div class="start-post">
                                                <a href="#"> <button class="start-posting-btn">Choose Plan</button></a>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <Footer2></Footer2>
    </div>
</template>

<script>
    import UserProfile from '../../components/UserProfile/UserProfile'
    import Footer2 from '../../components/Footer/Footer2'

    export default {
        name: "Subscription.vue",
        components: {
            UserProfile,
            Footer2
        }
    }
</script>

<style scoped>
    .corpersaid-landing{
        background: #F7F7F7;
    }

</style>