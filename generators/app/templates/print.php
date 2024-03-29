<?php
require_once( 'cometAPI.inc.php' );
$mm = new MediaItemManager();
?>
<!doctype html>
<html lang="<% if (lessonLang === 'ES') { %>es<% } else if (lessonLang === 'FR') { %>fr<% } else { %>en<% } %>">
<head>
    <title><%= lessonTitle %></title>
    <meta content="text/html; charset=UTF-8" http-equiv="content-type">
    <meta name="author" content="UCAR/COMET">
    <meta name="dcterms.rightsHolder" content="UCAR/COMET">
    <meta name="robots" content="all">
    <meta name="Description" content="<%= lessonDesc %>">
    <meta name="keywords" content="<%= lessonKeys %>">
    <meta name="viewport" content="width=device-width">
    <meta name="viewport" content="initial-scale=1.0">
<!-- =CORE TAGS START= -->
    <link rel="stylesheet" type="text/css" media="screen" href="bootstrap/css/bootstrap.min.css">
    <link rel="stylesheet" type="text/css" media="screen" href="jquery/jquery-ui.min.css">
    <link rel="stylesheet" type="text/css" media="screen" href="css/meted-base.min.css">
    <script src="jquery/jquery.min.js"></script>
    <script src="jquery/jquery-ui.min.js"></script>
    <script src="jquery/jquery-plugins.min.js"></script>
    <script src="bootstrap/js/bootstrap.min.js"></script>
    <script src="modernizr/modernizr.min.js"></script>
    <!-- lc2024: module-print.css, defaults.js -->
    <link rel="stylesheet" type="text/css" media="print" href="css/module-print.css">
    <script src="jquery/defaults.js"></script>
<!-- =CORE TAGS END= -->
    <script>
    var printVersion = true;
    </script>
    <!--[if lte IE 9]><script type="text/javascript" src="jquery/apps/draw/excanvas.js"></script><script type="text/javascript" src="ie-support/respond.js"></script><link rel="stylesheet" type="text/css" media="screen" href="ie-support/ie-support.css" /><![endif]-->
</head>

<body>
    <!-- MODULE WRAPPER (container) ==================================-->
    <main id="module-wrapper" class="container">
        <div class="row">
            <header id="module-topbanner">
                <a id="module-title" class="module-title-text <% if (templateType === 'multi-print') { %>chapter_title<% } %>"
                    href="index.htm"><% if (templateType === 'multi-print') { %>UNIT TITLE HERE<% } %></a>
                <h3 id="module-credit" class="hidden-sm hidden-xs">
                    <% if (lessonLang === 'ES') { %>Producido por The COMET® Program
                    <% } else if (lessonLang === 'FR') { %>Produit par le programme COMET®
                    <% } else { %>Produced by The COMET&reg; Program<% } %>
                </h3>
            </header>
        </div>

        <div class="row">
            <!-- TABLE OF CONTENTS ==================================-->
            <nav id="tableofcontents" class="sidebar-toc">
                <ul class="nav lc-docs-sidenav">
                    <li><a href="#page_1-0-0">Page_1-0-0</a></li>
                    <li><a href="#page_2-0-0">Page_2-0-0 Sample</a>
                        <ul class="nav" id="ul_2-0-0">
                            <li><a href="#page_2-1-0">Page_2-1-0 Sample</a>
                                <ul class="nav" id="ul_2-1-0">
                                    <li><a href="#page_2-1-1">Page_2-1-1</a></li>
                                </ul>
                            </li>
                        </ul>
                    </li>
                    <li><a href="#page_contributors">Contributors</a></li>
                </ul>
            </nav>

            <!-- MODULE CONTENT ==================================-->
            <div id="module-content" class="col-md-9">
                <div class="row unit-header"></div>
                <section id="page_1-0-0" class="page">
                    <h3>Page 1-0-0 Title</h3>
                    ...
                </section>
                <section id="page_2-0-0" class="page">
                    <h3>Page_2-0-0 Sample</h3>
                    ...
                </section>
                <section id="page_2-1-0" class="page">
                    <h3 class="sub_head"><small>Parent Page 2-0-0 Title » </small>Child Page 2-1-0 Title</h3>
                    ...
                </section>
                <section id="page_2-1-1" class="page">
                    <h3 class="sub_head"><small>Parent Page 2-0-0 Title » Child Page 2-1-0 Title » </small>Child Page
                        Page_2-1-1 Sample</h3>
                    ...
                </section>
                <section id="page_contributors" class="page">
                    <h3>Contributors</h3>
                    ...
                </section>
            </div>
            <!-- END MODULE CONTENT ==============================-->
        </div>

    <!-- MODULE FOOTER ==================================-->
    <footer id="module-footer" class="row">
        <div class="col-md-10 col-sm-12">
        <% if (lessonLang === 'ES') { %>
            <p class="footer-text">&copy; <%= copyrightYear %>, <a href="https://www.ucar.edu/">The University Corporation for Atmospheric Research</a><br>Reservados todos los derechos. <a href="https://meted.ucar.edu/legal_es.htm">Avisos legales</a></p>
        <% } else if (lessonLang === 'FR') { %>
            <p class="footer-text">&copy; <%= copyrightYear %>, <a href="https://www.ucar.edu/">The University Corporation for Atmospheric Research</a><br>Tous droits réservés. <a href="https://meted.ucar.edu/legal.htm">Mentions juridiques</a></p>
        <% } else { %>
            <p class="footer-text">&copy; <%= copyrightYear %>, <a href="https://www.ucar.edu/">The University Corporation for Atmospheric Research</a><br>All Rights Reserved. <a href="https://meted.ucar.edu/legal.htm">Legal notices</a></p>
        <% } %>
        </div>
        <div class="col-md-2 hidden-sm hidden-xs">
            <ul class="footer-links list-unstyled">
                <li><a href="https://www.meted.ucar.edu/"><span class="glyphicon glyphicon-link"></span>MetEd</a></li>
                <li><a href="https://comet.ucar.edu"><span class="glyphicon glyphicon-link"></span>COMET</a></li>
            </ul>
        </div>
    </footer>
    <!-- END MODULE FOOTER ==================================-->

    </main>
    <!-- END MODULE WRAPPER (container) ==================================-->

    <!-- BACK TO TOP BUTTON =========================== -->
    <p class="back-top">
        <a href="#top"><span class="glyphicon glyphicon-upload"></span><% if (lessonLang === 'ES') { %>Arriba<% } else if (lessonLang === 'FR') { %>Haut de la page<% } else { %>Back to Top<% } %></a>
    </p>

    <!-- MODAL PROMPTS ======================== -->
    <div id="quiz-prompt"></div>

    <!-- PRINT STYLES SCRIPT ==========================-->
    <script>
    $(document).ready(function() {
        // Remove all media stylesheets
        $('link[media~="screen"]').remove();
        // Convert print stylesheet to all-media
        $('link[media~="print"]').attr('media', 'all');
    });
    </script>
</body>
</html>