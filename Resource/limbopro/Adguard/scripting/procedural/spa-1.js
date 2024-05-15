/*******************************************************************************

    uBlock Origin Lite - a comprehensive, MV3-compliant content blocker
    Copyright (C) 2014-present Raymond Hill

    This program is free software: you can redistribute it and/or modify
    it under the terms of the GNU General Public License as published by
    the Free Software Foundation, either version 3 of the License, or
    (at your option) any later version.

    This program is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
    GNU General Public License for more details.

    You should have received a copy of the GNU General Public License
    along with this program.  If not, see {http://www.gnu.org/licenses/}.

    Home: https://github.com/gorhill/uBlock
*/

/* jshint esversion:11 */

'use strict';

// ruleset: spa-1

/******************************************************************************/

// Important!
// Isolate from global scope
(function uBOL_cssProceduralImport() {

/******************************************************************************/

const argsList = [["{\"selector\":\"iframe#doublebillboard-1\",\"action\":[\"remove\",\"\"]}"],["{\"selector\":\".lay-sidebar > .sidebar__aside > .com-banner\",\"tasks\":[[\"upward\",1]]}","{\"selector\":\".lay-sidebar > .sidebar__aside > .mod-banner:only-child\",\"tasks\":[[\"upward\",1]]}"],["{\"selector\":\"#story-body > div.relative > div.items-center\",\"tasks\":[[\"has\",{\"selector\":\"> button > span\",\"tasks\":[[\"has-text\",\"Share\"]]}]]}"],["{\"selector\":\".text-center > small\",\"tasks\":[[\"has-text\",\"/Publicidade|publicidade/\"]]}"],["{\"selector\":\".MuiGrid-root > div[class^=\\\"style__Container\\\"]\",\"tasks\":[[\"has\",{\"selector\":\"> span\",\"tasks\":[[\"has-text\",\"Publicidade\"]]}]]}","{\"selector\":\".MuiGrid-root > div[style] > div[class^=\\\"style__Container-sc-\\\"]\",\"tasks\":[[\"has\",{\"selector\":\"> span.vertical\",\"tasks\":[[\"has-text\",\"Publicidade\"]]}]]}"],["{\"selector\":\"div[data-tb-region-item]\",\"tasks\":[[\"has\",{\"selector\":\"> div.news-box > a > span > strong > em\",\"tasks\":[[\"has-text\",\"conteúdo patrocinado\"]]}]]}"],["{\"selector\":\".ipsList_reset > .ipsWidget.ipsWidget_horizontal[data-blocktitle=\\\"Custom Blocks\\\"]\",\"tasks\":[[\"has\",{\"selector\":\"> h3.ipsType_reset\",\"tasks\":[[\"has-text\",\"Publicidade\"]]}]]}"],["{\"selector\":\".hd-ad--background\",\"action\":[\"remove\",\"\"]}"],["{\"selector\":\"div[class^=\\\"Block__Component-\\\"]\",\"tasks\":[[\"has\",{\"selector\":\"> label\",\"tasks\":[[\"has-text\",\"/^Publicidade$/\"]]}]]}"],["{\"selector\":\".slick-track > .slick-slide > a[href*=\\\"?utm_campaign=homepedia:banner\\\"]\",\"action\":[\"remove\",\"\"],\"tasks\":[[\"upward\",1]]}"],["{\"selector\":\"section > div > div > div[class] > div[class][id] > div[id^=\\\"div-gpt-\\\"]\",\"tasks\":[[\"upward\",2]]}"],["{\"selector\":\".sidebar > .sidebar-item[style] > iframe[src^=\\\"https://assets.naointendo.com.br/banners/\\\"]\",\"tasks\":[[\"upward\",1]]}"],["{\"selector\":\"#home > div.container\",\"tasks\":[[\"has\",{\"selector\":\"> .row h2\",\"tasks\":[[\"has-text\",\"Conteúdo Publicitário\"]]}]]}","{\"selector\":\".StyledDiv > .Title\",\"tasks\":[[\"has-text\",\"publicidade\"]]}"],["{\"selector\":\"div[class^=\\\"aspect-ratio\\\"] > div[id^=\\\"div-gpt-\\\"]\",\"tasks\":[[\"upward\",1]]}"],["{\"selector\":\".container > div[class]\",\"tasks\":[[\"has\",{\"selector\":\"> div.separator\",\"tasks\":[[\"has-text\",\"Publicidade\"]]}]]}"],["{\"selector\":\".automaticas-canais > .justify-content-center > .banner_wrapper\",\"tasks\":[[\"upward\",1]]}","{\"selector\":\".automaticas-canais > .leia_tambem_principal > .native_wrapper\",\"tasks\":[[\"upward\",1]]}"],["{\"selector\":\"div[class*=\\\" \\\"] > div[class] > div[style^=\\\"height:\\\"] + div[class]\",\"tasks\":[[\"has-text\",\"/^Anuncio$/\"],[\"upward\",2]]}"],["{\"selector\":\".sidebar > #fixed_bar > .sidebar_item\",\"tasks\":[[\"has\",{\"selector\":\"> h3\",\"tasks\":[[\"has-text\",\"/^Publicidad$/\"]]}]]}"],["{\"selector\":\"#sidebarGeral > .sidebar\",\"tasks\":[[\"has\",{\"selector\":\"> #tituloSidebar > center\",\"tasks\":[[\"has-text\",\"Patrocinadores\"]]}]]}"],["{\"selector\":\".Conteudo > .Lateral > .Titulo\",\"tasks\":[[\"has-text\",\"Publicidade\"]]}"],["{\"selector\":\"#root main[class] > div[class] > section[class] + aside[class]\",\"tasks\":[[\"has\",{\"selector\":\"> div[class] > p[class]\",\"tasks\":[[\"has-text\",\"PUBLICIDAD\"]]}]]}"],["{\"selector\":\".columns.ends > div.row\",\"tasks\":[[\"has-text\",\"Advertisement\"]]}","{\"selector\":\"fieldset\",\"tasks\":[[\"has\",{\"selector\":\"> legend\",\"tasks\":[[\"has-text\",\"Advertisement\"]]}]]}"],["{\"selector\":\".adsbygoogle\",\"tasks\":[[\"upward\",1]]}"],["{\"selector\":\".sidebar > div.widget\",\"tasks\":[[\"has\",{\"selector\":\"> div.section-heading > span\",\"tasks\":[[\"has-text\",\"Publicidade\"]]}]]}"],["{\"selector\":\".sidebar > .encabezados\",\"tasks\":[[\"has\",{\"selector\":\"> h2\",\"tasks\":[[\"has-text\",\"NOTICIAS SUGERIDAS\"]]}]]}"],["{\"selector\":\"main > div.MuiBox-root > div.MuiBox-root\",\"tasks\":[[\"has\",{\"selector\":\"> div[align=\\\"center\\\"] > div.MuiBox-root\",\"tasks\":[[\"has-text\",\"Publicidade\"]]}]]}"],["{\"selector\":\"#content > div.type-post > div[id^=\\\"_\\\"]\",\"action\":[\"remove\",\"\"]}"],["{\"selector\":\".sm-row > div.row > center > ins.adsbygoogle\",\"tasks\":[[\"upward\",\"div.row\"]]}"],["{\"selector\":\"div.encabezados\",\"tasks\":[[\"has\",{\"selector\":\"> h2\",\"tasks\":[[\"has-text\",\"PUBLICIDAD\"]]}]]}"],["{\"selector\":\"#contenido div[style^=\\\"height:250px;\\\"]\",\"tasks\":[[\"has\",{\"selector\":\"script\",\"tasks\":[[\"has-text\",\"grAnuncio.DisplayAds\"],[\"spath\",\" + div\"]]}]]}","{\"selector\":\"#zonanoticias > div[style]\",\"tasks\":[[\"has\",{\"selector\":\"> script\",\"tasks\":[[\"has-text\",\"grVista\"]]}]]}"],["{\"selector\":\".module-surround > div\",\"tasks\":[[\"has-text\",\"Publicidade SA\"]]}"],["{\"selector\":\".TPlayerNv > li.Button\",\"tasks\":[[\"has\",{\"selector\":\"> span\",\"tasks\":[[\"has-text\",\"Publicidad\"]]}]]}"],["{\"selector\":\"td[style=\\\"padding-right:15px;\\\"] > font\",\"tasks\":[[\"has-text\",\"/^Espacio publicitario$/\"]]}"],["{\"selector\":\".ad\",\"action\":[\"remove\",\"\"]}"],["{\"selector\":\".widget-area-right > aside.widget_custom_html\",\"tasks\":[[\"has\",{\"selector\":\"> div.textwidget > center\",\"tasks\":[[\"has-text\",\"Publicidad\"]]}]]}"],["{\"selector\":\".entry-content > p\",\"tasks\":[[\"has\",{\"selector\":\"> span\",\"tasks\":[[\"has-text\",\"ANUNCIOS\"]]}]]}","{\"selector\":\"h4.heading\",\"tasks\":[[\"has-text\",\"QUIZÁS TAMBIÉN\"]]}"],["{\"selector\":\".player_nav > ul[class] > li\",\"tasks\":[[\"has\",{\"selector\":\"> a[href]\",\"tasks\":[[\"has-text\",\"Ads\"]]}]]}"],["{\"selector\":\"body style\",\"action\":[\"remove\",\"\"],\"tasks\":[[\"has-text\",\"/position[\\\\s\\\\S]*?::before[\\\\s\\\\S]*?background-image[\\\\s\\\\S]*?width[\\\\s\\\\S]*?height/\"],[\"spath\",\":has(+ a[href^=\\\"https://visortmo.com/library/\\\"])\"]]}","{\"selector\":\"div[id^=\\\"pills-populars\\\"] > div.row > div.element\",\"tasks\":[[\"has\",{\"selector\":\"> a[href^=\\\"https://visortmo.com/library/\\\"] > .thumbnail > :is(span, .thumbnail-title)\",\"tasks\":[[\"has-text\",\"/promo|netflix|ofert|deal|pack|\\\\d+(\\\\.|,)?\\\\d+\\\\$/i\"]]}]]}","{\"selector\":\"div[id^=\\\"pills-populars\\\"] > div.row > div.element\",\"tasks\":[[\"has\",{\"selector\":\"> a[href^=\\\"https://visortmo.com/library/\\\"] > .thumbnail > style\",\"tasks\":[[\"has-text\",\"/\\\\/images\\\\/.*_push|\\\\/ne?f_|_ext/\"]]}]]}","{\"selector\":\"div[id^=\\\"pills-populars\\\"] > div.row > div.element\",\"tasks\":[[\"has\",{\"selector\":\"> a[href^=\\\"https://visortmo.com/library/\\\"] > .thumbnail\",\"tasks\":[[\"matches-css\",{\"name\":\"background-image\",\"pseudo\":\"before\",\"value\":\"\\\\/images\\\\/.*_push|\\\\/n.?f.?_|_ex\"}]]}]]}"],["{\"selector\":\"ul[class^=\\\"Mb(0)\\\"] > li.js-stream-content\",\"tasks\":[[\"has\",{\"selector\":\"> div > a[rel=\\\"nofollow noopener noreferrer\\\"] + div\",\"tasks\":[[\"has-text\",\"Patrocinado\"]]}]]}"],["{\"selector\":\".well.z-body > .ad-title\",\"tasks\":[[\"upward\",1]]}"],["{\"selector\":\"p[align=\\\"center\\\"] > font\",\"tasks\":[[\"has-text\",\"/^advertising/\"]]}"],["{\"selector\":\".sidebar > .encabezados > h3\",\"tasks\":[[\"has-text\",\"Publicidad\"]]}"],["{\"selector\":\"#secondary section.widget_text\",\"tasks\":[[\"has\",{\"selector\":\"> h3.widget-title\",\"tasks\":[[\"has-text\",\"Publicidad\"]]}]]}"],["{\"selector\":\".container > h2.section__header\",\"tasks\":[[\"has\",{\"selector\":\"> span\",\"tasks\":[[\"has-text\",\"/^ANUNCIOS$/\"]]}]]}"],["{\"selector\":\".dmPhotoGalleryResp .photogallery-column > .photoGalleryThumbs a[href=\\\"https://calentadores.shoptena.com/\\\"]\",\"tasks\":[[\"upward\",\".photogallery-column\"]]}"],["{\"selector\":\"#ipsLayout_mainArea > .ipsBox\",\"tasks\":[[\"has\",{\"selector\":\"> h2 > a\",\"tasks\":[[\"has-text\",\"LFSPro Ads\"]]}]]}","{\"selector\":\"#ipsLayout_mainArea > section\",\"tasks\":[[\"has\",{\"selector\":\"> ol > li > h2 > a\",\"tasks\":[[\"has-text\",\"LFSPro Ads\"]]}]]}","{\"selector\":\".ipsList_reset > li.ipsWidget\",\"tasks\":[[\"has\",{\"selector\":\"> h3\",\"tasks\":[[\"has-text\",\"LFSPro Ads\"]]}]]}"],["{\"selector\":\".listagem-content > .table > tbody > tr > .table-responsive-fullwidth > .th-wrap > .is-vcentered > span.is-warning\",\"tasks\":[[\"has-text\",\"Anúncio\"],[\"upward\",4]]}"],["{\"selector\":\".content > div[id]\",\"tasks\":[[\"has\",{\"selector\":\"> center > b\",\"tasks\":[[\"has-text\",\"DESATIVE O ADBLOCK\"]]}]]}"],["{\"selector\":\".main-posts > .general-content > div[id^=\\\"container-ac\\\"]:only-child\",\"tasks\":[[\"upward\",1]]}"],["{\"selector\":\"div.encabezados\",\"tasks\":[[\"has\",{\"selector\":\"> h3\",\"tasks\":[[\"has-text\",\"Publicidad\"]]}]]}"],["{\"selector\":\".content-box\",\"tasks\":[[\"has\",{\"selector\":\"> div.news-item > div.info\",\"tasks\":[[\"has-text\",\"/Notícia Patrocinada/i\"]]}]]}"],["{\"selector\":\".et_pb_column\",\"tasks\":[[\"has\",{\"selector\":\"> div.et_pb_with_border > div.et_pb_module_inner > h4 > span[class]\",\"tasks\":[[\"has-text\",\"Publicidade\"]]}]]}"],["{\"selector\":\"div[id^=\\\"odigi\\\"] > div.odigi-adlabel\",\"tasks\":[[\"upward\",1]]}"],["{\"selector\":\".web-log-post-grid > .post > .post-wrapper > .post-content-wrapper > .entry-content > script:first-child\",\"tasks\":[[\"has-text\",\"ad_idzone\"],[\"upward\",4]]}","{\"selector\":\"aside#secondary > .widget > h2.widget-title\",\"tasks\":[[\"has-text\",\"Publicidad\"],[\"upward\",1]]}"],["{\"selector\":\"#sidebar > .section\",\"tasks\":[[\"has\",{\"selector\":\"> .releases > h3:only-child\",\"tasks\":[[\"has-text\",\"/^Ads$/\"]]}]]}"],["{\"selector\":\"#Lateral > .Titulo\",\"tasks\":[[\"has-text\",\"Publicidade\"]]}"],["{\"selector\":\".uix_sidebarInner div.widget_text\",\"tasks\":[[\"has\",{\"selector\":\"> div.widget_text h3\",\"tasks\":[[\"has-text\",\"Publicidade\"]]}]]}"],["{\"selector\":\".sidebar-content-inner > div.widget\",\"tasks\":[[\"has\",{\"selector\":\"> div.widget-item-wrap > h2.widget-title > span.title-wrap\",\"tasks\":[[\"has-text\",\"Publicidad\"]]}]]}"],["{\"selector\":\"a[href^=\\\"https://www.pornolandia.xxx/webmaster/ref/\\\"]\",\"tasks\":[[\"upward\",1]]}"],["{\"selector\":\".container > div[style$=\\\"z-index:9999999999999999999!important;\\\"]\",\"tasks\":[[\"upward\",1]]}"]];

const hostnamesMap = new Map([["docer.com.ar",0],["docero.com.br",0],["doceru.com",0],["lanacion.com.ar",1],["thecourier.com.au",2],["thesenior.com.au",2],["adrenaline.com.br",3],["climaaovivo.com.br",4],["correiobraziliense.com.br",5],["gamersboard.com.br",6],["hardware.com.br",7],["hojeemdia.com.br",8],["homepedia.com.br",9],["minhaconexao.com.br",10],["naointendo.com.br",11],["nsctotal.com.br",12],["shoptime.com.br",13],["submarino.com.br",13],["sub100.com.br",14],["noticiasdatv.uol.com.br",15],["paisdelosjuegos.com.co",16],["paisdelosjuegos.com.pe",16],["andro4all.com",17],["animesonlinep.com",18],["aovivonatv.com",19],["atresplayer.com",20],["bibliatodo.com",21],["definicionabc.com",22],["economiasc.com",23],["extremotvplay.com",24],["rojadirectaonlinetv.com",24],["app.kultivi.com",25],["muchohentai.com",26],["mundodonghua.com",27],["pirlotvonlinehd.com",28],["reforma.com",29],["sakuraanimes.com",30],["seriesgato.com",31],["subdivx.com",32],["tuasaude.com",33],["tv-porinternet.com",34],["universoformulas.com",35],["verepeliculas.com",36],["visortmo.com",37],["yahoo.com",38],["anitube.cx",39],["primedeportes.es",40],["extremotv.info",41],["deportealdia.live",42],["animetw.net",43],["globaltvapp.net",44],["forum.lfspro.net",45],["meupc.net",46],["sejasaudavel.net",47],["verdragonball.online",48],["rojadirectatv.pro",49],["abola.pt",50],["contaspoupanca.pt",51],["odigital.sapo.pt",52],["palaygo.site",53],["donghuas.top",54],["tudotv.tv",55],["fcporto.ws",56],["hentaiporno.xxx",57],["pornolandia.xxx",58],["animesonehd.xyz",59]]);

const entitiesMap = new Map(undefined);

const exceptionsMap = new Map(undefined);

self.proceduralImports = self.proceduralImports || [];
self.proceduralImports.push({ argsList, hostnamesMap, entitiesMap, exceptionsMap });

/******************************************************************************/

})();

/******************************************************************************/
