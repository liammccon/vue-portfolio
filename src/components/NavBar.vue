<template>
    <!--Navbar-->
    <nav id="ltm-navbar" class="navbar navbar-expand-lg navbar-dark bg-dark">
        <div class="container-fluid">
            
            <!--Name Text-->
            <a class="navbar-brand fs-2 ms-3" href="About">
                <!--Logo only visible on 'sm' screens and up('d-none d-sm-inline') -->
                <img src="./../assets/liam-logo-small.svg" class="ltm-logo d-none d-sm-inline" alt="French horn logo"/>
                <!--Left padding for the name only on 'sm' screens and up ('ps-sm-5')-->
                <span class="navbar-brand-text ps-sm-5">
                    Liam McConlogue
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
                        <a class="nav-link active" aria-current="page" href="About">About</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="Coding">Coding</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="Music">Music</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="Media">Media</a>
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

    .active {
        color: rgb(217, 188, 70) !important;
    }
    
  </style>