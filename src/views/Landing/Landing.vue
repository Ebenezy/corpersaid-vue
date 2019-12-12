<template>
    <div class="corpersaid-landing">
        <HeaderNav></HeaderNav>
        <div class="corpersaid-header">
            <div class="container">
                <div class="head-section">
                    <div></div>
                    <div class="search-section">
                        <div class="search-section2">
                            <div class="searching">
                                <h6>Search</h6>
                                <div class="search-here">
                                    <input class="enter-search" type="text" name="text" placeholder="Search for Anything">
                                </div>
                            </div>
                            <div class="searching">
                                <h6>Location</h6>
                                <div class="select-2">
                                    <select class="select-option">
                                        <option>Select Location</option>
                                        <option>Yaba</option>
                                        <option>Egbeda</option>
                                        <option>Victoria Island</option>
                                    </select>
                                    <div class="caret">
                                        <i class="fas fa-caret-down"></i>
                                    </div>
                                </div>
                            </div>
                            <div class="searching">
                                <h6>Category </h6>
                                <div class="select-2">
                                    <select class="select-option">
                                        <option>Select Category </option>
                                        <option>To Let</option>
                                        <option>For Sale</option>
                                        <option>Services</option>
                                        <option>PPA</option>
                                    </select>
                                    <div class="caret">
                                        <i class="fas fa-caret-down"></i>
                                    </div>
                                </div>
                            </div>
                            <div class="searching">
                                <div class="find-btn-click">
                                    <button class="find-btn">Find Now</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="categories">
                        <div>
                            <router-link to="ToLet"><img src="../../assets/images/tolet.svg"> </router-link>
                            <router-link to="ForSale"><img src="../../assets/images/for-sale.svg"> </router-link>
                            <router-link to="Services"><img src="../../assets/images/services.svg"> </router-link>
                            <router-link to="Ppa"><img src="../../assets/images/ppa.svg"> </router-link>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="most-recent">
            <div class="container">
                <div class="recent-text text-center">
                    <h4>Most Recent Updates</h4>
                    <p>Beautifully designed businesses, products and services platform to make your <br>NYSC days interesting, easy and comfortable</p>
                </div>
                <div class="row">
                    <div class="col-md-3">
                        <Products></Products>
                    </div>
                    <div class="col-md-3">
                        <Products></Products>
                    </div>
                    <div class="col-md-3">
                        <Products></Products>
                    </div>
                    <div class="col-md-3">
                        <Products></Products>
                    </div>
                </div>
                <div class="see-more text-center mt-5">
                    <button class="find-btn">See More</button>
                </div>
            </div>
        </div>

        <!-- Trending Section -->
        <div class="trending-product">
            <div class="container">
                <div class="recent-text text-center">
                    <h4>Trending Products and Services</h4>
                    <p>Beautifully designed businesses, products and services platform to make your <br>NYSC days interesting, easy and comfortable</p>
                </div>
                <div class="row">
                    <div class="col-md-3">
                        <Products></Products>
                    </div>
                    <div class="col-md-3">
                        <Products></Products>
                    </div>
                    <div class="col-md-3">
                        <Products></Products>
                    </div>
                    <div class="col-md-3">
                        <Products></Products>
                    </div>

                    <div class="col-md-3">
                        <Products></Products>
                    </div>
                    <div class="col-md-3">
                        <Products></Products>
                    </div>
                    <div class="col-md-3">
                        <Products></Products>
                    </div>
                    <div class="col-md-3">
                        <Products></Products>
                    </div>

                    <div class="col-md-3">
                        <Products></Products>
                    </div>
                    <div class="col-md-3">
                        <Products></Products>
                    </div>
                    <div class="col-md-3">
                        <Products></Products>
                    </div>
                    <div class="col-md-3">
                        <Products></Products>
                    </div>

                </div>
                <div class="see-more text-center mt-5">
                    <button class="find-btn">See More</button>
                </div>
            </div>
        </div>

        <!-- Trending Section end -->
        <Footer></Footer>
    </div>
</template>

<script>
    import HeaderNav from '../../components/HeaderNav/HeaderNav'
    import Products from '../../components/Products/Products'
    import Footer from '../../components/Footer/Footer'

    export default {
        name: "Landing.vue",
        components: {
            HeaderNav,
            Products,
            Footer
        }
    }
</script>

<style scoped>

</style>