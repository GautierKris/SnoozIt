(function($){

    $.fn.notif = function(options){

        var settings = {
            html : '<div class="ajax-notice">\
            <div class="ajax-notice-content">\
                <p>{{ subject }} {{ username }}</p>\
            </div>\
            </div>',
            timeout: false
        }

        var options = $.extend(settings, options);

        return this.each(function () {

        var $this = $(this);

            var $notifs = $('> .ajax-notices', this);
            var $notif  = $(Mustache.render(options.html, options));

            if($notifs.length == 0){
                $notifs = $('<div class="ajax-notices" />');
                $this.append($notifs);
            }
            $notifs.append($notif);
            if(options.timeout){
                setTimeout(function(){
                   $notif.delay(5000).fadeOut(3000);
                });
            }


            $notif.click(function (event) {
                event.preventDefault();
                $notif.remove();
            })
        });

    }

})(jQuery);