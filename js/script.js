    /* =====================================================
       ELEMENTS
    ====================================================== */

    const menuButton =
        document.getElementById(
            "menuToggle"
        );


    const menu =
        document.getElementById(
            "fullscreenMenu"
        );


    const menuBg =
        document.getElementById(
            "menuBg"
        );


    const menuSubtitle =
        document.getElementById(
            "menuSubtitle"
        );


    const menuItems =
        document.querySelectorAll(
            ".menu-item"
        );


    const menuRight =
        document.getElementById(
            "menuRight"
        );


    const line1 =
        menuButton.querySelector(
            ".burger-line:nth-child(1)"
        );


    const line2 =
        menuButton.querySelector(
            ".burger-line:nth-child(2)"
        );


    let menuOpen = false;
    let savedScrollPosition = 0;



    /* =====================================================
       GSAP TIMELINE
    ====================================================== */

    const menuTimeline =
        gsap.timeline({
            paused: true
        });



    /* =====================================================
       OPEN MENU
    ====================================================== */

    menuTimeline

        /*
         * Make menu visible
         */

        .set(
            menu, {
                visibility: "visible",

                pointerEvents: "auto"
            }
        )


        /*
         * Background
         */

        .to(
            menuBg, {
                y: "0%",

                duration: 0.8,

                ease: "power4.inOut"
            }
        )


        /*
         * Subtitle
         */

        .fromTo(
            menuSubtitle,

            {
                y: 40,

                opacity: 0
            },

            {
                y: 0,

                opacity: 1,

                duration: 0.5,

                ease: "power3.out"
            },

            "-=0.35"
        )


        /*
         * Navigation links
         */

        .fromTo(
            menuItems,

            {
                y: 120,

                opacity: 0
            },

            {
                y: 0,

                opacity: 1,

                duration: 0.8,

                stagger: 0.07,

                ease: "power4.out"
            },

            "-=0.3"
        )


        /*
         * Right side
         */

        .fromTo(
            menuRight.children,

            {
                y: 30,

                opacity: 0
            },

            {
                y: 0,

                opacity: 1,

                duration: 0.5,

                stagger: 0.1,

                ease: "power3.out"
            },

            "-=0.5"
        )



        /* ===================================================
           BURGER → X
        ==================================================== */

        .to(
            line1, {
                rotation: 45,

                y: 4,

                duration: 0.3,

                ease: "power2.out"
            },
            0
        )


        .to(
            line2, {
                rotation: -45,

                y: -4,

                duration: 0.3,

                ease: "power2.out"
            },
            0
        );



    /* =====================================================
       BUTTON CLICK
    ====================================================== */

    menuButton.addEventListener("click", () => {

        menuOpen = !menuOpen;

        menuButton.setAttribute(
            "aria-expanded",
            menuOpen
        );


        /* ==========================================
           OPEN
        ========================================== */

        if (menuOpen) {

            /*
             * Remember exactly where the page is.
             */
            savedScrollPosition = window.scrollY;


            /*
             * Lock the body at its current position.
             *
             * Negative top keeps the visible page exactly
             * where it was.
             */
            document.body.style.top =
                `-${savedScrollPosition}px`;


            document.body.classList.add(
                "menu-open"
            );


            /*
             * Open fullscreen menu.
             */
            menuTimeline.play();


        }


        /* ==========================================
           CLOSE
        ========================================== */
        else {

            /*
             * Start closing animation.
             */
            menuTimeline.reverse();


            /*
             * Unlock body.
             */
            document.body.classList.remove(
                "menu-open"
            );


            document.body.style.top = "";


            /*
             * Return to EXACT previous position.
             */
            window.scrollTo(
                0,
                savedScrollPosition
            );

        }

    });


    /* =====================================================
       CLOSE MENU AFTER REVERSE
    ====================================================== */

    menuTimeline.eventCallback(
        "onReverseComplete",
        () => {

            gsap.set(
                menu, {
                    visibility: "hidden",

                    pointerEvents: "none"
                }
            );

        }
    );



    /* =====================================================
       CLOSE WHEN CLICKING NAVIGATION
    ====================================================== */

    menuItems.forEach((item) => {

        item.addEventListener("click", () => {

            menuOpen = false;

            menuButton.setAttribute(
                "aria-expanded",
                "false"
            );


            /*
             * Close menu.
             */
            menuTimeline.reverse();


            /*
             * Unlock background page.
             */
            document.body.classList.remove(
                "menu-open"
            );


            document.body.style.top = "";


            /*
             * Restore previous page position.
             */
            window.scrollTo(
                0,
                savedScrollPosition
            );

        });

    });



/* =====================================================
   GSAP PLUGINS
===================================================== */

gsap.registerPlugin(ScrollTrigger);


/* =====================================================
   HERO ELEMENTS
===================================================== */

const heroWord1 =
  document.getElementById("heroWord1");

const heroWord2 =
  document.getElementById("heroWord2");

const heroLocation =
  document.getElementById("heroLocation");

const heroDescription =
  document.getElementById("heroDescription");

