<?php
require_once( 'cometAPI.inc.php' );
$mm = new MediaItemManager();
?>
<!doctype html>
<html lang="en">
<head>
    <title><%= lessonTitle %></title>
    <meta content="text/html; charset=UTF-8" http-equiv="content-type">
    <meta name="author" content="UCAR/COMET">
    <meta name="dcterms.rightsHolder" content="UCAR/COMET">
    <meta name="robots" content="all">
    <meta name="Description"
        content="Latest Core is COMET&#39;s basic lesson template used to design online lessons and courses. This is a MetEd lesson sample.">
    <meta name="keywords" content="">
    <meta name="viewport" content="width=device-width">
    <meta name="viewport" content="initial-scale=1.0">
    <link rel="stylesheet" href="src/css/layout.css">
    <link rel="stylesheet" href="src/css/core.css">
    <script src="src/js/jquery.min.js"></script>
    <script src="src/js/defaults.js"></script>
</head>

<body>

<nav class="sticky top-0 z-50 w-full h-16 border-b backdrop-filter backdrop-blur-xl bg-opacity-5 md:px-4 px-2">
    <div class="mx-auto flex h-full items-center justify-between p-1 sm:p-3 md:gap-2">
        <div class="flex items-center gap-5"><button
                class="items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground h-9 w-9 md:hidden flex"
                type="button" aria-haspopup="dialog" aria-expanded="false" aria-controls="radix-:Raqj6:"
                data-state="closed"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                    viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                    stroke-linejoin="round" class="lucide lucide-align-left">
                    <line x1="21" x2="3" y1="6" y2="6"></line>
                    <line x1="15" x2="3" y1="12" y2="12"></line>
                    <line x1="17" x2="3" y1="18" y2="18"></line>
                </svg></button>
            <div class="flex items-center gap-6">
                <div class="hidden md:flex"><a href="index.htm"><%= lessonTitle %></a></div>
                <div class="hidden md:flex items-center gap-5 text-sm font-medium text-muted-foreground">
                    <!-- additional links -->
                </div>
            </div>
        </div>
        <div class="flex sm:ml-0 gap-2">
            <!-- print/download links removed from inner pages -->
                <p>Printable Version</p>
        </div>
    </div>
</nav>    
<main class="px-5 sm:px-8 h-auto">
    <div class="flex items-start gap-14">
        <!-- desktop toc sidebar -->
        <aside id="tableofcontents" class="md:flex hidden flex-[1] min-w-[230px] sticky top-16 flex-col h-[94.5vh] overflow-y-auto">
            <div dir="ltr" class="relative overflow-hidden py-4" style="position: relative; --radix-scroll-area-corner-width: 0px; --radix-scroll-area-corner-height: 0px;">
                <div data-radix-scroll-area-viewport="" class="h-full w-full rounded-[inherit]" style="overflow: hidden scroll;">
                    <div style="min-width: 100%; display: table;">
                        <div class="flex flex-col gap-3.5 mt-5 pb-6">
                            <div class="mb-2">
                                <h2 class="text-sm font-bold mb-2">Table of Contents</h2>
                                <!-- TABLE OF CONTENTS: start -->
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
                                <!-- TABLE OF CONTENTS: end -->
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </aside>

        <!-- page content -->
        <div class="flex-1 md:flex-[6]">
            <div class="flex items-start gap-14">
                <div class="flex-[3] pt-10">
                    <!-- breadcrumbs here-->
                    <div class="typography">
                        
                        <!-- LESSON CONTENT: start -->
                        <h1 class="sub_head">Learning Objectives</h1>
                        <ul data-level="0" type="disc">
                            <li>Explain the operating principles of dual orthogonal polarimetric weather radar.
                            <ul data-level="1" type="circle">
                                <li>Basic polarimetry principles</li>
                                <li>H and V polarizations </li>
                            </ul></li>
                            <li>Explain the physical significance of the following variables: 
                            <ul data-level="1" type="circle">
                                <li>Differential reflectivity (ZDR), </li>
                                <li>Correlation coefficient (CC or ρhv), </li>
                                <li>Differential phase (Φdp), </li>
                                <li>Specific differential phase (Kdp),</li>
                                <li>Linear depolarization ratio (LDR)</li>
                            </ul></li>
                            <li>Ascribe physical significance to features primarily related to one or more of these variables</li>
                            <li>Identify likeliest echo types based upon combinations of the classical (Z, Vr, SW) and polarimetric radar
                                variables (listed above)
                            <ul data-level="1" type="circle">
                                <li>Identify the polarimetric variables that are the strongest discriminators for some hydrometeor classes</li>
                            </ul></li>
                        </ul>
                        <p><b>Summary: </b>Once an experimental type of weathe...</p>
                       
                        <!-- LESSON CONTENT: end -->

                    </div>
                </div>
                <div class="hidden xl:flex xl:flex-col sticky top-16 gap-3 py-8 min-w-[230px] h-[94.5vh] toc">
                    <button class="flex items-center ml-2 transition opacity-0 mt-6 self-start text-sm text-neutral-800 dark:text-neutral-300/85"><svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" class="inline-block w-4 h-4 mr-1 align-middle" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                            <path d="m5 12 7-7 7 7"></path>
                            <path d="M12 19V5"></path>
                        </svg><span>Scroll to top</span>
                    </button>
                </div>
            </div>
        </div>
    </div>
</main>
<footer class="w-full h-16 border-t">
    <div
        class="flex flex-wrap items-center justify-center sm:justify-between gap-4 sm:gap-0 w-full h-full px-2 sm:py-0 py-3 sm:px-4 lg:px-8 text-sm text-muted-foreground">
        <p class="text-center">© <%= copyrightYear %>, <a class="font-semibold"
                href="https://www.meted.ucar.edu/">COMET MetEd</a> - All Rights Reserved.</p>
        <div class="text-center hidden md:block"></div>
    </div>
</footer>
</body>
</html>