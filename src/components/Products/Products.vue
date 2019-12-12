<template>
    <div class="products">
        <router-link to="View">
            <img src="../../assets/images/room.jpg">
            <div class="product-name">
                <div class="product-name2">
                    <h5>Hair Style</h5>
                    <div class="dot-menu  dropdown dropleft">
                        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" data-toggle="dropdown" >
                            <font-awesome-icon icon="ellipsis-v" class=""/>
                        </a>
                        <div class="dropdown-menu" >
                            <a class="dropdown-item" href="#">Contact Client</a>
                            <a class="dropdown-item" href="#">Share</a>
                        </div>
                    </div>
                </div>
                <p>Lagos, Nigeria</p>
            </div>
        </router-link>
    </div>
</template>

<script>
    export default {
        name: "Products.vue"
    }
</script>

<style scoped>

</style>