const heroCTA =
  document.getElementById("heroCTA");

const scrollIndicator =
  document.getElementById("scrollIndicator");

const heroCircle =
  document.getElementById("heroCircle");

const heroLine =
  document.getElementById("heroLine");


/* =====================================================
   INITIAL STATES
===================================================== */

gsap.set(heroWord1, {
  y: 180,
  opacity: 0
});


gsap.set(heroWord2, {
  y: 180,
  opacity: 0
});


gsap.set(heroLocation, {
  y: 20,
  opacity: 0
});


gsap.set(heroDescription, {
  y: 30,
  opacity: 0
});


gsap.set(heroCTA, {
  y: 30,
  opacity: 0
});


gsap.set(scrollIndicator, {
  opacity: 0
});


gsap.set(heroCircle, {
  scale: 0.7,
  opacity: 0,
  rotation: -20
});


gsap.set(heroLine, {
  scaleX: 0
});


/* =====================================================
   HERO TIMELINE
===================================================== */

const heroTimeline =
  gsap.timeline({
    defaults: {
      ease: "power4.out"
    }
  });


heroTimeline


  /* -----------------------------------------
     Circle
  ----------------------------------------- */

  .to(heroCircle, {

    scale: 1,

    opacity: 1,

    rotation: 0,

    duration: 1.4,

    ease: "power3.out"

  })


  /* -----------------------------------------
     Horizontal line
  ----------------------------------------- */

  .to(heroLine, {

    scaleX: 1,

    duration: 1,

    ease: "power3.inOut"

  }, "-=1")


  /* -----------------------------------------
     Location
  ----------------------------------------- */

  .to(heroLocation, {

    y: 0,

    opacity: 1,

    duration: 0.6

  }, "-=0.7")


  /* -----------------------------------------
     CITY
  ----------------------------------------- */

  .to(heroWord1, {

    y: 0,

    opacity: 1,

    duration: 1

  }, "-=0.4")


  /* -----------------------------------------
     EXPLORER
  ----------------------------------------- */

  .to(heroWord2, {

    y: 0,

    opacity: 1,

    duration: 1

  }, "-=0.7")


  /* -----------------------------------------
     Description
  ----------------------------------------- */

  .to(heroDescription, {

    y: 0,

    opacity: 1,

    duration: 0.7

  }, "-=0.5")


  /* -----------------------------------------
     CTA
  ----------------------------------------- */

  .to(heroCTA, {

    y: 0,

    opacity: 1,

    duration: 0.6

  }, "-=0.4")


  /* -----------------------------------------
     Scroll indicator
  ----------------------------------------- */

  .to(scrollIndicator, {

    opacity: 1,

    duration: 0.5

  }, "-=0.2");


/* =====================================================
   FLOATING CIRCLE
===================================================== */

gsap.to(heroCircle, {

  y: 15,

  duration: 4,

  repeat: -1,

  yoyo: true,

  ease: "sine.inOut"

});


/* =====================================================
   INTRO SECTION REVEAL
===================================================== */

gsap.from(".section-number", {

  scrollTrigger: {

    trigger: ".intro-section",

    start: "top 75%",

    toggleActions:
      "play none none reverse"

  },

  y: 30,

  opacity: 0,

  duration: 0.6,

  ease: "power3.out"

});


gsap.from(".section-title", {

  scrollTrigger: {

    trigger: ".intro-section",

    start: "top 70%",

    toggleActions:
      "play none none reverse"

  },

  y: 100,

  opacity: 0,

  duration: 1,

  ease: "power4.out"

});


gsap.from(".intro-content", {

  scrollTrigger: {

    trigger: ".intro-section",

    start: "top 65%",

    toggleActions:
      "play none none reverse"

  },

  y: 60,

  opacity: 0,

  duration: 0.9,

  ease: "power3.out"

});


/* =====================================================
   CITY CARDS
===================================================== */

gsap.from(".city-card", {

  scrollTrigger: {

    trigger: ".cities-section",

    start: "top 75%",

    toggleActions:
      "play none none reverse"

  },

  y: 80,

  opacity: 0,

  duration: 0.9,

  stagger: 0.15,

  ease: "power4.out"

});


/* =====================================================
   FINAL SECTION
===================================================== */

gsap.from(".final-label", {

  scrollTrigger: {

    trigger: ".final-section",

    start: "top 75%",

    toggleActions:
      "play none none reverse"

  },

  y: 30,

  opacity: 0,

  duration: 0.6,

  ease: "power3.out"

});


gsap.from(".final-title", {

  scrollTrigger: {

    trigger: ".final-section",

    start: "top 70%",

    toggleActions:
      "play none none reverse"

  },

  y: 120,

  opacity: 0,

  duration: 1.1,

  ease: "power4.out"

});


gsap.from(".final-link-wrapper", {

  scrollTrigger: {

    trigger: ".final-section",

    start: "top 65%",

    toggleActions:
      "play none none reverse"

  },

  y: 40,

  opacity: 0,

  duration: 0.7,

  ease: "power3.out"

});

