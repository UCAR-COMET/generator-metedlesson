<!DOCTYPE html>
<?php require_once('cometAPI.inc.php');  $mm = new MediaItemManager(); $items = $mm->getMediaGalleryUTF8(<%= lessonID %>); $moduleManager = new ModuleManager(); $module = $moduleManager->getModule(<%= lessonID %>); ?>
<html lang="<% if (lessonLang === 'ES') { %>es<% } else if (lessonLang === 'FR') { %>fr<% } else { %>en<% } %>">
<head>
    <meta http-equiv="content-type" content="text/html; charset=UTF-8">
    <link rel="stylesheet" type="text/css" href="src/css/rise_custom.css">
    <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta charset="utf-8">

    <title><%= lessonTitle %></title>
    <meta name="author" content="UCAR/COMET">
    <meta name="dcterms.rightsHolder" content="UCAR/COMET">
    <meta name="robots" content="all">

    <script type="text/javascript" src="src/js/jquery.min.js"></script>
    <script type="text/javascript" src="src/js/player-0.0.11.min.js"></script>
    <script type="text/javascript" src="src/js/lzwcompress.js"></script>

    <!--[if lt IE 9]>
    <script src="//html5shiv.googlecode.com/svn/trunk/html5.js"></script>
    <![endif]-->

    <link rel="stylesheet" type="text/css" href="src/css/rise_base.css">
    <link rel="stylesheet" type="text/css" href="src/css/rise_custom.css">
    <script type="text/javascript" src="src/js/sidebar-control.js"></script>
