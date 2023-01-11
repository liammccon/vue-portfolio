<template>
    <div class="about">
        <div class="ltm-background-img">
                
            <!--
            <img src="./../assets/headshot-horn-compressed.jpeg" class="d-lg-none img-fluid ltm-photo-big" alt="Holding my horn"/>

            -->

            <div class="container-fluid ltm-title">
                <h1 class="text-center display-1 ltm-text-yellow pb-1 ltm-gradient-down">About me</h1> 
            </div>

            <!--Main Container - sets padding 'start' and top (ps, pt) for different sizes (sm, lg)-->
            <div class="container-fluid ps-xs-1 pe-xs-1 ps-md-4 ltm-main">

                <div class="row">
                    <div class="col-lg-2"></div>
                    <div class="col-lg-8 text-start pt-lg-3">
                        <!--TODO-->
                        <p class="h3 mt-3 text-center ltm-border-bottom ltm-border-top">I am a musician and programmer, finishing my undergrad with a major in french horn and a minor in computer science.</p>
                        
                        <div class="fs-5 mt-4">
                            <p>I am in my last semester at the Cleveland Insitute of Music and Case Western Reserve University.</p>
                            <p>I'm a freelance french hornist in the Cleveland area and have played with orchestras in the greater Cleveland area such as Canton, Akron, Mansfield, and Firelands.
                            I have also played with the grammy-winning Cleveland Chamber Symphony. 
                            </p>
                            <p>My coding interests are in software and in web development (you're looking at a website I made right now!). 
                            I have experience in Java, JavaScript, HTML, CSS, Python, and more. In fall 2022, I worked as a Teacher's Assistant at CWRU to teach 
                            Java and software principals to undergraduate students. 
                            </p>  
                        </div>
                        
                    </div>
                    <!--
                    <div class="col-lg-4">
                        <img src="./../assets/horn-pic-cutout.png" class="img-fluid d-none d-lg-block ltm-photo-1" alt="Photo of me holding my horn"/>
                    </div>
                    -->
                    <div class="col-lg-2"></div>
                </div>
            
                <h3>Navigating this site:</h3>
                <p>Go to <a href="Coding" class="ltm-page-link">Coding</a> to see my portfolio and some of my projects
                    <br/>To <a href="Music" class="ltm-page-link">Music</a> to see recordings of some of my performances
                    <br/> To <a href="Calendar" class="ltm-page-link">Calendar</a> to see my upcoming performances
                    <br/>And to <a href="Fun" class="ltm-page-link">Fun</a> to see some of my other interests and thoughts.
                </p>

                <img src="./../assets/liam-logo-small.svg" class="ltm-logo" alt="French horn logo"/>
            
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
    padding-top: 100vh;

}
.ltm-photo-1 {
    min-width: 300px;
    max-height: 550px !important;
}
.ltm-photo-big {
    margin-bottom: 20px;
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

.ltm-gradient-down {
    margin-bottom: 0px;
    background-image: linear-gradient(to bottom, 
        rgba(255,0,0,0), 
        rgba(0,0,0,.5), 
        rgba(0,0,0,.8));
}

</style>