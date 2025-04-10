<script>
    import { lesson } from "$lib/lesson.config.js";
    import { sineIn } from "svelte/easing";
    import { fade } from "svelte/transition";

    const beginLesson = 'nav_' + lesson.id + '_' + lesson.printsCount;
    export let modalOpen = false;
    export let setOpen = () => {
        modalOpen = true;
    }
    export let setClosed = () => {
        modalOpen = false;
    }
</script>

{#if modalOpen}
<div transition:fade={{ duration: 150, easing: sineIn }} class="relative z-100 ease-out duration-300 transition-all"
    id="modal"
    tabindex="-1"
    aria-hidden="true"
    aria-labelledby="modal-title" role="dialog" aria-modal="true" onclick={() => setClosed()}>

    <div class="fixed inset-0 bg-gray-500/85 transition-opacity" aria-hidden="true"></div>
    <div class="fixed inset-0 z-10 w-screen overflow-y-auto">
        <div class="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
        <div class="relative transform overflow-hidden rounded-lg bg-white px-4 pb-4 pt-5 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg sm:p-6">
            <div>
            <div class="mt-3 text-center sm:mt-5">
                <h3 class="text-lg font-semibold text-gray-900" id="modal-title">Before you begin</h3>
                <div class="mt-2">
                <p class="text-gray-500 text-left">Please complete the pretest. This pretest covers material in the lesson that you are about to take, and it will help you gauge your current level of understanding of this topic. You will have the opportunity to take a quiz with very similar questions after you have completed the lesson. Comparing the two will help you see how much you’ve learned and will also help us see how well the lesson achieves its goals.</p>
                </div>
            </div>
            </div>
            <div class="mt-5 sm:mt-6">
            <button type="button" 
                class="inline-flex w-full btn btn-start justify-center"
                onclick={() => {
                    setOpen();
                    window.location.href = `./${beginLesson}${lesson.devMode ? '' : '.html'}`;
                }}    
            >Continue &rarr;</button>
            </div>
        </div>
        </div>
    </div>
</div>
{/if}

<div class="min-h-[86.5vh] flex flex-col justify-center items-center text-center px-2 py-8">
    <h1 class="text-4xl font-bold mb-4 sm:text-7xl">{lesson.title}</h1>
    <p class="text-lg text-muted-foreground mb-4">{lesson.subtitle}</p>
    <p class="text-base max-w-3xl text-foreground mb-8">{lesson.description}</p>
    <div class="flex items-center gap-5">
        <button class="btn btn-start"
            onclick={() => { setOpen(); }}
        >Begin →</button>
    </div>
</div>