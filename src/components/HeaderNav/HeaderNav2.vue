<template>
    <div class="header2">
        <div class="container">
            <div class="search-anything">
                <div class="search-here">
                    <input class="enter-search2" type="text" name="text" placeholder="Search for anything here ( Bags, PPA, Apartments, etc)">
                    <button class="search-icon"><font-awesome-icon icon="search" class=""/> </button>
                </div>
                <div class="select-3">
                    <select class="select-option2">
                        <option>Select Location</option>
                        <option>Yaba</option>
                        <option>Egbeda</option>
                        <option>Victoria Island</option>
                    </select>
                    <div class="caret">
                        <font-awesome-icon icon="caret-down" class=""/>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "HeaderNav2.vue"
    }
</script>

<style scoped>

</style>