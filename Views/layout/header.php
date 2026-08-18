<!DOCTYPE html>
<html lang="en">

<head>

  <meta charset="UTF-8">
  <meta
    name="viewport"
    content="width=device-width, initial-scale=1.0"
  >

  <title>City Explorer</title>


  <!-- =====================================================
       TAILWIND CSS
  ====================================================== -->

  <script src="https://cdn.tailwindcss.com"></script>


  <!-- =====================================================
       GSAP
  ====================================================== -->

  <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/gsap.min.js"></script>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/ScrollTrigger.min.js"></script>


  <!-- =====================================================
       CUSTOM CSS
  ====================================================== -->

 <link rel="stylesheet" href="./css/style.css">

</head>


<body>


  <!-- =====================================================
       HEADER
  ====================================================== -->

  <header class="site-header">

    <div class="header-inner">


      <!-- =================================================
           LOGO
      ================================================== -->

      <a
        href="#"
        class="logo"
      >

        <div class="logo-mark">

          <svg
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >

            <circle
              cx="12"
              cy="12"
              r="8.5"
              stroke="currentColor"
              stroke-width="1.3"
            />

            <path
              d="M14.5 9.5L10 14L9.5 10L14.5 9.5Z"
              fill="currentColor"
            />

          </svg>

        </div>


        <div class="logo-text">

          <span>
            City
          </span>

          <span>
            Explorer
          </span>

        </div>

      </a>


      <!-- =================================================
           HEADER ACTIONS
      ================================================== -->

      <div class="header-actions">


        <!-- LOGIN -->
        <a
          href="#"
          class="login-button"
        >
          Login / Register
        </a>


        <!-- BURGER -->
        <button
          id="menuToggle"
          class="menu-toggle"
          type="button"
          aria-label="Open menu"
          aria-expanded="false"
        >

          <span class="burger-line"></span>

          <span class="burger-line"></span>

        </button>

      </div>

    </div>

  </header>



  <!-- =====================================================
       FULLSCREEN MENU
  ====================================================== -->

  <div
    id="fullscreenMenu"
    class="fullscreen-menu"
  >


    <!-- BACKGROUND -->

    <div
      id="menuBg"
      class="menu-bg"
    ></div>



    <!-- ===================================================
         MENU CONTENT
    ==================================================== -->

    <div class="menu-inner">


      <!-- =================================================
           LEFT
      ================================================== -->

      <div class="menu-left">


        <div
          id="menuSubtitle"
          class="menu-subtitle"
        >
          Navigation
        </div>


        <ul class="menu-list">


          <li>

            <a
              href="#"
              class="menu-link menu-item"
            >
              Home
            </a>

          </li>


          <li>

            <a
              href="#"
              class="menu-link menu-item"
            >
              Explore
            </a>

          </li>


          <li>

            <a
              href="#"
              class="menu-link menu-item"
            >
              Destinations
            </a>

          </li>


          <li>

            <a
              href="#"
              class="menu-link menu-item"
            >
              About
            </a>

          </li>


          <li>

            <a
              href="#"
              class="menu-link menu-item"
            >
              Contact
            </a>

          </li>


        </ul>

      </div>



      <!-- =================================================
           RIGHT
      ================================================== -->

      <div
        id="menuRight"
        class="menu-right"
      >


        <!-- CONTACT -->

        <div>

          <p class="menu-right-title">
            Let's Talk
          </p>


          <a
            href="tel:+123456789"
            class="menu-contact-link"
          >
            +1 (234) 567-890
          </a>


          <a
            href="mailto:hello@cityexplorer.com"
            class="menu-contact-link"
          >
            hello@cityexplorer.com
          </a>

        </div>



        <!-- SOCIAL -->

        <div>

          <p class="menu-right-title">
            Follow
          </p>


          <div class="menu-social">

            <a
              href="#"
              class="menu-social-link"
            >
              Instagram
            </a>


            <a
              href="#"
              class="menu-social-link"
            >
              Facebook
            </a>

          </div>

        </div>



        <!-- MOBILE LOGIN -->

        <a
          href="#"
          class="mobile-login"
        >
          Login / Register
        </a>


      </div>

    </div>

  </div>