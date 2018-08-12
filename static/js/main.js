$(document).ready(function(){
    $('a.gallery').featherlightGallery({
        previousIcon: '<',     /* Code that is used as previous icon */
        nextIcon: '>',         /* Code that is used as next icon */
        galleryFadeIn: 100,          /* fadeIn speed when slide is loaded */
        galleryFadeOut: 300,
        variant: 'my-custom-featherlight',
        loading: 'Loading...'

    });
});