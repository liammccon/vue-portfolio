<template>
    <img src="./../assets/headshot-horn.jpeg" class="d-lg-none img-fluid ltm-photo-big" alt="Holding my horn"/>
    <div class="container-fluid ps-sm-2 pe-sm-2 ps-lg-4">
        <div class="row mt-lg-4">
            <div class="col-lg-8 text-start pt-lg-3">
                <h1 class="text-center">Hi, I'm Liam!</h1> 
                <h3 class="mt-2">I am a musician and programmer, finishing my undergrad with a major in music and a minor in computer science.</h3>
                
                <div class="fs-5 mt-2">
                    <p>I go to the Cleveland Insitute of Music and Case Western Reserve University.</p>
                    <p>I'm a freelance french hornist in the Cleveland area and have played with orchestras in Canton, Akron, Mansfield, and Firelands.
                    I have also played with the grammy-winning Cleveland Chamber Symphony. 
                    </p>
                    <p>My coding interests are in software and in web development (you're looking at a website I made right now!). 
                    I am familiar with Java, JavaScript, HTML, CSS, Python, and more. In fall 2022, I worked as a Teacher's Assistant at CWRU to teach 
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
    margin-top: -150px; /*Goes under the navbar*/
    margin-bottom: 20px;
}
</style>