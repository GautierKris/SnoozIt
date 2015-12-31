var cache = {};

$(document).ready(function(){
    $("input[data-id=codePostal], input[data-id=city]").autocomplete({
        source: function (request, response)
        {
            //Si la réponse est dans le cache
            if (request.term in cache)
            {
                response($.map(cache[request.term], function (item)
                {
                    return {
                        label: item.CodePostal + ", " + item.city,
                        value: function ()
                        {
                            if ($(this).attr('data-id') == 'codePostal')
                            {
                                $('input[data-id=city]').val(item.city);
                                return item.CodePostal;
                            }
                            else
                            {
                                $('input[data-id=codePostal]').val(item.CodePostal);
                                return item.city;
                            }
                        }
                    };
                }));
            }
            //Sinon -> Requete Ajax
            else
            {

                var objData = {};
                var url = $(this.element).attr('data-url');
                if ($(this.element).attr('data-id') == 'codePostal')
                {
                    objData = { codePostal: request.term };
                }
                else
                {
                    objData = { city: request.term };
                }

                $.ajax({
                    url: url,
                    dataType: "json",
                    data : objData,
                    type: 'POST',
                    success: function (data)
                    {
                        console.log(data);
                        //Ajout de reponse dans le cache
                        cache[request.term] = data;
                        response($.map(data, function (item)
                        {
                            return {
                            label: item.CodePostal + ", " + item.City,
                                value: function ()
                                {
                                    if ($(this).attr('data-id') == 'codePostal')
                                    {
                                        $('input[data-id=city]').val(item.City);
                                        console.log('Réussit encore');

                                        return item.CodePostal;
                                    }
                                    else
                                    {
                                        $('input[data-id=codePostal]').val(item.CodePostal);
                                        return item.City;
                                    }
                                }
                            };
                        },
                        console.log('pas de response')
                        ));
                    },
                    error: function (jqXHR, textStatus, errorThrown)
                    {
                        console.log(textStatus, errorThrown);
                    }
                });
            }
        },
        minLength: 4,
        delay: 300
    });
});
