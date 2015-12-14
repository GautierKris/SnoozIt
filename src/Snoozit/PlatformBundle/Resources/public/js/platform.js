$(document).ready(function(){

    $('.dropdown-toggle').dropdown();

    $(function(){

        if ($('#selectedCategory').length > 0) {

            var element = $('#selectedCategory');
            var targetRel = element.attr('rel');
            var targetMenu   = $('.mainCategoryMenu[rel="'+targetRel+'"]');


            targetMenu.each(function () {
                $( this ).slideToggle().addClass('actif');
            });

        }

    });

    /** fonction pour afficher le menu en accordéon **/
    $(function () {

        var button =  $('.mainParentCategoryMenu');

        button.on('click', function(){

            var targetRel    = $(this).attr('rel');
            var targetMenu   = $('.mainCategoryMenu[rel="'+ targetRel+'"]');

            targetMenu.each(function () {
                $( this ).slideToggle().addClass('actif');
            });

        });

    });

    /** fonction pour toggle les blocs des annonces **/
    $(function (){
        var button = $('.toggleblock');

        button.on('click', function(){

            var select = $( this );
            var target = '#'+select.data('target')

            $(target).toggle('slow', function(){
                if(select.hasClass('fa-angle-up')){
                    select.removeClass('fa-angle-up').addClass('fa-angle-down');
                    console.log("1");
                }
                else{
                    select.removeClass('fa-angle-down').addClass('fa-angle-up');
                    console.log("2");
                }

            });

        });
    });

    /** Fonction pour toggle les formulaires cachés **/
    $(function(){
        var form    = $('.hidden-form').attr('id');
        var button  = $('.btn-hidden-form');

        button.on('click', function(){
            var target = $( this ).attr('data-target');

            $(target).toggle();
        })

    });

    /** La partie pour les message flashbag **/
    $(function(){
        var container = $('.flash-notice');

        container.each(function(){
            $(this).delay(2500).animate($(this).fadeOut());
        });

        container.click(function(){
            $(this).hide();
        });
    });

    // File Upload de AddAnnonce Preview d'image
    $(function(){
        function readURL(input, count) {
            if (input.files && input.files[0]) {
                var reader = new FileReader();

                reader.onload = function (e) {
                    console.log('ok');
                    $("#imgUpl_"+count).attr('src', e.target.result);
                    $("#fileUpload_"+count).addClass('btn-success');
                }

                reader.readAsDataURL(input.files[0]);
            }
        }

        $(".imgUpl").change(function(){
            var count = $(this).attr('id');
            readURL(this, count);
        });
    });

    // Gestions des filtres d'annonces
    $(function(){
        $("#formFilters").on("change", "input:checkbox", function(event){
            $("#formFilters").submit();
            event.event.preventDefault();
        });

        $("#formRegionFilters").on("change",function(event){
            $(this).submit();
            event.event.preventDefault();
        });

    });


});