</head>
<body>
<div id="app">
    <div class="visually-hidden-always" role="log" aria-live="polite" aria-atomic="true" aria-relevant="additions text"></div>
    <div class="visually-hidden-always" role="log" aria-live="polite" aria-atomic="true" aria-relevant="additions text"></div>
    <div class="visually-hidden-always" role="log" aria-live="assertive" aria-atomic="true" aria-relevant="additions text"></div>
    <div class="visually-hidden-always" role="log" aria-live="assertive" aria-atomic="true" aria-relevant="additions text"></div>
    <div id="innerApp" class="theme classic"><div>
    </div>
    <div class="transition-group">
      <div class="page-lesson-wrap">
        <div class="visually-hidden-always" tabindex="-1">
          <h2>Gallery</h2>
          <div>Top of page</div>
        </div>
        <button class="visually-hidden btn-skip-to-lesson brand--ui" type="button">
          <span class="btn-skip-to-lesson__wrap">SKIP TO CONTENT<span aria-hidden="true">
              <object type="image/svg+xml" data="src/assets/skip_icon.svg" class="btn-skip-to-lesson__icon" aria-hidden="true"></object>
          </span></span>
        </button>
          <div class="page-lesson">
            <div class="lesson" data-lesson="true">
              <div class="lesson__content">
                <div class="page-view page-view--visible">
                  <div class="course-navigation__sidebar course-navigation__sidebar--nav-open course-navigation__sidebar--course-nav-type-sidebar">
                    <div>
                      <div class="course-navigation__lessonNav course-navigation__lessonNav--type-full">
                      <nav aria-label="Navigation menu">
                          <div class="nav-control__wrapper">
                            <div class="nav-control__menu" style="margin-top: 0px;">
                              <button class="nav-control__button" aria-controls="nav-content-sidebar" aria-expanded="true" aria-label="Close navigation menu" type="button">
                                <object type="image/svg+xml" data="src/assets/menu_icon.svg" class="nav-control__icon" aria-hidden="true"></object>
                              </button>
                            </div>
                          </div>
                          <div>
                            <div class="nav-sidebar nav-sidebar--accent nav-sidebar--dark-contrast nav-sidebar--light">
                              <div class="nav-sidebar__content" data-nav-scrollable="true" id="nav-content-sidebar">
                                <div class="nav-sidebar-header-ghost" style="height: 201px;"></div>
                                <div class="nav-sidebar-header nav-sidebar-header--transition nav-sidebar__header"
                                  style="height: 201px; overflow: hidden;">
                                  <div class="nav-sidebar-header__inner">
                                    <div class="nav-sidebar-header__graphic"></div>
                                    <div class="nav-sidebar-header__content">
                                      <a class="nav-sidebar-header__title" href="index.htm"><%= lessonTitle %></a>
                                      <div class="nav-sidebar-header__progress">
                                        <div aria-hidden="true" class="nav-sidebar-header__progress-track" role="img">
                                          <div class="nav-sidebar-header__progress-runner" style="width: 0%;"></div>
                                        </div>
                                        <div class="nav-sidebar-header__progress-text"></div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div class="nav-sidebar__body">
                                  <section aria-label="Table of contents" class="nav-sidebar__outline" id="nav-sidebar-outline">
                                    <ol class="nav-sidebar__outline-list" role="list">
                                      <li class="nav-sidebar__outline-list-item" role="listitem">
                                        <div class="nav-sidebar__outline-item nav-sidebar__outline-item nav-sidebar__outline-item">
                                          <a class="nav-sidebar__outline-item__link nav-sidebar__outline-item__link" data-link="lesson-link-item"
                                            href="preassessment.htm">
                                            <object type="image/svg+xml" data="src/assets/item_sm_icon.svg" class="nav-sidebar__outline-item-link-icon" aria-hidden="true"></object>
                                            Pre-assessment</a>
                                        </div>
                                      </li>
                                      <li class="nav-sidebar__outline-list-item" role="listitem">
                                        <div class="nav-sidebar__outline-item nav-sidebar__outline-item nav-sidebar__outline-item">
                                          <a class="nav-sidebar__outline-item__link nav-sidebar__outline-item__link" data-link="lesson-link-item"
                                            href="storyline/story.html">
                                            <object type="image/svg+xml" data="src/assets/item_sm_icon.svg" class="nav-sidebar__outline-item-link-icon" aria-hidden="true"></object>
                                            Lesson &rarr;</a>
                                        </div>
                                      </li>
                                      <li class="nav-sidebar__outline-list-item" role="listitem">
                                        <div class="nav-sidebar__outline-item nav-sidebar__outline-item nav-sidebar__outline-item">
                                          <a class="nav-sidebar__outline-item__link nav-sidebar__outline-item__link" data-link="lesson-link-item"
                                            href="quiz.htm">
                                            <object type="image/svg+xml" data="src/assets/item_sm_icon.svg" class="nav-sidebar__outline-item-link-icon" aria-hidden="true"></object>
                                            Quiz</a>
                                        </div>
                                      </li>
                                      <li class="nav-sidebar__outline-list-item" role="listitem">
                                        <div class="nav-sidebar__outline-item nav-sidebar__outline-item nav-sidebar__outline-item">
                                          <a class="nav-sidebar__outline-item__link nav-sidebar__outline-item__link" data-link="lesson-link-item"
                                            href="survey.htm">
                                            <object type="image/svg+xml" data="src/assets/item_sm_icon.svg" class="nav-sidebar__outline-item-link-icon" aria-hidden="true"></object>
                                            Survey</a>
                                        </div>
                                      </li>
                                      <li class="nav-sidebar__outline-list-item" role="listitem">
                                        <div class="nav-sidebar__outline-item nav-sidebar__outline-item nav-sidebar__outline-item">
                                          <a class="nav-sidebar__outline-item__link nav-sidebar__outline-item__link" data-link="lesson-link-item"
                                            href="https://meted.ucar.edu/education_training/lesson/<%= lessonID %>/booster">
                                            <object type="image/svg+xml" data="src/assets/item_sm_icon.svg" class="nav-sidebar__outline-item-link-icon" aria-hidden="true"></object>
                                            Booster &rarr;</a>
                                        </div>
                                      </li>
                                      <li class="nav-sidebar__outline-list-item" role="listitem">
                                        <div class="nav-sidebar__outline-item nav-sidebar__outline-item--active nav-sidebar__outline-item--complete">
                                          <a class="nav-sidebar__outline-item__link nav-sidebar__outline-item__link--active active" data-link="lesson-link-item"
                                            href="gallery.php">
                                            <object type="image/svg+xml" data="src/assets/item_sm_icon.svg" class="nav-sidebar__outline-item-link-icon" aria-hidden="true"></object>
                                            Gallery</a>
                                        </div>
                                      </li>                                      
                                      <% if (usedPages.includes('ResourcesPage')) { %>
                                        <li class="nav-sidebar__outline-list-item" role="listitem">
                                          <div class="nav-sidebar__outline-item nav-sidebar__outline-item nav-sidebar__outline-item">
                                            <a class="nav-sidebar__outline-item__link nav-sidebar__outline-item__link" data-link="lesson-link-item"
                                              href="resources.htm">
                                              <object type="image/svg+xml" data="src/assets/item_sm_icon.svg" class="nav-sidebar__outline-item-link-icon" aria-hidden="true"></object>
                                              Resources</a>
                                          </div>
                                        </li>
                                      <% } %>
                                      <li class="nav-sidebar__outline-list-item" role="listitem">
                                        <div class="nav-sidebar__outline-item nav-sidebar__outline-item nav-sidebar__outline-item">
                                          <a class="nav-sidebar__outline-item__link nav-sidebar__outline-item__link" data-link="lesson-link-item"
                                            href="download.php">
                                            <object type="image/svg+xml" data="src/assets/item_sm_icon.svg" class="nav-sidebar__outline-item-link-icon" aria-hidden="true"></object>
                                            Download</a>
                                        </div>
                                      </li>
                                      <% if (usedPages.includes('PrintPage')) { %>
                                        <li class="nav-sidebar__outline-list-item" role="listitem">
                                          <div class="nav-sidebar__outline-item nav-sidebar__outline-item nav-sidebar__outline-item">
                                            <a class="nav-sidebar__outline-item__link nav-sidebar__outline-item__link" data-link="lesson-link-item"
                                              href="print.php">
                                              <object type="image/svg+xml" data="src/assets/item_sm_icon.svg" class="nav-sidebar__outline-item-link-icon" aria-hidden="true"></object>
                                              Printable Content</a>
                                          </div>
                                        </li>
                                      <% } %>
                                      <li class="nav-sidebar__outline-list-item" role="listitem">
                                        <div class="nav-sidebar__outline-item nav-sidebar__outline-item nav-sidebar__outline-item">
                                          <a class="nav-sidebar__outline-item__link nav-sidebar__outline-item__link" data-link="lesson-link-item"
                                            href="contributors.htm">
                                            <object type="image/svg+xml" data="src/assets/item_sm_icon.svg" class="nav-sidebar__outline-item-link-icon" aria-hidden="true"></object>
                                            Contributors</a>
                                        </div>
                                      </li>
                                    </ol>
                                  </section>
                                  <div class="nav-sidebar-results"></div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </nav>
                        <div>
              <div class="lessonNavigation__wrapper lessonNavigation__wrapper--full">
                <div class="page-wrap" id="page-wrap">
                  <div class="navButtonsFull">
                    
                    <div>
                      <div>

                      <!-- CONTENT -->
                      <div class="page" data-type="blocks" data-page="true">
                        <div class="page__wrapper page__wrapper--white">
                          <main aria-describedby="lesson-main-region-desc" class="lesson-main" tabindex="-1">
                            <span id="lesson-main-region-desc" class="visually-hidden-always">Lesson content</span>
                            <div aria-hidden="false" class="lesson-header-wrap lesson-header-wrap--light">
                              <section class="page__header">
                                <div class="page__header-limit">
                                  <div class="page__header-container">
                                    <div class="lesson-header__row">
                                      <div class="lesson-header__main">
                                        <div class="lesson-header">
                                          <div class="lesson-header__top-wrap">
                                            <div class="lesson-header__content">
                                              <div class="lesson-header__counter"></div>
                                              <h1 class="lesson-header__title">
                                                <div class=" brand--linkColor">
                                                  <div class="fr-view">Gallery</div>
                                                </div>
                                              </h1>
                                              <div class="lesson-header__author"></div>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </section>
                              <div><div class="progress-wrap"><div class="progress"><div class="progress__container"><div class="progress__indicator brand--background" style="transform: translate3d(100%, 0px, 0px);"></div></div></div></div></div>
                              </div>
                              <div class="page__content page__content--appear page__content--preview-nav">

                                            <section class="blocks-lesson">
                                              <div class="noOutline">
                                                <div>
                                                  <div class="block-text block-text--onecol-custom-width block-text--onecol-custom-width-text-med block-wrapper bg bg--range-light bg--type-light"
                                                    style="--color-background: #ffffff; box-shadow: rgb(255, 255, 255) 0px 1px 0px; padding-bottom: 3rem; padding-top: 3rem;">
                                                    <span></span>
                                                    <div class="block-text__container">
                                                      <div class="block-text__row"></div>
                                                      <div class="block-text__row">
                                                        <div class="block-text__col brand--linkColor">
                                                          <div class="fr-view">
                                                            <p>Media elements used in this module are protected by a variety
                                                              of copyright licenses. Please use the "copyright terms" link
                                                              associated with each item below for more information.</p>
                                                          </div>
                                                        </div>
                                                      </div>
                                                    </div>
                                                  </div>
                                                </div>
                                              </div>
                                              <div class="noOutline">
                                                <div>
                                                  <div class="block-gallery block-gallery--fourcol block-wrapper bg bg--range-light bg--type-light"
                                                    style="--color-background: #ffffff; box-shadow: rgb(255, 255, 255) 0px 1px 0px; padding-bottom: 3rem; padding-top: 3rem;">
                                                    <span></span>
                                                    <div class="block-gallery__container">

                                                    
                                                    <div class="block-gallery__row">
                                                        <div>

                                                          <?php foreach($items as $item) { ?>

                                                          <?php $item->description = str_replace( '"', '&quot;', $item->description ); ?>

                                                          <?php $item->credits = str_replace( '"', '&quot;', $item->credits ); 
                                                              $pattern =  "/" . preg_quote($module->path, "/") . "/";
                                                              $item->path = preg_replace($pattern, "", $item->path);
                                                          ?>
                                                          <div class="block-gallery__col">


                                                            <figure id="item-"
                                                              aria-labelledby="figcaption-<?php echo $item->id; ?>"
                                                              class="block-gallery__figure" role="figure">
                                                          <?php /*START_PHP_SIRFCIT*/ if ($item->extension=="htm"){ ?>
                                                              <a href="<?php echo $item->path . "/index." . $item->extension;?>" target="_blank">
                                                          <?php } else { ?>
                                                              <a href="<?php echo $item->path . "/" . $item->name . "." . $item->extension;?>" target="_blank">
                                                          <?php } /*END_PHP_SIRFCIT*/ ?>
                                                                <div class="block-gallery__image img--zoom"
                                                                  style="background-image: url('<?php echo $item->path . "/" . $item->name . ".jpg" ?>'); background-size: fit;">
                                                                  <div class="img"><img decoding="async" loading="lazy"
                                                                      alt="" role="img" src="assets/KLV28A/amp.jpg">
                                                                  </div><button aria-label="Zoom image"
                                                                    class="img__btn visually-hidden" type="button"><svg
                                                                      aria-hidden="true" class="img__btn-symbol"
                                                                      focusable="false" role="img" viewBox="0 0 493 493"
                                                                      xmlns="http://www.w3.org/2000/svg">
                                                                      <path
                                                                        d="M72.1125 306.317L102.113 306.318L102.112 369.127L369.124 102.115L306.316 102.115L306.315 72.1142L420.31 72.1149L420.311 186.11L390.311 186.109L390.311 123.355L123.352 390.313L186.107 390.312L186.108 420.313L72.1125 420.313V306.317Z">
                                                                      </path>
                                                                    </svg></button>
                                                                </div>
                                                              </a>
                                                              <figcaption id="figcaption-<?php echo $item->id; ?>">
                                                                <div class="block-gallery__caption brand--linkColor">
                                                                  <div class="fr-view">
                                                                    <p><strong>Description:</strong> <br />
                                                                      <?php echo $item->description; ?>
                                                                    </p>
                                                                    <p class="media-filename"><strong>File
                                                                        Name:</strong><br>
                                                                      <?php echo $item->name ?>.<?php echo $item->extension; ?>
                                                                    </p>
                                                                    <p><strong>Credits:</strong><br>
                                                                      <?php echo $item->credits; ?>
                                                                    </p>
                                                                    <p><strong>Copyright Terms:</strong><br>
                                                                      <?php /*START_PHP_SIRFCIT*/ if ($item->copyright_type =="COMET Standard Terms of Use"){ ?>
                                                                      <a href="http://www.meted.ucar.edu/legal.htm"
                                                                        target="_blank">COMET Standard Terms of Use</a>
                                                                      <?php } /*END_PHP_SIRFCIT*/ ?>
                                                                      <?php /*START_PHP_SIRFCIT*/ if ($item->copyright_type =="COMET Standard Terms of Use - NCU"){ ?>
                                                                      <a href="http://www.meted.ucar.edu/legal.htm"
                                                                        target="_blank">COMET Standard Terms of Use -
                                                                        NCU</a>
                                                                      <?php } /*END_PHP_SIRFCIT*/ ?>
                                                                      <?php /*START_PHP_SIRFCIT*/ if ($item->copyright_type =="Creative Commons BY 4.0 International"){ ?>
                                                                      <a href="http://creativecommons.org/licenses/by/4.0/"
                                                                        target="_blank">Creative Commons BY 4.0
                                                                        International</a>
                                                                      <?php } /*END_PHP_SIRFCIT*/ ?>
                                                                      <?php /*START_PHP_SIRFCIT*/ if ($item->copyright_type =="Creative Commons Attribution-ShareAlike 3.0 IGO"){ ?>
                                                                      <a href="http://creativecommons.org/licenses/by-sa/3.0/igo/"
                                                                        target="_blank">Creative Commons
                                                                        Attribution-ShareAlike 3.0 IGO</a>
                                                                      <?php } /*END_PHP_SIRFCIT*/ ?>
                                                                      <?php /*START_PHP_SIRFCIT*/ if ($item->copyright_type =="Creative Commons Attribution-ShareAlike 3.0 Unported"){ ?>
                                                                      <a href="http://creativecommons.org/licenses/by-sa/3.0/"
                                                                        target="_blank">Creative Commons
                                                                        Attribution-ShareAlike 3.0</a>
                                                                      <?php } /*END_PHP_SIRFCIT*/ ?>
                                                                      <?php /*START_PHP_SIRFCIT*/ if ($item->copyright_type =="Creative Commons Attribution 3.0 Unported"){ ?>
                                                                      <a href="http://creativecommons.org/licenses/by/3.0/"
                                                                        target="_blank">Creative Commons Attribution 3.0
                                                                        Unported</a>
                                                                      <?php } /*END_PHP_SIRFCIT*/ ?>
                                                                      <?php /*START_PHP_SIRFCIT*/ if ($item->copyright_type =="Creative Commons Attribution-ShareAlike 2.5"){ ?>
                                                                      <a href="http://creativecommons.org/licenses/by-sa/2.5/"
                                                                        target="_blank">Creative Commons
                                                                        Attribution-ShareAlike 2.5</a>
                                                                      <?php } /*END_PHP_SIRFCIT*/ ?>
                                                                      <?php /*START_PHP_SIRFCIT*/ if ($item->copyright_type =="Creative Commons Attribution-ShareAlike 2.0"){ ?>
                                                                      <a href="http://creativecommons.org/licenses/by-sa/2.0/"
                                                                        target="_blank">Creative Commons
                                                                        Attribution-ShareAlike 2.0</a>
                                                                      <?php } /*END_PHP_SIRFCIT*/ ?>
                                                                      <?php /*START_PHP_SIRFCIT*/ if ($item->copyright_type =="Creative Commons Attribution-Noncommercial-Share Alike 2.0 Generic"){ ?>
                                                                      <a href="http://creativecommons.org/licenses/by-nc-sa/2.0/"
                                                                        target="_blank">Creative Commons
                                                                        Attribution-Noncommercial-Share Alike 2.0
                                                                        Generic</a>
                                                                      <?php } /*END_PHP_SIRFCIT*/ ?>
                                                                      <?php /*START_PHP_SIRFCIT*/ if ($item->copyright_type =="Attribution-NonCommercial-NoDerivs 2.0 Generic"){ ?>
                                                                      <a href="https://creativecommons.org/licenses/by-nc-nd/2.0/"
                                                                        target="_blank">Attribution-NonCommercial-NoDerivs
                                                                        2.0 Generic</a>
                                                                      <?php } /*END_PHP_SIRFCIT*/ ?>
                                                                      <?php /*START_PHP_SIRFCIT*/ if ($item->copyright_type =="Creative Commons Attribution-Noncommercial 2.0 Generic"){ ?>
                                                                      <a href="http://creativecommons.org/licenses/by-nc/2.0/"
                                                                        target="_blank">Creative Commons
                                                                        Attribution-Noncommercial 2.0 Generic</a>
                                                                      <?php } /*END_PHP_SIRFCIT*/ ?>
                                                                      <?php /*START_PHP_SIRFCIT*/ if ($item->copyright_type =="Creative Commons Attribution 2.0"){ ?>
                                                                      <a href="http://creativecommons.org/licenses/by/2.0/"
                                                                        target="_blank">Creative Commons Attribution
                                                                        2.0</a>
                                                                      <?php } /*END_PHP_SIRFCIT*/ ?>
                                                                      <?php /*START_PHP_SIRFCIT*/ if ($item->copyright_type =="Creative Commons Attribution 2.0 Generic"){ ?>
                                                                      <a href="http://creativecommons.org/licenses/by/2.0/"
                                                                        target="_blank">Creative Commons Attribution 2.0
                                                                        Generic</a>
                                                                      <?php } /*END_PHP_SIRFCIT*/ ?>
                                                                    </p>
                                                                  </div>
                                                                </div>

                                                              </figcaption>
                                                            </figure>


                                                          </div>

                                                          <?php } ?><!-- close row if ending on something other than 4 -->


                                                        </div>
                                                      </div>
                                                    </div>
                                                  </div>
                                                </div>
                                              </div>

                                            </section>

                                          </div>
                                        </main>
                                      </div>
                                    </div>
                                  </div>
                                </div>

                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <footer id="lesson-footer">
                      <% if (lessonLang==='ES' ) { %>
                        <p id="lesson-copyright">&copy; <%= copyrightYear %>, <a href="https://www.ucar.edu/">The University Corporation for Atmospheric Research</a> - Reservados todos los derechos.</p>
                      <% } else if (lessonLang==='FR' ) { %>
                        <p id="lesson-copyright">&copy; <%= copyrightYear %>, <a href="https://www.ucar.edu/">The University Corporation for Atmospheric Research</a> - Tous droits réservés.</p>
                      <% } else { %>
                        <p id="lesson-copyright">&copy; <%= copyrightYear %>, <a href="https://www.ucar.edu/">The University Corporation for Atmospheric Research</a> - All Rights Reserved.</p>
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
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div></div>
      
      </div>
    </div>

</body>
</html>