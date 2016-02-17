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

    // Affiche et masque les commentaires des sellComment
    $(function(){

        var element = $('.toggleSellComment');

        element.on('click', function(){

            var elementId = $(this).attr('rel');
            var container = $('#sellCommentContainer_'+elementId);

            if( container.hasClass('hidden')){
                container.removeClass('hidden');
                container.show();
            }
            container.toggle();

        });
    });

    // Pour afficher que des chiffres dans un input
    function supprimer_dernier_caractere(elm) {
        var val = $(elm).val();
        var cursorPos = elm.selectionStart;
        $(elm).val(
            val.substr(0,cursorPos-1) + // before cursor - 1
            val.substr(cursorPos,val.length) // after cursor
        )
        elm.selectionStart = cursorPos-1; // replace the cursor at the right place
        elm.selectionEnd = cursorPos-1;
    }

    // Supprime le dernier caractère s'il n'est pas alphanumérique sur evt keyup
    $('body').delegate('input.only_alpha_num','keyup',function(){
        if(!$(this).val().match(/^[0-9]*$/i)) // a-z et 0-9 uniquement
            supprimer_dernier_caractere(this);
    });


    $(function(){

        var copiecolleElement = document.getElementById('snoozit_user_bundle_localisation_codePostal');

        // Annulation du "coller" dans l'input texte auquel on a affecté l'identifiant "no_paste"
        if(copiecolleElement != null){

            copiecolleElement.addEventListener('keydown',
                function (foo){
                    if (foo.keyCode == 86)
                    {
                        // alert('Vous avez copié du texte');
                        foo.preventDefault();
                    }
                });
        }


    });
});