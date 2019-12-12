<template>
    <div class="corpersaid-landing">
        <HeaderNav></HeaderNav>
        <HeaderNav2></HeaderNav2>

        <div class="corpersaid-view">
            <div class="container">
                <div class="row ">
                    <div class="col-md-9">
                        <div class="product-view">
                            <main>
                                <agile class="main" ref="main" :options="options1" :as-nav-for="asNavFor1">
                                    <div class="slide" v-for="(slide, index) in slides" :key="index" :class="`slide--${index}`"><img :src="slide"/></div>
                                </agile>
                                <agile class="thumbnails" ref="thumbnails" :options="options2" :as-nav-for="asNavFor2">
                                    <div class="slide slide--thumbniail" v-for="(slide, index) in slides" :key="index" :class="`slide--${index}`" @click="$refs.thumbnails.goTo(index)"><img :src="slide"/></div>
                                    <template slot="prevButton"><i class="fas fa-chevron-left"></i></template>
                                    <template slot="nextButton"><i class="fas fa-chevron-right"></i></template>
                                </agile>
                            </main>
                            <div class="product-img">
                            
                                <div class="product-description">
                                    <h3>Office Assistance, At Cool Tech Hub</h3>
                                    <div class="product-post">
                                        <div class="date-posted">
                                            <font-awesome-icon icon="clock" class="icon1"/>
                                            <p>Posted: July 1, 2019</p>
                                        </div>
                                        <div class="date-posted">
                                            <font-awesome-icon icon="map-marker-alt" class="icon1"/>
                                            <p>Yaba, Lagos</p>
                                        </div>
                                    </div>
                                    <div class="post-details">
                                        <h4>Post Details</h4>
                                        <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas </p>
                                    </div>
                                    <div class="share-on">
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

                            <div class="related-post">
                                <h4>Related Posts:</h4>
                                <div class="row">
                                    <div class="col-md-4">
                                        <Products></Products>
                                    </div>
                                    <div class="col-md-4">
                                        <Products></Products>
                                    </div>
                                    <div class="col-md-4">
                                        <Products></Products>
                                    </div>
                                    <div class="col-md-4">
                                        <Products></Products>
                                    </div>
                                    <div class="col-md-4">
                                        <Products></Products>
                                    </div>
                                    <div class="col-md-4">
                                        <Products></Products>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-3">
                        <FilterListing2></FilterListing2>
                    </div>
                </div>
            </div>
        </div>

        <Footer2></Footer2>
    </div>
</template>

<script>
    import HeaderNav from '../../components/HeaderNav/HeaderNav'
    import HeaderNav2 from '../../components/HeaderNav/HeaderNav2'
    import Products from '../../components/Products/Products'
    import FilterListing2 from '../../components/FilterListing/FilterListing2'
    import Footer2 from '../../components/Footer/Footer2'
    // import corpersaid from '../../assets/js/corpersaid.js'

    export default {
        name: "View.vue",
        components: {
            HeaderNav,
            HeaderNav2,
            Products,
            FilterListing2,
            Footer2,
            // corpersaid
        },
        methods:{
            
        },
        
        data () {
            return {
                asNavFor1: [],
                asNavFor2: [],
                options1: {
                    dots: false,
                    fade: true,
                    navButtons: false
                },
                
                options2: {
                    autoplay: true,
                    centerMode: true,
                    dots: false,
                    navButtons: false,
                    slidesToShow: 3,
                    responsive: [
                    {
                        breakpoint: 600,
                        settings: {
                            slidesToShow: 5
                        }
                    },
                    
                    {
                        breakpoint: 1000,
                        settings: {
                            navButtons: true
                        }
                    }
                ]
                    
                },
                
                slides: [
                        'https://images.unsplash.com/photo-1453831362806-3d5577f014a4?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&w=1600&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ',
                        'https://images.unsplash.com/photo-1496412705862-e0088f16f791?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&w=1600&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ',
                        'https://images.unsplash.com/photo-1506354666786-959d6d497f1a?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&w=1600&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ',
                        'https://images.unsplash.com/photo-1455619452474-d2be8b1e70cd?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&w=1600&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ',
                        'https://images.unsplash.com/photo-1504674900247-0877df9cc836?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&w=1600&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ',
                        'https://images.unsplash.com/photo-1472926373053-51b220987527?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&w=1600&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ',
                        'https://images.unsplash.com/photo-1497534547324-0ebb3f052e88?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&w=1600&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ'
                    ]
            }
        },
        mounted () {
            this.asNavFor1.push(this.$refs.thumbnails)
            this.asNavFor2.push(this.$refs.main)
        }
    }
</script>

<style scoped>

</style>