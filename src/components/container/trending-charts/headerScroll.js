window.onscroll  = function () {
    let scrolled = window.pageYOffset || document.documentElement.scrollTop;
    let header = document.querySelector('.trending-charts-header').style;
    let  headerContainer = document.querySelector('.circular-progress-bars-container').style;
    console.log(scrolled);
    if (scrolled >= 269) {
      header.background = '#2a2c3a';
      headerContainer.padding = '0';
    } else {
      header.background = 'linear-gradient(#2b2d3c, rgba(39, 41, 55, 0.0))';
      headerContainer.padding = '1cm 0 1cm 0';
    }
  };