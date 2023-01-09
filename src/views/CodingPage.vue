<template>
    <div class="coding pt-5 mt-2">

        <!--Row for navigation and content-->
        <div class="row">
            <!--Sticky Top Navigation row - is hidden on screens less than small-->
            <div class="col-sm-3 ps-sm-5">
                <ul class="sticky-sm-top ltm-coding-nav text-start">
                    <li class="nav-item">
                        <a href="#about">About</a>
                    </li>
                    <li class="nav-item">
                        <a href="#skills">Skills</a>
                    </li>
                    <li class="nav-item">
                        <a href="#projects">Projects</a>
                    </li>
                    <li class="nav-item">
                        <a href="#experience">Experience</a>
                    </li>
                </ul>
            </div>
            
            <!--Content. Has a left padding on small or larger screens-->
            <div class="col-sm-9 ltm-coding-content ps-sm-5 text-start">
                <DisplayHeading text="Coding" :borderBottom="false" data-toc-skip/>
                <h1 id="about" class="text-start">About</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni quia non placeat impedit fugit saepe nisi numquam quibusdam pariatur, laborum dolorem tenetur reiciendis qui blanditiis incidunt, earum sunt excepturi similique expedita eaque dolorum! Nostrum consequatur voluptatem, odit ratione nihil aut doloribus dolor exercitationem tempora ab placeat culpa explicabo ea nulla.</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni quia non placeat impedit fugit saepe nisi numquam quibusdam pariatur, laborum dolorem tenetur reiciendis qui blanditiis incidunt, earum sunt excepturi similique expedita eaque dolorum! Nostrum consequatur voluptatem, odit ratione nihil aut doloribus dolor exercitationem tempora ab placeat culpa explicabo ea nulla.</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni quia non placeat impedit fugit saepe nisi numquam quibusdam pariatur, laborum dolorem tenetur reiciendis qui blanditiis incidunt, earum sunt excepturi similique expedita eaque dolorum! Nostrum consequatur voluptatem, odit ratione nihil aut doloribus dolor exercitationem tempora ab placeat culpa explicabo ea nulla.</p>
                <h1 id="skills">Skills</h1>
                <h2>Languages and Technologies</h2>
                <h2>Other skills</h2>
                <ul>
                    <li>Graphic and logo design</li>
                </ul>
                <div class="row-cols-4">
                    
                </div>
                <h1 id="projects" class="text-start">Projects</h1>
            </div>
        </div>
        
       
    </div>
</template>

<script>
import DisplayHeading from '@/components/DisplayHeading.vue';
    export default {
        data(){
            return {
                skills: [
                    {text: 'Java', img: 'java.svg'},
                    {text: 'HTML5', img: 'html.svg'},
                    {text: 'CSS', img: 'css.svg'},
                    {text: 'JavaScript', img: 'javascript.svg'},
                    {text: 'VueJs', img: 'vuejs.svg'},
                    {text: 'Bootstrap', img: 'bootstrap.svg'},
                    {text: 'Python', img:'python.svg'},
                    {text: 'Git', img:'git.svg'},
                    {text: 'GitHub', img:'github.svg'}
                ]
            }
        },
        components: {
            DisplayHeading
        }
    }
</script>

<style scoped>
.ltm-coding-nav {
    top: 100px;
}
.ltm-coding-content {
    overflow: auto !important;
}
ul {
  list-style-type: none;
}
a {
    font-size: 18px;
    text-decoration: none;
    color: rgb(168, 168, 168) !important;
}
a:hover {
    color: rgb(217, 188, 70) !important;
}
</style>