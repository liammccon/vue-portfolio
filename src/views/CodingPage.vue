<template>
    <div class="coding pt-5 mt-2">

        <!--Row for navigation and content-->
        <div class="row">
            <!--Navigation row-->
            <div class="col-sm-2 d-none d-sm-block">
                <ul class="sticky-top ltm-coding-nav text-start">
                    <li class="nav-item">
                        <a href="#about">About</a>
                    </li>
                    <li class="nav-item">
                        <a href="#skills">Skills</a>
                    </li>
                    <li class="nav-item">
                        <a href="#Projects">Projects</a>
                    </li>
                </ul>
            </div>
            
            <!--Content-->
            <div class="col-sm-10 ltm-coding-content">
                <DisplayHeading text="Coding" :borderBottom="false" data-toc-skip/>
                <h1 id="about">About</h1>
                <p>lorem</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut</p>
                <h1>MORE</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut</p>
            </div>
        </div>
        
       
    </div>
</template>

<script>
import DisplayHeading from '@/components/DisplayHeading.vue';
    export default {
        data(){
            return {
                items: [
                    {text: 'About', link: 'about'},
                    {text: 'Skills', link: 'kills'},
                    {text: 'Projects', link: 'projects'},
                    {text: 'Education', link: 'education'},
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
    top: 80px;
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