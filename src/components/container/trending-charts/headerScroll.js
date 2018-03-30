window.onscroll  = function () {
    let scrolled = window.pageYOffset || document.documentElement.scrollTop;
    let header = document.querySelector('.trending-charts-header').style;
    console.log(scrolled);
    if (scrolled >= 269) {
      header.background = '#2a2c3a'
    } else {header.background = 'linear-gradient(#2b2d3c, rgba(39, 41, 55, 0.0))'}
  };