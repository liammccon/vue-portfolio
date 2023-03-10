<template>
    <div class="coding pt-5 mt-2">

        <!--Row for navigation and content-->
        <div class="row">
            <!--Sticky Top Navigation row - on screens below sm it is centered at the top, on sm and up it is sticky to the left top-->
            <div class="col-sm-3 ps-sm-5 mt-3 mt-sm-5">
                <ul class="sticky-sm-top ltm-coding-nav text-center text-sm-start">
                    <li class="nav-item">
                        <a href="#intro" class="ltm-nav-link" >Intro</a>
                    </li>
                    <li class="nav-item">
                        <a href="#skills" class="ltm-nav-link" >Skills</a>
                    </li>
                    <li class="nav-item">
                        <a href="#projects" class="ltm-nav-link" >Projects</a>
                    </li>
                </ul>
            </div>
            
            <!--Content. Has a left padding on small or larger screens-->
            <div class="col-sm-9 ltm-coding-content ps-sm-5 text-start mt-3 mt-sm-5">
                <DisplayHeading text="Coding" :borderBottom="false"  data-toc-skip/>
                <h1 id="intro" class="text-start mt-3 ltm-border-bottom">Introduction</h1>
                
                <p>Since learning to code in Python seven years ago, my passion for building applications and learning new tools has grown year after year.
                    I now hope to use my skills to contribute to the world in meaningful ways, and would love to work in the non-profit, public, or health sectors. 
                </p>
                <p>Through my Computer Science Minor at CWRU, I learned to write clean, maintainable, and well tested code. 
                    Then, I got to teach this to other students as a Teaching Assistant for the Software Craftstmanship class
                    by providing feedback on student Java projects in discussion sections. 
                </p>
                <p>Recently, I have been focusing on Frontend Web Development, 
                    having taken the Fullstack Web Development course at school and working on The Odin Project online course at home.
                    
                </p>

                <h1 id="skills" class="mt-5 ltm-border-bottom">Skills</h1>
                <h3 class="mt-4">Languages and Technologies</h3>

                <!--Skills cards: images and descriptions-->
                <div class="row row-cols-auto">
                    <div v-for="skill in skills" class="col">
                        <div class="card bg-transparent text-bg-dark ltm-skill-card">
                            <img :src="skill.img" class="card-img-top h-75" :alt="skill.text+'Logo'">
                                <div class="card-body">
                                    <p class="card-text text-center text-nowrap">{{skill.text}}</p>
                                </div>
                            </div>
                    </div>
                </div>

                <h3 class="mt-5">Design</h3>
                <ul>
                    <li>Graphic design</li>
                    <li>UI design</li>
                    <li>Logo design</li>
                    <h5><a href="https://photos.app.goo.gl/bqEytiELpsBCf9Wy8" class="ltm-text-yellow" target="_blank">View some examples here</a></h5>

                </ul>

                
                <!--Projects!-->
                <h1 id="projects" class="text-start ltm-border-bottom mt-4 mb-4">Projects</h1>

                <!--Project cards-->
                <div v-for="project in projects" class="card text-bg-dark ltm-card-border mb-3">
                    <div class="row">
                        <div class="col-md-7">
                            <div class="card-body">
                                <h5 class="card-title fs-3">{{project.title}}</h5>
                                <p class="card-text">{{project.description}}</p>
                                <p class="card-text"><small class="">Made with: {{ project.skills }}</small></p>
                                <p><a :href="project.github" target="_blank" class="ltm-text-yellow ">See on GitHub</a>
                                <br/><a :href="project.deployment" target="_blank" class="ltm-text-yellow ">Try it</a></p>

                            </div>
                        </div>
                        <div class="col-md-5">
                            <div class="ltm-hover-zoom">
                                <a :href="project.deployment" target="_blank">
                                    <img :src="project.img" alt="{{project.title}}" class="img-fluid"/>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                <!--
                    Experience and Education
                <h1 class="text-start ltm-border-bottom mt-5">Experience, Education</h1>
                -->
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
                    //Required for dynamic rendering of images in Vue
                    //Images from https://vecta.io/symbols/25/web-technologies 
                    {text: 'Java', img: require('@/assets/skills/java.svg')},
                    {text: 'HTML5', img: require('@/assets/skills/html5.svg')},
                    {text: 'CSS', img: require('@/assets/skills/css.svg')},
                    {text: 'JavaScript', img: require('@/assets/skills/javascript.svg')},
                    {text: 'JUnit', img:require('@/assets/skills/junit.png')},
                    {text: 'VueJs', img: require('@/assets/skills/vuejs.svg')},
                    {text: 'Bootstrap', img: require('@/assets/skills/bootstrap.svg')},
                    {text: 'Python', img:require('@/assets/skills/python.svg')},
                    {text: 'Git', img:require('@/assets/skills/git.svg')},
                    {text: 'GitHub', img:require('@/assets/skills/github.svg')},
                    {text: 'VS Code', img:require('@/assets/skills/vs-code.svg')},
                    {text: 'Android', img:require('@/assets/skills/android.svg')},
                    
                ],
                projects: [
                    {
                        title: 'This website - Portfolio', 
                        description: 'A portfolio website that demonstrates responsive front-end development, logo design, and UI/UX design.',
                        skills: 'HTML, JavaScript, CSS, Vue, Bootstrap, JQuery',
                        img: require('@/assets/projects/portfolio.png'),
                        github: 'https://github.com/liammccon/vue-portfolio',
                        deployment: 'https://liammccon.github.io/vue-portfolio'
                    },
                    {
                        title: 'Word Mash Game', 
                        description: 'This desktop web game tests your memory, typing speed, and spelling.',
                        skills: 'HTML, JavaScript, CSS, Vue, Bootstrap, JQuery',
                        img: require('@/assets/projects/word-mash-lg.png'),
                        github: 'https://github.com/liammccon/memory-typing-game',
                        deployment: 'https://liammccon.github.io/memory-typing-game/'
                    },
                    {
                        title: 'Task Manager', 
                        description: 'Add, update, and delete tasks with this task manager built with Material Design UI. Includes form entry and validation.',
                        skills: 'HTML, JavaScript, CSS, Vue, Material Design, Bootstrap, JQuery, Moment.js, Toastr.js',
                        img: require('@/assets/projects/task-manager.png'),
                        github: 'https://github.com/liammccon/task-manager',
                        deployment: 'https://liammccon.github.io/task-manager'
                    },
                    /* Template
                    {
                        title: '', 
                        description: '',
                        skills: '',
                        img: require('@/assets/projects/'),
                        github: '',
                        deployment: ''
                    },
                    */
                ]
            }
        },
        components: {
            DisplayHeading
        },
        methods: {

        }
    }
