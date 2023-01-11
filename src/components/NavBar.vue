<template>
    <!--Navbar-->
    <nav id="ltm-navbar" class="navbar navbar-expand-md navbar-dark bg-transparent">
        <div class="container-fluid">
            
            <!--Name Text-->
            <router-link to="/" class="navbar-brand fs-2 ms-3">
                <!--Logo only visible on 'sm' screens and up('d-none d-sm-inline') -->
                <img src="./../assets/liam-logo-small.svg" class="ltm-logo d-none d-sm-inline d-md-none d-lg-inline" alt="French horn logo"/>
                <!--Left padding for the name only on 'sm' screens and up ('ps-sm-5')-->
                <span class="navbar-brand-text ps-sm-5 ps-md-0 p-lg-5">
                    Liam McConlogue
                </span>
            </router-link>

            <!--Toggle button-->
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            
            <!--Collapsing Links-->
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav ms-auto mb-2 mb-sm-0 fs-2 ">
                    
                    <!--Links-->
                    <li class="nav-item">
                        <router-link to="/" :class="{active: currentRoute==='/'}" class="nav-link">About</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link to="/coding" :class="{active: currentRoute==='/coding'}" class="nav-link">Coding</router-link>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="Music">Music</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="Calendar">Calendar</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="Fun">Fun</a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
</template>
  
  <script>
  export default {
    name: 'NavBar',
    data () {
      return {
        currentRoute: '/'
      }
    },
    methods: {
        /**
         * Updates the currentRoute field
         */
        updateCurrentRoute(){
            console.log(this.$route.path)
            this.currentRoute = this.$route.path
        }
    },
    watch: {
        $route() {
            this.updateCurrentRoute()
        }
    }
  }
  </script>
  
  <style scoped>
    .navbar{
    font-family: 'Yeseva One', cursive;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    background-image: linear-gradient(to top, 
        rgba(255,0,0,0), 
        rgba(0,0,0,.35),
        rgba(0,0,0,.6), 
        rgba(0,0,0,.9), 
        rgba(0,0,0,1));
    }
    .nav-item {
        font-size: 24px;
        font-size-adjust:3px;
        margin-right: 6px;
    }
    
    .container-fluid {
        position: relative; /*For the logo to be absolute*/
    }
    .ltm-logo {
        position: absolute;
        margin-top: -10px;
        left: 0;
        width: 100px;
        height: 60px;
    }

    .active {
        color: rgb(217, 188, 70) !important;
    }
    
  </style>