console.clear();

// 터치가 가능한 디바이스인지 체크하는 로직 시작
function detectTouchEnabled() {
  if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)){
    return true;
  }
  
  return false;

  // 아래 로직은 폐기 한다.
  // 왜냐하면, PC 브라우저라도 터치가 가능한게 있기 때문에, 단순히 터치가능여부를 모바일인지 아닌지로 구분하면 좋지 않다.
  /*
  return ( 'ontouchstart' in window ) || 
    ( navigator.maxTouchPoints > 0 ) || 
    ( navigator.msMaxTouchPoints > 0 );
  */
}

const isTouchEnabled = detectTouchEnabled();

function Touch__init() {
  if ( isTouchEnabled ) {
    $('html').addClass('touch-enabled');
  }
  else {
    $('html').addClass('touch-disabled');
  }
}

Touch__init();
// 터치가 가능한 디바이스인지 체크하는 로직 끝

if ( isTouchEnabled == false ) {
  $('body').niceScroll();
}