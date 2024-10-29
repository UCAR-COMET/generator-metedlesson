<!DOCTYPE html>
<html lang="en">
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
<link rel="stylesheet" href="css/layout.css">
<script src="js/jquery.min.js"></script>
<script src="js/defaults.js"></script>
</head>
<body>
    <!-- navbar-->
    <nav class="sticky top-0 z-50 w-full h-16 border-b backdrop-filter backdrop-blur-xl bg-opacity-5 md:px-4 px-2">
        <div class="mx-auto flex h-full items-center justify-between p-1 sm:p-3 md:gap-2">
            <div class="flex items-center gap-5">
                <button id="menu-button" class="items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground h-9 w-9 md:hidden flex"
                    type="button" aria-haspopup="dialog" aria-expanded="false" aria-controls="radix-:Raqj6:"
                    data-state="closed">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                        fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                        class="lucide lucide-align-left">
                        <line x1="21" x2="3" y1="6" y2="6"></line>
                        <line x1="15" x2="3" y1="12" y2="12"></line>
                        <line x1="17" x2="3" y1="18" y2="18"></line>
                    </svg>
                </button>
                <div class="flex items-center gap-6">
                    <div class="hidden md:flex">
                        <a class="flex items-center gap-2.5" href="index.htm">
                            <h1 class="text-md font-semibold">$templateTitle</h1>
                        </a>
                    </div>
                    <div class="hidden md:flex items-center gap-5 text-sm font-medium text-muted-foreground">
                        <!-- additional links -->
                    </div>
                </div>
            </div>
            <div class="flex sm:ml-0 gap-2">
                <button
                    href="$printLink"
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
    <!-- main content -->
    <main class="px-5 sm:px-8 h-auto">
        <div class="flex items-start gap-14">
            <!-- desktop toc sidebar -->
            <aside class="md:flex hidden flex-[1] min-w-[230px] sticky top-16 flex-col h-[94.5vh] overflow-y-auto">
                <div dir="ltr" class="relative overflow-hidden py-4"
                    style="position: relative; --radix-scroll-area-corner-width: 0px; --radix-scroll-area-corner-height: 0px;">
                    <div data-radix-scroll-area-viewport="" class="h-full w-full rounded-[inherit]"
                        style="overflow: hidden scroll;">
                        <div style="min-width: 100%; display: table;">
                            <div class="flex flex-col gap-3.5 mt-5 pb-6">
                                <div class="mb-2">
                                    <h2 class="text-sm font-bold mb-2">$TOC_MENU</h2>
                                    $templateMenu
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
                            $templateContent

                            <h1 class="text-3xl -mt-2">SAMPLE_PAGE_TITLE</h1>
                            <p class="-mt-4 text-base text-muted-foreground text-[16.5px]">SAMPLE_CONTENT</p>
                            <p class="-mt-4 text-base text-muted-foreground text-[16.5px]">This section provides an overview of how to get started with the Documents, Next.js Document Starter Kit.</p>
                            <div><p><img src="/images/banner.png" alt="Banner" title="Documents"></p>
                                <h2 id="documents"><a href="#documents"><span class="icon icon-link"></span></a>Documents</h2>
                                <p>Welcome to <strong>Documents</strong>, a powerful and flexible Next.js documentation starter kit designed to simplify the process of creating high-quality, comprehensive
                                product documentation, technical manuals, and business guides. Built with <strong>React</strong>, <strong>Tailwind CSS</strong>, and <strong>TypeScript</strong>, this starter kit provides the
                                foundation to build your project documentation and knowledge base.</p>
                                <p>Documents was crafted to streamline the creation, management and showcasing of documentation, allowing developers and teams to focus on the content rather
                                than building the underlying structure. This documentation aims to help you get up and running with the kit, exploring the various features and providing
                                insights into how to structure and present your content effectively.</p>
                                <div class="grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-3 gap-6"><a target="_self" class="!no-underline" href="/"><div class="group relative p-6 border rounded-lg h-full flex flex-col justify-between bg-white dark:bg-neutral-900 dark:border-neutral-800 shadow-md transition-shadow duration-300 ease-in-out hover:shadow-lg hover:dark:shadow-md"><div><p class="text-xs font-semibold !my-1 text-gray-500 dark:text-gray-400">Instructions</p><div class="text-lg font-semibold transition-all group-hover:font-bold">Installation</div><p class="text-sm font-normal text-gray-600 dark:text-gray-400 !my-2">Get started with Documents using our quick start installation guide to get your project started.</p></div></div></a><a target="_self" class="!no-underline" href="//setup"><div class="group relative p-6 border rounded-lg h-full flex flex-col justify-between bg-white dark:bg-neutral-900 dark:border-neutral-800 shadow-md transition-shadow duration-300 ease-in-out hover:shadow-lg hover:dark:shadow-md"><div><p class="text-xs font-semibold !my-1 text-gray-500 dark:text-gray-400">Setup</p><div class="text-lg font-semibold transition-all group-hover:font-bold">Site Settings</div><p class="text-sm font-normal text-gray-600 dark:text-gray-400 !my-2">Setting up your Documents projects layout, links and search engine optimisation.</p></div></div></a><a target="_blank" rel="noopener noreferrer" class="!no-underline" href="https://www.rubixstudios.com.au/"><div class="group relative p-6 border rounded-lg h-full flex flex-col justify-between bg-white dark:bg-neutral-900 dark:border-neutral-800 shadow-md transition-shadow duration-300 ease-in-out hover:shadow-lg hover:dark:shadow-md"><div class="absolute top-2 right-2 text-gray-500 dark:text-gray-400 group-hover:text-black dark:group-hover:text-white transform transition-transform duration-300 ease-in-out group-hover:translate-x-1 group-hover:-translate-y-1"><svg stroke="currentColor" fill="none" stroke-width="3" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" class="w-4 h-4 group-hover:stroke-[4]" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M7 7h10v10"></path><path d="M7 17 17 7"></path></svg></div><div><p class="text-xs font-semibold !my-1 text-gray-500 dark:text-gray-400">Support</p><div class="text-lg font-semibold transition-all group-hover:font-bold">Rubix Studios</div><p class="text-sm font-normal text-gray-600 dark:text-gray-400 !my-2">Australia's leading branding, marketing and web development company.</p></div></div></a></div>
                                <h2 id="why-documents"><a href="#why-documents"><span class="icon icon-link"></span></a>Why Documents?</h2>
                                <p>Documents was created as an open-source project to help the community streamline their documentation process, enabling developers to focus on more critical
                                tasks. Built with scalability in mind, it adapts to projects of all sizes, from single-page guides to comprehensive knowledge bases.</p>
                                <p>The integration of MDX, custom components and Tailwind CSS ensures an intuitive experience, simplifying both content creation and management.</p>
                                <ul>
                                <li><strong>Product Guides</strong>: Comprehensive manuals for product usage, setup and troubleshooting.</li>
                                <li><strong>Business Documentation</strong>: Clear and structured documentation for internal processes, policies and systems.</li>
                                <li><strong>Technical Manuals</strong>: Detailed guides for APIs, software development kits (SDKs) and technical processes.</li>
                                </ul>
                                <p>Documents offers extensive customization options, allowing you to easily align the design and functionality with your branding.</p>
                                <h2 id="key-features"><a href="#key-features"><span class="icon icon-link"></span></a>Key Features</h2>
                                <p>Here are some of the features that make <strong>Documents</strong> ideal for building your documentation:</p>
                                <table><thead><tr><th>Feature</th><th>Description</th></tr></thead><tbody><tr><td><strong>Content Creation</strong></td><td>Write documentation using Markdown with JSX, custom components and Mermaid.js for diagrams.</td></tr><tr><td><strong>Navigation &amp; Structure</strong></td><td>Organize content with multi-level navigation, automatically generated tables of contents and smooth pagination.</td></tr><tr><td><strong>Code Features</strong></td><td>Syntax highlighting, enhanced code blocks and a code switcher with copy functionality.</td></tr><tr><td><strong>Advanced Search</strong></td><td>Fuzzy search with term highlighting for quick and accurate results.</td></tr><tr><td><strong>Theming &amp; Layout</strong></td><td>Supports light/dark modes with automatic switching and responsive design.</td></tr><tr><td><strong>Math &amp; Tables</strong></td><td>Seamless integration of LaTeX for math and structured tables.</td></tr><tr><td><strong>SEO &amp; Meta Tags</strong></td><td>Built-in SEO, metadata generation and control over meta tags for better search rankings and social sharing.</td></tr><tr><td><strong>AI-powered Docs (In Development)</strong></td><td>Future feature for AI-driven content discussions and search.</td></tr></tbody></table>
                                <h2 id="how-to-use-these-documents"><a href="#how-to-use-these-documents"><span class="icon icon-link"></span></a>How to Use These Documents</h2>
                                <p>You'll find the documentation's navigation bar on the left side of the screen. The pages are organized in a logical sequence, progressing from foundational
                                topics to more advanced concepts, allowing you to follow along step-by-step as you build your documentation. However, feel free to explore the content in
                                any order, selecting the sections most relevant to your use case.</p>
                                <p>On the right side of the screen, a table of contents provides easy navigation between sections of each page. For quick access to specific content, you can
                                use the search bar at the top or the search shortcut (<code>Ctrl+K</code> or <code>Cmd+K</code>).</p>
                                <p>Head over to the <a href="/">Installation Guide</a>.</p>
                                <h2 id="join-our-community"><a href="#join-our-community"><span class="icon icon-link"></span></a>Join our Community</h2>
                                <p>If you have questions about anything related to Documents, you're always welcome to ask our community on <a href="https://github.com/rubixvi/rubix-documents" target="_blank" rel="noopener noreferrer">GitHub</a>, <a href="https://x.com/rubixstory" target="_blank" rel="noopener noreferrer">X (Twitter)</a>, <a href="https://www.facebook.com/rubixstudios" target="_blank" rel="noopener noreferrer">Facebook</a>
                                and <a href="https://www.reddit.com/r/RubixStudios/" target="_blank" rel="noopener noreferrer">Reddit</a>.</p></div>
                            
                            <div></div>
                            <!-- page navigator here-->
                        </div>
                    </div>
                    <div class="hidden xl:flex xl:flex-col sticky top-16 gap-3 py-8 min-w-[230px] h-[94.5vh] toc">
                        <button
                            class="flex items-center ml-2 transition opacity-0 mt-6 self-start text-sm text-neutral-800 dark:text-neutral-300/85"><svg
                                stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24"
                                stroke-linecap="round" stroke-linejoin="round"
                                class="inline-block w-4 h-4 mr-1 align-middle" height="1em" width="1em"
                                xmlns="http://www.w3.org/2000/svg">
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
            <p class="text-center">©  <%= copyrightYear %>, <a class="font-semibold" href="https://www.meted.ucar.edu/">COMET MetEd</a> - All Rights Reserved.</p>
            <div class="text-center hidden md:block"></div>
        </div>
    </footer>
</body>
<style>
    [data-radix-scroll-area-viewport] {
        scrollbar-width: none;
        -ms-overflow-style: none;
        -webkit-overflow-scrolling: touch;
    }

    [data-radix-scroll-area-viewport]::-webkit-scrollbar {
        display: none;
    }
</style>
</html>