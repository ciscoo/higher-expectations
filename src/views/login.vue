<template>
  <html>
  <head>
    <link href="https://fonts.googleapis.com/css?family=Roboto" rel="stylesheet">
  </head>
  <body>

  <h2>
    <img src="../assets/HELogo.png">
  </h2>


  //TODO: Add the registration link
  <button onclick="document.getElementById('id01').style.display='block'" style="width:auto;">Login</button>
  <form action="http://google.com">
    <button type="button" style="width:auto;" class="Googlebtn">Register with Google</button>
  </form>

  <div id="id01" class="modal">

    <form class="modal-content animate">
      <div class="modalimg">
        <span onclick="document.getElementById('id01').style.display='none'" class="close" title="Close Modal">&times;</span>
        <img src="../assets/HELogo.png">
      </div>

      <div class="container">
        <label><b>Username</b></label>
        <input type="text" placeholder="Enter Username" name="uname" required>

        <label><b>Password</b></label>
        <input type="password" placeholder="Enter Password" name="psw" required>

        <button type="submit">Login</button>
        <input type="checkbox" checked="checked"> Remember me
        <span class="psw">Forgot <a href="#">password?</a></span>
      </div>

    </form>
  </div>
  </body>
  </html>
</template>

<script>
  export default {
    name: 'app'
  }

  // Get the modal
  var modal = document.getElementById('id01')

  // When the user clicks anywhere outside of the modal, close it
  window.onclick = function (event) {
    if (event.target === modal) {
      modal.style.display = 'none'
    }
  }
</script>

<style>
  #app {
    font-family: 'Roboto', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    font-size: 24px;
    background-color: #00ADEF;
  }

  /* Full-width input fields */
  input[type=text], input[type=password] {
    width: 100%;
    padding: 12px 20px;
    margin: 8px 0;
    display: inline-block;
    border: 1px solid #ccc;
    box-sizing: border-box;
    font-family: 'Roboto', sans-serif;
    background-color: #E0E0E0;
  }

  h2{
    font-family: 'Roboto', sans-serif;
  }
  body{
    background-color: #00ADEF;
    font-family: 'Roboto', sans-serif;
  }
  /* Set a style for all buttons */
  button {
    background-color: #000000;
    color: white;
    padding: 14px 20px;
    margin: 8px 0;
    border: none;
    cursor: pointer;
    width: 100%;
    text-transform: uppercase;
  }

  button:hover {
    opacity: 0.8;
  }

  .Googlebtn{
    background-color: #db3236;

  }

  .modalimg {
    margin: 24px 0 12px 0;
    position: relative;
  }

  .container {
    padding: 16px;
  }

  span.psw {
    float: right;
    padding-top: 16px;
  }

  /* The Modal (background) */
  .modal {
    display: none; /* Hidden by default */
    position: fixed; /* Stay in place */
    z-index: 1; /* Sit on top */
    left: 0;
    top: 0;
    width: 100%; /* Full width */
    height: 100%; /* Full height */
    overflow: auto; /* Enable scroll if needed */
    background-color: white; /* Fallback color */
    background-color: rgba(0,0,0,0.4); /* Black w/ opacity */
    padding-top: 60px;
  }

  /* Modal Content/Box */
  .modal-content {
    background-color: #00ADEF;
    margin: 5% auto 15% auto; /* 5% from the top, 15% from the bottom and centered */
    width: 70%; /* Could be more or less, depending on screen size */
  }

  /* The Close Button (x) */
  .close {
    position: absolute;
    right: 25px;
    top: 0;
    color: #000;
    font-size: 35px;
    font-weight: bold;
  }

  .close:hover,
  .close:focus {
    color: red;
    cursor: pointer;
  }

  /* Add Zoom Animation */
  .animate {
    -webkit-animation: animatezoom 0.6s;
    animation: animatezoom 0.6s
  }

  @-webkit-keyframes animatezoom {
    from {-webkit-transform: scale(0)}
    to {-webkit-transform: scale(1)}
  }

  @keyframes animatezoom {
    from {transform: scale(0)}
    to {transform: scale(1)}
  }

  /* Change styles for span and cancel button on extra small screens */
  @media screen and (max-width: 300px) {
    span.psw {
      display: block;
      float: none;
    }
    .cancelbtn {
      width: 100%;
    }
  }
</style>
