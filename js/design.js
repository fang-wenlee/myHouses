/* JavaScript Document */

$(document).ready(function(){

  $.getJSON('data.json', function(data) {


   var output='';
          $.each(data, function(key, val) {
              output += '<aside><a href="http://www.baytour.com/Nvt/index.aspx?hid=';
              output += val.hid + '&m=13" target="_blank" ><div class="posts-img" ';
              output += ' style="background:url(images/'+val.hid +'V1L.jpeg); background-size:cover; background-position:center;">';
              output += '</div></a>';
              output += '<div class="posts-detail"><h3><a href=#>'+ val.street + "," + val.city +'</a></h3>';
              output += '</div>';
              output += '</aside>';
          });
    /*      var output='';
                  $.each(data, function(key, val) {
                      output += '<aside><div class="container" style="background:url(../images/'+val.hid +'V1L.jpeg)">';
                    //  output += '<h3><a href=#>'+ val.street + "," + val.city +'</a></h3>';
                      output += '</div></aside>';
  output += '<div class="detail"> <h3><a href=#>'+ val.street + "," + val.city +'</a></h3>';
                      output += '</div></aside>';
                  }); */

    $('section.main .house-container').append(output);
  }); //get JSON


     $('nav a.mobile_menu').on('click', function(){

          var currentNavHeight = $('nav').height();
          if (currentNavHeight < 5){
              var newNavHeight = $('nav >ul').height() + 25;
               $('nav').animate({'height' : newNavHeight+ 'px'}, 750 )
          }
          else
          {
              $('nav').animate({'height' : '0px'}, 750, function(){
                $(this).removeAttr('style');
              })}//else


     });

    // $(window).resize(function(){
    //   if ($(this).width() > 625){
    //     $('nav').removeAttr('style'); }
    // })



});//ready
