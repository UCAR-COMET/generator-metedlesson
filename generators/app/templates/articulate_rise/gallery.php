<!DOCTYPE html>
<?php require_once('cometAPI.inc.php');  $mm = new MediaItemManager(); $items = $mm->getMediaGalleryUTF8(<%= lessonID %>); $moduleManager = new ModuleManager(); $module = $moduleManager->getModule(<%= lessonID %>); ?>
<html lang="<% if (lessonLang === 'ES') { %>es<% } else if (lessonLang === 'FR') { %>fr<% } else { %>en<% } %>">
<head>
<meta http-equiv="content-type" content="text/html; charset=UTF-8">
<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
<meta name="viewport" content="width=device-width, initial-scale=1">
<meta charset="utf-8">
<title><%= lessonTitle %></title>
<meta name="author" content="UCAR/COMET">
<meta name="dcterms.rightsHolder" content="UCAR/COMET">
<meta name="robots" content="all">
<link rel="stylesheet" type="text/css" href="lib/bootstrap-grid.min.css">
<!--[if lt IE 9]>
<script src="//html5shiv.googlecode.com/svn/trunk/html5.js"></script>
<![endif]-->
<style>
  .lesson-headings {
    margin-bottom: 20px;
  }
  .lesson-headings h1 {
    font-size: 2.4em; margin-bottom: 0;
  }
  .lesson-headings h2 {
    font-size: 1.4em;
    margin-top: 0;
  }
  .main-card-container {
    min-height: 200px; margin-bottom: 80px;
  }
  .media-item-card {
    border: 1px solid #ccc; border-radius: 4px; margin-bottom: 8px;
  }
  .page-blurb {
    margin-bottom: 20px;
  }
  .figure-card-inner {
    margin: 8px;
  }
  .img-thumb {
    border: 1px solid #ccc; border-radius: 4px; height: 200px; overflow: hidden; position: relative; width: 100%;
  }
  #lesson-footer {
    position: fixed; bottom: 0; width: 100%; height: 40px; background-color: #ddd; padding: 10px; text-align: center; margin-left: -8px;; margin-right: -8px;
  }
</style>
</head>
<body>
<section class="container page-blurb">
  <div class="row">
    <div class="lesson-headings col-12">
        <h1><%= lessonTitle %></h1>
        <h2><% if (lessonLang === 'ES') { %>Galería multimedia<% } else if (lessonLang === 'FR') { %>Médiathèque<% } else { %>Media Gallery<% } %></h2>
        <% if (lessonLang === 'ES') { %>
          <p>Los elementos multimedia empleados en esta lección están protegidos por diversas licencias de
            propiedad intelectual (<i>copyright</i>). Para obtener más información al respecto, utilice el
            enlace «Términos de derechos de autor» asociado a cada elemento a continuación.</p>
          <% } else if (lessonLang === 'FR') { %>
          <p>Les supports graphiques utilisés dans ce leçon sont protégés par différents droits d'auteurs.
            Veuillez svp utiliser le lien «&nbsp;termes des droits d'auteurs&nbsp;» associé à chaque élément
            ici-bas pour plus d'informations.</p>
          <% } else { %>
          <p>Media elements used in this module are protected by a variety of copyright licenses. Please use the
            "copyright terms" link associated with each item below for more information.</p>
        <% } %>
      </div>
    </div>
