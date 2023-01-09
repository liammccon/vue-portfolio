<template>
    <img src="./../assets/headshot-horn.jpeg" class="d-lg-none img-fluid ltm-photo-big" alt="Holding my horn"/>
    <!--Main Container - sets padding 'start' and top (ps, pt) for different sizes (sm, lg)-->
    <div class="container-fluid ps-xs-1 pe-xs-1 ps-md-4 pt-3 pt-lg-5">
        <div class="row mt-lg-4">
            <div class="col-lg-8 text-start pt-lg-3">
                <h1 class="text-center display-1 pb-1 border-dark border-bottom">About me</h1> 
                <!--TODO-->
                <p class="h3 mt-3 pb-1 text-center border-dark border-bottom">I am a musician and programmer, finishing my undergrad with a major in music and a minor in computer science.</p>
                
                <div class="fs-5 mt-3">
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
            <div class="col-lg-4">
                 <img src="./../assets/horn-pic-cutout.png" class="img-fluid d-none d-lg-block ltm-photo-1" alt="Photo of me holding my horn"/>
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
.ltm-photo-1 {
    min-width: 300px;
    max-height: 550px !important;
}
.ltm-photo-big {
    margin-bottom: 20px;
}

</style>