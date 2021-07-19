var skroll = new Skroll()
   .add(".home__title",{
      animation:"zoomIn",
      duration:600
   })
   .add(".work__item",{
      animation:"fadeInUp",
      delay:120,
      duration:600,
      wait:250
   })
   .add(".anim3",{
      animation:"fadeInUp ",
      delay:100,
      duration:750
   })
   .add(".anim",{
      animation:"fadeInUp ",
      delay:100,
      duration:750
   })
   .add(".about__img",{
      animation:"growInLeft",
      delay:80,
      duration:500,
      easing:"cubic-bezier(0.37, 0.27, 0.24, 1.26)"
   })
   .init();