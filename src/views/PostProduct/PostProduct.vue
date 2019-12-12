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
                                    <b-nav-item class="nav-item-border"><router-link class="nav-link active-nav" to="MyPost" >
                                        <font-awesome-icon icon="poll-h" class=""/>
                                        <br> My Post</router-link></b-nav-item>
                                    <b-nav-item class="nav-item-border"><router-link class="nav-link " to="Subscription" >
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
        <div class="corpersaid-view mt-5">
            <div class="container">
                <h2 class="text-center mb-4">Post Listing</h2>
                <div class="post-details-section">
                    <div class="post-detail">
                        <h4>Post Details</h4>
                        <button class="clear-field-btn">Clear All Field</button>
                    </div>
                    <div class="searching mb-5">
                        <h6>Category <sup>*</sup></h6>
                        <div class="select-5">
                            <select class="select-option4">
                                <option>Select Category </option>
                                <option>To Let</option>
                                <option>For Sale</option>
                                <option>Services</option>
                                <option>PPA</option>
                            </select>
                            <div class="caret">
                                <font-awesome-icon icon="caret-down" class="icon1"/>
                            </div>
                        </div>
                    </div>

                    <p>Add Pictures</p>
                    <p><b>Listings with photo gets more clients.</b> Formats: jpg, gif and png. Max allowed size for uploaded files is 5MB.</p>
                    <p>Add at least 1 photo for your listing</p>
                    <div class="picture-upload">
                        <div class="row no-gutters">
                            <div class="col-md-2">
                                <div class="upload1">
                                    <img src="../../assets/images/camera.svg">
                                </div>
                            </div>
                            <div class="col-md-2">
                                <div class="upload1">
                                    <img src="../../assets/images/camera2.svg">
                                </div>
                            </div>
                            <div class="col-md-2">
                                <div class="upload1">
                                    <img src="../../assets/images/camera2.svg">
                                </div>
                            </div>
                            <div class="col-md-2">
                                <div class="upload1">
                                    <img src="../../assets/images/camera2.svg">
                                </div>
                            </div>
                            <div class="col-md-2">
                                <div class="upload1">
                                    <img src="../../assets/images/camera2.svg">
                                </div>
                            </div>
                            <div class="col-md-2">
                                <div class="upload1">
                                    <img src="../../assets/images/camera2.svg">
                                </div>
                            </div>
                        </div>
                    </div>
                    <p class="mt-3"><b>First picture is what everyone sees.</b></p>
                    <div class="fill-form">
                        <form>
                            <div class="enter-details">
                                <label>Title <sup>*</sup></label><br>
                                <input class="enter-title" type="text" name="text" placeholder="Write a clear of your listing"><br>
                                <small>50 Character Max</small>
                            </div>
                            <div class="enter-details">
                                <label>Description <sup>*</sup></label><br>
                                <textarea class="enter-description" type="text" name="text" placeholder="Please provide details of your products/services. You can mention as many details as possible, this will make your listing very easy for clients."></textarea><br>
                                <small>300 Character Max</small>
                            </div>
                        </form>
                    </div>
                </div>
                <div class="post-details-section">
                    <p><b>Contact Information for your Listing</b></p>
                    <div class="searching">
                        <h6>Category </h6>
                        <div class="select-5 mb-4" style="width: 30%; justify-content: space-between;">
                            <select class="select-option4">
                                <option>Select Category </option>
                                <option>To Let</option>
                                <option>For Sale</option>
                                <option>Services</option>
                                <option>PPA</option>
                            </select>
                            <div class="caret">
                                <font-awesome-icon icon="caret-down" class="icon1"/>
                            </div>
                        </div>
                    </div>
                    <form>
                        <div class="enter-details">
                            <label>Region <sup>*</sup></label><br>
                            <input class="enter-region" type="text" name="text" placeholder="Please enter your regoin">
                        </div>
                        <div class="enter-details">
                            <label>Local Government <sup>*</sup></label><br>
                            <input class="enter-region" type="text" name="text" placeholder="Please enter your Local Government">
                        </div>
                    </form>
                </div>
                <div class="text-center mt-4">
                    <button class="start-post-btn">PUBLISH NOW</button>
                    <p class="mt-3 terms">By publishing an listing you agree and accept the Rules of <span class="corper-green"> Corpers  Aid Ltd</span></p>
                </div>
            </div>
        </div>

        <Footer2></Footer2>
    </div>
</template>

<script>
    // import HeaderNav from '../../components/HeaderNav/HeaderNav'
    import Footer2 from '../../components/Footer/Footer2'

    export default {
        name: "PostProduct.vue",
        components: {
            // HeaderNav,
            Footer2
        }
    }
</script>

<style scoped>

</style>