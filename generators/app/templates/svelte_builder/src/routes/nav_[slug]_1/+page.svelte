<script>
    import { onMount } from 'svelte';
    
    // Variable to track which section is currently visible
    let currentSection = 'page_1-0-0';
    let expandedNodes = new Set();

    // Function to update visibility
	function showSection(sectionId) {
    // Hide all sections
    const sections = document.querySelectorAll('.page');
    sections.forEach(section => {
        section.style.display = 'none';
    });

    // Show only the selected section
    const activeSection = document.getElementById(sectionId);
    if (activeSection) {
        activeSection.style.display = 'block';
        
        // Scroll to top of the page
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });

    }

    // Update current section
    currentSection = sectionId;
}
    // Function to toggle submenu
    function toggleSubmenu(event) {
        const parentLi = event.target.closest('li');
        const submenu = parentLi.querySelector('ul');
        const toggle = parentLi.querySelector('.toggle-icon');
        
        if (submenu) {
            const isExpanded = submenu.classList.contains('expanded');
            
            if (isExpanded) {
                submenu.classList.remove('expanded');
                submenu.style.display = 'none';
                toggle.textContent = '+';
            } else {
                submenu.classList.add('expanded');
                submenu.style.display = 'block';
                toggle.textContent = '-';
            }
        }
    }

    // Initialize on page load
    onMount(() => {
        // Show only the first section initially
        showSection('page_1-0-0');

        // Add toggle buttons to parent links
        const parentLinks = document.querySelectorAll('.sidebar-toc li:has(ul) > a');
        parentLinks.forEach(link => {
            const toggle = document.createElement('span');
            toggle.className = 'toggle-icon';
            toggle.textContent = '+';
            toggle.style.marginLeft = '0.5rem';
            toggle.addEventListener('click', (e) => {
                e.preventDefault();
                e.stopPropagation();
                toggleSubmenu(e);
            });
            link.appendChild(toggle);
        });

        // Hide all submenus initially
        document.querySelectorAll('.sidebar-toc ul ul').forEach(submenu => {
            submenu.style.display = 'none';
        });

        // Add click handlers to table of contents links
        const tocLinks = document.querySelectorAll('.sidebar-toc a');
        tocLinks.forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                const sectionId = link.getAttribute('href').substring(1);
                showSection(sectionId);
            });
        });
    });
	// Function to navigate between sections
    function navigate(direction) {
        const currentIndex = sections.indexOf(currentSection);
        let nextIndex;
        
        if (direction === 'next') {
            nextIndex = Math.min(currentIndex + 1, sections.length - 1);
        } else {
            nextIndex = Math.max(currentIndex - 1, 0);
        }
        
        showSection(sections[nextIndex]);
    }

	// Get sections array dynamically from the DOM
	let sections = [];
	
	onMount(() => {
		// Get all section elements with class 'page'
		const sectionElements = document.querySelectorAll('.page');
		// Extract IDs into array
		sections = Array.from(sectionElements).map(section => section.id);

		// Scroll back to top
		window.scrollTo(0, 0);
	});
    
	
</script>

<div class="flex items-start gap-14">

<!--aside class="md:flex hidden flex-[1] min-w-[230px] sticky top-16 flex-col h-[94.5vh] overflow-y-auto">
	<div dir="ltr" class="relative overflow-hidden py-4" style="position: relative; --radix-scroll-area-corner-width: 0px; --radix-scroll-area-corner-height: 0px;">
		<div data-radix-scroll-area-viewport="" class="h-full w-full rounded-[inherit]" style="overflow: hidden scroll;">
			<div style="min-width: 100%; display: table;">
				<div class="flex flex-col gap-3.5 mt-5 pb-6">
					<div class="mb-2">
						<h2 class="text-sm font-bold mb-2">TABLE OF CONTENTS</h2>
						<!-- *** ADD TABLE OF CONTENTS SECTION HERE *** ->
						<nav id="tableofcontents" class="sidebar-toc">
							<ul class="nav lc-docs-sidenav">
								<li><a href="#page_1-0-0">Embedded Interaction</a></li>
								<li><a href="#page_contributors">Contributors</a></li>
							</ul>
						</nav>
						<!--  END Table of Contents ->						
					</div>
				</div>
			</div>
		</div>
	</div>
</aside-->
	
