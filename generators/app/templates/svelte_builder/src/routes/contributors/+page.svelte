<script>
    /** @type {{ data: import('./$types').PageData }} */
    let { data } = $props();
</script>
<div class="flex items-start gap-14">

<aside class="md:flex hidden flex-[1] min-w-[230px] sticky top-16 flex-col h-[94.5vh] overflow-y-auto">
	<div dir="ltr" class="relative overflow-hidden py-4" style="position: relative; --radix-scroll-area-corner-width: 0px; --radix-scroll-area-corner-height: 0px;">
		<div data-radix-scroll-area-viewport="" class="h-full w-full rounded-[inherit]" style="overflow: hidden scroll;">
			<div style="min-width: 100%; display: table;">
				<div class="flex flex-col gap-3.5 mt-5 pb-6">
					<div class="mb-2">
						<h2 class="text-sm font-bold mb-2">TABLE OF CONTENTS</h2>
						<!-- *** ADD TABLE OF CONTENTS SECTION HERE *** -->
						<nav id="tableofcontents" class="sidebar-toc">
							<ul class="nav lc-docs-sidenav">
								<li><a href="#page_contributors">Contributors</a></li>
							</ul>
						</nav> <!--  END Table of Contents -->						
					</div>
				</div>
			</div>
		</div>
	</div>
</aside>
	
<div  class="flex-1 md:flex-[6]">
	<!-- *** ADD MODULE CONTENTS SECTION HERE *** -->
	<div id="module-content" class="col-md-9">
		<div class="row unit-header"></div>
		
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
					<li></li>
					<li></li>
				</ul>
				<h5>Project Scientist</h5>
				<ul>
					<li></li>
					<li></li>
				</ul>
				<h5>Instructional Design</h5>
				<ul>
					<li></li>
					<li></li>
				</ul>
				<h5>Science Advisors</h5>
				<ul>
					<li></li>
					<li></li>
					<li></li>
					<li></li>
					<li></li>
				</ul>
				<h5>Program Oversight</h5>
				<ul>
					<li></li>
				</ul>
				<h5>Graphics/Animations</h5>
				<ul>
					<li></li>
				</ul>
				<h5>Multimedia Authoring/Interface Design</h5>
				<ul>
					<li></li>
					<li></li>
					<li></li>
				</ul>
			</div>
			<div id="comet-staff">
				<h4>COMET Staff, [MONTH][YEAR]</h4>
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