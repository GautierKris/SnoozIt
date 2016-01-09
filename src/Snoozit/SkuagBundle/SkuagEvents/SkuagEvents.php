<?php

namespace Snoozit\SkuagBundle\SkuagEvents;


final class SkuagEvents
{
    // Nouvelle utilisateur
    const ON_REGISTRATION_SUCCESS   = 'skuag.platform.registration_event';

    // Users réglages
    const ON_HIDDEN_USER_ADVERT     = 'skuag.platform.on_hidden_user_advert';
    const ON_SHOW_USER_ADVERT       = 'skuag.platform.on_show_user_advert';

    // Les interets
    const ON_REFUSE_INTEREST        = 'skuag.platform.refuse_interest';
    const ON_ACCEPT_INTEREST        = 'skuag.platform.accept_interest';
    const ON_ADD_INTEREST           = 'skuag.platform.add_interest';
    const ON_REMOVE_INTEREST        = 'skuag.platform.remove_interest';
    const ON_DESIST_INTEREST        = 'skuag.platform.desist_interest';
    const ON_SOLD_SUCCESS           = 'skuag.platform.sold_success';

    // Les négociations
    const ON_ADD_NEGOCE             = 'skuag.platform.add_negoce';
    const ON_REFUSE_NEGOCE          = 'skuag.platform.refuse_negoce';

    // Incrémente de 1 a chaque visite le compteur de l'annonce
    const ON_SHOW_ADVERT            = 'skuag.platform.show_advert';

    // Les abonnements au rubriques / Personnes..
    const ON_FOLLOW_USER            = 'skuag.platform.follow_user';
    const ON_FOLLOW_CATEGORY        = 'skuag.platform.follow_category';
    const ON_FOLLOW_REGION          = 'skuag.platform.follow_region';
    const ON_FOLLOW_DEPARTEMENT     = 'skuag.platform.follow_departement';
    const ON_FOLLOW_CITY            = 'skuag.platform.follow_city';
    const ON_REFUSE_FOLLOW          = 'skuag.platform_follow_refus';

}