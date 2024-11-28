<?php session_start(); require __DIR__."/../vendor/autoload.php";

use Utils\Tracker;

$tracker = new Tracker();
$tracker->track();

?>
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link rel="stylesheet" href="/assets/css/signup.css" />
    <!-- Google Fonts -->
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link
      href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap"
      rel="stylesheet"
    />
    <script src="/assets/js/signup.js" defer></script>
    <title>Lukkshield | Login</title>
  </head>
  <body class="bg-black">
    <header class="flex items-center justify-between h-[100px] text-white">
      <p class="translate-x-[150px] font-bold text-2xl uppercase">
        Lukk<span class="text-[#6C63FF]">shield</span>
      </p>
      <ul class="translate-x-[-150px] flex space-x-8 text-2xl font-normal">
        <li><a href="/">Home</a></li>
        <li><a href="/privacy-policy">Privacy Policy</a></li>
      </ul>
    </header>
    <section class="flex justify-center items-center">
      <div
        class="w-[450px] min-h-[600px] translate-y-12 rounded-3xl bg-[#222222]"
      >
        <div class="flex space-x-4 items-center h-[155px]">
          <img class="ml-8" src="/static/logo.svg" alt="Logo" />
          <div class="h-1/2">
            <p class="text-white text-2xl font-semibold">
              LUKK<span class="text-[#6C63FF]">SHIELD</span> - Sign up
            </p>
          </div>
        </div>
        <form
          action=""
          class="flex flex-col justify-center items-center space-y-6 mt-4"
        >
          <div class="relative">
            <input
              autocomplete="off"
              class="peer p-4 placeholder-transparent outline-none text-white w-[390px] h-[55px] border-[#ffffff] border rounded-xl bg-transparent"
              id="email"
              type="email"
              placeholder=" "
            />
            <label
              for="email"
              class="absolute pl-1 pr-1 transition-all text-white bg-[#222222] peer-placeholder-shown:top-4 peer-placeholder-shown:left-4 peer-focus:-top-3 peer-focus:left-4 -top-3 left-4"
              >Email</label
            >
            <div id="email_error" class="text-red-500 w-[385px]"></div>
          </div>
          <div class="relative">
            <input
              autocomplete="off"
              class="peer p-4 placeholder-transparent outline-none text-white w-[390px] h-[55px] border-[#ffffff] border rounded-xl bg-transparent"
              id="password"
              type="password"
              placeholder=" "
            />
            <label
              for="password"
              class="absolute pl-1 pr-1 transition-all text-white bg-[#222222] peer-placeholder-shown:top-4 peer-placeholder-shown:left-4 peer-focus:-top-3 peer-focus:left-4 -top-3 left-4"
              >Password</label
            >
            <div id="password_error" class="text-red-500 w-[385px]"></div>
          </div>
          <div class="relative">
            <input
              autocomplete="off"
              class="peer p-4 placeholder-transparent outline-none text-white w-[390px] h-[55px] border-[#ffffff] border rounded-xl bg-transparent"
              id="repeat-password"
              type="password"
              placeholder=" "
            />
            <label
              for="repeat-password"
              class="absolute pl-1 pr-1 transition-all text-white bg-[#222222] peer-placeholder-shown:top-4 peer-placeholder-shown:left-4 peer-focus:-top-3 peer-focus:left-4 -top-3 left-4"
              >Repeat Password</label
            >
            <div id="rp_error" class="text-red-500 w-[385px]"></div>
          </div>

          <div class="w-[385px]">
            <p class="text-white">
              Already have an account?
              <a class="underline" href="/auth/login">Login</a>
            </p>
          </div>
          <button
            disabled
            id="signup_btn"
            class="w-[180px] h-[50px] rounded-2xl bg-white text-[20px] font-semibold disabled:bg-white/50 disabled:cursor-not-allowed"
          >
            Sign Up
          </button>
        </form>
      </div>
    </section>
    <footer
      class="text-xl flex justify-around items-center absolute bottom-0 h-[100px] w-full text-white"
    >
      <a href="">Github Repository</a>
      <p class="font-semibold">2024 © ALL RIGHTS RESERVED | LUKKSHIELD</p>
      <a href="">LUKKSHH</a>
    </footer>
  </body>
</html>
