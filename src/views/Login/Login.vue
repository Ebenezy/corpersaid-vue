<template>
    <div class="registration-page">
        <HeaderNav></HeaderNav>
        <div class="form-body">
            <div class="website-logo">
                <a href="/">
                    <div class="logo">
                        <img class="logo-size" src="../../assets/images/logo-light.svg" alt="Corpers Aid">
                    </div>
                </a>
            </div>
            <div class="row">
                <div class="img-holder">
                    <div class="bg"></div>
                    <div class="info-holder">
                        <h3>Login to post your products and services.</h3>
                        <p>Access all Services, Products and Job Listing while on your NYSC Journey<br><br>
                            We provide comfort during your youth service year.</p>
                    </div>
                </div>
                <div class="form-holder">
                    <div class="form-content">
                        <div class="form-items">
                            <div class="page-links">
                                <router-link to="Login" class="active">Login</router-link><router-link to="Register" >Register</router-link>
                            </div>
                            <form>
                                <input class="form-control" type="text" name="username" placeholder="E-mail Address" required>
                                <input class="form-control" type="password" name="password" placeholder="Password" required>
                                <div class="form-button">
                                    <button id="submit" type="submit" class="ibtn">Login</button> <router-link to="Forget">Forget password?</router-link>
                                </div>
                            </form>
                            <div class="other-links">
                                <span>Or login with</span><router-link to="#"><font-awesome-icon :icon="{ prefix: 'fab', iconName: 'facebook-f' }" class="fa-facebook fb2"/></router-link><router-link to="#"><font-awesome-icon :icon="{ prefix: 'fab', iconName: 'google' }" class="fa-google fb2"/></router-link><router-link to="#"><font-awesome-icon :icon="{ prefix: 'fab', iconName: 'twitter' }" class="fa-twitter fb2"/></router-link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import HeaderNav from '../../components/HeaderNav/HeaderNav'
    export default {
        name: "Login.vue",
        components: {
            HeaderNav,
        }
    }
</script>

<style scoped>

</style>