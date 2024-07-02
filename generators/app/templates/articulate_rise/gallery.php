<!DOCTYPE html>
<?php 
require_once('cometAPI.inc.php'); 
    $mm = new MediaItemManager();
    $items = $mm->getMediaGalleryUTF8(<%= lessonID %>);
    $moduleManager = new ModuleManager();
    $module = $moduleManager->getModule(<%= lessonID %>);
?>
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
    <meta name="Description" content="">

    <script type="text/javascript" src="src/js/jquery.min.js"></script>
    <script type="text/javascript" src="src/js/player-0.0.11.min.js"></script>
    <script type="text/javascript" src="src/js/lzwcompress.js"></script>

    
    <!--[if lt IE 9]>
    <script src="//html5shiv.googlecode.com/svn/trunk/html5.js"></script>
    <![endif]-->

    <link rel="stylesheet" type="text/css" href="src/css/rise_base.css">
    <link rel="stylesheet" type="text/css" href="src/css/rise_custom.css">
    
    <script>
    $(document).ready(function(){
      $('.nav-control__button').click(function(){
        console.log('clicked');
        var ariaExpanded = $(this).attr('aria-expanded');
        if(ariaExpanded == 'true'){
          $(this).attr('aria-expanded', 'false');
          $('.course-navigation__sidebar').attr('aria-hidden', 'true').removeClass('course-navigation__sidebar--nav-open');
        } else {
          $(this).attr('aria-expanded', 'true');
          $('.course-navigation__sidebar').attr('aria-hidden', 'false').addClass('course-navigation__sidebar--nav-open');
        }
      });
    });
  </script>
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
            <div>Gallery</div>
            <div>Top of page</div>
          </div><button class="visually-hidden btn-skip-to-lesson brand--ui" type="button"><span
              class="btn-skip-to-lesson__wrap">SKIP TO CONTENT<span aria-hidden="true"><svg class="btn-skip-to-lesson__icon"
                  width="20" height="20" viewBox="0 0 20 20" fill="none" focusable="false" xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd" clip-rule="evenodd"
                    d="M10.0002 3.33334C10.4604 3.33334 10.8335 3.70644 10.8335 4.16668V15.8333C10.8335 16.2936 10.4604 16.6667 10.0002 16.6667C9.53992 16.6667 9.16683 16.2936 9.16683 15.8333V4.16668C9.16683 3.70644 9.53992 3.33334 10.0002 3.33334Z"
                    fill="currentColor"></path>
                  <path fill-rule="evenodd" clip-rule="evenodd"
                    d="M3.57757 9.41075C3.90301 9.08532 4.43065 9.08532 4.75609 9.41075L10.0002 14.6548L15.2442 9.41075C15.5697 9.08532 16.0973 9.08532 16.4228 9.41075C16.7482 9.73619 16.7482 10.2638 16.4228 10.5893L10.5894 16.4226C10.264 16.748 9.73634 16.748 9.41091 16.4226L3.57757 10.5893C3.25214 10.2638 3.25214 9.73619 3.57757 9.41075Z"
                    fill="currentColor"></path>
                </svg></span></span></button>
          <div class="page-lesson">
            <div class="lesson" data-lesson="true">
              <div class="lesson__content">
                <div class="page-view page-view--visible">
                  <div
                    class="course-navigation__sidebar course-navigation__sidebar--nav-open course-navigation__sidebar--course-nav-type-sidebar">
                    <div>
                      <div class="course-navigation__lessonNav course-navigation__lessonNav--type-full">
                        <nav aria-label="Navigation menu">
                          <div class="nav-control__wrapper">
                            <div class="nav-control__menu" style="margin-top: 0px;"><button class="nav-control__button"
                                aria-controls="nav-content-sidebar" aria-expanded="true" aria-label="Close navigation menu"
                                type="button"><svg aria-hidden="true" fill="currentColor" focusable="false"
                                  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 14" class="page-menu-toggle__icon">
                                  <path d="M0 0H20V2H0V0Z M0 6H20V8H0V6Z M20 12H0V14H20V12Z"></path>
                                </svg></button>
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
                                    <div class="nav-sidebar-header__search-area nav-sidebar-header__search-area--hidden">
                                      <form autocomplete="off" class="nav-sidebar-search nav-sidebar-search--disabled"><svg
                                          aria-hidden="true" class="nav-sidebar-search__icon" fill="none" focusable="false"
                                          height="12" viewBox="0 0 12 12" width="12" xmlns="http://www.w3.org/2000/svg">
                                          <path clip-rule="evenodd"
                                            d="M5.325 9.01843C3.225 9.01843 1.5 7.37868 1.5 5.29172C1.5 3.20476 3.225 1.49048 5.325 1.49048C7.425 1.49048 9.15 3.20476 9.15 5.29172C9.15 7.37868 7.425 9.01843 5.325 9.01843ZM9.525 8.42236C10.2 7.52795 10.575 6.48447 10.575 5.29193C10.575 2.38509 8.25 0 5.325 0C2.4 0 0 2.38509 0 5.29193C0 8.19876 2.4 10.5839 5.325 10.5839C6.525 10.5839 7.65 10.2112 8.475 9.54037L10.725 11.7764C10.875 11.9255 11.1 12 11.25 12C11.4 12 11.625 11.9255 11.775 11.7764C12.075 11.4783 12.075 11.0311 11.775 10.7329L9.525 8.42236Z"
                                            fill="currentColor" fill-rule="evenodd"></path>
                                        </svg><input aria-label="Search" class="nav-sidebar-search__input" disabled=""
                                          name="search" placeholder="search" type="search" value=""><button
                                          aria-label="Close search menu" class="nav-sidebar-search__close" type="reset"><svg
                                            aria-hidden="true" class="nav-sidebar-search__close-icon" fill="none"
                                            focusable="false" height="10" viewBox="0 0 10 10" width="10"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <path clip-rule="evenodd"
                                              d="M9.78572 9.78572C9.5 10.0714 9.07143 10.0714 8.78571 9.78572L5 6.00001L1.21429 9.78572C0.928571 10.0714 0.500001 10.0714 0.214285 9.78572C-0.0714284 9.49999 -0.0714284 9.07144 0.214285 8.78571L4 5L0.214285 1.21429C-0.0714284 0.928564 -0.0714284 0.500007 0.214285 0.214279C0.357143 0.0714143 0.500001 0 0.714286 0C0.928571 0 1.07143 0.0714143 1.21429 0.214279L5 3.99999L8.78571 0.214279C8.92857 0.0714143 9.14286 0 9.28572 0C9.42857 0 9.64286 0.0714143 9.78572 0.214279C10.0714 0.500007 10.0714 0.928564 9.78572 1.21429L6 5L9.78572 8.78571C10.0714 9.07144 10.0714 9.49999 9.78572 9.78572Z"
                                              fill="currentColor" fill-rule="evenodd"></path>
                                          </svg></button></form>
                                    </div>
                                    <div class="nav-sidebar-header__content"><a class="nav-sidebar-header__title"
                                        href="index.htm"><%= lessonTitle %></a>
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
                                  <section aria-label="Table of contents" class="nav-sidebar__outline"
                                    id="nav-sidebar-outline">
                                    <ol class="nav-sidebar__outline-list" role="list">
                                      <li class="nav-sidebar__outline-list-item" role="listitem">
                                        <div class="nav-sidebar__outline-item"><a class="nav-sidebar__outline-item__link" data-link="lesson-link-item"
                                            href="preassessment.htm"><svg aria-hidden="true" class="nav-sidebar__outline-item-link-icon" fill="none"
                                              focusable="false" height="12" viewBox="0 0 18 12" width="18" xmlns="http://www.w3.org/2000/svg">
                                              <path clip-rule="evenodd"
                                                d="M0.666992 1.00002C0.666992 0.539783 1.04009 0.166687 1.50033 0.166687H14.0003C14.4606 0.166687 14.8337 0.539783 14.8337 1.00002C14.8337 1.46026 14.4606 1.83335 14.0003 1.83335H1.50033C1.04009 1.83335 0.666992 1.46026 0.666992 1.00002ZM0.666992 6.00002C0.666992 5.53978 1.04009 5.16669 1.50033 5.16669H16.5003C16.9606 5.16669 17.3337 5.53978 17.3337 6.00002C17.3337 6.46026 16.9606 6.83335 16.5003 6.83335H1.50033C1.04009 6.83335 0.666992 6.46026 0.666992 6.00002ZM0.666992 11C0.666992 10.5398 1.04009 10.1667 1.50033 10.1667H10.667C11.1272 10.1667 11.5003 10.5398 11.5003 11C11.5003 11.4603 11.1272 11.8334 10.667 11.8334H1.50033C1.04009 11.8334 0.666992 11.4603 0.666992 11Z"
                                                fill="currentColor" fill-rule="evenodd"></path>
                                            </svg>Pre-assessment<span class="lesson-progress lesson-progress--sidebar"><span
                                                class="lesson-progress__graphic lesson-progress__graphic--sidebar"></span></span></a></div>
                                      </li>
                                      <li class="nav-sidebar__outline-list-item" role="listitem">
                                        <div class="nav-sidebar__outline-item"><a class="nav-sidebar__outline-item__link" data-link="lesson-link-item"
                                            href="storyline/story.html" target="_blank"><svg aria-hidden="true"
                                              class="nav-sidebar__outline-item-link-icon" fill="none" focusable="false" height="12" viewBox="0 0 18 12"
                                              width="18" xmlns="http://www.w3.org/2000/svg">
                                              <path clip-rule="evenodd"
                                                d="M0.666992 1.00002C0.666992 0.539783 1.04009 0.166687 1.50033 0.166687H14.0003C14.4606 0.166687 14.8337 0.539783 14.8337 1.00002C14.8337 1.46026 14.4606 1.83335 14.0003 1.83335H1.50033C1.04009 1.83335 0.666992 1.46026 0.666992 1.00002ZM0.666992 6.00002C0.666992 5.53978 1.04009 5.16669 1.50033 5.16669H16.5003C16.9606 5.16669 17.3337 5.53978 17.3337 6.00002C17.3337 6.46026 16.9606 6.83335 16.5003 6.83335H1.50033C1.04009 6.83335 0.666992 6.46026 0.666992 6.00002ZM0.666992 11C0.666992 10.5398 1.04009 10.1667 1.50033 10.1667H10.667C11.1272 10.1667 11.5003 10.5398 11.5003 11C11.5003 11.4603 11.1272 11.8334 10.667 11.8334H1.50033C1.04009 11.8334 0.666992 11.4603 0.666992 11Z"
                                                fill="currentColor" fill-rule="evenodd"></path>
                                            </svg>Lesson &rarr;<span class="lesson-progress lesson-progress--sidebar"><span
                                                class="lesson-progress__graphic lesson-progress__graphic--sidebar"></span></span></a></div>
                                      </li>
                                      <li class="nav-sidebar__outline-list-item" role="listitem">
                                        <div class="nav-sidebar__outline-item"><a class="nav-sidebar__outline-item__link" data-link="lesson-link-item"
                                            href="quiz.htm"><svg aria-hidden="true"
                                              class="nav-sidebar__outline-item-link-icon" fill="none" focusable="false" height="12" viewBox="0 0 18 12"
                                              width="18" xmlns="http://www.w3.org/2000/svg">
                                              <path clip-rule="evenodd"
                                                d="M0.666992 1.00002C0.666992 0.539783 1.04009 0.166687 1.50033 0.166687H14.0003C14.4606 0.166687 14.8337 0.539783 14.8337 1.00002C14.8337 1.46026 14.4606 1.83335 14.0003 1.83335H1.50033C1.04009 1.83335 0.666992 1.46026 0.666992 1.00002ZM0.666992 6.00002C0.666992 5.53978 1.04009 5.16669 1.50033 5.16669H16.5003C16.9606 5.16669 17.3337 5.53978 17.3337 6.00002C17.3337 6.46026 16.9606 6.83335 16.5003 6.83335H1.50033C1.04009 6.83335 0.666992 6.46026 0.666992 6.00002ZM0.666992 11C0.666992 10.5398 1.04009 10.1667 1.50033 10.1667H10.667C11.1272 10.1667 11.5003 10.5398 11.5003 11C11.5003 11.4603 11.1272 11.8334 10.667 11.8334H1.50033C1.04009 11.8334 0.666992 11.4603 0.666992 11Z"
                                                fill="currentColor" fill-rule="evenodd"></path>
                                            </svg>Quiz<span class="lesson-progress lesson-progress--sidebar"><span
                                                class="lesson-progress__graphic lesson-progress__graphic--sidebar"></span></span></a></div>
                                      </li>
                                      <li class="nav-sidebar__outline-list-item" role="listitem">
                                        <div class="nav-sidebar__outline-item"><a class="nav-sidebar__outline-item__link"
                                            data-link="lesson-link-item"
                                            href="survey.htm"><svg aria-hidden="true"
                                              class="nav-sidebar__outline-item-link-icon" fill="none" focusable="false"
                                              height="12" viewBox="0 0 18 12" width="18" xmlns="http://www.w3.org/2000/svg">
                                              <path clip-rule="evenodd"
                                                d="M0.666992 1.00002C0.666992 0.539783 1.04009 0.166687 1.50033 0.166687H14.0003C14.4606 0.166687 14.8337 0.539783 14.8337 1.00002C14.8337 1.46026 14.4606 1.83335 14.0003 1.83335H1.50033C1.04009 1.83335 0.666992 1.46026 0.666992 1.00002ZM0.666992 6.00002C0.666992 5.53978 1.04009 5.16669 1.50033 5.16669H16.5003C16.9606 5.16669 17.3337 5.53978 17.3337 6.00002C17.3337 6.46026 16.9606 6.83335 16.5003 6.83335H1.50033C1.04009 6.83335 0.666992 6.46026 0.666992 6.00002ZM0.666992 11C0.666992 10.5398 1.04009 10.1667 1.50033 10.1667H10.667C11.1272 10.1667 11.5003 10.5398 11.5003 11C11.5003 11.4603 11.1272 11.8334 10.667 11.8334H1.50033C1.04009 11.8334 0.666992 11.4603 0.666992 11Z"
                                                fill="currentColor" fill-rule="evenodd"></path>
                                            </svg>Survey<span class="lesson-progress lesson-progress--sidebar"><span
                                                class="lesson-progress__graphic lesson-progress__graphic--sidebar"></span></span></a></div>
                                      </li>
                                      <li class="nav-sidebar__outline-list-item" role="listitem">
                                        <div class="nav-sidebar__outline-item"><a class="nav-sidebar__outline-item__link" data-link="lesson-link-item"
                                            href="https://meted.ucar.edu/education_training/lesson/<%= lessonID %>/booster"><svg aria-hidden="true"
                                              class="nav-sidebar__outline-item-link-icon" fill="none" focusable="false" height="12" viewBox="0 0 18 12"
                                              width="18" xmlns="http://www.w3.org/2000/svg">
                                              <path clip-rule="evenodd"
                                                d="M0.666992 1.00002C0.666992 0.539783 1.04009 0.166687 1.50033 0.166687H14.0003C14.4606 0.166687 14.8337 0.539783 14.8337 1.00002C14.8337 1.46026 14.4606 1.83335 14.0003 1.83335H1.50033C1.04009 1.83335 0.666992 1.46026 0.666992 1.00002ZM0.666992 6.00002C0.666992 5.53978 1.04009 5.16669 1.50033 5.16669H16.5003C16.9606 5.16669 17.3337 5.53978 17.3337 6.00002C17.3337 6.46026 16.9606 6.83335 16.5003 6.83335H1.50033C1.04009 6.83335 0.666992 6.46026 0.666992 6.00002ZM0.666992 11C0.666992 10.5398 1.04009 10.1667 1.50033 10.1667H10.667C11.1272 10.1667 11.5003 10.5398 11.5003 11C11.5003 11.4603 11.1272 11.8334 10.667 11.8334H1.50033C1.04009 11.8334 0.666992 11.4603 0.666992 11Z"
                                                fill="currentColor" fill-rule="evenodd"></path>
                                            </svg>Booster &rarr;<span class="lesson-progress lesson-progress--sidebar"><span
                                                class="lesson-progress__graphic lesson-progress__graphic--sidebar"></span></span></a></div>
                                      </li>
                                      <li class="nav-sidebar__outline-list-item" role="listitem">
                                        <div class="nav-sidebar__outline-item nav-sidebar__outline-item--active nav-sidebar__outline-item--complete">
                                          <a aria-current="page" class="nav-sidebar__outline-item__link nav-sidebar__outline-item__link--active active"
                                            data-link="lesson-link-item" href="gallery.php"><svg aria-hidden="true"
                                              class="nav-sidebar__outline-item-link-icon" fill="none" focusable="false" height="12" viewBox="0 0 18 12"
                                              width="18" xmlns="http://www.w3.org/2000/svg">
                                              <path clip-rule="evenodd"
                                                d="M0.666992 1.00002C0.666992 0.539783 1.04009 0.166687 1.50033 0.166687H14.0003C14.4606 0.166687 14.8337 0.539783 14.8337 1.00002C14.8337 1.46026 14.4606 1.83335 14.0003 1.83335H1.50033C1.04009 1.83335 0.666992 1.46026 0.666992 1.00002ZM0.666992 6.00002C0.666992 5.53978 1.04009 5.16669 1.50033 5.16669H16.5003C16.9606 5.16669 17.3337 5.53978 17.3337 6.00002C17.3337 6.46026 16.9606 6.83335 16.5003 6.83335H1.50033C1.04009 6.83335 0.666992 6.46026 0.666992 6.00002ZM0.666992 11C0.666992 10.5398 1.04009 10.1667 1.50033 10.1667H10.667C11.1272 10.1667 11.5003 10.5398 11.5003 11C11.5003 11.4603 11.1272 11.8334 10.667 11.8334H1.50033C1.04009 11.8334 0.666992 11.4603 0.666992 11Z"
                                                fill="currentColor" fill-rule="evenodd"></path>
                                            </svg>Gallery<span class="lesson-progress lesson-progress--sidebar"><span
                                                class="lesson-progress__graphic lesson-progress__graphic--sidebar"></span></span></a>
                                        </div>
                                      </li>
                                      <% if (usedPages.includes('Resources') { %>
                                      <li class="nav-sidebar__outline-list-item" role="listitem">
                                        <div class="nav-sidebar__outline-item"><a class="nav-sidebar__outline-item__link" data-link="lesson-link-item"
                                            href="resources.htm"><svg aria-hidden="true"
                                              class="nav-sidebar__outline-item-link-icon" fill="none" focusable="false" height="12" viewBox="0 0 18 12"
                                              width="18" xmlns="http://www.w3.org/2000/svg">
                                              <path clip-rule="evenodd"
                                                d="M0.666992 1.00002C0.666992 0.539783 1.04009 0.166687 1.50033 0.166687H14.0003C14.4606 0.166687 14.8337 0.539783 14.8337 1.00002C14.8337 1.46026 14.4606 1.83335 14.0003 1.83335H1.50033C1.04009 1.83335 0.666992 1.46026 0.666992 1.00002ZM0.666992 6.00002C0.666992 5.53978 1.04009 5.16669 1.50033 5.16669H16.5003C16.9606 5.16669 17.3337 5.53978 17.3337 6.00002C17.3337 6.46026 16.9606 6.83335 16.5003 6.83335H1.50033C1.04009 6.83335 0.666992 6.46026 0.666992 6.00002ZM0.666992 11C0.666992 10.5398 1.04009 10.1667 1.50033 10.1667H10.667C11.1272 10.1667 11.5003 10.5398 11.5003 11C11.5003 11.4603 11.1272 11.8334 10.667 11.8334H1.50033C1.04009 11.8334 0.666992 11.4603 0.666992 11Z"
                                                fill="currentColor" fill-rule="evenodd"></path>
                                            </svg>Resources<span class="lesson-progress lesson-progress--sidebar"><span
                                                class="lesson-progress__graphic lesson-progress__graphic--sidebar"></span></span></a></div>
                                      </li>
                                      <% } %>
                                      <li class="nav-sidebar__outline-list-item nav-sidebar__outline-list-item--last"
                                        role="listitem">
                                        <div class="nav-sidebar__outline-item"><a class="nav-sidebar__outline-item__link" data-link="lesson-link-item"
                                            href="contributors.htm"><svg aria-hidden="true"
                                              class="nav-sidebar__outline-item-link-icon" fill="none" focusable="false" height="12" viewBox="0 0 18 12"
                                              width="18" xmlns="http://www.w3.org/2000/svg">
                                              <path clip-rule="evenodd"
                                                d="M0.666992 1.00002C0.666992 0.539783 1.04009 0.166687 1.50033 0.166687H14.0003C14.4606 0.166687 14.8337 0.539783 14.8337 1.00002C14.8337 1.46026 14.4606 1.83335 14.0003 1.83335H1.50033C1.04009 1.83335 0.666992 1.46026 0.666992 1.00002ZM0.666992 6.00002C0.666992 5.53978 1.04009 5.16669 1.50033 5.16669H16.5003C16.9606 5.16669 17.3337 5.53978 17.3337 6.00002C17.3337 6.46026 16.9606 6.83335 16.5003 6.83335H1.50033C1.04009 6.83335 0.666992 6.46026 0.666992 6.00002ZM0.666992 11C0.666992 10.5398 1.04009 10.1667 1.50033 10.1667H10.667C11.1272 10.1667 11.5003 10.5398 11.5003 11C11.5003 11.4603 11.1272 11.8334 10.667 11.8334H1.50033C1.04009 11.8334 0.666992 11.4603 0.666992 11Z"
                                                fill="currentColor" fill-rule="evenodd"></path>
                                            </svg>Contributors<span class="lesson-progress lesson-progress--sidebar"><span
                                                class="lesson-progress__graphic lesson-progress__graphic--sidebar"></span></span></a></div>
                                      </li>
                                      <li class="nav-sidebar__outline-list-item nav-sidebar__outline-list-item--last"
                                        role="listitem">
                                        <div class="nav-sidebar__outline-item"><a class="nav-sidebar__outline-item__link" data-link="lesson-link-item"
                                            href="download.php"><svg aria-hidden="true"
                                              class="nav-sidebar__outline-item-link-icon" fill="none" focusable="false" height="12" viewBox="0 0 18 12"
                                              width="18" xmlns="http://www.w3.org/2000/svg">
                                              <path clip-rule="evenodd"
                                                d="M0.666992 1.00002C0.666992 0.539783 1.04009 0.166687 1.50033 0.166687H14.0003C14.4606 0.166687 14.8337 0.539783 14.8337 1.00002C14.8337 1.46026 14.4606 1.83335 14.0003 1.83335H1.50033C1.04009 1.83335 0.666992 1.46026 0.666992 1.00002ZM0.666992 6.00002C0.666992 5.53978 1.04009 5.16669 1.50033 5.16669H16.5003C16.9606 5.16669 17.3337 5.53978 17.3337 6.00002C17.3337 6.46026 16.9606 6.83335 16.5003 6.83335H1.50033C1.04009 6.83335 0.666992 6.46026 0.666992 6.00002ZM0.666992 11C0.666992 10.5398 1.04009 10.1667 1.50033 10.1667H10.667C11.1272 10.1667 11.5003 10.5398 11.5003 11C11.5003 11.4603 11.1272 11.8334 10.667 11.8334H1.50033C1.04009 11.8334 0.666992 11.4603 0.666992 11Z"
                                                fill="currentColor" fill-rule="evenodd"></path>
                                            </svg>Download<span class="lesson-progress lesson-progress--sidebar"><span
                                                class="lesson-progress__graphic lesson-progress__graphic--sidebar"></span></span></a></div>
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
                                                            <h1 class="lesson-header__title"
                                                              data-change-path="[&quot;lessons&quot;,{&quot;id&quot;:&quot;m_sM6KDSt7_84OlQoa_7IKEGC3nwkvpS&quot;},&quot;title&quot;]">
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
                                            <div>
                                              <div class="progress-wrap">
                                                <div class="progress">
                                                  <div class="progress__container">
                                                    <div class="progress__indicator brand--background" style="transform: translate3d(100%, 0px, 0px);"></div>
                                                  </div>
                                                </div>
                                              </div>
                                            </div>
                                          </div>
                                          <div class="page__content page__content--appear page__content--preview-nav">

                                            <section class="blocks-lesson">
                                              <div class="noOutline">
                                                <div>
                                                  <div
                                                    class="block-text block-text--onecol-custom-width block-text--onecol-custom-width-text-med block-wrapper bg bg--range-light bg--type-light"
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
                                                  <div
                                                    class="block-gallery block-gallery--fourcol block-wrapper bg bg--range-light bg--type-light"
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

                                                          
                                                            <figure id="item-" aria-labelledby="figcaption-<?php echo $item->id; ?>"
                                                              class="block-gallery__figure" role="figure">
                                                              <a href="<?php echo $item->path . "/" . $item->name . "." . $item->extension;?>" target="_blank">
                                                              <div class="block-gallery__image img--zoom"
                                                                style="background: url('<?php echo $item->path . "/" . $item->name . ".jpg" ?>');">
                                                                <div class="img"><img decoding="async" loading="lazy" alt=""
                                                                    role="img" src="assets/KLV28A/amp.jpg"></div><button
                                                                  aria-label="Zoom image" class="img__btn visually-hidden"
                                                                  type="button"><svg aria-hidden="true"
                                                                    class="img__btn-symbol" focusable="false" role="img"
                                                                    viewBox="0 0 493 493" xmlns="http://www.w3.org/2000/svg">
                                                                    <path
                                                                      d="M72.1125 306.317L102.113 306.318L102.112 369.127L369.124 102.115L306.316 102.115L306.315 72.1142L420.31 72.1149L420.311 186.11L390.311 186.109L390.311 123.355L123.352 390.313L186.107 390.312L186.108 420.313L72.1125 420.313V306.317Z">
                                                                    </path>
                                                                  </svg></button>
                                                              </div>
                                                              </a>
                                                              <figcaption id="figcaption-<?php echo $item->id; ?>">
                                                                <div class="block-gallery__caption brand--linkColor">
                                                                  <div class="fr-view">
                                                                    <p><strong>Description:</strong> <br/> <?php echo $item->description; ?></p>
                                                                    <p class="media-filename"><strong>File Name:</strong><br><?php echo $item->name ?>.<?php echo $item->extension; ?></p>
                    <p><strong>Credits:</strong><br><?php echo $item->credits; ?></p>
                    <p><strong>Copyright Terms:</strong><br>
<?php /*START_PHP_SIRFCIT*/ if ($item->copyright_type =="COMET Standard Terms of Use"){ ?>
    <a href="http://www.meted.ucar.edu/legal.htm" target="_blank">COMET Standard Terms of Use</a><?php } /*END_PHP_SIRFCIT*/ ?>
<?php /*START_PHP_SIRFCIT*/ if ($item->copyright_type =="COMET Standard Terms of Use - NCU"){ ?>
    <a href="http://www.meted.ucar.edu/legal.htm" target="_blank">COMET Standard Terms of Use - NCU</a><?php } /*END_PHP_SIRFCIT*/ ?>
<?php /*START_PHP_SIRFCIT*/ if ($item->copyright_type =="Creative Commons BY 4.0 International"){ ?>
    <a href="http://creativecommons.org/licenses/by/4.0/" target="_blank">Creative Commons BY 4.0 International</a><?php } /*END_PHP_SIRFCIT*/ ?>
<?php /*START_PHP_SIRFCIT*/ if ($item->copyright_type =="Creative Commons Attribution-ShareAlike 3.0 IGO"){ ?>
    <a href="http://creativecommons.org/licenses/by-sa/3.0/igo/" target="_blank">Creative Commons Attribution-ShareAlike 3.0 IGO</a><?php } /*END_PHP_SIRFCIT*/ ?>
<?php /*START_PHP_SIRFCIT*/ if ($item->copyright_type =="Creative Commons Attribution-ShareAlike 3.0 Unported"){ ?>
    <a href="http://creativecommons.org/licenses/by-sa/3.0/" target="_blank">Creative Commons Attribution-ShareAlike 3.0</a><?php } /*END_PHP_SIRFCIT*/ ?>
<?php /*START_PHP_SIRFCIT*/ if ($item->copyright_type =="Creative Commons Attribution 3.0 Unported"){ ?>
    <a href="http://creativecommons.org/licenses/by/3.0/" target="_blank">Creative Commons Attribution 3.0 Unported</a><?php } /*END_PHP_SIRFCIT*/ ?>
<?php /*START_PHP_SIRFCIT*/ if ($item->copyright_type =="Creative Commons Attribution-ShareAlike 2.5"){ ?>
    <a href="http://creativecommons.org/licenses/by-sa/2.5/" target="_blank">Creative Commons Attribution-ShareAlike 2.5</a><?php } /*END_PHP_SIRFCIT*/ ?>
<?php /*START_PHP_SIRFCIT*/ if ($item->copyright_type =="Creative Commons Attribution-ShareAlike 2.0"){ ?>
    <a href="http://creativecommons.org/licenses/by-sa/2.0/" target="_blank">Creative Commons Attribution-ShareAlike 2.0</a><?php } /*END_PHP_SIRFCIT*/ ?>
<?php /*START_PHP_SIRFCIT*/ if ($item->copyright_type =="Creative Commons Attribution-Noncommercial-Share Alike 2.0 Generic"){ ?>
    <a href="http://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">Creative Commons Attribution-Noncommercial-Share Alike 2.0 Generic</a><?php } /*END_PHP_SIRFCIT*/ ?>
<?php /*START_PHP_SIRFCIT*/ if ($item->copyright_type =="Attribution-NonCommercial-NoDerivs 2.0 Generic"){ ?>
    <a href="https://creativecommons.org/licenses/by-nc-nd/2.0/" target="_blank">Attribution-NonCommercial-NoDerivs 2.0 Generic</a><?php } /*END_PHP_SIRFCIT*/ ?>
<?php /*START_PHP_SIRFCIT*/ if ($item->copyright_type =="Creative Commons Attribution-Noncommercial 2.0 Generic"){ ?>
    <a href="http://creativecommons.org/licenses/by-nc/2.0/" target="_blank">Creative Commons Attribution-Noncommercial 2.0 Generic</a><?php } /*END_PHP_SIRFCIT*/ ?>
<?php /*START_PHP_SIRFCIT*/ if ($item->copyright_type =="Creative Commons Attribution 2.0"){ ?>
    <a href="http://creativecommons.org/licenses/by/2.0/" target="_blank">Creative Commons Attribution 2.0</a><?php } /*END_PHP_SIRFCIT*/ ?>
<?php /*START_PHP_SIRFCIT*/ if ($item->copyright_type =="Creative Commons Attribution 2.0 Generic"){ ?>
    <a href="http://creativecommons.org/licenses/by/2.0/" target="_blank">Creative Commons Attribution 2.0 Generic</a><?php } /*END_PHP_SIRFCIT*/ ?>
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