<div  class="flex-1 md:flex-[6]">
	<!-- *** ADD MODULE CONTENTS SECTION HERE *** -->
	
        <section id="page_1-0-0" class="page">
            <h3 class="sub_head sr-only">Embedded Storyline Interaction</h3>
            <div class="center">
                <iframe src="storyline/story.html" width="100%" height="850px" frameborder="0" scrolling="no" title="Embedded Interaction Storyline" class="min-h-[86.5vh]"></iframe>
            </div>
        </section>
        <section id="page_contributors" class="page">
            <h3 class="sub_head">Contributors</h3>
            <div id="comet-sponsors">
                <h4 id="sponsors">COMET Sponsors</h4>
                <p>MetEd and the COMET® Program are a part of the <a
                        href="https://www.ucar.edu/community-programs">University Corporation for Atmospheric
                        Research's (UCAR's) Community Programs (UCP)</a> and are sponsored by</p>
                <ul>
                    <li><a href="https://www.weather.gov/about/" target="_blank" rel="noreferrer">NOAA's
                            National Weather Service (NWS)</a><br>with additional funding by:</li>
                    <li><a href="http://www.aihec.org/" target="_blank" rel="noopener noreferrer">American
                            Indian Higher Education Consortium (AIHEC)</a></li>
                    <li><a href="https://www.eumetsat.int/" target="_blank" rel="noreferrer">European
                            Organisation for the Exploitation of Meteorological Satellites (EUMETSAT)</a></li>
                    <li><a href="http://weather.gc.ca/" target="_blank" rel="noreferrer">Meteorological Service
                            of Canada (MSC)</a></li>
                    <li><a href="http://www.nesdis.noaa.gov/" target="_blank" rel="noreferrer">NOAA's National
                            Environmental Satellite, Data and Information Service (NESDIS)</a></li>
                    <li><a href="http://www.ngs.noaa.gov/" target="_blank" rel="noreferrer">NOAA's National
                            Geodetic Survey (NGS)</a></li>
                    <li><a href="https://www.my.gov.sa/wps/portal/snp/agencies/agencyDetails/AC040"
                            target="_blank" rel="noopener noreferrer">National Center for Meteorology (NCM) of
                            Saudi Arabia</a></li>
                    <li><a href="http://www.nsf.gov" target="_blank" rel="noreferrer">National Science
                            Foundation (NSF)</a></li>
                    <li><a href="https://www.usaid.gov/" target="_blank" rel="noopener noreferrer">US Agency for
                            International Development (USAID)</a></li>
                    <li><a href="https://www.usgs.gov/mission-areas/water-resources" target="_blank"
                            rel="noopener noreferrer">US Geological Survey (USGS) Water Resources Mission
                            Area</a></li>
                    <li><a href="https://www.worldbank.org/en/home" target="_blank"
                            rel="noopener noreferrer">World Bank (WB)</a></li>
                    <li><a href="https://public.wmo.int/en" target="_blank" rel="noreferrer">World
                            Meteorological Organization (WMO)</a></li>
                </ul>
                <p>To learn more about us, please visit the <a href="http://www.comet.ucar.edu">COMET
                        website</a>.</p>
                <h4 id="contributors">Project Contributors</h4>
                <h5>Project Lead</h5>
                <ul>
                    <li>Erin Houlihan - UCAR/COMET</li>
                    <li>James Russell - UCAR/COMET</li>
                </ul>
                <h5>Project Scientist</h5>
                <ul>
                    <li>Erin Houlihan - UCAR/COMET</li>
                    <li>James Russell - UCAR/COMET</li>
                </ul>
                <h5>Instructional Design</h5>
                <ul>
                    <li>Laurel Ozersky - UCAR/COMET</li>
                    <li>Kira LaCoss - UCAR/COMET</li>
                </ul>
                <h5>Science Advisors</h5>
                <ul>
                    <li>Karen Kavanaugh - NOAA NOS CO-OPS</li>
                    <li>Analise Keeney - NOAA NOS CO-OPS</li>
                    <li>Audra Luscher - NOAA NOS CO-OPS</li>
                    <li>Paul Fanelli - NOAA NOS CO-OPS</li>
                    <li>Gwen Shaughnessy - NOAA NOS CO-OPS</li>
                    <li>Connor Lewis - NOAA NOS CO-OPS</li>
                    <li>Amy Bosteels - NOAA NOS CO-OPS</li>
                    <li>John Callahan - NOAA NOS CO-OPS</li>
                </ul>
                <h5>Program Oversight</h5>
                <ul>
                    <li>James Russell - UCAR/COMET</li>
                </ul>
                <h5>Graphics/Animations</h5>
                <ul>
                    <li>Steve Deyo - UCAR/COMET</li>
                </ul>
                <h5>Multimedia Authoring/Interface Design</h5>
                <ul>
                    <li>James Russell - UCAR/COMET</li>
                    <li>Laurel Ozersky - UCAR/COMET</li>
                    <li>Gary Pacheco - UCAR/COMET</li>
                </ul>
            </div>
            <div id="comet-staff">
                <h4>COMET Staff, August 2024</h4>
                <h5>Director's Office</h5>
                <ul>
                    <li>Dr. Elizabeth Mulvihill, Director</li>
                    <li>Dr. Wendy Gram, Deputy Director</li>
                    <li>Dr. Paul Kucera, Assistant Director International Programs</li>
                </ul>
                <h5>Business Administration</h5>
                <ul>
                    <li>Lorrie Alberta, Administrator</li>
                    <li>Alayne Benson, Communications Specialist</li>
                    <li>Katie Chapman, Administrator</li>
                    <li>Tara Torres, Program Coordinator</li>
                </ul>
                <h5>IT Services</h5>
                <ul>
                    <li>Bob Bubon, Systems Administrator</li>
                    <li>Meghan Neuhaus, Technical Project Manager</li>
                    <li>Joey Rener, Software Engineer</li>
                    <li>Malte Winkler, Software Engineer</li>
                </ul>
                <h5>Instructional Services</h5>
                <ul>
                    <li>Abby Dowd, Instructional Designer</li>
                    <li>Keliann LaConte, Instructional Designer</li>
                    <li>Lon Goldstein, Instructional Designer</li>
                    <li>Laurel Ozersky, Instructional Designer</li>
                    <li>Sarah Ross-Lazarov, Instructional Designer</li>
                    <li>Tsvetomir Ross-Lazarov, Instructional Designer</li>
                </ul>
                <h5>International Programs</h5>
                <ul>
                    <li>William Nicewonger, Instrument Engineer</li>
                    <li>Kathryn Payne, Project Manager</li>
                    <li>David Russi, Translations Coordinator</li>
                    <li>Martin Steinson, Project Manager</li>
                </ul>
                <h5>Production and Media Services</h5>
                <ul>
                    <li>Steve Deyo, Graphic and 3D Designer</li>
                    <li>Corbin Jackson, Translator / Multimedia Specialist</li>
                    <li>Dolores Kiessling, Software Engineer</li>
                    <li>Gary Pacheco, Web Designer and Developer</li>
                    <li>Tyler Winstead, Web Developer</li>
                </ul>
                <h5>Science Group</h5>
                <ul>
                    <li>Patrick Dills, Meteorologist</li>
                    <li>Bryan Guarente, Instructional Designer/Meteorologist </li>
                    <li>Adam Hirsch, Meteorologist</li>
                    <li>Erin Houlihan, Hydrologist</li>
                    <li>Dr. James Russell, Meteorologist</li>
                    <li>Lee-ann Simpson, Meteorologist</li>
                    <li>Andrea Smith, Meteorologist</li>
                    <li>Brianna Smith, Meteorologist</li>
                    <li>Amy Stevermer, Scientist/Instructional Designer </li>
                    <li>Vanessa Vincente, Meteorologist</li>
                    <li>Rebecca Zieber, Oceanographer/Hydrologist</li>
                </ul>
                <h5>NOAA/National Weather Service - Forecast Decision Training Division</h5>
                <ul>
                    <li>Kevin Scharfenberg, Division Chief</li>
                    <li>Jason Jordan, Physical Scientist</li>
                    <li>Dr. Robert Rozumalski, Physical Scientist</li>
                    <li>Ross Van Til, Meteorologist</li>
                    <li>Shannon White, AWIPS Instructor</li>
                </ul>
            </div>
        </section>
    
        

	<!--div class="navigation-buttons flex justify-between items-center mt-8 mb-4 px-4">
		{#if currentSection !== sections[0]}
			<button
				class="flex items-center gap-2 px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
				onclick={() => navigate('prev')}>
				<svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
					<path fill-rule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clip-rule="evenodd" />
				</svg>
				Previous
			</button>
		{:else}
			<div></div>
		{/if}
	
		{#if currentSection !== sections[sections.length - 1]}
			<button
				class="flex items-center gap-2 px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
				onclick={() => navigate('next')}>
				Next
				<svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
					<path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd" />
				</svg>
			</button>
		{/if}
	</div-->
</div>
	
<!--div class="hidden xl:flex xl:flex-col sticky top-16 gap-3 py-8 min-w-[230px] h-[94.5vh] toc">
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
</div-->
	
</div>