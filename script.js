//setup
/*
$( function(){
  subcontents = $(".subcontent").toArray();
  navbtns = $(".navbtn").toArray();
  for(var i = 0; i < subcontents.length; i++){
      options.push(new Option(navbtns[i], subcontents[i]));
  }
  //alert(options.length);
  selected = options[0];
  options[0].select;
  selected.div.css = ("display", "auto");
});
*/
var contents;
var selected;
var shown;
var btns;
$( function(){
  shown = $("#home");
  shown.css("display", "inline");
  selected = $(".navbtn:eq(0)");
  selected.css("color", "black");
  selected.css("background-color", "white");

  btns = $(".navbtn");

  $("#walkthrough").html(w);

  btns.mouseenter(
    function(){
      HL($(this));
    });

  btns.mouseleave(
    function(){
      if(!$(this)[0].isSameNode(selected[0])){
        unHL($(this));
      }
    });

    btns.on('click touchstart',
      function(){
        if(!$(this)[0].isSameNode(selected[0])){
          unHL(selected);
          selected = $(this);
          HL(selected);
          showContent($(".subcontent").eq(selected.index()));
        }
    });

});

function HL(j){
  j.css("color", "black");
  j.css("background-color", "white");
}
function unHL(j){
  j.css("color", "white");
  j.css("background-color", "black");
}

function showContent(c){
    shown.css("display", "none");
    shown = c;
    shown.css("display", "inline");
}
