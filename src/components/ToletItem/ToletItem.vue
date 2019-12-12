<template>
    <div class="services-view">
        <div class="row">
            <div class="col-md-3">
                <div class="services-img">
                    <router-link to="View">
                        <img src="../../assets/images/room2.png">
                    </router-link>
                </div>
            </div>
            <div class="col-md-9">
                <div class="services-description">
                    <router-link to="View">
                        <h3>Office Assistance, At Cool Tech Hub</h3>
                        <div class="services-details">
                            <p>ero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti iusto odi iusto odi iusto odi iusto odi iusto odi iusto odios ducimus qui blanditiis praesentium voluptatum deleniti iusto odi iusto odi iusto odi iusto odi iusto odi iusto odi</p>
                        </div>
                    </router-link>
                    <div class="service-foot">
                        <div class="service-post">
                            <div class="date-posted">
                                <font-awesome-icon icon="clock" class="icon1"/>
                                <p>Posted: July 1, 2019</p>
                            </div>
                            <div class="date-posted">
                                <font-awesome-icon icon="map-marker-alt" class="icon1"/>
                                <p>Yaba, Lagos</p>
                            </div>
                        </div>
                        <div class="service-price">
                            <p>&#8358; 5,500</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "ToletItem.vue"
    }
</script>

<style scoped>

</style>