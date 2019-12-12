<template>
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
</template>

<script>
    export default {
        name: "MyPostItem.vue"
    }
</script>

<style scoped>

</style>