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
                            <h3>Password Reset</h3>
                            <p>To reset your password, enter the email address you use to sign in to iofrm</p>
                            <form>
                                <input class="form-control" type="text" name="username" placeholder="E-mail Address" required>
                                <div class="form-button full-width">
                                    <button id="submit" type="submit" class="ibtn btn-forget">Send Reset Link</button>
                                </div>
                            </form>
                        </div>
                        <div class="form-sent">
                            <div class="tick-holder">
                                <div class="tick-icon"></div>
                            </div>
                            <h3>Password link sent</h3>
                            <p>Please check your inbox <a href="http://brandio.io/cdn-cgi/l/email-protection" class="__cf_email__" data-cfemail="bbd2d4ddc9d6fbd2d4ddc9d6cfded6cbd7dacfde95d2d4">[email&#160;protected]</a></p>
                            <div class="info-holder">
                                <span>Unsure if that email address was correct?</span> <a href="#">We can help</a>.
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
        name: "Forget.vue",
        components: {
            HeaderNav,
        }
    }
</script>

<style scoped>

</style>