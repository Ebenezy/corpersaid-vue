<template>
    <div class="corpersaid-landing">
        <HeaderNav></HeaderNav>
        <HeaderNav2></HeaderNav2>
        <div class="corpersaid-view">
            <div class="container">
                <div class="row ">
                    <div class="col-md-9">
                        <div class="service-sort">
                            <div class="serve">
                                <h3>PPA</h3>
                            </div>
                            <div class="sortby">
                                <p>Sort by:</p>
                                <div class="tab">
                                    <button class="tablinks active-tab" onclick="openCity(event, 'latest')">Latest</button>
                                    <button class="tablinks" >|</button>
                                    <button class="tablinks" onclick="openCity(event, 'all')">All</button>
                                </div>
                            </div>
                        </div>
                        <div id="latest" class="tabcontent">
                            <ToletItem></ToletItem>

                            <ToletItem></ToletItem>

                            <ToletItem></ToletItem>

                            <ToletItem></ToletItem>
                        </div>

                        <div id="all" class="tabcontent">
                            <ToletItem></ToletItem>
                        </div>

                    </div>
                    <div class="col-md-3">
                        <FilterListing></FilterListing>
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
    import ToletItem from '../../components/ToletItem/ToletItem'
    import FilterListing from '../../components/FilterListing/FilterListing'
    import Footer2 from '../../components/Footer/Footer2'

    export default {
        name: "Ppa.vue",
        components: {
            HeaderNav,
            HeaderNav2,
            ToletItem,
            FilterListing,
            Footer2
        }
    }
</script>

<style scoped>

</style>