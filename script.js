$(document).ready(function(){
    var alfredSpeech ='Привет, гуманоиды';

    $('.js-showHide').click(function() {
        $('.alfred').toggleClass('-invisible');
    })

    $('.js-hello').click(function() {
        $('.bubble').text(alfredSpeech)
    });
});