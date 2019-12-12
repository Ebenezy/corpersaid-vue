<template>
    <div class="contact-section">
        <div class="filter-listing">
            <div class="filter-list">Filter Listing</div>
            <div class="filter-keywords">
                <div class="filter-keyword">
                    <label>Keyword</label>
                    <input class="search-keyword" type="text" name="text" placeholder="Search Anything">
                </div>
                <div class="filter-keyword">
                    <label>Price From</label>
                    <input class="search-keyword" type="text" name="text" placeholder="Minimum Price">
                </div>
                <div class="filter-keyword">
                    <label>Price To</label>
                    <input class="search-keyword" type="text" name="text" placeholder="Maximum Price">
                </div>
                <div class="filter-keyword">
                    <label>Location</label>
                    <div class="select-4">
                        <select class="select-option">
                            <option>All Location</option>
                            <option>Yaba</option>
                            <option>Egbeda</option>
                            <option>Victoria Island</option>
                        </select>
                        <div class="caret">
                            <font-awesome-icon icon="caret-down" class=""/>
                        </div>
                    </div>
                </div>
                <div class="filter-keyword mb-4">
                    <label>Categories</label>
                    <div class="select-4">
                        <select class="select-option">
                            <option>All Categories </option>
                            <option>To Let</option>
                            <option>For Sale</option>
                            <option>Services</option>
                            <option>PPA</option>
                        </select>
                        <div class="caret">
                            <font-awesome-icon icon="caret-down" class=""/>
                        </div>
                    </div>
                </div>
                <button class="show-contact-btn">Search Now</button>
            </div>
        </div>

        <div class="filter-listing">
            <div class="filter-list">Post Listing</div>
            <div class="filter-keywords pt-5">
                <router-link to="Profile"> <button class="show-contact-btn">Start Posting</button></router-link>
            </div>
        </div>

    </div>
</template>

<script>
    export default {
        name: "FilterListing.vue"
    }
</script>

<style scoped>

</style>