</section>
<main class="container main-card-container">
<div class="row">
<?php foreach($items as $item) { ?>
  <?php $item->description = str_replace( '"', '&quot;', $item->description ); ?>
  <?php $item->credits = str_replace( '"', '&quot;', $item->credits ); 
  $pattern =  "/" . preg_quote($module->path, "/") . "/";
  $item->path = preg_replace($pattern, "", $item->path);
?>
<div class="col-lg-3 col-md-6 col-12">
  <div class="card media-item-card">
  <figure id="item-<?php echo $item->id; ?>" aria-labelledby="figcaption-<?php echo $item->id; ?>" class="figure-card-inner" role="figure">
    <?php /*START_PHP_SIRFCIT*/ if ($item->extension=="htm"){ ?>
        <a href="<?php echo $item->path . "/index." . $item->extension;?>" target="_blank">
    <?php } else { ?>
        <a href="<?php echo $item->path . "/" . $item->name . "." . $item->extension;?>" target="_blank">
    <?php } /*END_PHP_SIRFCIT*/ ?>
      <div class="block-gallery__image img--zoom"
        style="background-image: url('<?php echo $item->path . "/" . $item->name . ".jpg" ?>'); background-size: cover;">
        <div class="img-thumb">
          <img decoding="async" loading="lazy" alt="" role="img" src="<?php echo $item->path . "/index." . $item->extension;?>">
        </div>
      </div>
    </a>
    <figcaption id="figcaption-<?php echo $item->id; ?>" class="caption-area">
        <div class="fr-view">
          <p><strong><% if (lessonLang === 'ES') { %>Descripción<% } else if (lessonLang === 'FR') { %>Description <% } else { %>Description<% } %>:</strong> <br />
            <?php echo $item->description; ?>
          </p>
          <p class="media-filename"><strong><% if (lessonLang === 'ES') { %>Nombre de archivo<% } else if (lessonLang === 'FR') { %>Nom du fichier<% } else { %>File Name<% } %>:</strong><br>
            <?php echo $item->name ?>.<?php echo $item->extension; ?>
          </p>
          <p><strong><% if (lessonLang === 'ES') { %>Créditos<% } else if (lessonLang === 'FR') { %>Source <% } else { %>Credits<% } %>:</strong><br>
            <?php echo $item->credits; ?>
          </p>
          <p><strong><% if (lessonLang === 'ES') { %>Términos de derechos de autor<% } else if (lessonLang === 'FR') { %>Droits d'auteurs <% } else { %>Copyright Terms<% } %>:</strong><br>
            <?php /*START_PHP_SIRFCIT*/ if ($item->copyright_type =="COMET Standard Terms of Use"){ ?>
            <a href="http://www.meted.ucar.edu/legal.htm"
              target="_blank"><% if (lessonLang === 'ES') { %>Términos de uso estándar de COMET<% } else { %>COMET Standard Terms of Use<% } %></a>
            <?php } /*END_PHP_SIRFCIT*/ ?>
            <?php /*START_PHP_SIRFCIT*/ if ($item->copyright_type =="COMET Standard Terms of Use - NCU"){ ?>
            <a href="http://www.meted.ucar.edu/legal.htm"
              target="_blank"><% if (lessonLang === 'ES') { %>Términos de uso estándar de COMET - Uso no comercial<% } else { %>COMET Standard Terms of Use - NCU<% } %></a>
            <?php } /*END_PHP_SIRFCIT*/ ?>
            <?php /*START_PHP_SIRFCIT*/ if ($item->copyright_type =="Creative Commons BY 4.0 International"){ ?>
            <a href="http://creativecommons.org/licenses/by/4.0/"
              target="_blank"><% if (lessonLang === 'ES') { %>Creative Commons BY 4.0 Internacional<% } else { %>Creative Commons BY 4.0 International<% } %></a>
            <?php } /*END_PHP_SIRFCIT*/ ?>
            <?php /*START_PHP_SIRFCIT*/ if ($item->copyright_type =="Creative Commons Attribution-ShareAlike 3.0 IGO"){ ?>
            <a href="http://creativecommons.org/licenses/by-sa/3.0/igo/"
              target="_blank"><% if (lessonLang === 'ES') { %>Creative Commons, Atribución-Compartir Igual 3.0 (IGO)<% } else { %>Creative Commons Attribution-ShareAlike 3.0 IGO<% } %></a>
            <?php } /*END_PHP_SIRFCIT*/ ?>
            <?php /*START_PHP_SIRFCIT*/ if ($item->copyright_type =="Creative Commons Attribution-ShareAlike 3.0 Unported"){ ?>
            <a href="http://creativecommons.org/licenses/by-sa/3.0/"
              target="_blank"><% if (lessonLang === 'ES') { %>Creative Commons, Atribución-Compartir Igual 3.0 (Unported)<% } else { %>Creative Commons Attribution-ShareAlike 3.0<% } %></a>
            <?php } /*END_PHP_SIRFCIT*/ ?>
            <?php /*START_PHP_SIRFCIT*/ if ($item->copyright_type =="Creative Commons Attribution 3.0 Unported"){ ?>
            <a href="http://creativecommons.org/licenses/by/3.0/"
              target="_blank"><% if (lessonLang === 'ES') { %>Creative Commons, Atribución 3.0 (Unported)<% } else { %>Creative Commons Attribution 3.0 Unported<% } %></a>
            <?php } /*END_PHP_SIRFCIT*/ ?>
            <?php /*START_PHP_SIRFCIT*/ if ($item->copyright_type =="Creative Commons Attribution-ShareAlike 2.5"){ ?>
            <a href="http://creativecommons.org/licenses/by-sa/2.5/"
              target="_blank"><% if (lessonLang === 'ES') { %>Creative Commons, Atribución-Compartir Igual 2.5<% } else { %>Creative Commons Attribution-ShareAlike 2.5<% } %></a>
            <?php } /*END_PHP_SIRFCIT*/ ?>
            <?php /*START_PHP_SIRFCIT*/ if ($item->copyright_type =="Creative Commons Attribution-ShareAlike 2.0"){ ?>
            <a href="http://creativecommons.org/licenses/by-sa/2.0/"
              target="_blank"><% if (lessonLang === 'ES') { %>Creative Commons, Atribución-Compartir Igual 2.0<% } else { %>Creative Commons Attribution-ShareAlike 2.0<% } %></a>
            <?php } /*END_PHP_SIRFCIT*/ ?>
            <?php /*START_PHP_SIRFCIT*/ if ($item->copyright_type =="Creative Commons Attribution-Noncommercial-Share Alike 2.0 Generic"){ ?>
            <a href="http://creativecommons.org/licenses/by-nc-sa/2.0/"
              target="_blank"><% if (lessonLang === 'ES') { %>Creative Commons, Atribución-No comercial-Compartir igual 2.0 Genérica<% } else { %>Creative Commons Attribution-Noncommercial-Share Alike 2.0 Generic<% } %></a>
            <?php } /*END_PHP_SIRFCIT*/ ?>
            <?php /*START_PHP_SIRFCIT*/ if ($item->copyright_type =="Attribution-NonCommercial-NoDerivs 2.0 Generic"){ ?>
            <a href="https://creativecommons.org/licenses/by-nc-nd/2.0/"
              target="_blank"><% if (lessonLang === 'ES') { %><% } else { %>Attribution-NonCommercial-NoDerivs 2.0 Generic<% } %></a>
            <?php } /*END_PHP_SIRFCIT*/ ?>
            <?php /*START_PHP_SIRFCIT*/ if ($item->copyright_type =="Creative Commons Attribution-Noncommercial 2.0 Generic"){ ?>
            <a href="http://creativecommons.org/licenses/by-nc/2.0/"
              target="_blank"><% if (lessonLang === 'ES') { %>Creative Commons Atribución-No comercial 2.0 Genérica<% } else { %>Creative Commons Attribution-Noncommercial 2.0 Generic<% } %></a>
            <?php } /*END_PHP_SIRFCIT*/ ?>
            <?php /*START_PHP_SIRFCIT*/ if ($item->copyright_type =="Creative Commons Attribution 2.0"){ ?>
            <a href="http://creativecommons.org/licenses/by/2.0/"
              target="_blank"><% if (lessonLang === 'ES') { %>Creative Commons Atribución 2.0<% } else { %>Creative Commons Attribution 2.0<% } %></a>
            <?php } /*END_PHP_SIRFCIT*/ ?>
            <?php /*START_PHP_SIRFCIT*/ if ($item->copyright_type =="Creative Commons Attribution 2.0 Generic"){ ?>
            <a href="http://creativecommons.org/licenses/by/2.0/"
              target="_blank"><% if (lessonLang === 'ES') { %>Creative Commons Atribución 2.0 Genérica<% } else { %>Creative Commons Attribution 2.0 Generic<% } %></a>
            <?php } /*END_PHP_SIRFCIT*/ ?>
          </p>
        </div>
    </figcaption>
  </figure>
  </div>
</div>
<?php } ?>
</div>
</main>
<footer id="lesson-footer">
<% if (lessonLang==='ES' ) { %> <p id="lesson-copyright">&copy; <%= copyrightYear %>, <a href="https://www.ucar.edu/">The University Corporation for Atmospheric Research</a> - Reservados todos los derechos.</p>
<% } else if (lessonLang==='FR' ) { %> <p id="lesson-copyright">&copy; <%= copyrightYear %>, <a href="https://www.ucar.edu/">The University Corporation for Atmospheric Research</a> - Tous droits réservés.</p>
<% } else { %> <p id="lesson-copyright">&copy; <%= copyrightYear %>, <a href="https://www.ucar.edu/">The University Corporation for Atmospheric Research</a> - All Rights Reserved.</p>
<% } %>

<% if (lessonLang==='ES' ) { %>
  <p id="parent-links">
    <a href="https://www.meted.ucar.edu/legal_es.htm">Avisos legales</a> | 
    <a href="https://www.comet.ucar.edu/">COMET</a> | 
    <a href="https://www.meted.ucar.edu/index_es.php">MetEd</a>
  </p>
<% } else if (lessonLang==='FR' ) { %>
  <p id="parent-links">
    <a href="https://www.meted.ucar.edu/legal.htm">Mentions juridiques</a> | 
    <a href="https://www.comet.ucar.edu/">COMET</a> | 
    <a href="https://www.meted.ucar.edu/">MetEd</a>
  </p>
<% } else { %>
  <p id="parent-links">
    <a href="https://www.meted.ucar.edu/legal.htm">Legal Notices</a> | 
    <a href="https://www.comet.ucar.edu/">COMET</a> | 
    <a href="https://www.meted.ucar.edu/">MetEd</a>
  </p>
<% } %>
</footer>
</body>
</html>