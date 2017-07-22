<template>
  <div id="app">
    <head>
      <link href="https://fonts.googleapis.com/css?family=Roboto" rel="stylesheet">
    </head>

    <div class="imgcontainer">
      <img src="../assets/HELogo.png">
    </div>
    <body>
    <div class="login-page">
      <form class="register-form">

        <ol>
          <label><b>Username</b></label>

          <input type="text" placeholder="Username" name="uname" required>

          <label><b>Password</b></label>

          <input type="password" placeholder="Password" name="psw" required>

          <button type="submit">Login</button>

        </ol>

      </form>
    </div>
    <span class="psw">Forgot <a href="#">Password?</a></span>
    </body>
  </div>
</template>

<script>
  export default {
    name: 'app'
  }
</script>

<style>
  #app {
    font-family: 'Roboto', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    font-size: 24px;
    padding-top: 80px;

    background-color: #00ADEF;
  }

  .login-page{
    width: 80%;
    padding: 8% 0 0;
    margin: auto;
  }
  body{

    background-color: #00ADEF;
  }

  span[class=psw]{
    font-style: italic;
    color: #FFFFFF;

  }
  input[type=text], input[type=password] {
    width: 75%;
    text-align: left;
    padding: 12px 20px;
    margin: 45px 0;
    display: inline-block;
    border: 1px solid #ccc;
    box-sizing: border-box;
    background-color: #E0E0E0;
    font-color: #828282;
    font-size: 20px;
  }

  .register-form {
    position: relative;
    margin: 0 auto 100px;
    padding: 20px;
    width: 50%;
    background-color: #FFFFFF;
    text-align: center;
  }

  button {
    font-family: "Roboto", sans-serif;
    text-transform: uppercase;
    outline: 0;
    background: #000000;
    width: 70px;
    border: 0;
    padding: 15px;
    color: #FFFFFF;
    font-size: 14px;
    cursor: pointer;
    float: right;
  }

  button:hover {
    opacity: 0.5;
    color: #FFFFFF;
  }

</style>
