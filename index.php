<?php session_start(); require "vendor/autoload.php";

use Utils\Tracker;

$tracker = new Tracker();
$tracker->track();

?>
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link rel="stylesheet" href="/assets/css/index.css" />
    <!-- Google Fonts -->
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link
      href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap"
      rel="stylesheet"
    />

    <title>Lukkshield</title>
  </head>
  <body class="bg-black font-roboto">
    <header class="flex items-center justify-between h-[100px] text-white">
      <p class="translate-x-[150px] font-bold text-2xl uppercase">
        Lukk<span class="text-[#6C63FF]">shield</span>
      </p>
      <ul class="translate-x-[-150px] flex space-x-8 text-2xl font-normal">
        <li><a href="/privacy-policy">Privacy Policy</a></li>
        <li><a href="/auth/login">Login</a></li>
      </ul>
    </header>
    <section class="flex flex-1 justify-center space-x-4 items-center mt-12">
      <div class="flex flex-col justify-center">
        <p class="text-white w-[800px] font-semibold text-[96px]">
          All Your Data in One
          <span class="text-[#6C63FF] underline">Secure</span> Location.
        </p>
        <p class="text-white text-2xl">
          Want To Know How It Works ?
          <span class="underline">Try It Yourself.</span>
        </p>
        <button
          class="w-[220px] h-[60px] mt-11 rounded-2xl bg-white text-black text-[22px] font-semibold"
        >
          <a href="/auth/signup"> Sign Up Now </a>
        </button>
      </div>
      <div>
        <img src="/static/main-illustration.svg" alt="main illustration" />
      </div>
    </section>
    <footer
      class="text-xl flex justify-around items-center absolute bottom-0 h-[100px] w-full text-white"
    >
      <a href="">Github Repository</a>
      <p class="font-semibold">2024 © ALL RIGHTS RESERVED | LUKKSHIELD</p>
      <a href="">LUKKSHH</a>
    </footer>
    <?php  require "./components/cookie-consent.php" ?>
  </body>
</html>
