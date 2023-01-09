<template>
    <!--Navbar-->
    <nav id="ltm-navbar" class="navbar navbar-expand-md navbar-dark bg-dark">
        <div class="container-fluid">
            
            <!--Left Name Text-->
            <a class="navbar-brand fs-2 ms-3" href="#">
                <img src="./../assets/liam-logo-small.svg" class="ltm-logo" alt="French horn logo"/>
                <span class="navbar-brand-text">
                    Liam
                    <!--Show 'McConlogue' when navbar collapses -->
                    <span class="d-md-none">McConlogue</span> 
                    <!--Show 'McConlogue' only when navbar expands bigger than 'lg' breakpoint-->
                    <span class="d-none d-lg-inline">McConlogue</span> 
                </span>
                
            </a>
            
            
            <!--Toggle button-->
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            
            <!--Collapsing Links-->
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav ms-auto mb-2 mb-sm-0 fs-2 ">
                    
                    <!--Links-->
                    <li class="nav-item">
                        <a class="nav-link active" aria-current="page" href="#">About</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">Coding</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">Music</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">Media</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">Calendar</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">Fun</a>
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

      }
    },
  }
  </script>
  
  <style scoped>
    .navbar{
    font-family: 'Yeseva One', cursive;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    }
    .nav-item {
        font-size: 24px;
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


    .navbar-brand-text {
        padding-left: 50px;
    }
    
  </style>