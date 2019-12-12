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
        <div class="corpersaid-view mt-5" >
            <div class="container">
                <div class="row mt-5">
                    <div class="col-md-3">
                        <UserProfile></UserProfile>
                    </div>
                    <div class="col-md-9">
                        <div class="my-posting-section">
                            <div class="my-post-title">
                                <h3>My Post</h3>
                                <button class="start-post-btn">Start Posting</button>
                            </div>
                            <div class="start-post">
                                <div class="sort-by">
                                    <p>Sort by:</p>
                                    <div class="tab">
                                        <button class="tablinks active-tab" onclick="openCity(event, 'latest')">Latest</button>
                                        <button class="tablinks" >|</button>
                                        <button class="tablinks" onclick="openCity(event, 'all')">All</button>
                                    </div>
                                </div>
                                <div id="latest" class="tabcontent">
                                    <div class="row">
                                        <div class="col-md-4">
                                            <div class="products" id="delete-product">
                                                <div id="clients-edit-wrapper" class="text-right close-me">
                                                    <img src="../../assets/images/close.svg" id="delete-me">
                                                </div>
                                                <router-link to="View">
                                                    <img src="../../assets/images/room.jpg">
                                                    <div class="product-name">
                                                        <div class="product-name2">
                                                            <h5>Hair Style</h5>
                                                            <div class="dot-menu">

                                                            </div>
                                                        </div>
                                                    </div>
                                                </router-link>
                                                <div class="share-product">
                                                    <p>Share on:</p>
                                                    <div class="share-social">
                                                        <button class="google-btn"><font-awesome-icon :icon="{ prefix: 'fab', iconName: 'google' }" class="fb"/></button>
                                                        <button class="twitter-btn"><font-awesome-icon :icon="{ prefix: 'fab', iconName: 'twitter' }" class="fb"/></button>
                                                        <button class="facebook-btn"><font-awesome-icon :icon="{ prefix: 'fab', iconName: 'facebook-f' }" class="fb"/></button>
                                                        <button class="whatsapp-btn"><font-awesome-icon :icon="{ prefix: 'fab', iconName: 'whatsapp' }" class="fb"/></button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                    <div class="col-md-4">
                                        <div class="products" id="delete-product2">
                                            <div id="clients-edit-wrapper" class="text-right close-me">
                                                <img src="../../assets/images/close.svg" id="delete-me2">
                                            </div>
                                            <router-link to="View">
                                                <img src="../../assets/images/room.jpg">
                                                <div class="product-name">
                                                    <div class="product-name2">
                                                        <h5>Hair Style</h5>
                                                        <div class="dot-menu">

                                                        </div>
                                                    </div>
                                                </div>
                                            </router-link>
                                            <div class="share-product">
                                                <p>Share on:</p>
                                                <div class="share-social">
                                                    <button class="google-btn"><font-awesome-icon :icon="{ prefix: 'fab', iconName: 'google' }" class="fb"/></button>
                                                    <button class="twitter-btn"><font-awesome-icon :icon="{ prefix: 'fab', iconName: 'twitter' }" class="fb"/></button>
                                                    <button class="facebook-btn"><font-awesome-icon :icon="{ prefix: 'fab', iconName: 'facebook-f' }" class="fb"/></button>
                                                    <button class="whatsapp-btn"><font-awesome-icon :icon="{ prefix: 'fab', iconName: 'whatsapp' }" class="fb"/></button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                <div class="col-md-4">
                                    <div class="products" id="delete-product3">
                                        <div id="clients-edit-wrapper" class="text-right close-me">
                                            <img src="../../assets/images/close.svg" id="delete-me3">
                                        </div>
                                        <router-link to="View">
                                            <img src="../../assets/images/room.jpg">
                                            <div class="product-name">
                                                <div class="product-name2">
                                                    <h5>Hair Style</h5>
                                                    <div class="dot-menu">

                                                    </div>
                                                </div>
                                            </div>
                                        </router-link>
                                        <div class="share-product">
                                            <p>Share on:</p>
                                            <div class="share-social">
                                                <button class="google-btn"><font-awesome-icon :icon="{ prefix: 'fab', iconName: 'google' }" class="fb"/></button>
                                                <button class="twitter-btn"><font-awesome-icon :icon="{ prefix: 'fab', iconName: 'twitter' }" class="fb"/></button>
                                                <button class="facebook-btn"><font-awesome-icon :icon="{ prefix: 'fab', iconName: 'facebook-f' }" class="fb"/></button>
                                                <button class="whatsapp-btn"><font-awesome-icon :icon="{ prefix: 'fab', iconName: 'whatsapp' }" class="fb"/></button>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            <div class="col-md-4">
                                <div class="products" id="delete-product4">
                                    <div id="clients-edit-wrapper" class="text-right close-me">
                                        <img src="../../assets/images/close.svg" id="delete-me4">
                                    </div>
                                    <router-link to="View">
                                        <img src="../../assets/images/room.jpg">
                                        <div class="product-name">
                                            <div class="product-name2">
                                                <h5>Hair Style</h5>
                                                <div class="dot-menu">

                                                </div>
                                            </div>
                                        </div>
                                    </router-link>
                                    <div class="share-product">
                                        <p>Share on:</p>
                                        <div class="share-social">
                                            <button class="google-btn"><font-awesome-icon :icon="{ prefix: 'fab', iconName: 'google' }" class="fb"/></button>
                                            <button class="twitter-btn"><font-awesome-icon :icon="{ prefix: 'fab', iconName: 'twitter' }" class="fb"/></button>
                                            <button class="facebook-btn"><font-awesome-icon :icon="{ prefix: 'fab', iconName: 'facebook-f' }" class="fb"/></button>
                                            <button class="whatsapp-btn"><font-awesome-icon :icon="{ prefix: 'fab', iconName: 'whatsapp' }" class="fb"/></button>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        <div class="col-md-4">
                            <div class="products" id="delete-product5">
                                <div id="clients-edit-wrapper" class="text-right close-me">
                                    <img src="../../assets/images/close.svg" id="delete-me5">
                                </div>
                                <router-link to="View">
                                    <img src="../../assets/images/room.jpg">
                                    <div class="product-name">
                                        <div class="product-name2">
                                            <h5>Hair Style</h5>
                                            <div class="dot-menu">

                                            </div>
                                        </div>
                                    </div>
                                </router-link>
                                <div class="share-product">
                                    <p>Share on:</p>
                                    <div class="share-social">
                                        <button class="google-btn"><font-awesome-icon :icon="{ prefix: 'fab', iconName: 'google' }" class="fb"/></button>
                                        <button class="twitter-btn"><font-awesome-icon :icon="{ prefix: 'fab', iconName: 'twitter' }" class="fb"/></button>
                                        <button class="facebook-btn"><font-awesome-icon :icon="{ prefix: 'fab', iconName: 'facebook-f' }" class="fb"/></button>
                                        <button class="whatsapp-btn"><font-awesome-icon :icon="{ prefix: 'fab', iconName: 'whatsapp' }" class="fb"/></button>
                                    </div>
                                </div>
                            </div>
                        </div>

                    <div class="col-md-4">
                        <div class="products" id="delete-product6">
                            <div id="clients-edit-wrapper" class="text-right close-me">
                                <img src="../../assets/images/close.svg" id="delete-me6">
                            </div>
                            <router-link to="View">
                                <img src="../../assets/images/room.jpg">
                                <div class="product-name">
                                    <div class="product-name2">
                                        <h5>Hair Style</h5>
                                        <div class="dot-menu">

                                        </div>
                                    </div>
                                </div>
                            </router-link>
                            <div class="share-product">
                                <p>Share on:</p>
                                <div class="share-social">
                                    <button class="google-btn"><font-awesome-icon :icon="{ prefix: 'fab', iconName: 'google' }" class="fb"/></button>
                                    <button class="twitter-btn"><font-awesome-icon :icon="{ prefix: 'fab', iconName: 'twitter' }" class="fb"/></button>
                                    <button class="facebook-btn"><font-awesome-icon :icon="{ prefix: 'fab', iconName: 'facebook-f' }" class="fb"/></button>
                                    <button class="whatsapp-btn"><font-awesome-icon :icon="{ prefix: 'fab', iconName: 'whatsapp' }" class="fb"/></button>
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
            </div>
        </div>


            <Footer2></Footer2>
    </div>
</template>

<script>
    import UserProfile from '../../components/UserProfile/UserProfile'
    import Footer2 from '../../components/Footer/Footer2'

    export default {
        name: "MyPost.vue",
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