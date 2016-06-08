$(document).ready(function(){
  //ENTER TITLE ROW
  $("th").mouseenter(function(){
    $(this).css(
      {
        "border-style": "solid",
        "border": "none",
        "border-bottom": "1.5pt solid #01A6BD"
      }, 'slow'
    );
  });

  //LEAVE TITLE ROW
  $("th").mouseleave(function(){
    $(this).css(
      {
        "border-bottom": "2px solid #ddd"
      }
    );
  });

  //ENTER ROW
  $("td").mouseenter(function(){
    $(this).css(
      {
        "border-style": "solid",
        "border": "none",
        "border-bottom": "1.4pt solid #5CBF98"
      }, 'slow'
    );
  });

  //LEAVE ROW
  $("td").mouseleave(function(){
    $(this).css(
      {
        "border-bottom": "2px solid #ddd"
      }
    );
  });
});
