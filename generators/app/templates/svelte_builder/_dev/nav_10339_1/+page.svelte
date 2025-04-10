<script>
    import { onMount } from 'svelte';
    
    // Variable to track which section is currently visible
    let currentSection = 'page_1-0-0';
    let expandedNodes = new Set();

    // Function to update visibility
	function showSection(sectionId) {
    // Hide all sections
    const sections = document.querySelectorAll('section.page');
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
		const sectionElements = document.querySelectorAll('section.page');
		// Extract IDs into array
		sections = Array.from(sectionElements).map(section => section.id);
	});
    
	
</script>

<style>
    section.page {
        display: none;
    }

    :global(.toggle-icon) {
        cursor: pointer;
        font-weight: bold;
        color: #666;
        user-select: none;
    }

    :global(.sidebar-toc ul) {
        list-style: none;
        padding-left: 1.5rem;
    }

    :global(.sidebar-toc a) {
        text-decoration: none;
        color: inherit;
        display: flex;
        align-items: center;
        justify-content: space-between;
    }

    :global(.sidebar-toc a:hover) {
        text-decoration: underline;
    }
	:global(.sidebar-toc a) {
        text-decoration: none;
        color: inherit;
        display: flex;
        align-items: center;
    }

    :global(.toggle-icon) {
        cursor: pointer;
        font-weight: bold;
        color: #666;
        user-select: none;
        min-width: 1rem;
        display: inline-flex;
        justify-content: center;
    }
