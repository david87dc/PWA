
//Service Worker

if('serviceWorker' in navigator)
{
    console.log('Puedes usar los services worker en tu navgador');

    navigator.serviceWorker.register('./sw.js')
                            .then(res=>console.log('ServiceWorker cargado correctamente',res))
                            .catch(err=>console.log('ServiceWorker no se pudo registrar',err));
}
else{
    console.log('No puedes');

}
//Scroll Suavizado

$(document).ready(function(){
    $('#menu a').click(function(e){
        e.preventDefault();

        var target = $( $(this).attr('href') );

        console.log(target.offset().top);
        console.log($(this).attr('href'));
        if( target.length ) {
            event.preventDefault();
            $('html,body').animate({
                scrollTop: target.offset().top}
            );
          
        }

        return false;
    });
});