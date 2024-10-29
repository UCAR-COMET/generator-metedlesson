<?php
    $moduleTitle1 = "<%= lessonTitle %>";
	$agreeLink = "<%= pathStructure %>distribute/getZip.php?moduleID=<%= lessonID %>&type=download&structure=dynamic"; 
?>
<!DOCTYPE html>
<html lang="en" class="light" style="color-scheme: light;">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title><%= lessonTitle %></title>
    <meta name="author" content="UCAR/COMET">
    <meta name="dcterms.rightsHolder" content="UCAR/COMET">
    <meta name="robots" content="all">
    <meta name="Description" content="<%= lessonDesc %>">
    <meta name="keywords" content="<%= lessonKeys %>">
    <meta name="viewport" content="width=device-width">
    <meta name="viewport" content="initial-scale=1.0">
    <link rel="stylesheet" href="src/css/layout.css">
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
                <button
                    href="print.php"
                    class="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-9 w-9"
                    aria-label="Print" title="Print"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                        viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                        stroke-linejoin="round" class="lucide lucide-printer w-[1.1rem] h-[1.1rem]">
                        <path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2"></path>
                        <path d="M6 9V3a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v6"></path>
                        <rect x="6" y="14" width="12" height="8" rx="1"></rect>
                    </svg>
                </button>
                <button
                    href="download.php"
                    class="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-9 w-9"
                    aria-label="Download" title="Download"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                        viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                        stroke-linejoin="round" class="lucide lucide-download w-[1.1rem] h-[1.1rem]">
                        <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                        <polyline points="7 10 12 15 17 10"></polyline>
                        <line x1="12" x2="12" y1="15" y2="3"></line>
                    </svg>
                </button>
            </div>
        </div>
    </nav>
    <main class="px-5 sm:px-8 h-auto">
        <div class="flex items-start gap-14">
            <div class="flex-1 md:flex-[6]">
                <div class="flex items-start gap-14">
                    <div class="flex-[3] pt-10">
                        
                        <div class="typography">
                            <h1 class="text-3xl -mt-2"><% if (lessonLang === 'ES') { %>Descargar<% } else if (lessonLang === 'FR') { %>Télécharger<% } else { %>Download<% } %></h1>
                            <p class="-mt-4 text-base text-muted-foreground text-[16.5px]">-- License Agreement --</p>
                            <div id="maincontent">
                                <div id="dl_agree">
                                    <% if (lessonLang === 'ES') { %>
                                    <?php include('<%= pathStructure %>download_agreement_es.txt'); ?>
                                    <% } else if (lessonLang === 'FR') { %>
                                    <?php include('<%= pathStructure %>download_agreement_fr.txt'); ?>
                                    <% } else { %>
                                    <?php include('<%= pathStructure %>download_agreement.txt'); ?>
                                    <% } %>
                                </div>
                            </div>
                        </div>
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