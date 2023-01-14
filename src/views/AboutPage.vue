<template>
    <div class="about">
        <!--Background image and main container for about page-->
        <div class="ltm-background-img">

            <img class="img-fluid ltm-mobile-img d-none" src="./../assets/headshot-horn-compressed.jpeg"/>
            <div class="container-fluid ltm-title ps-0 pe-0">
                <!--Arrow icon with animation-->
                <div class="ltm-arrow">
                </div>
                <h1 class="text-center display-1 ltm-text-yellow pb-1 ltm-gradient-down ">
                    About me
                    <i class="fa-solid fa-chevron-down fa-beat-fade ltm-arrow" style="--fa-animation-duration: 1.5s; --fa-beat-fade-opacity: 0.7; --fa-beat-fade-scale: 1.3;"></i>
                </h1> 
            </div>


            <!--Main content - sets padding 'start' and top (ps, pt) for different sizes (sm, lg)-->
            <div class="container-fluid ps-xs-1 pe-xs-1 ps-md-4 ltm-main">

                <div class="row">
                    <div class="col-lg-2"></div>
                    <div class="col-lg-8 text-start pt-lg-3">
                        <!--TODO-->
                        <p class="h3 mt-3 text-center">I am a musician and programmer, finishing my undergrad with a major in french horn and a minor in computer science.</p>
                        
                        <div class="fs-5 mt-4 ltm-border-top ltm-border-bottom">
                            <p>I am in my last semester at the Cleveland Insitute of Music and Case Western Reserve University.</p>
                            <p>I'm a freelance french hornist in the Cleveland area and have played with orchestras in the greater Cleveland area such as Canton, Akron, Mansfield, and Firelands.
                            I have also played with the grammy-winning Cleveland Chamber Symphony. 
                            </p>
                            <p>My coding interests are in software and in web development (you're looking at a website I made right now!). 
                            I have experience in Java, JavaScript, HTML, CSS, Python, and more. In fall 2022, I worked as a Teacher's Assistant at CWRU to teach 
                            Java and software principals to undergraduate students. 
                            </p>  
                        </div>
                        <h3 class="mt-4 text-start">Navigating this site:</h3>
                <p class="text-start">Go to <router-link to="/coding" class="ltm-page-link ">Coding</router-link> to see my portfolio and some of my projects</p>
                <h5>Coming soon:</h5>    
                <p> <router-link to="/music" class="ltm-page-link ">Music</router-link> to see recordings of some of my performances
                    <br/> And to <router-link to="/calendar" class="ltm-page-link ">Calendar</router-link> to see my upcoming performances
                    <!--
                        Add later
                        <br/>And to <a href="Fun" class="ltm-page-link">Fun</a> to see some of my other interests and thoughts.
                    -->
                </p>
                    </div>
                    <div class="col-lg-2"></div>
                </div>
            
                <div class="container-fluid text-center text-light mt-4 pb-5 ltm-social-links ltm-text-yellow">
                    <a class="ltm-social-icon" href="https://www.linkedin.com/in/liam-mcconlogue-7978b21ba/" target="_blank">
                        <i class="fa-brands fa-linkedin"></i>
                    </a>
                    <a class="ltm-social-icon" href="https://www.youtube.com/channel/UCPKat5YvtIJ6vbCgLNObTVg" target="_blank">
                        <i class="fa-brands fa-youtube"></i>
                    </a>
                    <a class="ltm-social-icon" href="https://www.instagram.com/liammccon/" target="_blank">
                        <i class="fa-brands fa-instagram"></i>
                    </a>
                    <a class="ltm-social-icon" href="https://www.facebook.com/liammccon/" target="_blank">
                        <i class="fa-brands fa-facebook"></i>
                    </a>

                </div>
                <!--
                    My logo
                <img src="./../assets/liam-logo-small.svg" class="ltm-logo" alt="French horn logo"/>

                -->
            </div>
        </div>
    </div>
    
    
</template>

<script>
export default {
    name: 'AboutPage'
}
</script>

<style scoped>
.ltm-main {
    background-color: rgba(0,0,0,.8)
}
.ltm-title {
    padding-top: 88vh;
}
.ltm-arrow  {
    font-size: 48px;
}

.ltm-background-img {
    background-image: url(./../assets/headshot-horn-compressed.jpeg);
    background-size: cover;
    background-position: center;
    background-color: rgb(0,0,0);
    min-width: 100vw;
    min-height: 100vh;
    background-attachment: fixed;
}

@media (max-width: 700px) {
    .ltm-background-img {
        /* CSS that should be displayed if width is equal to or less than 700px goes here */
        background-image: url(./../assets/headshot-horn-centered.jpeg);
    }
}

.ltm-gradient-down {
    margin-bottom: 0px;
    background-image: linear-gradient(to bottom, 
        rgba(255,0,0,0), 
        rgba(0,0,0,.5), 
        rgba(0,0,0,.8));
}


/*Since background does not seem to stay fixed on mobile devices*/
@media (pointer:none), (pointer:coarse) {
    .ltm-background-img {
        background-image: none !important;
    }

    .ltm-mobile-img {
        display: block !important;
    }

    .ltm-title {
        padding-top: 0px !important;
    }

    .ltm-arrow {
        display: none;
    }

}

.ltm-social-links {
    font-size: 32px;
}
.ltm-social-icon {
    text-decoration: none;
    color: rgb(217, 188, 70);
    margin: 0 10px 0 10px;
    
}
.ltm-social-icon i {
    transition: transform .2s;
}
.ltm-social-icon i:hover {
    color: rgb(255, 235, 155);
    transform: scale(1.15);
}

</style>