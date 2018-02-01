$(document).ready(function(){
   $('.js-count').click(function() {
        showBubble($('.js-firstNumber').val() + $('.js-secondNumber').val());
   });
   function showBubble(text)  {
        $('.bubble').text(text);
        $('.bubble').addClass('-visible');
        setTimeout(function() {
            $('.bubble').removeClass('-visible')} , 2000);
   }
});


        var inputText =  $('.js-firstNumber').val();
        if (inputText == "") {
            showBubble("Вы ничего не ввели!");
        }  else {
            showBubble(inputText);
        }