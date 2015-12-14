$(document).ready(function(){
    // Gestion des abonnements en Ajax
    $(function(){

        var button = $('.ajaxNewAbo');

        button.on('click', function () {
            var element = $(this);
            var I = element.attr("id");
            var parent = element.parent().parent().parent().parent().parent();
            var loader = $("#loading"+I);

            $.ajax({
                type: "POST",
                url: Routing.generate('snoozit_follow_user', { 'id': I }),
                beforeSend: function(){
                    parent.css('background-color', '#f3f3fb');
                    loader.removeClass('hidden');
                    element.hide();
                },
                success: function(data){

                    parent.css('background-color', '#DFF2BF');
                    $(element).fadeOut(200).hide();
                    $('#remove'+I).removeClass('hidden').fadeIn(20).show();
                    loader.addClass('hidden');

                    // Animation
                    $('body').notif({ subject: data['subject'] ,username: data['username'], timeout: 3000});

                },
                error: function(response){
                    console.log(response.error());
                }
            });

            return false;
        });

    });

    // Gestion des suppression d'abonnements en AJAX
    $(function() {
        var button = $('.ajaxRemoveAbo');

        button.mouseover(function(){
            var i = $(this).find('i.fa-check');
            i.removeClass('fa-check').addClass('fa-remove');
            $(this).find('span.text').html('Se désabonner');
        }).mouseleave(function(){
            var i = $(this).find('i.fa-remove');
            i.removeClass('fa-remove').addClass('fa-check');

            $(this).find('span.text').html('Abonné');
        });

        button.on('click', function () {
            var element = $(this);
            var I = element.attr("rel");
            var parent = element.parent().parent().parent().parent();
            var loader = $("#loading"+I);

            $.ajax({
                type: "POST",
                url: Routing.generate('snoozit_follow_user', { 'id': I }),
                beforeSend: function(){
                    parent.css('background-color', '#f3f3fb');
                    loader.removeClass('hidden');
                    element.hide();
                },
                success: function(data){

                    parent.css('background-color', '#fff');
                    $(element).fadeOut(200).hide();
                    $('#remove'+I).addClass('hidden').fadeOut(20).hide();
                    $('.ajaxNewAbo[id='+I+']').removeClass('hidden').fadeIn(20).show();
                    loader.addClass('hidden');

                    // Animation
                    $('body').notif({ subject: data['subject'] , username: data['username'], timeout: 3000  });
                },
                error: function(response){
                    console.log(response.error());
                }
            });
            return false;

        });

    });

// PARTIE DU PROFILE

    // Gestion des abonnements utilisateurs à supprimer de la partie profile
    $(function () {
        var button = $('.ajaxRemoveAboProfile');

        button.on('click', function () {
            var element = $(this);
            var I = element.attr("rel");
            /* $("#loading").html('<img src="loader.gif" >'); */

            $.ajax({
                type: "POST",
                url: Routing.generate('snoozit_follow_user', { 'id': I }),
                success: function(data){

                    $('.ajaxRemoveAboProfile[rel='+I+']').addClass('hidden').fadeOut(20).hide();
                    $('#addProfile'+I).removeClass('hidden').fadeIn(20).show();

                    // Animation
                    $('body').notif({ subject: data['subject'] , username: data['username'], timeout: 3000  });
                },
                error: function(response){
                    console.log(response.error());
                }
            });
            return false;

        });

    });

    // Gestion des abonnements utilisateurs de la partie profile
    $(function () {
        var button = $('.ajaxAddAbo');

        button.on('click', function () {
            var element = $(this);
            var I = element.attr("rel");
            /* $("#loading").html('<img src="loader.gif" >'); */

            $.ajax({
                type: "POST",
                url: Routing.generate('snoozit_follow_user', { 'id': I }),
                success: function(data){

                    $('#addProfile'+I).addClass('hidden').fadeOut(20).hide();
                    $('.ajaxRemoveAboProfile[rel='+I+']').removeClass('hidden').fadeIn(20).show();

                    // Animation
                    $('body').notif({ subject: data['subject'] , username: data['username'], timeout: 3000  });
                },
                error: function(response){
                    console.log(response.error());
                }
            });
            return false;

        });

    });

    // Gestion des abonnements catégories à supprimer de la partie profile
    $(function () {
        var button = $('.ajaxRemoveAboCatProfile');

        button.on('click', function () {
            var element = $(this);
            var I = element.attr("rel");
            /* $("#loading").html('<img src="loader.gif" >'); */

            $.ajax({
                type: "POST",
                url: Routing.generate('snoozit_follow_category', { 'id': I }),
                success: function(data){

                    $('.ajaxRemoveAboCatProfile[rel='+I+']').addClass('hidden').fadeOut(20).hide();
                    $('#addCatProfile'+I).removeClass('hidden').fadeIn(20).show();

                    // Animation
                    $('body').notif({ subject: data['subject'] , username: data['username'], timeout: 3000  });
                },
                error: function(response){
                    console.log(response.error());
                }
            });
            return false;

        });

    });

    // Gestion des abonnements catégories de la partie profile
    $(function () {
        var button = $('.ajaxAddCatAbo');

        button.on('click', function () {
            var element = $(this);
            var I = element.attr("rel");

            $.ajax({
                type: "POST",
                url: Routing.generate('snoozit_follow_category', { 'id': I }),
                success: function(data){

                    $('#addCatProfile'+I).addClass('hidden').fadeOut(20).hide();
                    $('.ajaxRemoveAboCatProfile[rel='+I+']').removeClass('hidden').fadeIn(20).show();

                    // Animation
                    $('body').notif({ subject: data['subject'] , username: data['username'], timeout: 3000  });
                },
                error: function(response){
                    console.log(response.error());
                }
            });
            return false;

        });

    });

    // Gestion des abonnements city  à supprimer de la partie profile
    $(function () {
        var button = $('.ajaxRemoveAboCityProfile');

        button.on('click', function () {
            var element = $(this);
            var I = element.attr("rel");
            /* $("#loading").html('<img src="loader.gif" >'); */

            $.ajax({
                type: "POST",
                url: Routing.generate('snoozit_follow_city', { 'id': I }),
                success: function(data){

                    $('.ajaxRemoveAboCityProfile[rel='+I+']').addClass('hidden').fadeOut(20).hide();
                    $('#addCityProfile'+I).removeClass('hidden').fadeIn(20).show();

                    // Animation
                    $('body').notif({ subject: data['subject'] , username: data['username'], timeout: 3000  });
                },
                error: function(response){
                    console.log(response.error());
                }
            });
            return false;

        });

    });

    // Gestion des abonnements city de la partie profile
    $(function () {
        var button = $('.ajaxAddCityAbo');

        button.on('click', function () {
            var element = $(this);
            var I = element.attr("rel");
            /* $("#loading").html('<img src="loader.gif" >'); */

            $.ajax({
                type: "POST",
                url: Routing.generate('snoozit_follow_city', { 'id': I }),
                success: function(data){

                    $('#addCityProfile'+I).addClass('hidden').fadeOut(20).hide();
                    $('.ajaxRemoveAboCityProfile[rel='+I+']').removeClass('hidden').fadeIn(20).show();

                    // Animation
                    $('body').notif({ subject: data['subject'] , username: data['username'], timeout: 3000  });
                },
                error: function(response){
                    console.log(response.error());
                }
            });
            return false;

        });

    });

    // Gestion des abonnements departement à supprimer  de la partie profile
    $(function () {
        var button = $('.ajaxRemoveAboDepProfile');

        button.on('click', function () {
            var element = $(this);
            var I = element.attr("rel");
            /* $("#loading").html('<img src="loader.gif" >'); */

            $.ajax({
                type: "POST",
                url: Routing.generate('snoozit_follow_departement', { 'id': I }),
                success: function(data){

                    $('.ajaxRemoveAboDepProfile[rel='+I+']').addClass('hidden').fadeOut(20).hide();
                    $('#addDepProfile'+I).removeClass('hidden').fadeIn(20).show();

                    // Animation
                    $('body').notif({ subject: data['subject'] , username: data['username'], timeout: 3000  });
                },
                error: function(response){
                    console.log(response.error());
                }
            });
            return false;

        });

    });

    // Gestion des abonnements departementde de la partie profile
    $(function () {
        var button = $('.ajaxAddDepAbo');

        button.on('click', function () {
            var element = $(this);
            var I = element.attr("rel");
            /* $("#loading").html('<img src="loader.gif" >'); */

            $.ajax({
                type: "POST",
                url: Routing.generate('snoozit_follow_departement', { 'id': I }),
                success: function(data){

                    $('#addDepProfile'+I).addClass('hidden').fadeOut(20).hide();
                    $('.ajaxRemoveAboDepProfile[rel='+I+']').removeClass('hidden').fadeIn(20).show();

                    // Animation
                    $('body').notif({ subject: data['subject'] , username: data['username'], timeout: 3000  });
                },
                error: function(response){
                    console.log(response.error());
                }
            });
            return false;

        });

    });

    // Gestion des abonnements région à supprimer de la partie profile
    $(function () {
        var button = $('.ajaxRemoveAboRegProfile');

        button.on('click', function () {
            var element = $(this);
            var I = element.attr("rel");
            /* $("#loading").html('<img src="loader.gif" >'); */

            $.ajax({
                type: "POST",
                url: Routing.generate('snoozit_follow_region', { 'id': I }),
                success: function(data){

                    $('.ajaxRemoveAboRegProfile[rel='+I+']').addClass('hidden').fadeOut(20).hide();
                    $('#addRegProfile'+I).removeClass('hidden').fadeIn(20).show();

                    // Animation
                    $('body').notif({ subject: data['subject'] , username: data['username'], timeout: 3000  });
                },
                error: function(response){
                    console.log(response.error());
                }
            });
            return false;

        });

    });

    // Gestion des abonnements région de la partie profile
    $(function () {
        var button = $('.ajaxAddRegAbo');

        button.on('click', function () {
            var element = $(this);
            var I = element.attr("rel");
            /* $("#loading").html('<img src="loader.gif" >'); */

            $.ajax({
                type: "POST",
                url: Routing.generate('snoozit_follow_region', { 'id': I }),
                success: function(data){

                    $('#addRegProfile'+I).addClass('hidden').fadeOut(20).hide();
                    $('.ajaxRemoveAboRegProfile[rel='+I+']').removeClass('hidden').fadeIn(20).show();

                    // Animation
                    $('body').notif({ subject: data['subject'] , username: data['username'], timeout: 3000  });
                },
                error: function(response){
                    console.log(response.error());
                }
            });
            return false;

        });

    });

    // Gestion des refus d'abonnement
    $(function(){

        var button = $('.ajaxRefuseAbo');

        button.on('click', function () {
            var element = $(this);
            var I = element.attr("rel");
            var box = $('#box'+I);

            $.ajax({
                type: "POST",
                url: Routing.generate('snoozit_refuse_abonnement', { 'follower': I }),
                success: function(data){

                    box.fadeOut('slow');

                    // Animation
                    $('body').notif({ subject: data['subject'] , username: data['username'], timeout: 3000  });
                },
                error: function(response){
                    console.log(response.error());
                }
            });
            return false;

        });

    });

});