</script>

<style scoped>
.ltm-coding-nav {
    top: 100px;
}

/*For keeping the content scrolling while the sidebar is not */
.ltm-coding-content {
    overflow: auto !important;
}

.ltm-coding-content p {
    font-size: 20px;
}
ul {
  list-style-type: none;
}
.ltm-nav-link {
    font-size: 18px;
    text-decoration: none;
    color: rgb(168, 168, 168) !important;
}
.ltm-nav-link:hover {
    color: rgb(217, 188, 70) !important;
}

.ltm-skill-card {
    height: 100px;
    width: 100px;
    padding: 10px 0px 10px 0px;
    margin-top: 10px;
}

/* For skill card Zoom */
.ltm-skill-card {
    transition: transform .2s;
}
.ltm-skill-card:hover{
    transform: scale(1.15);
}

.ltm-card-border {
    border: 1px solid rgb(95, 83, 36)
}

/*For image zoom on Projects*/
.ltm-hover-zoom {
    border-radius: 5px;
    overflow: hidden;
    height: 100%;
}
.ltm-hover-zoom img {
    min-width: 100%;
    min-height: 100%;
    max-height: 12rem;
    border-radius: 5px;
    object-fit: cover;
    transition: 0.3s all ease-in-out;
}
.ltm-hover-zoom:hover img {
    transform: scale(1.15);
}

.card-body p {
    margin-bottom: 8px;
}

a {
    text-decoration: none;
}

</style>