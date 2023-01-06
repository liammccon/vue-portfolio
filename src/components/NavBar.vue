<template>
    <nav class="navbar navbar-expand-md navbar-dark bg-dark">
    <div class="container-fluid">
      <!---->
      <a class="navbar-brand fs-2" href="#">Liam</a>
      <!---->
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav ms-auto mb-2 mb-sm-0 fs-2 ">
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="#">About</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Media</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Calendar</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Coding</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Other</a>
          </li>
          
        </ul>
      </div>
    </div>
  </nav>
  </template>
  
  <script>
  export default {
    name: 'NavBar',
  }
  </script>
  
  <style scoped>
    .navbar{
      font-family: 'Yeseva One', cursive;
    }
    .nav-item {
        font-size: 24px;
        margin-right: 6px;
    }
  </style>