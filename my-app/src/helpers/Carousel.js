export function initializeCarousel() {
  var carousel = document.querySelector('.carousel');
  var cells = carousel.querySelectorAll('.carousel__cell');
  var cellCount = 12; // cellCount set from cells-range input value
  var selectedIndex = 0;
  var cellWidth = carousel.offsetWidth;
  var cellHeight = carousel.offsetHeight;
  var isHorizontal = true;
  var rotateFn = isHorizontal ? 'rotateY' : 'rotateX';
  var radius, theta;
  // console.log( cellWidth, cellHeight );
  
  function rotateCarousel() {
    var angle = theta * selectedIndex * -1;
    carousel.style.transform = 'translateZ(' + -radius + 'px) ' + 
      rotateFn + '(' + angle + 'deg)';
  }
  
  var prevButton = document.querySelector('.previous-button');
  prevButton.addEventListener( 'click', function() {
    selectedIndex--;
    rotateCarousel();
  });
  
  var nextButton = document.querySelector('.next-button');
  nextButton.addEventListener( 'click', function() {
    selectedIndex++;
    rotateCarousel();
  });
  
    theta = 360 / cellCount;
    var cellSize = isHorizontal ? cellWidth : cellHeight;
    radius = Math.round( ( cellSize / 2) / Math.tan( Math.PI / cellCount ) );
    for ( var i=0; i < cells.length; i++ ) {
      var cell = cells[i];
      if ( i < cellCount ) {
        // visible cell
        cell.style.opacity = 1;
        var cellAngle = theta * i;
        cell.style.transform = rotateFn + '(' + cellAngle + 'deg) translateZ(' + radius + 'px)';
      } else {
        // hidden cell
        cell.style.opacity = 0;
        cell.style.transform = 'none';
      }
    
  
    rotateCarousel();
  }}
  

  // plays carousel

  export function initializeCarousel2() {
    var carousel2 = document.querySelector('.carousel2');
    var cells2 = carousel2.querySelectorAll('.carousel__cell2');
    var cellCount2 = 5; // cellCount set from cells-range input value
    var selectedIndex2 = 0;
    var cellWidth2 = carousel2.offsetWidth;
    var cellHeight2 = carousel2.offsetHeight;
    var isHorizontal2 = true;
    var rotateFn2 = isHorizontal2 ? 'rotateY' : 'rotateX';
    var radius2, theta2;
    // console.log( cellWidth, cellHeight );
    
    function rotateCarousel2() {
      var angle2 = theta2 * selectedIndex2 * -1;
      carousel2.style.transform = 'translateZ(' + -radius2 + 'px) ' + 
        rotateFn2 + '(' + angle2 + 'deg)';
    }
    
    var prevButton2 = document.querySelector('.previous-button2');
    prevButton2.addEventListener( 'click', function() {
      selectedIndex2--;
      rotateCarousel2();
    });
    
    var nextButton2 = document.querySelector('.next-button2');
    nextButton2.addEventListener( 'click', function() {
      selectedIndex2++;
      rotateCarousel2();
    });
    
      theta2 = 360 / cellCount2;
      var cellSize2 = isHorizontal2 ? cellWidth2 : cellHeight2;
      radius2 = Math.round( ( cellSize2 / 2) / Math.tan( Math.PI / cellCount2 ) );
      for ( var i=0; i < cells2.length; i++ ) {
        var cell2 = cells2[i];
        if ( i < cellCount2 ) {
          // visible cell
          cell2.style.opacity = 1;
          var cellAngle = theta2 * i;
          cell2.style.transform = rotateFn2 + '(' + cellAngle + 'deg) translateZ(' + radius2 + 'px)';
        } else {
          // hidden cell
          cell2.style.opacity = 0;
          cell2.style.transform = 'none';
        }
      
    
      rotateCarousel2();
    }}