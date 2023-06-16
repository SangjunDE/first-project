$(document).ready(function() {
    // 로그인 버튼 클릭 시, 회원가입 창 숨기고 로그인 창 보이기
    $(".signinh2").click(function() {
      $(this).removeClass("h2on")
      $(".signuph2").addClass("h2on");
      $(".login-wrapper").removeClass("on");
      $(".signup-wrapper").addClass("on");
      
    });
  
    // 회원가입 버튼 클릭 시, 로그인 창 숨기고 회원가입 창 보이기
    $(".signuph2").click(function() {
      $(this).removeClass("h2on")
      $(".signinh2").addClass("h2on");  
      $(".signup-wrapper").removeClass("on");
      $(".login-wrapper").addClass("on");
    });
  });
  