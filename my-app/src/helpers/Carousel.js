export function initializeCarousel() {
    var carousel = document.querySelector('.carousel');
    var cellCount = 12;
    var selectedIndex = 0;
  
    function rotateCarousel() {
      var angle = selectedIndex / cellCount * -360;
      carousel.style.transform = 'translateZ(-288px) rotateY(' + angle + 'deg)';
    }
  
    var prevButton = document.querySelector('.previous-button');
    prevButton.addEventListener('click', function () {
      selectedIndex--;
      rotateCarousel();
    });
  
    var nextButton = document.querySelector('.next-button');
    nextButton.addEventListener('click', function () {
      selectedIndex++;
      rotateCarousel();
    });
  }

// play carousel

  export function initializeCarousel2() {
    var carousel2 = document.querySelector('.carousel2');
    var cellCount2 = 12;
    var selectedIndex2 = 0;
  
    function rotateCarousel2() {
      var angle2 = selectedIndex2 / cellCount2 * -360;
      carousel2.style.transform = 'translateZ(-288px) rotateY(' + angle2 + 'deg)';
    }
  
    var prevButton2 = document.querySelector('.previous-button2');
    prevButton2.addEventListener('click', function () {
      selectedIndex2--;
      rotateCarousel2();
    });
  
    var nextButton2 = document.querySelector('.next-button2');
    nextButton2.addEventListener('click', function () {
      selectedIndex2++;
      rotateCarousel2();
    });
  }