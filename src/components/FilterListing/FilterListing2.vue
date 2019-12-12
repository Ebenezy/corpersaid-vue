<template>
    <div class="contact-section">
        <div class="contact-info">
            <div class="product-price">
                <p>&#8358; 34,500</p>
            </div>
            <div class="img-icon">
                <img src="../../assets/images/img-icon.png">
            </div>
            <div class="user-name">
                <p class="user-name-bold">Amina David</p>
                <p>Lagos</p>
            </div>
            <div class="register-date">
                <p>Registered</p>
                <p class="registered-date">1 July, 2019</p>
            </div>
            <div class="show-contact">
                <button class="show-contact-btn">Show Contact</button>
            </div>
            <div class="start-chat">
                <badger-accordion>
                    <badger-accordion-item>
                        <template slot="header" >
                            <div class="start-chat2">
                                <button class="start-chat-btn" >Start Chat</button>
                            </div>
                        </template>
                        <template slot="content">
                            <div class="filter-keyword">
                                <label>Start Chatting</label>
                                <textarea class="search-keyword" type="text" name="text" placeholder="Enter your message here"></textarea>
                            </div>
                            <div class="show-contact">
                                <button class="show-contact-btn">Send Message</button>
                            </div>
                        </template>
                    </badger-accordion-item>
                </badger-accordion>
            </div>
        </div>

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
                <router-link to="Profile"><button class="show-contact-btn">Start Posting</button></router-link>
            </div>
        </div>

    </div>
</template>

<script>
    import {BadgerAccordion, BadgerAccordionItem} from 'vue-badger-accordion'

    export default {
        name: "FilterListing2.vue",
        components: {
            BadgerAccordion,
            BadgerAccordionItem
        }
    }
</script>

<style scoped>

</style>