</style>

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
								<li><a href="#page_1-0-0">Introduction</a></li>
								<li><a href="#page_2-0-0" class="innerNode">Observational Equipment</a>
									<ul class="nav">
										<li><a href="#page_2-1-0">Knowledge Check</a></li>
										<li><a href="#page_2-2-0">ASOS</a></li>
										<li><a href="#page_2-3-0">AWOS</a></li>
									</ul>
								</li>
								<li><a href="#page_3-0-0" class="innerNode">Data</a>
									<ul class="nav">
										<li><a href="#page_3-1-0">Data Output</a></li>
										<li><a href="#page_3-2-0">Data Users</a></li>
										<li><a href="#page_3-3-0">System Maintenance</a></li>
									</ul>
								</li>
								<li><a href="#page_4-0-0">Takeaways</a></li>
								<li><a href="#page_5-0-0">Resources</a></li>
								<li><a href="#page_contributors">Contributors</a></li>
							</ul>
						</nav>						
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
		<section id="page_1-0-0" class="page">
			<h3 class="sub_head">Introduction</h3>
			<div class="center"><img src="media/graphics/Elko_ASOS.jpg" width="850" height="640"
					alt="An automated surface observation system from Elko, Nevada" /></div>
			<p>The Automated Weather Observing System (AWOS) and Automated Surface Observing System (ASOS) are
				key instruments in the collection and analysis of near real-time and climatological weather
				data. There are almost one thousand of these systems over the entire United States and they are
				predominantly found at airports. Both systems collect and record meteorological parameters with
				a few differences between them.</p>
			<p>Meteorologists, pilots, climatologists, modelers, and even the general public frequently access,
				use, and refer to ASOS and AWOS data collected. Any data related issues originating from either
				an ASOS or AWOS can lead to potentially negative effects relating to decision support services,
				understanding of current conditions or in the climatological record if not recorded or fixed
				appropriately.</p>
			<p>By the end of the lesson, you should be able to:</p>
			<ul>
				<li>Differentiate between AWOS and ASOS capabilities, data output, and data users</li>
				<li>Identify ASOS/AWOS maintenance indicators and requirements</li>
				<li>Identify situations that contribute to maintenance needs of the AWOS and ASOS</li>
			</ul>
		</section>
		<section id="page_2-0-0" class="page">
			<h3 class="sub_head">Observational Equipment</h3>
		</section>
		<section id="page_2-1-0" class="page">
			<h4 class="sub_head"><small>Observational Equipment &raquo;</small> Knowledge Check</h4>
			<p>Forecasters frequently make use of, refer to, and evaluate AWOS and ASOS-derived data in their
				daily workflow. The following set of questions will ask you to identify various details and
				components of the ASOS and AWOS equipment. </p>
			<div id="q2101" class="panel panel-default interaction-question">
				<div class="panel-body">
					<div class="question-wrap inlinedropdowns">
						<h4>Question</h4>
						<p class="question">For each observation system, determine whether the Federal Aviation
							Administration (FAA), National Weather Service (NWS), or both owns and maintains the
							equipment.</p>
						<form action="#">
							<fieldset>
								<div class="response-group-item"> <strong>a) </strong>Automated Surface
									Observing System (ASOS) <select name="q2101a">
										<option>--</option>
										<option>FAA</option>
										<option>NWS</option>
										<option>Both</option>
									</select>. </div>
								<div class="correct response-group-item dropdown_correct answer">Both</div>
								<div class="response-group-item"><strong> b) </strong>Automated Weather
									Observing System (AWOS) <select name="q2101b">
										<option>--</option>
										<option>FAA</option>
										<option>NWS</option>
										<option>Both</option>
									</select>. </div>
								<div class="correct response-group-item dropdown_correct answer">FAA</div>
								<input class="submit-button btn btn-primary" name="submit-button" value="Done"
									type="button">
							</fieldset>
						</form>
						<div class="answer">
							<p class="explanation">Both the FAA and NWS own and maintain ASOS equipment while
								the FAA maintains all AWOS. As of publication (February 2025), the NWS is
								transitioning control of some of their ASOS equipment to the FAA. </p>
						</div>
						<div class="message">Please make a selection.</div>
					</div>
				</div>
			</div>
			<div id="q2102" class="panel panel-default interaction-question">
				<div class="panel-body">
					<div class="question-wrap-drag">
						<h4>Exercise</h4>
						<p>Determine whether the meteorological parameter below is capable of being observed by
							an ASOS, an AWOS, or both. Drag each parameter to the appropriate section.</p>
						<div class="drag-container" title="media/graphics/ASOS_AWOS_venn_diagram.jpg">
							<div class="image_holder"></div>
							<p class="drag_directions">Each parameter will only be used one time. </p>
							<div class="drag_controls_holder">
								<div class="drag_controls">
									<div
										class="draggable ui-widget-content ui-draggable drag_item ui-draggable-handle">
										<span class="glyphicon glyphicon-th"></span>Wind Direction</div>
									<div
										class="draggable ui-widget-content ui-draggable drag_item ui-draggable-handle">
										<span class="glyphicon glyphicon-th"></span>Precipitation Discrimination
									</div>
									<div
										class="draggable ui-widget-content ui-draggable drag_item ui-draggable-handle">
										<span class="glyphicon glyphicon-th"></span>Sky Conditions</div>
									<div
										class="draggable ui-widget-content ui-draggable drag_item ui-draggable-handle">
										<span class="glyphicon glyphicon-th"></span>Precipitation Intensity
									</div>
									<div
										class="draggable ui-widget-content ui-draggable drag_item ui-draggable-handle">
										<span class="glyphicon glyphicon-th"></span>Visibility</div>
									<div
										class="draggable ui-widget-content ui-draggable drag_item ui-draggable-handle">
										<span class="glyphicon glyphicon-th"></span>Altimeter</div>
									<div
										class="draggable ui-widget-content ui-draggable drag_item ui-draggable-handle">
										<span class="glyphicon glyphicon-th"></span>Temperature</div>
									<div
										class="draggable ui-widget-content ui-draggable drag_item ui-draggable-handle">
										<span class="glyphicon glyphicon-th"></span>Ceiling</div>
									<div
										class="draggable ui-widget-content ui-draggable drag_item ui-draggable-handle">
										<span class="glyphicon glyphicon-th"></span>Dew Point</div>
									<div
										class="draggable ui-widget-content ui-draggable drag_item ui-draggable-handle">
										<span class="glyphicon glyphicon-th"></span>Wind Speed</div>
									<div
										class="draggable ui-widget-content ui-draggable drag_item ui-draggable-handle">
										<span class="glyphicon glyphicon-th"></span>Sky Obstruction</div>
								</div> <input class="done_drag btn btn-primary" value="Done" type="button">
								<input class="reset_drag btn btn-default" value="Reset" type="button">
							</div>
						</div>
						<div class="answer">
							<div class="center"><img src="media/graphics/ASOS_AWOS_venn_diagram_key.jpg"
									width="850" height="640"
									alt="A venn diagram with ASOS on the left and AWOS on the right. The left is filled in with the ASOS only instruments while the sensors in common are in the middle" />
							</div>
							<p>There are many similarities between meteorological parameters measured by both
								AWOS and ASOS equipment, but the ASOS is able to more accurately represent the
								real conditions.</p>
							<p>The ASOS has additional equipment and can provide information about the type of
								precipitation (solid or frozen), the intensity of the precipitation, and if the
								sky is obscured by a meteorological hazard such as haze or fog. The table below
								shows a comparison between the types of meteorological parameters capable on
								both systems.</p>
							<table class="table table-bordered table-responsive">
								<thead>
									<tr>
										<th>ASOS</th>
										<th>AWOS</th>
									</tr>
								</thead>
								<tbody>
									<tr>
										<td>Ceiling</td>
										<td>Ceiling</td>
									</tr>
									<tr>
										<td>Sky Conditions</td>
										<td>Sky Conditions</td>
									</tr>
									<tr>
										<td>Visibility</td>
										<td>Visibility</td>
									</tr>
									<tr>
										<td>Altimeter</td>
										<td>Altimeter</td>
									</tr>
									<tr>
										<td>Temperature</td>
										<td>Temperature</td>
									</tr>
									<tr>
										<td>Dew Point</td>
										<td>Dew Point</td>
									</tr>
									<tr>
										<td>Wind Direction</td>
										<td>Wind Direction</td>
									</tr>
									<tr>
										<td>Wind Speed</td>
										<td>Wind Speed</td>
									</tr>
									<tr>
										<td>Precipitation Intensity</td>
										<td></td>
									</tr>
									<tr>
										<td>Precipitation Discrimination</td>
										<td></td>
									</tr>
									<tr>
										<td>Sky Obstruction</td>
										<td></td>
									</tr>
								</tbody>
							</table>
						</div>
					</div>
				</div>
			</div>
			<div class="show-after">
				<p>While both of these weather platforms are useful and provide critical information, they lack
					the capability to fully capture all potential weather hazards and phenomena. In these
					instances, a human is able to augment the conditions to accurately reflect the conditions
					and provide these critical details. If a METAR reports the conditions listed below, they
					were added by a human and provide a more complete report of the weather at the location.
					Expand the panel to see what weather hazards that can be augmented.</p>
				<div class="panel panel-primary">
					<div class="panel-heading">
						<h4 class="panel-title"> <a data-toggle="collapse" href="#collapse210-1">Augmented
								Weather Hazards<span
									class="glyphicon glyphicon-plus-sign pull-right"></span></a> </h4>
					</div>
					<div id="collapse210-1" class="panel-collapse collapse">
						<div class="panel-body">
							<ul>
								<li>Sleet</li>
								<li>Snow pellets</li>
								<li>Hail</li>
								<li>Drizzle</li>
								<li>Freezing Drizzle</li>
								<li>Snow depth</li>
								<li>Virga</li>
								<li>Obscurations such as sand, dust, spray, or smoke</li>
								<li>Tornadoes, wall clouds, or a funnel</li>
							</ul>
						</div>
					</div>
				</div>
				<p>Both the ASOS and AWOS provide critical real time weather information. Both of them provide
					information related to weather decision making such as sky condition, temperature, dew
					point, and wind direction and speed. The equipment and capability on an ASOS and AWOS do
					have a slight difference, but both are equally approved and used in the meteorological
					community.</p>
				<p>The next two sections will serve as a refresher on the differences between the two systems
					and further discuss the equipment.</p>
			</div>
		</section>
		<section id="page_2-2-0" class="page">
			<h4 class="sub_head"><small>Observational Equipment &raquo;</small> ASOS</h4>
			<p>The Automated Surface Observing System (ASOS) is a weather observation platform that provides
				non-stop weather information for the areas where they are located. There are over 900 ASOS
				stations and almost all of them are located at airports. </p>
			<div class="center"><img src="media/graphics/ASOS_sensors.jpg" width="850" height="640"
					alt="An automated surface observation system from CSI Met Garden with sensor denoted" />
			</div>
			<p>Each ASOS is equipped with sensors that record wind speed and direction, air temperature, dew
				point, pressure, precipitation amount, visibility, and ceilings. Many stations are also able to
				provide information about precipitation type and amount and visibility obstructions such as fog
				or haze. This information is crucial to users to help provide critical information for aviation
				related decisions. The ASOS network is operated and maintained through a joint effort between
				the National Weather Service, Department of Defense, and Federal Aviation Administration. </p>
			<div class="center"><img src="media/graphics/ASOS_Freezing_rain_sensor.jpg" width="600" height="800"
					alt="A precipitation type discriminator for a weather station " /></div>
			<p>One of the most important differences between the ASOS and AWOS is the inclusion equipment that
				can help with the precipitation discrimination. The ice accretion sensor is a piece of equipment
				that is only found on an ASOS. An ASOS will include this ice accretion information in the remark
				section of the METAR and indicate the amount of accretion that has occurred during a 1-, 3-, and
				6-hour period with an I-group, the same format as non-frozen precipitation in the P-group. The
				system is able to regulate the ice that accumulates on the sensor by heating up to avoid ice
				freezing and negatively impacting the sensor's ability to perform. Included is an example of a
				METAR with the ice accretion bolded.</p>
			<div class="panel panel-default">
				<div class="panel-heading">
					<h4 class="panel-title">Icing METAR Example</h4>
				</div>
				<div class="panel-body">
					<pre>  KCGI 060453Z AUTO 34017G27KT 7SM BKN010 OVC015 M02/M03 A2981 RMK AO2 PK <br>  WND 33027/0432 FZRAE17 CIG 007V013 SLP097 P0000 <b>I1004</b> T10171033  </pre>
				</div>
			</div>
			<p>The Cape Girardeau, MO ASOS has reported four-hundredths of an inch of ice accumulation in the
				past hour, potentially due to the freezing rain that ended 17 minutes after the hour (FZRAE17).
				The ability to detect ice is only available in the ASOS without augmentation from a human. </p>
			<p>ASOS benefits the weather and climate community by providing data every minute at many locations,
				which can allow for real time analysis and verification. Since many ASOS sites have a long
				period of recorded history, the data collected is part of the climatological record for many
				locations. Ensuring these locations are functioning and reporting information correctly is
				important for the integrity of these records.</p>
			<p>A limitation of the ASOS is that the station can only report the weather in its immediate range
				of equipment, including in the vertical. For example, if there is a lower cloud deck or rain
				half a mile from the sensor, but it never passes directly over the sensors, the values recorded
				may not reflect the entire celestial dome. Humans however have the ability to augment and adjust
				ASOS data as needed.</p>
			<p>You can check the <a href="https://www.faa.gov/air_traffic/weather/asos" target="_blank"
					rel="noreferrer">Surface Weather Observation Stations</a> (ASOS/AWOS) on the FAA Website to
				determine what type of observation stations are in your area. Additionally, you can consult the
				<a href="https://www.faa.gov/air_traffic/flight_info/aeronav/productcatalog/VFRCharts/Sectional/"
					target="_blank" rel="noreferrer">FAA Sectional Aeronautical Chart</a> as well for your area
				to determine the type of observation system.</p>
		</section>
		<section id="page_2-3-0" class="page">
			<h4 class="sub_head"><small>Observational Equipment &raquo;</small> AWOS</h4>
			<p>An Automated Weather Observing Station (AWOS) is a station that provides non-stop weather
				information for the areas that they are located. There are over 200 AWOS stations and almost all
				of them are located at airports but compared to an ASOS, are strategically placed at smaller
				airports.</p>
			<div class="center"><img src="media/graphics/AWOS_sensors.jpg" width="850" height="780"
					alt="An automated surface observation system from the Eureka Airport with sensors denoted" />
			</div>
			<p>An AWOS shares many similarities to an ASOS when comparing the meteorological data
				collected/measured between them. Both provide constant near real time updates of weather
				conditions but compared to the ASOS which reports every minute, an AWOS updates every 20
				minutes. The AWOS provides information about ceilings, sky conditions, visibility, altimetry,
				temperature, dew point, and wind direction and speed. Some, but not all, AWOS can also indicate
				precipitation type and intensity but do not include ice. </p>
			<p>All AWOS are maintained by the FAA. As of publication (February 2025), there is an ongoing effort
				to convert some ASOS to AWOS-Cs, the most updated model of the station.</p>
			<p>The AWOS has the same benefits and limitations as the ASOS. Both stations used together create a
				robust network of observations and data. A limitation of the AWOS is that the station can only
				report the weather in its immediate range of equipment, including in the vertical. For example,
				if there is a lower cloud deck or rain half a mile from the sensor, but it never passes directly
				over the sensors, the values recorded may not reflect the entire celestial dome. </p>
			<p>You can check the <a href="https://www.faa.gov/air_traffic/weather/asos" target="_blank"
					rel="noreferrer">Surface Weather Observation Stations</a> (ASOS/AWOS) on the FAA Website to
				determine what type of observation stations are in your area. Additionally, you can consult the
				<a href="https://www.faa.gov/air_traffic/flight_info/aeronav/productcatalog/VFRCharts/Sectional/"
					target="_blank" rel="noreferrer">FAA Sectional Aeronautical Chart</a> as well for your area
				to determine the type of observation system.</p>
		</section>
		<section id="page_3-0-0" class="page">
			<h3 class="sub_head">Data</h3>
		</section>
		<section id="page_3-1-0" class="page">
			<h4 class="sub_head"><small>Data &raquo;</small> Data Output</h4>
			<p>Although the data output from both an ASOS and an AWOS may look similar, there are a few
				differences that stand out. Both products will provide similar core data. </p>
			<div id="q3101" class="panel panel-default interaction-question">
				<div class="panel-body">
					<div class="question-wrap checkboxes">
						<h4>Question</h4>
						<p>Which of the following pieces of data will be provided by both an ASOS and AWOS in a
							METAR? (Choose all that apply.) </p>
						<form action="#">
							<fieldset>
								<div class="response-group-item"><input id="q3101a" name="q3101" value="a"
										type="checkbox"><label for="q3101a"> <strong>a) </strong>Sea Level
										Pressure change over past 3 hours</label></div>
								<div class="response-group-item correct"><input id="q3101b" name="q3101"
										value="b" type="checkbox"><label for="q3101b"> <strong>b)
										</strong>Hourly Temperature and Dew Point in 0.1&deg;C</label></div>
								<div class="response-group-item correct"><input id="q3101c" name="q3101"
										value="c" type="checkbox"><label for="q3101c"> <strong>c)
										</strong>Visibility</label></div>
								<div class="response-group-item correct"><input id="q3101d" name="q3101"
										value="d" type="checkbox"><label for="q3101d"> <strong>d) </strong>Cloud
										Cover and Cloud Height</label></div>
								<div class="response-group-item correct"><input id="q3101e" name="q3101"
										value="e" type="checkbox"><label for="q3101e"> <strong>e) </strong>Time
										and Date</label></div>
								<div class="response-group-item"><input id="q3101f" name="q3101" value="f"
										type="checkbox"><label for="q3101f"> <strong>f) </strong>Start time of
										Rain</label></div>
								<div class="response-group-item correct"><input id="q3101g" name="q3101"
										value="g" type="checkbox"><label for="q3101g"> <strong>g) </strong>6
										hour Minimum Temperature</label></div>
								<div class="response-group-item"><input id="q3101h" name="q3101" value="h"
										type="checkbox"><label for="q3101h"> <strong>h) </strong>Hourly
										Precipitation Amount</label></div> <input
									class="submit-button btn btn-primary" name="submit-button" value="Done"
									type="button">
							</fieldset>
						</form>
						<div class="answer">
							<p class="response">The correct answers are b, c, d, e, and g.</p>
							<p class="explanation">An ASOS and AWOS will provide similar data information before
								the remarks section. Data that is always constant is time, date, visibility, and
								cloud cover and cloud height just to name a few pieces. The remarks section is
								where the difference between an AWOS and ASOS can be noticed. Both an ASOS and
								AWOS can indicate hourly temperature and dew point in 0.1℃ and 6 hour minimum
								temperature, but an ASOS will convey more information in the remarks section of
								a METAR. For example, an ASOS will indicate sea level pressure change in the
								past 3 hours, the start (or end) of precipitation, and hourly precipitation
								amount. </p>
						</div>
						<div class="message">Please make a selection.</div>
					</div>
				</div>
			</div>
			<div class="show-after">
				<div class="center"><img src="media/graphics/Station_location_Ohio.jpg" width="850" height="640"
						alt="Ohio map of different observation systems with two denoted" /></div>
				<p>The image above from the <a href="https://www.faa.gov/air_traffic/weather/asos"
						target="_blank" rel="noreferrer">FAA ASOS/AWOS</a> website is a way to quickly assess
					which airports have an ASOS and which have an AWOS. Two of them are circled above. One is
					Burke Lakefront Airport (KBKL) which has an ASOS while the other is Cuyahoga County Airport
					(KCGF) which has an AWOS. The two airports are ~11 miles apart from each other so the
					difference in the weather between them wouldn’t be dramatically different. Provided is a
					three hour range from both of the airports. </p>
				<div class="panel panel-default">
					<div class="panel-heading">
						<h4 class="panel-title">Burke Lakefront Airport (KBKL) METAR - ASOS</h4>
					</div>
					<div class="panel-body">
						<pre>  KBKL 190753Z 14010KT 10SM SCT029 OVC041 14/04 A2989 RMK AO2 SLP120 T01390039 <br>  KBKL 190653Z 11006KT 10SM SCT026 OVC038 14/02 A2992 RMK AO2 SLP131 T01390022 <br>  KBKL 190553Z 14004KT 10SM SCT026 OVC038 14/02 A2993 RMK AO2 SLP136 T01390017 10139 20128 56010  </pre>
					</div>
				</div>
				<div class="panel panel-default">
					<div class="panel-heading">
						<h4 class="panel-title">Cuyahoga County Airport (KCGF) METAR - AWOS</h4>
					</div>
					<div class="panel-body">
						<pre>  KCGF 190755Z AUTO 12007G14KT 10SM OVC038 11/03 A2992 RMK AO2 T01150025 <br>  KCGF 190655Z AUTO 11005KT 10SM OVC026 12/01 A2994 RMK AO2 T01160014 <br>  KCGF 190555Z AUTO 12005KT 10SM OVC026 11/01 A2995 RMK AO2 T01140012 10114 20091  </pre>
					</div>
				</div>
				<p>In both METARs, the data readout appears very similar. However you can differentiate between
					the ASOS and AWOS as the AWOS has “AUTO” as the third aspect of the readout. Additionally,
					after the remark (RMK) section, the difference between the two weather observation systems
					is further seen. The ASOS provides sea level pressure (SLP group) and pressure tendency over
					the last three hours (5 group). Other pieces of data such as an hourly precipitation amount
					(P group) or lightning reported can be indicators if the station reporting is an ASOS or
					AWOS.</p>
				<div class="panel panel-default">
					<div class="panel-heading">
						<h4 class="panel-title">Lightning METAR</h4>
					</div>
					<div class="panel-body">
						<pre>KHKS 290213Z 32009G15KT 5SM TSRA BR FEW075 OVC095 14/13 A2982 RMK AO2 <strong>LTG DSNT ALQDS TSB07</strong> PRESFR P0005 T01440128</pre>
					</div>
				</div>
				<p>Above is the ASOS from Jackson - Hawkins Field Airport, Hinds, Mississippi in the Jackson,
					Mississippi WFO during a thunderstorm. Lightning has been reported in the distance in all
					quadrants (LTG DSNT ALQDS). The ASOS also indicated that the thunderstorm began at seven
					minutes after the hour (TSB07) and five hundredths of an inch of precipitation had fallen
					(P0005) in the last hour.</p>
				<p>Lightning sensors at an ASOS are used to estimate how close a lightning is to the airport
					using cloud-to-ground strikes. The distance for the cloud-to-ground strike from the sensor
					is reported in three bins</p>
				<ul>
					<li>0-5 miles</li>
					<li>5-10 miles</li>
					<li>10-30 miles</li>
				</ul>
				<p>An ASOS can also report cloud-to-cloud strikes but only in the 0-5 mile range. </p>
				<p>If two or more strikes are observed within the 0-5 miles range, a thunderstorm (TS) is
					reported on the METAR. If two or more strikes are observed in a 5-10 mile range, the system
					denotes lightning in the vicinity (VCTS). If two or more lightning strikes are observed in
					the 10-30 mile range, the METAR denotes that lightning is in the distance (DSNT). It is
					important to note that the 0-5 and 5-10 mile ranges are for ASOS with a single site lighting
					sensor. The 10-30 mile range comes from the Automated Lightning Detection and Reporting
					System (ALDARS) which is part of the National Lightning Detection Network (NLDN) and
					provides lightning information to the FAA.</p>
				<p>The best advice is to become familiar with the different observation stations in your region.
				</p>
			</div>
		</section>
		<section id="page_3-2-0" class="page">
			<h4 class="sub_head"><small>Data &raquo;</small> Data Users</h4>
			<div class="center"><img src="media/graphics/AWOS_ASOS_users.jpg" width="850" height="480"
					alt="ASOS and AWOS User groups" /></div>
			<p>The data observed and recorded by the ASOS and AWOS are used by many different groups.
				Meteorologists, climatologists, and aviation groups and staff including pilots are the ones you
				may be most familiar with and are frequent users of the data. However, other groups also rely on
				ASOS and AWOS data. Data may be used in legal proceedings or used by private companies in their
				business decisions. </p>
			<div id="q3201" class="panel panel-default interaction-question">
				<div class="panel-body">
					<div class="question-wrap checkboxes">
						<h4>Question</h4>
						<p>Why is ASOS and AWOS data important? (Choose all that apply.)</p>
						<form action="#">
							<fieldset>
								<div class="response-group-item correct"><input id="q02a" name="q02" value="a"
										type="checkbox"><label for="q02a"> <strong>a) </strong>The information
										is used for real time weather observations and updates for flight
										operations.</label></div>
								<div class="response-group-item correct"><input id="q02b" name="q02" value="b"
										type="checkbox"><label for="q02b"> <strong>b) </strong>The information
										is used to verify forecast accuracy.</label></div>
								<div class="response-group-item correct"><input id="q02c" name="q02" value="c"
										type="checkbox"><label for="q02c"> <strong>c) </strong>The information
										is used to assess for any climate change from the reporting
										stations.</label></div>
								<div class="response-group-item correct"><input id="q02d" name="q02" value="d"
										type="checkbox"><label for="q02d"> <strong>d) </strong>The information
										is used to determine if a potential slip and fall case at a business is
										due to weather. </label></div> <input
									class="submit-button btn btn-primary" name="submit-button" value="Done"
									type="button">
							</fieldset>
						</form>
						<div class="answer">
							<p class="response">The correct answers are all of the above.</p>
							<p class="explanation">Data from ASOS and AWOS is critical to many individuals and
								groups. Pilots and air traffic controllers rely heavily on ASOS data for
								critical weather updates like visibility, temperature, wind speed, and cloud
								cover to ensure safe flight operations. Meteorologists use ASOS data to create
								accurate weather forecasts for the general public and verify forecasts. Since
								ASOS and AWOS data locations typically remain unchanged, they are often
								considered the climatological record for an area. As such climatologists will
								use the data as part of a local or regional climate analysis. Since there is a
								record of data and the data is considered official, certified data could be used
								in a legal proceeding as weather relates to a case. These are only some of the
								groups that use the data from ASOS and AWOS.</p>
						</div>
						<div class="message">Please make a selection.</div>
					</div>
				</div>
			</div>
			<p>You should be aware that the data is used broadly and ensure the data is accurate, timely, and
				free of errors to provide the greatest benefit to the most users. Sometimes, data does have
				flaws and maintenance is needed. But how do you know there is an issue? Proceed to the next
				section to learn more about ASOS and AWOS maintenance. </p>
		</section>
		<section id="page_3-3-0" class="page">
			<h4 class="sub_head"><small>Data &raquo;</small> System Maintenance</h4>
			<div id="car-3301" class="carousel slide" data-ride="carousel" data-wrap="false"
				data-interval="false"> <!-- Indicators -->
				<ol class="carousel-indicators print_hide">
					<li data-target="#car-3301" data-slide-to="0" class="active"></li>
					<li data-target="#car-3301" data-slide-to="1"></li>
					<li data-target="#car-3301" data-slide-to="2"></li>
				</ol> <!-- Wrapper for slides -->
				<div class="carousel-inner" role="listbox">
					<div class="item active">
						<div id="q3301" class="panel panel-default interaction-question">
							<div class="panel-body">
								<div class="question-wrap inlinedropdowns">
									<h4>Question 1 of 3</h4>
									<p class="question">For each observation system, determine whether the
										Federal Aviation Administration (FAA), National Weather Service (NWS),
										or both owns and maintains the equipment.</p>
									<form action="#">
										<fieldset>
											<div class="response-group-item"> <strong>1.</strong> A <select
													name="q3301a">
													<option>--</option>
													<option>!</option>
													<option>%</option>
													<option>$</option>
													<option>*</option>
												</select> symbol in a METAR from an ASOS or AWOS indicates that
												<select name="q3301b">
													<option>--</option>
													<option>all features are working fine</option>
													<option>maintenance is needed</option>
													<option>the grass around the equipment is high</option>
													<option>data has been altered</option>
												</select>. </div>
											<div class="correct response-group-item dropdown_correct answer">$,
												maintenance is needed</div> <input
												class="submit-button btn btn-primary" name="submit-button"
												value="Done" type="button">
											<div class="answer">
												<p class="explanation">A dollar sign ($) in a METAR would
													indicate that the system needs maintenance. This should be a
													sign to check in and resolve the issues that may exist.</p>
											</div>
											<div class="message">Please make a selection.</div>
										</fieldset>
									</form>
									<div class="answer">
										<p class="explanation">A dollar sign ($) in a METAR would indicate that
											the system needs maintenance. This should be a sign to check in and
											resolve the issues that may exist.</p>
										<p>Use the arrows or dots to proceed to the next question.</p>
									</div>
									<div class="message">Please make a selection.</div>
								</div>
							</div>
						</div>
					</div>
					<div class="item">
						<div id="q3302" class="panel panel-default interaction-question">
							<div class="panel-body">
								<div class="question-wrap inlinedropdowns">
									<h4>Question 2 of 3</h4>
									<p class="question">True or False: <br>If the maintenance symbol appears on
										an ASOS or AWOS METAR, the data is no longer considered valid until
										fixed.</p>
									<form action="#">
										<fieldset>
											<div class="response-group-item"> <select name="q3302a">
													<option>--</option>
													<option>True</option>
													<option>False</option>
												</select> </div>
											<div class="correct response-group-item dropdown_correct answer">
												False</div> <input class="submit-button btn btn-primary"
												name="submit-button" value="Done" type="button">
										</fieldset>
									</form>
									<div class="answer">
										<p class="explanation">Data from an ASOS or AWOS may still have validity
											even if the system indicates it needs maintenance. A maintenance
											technician needs to visit the site and further assess the situation
											to determine the cause and the data implications.</p>
										<p>Use the arrows or dots to proceed to the next question.</p>
									</div>
									<div class="message">Please make a selection.</div>
								</div>
							</div>
						</div>
					</div>
					<div class="item">
						<div id="q3303" class="panel panel-default interaction-question">
							<div class="panel-body">
								<div class="question-wrap checkboxes">
									<h4>Question 3 of 3</h4>
									<p>Which of the following situations would require maintenance for an ASOS
										or AWOS? (Choose all that apply.)</p>
									<form action="#">
										<fieldset>
											<div class="response-group-item"><input id="q3303a" name="q3303"
													value="a" type="checkbox"><label for="q3303a"> <strong>a)
													</strong>The temperature and dew point in the remarks
													section is .2 degrees different from the initial temperature
													and dew point.</label></div>
											<div class="response-group-item correct"><input id="q3303b"
													name="q3303" value="b" type="checkbox"><label for="q3303b">
													<strong>b) </strong>Visibility is obscured due to a spider
													web in the sensor.</label></div>
											<div class="response-group-item"><input id="q3303c" name="q3303"
													value="c" type="checkbox"><label for="q3303c"> <strong>c)
													</strong>Clouds near the airport on satellite are not being
													reported by the system.</label></div>
											<div class="response-group-item correct"><input id="q3303d"
													name="q3303" value="d" type="checkbox"><label for="q3303d">
													<strong>d) </strong>Accumulated precipitation reported
													during a three day dry spell.</label></div>
											<div class="response-group-item"><input id="q3303e" name="q3303"
													value="e" type="checkbox"><label for="q3303e"> <strong>e)
													</strong>Wind speed not reported during an ongoing ice event
													in below freezing conditions.</label></div>
											<div class="response-group-item correct"><input id="q3303f"
													name="q3303" value="f" type="checkbox"><label for="q3303f">
													<strong>f) </strong>It has been a year since the last
													maintenance and calibration of equipment.</label></div>
											<input class="submit-button btn btn-primary" name="submit-button"
												value="Done" type="button">
										</fieldset>
									</form>
									<div class="answer">
										<p class="response">The correct answers are b, d, and f.</p>
										<p class="explanation">The remarks section allows for temperature and
											dew point to be reported in a tenth of degree so this difference
											shouldn’t be cause for alarm. Clouds are reported in a METAR when
											they are <u>directly</u> over the sensor. While clouds may be close
											to the airport or sensor, unless they pass directly over the sensor,
											they will not be reported. During freezing conditions, the
											anemometer cups may freeze. If this happens, this would simply be
											noted in the data. If however the issue persists after melting
											occurs, maintenance may be needed.</p>
										<p>Animals and insects impacting sensors is a common issue that can be
											taken care of by simply removing the obstruction. Precipitation
											being reported during a dry period would be odd and would need
											further investigation as the sensor may be broken. Additionally,
											maintenance for testing of equipment is needed at least once a year,
											but other requirements or issues may require more than site visits
											as needed.</p>
									</div>
									<div class="message">Please make a selection.</div>
								</div>
							</div>
						</div>
					</div>
				</div> <!-- Controls -->
				<div class="print_hide"> <a class="left carousel-control" href="#car-3301" role="button"
						data-slide="prev"> <span class="glyphicon glyphicon-chevron-left"
							aria-hidden="true"></span> <span class="sr-only">Previous</span> </a> <a
						class="right carousel-control" href="#car-3301" role="button" data-slide="next"> <span
							class="glyphicon glyphicon-chevron-right" aria-hidden="true"></span> <span
							class="sr-only">Next</span> </a> </div>
			</div> <br>
			<p>Over time, due to various reasons, ASOS and AWOS will need maintenance. This can be due to a
				broken sensor, malfunctioning wires, or animals building nests in equipment. Data during this
				time could be sparse, incomplete, or missing altogether. <a
					href="https://www.faa.gov/other_visit/aviation_industry/airline_operators/airline_safety/info/all_infos/InFO24001.pdf"
					target="_blank" rel="noreferrer">RTMA Data</a> can serve as a replacement for missing data
				as the output from the RTMA is 95% reliable. This can serve as a way to cover any data gaps
				until the issue is resolved. </p>
			<p>There are three main types of maintenance that are needed for an AWOS or ASOS. One series of
				maintenance is carried out three times a year and consists of basic cleaning and checking of the
				system with no calibration needed. Once a year however, testing calibration is to be carried out
				by a trained and approved maintenance staff member. Parameters calibrated include:</p>
			<ul>
				<li>Wind speed</li>
				<li>Temperature</li>
				<li>Dew point</li>
				<li>Humidity</li>
				<li>Pressure</li>
			</ul>
			<p>The final maintenance needed is carried out once every three years and tests the accuracy of the
				wind direction instruments. You can read more about it on the <a
					href="https://www.faa.gov/sites/faa.gov/files/airports/planning_capacity/non_federal/awos/the-different-types-of-awos-maintenance.pdf"
					target="_blank" rel="noreferrer">FAA Maintenance</a> document. </p>
			<p>It is important to identify and appropriately respond to any issues due to the crucial role that
				ASOS and AWOS play for many groups and individuals. Reports of ASOS issues can be submitted
				through a form at the embedded <a href="https://www.weather.gov/asos/" target="_blank"
					rel="noreferrer">NWS ASOS</a> link. Additionally working with your local office can help
				resolve issues. AWOS issues can be resolved by contacting the appropriate individuals in your
				region. If issues are not resolved, not only are local observation reports impacted impeding any
				decisions necessary, but so are climate reports. </p>
		</section>
		<section id="page_4-0-0" class="page">
			<h3 class="sub_head">Takeaways</h3>
			<div class="center"><img src="media/graphics/mountain_asos_winter.jpg" width="640" height="850"
					alt="Automated Weather Observation Station in the cold mountains" /></div> <br>
			<p>The Automated Weather Observing System (AWOS) and Automated Surface Observing System (ASOS) are
				important weather observation platforms that provide vital information to numerous groups. The
				AWOS is owned and operated by the FAA while the ASOS is jointly operated by the FAA, DOD, and
				NWS. Both systems provide weather information such as temperature, dew point, wind speed and
				direction, visibility, ceiling, and altimeter data. The ASOS can provide more detailed
				information than the AWOS when reported in a METAR. Being familiar with the observation system
				in your area will help you determine the difference between these two and aid the broader
				community of users. Ensuring these systems are in optimal working condition will help both you
				and those who use and rely on the data collected. ASOS and AWOS are integral parts of the
				broader weather community. We have only touched on a few major components of the ASOS and AWOS
				so be sure to gain more information as it relates to your roles and responsibilities. </p>
		</section>
		<section id="page_5-0-0" class="page">
			<h3 class="sub_head">Resources</h3>
			<p>We have provided numerous links and resources to provide support about ASOS and AWOS operations,
				locations, data, and other assorted responsibilities you may have. </p>
			<p><a href="https://www.weather.gov/asos/faq.html" target="_blank" rel="noreferrer">Frequently Asked
					Questions</a> - NWS Website</p>
			<p><a href="https://www.faa.gov/air_traffic/weather/asos" target="_blank" rel="noreferrer">ASOS and
					AWOS Station Location</a> - FAA </p>
			<p><a href="https://www.faa.gov/sites/faa.gov/files/airports/planning_capacity/non_federal/awos/the-different-types-of-awos-maintenance.pdf"
					target="_blank" rel="noreferrer">Maintenance Schedule</a> - FAA</p>
			<p><a href="https://www.weather.gov/media/asos/aum-toc.pdf" target="_blank" rel="noreferrer">ASOS
					User's Guide</a> - NOAA</p>
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
					<li>Adam Hirsch - UCAR/COMET</li>
				</ul>
				<h5>Instructional Design</h5>
				<ul>
					<li>Abby Dowd - UCAR/COMET</li>
				</ul>
				<h5>Science Advisors</h5>
				<ul>
					<li>Brian Hirsch - NOAA/NWS</li>
					<li>Scott McGuire - NOAA/NWS</li>
					<li>Victor Murphy - NOAA/NWS</li>
					<li>Chris Stachelski - NOAA/NWS</li>
					<li>Katie Deroche - NOAA/NWS</li>
				</ul>
				<h5>Program Oversight</h5>
				<ul>
					<li>Lee-ann Simpson - UCAR/COMET</li>
				</ul>
				<h5>Graphics/Animations</h5>
				<ul>
					<li>Steve Deyo - UCAR/COMET</li>
				</ul>
				<h5>Multimedia Authoring/Interface Design</h5>
				<ul>
					<li>Gary Pacheco - UCAR/COMET</li>
				</ul>
			</div>
			<div id="comet-staff">
				<h4>COMET Staff, February 2025</h4>
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
					<li>Kwabena Denkyi (Kwa), Project Manager</li>
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
					<li>Bryan Guarente, Instructional Designer/Meteorologist</li>
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

	<div class="navigation-buttons flex justify-between items-center mt-8 mb-4 px-4">
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