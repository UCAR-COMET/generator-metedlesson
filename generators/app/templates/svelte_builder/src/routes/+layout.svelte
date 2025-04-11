<script>
    import '../app.css';
    import { page } from '$app/stores';
    import { lesson } from '$lib/lesson.config.js';
    import { onMount } from 'svelte';
    
    //let lessonPublishYear = lesson.publishDate ? new Date(lesson.publishDate).getFullYear() : null;
    //let currentYear = new Date().getFullYear();
    let moreMenuOpen = $state(false);

    const toggleMoreMenu = () => {
        moreMenuOpen = !moreMenuOpen;
    };
    function closeMoreMenu() {
        moreMenuOpen = false;
    }

    // Click outside handler
    const handleOutsideClick = (event) => {
        const moreMenuButton = document.getElementById('more-menu-button');
        const moreMenuDropdown = document.getElementById('more-menu-dropdown');
        
        if (moreMenuOpen && 
            moreMenuButton && 
            moreMenuDropdown && 
            !moreMenuButton.contains(event.target) && 
            !moreMenuDropdown.contains(event.target)) {
            closeMoreMenu();
        }
    }

    // Initialize
    onMount(() => {
        // Add global click handler
        document.addEventListener('click', handleOutsideClick);
        
        // Cleanup on unmount
        return () => {
            document.removeEventListener('click', handleOutsideClick);
        };
    });

    let { children } = $props();
</script>

<!-- navbar-->
<nav class="sticky top-0 z-50 w-full h-16 border-b backdrop-filter backdrop-blur-xl bg-opacity-5 md:px-4 px-2">
    <div class="mx-auto flex h-full items-center justify-between p-1 sm:p-3 md:gap-2">
        <div class="flex items-center gap-5">
            <button id="menu-button" class="items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground h-9 w-9 md:hidden flex"
                type="button" aria-haspopup="dialog" aria-expanded="false" aria-controls="radix-:Raqj6:" aria-label="Open navigation menu">
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
                    <a id="home-link" class="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-9 px-2" href={`./${lesson.devMode ? '' : 'index.html'}`} aria-label="Introduction" title="Introduction to the Lesson">
                        Introduction
                    </a>
                </div>
                <div class="hidden md:flex items-center gap-5 text-sm font-medium text-muted-foreground">
                    <!-- additional links -->                    
                </div>
            </div>
        </div>
        <div class="flex sm:ml-0 gap-2">
            <a 
                href={`./nav_${lesson.id}_1${lesson.devMode ? '' : '.html'}`}
                class="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-9 px-2"
                aria-label="Lesson" title="Lesson">
                Lesson
            </a>
            <!--<a
                href={`./contributors${lesson.devMode ? '' : '.html'}`}
                class="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-9 px-2"
                aria-label="Contributors" title="Contributors">
                Contributors
            </a>
            <a
                href={`./media_gallery${lesson.devMode ? '' : '.html'}`}
                class="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-9 px-2"
                aria-label="Media Gallery" title="Media Gallery">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="m2.25 15.75 5.159-5.159a2.25 2.25 0 0 1 3.182 0l5.159 5.159m-1.5-1.5 1.409-1.409a2.25 2.25 0 0 1 3.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 0 0 1.5-1.5V6a1.5 1.5 0 0 0-1.5-1.5H3.75A1.5 1.5 0 0 0 2.25 6v12a1.5 1.5 0 0 0 1.5 1.5Zm10.5-11.25h.008v.008h-.008V8.25Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
                </svg>
            </a>-->
            <!--<a
                href={`./print_${lesson.id}_1${lesson.devMode ? '' : '.html'}`}
                class="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-9 px-2"
                aria-label="Print Lesson" title="Print Lesson">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M6.72 13.829c-.24.03-.48.062-.72.096m.72-.096a42.415 42.415 0 0 1 10.56 0m-10.56 0L6.34 18m10.94-4.171c.24.03.48.062.72.096m-.72-.096L17.66 18m0 0 .229 2.523a1.125 1.125 0 0 1-1.12 1.227H7.231c-.662 0-1.18-.568-1.12-1.227L6.34 18m11.318 0h1.091A2.25 2.25 0 0 0 21 15.75V9.456c0-1.081-.768-2.015-1.837-2.175a48.055 48.055 0 0 0-1.913-.247M6.34 18H5.25A2.25 2.25 0 0 1 3 15.75V9.456c0-1.081.768-2.015 1.837-2.175a48.041 48.041 0 0 1 1.913-.247m10.5 0a48.536 48.536 0 0 0-10.5 0m10.5 0V3.375c0-.621-.504-1.125-1.125-1.125h-8.25c-.621 0-1.125.504-1.125 1.125v3.659M18 10.5h.008v.008H18V10.5Zm-3 0h.008v.008H15V10.5Z" />
                </svg>
            </a>-->
            <div class="relative">
                <button
                    id="more-menu-button"
                    class="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-9 px-2"
                    aria-expanded={moreMenuOpen}
                    aria-haspopup="true"
                    onclick={toggleMoreMenu}
                    aria-controls="more-menu-dropdown"
                    aria-label="More"
                    title="More"
                    >
                    More
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="ml-1">
                        <path d="m6 9 6 6 6-6"/>
                    </svg>
                </button>
                
                {#if moreMenuOpen}
                <div id="more-menu-dropdown" class="absolute right-0 mt-1 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-50 focus:outline-none z-50">
                    <div class="py-1 border border-gray-200 rounded-md" role="menu" aria-orientation="vertical" aria-labelledby="more-menu-button">
                        <a href={`./contributors${lesson.devMode ? '' : '.html'}`} class="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-100" role="menuitem">Contributors</a>
                        <a href={`./media_gallery${lesson.devMode ? '' : '.html'}`} class="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-100" role="menuitem">Media Gallery</a>
                    </div>
                </div>
                {/if}
            </div>

        </div>
    </div>
</nav>

<!-- main content -->
<main class="px-5 sm:px-8 h-auto">
    {@render children()}
</main>

<!-- footer -->
<footer class="w-full h-16 border-t">
    <div class="flex flex-wrap items-center justify-center sm:justify-between gap-4 sm:gap-0 w-full h-full px-2 sm:py-0 py-3 sm:px-4 lg:px-8 text-sm text-muted-foreground">
        <p class="text-center">© <%= copyrightYear %>, <a class="font-semibold" href="https://www.meted.ucar.edu/">COMET MetEd</a> - All Rights Reserved.</p>
        <div class="text-center hidden md:block"></div>
    </div>
</footer>