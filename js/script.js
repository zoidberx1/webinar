$(function () {
    var $sections = $('.form-section');
    $('.success-block').hide();
    function navigateTo(index) {
      // Mark the current section with the class 'current'
      $sections
        .removeClass('current')
        .eq(index)
          .addClass('current');
      // Show only the navigation buttons that make sense for the current section:
      $('.form-navigation.previous').toggle(index > 0);
      var atTheEnd = index >= $sections.length - 1;
      $('.form-navigation.next').toggle(!atTheEnd);
      $('.form-navigation[type=submit]').toggle(atTheEnd);
    }
  
    function curIndex() {
      // Return the current index by looking at which section has the class 'current'
      return $sections.index($sections.filter('.current'));
    }
  
    // Previous button is easy, just go back
    $('.form-navigation.previous').click(function() {
      navigateTo(curIndex() - 1);
    });
  
    // Next button goes forward iff current block validates
    $('.form-navigation.next').click(function() {
     
        navigateTo(curIndex() + 1);
    });
  
    // Prepare sections by setting the `data-parsley-group` attribute to 'block-0', 'block-1', etc.

    navigateTo(0); // Start at the beginning
  });

  $( "#main-form" ).submit(function( event ) {
    $('#main-form').hide();
    $('.success-block').show();
    event.preventDefault();
  });


$(".icon-whatsapp").click(function () {
    $(".icon-email").addClass("icon-hidden");
    $(".icon-whatsapp").removeClass("icon-hidden");
    $("label[for='email']").addClass('input-hidden');
    $("input[name='email']").addClass('input-hidden');
    $("label[for='phone']").removeClass('input-hidden');
    $("input[name='phone']").removeClass('input-hidden');
  });
$(".icon-email").click(function () {
    $(".icon-whatsapp").addClass("icon-hidden");
    $(".icon-email").removeClass("icon-hidden");
    $("label[for='phone']").addClass('input-hidden');
    $("input[name='phone']").addClass('input-hidden');
    $("label[for='email']").removeClass('input-hidden');
    $("input[name='email']").removeClass('input-hidden');
});

$(document).ready(function() {
  function counter(){
      var CurrentSec = Number($( ".current" ).index( ".form-section" ))+1;
      var CountSec = Number($('.form-section').length);
      $('.current-sec').text(CurrentSec);
      $('.count-sec').text(CountSec);
  };
  counter();
  var timeinterval = setInterval(counter,10);
  function st2(){
      var st2Time = $( ".select2-selection__rendered" ).attr('title').split('|');
      var number = $( "input[name='phone']" ).val();
      $('.number').text(number);
      $('.step-2-head').text(st2Time[0]);
      $('.step-2-foot').text(st2Time[1]);
  };
  st2();
  var timeinterval = setInterval(st2,10);
}); 

function formatSearch(item) {
  var selectionText = item.text.split("|");
  var $returnString = $('<span class="time-head">' + selectionText[0] + '</span><span class="time-foot">' + selectionText[1] + '</span>');
  return $returnString;
};
function formatSelected(item) {
  var selectionText = item.text.split("|");
  var $returnString = $('<span class="time-head">' + selectionText[0] + '</span><span class="time-foot">' + selectionText[1] + '</span>');
  return $returnString;
};
$('select').select2({
  templateResult: formatSearch,
  templateSelection: formatSelected
});


var now = new Date();
var dateNow = new Date(now.getMonth()+1+'/'+now.getDate()+'/'+now.getFullYear()+' '+now.getHours()+':'+now.getMinutes());
var date1 = new Date(now.getMonth()+1+'/'+now.getDate()+'/'+now.getFullYear()+' '+(now.getHours()+1)+':00');
var diffHours1 = Math.trunc(Math.abs(date1.getTime() - dateNow.getTime()) / (1000 * 3600)); 
var diffMin1 = Math.ceil(((Math.abs(date1.getTime() - dateNow.getTime())/ (1000 * 3600)) - Math.trunc(Math.abs(date1.getTime() - dateNow.getTime()) / (1000 * 3600))) * 60); 

var sel = document.getElementById("existingList");

var opt1 = document.createElement("option");
opt1.text = "Сегодня в "+(now.getHours()+1)+":00|"+"Начало через "+diffMin1+" мин.";
sel.add(opt1, null);

var date2 = new Date(now.getMonth()+1+'/'+now.getDate()+'/'+now.getFullYear()+' 15:00');
var diffHours2 = Math.trunc(Math.abs(date2.getTime() - dateNow.getTime()) / (1000 * 3600)); 
var diffMin2 = Math.ceil(((Math.abs(date2.getTime() - dateNow.getTime())/ (1000 * 3600)) - Math.trunc(Math.abs(date2.getTime() - dateNow.getTime()) / (1000 * 3600))) * 60); 
var opt2 = document.createElement("option");
opt2.text = "Сегодня в 15:00|"+"Начало через "+diffHours2+" ч. "+diffMin2+" мин.";
if (date2 > dateNow && diffHours2 != diffHours1) {
    sel.add(opt2, null);
}