<script>
    import { onMount } from 'svelte';
    
    // Variable to track which section is currently visible
    let currentSection = 'page_1-0-0';
    let expandedNodes = new Set();

    // Function to update visibility
	function showSection(sectionId) {
    // Hide all sections
    const sections = document.querySelectorAll('div.page');
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

<div class="flex items-start gap-14">

<aside class="md:flex hidden flex-[1] min-w-[230px] sticky top-16 flex-col h-[94.5vh] overflow-y-auto">
	<div dir="ltr" class="relative overflow-hidden py-4" style="position: relative; --radix-scroll-area-corner-width: 0px; --radix-scroll-area-corner-height: 0px;">
		<div data-radix-scroll-area-viewport="" class="h-full w-full rounded-[inherit]" style="overflow: hidden scroll;">
			<div style="min-width: 100%; display: table;">
				<div class="flex flex-col gap-3.5 mt-5 pb-6">
					<div class="mb-2">
						<h2 class="text-sm font-bold mb-2">TABLE OF CONTENTS</h2>
						<!-- *** ADD TABLE OF CONTENTS SECTION HERE *** -->
						<div id="tableofcontents" class="sidebar-toc">
							<ul class="nav lc-docs-sidenav">
								<li><a href="#page_1-0-0">Introduction</a>
									<ul class="nav" id="ul_1-0-0">
										<li><a href="#page_1-1-0">About the Lesson</a> </li>
									</ul>
								</li>
								<li><a href="#page_2-0-0">Satellite Products</a>
									<ul class="nav" id="ul_2-0-0">
										<li><a href="#page_2-1-0">Visible Channel</a> </li>
										<li><a href="#page_2-2-0">Infrared Channel</a> </li>
										<li><a href="#page_2-3-0">Water Vapour Channel</a> </li>
										<li><a href="#page_2-4-0">Natural Colour RGB</a> </li>
										<li><a href="#page_2-5-0">Dust RGB</a> </li>
										<li><a href="#page_2-6-0">Severe Convection RGB</a> </li>
										<li><a href="#page_2-7-0">Night Microphysics RGB</a> </li>
									</ul>
								</li>
								<li><a href="#page_3-0-0">Satellite Product Comparisons</a> </li>
								<li><a href="#page_4-0-0">Feature Identification</a>
									<ul class="nav" id="ul_4-0-0">
										<li><a href="#page_4-1-0">Identifying Atmospheric Features</a>
											<ul class="nav" id="ul_4-1-0">
												<li><a href="#page_4-1-1">Cloud Heights</a> </li>
												<li><a href="#page_4-1-2">Cloud Thickness</a> </li>
												<li><a href="#page_4-1-3">Dust Cloud
														Height/Thickness</a> </li>
											</ul>
										</li>
										<li><a href="#page_4-2-0">Identifying Surface Features</a>
											<ul class="nav" id="ul_4-2-0">
												<li><a href="#page_4-2-1">Deserts</a> </li>
												<li><a href="#page_4-2-2">Vegetation</a> </li>
												<li><a href="#page_4-2-3">Water Bodies</a> </li>
												<li><a href="#page_4-2-4">Snow</a> </li>
											</ul>
										</li>
									</ul>
								</li>
								<li><a href="#page_5-0-0">Exercise 1</a> </li>
								<li><a href="#page_6-0-0">Exercise 2</a> </li>
								<li><a href="#page_7-0-0">Exercise 3</a> </li>
								<li><a href="#page_8-0-0">Summary</a> </li>
								<li><a href="#page_contributors">Contributors</a> </li>
							</ul>
						</div>
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
		<div id="page_1-0-0" class="page">
			<h3>Introduction</h3>
			<p>Satellite imagery is a powerful tool for quickly assessing the current weather situation over
				large areas at any time of day. You can diagnose synoptic-scale weather patterns, track the
				growth of individual convective storms, differentiate high clouds from low ones or ice clouds
				from liquid ones, and distinguish between low clouds, snow, dust, land and water surfaces.</p>
			<p>In this lesson, you will learn how to identify features using three basic satellite channels and
				common RGB products. Specifically, you’ll differentiate cloud types, their relative heights, and
				cloud thickness. Identifiable surface features include dust, snow, land, ocean, and vegetation
				type. </p>
			<p>These features are present in the images below. Click through the tabs, noticing how certain
				products provide better views of some features than others. By the end of the lesson, you’ll
				know which products to use to identify each feature.</p>
			<div class="tabs-container">
				<ul class="nav nav-tabs small" role="tablist" id="tab-set-01">
					<li class="active"><a href="#tab1-0" role="tab" data-toggle="tab"
							class="tab-switch">Visible</a> </li>
					<li><a href="#tab2-0" role="tab" data-toggle="tab" class="tab-switch">Infrared</a> </li>
					<li><a href="#tab3-0" role="tab" data-toggle="tab" class="tab-switch">Water Vapour</a> </li>
					<li><a href="#tab4-0" role="tab" data-toggle="tab" class="tab-switch">Dust</a> </li>
					<li><a href="#tab5-0" role="tab" data-toggle="tab" class="tab-switch">Severe Convection</a>
					</li>
					<li><a href="#tab6-0" role="tab" data-toggle="tab" class="tab-switch">Night Microphysics</a>
					</li>
					<li><a href="#tab7-0" role="tab" data-toggle="tab" class="tab-switch">Natural Colour</a>
					</li>
				</ul>
				<div class="tab-content">
					<h3>Visible</h3>
					<div class="tab-pane fade in active" id="tab1-0">
						<div class="center"><a href="media/loops/2017_08_16_0300_vis_0001/index.htm"
								class="module_hide datalooper"><img
									src="media/loops/2017_08_16_0300_vis_0001/2017_08_16_0300_vis_0001.jpg"
									alt="EUMETSAT visible imagery over Africa, 0300 - 1300 UTC 16 Aug 2017"
									class="img-responsive center-block" /></a>
							<div class="print_hide embed-responsive center-block"
								style="padding-bottom:102.23529411765%"><iframe
									src="media/loops/2017_08_16_0300_vis_0001/index.htm" frameborder="0"
									class="embed-responsive-item"></iframe></div>
						</div>
					</div>
					<h3>Infrared</h3>
					<div class="tab-pane fade" id="tab2-0">
						<div class="center"><a href="media/loops/2017_08_16_0300_ir_0001/index.htm"
								class="module_hide datalooper"><img
									src="media/loops/2017_08_16_0300_ir_0001/2017_08_16_0300_ir_0001.jpg"
									alt="EUMETSAT infrared imagery over Africa, 0300 - 1300 UTC 16 Aug 2017"
									class="img-responsive center-block" /></a>
							<div class="print_hide embed-responsive center-block"
								style="padding-bottom:102.23529411765%"><iframe
									src="media/loops/2017_08_16_0300_ir_0001/index.htm" frameborder="0"
									class="embed-responsive-item"></iframe></div>
						</div>
					</div>
					<h3>Water Vapour</h3>
					<div class="tab-pane fade" id="tab3-0">
						<div class="center"><a href="media/loops/2017_08_16_0300_wv_0001/index.htm"
								class="module_hide datalooper"><img
									src="media/loops/2017_08_16_0300_wv_0001/2017_08_16_0300_wv_0001.jpg"
									alt="EUMETSAT water vapour imagery over Africa, 0300 - 1300 UTC 16 Aug 2017"
									class="img-responsive center-block" /></a>
							<div class="print_hide embed-responsive center-block"
								style="padding-bottom:102.23529411765%"><iframe
									src="media/loops/2017_08_16_0300_wv_0001/index.htm" frameborder="0"
									class="embed-responsive-item"></iframe></div>
						</div>
					</div>
					<h3>Dust</h3>
					<div class="tab-pane fade" id="tab4-0">
						<div class="center"><a href="media/loops/2017_08_16_0300_dust_0001/index.htm"
								class="module_hide datalooper"><img
									src="media/loops/2017_08_16_0300_dust_0001/2017_08_16_0300_dust_0001.jpg"
									alt="EUMETSAT dust RGB over Africa, 0300 - 1300 UTC 16 Aug 2017"
									class="img-responsive center-block" /></a>
							<div class="print_hide embed-responsive center-block"
								style="padding-bottom:102.23529411765%"><iframe
									src="media/loops/2017_08_16_0300_dust_0001/index.htm" frameborder="0"
									class="embed-responsive-item"></iframe></div>
						</div>
					</div>
					<h3>Severe Convection</h3>
					<div class="tab-pane fade" id="tab5-0">
						<div class="center"><a href="media/loops/2017_08_16_0300_scon_0001/index.htm"
								class="module_hide datalooper"><img
									src="media/loops/2017_08_16_0300_scon_0001/2017_08_16_0300_scon_0001.jpg"
									alt="EUMETSAT severe convection RGB over Africa, 0300 - 1300 UTC 16 Aug 2017"
									class="img-responsive center-block" /></a>
							<div class="print_hide embed-responsive center-block"
								style="padding-bottom:102.23529411765%"><iframe
									src="media/loops/2017_08_16_0300_scon_0001/index.htm" frameborder="0"
									class="embed-responsive-item"></iframe></div>
						</div>
					</div>
					<h3>Night Microphysics</h3>
					<div class="tab-pane fade" id="tab6-0">
						<div class="center"><a href="media/loops/2017_08_16_0300_night_micro_0001/index.htm"
								class="module_hide datalooper"><img
									src="media/loops/2017_08_16_0300_night_micro_0001/2017_08_16_0300_night_micro_0001.jpg"
									alt="EUMETSAT night microphysics RGB over Africa, 0300 - 1300 UTC 16 Aug 2017"
									class="img-responsive center-block" /></a>
							<div class="print_hide embed-responsive center-block"
								style="padding-bottom:102.23529411765%"><iframe
									src="media/loops/2017_08_16_0300_night_micro_0001/index.htm" frameborder="0"
									class="embed-responsive-item"></iframe></div>
						</div>
					</div>
					<h3>Natural Colour</h3>
					<div class="tab-pane fade" id="tab7-0">
						<div class="center"><a href="media/loops/2017_08_16_0300_ncol_0001/index.htm"
								class="module_hide datalooper"><img
									src="media/loops/2017_08_16_0300_ncol_0001/2017_08_16_0300_ncol_0001.jpg"
									alt="EUMETSAT natural colour RGB over Africa, 0300 - 1300 UTC 16 Aug 2017"
									class="img-responsive center-block" /></a>
							<div class="print_hide embed-responsive center-block"
								style="padding-bottom:102.23529411765%"><iframe
									src="media/loops/2017_08_16_0300_ncol_0001/index.htm" frameborder="0"
									class="embed-responsive-item"></iframe></div>
						</div>
					</div>
				</div>
			</div>
		</div>
		<div id="page_1-1-0" class="page">
			<h3 class="sub_head"><small>Introduction » </small>About the Lesson</h3>
			<p>This lesson uses EUMETSAT’s Meteosat Second Generation (MSG) imagery. The satellite
				interpretation techniques presented are general enough to also be applied elsewhere.</p>
			<p>Herein you will learn about the three most common satellite channels: visible, long-wave infrared
				(IR), and water vapour. You will also learn about RGBs, which combine Red-Green-Blue data from
				multiple channels to better highlight features like dust, low clouds/fog, and severe convection.
			</p>
			<p>The lesson begins by describing single channel and RGB products and showing you how to interpret
				them in a practice section. Next, you will learn how clouds and surface features appear in
				satellite products and the information that can be gleaned from them, such as relative cloud
				heights and thickness. The final section contains more practice satellite interpretation
				exercises.</p>
			<p>By the end of the lesson, you should be able to: </p>
			<ul>
				<li>Describe what visible, infrared, and water vapour channels measure</li>
				<li>Identify the relative heights of clouds and their thicknesses in visible, infrared, and
					water vapour imagery and selected RGBs </li>
				<li>Identify dust in visible and infrared imagery and in the dust RGB </li>
				<li>Differentiate land and water surface features in visible and infrared imagery and selected
					RGBs</li>
				<li>Identify whether a given image is from the water vapour, infrared or visible channel</li>
				<li>Briefly describe what RGBs are and their usefulness in highlighting specific features</li>
				<li>Identify features in selected RGBs</li>
				<li>Briefly describe what derived products are and how they can be useful</li>
			</ul>
		</div>
		<div id="page_2-0-0" class="page">
			<h3>Satellite Products</h3>
			<p>This section discusses visible, infrared, and water vapour imagery, as well as four RGB products:
				dust, severe convection, night microphysics, and natural colour. The information for each
				channel or product is presented in two tabs: <strong>Description </strong>and <strong>Effective
					Use</strong>. After each set of tabs, you will find explorable, real-time product imagery
				with a set of questions to evaluate what you can see. Be sure to click each tab before
				proceeding to the next product. </p>
			<p>While the lesson discusses RGBs and how to interpret them, it does not provide details on how
				each RGB product is made. For more information, see COMET’s <a
					href="https://www.meted.ucar.edu/satmet/multispectral_topics/rgb/">Multispectral Satellite
					Applications: RGB Products Explained</a> lesson.</p>
			<div class="center"><img src="media/graphics/2017_12_03_0600_collage.jpg" width="845" height="446"
					alt="EUMETSAT collage over Africa, 0600 UTC 3 Dec 2017" /></div>
		</div>
		<div id="page_2-1-0" class="page">
			<h3 class="sub_head"><small>Satellite Products » </small>Visible Channel</h3>
			<div class="tabs-container">
				<ul class="nav nav-tabs" role="tablist" id="tab-set-02">
					<li class="active"><a href="#tab8-0" role="tab" data-toggle="tab"
							class="tab-switch">Description</a> </li>
					<li><a href="#tab9-0" role="tab" data-toggle="tab" class="tab-switch">Effective Use</a>
					</li>
				</ul>
				<div class="tab-content">
					<h3>Description</h3>
					<div class="tab-pane fade in active" id="tab8-0">
						<div class="center"><img src="media/graphics/2016_06_15_0600_vis.jpg" width="845"
								height="650" alt="EUMETSAT visible image over Africa, 0600 UTC 15 Jun 2016" />
						</div>
						<p>The visible channel works like a black and white photograph of Earth. Objects that
							look dark to our eyes appear dark in visible imagery and vice versa. </p>
						<p>All land surfaces, including deserts, water bodies, vegetation, and bare ground, can
							be seen in visible imagery during daylight hours. </p>
						<p>All cloud types are visible in daytime. The brightness of the clouds can change over
							the course of the day. At mid-day, clouds appear bright white. At sunrise and
							sunset, when the sun angle is low, they appear somewhat darker. At night, no light
							is reflected and thus the image is black.</p>
					</div>
					<h3>Effective Use</h3>
					<div class="tab-pane fade" id="tab9-0">
						<p>Visible imagery is very useful for identifying cloud types and seeing the structure
							within clouds during daytime. The differences in grey shades indicate differences in
							cloud thickness, land cover, or ocean surface. Where the imagery cuts off is where
							the sun is not shining on the imagery. The line between where the sun is up and the
							sun is down is called the terminator. The slope of the terminator should indicate
							the season. The hemisphere with more light along a latitude line is in summer.</p>
						<div class="center"><img src="media/graphics/2017_05_15_0600_vis_labeled.jpg"
								width="845" height="677"
								alt="EUMETSAT visible over Africa, 0600 UTC 15 May 2017" /></div>
					</div>
				</div>
			</div>
			<p>Here is the real-time imagery from the MSG visible channel. Explore the imagery by
				double-clicking (pinching on mobile devices) to zoom and dragging the image to move view. Below
				the real-time image, you will find a list of questions to ask yourself for exploration and
				self-evaluation purposes. </p>
			<div class="module_hide">
				<p class="user-note">* Live data only available for <a
						href="navmenu.php_tab_1_page_2_1_0.htm">interactive lesson</a>.</p>
			</div>
			<div class="print_hide">
				<div class="embed-responsive embed-responsive-4by3">
					<div id="map" class="map embed-responsive-item"></div>
				</div>
				<script>
					var layers = [
						new ol.layer.Tile({
							source: new ol.source.TileWMS({
								url: 'https://eumetview.eumetsat.int/geoserv/wms',
								params: { 'LAYERS': 'msgiodc:msgiodc_vis006', 'TILED': true },
								serverType: 'geoserver'
							})
						}),

						new ol.layer.Tile({
							source: new ol.source.TileWMS({
								url: 'https://eumetview.eumetsat.int/geoserv/wms',
								params: { 'LAYERS': 'meteosat:msg_vis006', 'TILED': true },
								serverType: 'geoserver'
							})
						}),

						new ol.layer.Tile({
							source: new ol.source.TileWMS({
								url: 'https://eumetview.eumetsat.int/geoserv/wms',
								params: { 'LAYERS': 'overlay:ne_10m_admin_0_boundary_lines_land' },
							})
						}),

						new ol.layer.Tile({
							source: new ol.source.TileWMS({
								url: 'https://eumetview.eumetsat.int/geoserv/wms',
								params: { 'LAYERS': 'overlay:ne_10m_coastline' },
							})
						})

					];

					var map = new ol.Map({
						layers: layers,
						target: 'map',
						interactions: ol.interaction.defaults({ mouseWheelZoom: false }),
						view: new ol.View({
							center: ol.proj.transform([26, 0], 'EPSG:4326', 'EPSG:3857'),
							projection: 'EPSG:3857',
							zoom: 3.0
						})
					});

				</script> <br>
			</div>
			<p>Using the real-time imagery, answer the following questions. </p>
			<ol start="1">
				<li>Are features visible at this time of day on the imagery? <ol start="1">
						<li>Would these features be visible at other times of day?</li>
					</ol>
				</li>
				<li>What range of colours are the clouds? <ol start="1">
						<li>Do those colours represent what your eye sees?</li>
						<li>Do those colours represent the temperature of the object?</li>
						<li>Do those colours represent some other process?</li>
					</ol>
				</li>
				<li>What range of colours are surface features? <ol start="1">
						<li>Do those colours represent what your eye sees?</li>
						<li>Do those colours represent the temperature of the object?</li>
						<li>Do those colours represent some other process?</li>
					</ol>
				</li>
				<li>If you are located within the satellite viewing area of MSG, look outside for clouds and
					surface features. See if those features show up on the imagery by zooming in to your
					location. What colours do you expect those features to be in this imagery? What colours are
					those features in the imagery?</li>
			</ol>
		</div>
		<div id="page_2-2-0" class="page">
			<h3 class="sub_head"><small>Satellite Products » </small> Infrared Channel</h3>
			<div class="tabs-container">
				<ul class="nav nav-tabs" role="tablist" id="tab-set-03">
					<li class="active"><a href="#tab10-0" role="tab" data-toggle="tab"
							class="tab-switch">Description</a> </li>
					<li><a href="#tab11-0" role="tab" data-toggle="tab" class="tab-switch">Effective Use</a>
					</li>
				</ul>
				<div class="tab-content">
					<h3>Description</h3>
					<div class="tab-pane fade in active" id="tab10-0">
						<div class="center"><img src="media/graphics/2016_06_15_0600_nir.jpg" width="850"
								height="666" alt="EUMETSAT infrared image over Africa, 0600 UTC 15 Jun 2016" />
						</div>
						<p>The long-wave infrared (IR) channel behaves like a camera that sees the temperature
							of objects in grey shades. Warmer objects appear dark gray while colder objects
							display as light gray through white. </p>
						<p>Land surface temperatures change rapidly in response to diurnal heating - especially
							after sunrise. Temperature-dependent IR imagery helps us differentiate land surfaces
							from ocean surfaces, whose temperature changes very slowly, and from clouds, which
							typically do not respond to diurnal changes during their lifetimes. An exception is
							cumuliform clouds, whose cloud-top temperature can change rapidly throughout the day
							due to diurnally-forced convective processes.</p>
					</div>
					<h3>Effective Use</h3>
					<div class="tab-pane fade" id="tab11-0">
						<p>Brightness temperatures in IR imagery make it relatively easy to differentiate land,
							ocean, and clouds. In daytime, land surfaces are usually warmer, and thus darker.
							These areas contrast with the cooler and lighter ocean surfaces and clouds. When
							land surfaces cool down at night, it can become difficult to differentiate them from
							oceans and clouds. </p>
						<div class="center"><a href="media/loops/2017_12_01_0000_ir_0001/index.htm"
								class="module_hide datalooper"><img
									src="media/loops/2017_12_01_0000_ir_0001/2017_12_01_0000_ir_0001.jpg"
									alt="EUMETSAT infrared imagery over Somalia, Africa, 0000 - 2359 UTC 01 Dec 2017"
									class="img-responsive center-block" /></a>
							<div class="print_hide embed-responsive center-block"
								style="padding-bottom:80.355029585799%"><iframe
									src="media/loops/2017_12_01_0000_ir_0001/index.htm" frameborder="0"
									class="embed-responsive-item"></iframe></div>
						</div>
						<p>The temperature of the cloud tops can indicate their height since the atmospheric
							temperature typically decreases strongly with height through the troposphere. Colder
							(lighter coloured) cloud-top temperatures indicate higher clouds while warmer
							(darker coloured) cloud-top temperatures indicate lower cloud tops.</p>
						<div class="center"><img src="media/graphics/2015_08_31_0000_ir.jpg" width="845"
								height="446" alt="EUMETSAT infrared over Africa, 0000 UTC 31 Aug 2015" /></div>
						<p>The most challenging features to identify in IR imagery are low clouds over land that
							is cold or snow-covered. Therefore, it’s best to combine IR imagery with other
							imagery, such as the visible channel, the night microphysics RGB, or the natural
							colour RGB.</p>
					</div>
				</div>
			</div>
			<p>Here is the real-time imagery from the MSG long-wave infrared channel. Explore the imagery by
				double-clicking (pinching on mobile devices) to zoom and dragging the image to move view. Below
				the real-time image, you will find a list of questions to ask yourself for exploration and
				self-evaluation purposes. </p>
			<div class="module_hide">
				<p class="user-note">* Live data only available for <a
						href="navmenu.php_tab_1_page_2_2_0.htm">interactive lesson</a>.</p>
			</div>
			<div class="print_hide">
				<div class="embed-responsive embed-responsive-4by3">
					<div id="map-2" class="map embed-responsive-item"></div>
				</div>
				<script>
					var layers = [
						new ol.layer.Tile({
							source: new ol.source.TileWMS({
								url: 'https://eumetview.eumetsat.int/geoserv/wms',
								params: { 'LAYERS': 'msgiodc:msgiodc_ir108', 'TILED': true },
								serverType: 'geoserver'
							})
						}),

						new ol.layer.Tile({
							source: new ol.source.TileWMS({
								url: 'https://eumetview.eumetsat.int/geoserv/wms',
								params: { 'LAYERS': 'meteosat:msg_ir108', 'TILED': true },
								serverType: 'geoserver'
							})
						}),

						new ol.layer.Tile({
							source: new ol.source.TileWMS({
								url: 'https://eumetview.eumetsat.int/geoserv/wms',
								params: { 'LAYERS': 'overlay:ne_10m_admin_0_boundary_lines_land' },
							})
						}),

						new ol.layer.Tile({
							source: new ol.source.TileWMS({
								url: 'https://eumetview.eumetsat.int/geoserv/wms',
								params: { 'LAYERS': 'overlay:ne_10m_coastline' },
							})
						})

					];

					var map = new ol.Map({
						layers: layers,
						target: 'map-2',
						interactions: ol.interaction.defaults({ mouseWheelZoom: false }),
						view: new ol.View({
							center: ol.proj.transform([26, 0], 'EPSG:4326', 'EPSG:3857'),
							projection: 'EPSG:3857',
							zoom: 3.0
						})
					});
				</script> <br>
			</div>
			<p>Using the real-time imagery, answer the following questions. </p>
			<ol start="1">
				<li>Are features visible at this time of day on the imagery? <ol start="1">
						<li>Would these features be visible at other times of day?</li>
					</ol>
				</li>
				<li>What range of colours are clouds? <ol start="1">
						<li>Do those colours represent what your eye sees?</li>
						<li>Do those colours represent the temperature of the object?</li>
						<li>Do those colours represent some other process?</li>
					</ol>
				</li>
				<li>What range of colours are surface features? <ol start="1">
						<li>Do those colours represent what your eye sees?</li>
						<li>Do those colours represent the temperature of the object?</li>
						<li>Do those colours represent some other process?</li>
					</ol>
				</li>
				<li>If you are located within the satellite viewing area of MSG, look outside for clouds and
					surface features. See if those features show up on the imagery by zooming in to your
					location. What colours do you expect those features to be in this imagery? What colours are
					those features in the imagery?</li>
			</ol>
		</div>
		<div id="page_2-3-0" class="page">
			<h3 class="sub_head"><small>Satellite Products » </small> Water Vapour Channel</h3>
			<div class="tabs-container">
				<ul class="nav nav-tabs" role="tablist" id="tab-set-04">
					<li class="active"><a href="#tab12-0" role="tab" data-toggle="tab"
							class="tab-switch">Description</a> </li>
					<li><a href="#tab13-0" role="tab" data-toggle="tab" class="tab-switch">Effective Use</a>
					</li>
				</ul>
				<div class="tab-content">
					<h3>Description</h3>
					<div class="tab-pane fade in active" id="tab12-0">
						<div class="center"><img src="media/graphics/2016_06_15_0600_wv.jpg" width="850"
								height="415"
								alt="EUMETSAT water vapour image over Africa, 0600 UTC 15 Jun 2016" /></div>
						<p>The water vapour (WV) channel measures radiation from a set amount of water vapour in
							the upper-levels of the troposphere in grey shades. Each pixel shows the same
							cumulative amount of water vapour detected from the top of the atmosphere downward.
							The colouration comes from the temperature at which the channel reaches that
							threshold amount of water vapour radiation as seen in the animation below.</p>
						<div class="center"><a class="module_hide"
								href="media/video/water_vapor_construction.mp4" target="_blank"><img
									class="img-responsive center-block"
									src="media/video/water_vapor_construction.jpg"
									alt="Video of how water vapour imagery is made from the perspective of the satellite." /></a><video
								class="print_hide html5video" width="640" height="480" style="max-width:100%;"
								poster="media/video/water_vapor_construction.jpg" preload="auto" controls
								playsinline loop>
								<source src="media/video/water_vapor_construction.mp4" type="video/mp4">
							</video></div>
						<p>In this animation, the column on the left is longest, with the molecules loosely
							distributed over a deeper area. The molecules in the other columns are more densely
							packed and the bases of those columns are higher. The sensor measures the brightness
							temperature of the water vapour at the bottom of the columns.</p>
					</div>
					<h3>Effective Use</h3>
					<div class="tab-pane fade" id="tab13-0">
						<p>The water vapour channel essentially displays the height and distribution of water
							vapour features. It is particularly well-suited for showing the three-dimensionality
							of the atmosphere and the continuous layer of water vapour in the mid- and
							high-latitudes. </p>
						<p>The WV channel is less useful for <strong>forecasting</strong> in the tropics since
							surface features and small variations drive more of the weather processes. However,
							WV channel can be good for <strong>monitoring</strong> developing thunderstorms,
							mesoscale downdrafts, and upper-level dynamics in the tropics.</p>
						<p>WV channels cannot sense land or ocean surfaces since there’s too much water vapour
							between the sensor and the ground, causing the sensor to always detect a value
							before reaching the surface. </p>
						<div class="center"><img src="media/graphics/2016_02_24_0000_wv.jpg" width="845"
								height="446" alt="EUMETSAT water vapour over Europe, 0000 UTC 24 Feb 2016" />
						</div>
					</div>
				</div>
			</div>
			<p>Here is the real-time imagery from the MSG water vapour channel. Explore the imagery by
				double-clicking (pinching on mobile devices) to zoom and dragging the image to move view. Below
				the real-time image, you will find a list of questions to ask yourself for exploration and
				self-evaluation purposes. </p>
			<div class="module_hide">
				<p class="user-note">* Live data only available for <a
						href="navmenu.php_tab_1_page_2_3_0.htm">interactive lesson</a>.</p>
			</div>
			<div class="print_hide">
				<div class="embed-responsive embed-responsive-4by3">
					<div id="map-3" class="map embed-responsive-item"></div>
				</div>
				<script>
					var layers = [
						new ol.layer.Tile({
							source: new ol.source.TileWMS({
								url: 'https://eumetview.eumetsat.int/geoserv/wms',
								params: { 'LAYERS': 'msgiodc:msgiodc_wv062', 'TILED': true },
								serverType: 'geoserver'
							})
						}),

						new ol.layer.Tile({
							source: new ol.source.TileWMS({
								url: 'https://eumetview.eumetsat.int/geoserv/wms',
								params: { 'LAYERS': 'meteosat:msg_wv062', 'TILED': true },
								serverType: 'geoserver'
							})
						}),

						new ol.layer.Tile({
							source: new ol.source.TileWMS({
								url: 'https://eumetview.eumetsat.int/geoserv/wms',
								params: { 'LAYERS': 'overlay:ne_10m_admin_0_boundary_lines_land' },
							})
						}),

						new ol.layer.Tile({
							source: new ol.source.TileWMS({
								url: 'https://eumetview.eumetsat.int/geoserv/wms',
								params: { 'LAYERS': 'overlay:ne_10m_coastline' },
							})
						})

					];

					var map = new ol.Map({
						layers: layers,
						target: 'map-3',
						interactions: ol.interaction.defaults({ mouseWheelZoom: false }),
						view: new ol.View({
							center: ol.proj.transform([26, 0], 'EPSG:4326', 'EPSG:3857'),
							projection: 'EPSG:3857',
							zoom: 3.0
						})
					});
				</script> <br>
			</div>
			<p>Using the real-time imagery, answer the following questions. </p>
			<ol start="1">
				<li>Are features visible at this time of day on the imagery? <ol start="1">
						<li>Would these features be visible at other times of day?</li>
					</ol>
				</li>
				<li>What range of colours are clouds? <ol start="1">
						<li>Do those colours represent what your eye sees?</li>
						<li>Do those colours represent the temperature of the object?</li>
						<li>Do those colours represent some other process?</li>
					</ol>
				</li>
				<li>What range of colours are surface features? <ol start="1">
						<li>Do those colours represent what your eye sees?</li>
						<li>Do those colours represent the temperature of the object?</li>
						<li>Do those colours represent some other process?</li>
					</ol>
				</li>
				<li>If you are located within the satellite viewing area of MSG, look outside for clouds and
					surface features. See if those features show up on the imagery by zooming in to your
					location. What colours do you expect those features to be in this imagery? What colours are
					those features in the imagery?</li>
			</ol>
		</div>
		<div id="page_2-4-0" class="page">
			<h3 class="sub_head"><small>Satellite Products » </small>Natural Colour RGB</h3>
			<div class="tabs-container">
				<ul class="nav nav-tabs" role="tablist" id="tab-set-05">
					<li class="active"><a href="#tab14-0" role="tab" data-toggle="tab"
							class="tab-switch">Description</a> </li>
					<li><a href="#tab15-0" role="tab" data-toggle="tab" class="tab-switch">Effective Use</a>
					</li>
				</ul>
				<div class="tab-content">
					<h3>Description</h3>
					<div class="tab-pane fade in active" id="tab14-0">
						<div class="center"><img src="media/graphics/2016_06_15_0600_ncol.jpg" width="850"
								height="667"
								alt="EUMETSAT Natural Colour RGB over Africa, 0600 UTC 15 Jun 2016" /></div>
						<p>Recall that visible imagery shows what our eyes see in grey shades. The natural
							colour RGB does this too, with the addition of colour, and <strong>most</strong>
							features look realistic.</p>
						<p>This product combines three channels (two visible and one near-infrared) to make a
							colorized version of the visible imagery. Surface ice/snow and ice clouds all show
							up in the imagery as differing shades of cyan (light blue). Since the RGB is partly
							made from visible channels, it is not useful at night.</p>
					</div>
					<h3>Effective Use</h3>
					<div class="tab-pane fade" id="tab15-0">
						<p>Most surface features look realistic in this product:</p>
						<ul>
							<li>grasslands and forests are typically green</li>
							<li>water appears black</li>
							<li>desert is tan to reddish brown</li>
							<li>clouds are white-pink</li>
						</ul>
						<p>Surface ice/snow and ice clouds appear in shades of cyan (light blue) helping to
							differentiate them from water clouds. The example below has a mixture of ice and
							water clouds.</p>
						<div class="center"><img src="media/graphics/2016_03_09_1200_ncol.jpg" width="845"
								height="442"
								alt="EUMETSAT natural colour RGB over Africa, 1200 UTC 09 Mar 2016" /></div>
						<p>The biggest limitation to this RGB is that ice clouds and surface ice/snow have the
							same colour (cyan), making them difficult to distinguish from each other. We can see
							this below over Lesotho. Another important limitation is that water clouds with
							large droplets (such as marine stratocumulus) can also appear light blue on this
							imagery.</p>
						<div class="center"><img src="media/graphics/2016_07_27_1200_ncol.jpg" width="845"
								height="446"
								alt="EUMETSAT natural colour RGB over Africa, 1200 UTC 27 Jul 2016" /></div>
						<p>To differentiate them, animate the images and look for cloud growth or motion. This
							may be challenging if snow is melting at a rate similar to cloud growth or decay.
							For a more definitive answer, check other products such as IR imagery.</p>
						<div class="image-sweep center-block" style="max-width:845px"> <img
								class="img-responsive center-block"
								src="media/graphics/2016_07_27_1200_ncol.jpg" alt="before" width="845"
								height="446"> <img class="img-responsive center-block"
								src="media/graphics/2016_07_27_1200_ir.jpg" alt="after" width="845"
								height="446"> </div>
					</div>
				</div>
			</div>
			<p>Here is the real-time imagery from the MSG natural colour RGB. Explore the imagery by
				double-clicking (pinching on mobile devices) to zoom and dragging the image to move view. Below
				the real-time image, you will find a list of questions to ask yourself for exploration and
				self-evaluation purposes. </p>
			<div class="module_hide">
				<p class="user-note">* Live data only available for <a
						href="navmenu.php_tab_1_page_2_4_0.htm">interactive lesson</a>.</p>
			</div>
			<div class="print_hide">
				<div class="embed-responsive embed-responsive-4by3">
					<div id="map-4" class="map embed-responsive-item"></div>
				</div>
				<script>
					var layers = [
						new ol.layer.Tile({
							source: new ol.source.TileWMS({
								url: 'https://eumetview.eumetsat.int/geoserv/wms',
								params: { 'LAYERS': 'msgiodc:msgiodc_natural', 'TILED': true },
								serverType: 'geoserver'
							})
						}),

						new ol.layer.Tile({
							source: new ol.source.TileWMS({
								url: 'https://eumetview.eumetsat.int/geoserv/wms',
								params: { 'LAYERS': 'meteosat:msg_natural', 'TILED': true },
								serverType: 'geoserver'
							})
						}),

						new ol.layer.Tile({
							source: new ol.source.TileWMS({
								url: 'https://eumetview.eumetsat.int/geoserv/wms',
								params: { 'LAYERS': 'overlay:ne_10m_admin_0_boundary_lines_land' },
							})
						}),

						new ol.layer.Tile({
							source: new ol.source.TileWMS({
								url: 'https://eumetview.eumetsat.int/geoserv/wms',
								params: { 'LAYERS': 'overlay:ne_10m_coastline' },
							})
						})

					];

					var map = new ol.Map({
						layers: layers,
						target: 'map-4',
						interactions: ol.interaction.defaults({ mouseWheelZoom: false }),
						view: new ol.View({
							center: ol.proj.transform([26, 0], 'EPSG:4326', 'EPSG:3857'),
							projection: 'EPSG:3857',
							zoom: 3.0
						})
					});
				</script> <br>
			</div>
			<p>Using the real-time imagery, answer the following questions. </p>
			<ol start="1">
				<li>Are features visible at this time of day on the RGB? <ol start="1">
						<li>Would these features be visible at other times of day?</li>
					</ol>
				</li>
				<li>What features really stand out to your eyes in this RGB?</li>
				<li>What range of colours are clouds? <ol start="1">
						<li>Do those colours represent cloud-top heights?</li>
						<li>Do those colours represent cloud thickness?</li>
						<li>Do those colours represent temperatures?</li>
						<li>Do those colours represent some other process?</li>
					</ol>
				</li>
				<li>What range of colours are surface features? <ol start="1">
						<li>Do those colours represent the temperature of the object?</li>
						<li>Do those colours represent the albedo of the object?</li>
						<li>Do those colours represent some other process?</li>
					</ol>
				</li>
				<li>If you are located within the satellite viewing area of MSG, look outside for clouds and
					surface features. See if those features show up on the imagery by zooming in to your
					location. What colours do you expect those features to be in this imagery? What colours are
					those features in the imagery?</li>
			</ol>
		</div>
		<div id="page_2-5-0" class="page">
			<h3 class="sub_head"><small>Satellite Products » </small>Dust RGB</h3>
			<div class="tabs-container">
				<ul class="nav nav-tabs" role="tablist" id="tab-set-06">
					<li class="active"><a href="#tab16-0" role="tab" data-toggle="tab"
							class="tab-switch">Description</a> </li>
					<li><a href="#tab17-0" role="tab" data-toggle="tab" class="tab-switch">Effective Use</a>
					</li>
				</ul>
				<div class="tab-content">
					<h3>Description</h3>
					<div class="tab-pane fade in active" id="tab16-0">
						<div class="center"><img src="media/graphics/2016_06_15_0600_dust.jpg" width="850"
								height="415" alt="EUMETSAT dust RGB over Africa, 0600 UTC 15 Jun 2016" /></div>
						<p>The dust RGB combines information from several infrared channels and channel
							differences in order to highlight dust. Dust is difficult to identify in other
							imagery with certainty, but it stands out clearly in shades of bright pink in this
							RGB.</p>
					</div>
					<h3>Effective Use</h3>
					<div class="tab-pane fade" id="tab17-0">
						<p>Since the dust RGB is made from infrared channels, it is useful both during the day
							and at night. There are some minor time-of-day dependencies to consider:</p>
						<ul>
							<li>During daytime, bright pink areas are always dust. You cannot determine the
								height of the dust cloud-top during the day. </li>
							<li>During daytime, very thick dust can appear dark magenta.</li>
							<li>At night, dust ranges in colour from pink to purple or purple-blue. The pinker
								the dust area, the higher its cloud-top is. Likewise, the bluer the area, the
								lower the dust cloud top.</li>
						</ul>
						<table class="table table-bordered">
							<tbody>
								<tr>
									<td colspan="1" rowspan="1">
										<p><strong>Color</strong> </p>
									</td>
									<td colspan="1" rowspan="1">
										<p><strong>Physical Meaning at Night</strong> </p>
									</td>
								</tr>
								<tr>
									<td colspan="1" rowspan="1" style="background-color: #ff4f96;"> </td>
									<td colspan="1" rowspan="1">
										<p>High-level Dust</p>
									</td>
								</tr>
								<tr>
									<td colspan="1" rowspan="1" style="background-color: #a050d2;"> </td>
									<td colspan="1" rowspan="1">
										<p>Mid-level Dust</p>
									</td>
								</tr>
								<tr>
									<td colspan="1" rowspan="1" style="background-color: #8850ef;"> </td>
									<td colspan="1" rowspan="1">
										<p>Low-level Dust</p>
									</td>
								</tr>
							</tbody>
						</table>
						<p>Overall, the imagery has a bluer hue during the day, since the blue colours are
							controlled by only the long-wave infrared channel. Thus, as temperatures increase at
							the start of the day, the blue tones will become stronger.</p>
						<div class="center"><a class="module_hide" href="media/video/Dust_20150411.mp4"
								target="_blank"><img class="img-responsive center-block"
									src="media/video/Dust_20150411.jpg"
									alt="EUMETSAT dust RGB over Africa, 09 Apr 2015 through 13 Apr 2015." /></a><video
								class="print_hide html5video" width="850" height="480" style="max-width:100%;"
								poster="media/video/Dust_20150411.jpg" preload="auto" controls playsinline loop>
								<source src="media/video/Dust_20150411.mp4" type="video/mp4">
							</video></div>
					</div>
				</div>
			</div>
			<p>Here is the real-time imagery from the MSG dust RGB. Explore the imagery by double-clicking
				(pinching on mobile devices) to zoom and dragging the image to move view. Below the real-time
				image, you will find a list of questions to ask yourself for exploration and self-evaluation
				purposes. </p>
			<div class="module_hide">
				<p class="user-note">* Live data only available for <a
						href="navmenu.php_tab_1_page_2_5_0.htm">interactive lesson</a>.</p>
			</div>
			<div class="print_hide">
				<div class="embed-responsive embed-responsive-4by3">
					<div id="map-5" class="map embed-responsive-item"></div>
				</div>
				<script>
					var layers = [
						new ol.layer.Tile({
							source: new ol.source.TileWMS({
								url: 'https://eumetview.eumetsat.int/geoserv/wms',
								params: { 'LAYERS': 'msgiodc:msgiodc_dust', 'TILED': true },
								serverType: 'geoserver'
							})
						}),

						new ol.layer.Tile({
							source: new ol.source.TileWMS({
								url: 'https://eumetview.eumetsat.int/geoserv/wms',
								params: { 'LAYERS': 'meteosat:msg_dust', 'TILED': true },
								serverType: 'geoserver'
							})
						}),

						new ol.layer.Tile({
							source: new ol.source.TileWMS({
								url: 'https://eumetview.eumetsat.int/geoserv/wms',
								params: { 'LAYERS': 'overlay:ne_10m_admin_0_boundary_lines_land' },
							})
						}),

						new ol.layer.Tile({
							source: new ol.source.TileWMS({
								url: 'https://eumetview.eumetsat.int/geoserv/wms',
								params: { 'LAYERS': 'overlay:ne_10m_coastline' },
							})
						})

					];

					var map = new ol.Map({
						layers: layers,
						target: 'map-5',
						interactions: ol.interaction.defaults({ mouseWheelZoom: false }),
						view: new ol.View({
							center: ol.proj.transform([26, 0], 'EPSG:4326', 'EPSG:3857'),
							projection: 'EPSG:3857',
							zoom: 3.0
						})
					});
				</script> <br>
			</div>
			<p>Using the real-time imagery, answer the following questions. </p>
			<ol start="1">
				<li>Are features visible at this time of day on the RGB? <ol start="1">
						<li>Would these features be visible at other times of day?</li>
					</ol>
				</li>
				<li>What features really stand out to your eyes in this RGB?</li>
				<li>What range of colours are clouds? <ol start="1">
						<li>Do those colours represent cloud-top heights?</li>
						<li>Do those colours represent cloud thickness?</li>
						<li>Do those colours represent temperatures?</li>
						<li>Do those colours represent some other process?</li>
					</ol>
				</li>
				<li>What range of colours are surface features? <ol start="1">
						<li>Do those colours represent the temperature of the object?</li>
						<li>Do those colours represent the albedo of the object?</li>
						<li>Do those colours represent some other process?</li>
					</ol>
				</li>
				<li>If you are located within the satellite viewing area of MSG, look outside for clouds and
					surface features. See if those features show up on the imagery by zooming in to your
					location. What colours do you expect those features to be in this imagery? What colours are
					those features in the imagery?</li>
			</ol>
		</div>
		<div id="page_2-6-0" class="page">
			<h3 class="sub_head"><small>Satellite Products » </small>Severe Convection RGB</h3>
			<div class="tabs-container">
				<ul class="nav nav-tabs" role="tablist" id="tab-set-07">
					<li class="active"><a href="#tab18-0" role="tab" data-toggle="tab"
							class="tab-switch">Description</a> </li>
					<li><a href="#tab19-0" role="tab" data-toggle="tab" class="tab-switch">Effective Use</a>
					</li>
				</ul>
				<div class="tab-content">
					<h3>Description</h3>
					<div class="tab-pane fade in active" id="tab18-0">
						<div class="center"><img src="media/graphics/2016_06_15_0600_scon.jpg" width="850"
								height="415"
								alt="EUMETSAT severe convection RGB over Africa, 0600 UTC 15 Jun 2016" /></div>
						<p>The severe convection RGB shows areas of active thunderstorms with strong updrafts in
							colours ranging from red (less intense convection) to yellow (most intense
							convection). The rest of the product is blue or purple to make the strongest storms
							stand out. </p>
						<p>This product is made with a combination of visible, infrared and water vapour
							channels and channel differences. Because of this, the product can be used only
							during the day.</p>
					</div>
					<h3>Effective Use</h3>
					<div class="tab-pane fade" id="tab19-0">
						<p>Tall, thick clouds initially appear red. Over time, as the updraft generates and
							pushes more ice crystals upward, the tops will appear more yellow. Later on, the
							yellow areas may grow horizontally as small ice crystals fill out the anvil of the
							storm. Dissipating yellow colours indicate that the updraft is weakening.</p>
						<div class="center"><a href="media/loops/2017_01_22_0500_scon_0001/index.htm"
								class="module_hide datalooper"><img
									src="media/loops/2017_01_22_0500_scon_0001/2017_01_22_0500_scon_0001.jpg"
									alt="EUMETSAT severe convection RGB over Africa, 0500 - 1400 UTC 22 Jan 2017"
									class="img-responsive center-block" /></a>
							<div class="print_hide embed-responsive center-block"
								style="padding-bottom:58.10650887574%"><iframe
									src="media/loops/2017_01_22_0500_scon_0001/index.htm" frameborder="0"
									class="embed-responsive-item"></iframe></div>
						</div>
						<p>The effective use of the severe convection RGB requires that you understand some of
							the methodology for how the colours would change with an evolving cloud structure.
							Below you will find a step-wise animation of the growth of thunderstorms and the
							changes that would occur from the satellite RGB’s perspective. </p>
						<div class="center"><a href="media/loops/scon_tstorm_growth_conceptual/index.htm"
								class="module_hide datalooper"><img
									src="media/loops/scon_tstorm_growth_conceptual/scon_tstorm_growth_conceptual.jpg"
									alt="Conceptual animation of why the severe convection RGB shows certain values."
									class="img-responsive center-block" /></a>
							<div class="print_hide embed-responsive center-block"
								style="padding-bottom:61.764705882353%"><iframe
									src="media/loops/scon_tstorm_growth_conceptual/index.htm" frameborder="0"
									class="embed-responsive-item"></iframe></div>
						</div>
						<p>It is important to note that yellow features can also be mountain lee wave clouds, as
							shown in the loop below, or non-severe high-based thunderstorms, as well as
							polluted, thick ice clouds.</p>
						<div class="center"><a href="media/loops/2016_11_18_1000_scon_0001/index.htm"
								class="module_hide datalooper"><img
									src="media/loops/2016_11_18_1000_scon_0001/2016_11_18_1000_scon_0001.jpg"
									alt="EUMETSAT severe convection RGB over Middle East, 1000 - 1400 UTC 18 Nov 2016"
									class="img-responsive center-block" /></a>
							<div class="print_hide embed-responsive center-block"
								style="padding-bottom:57.633136094675%"><iframe
									src="media/loops/2016_11_18_1000_scon_0001/index.htm" frameborder="0"
									class="embed-responsive-item"></iframe></div>
						</div>
						<p>To determine if yellow features are indeed severe thunderstorms, consult other
							satellite imagery, and look for the following:</p>
						<ul>
							<li>pulsing or textured character on IR or visible imagery to confirm severe
								convection</li>
							<li>uniformly-coloured, smooth cloud tops to confirm mountain lee wave clouds</li>
						</ul>
						<p>Note that polluted, thick, ice clouds are especially hard to determine since the
							aerosols producing the pollution may not be seen on satellite imagery. </p>
					</div>
				</div>
			</div>
			<p>Here is the real-time imagery from the MSG severe convection RGB. Explore the imagery by
				double-clicking (pinching on mobile devices) to zoom and dragging the image to move view. Below
				the real-time image, you will find a list of questions to ask yourself for exploration and
				self-evaluation purposes. </p>
			<div class="module_hide">
				<p class="user-note">* Live data only available for <a
						href="navmenu.php_tab_1_page_2_6_0.htm">interactive lesson</a>.</p>
			</div>
			<div class="print_hide">
				<div class="embed-responsive embed-responsive-4by3">
					<div id="map-6" class="map embed-responsive-item"></div>
				</div>
				<script>
					var layers = [
						new ol.layer.Tile({
							source: new ol.source.TileWMS({
								url: 'https://eumetview.eumetsat.int/geoserv/wms',
								params: { 'LAYERS': 'msgiodc:msgiodc_convection', 'TILED': true },
								serverType: 'geoserver'
							})
						}),

						new ol.layer.Tile({
							source: new ol.source.TileWMS({
								url: 'https://eumetview.eumetsat.int/geoserv/wms',
								params: { 'LAYERS': 'meteosat:msg_convection', 'TILED': true },
								serverType: 'geoserver'
							})
						}),

						new ol.layer.Tile({
							source: new ol.source.TileWMS({
								url: 'https://eumetview.eumetsat.int/geoserv/wms',
								params: { 'LAYERS': 'overlay:ne_10m_admin_0_boundary_lines_land' },
							})
						}),

						new ol.layer.Tile({
							source: new ol.source.TileWMS({
								url: 'https://eumetview.eumetsat.int/geoserv/wms',
								params: { 'LAYERS': 'overlay:ne_10m_coastline' },
							})
						})

					];

					var map = new ol.Map({
						layers: layers,
						target: 'map-6',
						interactions: ol.interaction.defaults({ mouseWheelZoom: false }),
						view: new ol.View({
							center: ol.proj.transform([26, 0], 'EPSG:4326', 'EPSG:3857'),
							projection: 'EPSG:3857',
							zoom: 3.0
						})
					});
				</script> <br>
			</div>
			<p>Using the real-time imagery, answer the following questions. </p>
			<ol start="1">
				<li>Are features visible at this time of day on the RGB? <ol start="1">
						<li>Would these features be visible at other times of day?</li>
					</ol>
				</li>
				<li>What features really stand out to your eyes in this RGB?</li>
				<li>What range of colours are clouds? <ol start="1">
						<li>Do those colours represent cloud-top heights?</li>
						<li>Do those colours represent cloud thickness?</li>
						<li>Do those colours represent temperatures?</li>
						<li>Do those colours represent some other process?</li>
					</ol>
				</li>
				<li>What range of colours are surface features? <ol start="1">
						<li>Do those colours represent the temperature of the object?</li>
						<li>Do those colours represent the albedo of the object?</li>
						<li>Do those colours represent some other process?</li>
					</ol>
				</li>
				<li>If you are located within the satellite viewing area of MSG, look outside for clouds and
					surface features. See if those features show up on the imagery by zooming in to your
					location. What colours do you expect those features to be in this imagery? What colours are
					those features in the imagery?</li>
			</ol>
		</div>
		<div id="page_2-7-0" class="page">
			<h3 class="sub_head"><small>Satellite Products » </small> Night Microphysics RGB</h3>
			<div class="tabs-container">
				<ul class="nav nav-tabs" role="tablist" id="tab-set-08">
					<li class="active"><a href="#tab20-0" role="tab" data-toggle="tab"
							class="tab-switch">Description</a> </li>
					<li><a href="#tab21-0" role="tab" data-toggle="tab" class="tab-switch">Effective Use</a>
					</li>
				</ul>
				<div class="tab-content">
					<h3>Description</h3>
					<div class="tab-pane fade in active" id="tab20-0">
						<div class="center"><img src="media/graphics/2016_06_15_0600_night_micro.jpg"
								width="850" height="663"
								alt="EUMETSAT night microphysics RGB over Africa, 0600 UTC 15 Jun 2016" /></div>
						<p>This RGB lets you identify nighttime low-level clouds and fog, and differentiate them
							from snow cover. You can also determine cloud heights. The colour of some features
							depends on latitude and season.</p>
						<p>This RGB is made from three different IR channels and channel differences. It thus
							can be used any time of day, but the night microphysics RGB is tuned for nighttime.
						</p>
					</div>
					<h3>Effective Use</h3>
					<div class="tab-pane fade" id="tab21-0">
						<p>Both the season and weather regime play a role in dictating the colour of some
							features in this RGB. Because this RGB is all IR channels, the colours are
							controlled heavily by the cloud-top temperature and cloud-top temperature difference
							between channels. This can have a strong dependence by season, viewing angle or
							overall temperature profile. Generally, low clouds/fog appear: </p>
						<ul>
							<li>green in the mid- and high-latitude cold seasons and during cold weather regimes
							</li>
							<li>light blue in the mid- and low-latitude warm season and during warm weather
								regimes</li>
						</ul>
						<p>Examples of each follow.</p>
						<p><strong>Cold Season/Regime</strong> </p>
						<div class="center"><img src="media/graphics/2016_01_10_0000_night_micro.jpg"
								width="898" height="717"
								alt="EUMETSAT night microphysics RGB over Europe, 0000 UTC 10 Jan 2016" /></div>
						<p><strong>Warm Season/Regime</strong> </p>
						<div class="center"><img src="media/graphics/2015_10_26_0000_night_micro.jpg"
								width="901" height="717"
								alt="EUMETSAT night microphysics RGB over Europe, 0000 UTC 26 Oct 2015" /></div>
						<p>High cirrus clouds are purple to black; thick ice clouds are dark red; and mid-level
							clouds are pink to brownish.</p>
						<p>In the tropics, low-level stratiform clouds are light blue. Mid-level clouds are
							pinkish to brownish, and high-level cirrus are black to dark blue. </p>
						<p>If you want to verify whether clouds are present before sunset, look at the natural
							colour RGB or visible imagery. This is particularly important during seasonal
							changes when low clouds and fog change from being green to light blue or light blue
							to green, as this can cause confusion when weather regimes differ on a daily basis.
						</p>
						<p>Move the slider to see how the natural colour RGB (first image) can help identify low
							fog/clouds before sunset.</p>
						<div class="image-sweep center-block" style="max-width:845px"> <img
								class="img-responsive center-block"
								src="media/graphics/Nat_Col_2017_05_03_18UTC.jpg" alt="left side product"> <img
								class="img-responsive center-block"
								src="media/graphics/Night_Micro_2017_05_03_18UTC.jpg" alt="right side product">
						</div>
						<p>In the loop below, the sun is setting and some areas are starting to show up as low
							clouds/fog. This example highlights the importance of knowing the timing of your
							imagery.</p>
						<div class="center"><a href="media/loops/night_micro_20170503/index.htm"
								class="module_hide datalooper"><img
									src="media/loops/night_micro_20170503/Night_Micro_2017_05_03_18UTC.jpg"
									alt="EUMETSAT night microphysics RGB over Africa, 1200 - 0300 UTC 03 - 04 May 2017"
									class="img-responsive center-block" /></a>
							<div class="print_hide embed-responsive center-block"
								style="padding-bottom:84.615384615385%"><iframe
									src="media/loops/night_micro_20170503/index.htm" frameborder="0"
									class="embed-responsive-item"></iframe></div>
						</div>
					</div>
				</div>
			</div>
			<p>Here is the real-time imagery from the MSG night microphysics RGB. Explore the imagery by
				double-clicking (pinching on mobile devices) to zoom and dragging the image to move view. Below
				the real-time image, you will find a list of questions to ask yourself for exploration and
				self-evaluation purposes. </p>
			<div class="module_hide">
				<p class="user-note">* Live data only available for <a
						href="navmenu.php_tab_1_page_2_7_0.htm">interactive lesson</a>.</p>
			</div>
			<div class="print_hide">
				<div class="embed-responsive embed-responsive-4by3">
					<div id="map-7" class="map embed-responsive-item"></div>
				</div>
				<script>
					var layers = [
						new ol.layer.Tile({
							source: new ol.source.TileWMS({
								url: 'https://eumetview.eumetsat.int/geoserv/wms',
								params: { 'LAYERS': 'msgiodc:msgiodc_fog', 'TILED': true },
								serverType: 'geoserver'
							})
						}),

						new ol.layer.Tile({
							source: new ol.source.TileWMS({
								url: 'https://eumetview.eumetsat.int/geoserv/wms',
								params: { 'LAYERS': 'meteosat:msg_fog', 'TILED': true },
								serverType: 'geoserver'
							})
						}),

						new ol.layer.Tile({
							source: new ol.source.TileWMS({
								url: 'https://eumetview.eumetsat.int/geoserv/wms',
								params: { 'LAYERS': 'overlay:ne_10m_admin_0_boundary_lines_land' },
							})
						}),

						new ol.layer.Tile({
							source: new ol.source.TileWMS({
								url: 'https://eumetview.eumetsat.int/geoserv/wms',
								params: { 'LAYERS': 'overlay:ne_10m_coastline' },
							})
						})

					];

					var map = new ol.Map({
						layers: layers,
						target: 'map-7',
						interactions: ol.interaction.defaults({ mouseWheelZoom: false }),
						view: new ol.View({
							center: ol.proj.transform([26, 0], 'EPSG:4326', 'EPSG:3857'),
							projection: 'EPSG:3857',
							zoom: 3.0
						})
					});
				</script> <br>
			</div>
			<p>Using the real-time imagery, answer the following questions. </p>
			<ol start="1">
				<li>Are features visible at this time of day on the RGB? <ol start="1">
						<li>Would these features be visible at other times of day?</li>
					</ol>
				</li>
				<li>What features really stand out to your eyes in this RGB?</li>
				<li>What range of colours are clouds? <ol start="1">
						<li>Do those colours represent cloud-top heights?</li>
						<li>Do those colours represent cloud thickness?</li>
						<li>Do those colours represent temperatures?</li>
						<li>Do those colours represent some other process?</li>
					</ol>
				</li>
				<li>What range of colours are surface features? <ol start="1">
						<li>Do those colours represent the temperature of the object?</li>
						<li>Do those colours represent the albedo of the object?</li>
						<li>Do those colours represent some other process?</li>
					</ol>
				</li>
				<li>If you are located within the satellite viewing area of MSG, look outside for clouds and
					surface features. See if those features show up on the imagery by zooming in to your
					location. What colours do you expect those features to be in this imagery? What colours are
					those features in the imagery?</li>
			</ol>
		</div>
		<div id="page_3-0-0" class="page">
			<h3>Satellite Product Comparisons</h3>
			<p>Next, you’ll learn to use satellite imagery and products to analyse cloud heights and
				thicknesses, and compare land and ocean features. But first, let’s make sure that you know which
				products to use for different situations. Note: From here on out, we’ll refer to images and
				products simply as “products.” </p>
			<p>Here, you will view all products for a different case and answer a series of questions. You can
				select pairs of products to view and compare - notice which features you can and cannot see on
				each product. Then, scroll below the product area and answer the questions. Use the “Arrow”
				buttons to move between questions. After you have finished all of the questions, use the “Next”
				button to proceed to the next section. </p>
			<p><strong>Instructions</strong>: Select a product for each set of radio buttons. The first product
				will display, with a slider over it. Move the slider to see the second image. To change one or
				both images, select a different product for each radio button. </p>
			<div class="dynamic-slider container-fluid" style="margin-bottom:10px;">
				<div class="row as-controls">
					<form class="as-form" data-path="2016_07_27_0600_">
						<div class="col-xs-6" style="background: #EDEDED;">
							<h6>Left Side Image</h6>
							<dl class="as-select-list">
								<dt><label>Select Product:</label></dt>
								<dd> <select name="ld">
										<option value="vis" selected>Visible</option>
										<option value="ir">Infrared</option>
										<option value="wv">Water Vapour</option>
										<option value="scon">Severe Convection</option>
										<option value="dust">Dust</option>
										<option value="ncol">Natural Colour</option>
										<option value="night_micro">Night Microphysics</option>
									</select> </dd>
							</dl>
						</div>
						<div class="col-xs-6" style="background: #D9D9D9">
							<h6>Right Side Image</h6>
							<dl class="as-select-list">
								<dt><label>Select Product:</label></dt>
								<dd> <select name="rd">
										<option value="vis">Visible</option>
										<option value="ir">Infrared</option>
										<option value="wv">Water Vapour</option>
										<option value="scon" selected>Severe Convection</option>
										<option value="dust">Dust</option>
										<option value="ncol">Natural Colour</option>
										<option value="night_micro">Night Microphysics</option>
									</select> </dd>
							</dl>
						</div>
					</form>
				</div>
				<div class="as-stage row" style="padding-top:10px;">
					<div class="as-sweeper center-block" style="max-width:850px;"> <img
							src="media/graphics/2016_07_27_0600_vis.jpg" alt="left side product"
							class="left-as-image img-responsive center-block"> <img
							src="media/graphics/2016_07_27_0600_ir.jpg" alt="right side product"
							class="right-as-image img-responsive center-block"> </div>
				</div>
			</div> <!-- Carousel Qs -->
			<div id="qslide" class="carousel slide" data-ride="carousel" data-wrap="false"
				data-interval="false"> <!-- Indicators -->
				<ol class="carousel-indicators print_hide">
					<li data-target="#qslide" data-slide-to="0" class="active"></li>
					<li data-target="#qslide" data-slide-to="1"></li>
					<li data-target="#qslide" data-slide-to="2"></li>
					<li data-target="#qslide" data-slide-to="3"></li>
					<li data-target="#qslide" data-slide-to="4"></li>
					<li data-target="#qslide" data-slide-to="5"></li>
					<li data-target="#qslide" data-slide-to="6"></li>
					<li data-target="#qslide" data-slide-to="7"></li>
				</ol> <!-- Wrapper for slides -->
				<div class="carousel-inner" role="listbox">
					<div class="item active">
						<div class="panel panel-default interaction-question">
							<div class="panel-body">
								<div class="question-wrap radio">
									<h4>Question 1 of 8</h4>
									<p>Why does the visible image (natural colour RGB) only show data on the
										right side of the image?</p>
									<form action="#">
										<fieldset>
											<div class="response-group-item"><input id="q01a" name="q01"
													value="a" type="radio"><label for="q01a"> <strong>a)
													</strong>The visible sensor isn’t working correctly.</label>
											</div>
											<div class="response-group-item"><input id="q01b" name="q01"
													value="b" type="radio"><label for="q01b"> <strong>b)
													</strong>The visible sensor only receives data during the
													night.</label> </div>
											<div class="response-group-item correct"><input id="q01c" name="q01"
													value="c" type="radio"><label for="q01c"> <strong>c)
													</strong>The visible sensor only receives data during the
													day. </label> </div>
											<div class="response-group-item"><input id="q01d" name="q01"
													value="d" type="radio"><label for="q01d"> <strong>d)
													</strong>A solar eclipse is occurring.</label> </div> <input
												class="submit-button btn btn-primary" name="submit-button"
												value="Done" type="button">
										</fieldset>
									</form>
									<div class="answer">
										<p class="response">The correct answer is c.</p>
										<p class="explanation">The visible sensor only senses within the visible
											portion of the spectrum. At night, it does not receive enough
											radiation return to produce a useful image.</p>
									</div>
									<div class="message">Please make a selection.</div>
								</div>
							</div>
						</div>
					</div>
					<div class="item">
						<div class="panel panel-default interaction-question">
							<div class="panel-body">
								<div class="question-wrap checkboxes">
									<h4>Question 2 of 8</h4>
									<p>Which of the following RGBs use the visible channel and thus are not
										available at night? Compare the visible image with the RGBs to figure
										this out. </p>
									<form action="#">
										<fieldset>
											<div class="response-group-item"><input id="q02a" name="q02"
													value="a" type="checkbox"><label for="q02a"> <strong>a)
													</strong>Dust RGB</label> </div>
											<div class="response-group-item correct"><input id="q02b" name="q02"
													value="b" type="checkbox"><label for="q02b"> <strong>b)
													</strong>Severe convection RGB</label> </div>
											<div class="response-group-item"><input id="q02c" name="q02"
													value="c" type="checkbox"><label for="q02c"> <strong>c)
													</strong>Night microphysics RGB</label> </div>
											<div class="response-group-item correct"><input id="q02d" name="q02"
													value="d" type="checkbox"><label for="q02d"> <strong>d)
													</strong>Natural colour RGB</label> </div> <input
												class="submit-button btn btn-primary" name="submit-button"
												value="Done" type="button">
										</fieldset>
									</form>
									<div class="answer">
										<p class="response">The correct answers are b, d.</p>
										<p class="explanation">Since the severe convection and natural colour
											RGBs are partly made from the visible channel, they are not useful
											at night. </p>
									</div>
									<div class="message">Please make a selection.</div>
								</div>
							</div>
						</div>
					</div>
					<div class="item">
						<div class="panel panel-default interaction-question">
							<div class="panel-body">
								<div class="question-wrap checkboxes">
									<h4>Question 3 of 8</h4>
									<p>Which other products let you identify the low clouds/fog on and south of
										the coasts of Côte d’Ivoire, Ghana, Togo, and Benin? (If you’re
										unfamiliar with this area, consult a <a
											href="https://goo.gl/maps/wAGMJXwUQ9u" target="_blank">map</a>.) Use
										the night microphysics RGB to find the area, then compare it to the
										other products.</p>
									<form action="#">
										<fieldset>
											<div class="response-group-item"><input id="q03a" name="q03"
													value="a" type="checkbox"><label for="q03a"> <strong>a)
													</strong>Visible</label> </div>
											<div class="response-group-item correct"><input id="q03b" name="q03"
													value="b" type="checkbox"><label for="q03b"> <strong>b)
													</strong>Infrared</label> </div>
											<div class="response-group-item"><input id="q03c" name="q03"
													value="c" type="checkbox"><label for="q03c"> <strong>c)
													</strong>Water vapour</label> </div>
											<div class="response-group-item correct"><input id="q03d" name="q03"
													value="d" type="checkbox"><label for="q03d"> <strong>d)
													</strong>Dust RGB</label> </div>
											<div class="response-group-item"><input id="q03e" name="q03"
													value="e" type="checkbox"><label for="q03e"> <strong>e)
													</strong>Severe convection RGB</label> </div>
											<div class="response-group-item"><input id="q03f" name="q03"
													value="f" type="checkbox"><label for="q03f"> <strong>f)
													</strong>Natural colour RGB</label> </div> <input
												class="submit-button btn btn-primary" name="submit-button"
												value="Done" type="button">
										</fieldset>
									</form>
									<div class="answer">
										<p class="response">The correct answers are b, d.</p>
										<p class="explanation">While the night microphysics RGB is the ideal
											product to use, if you were without it, you would want to use
											channels that have helped make up the night microphysics product:
											infrared imagery or products made predominantly from these channels.
										</p>
									</div>
									<div class="message">Please make a selection.</div>
								</div>
							</div>
						</div>
					</div>
					<div class="item">
						<div class="panel panel-default interaction-question">
							<div class="panel-body">
								<div class="question-wrap radio">
									<h4>Question 4 of 8</h4>
									<p>Select the severe convection RGB and find the most active convection.
										Then compare the RGB to the visible, infrared, and water vapour images.
										Which channel does the best job of highlighting the most active
										convection? </p>
									<form action="#">
										<fieldset>
											<div class="response-group-item"><input id="q04a" name="q04"
													value="a" type="radio"><label for="q04a"> <strong>a)
													</strong>Visible</label> </div>
											<div class="response-group-item"><input id="q04b" name="q04"
													value="b" type="radio"><label for="q04b"> <strong>b)
													</strong>Infrared (unenhanced)</label> </div>
											<div class="response-group-item correct"><input id="q04c" name="q04"
													value="c" type="radio"><label for="q04c"> <strong>c)
													</strong>Water vapour</label> </div> <input
												class="submit-button btn btn-primary" name="submit-button"
												value="Done" type="button">
										</fieldset>
									</form>
									<div class="answer">
										<p class="response">The correct answer is c.</p>
										<p class="explanation">Water vapour imagery sees the mid- to
											upper-troposphere. Typically, the upper levels of the troposphere
											are relatively dry, so any convection breaking into this layer
											contains much higher amounts of water vapor and will contrast
											dramatically with the other features. This makes WV imagery useful
											for identifying the cold cloud-tops associated with severe
											convection. In fact, the WV channel (and differences of it) is so
											useful for detecting severe convection that it’s used in the severe
											convection RGB. </p>
										<p class="explanation">IR imagery can be just as useful for identifying
											severe convection when it’s enhanced to highlight the colder cloud
											tops.</p>
										<div class="center"><img src="media/graphics/2016_07_27_0600_ir_enh.jpg"
												width="850" height="561"
												alt="EUMETSAT enhanced infrared image over Africa, 0600 UTC 27 Jul 2016" />
										</div>
										<p class="explanation">Overall, it’s best to use the severe convection
											RGB for this type of analysis. But if you need a backup or it’s
											nighttime, use WV or enhanced IR imagery.</p>
									</div>
									<div class="message">Please make a selection.</div>
								</div>
							</div>
						</div>
					</div>
					<div class="item">
						<div class="panel panel-default interaction-question">
							<div class="panel-body">
								<div class="question-wrap checkboxes">
									<h4>Question 5 of 8</h4>
									<p>View the dust RGB. Pink tones indicate dust in north-central Niger,
										northern Chad, Eritrea/Djibouti/Yemen/the Red Sea, and northern Namibia.
										But two of these areas are not actually dust. Which products can help
										you verify this? (Compare these products to the dust RGB to figure this
										out.)</p>
									<form action="#">
										<fieldset>
											<div class="response-group-item correct"><input id="q05a" name="q05"
													value="a" type="checkbox"><label for="q05a"> <strong>a)
													</strong>Visible</label> </div>
											<div class="response-group-item"><input id="q05b" name="q05"
													value="b" type="checkbox"><label for="q05b"> <strong>b)
													</strong>Infrared</label> </div>
											<div class="response-group-item"><input id="q05c" name="q05"
													value="c" type="checkbox"><label for="q05c"> <strong>c)
													</strong>Water vapour</label> </div>
											<div class="response-group-item"><input id="q05d" name="q05"
													value="d" type="checkbox"><label for="q05d"> <strong>d)
													</strong>Severe convection RGB</label> </div>
											<div class="response-group-item"><input id="q05e" name="q05"
													value="e" type="checkbox"><label for="q05e"> <strong>e)
													</strong>Night microphysics RGB</label> </div>
											<div class="response-group-item correct"><input id="q05f" name="q05"
													value="f" type="checkbox"><label for="q05f"> <strong>f)
													</strong>Natural colour RGB</label> </div> <input
												class="submit-button btn btn-primary" name="submit-button"
												value="Done" type="button">
										</fieldset>
									</form>
									<div class="answer">
										<p class="response">The correct answers are a, f.</p>
										<p class="explanation">If you compare the visible and natural colour
											products with the dust RGB, you’ll see that the “dust” area in
											northern Namibia is actually a dry lake bed, and the area in
											northern Chad is the Tibesti Mountains. These have been highlighted
											on the image below in bright green.</p> <img
											src="media/graphics/2016_07_27_0600_dust_tibesti_dry_lake_bed.jpg"
											alt="dust RGB with Tibesti Mountains and dry lake bed in Namibia"
											class="img-responsive center-block">
										<p class="explanation">Both areas show up in dust RGB imagery because of
											the transition from nocturnal cooling to diurnal heating. As the day
											goes on, it becomes clearer that they are not dust. </p>
									</div>
									<div class="message">Please make a selection.</div>
								</div>
							</div>
						</div>
					</div>
					<div class="item">
						<div class="panel panel-default interaction-question">
							<div class="panel-body">
								<div class="question-wrap checkboxes">
									<h4>Question 6 of 8</h4>
									<p>During the day, which features can<strong> only </strong>be identified
										with the natural colour RGB? (View this RGB and compare it with the
										other products to figure this out.) </p>
									<form action="#">
										<fieldset>
											<div class="response-group-item"><input id="q06a" name="q06"
													value="a" type="checkbox"><label for="q06a"> <strong>a)
													</strong>Deserts</label> </div>
											<div class="response-group-item correct"><input id="q06b" name="q06"
													value="b" type="checkbox"><label for="q06b"> <strong>b)
													</strong>Grasslands/forests</label> </div>
											<div class="response-group-item correct"><input id="q06c" name="q06"
													value="c" type="checkbox"><label for="q06c"> <strong>c)
													</strong>Large lakes</label> </div>
											<div class="response-group-item"><input id="q06d" name="q06"
													value="d" type="checkbox"><label for="q06d"> <strong>d)
													</strong>Thick clouds</label> </div>
											<div class="response-group-item correct"><input id="q06e" name="q06"
													value="e" type="checkbox"><label for="q06e"> <strong>e)
													</strong>Ice clouds</label> </div> <input
												class="submit-button btn btn-primary" name="submit-button"
												value="Done" type="button">
										</fieldset>
									</form>
									<div class="answer">
										<p class="response">The correct answers are b, c, e.</p>
										<p class="explanation">Only the natural colour RGB can clearly show
											grasslands/forests, flooded areas, and ice clouds. You can see this
											by comparing Lake Victoria, the grasslands/forests north of it, and
											any of the cyan-coloured clouds on the natural colour RGB with the
											other imagery. </p>
									</div>
									<div class="message">Please make a selection.</div>
								</div>
							</div>
						</div>
					</div>
					<div class="item">
						<div class="panel panel-default interaction-question">
							<div class="panel-body">
								<div class="question-wrap checkboxes">
									<h4>Question 7 of 8</h4>
									<p>Using visible imagery over Ethiopia, the cloud mass there is uniform in
										color and it is difficult to pick out details of the cloud tops and
										relative cloud heights. This is caused by the sun angle. Now view the
										products listed below, and identify those that can be used to
										differentiate the heights of these clouds over Ethiopia.</p>
									<form action="#">
										<fieldset>
											<div class="response-group-item correct"><input id="q07a" name="q07"
													value="a" type="checkbox"><label for="q07a"> <strong>a)
													</strong>Infrared</label> </div>
											<div class="response-group-item correct"><input id="q07b" name="q07"
													value="b" type="checkbox"><label for="q07b"> <strong>b)
													</strong>Water vapour</label> </div>
											<div class="response-group-item correct"><input id="q07c" name="q07"
													value="c" type="checkbox"><label for="q07c"> <strong>c)
													</strong>Dust RGB</label> </div>
											<div class="response-group-item correct"><input id="q07d" name="q07"
													value="d" type="checkbox"><label for="q07d"> <strong>d)
													</strong>Severe convection RGB</label> </div>
											<div class="response-group-item correct"><input id="q07e" name="q07"
													value="e" type="checkbox"><label for="q07e"> <strong>e)
													</strong>Night microphysics RGB</label> </div>
											<div class="response-group-item correct"><input id="q07f" name="q07"
													value="f" type="checkbox"><label for="q07f"> <strong>f)
													</strong>Natural colour RGB</label> </div> <input
												class="submit-button btn btn-primary" name="submit-button"
												value="Done" type="button">
										</fieldset>
									</form>
									<div class="answer">
										<p class="response">The correct answers are a, b, c, d, e, and f.</p>
										<p class="explanation">These six products are made from infrared
											channels (including water vapour, which is in the infrared range) or
											channel differences (partly or in whole), which provide information
											about cloud top temperature and thus, cloud height. Even though the
											night microphysics RGB is calibrated for night-time use, it is still
											capable of seeing cloud height differences during the daytime hours,
											just not as easily at low-levels like it can at night.</p>
									</div>
									<div class="message">Please make a selection.</div>
								</div>
							</div>
						</div>
					</div>
					<div class="item">
						<div class="panel panel-default interaction-question">
							<div class="panel-body">
								<div class="question-wrap radio">
									<h4>Question 8 of 8</h4>
									<p>Which of these four products lets you see the relative cloud levels most
										distinctly?</p>
									<form action="#">
										<fieldset>
											<div class="response-group-item correct"><input id="q08a" name="q08"
													value="a" type="radio"><label for="q08a"> <strong>a)
													</strong>Infrared</label> </div>
											<div class="response-group-item"><input id="q08b" name="q08"
													value="b" type="radio"><label for="q08b"> <strong>b)
													</strong>Dust RGB</label> </div>
											<div class="response-group-item"><input id="q08c" name="q08"
													value="c" type="radio"><label for="q08c"> <strong>c)
													</strong>Severe convection RGB</label> </div>
											<div class="response-group-item"><input id="q08d" name="q08"
													value="d" type="radio"><label for="q08d"> <strong>d)
													</strong>Natural colour RGB</label> </div> <input
												class="submit-button btn btn-primary" name="submit-button"
												value="Done" type="button">
										</fieldset>
									</form>
									<div class="answer">
										<p class="response">The correct answer is a.</p>
										<p class="explanation">In general, the IR channel does a better job of
											differentiating cloud-top heights, and this is especially useful
											when low-level clouds are present.</p>
										<p class="explanation">The severe convection RGB can be useful for
											differentiating cloud-top heights with rapidly changing brightness
											temperatures, but the severe convection RGB cannot see low-level
											clouds well.</p>
										<p class="explanation">If the image in question were taken overnight,
											the infrared and dust RGB would be the only useful products from the
											list. The night microphysics RGB (not listed above) would be the
											most useful for comparisons if this image was taken overnight.</p>
									</div>
									<div class="message">Please make a selection.</div>
								</div>
							</div>
						</div>
					</div>
				</div> <!-- Controls -->
				<div class="print_hide"> <a class="left carousel-control" href="#qslide" role="button"
						data-slide="prev"> <span class="glyphicon glyphicon-chevron-left"
							aria-hidden="true"></span> <span class="sr-only">Previous</span> </a> <a
						class="right carousel-control" href="#qslide" role="button" data-slide="next"> <span
							class="glyphicon glyphicon-chevron-right" aria-hidden="true"></span> <span
							class="sr-only">Next</span> </a> </div>
			</div> <br>
			<p>Be sure that you have answered all of the questions before proceeding to the next section where
				we will talk more specifically about how to differentiate cloud heights and thicknesses, dust,
				and land cover vs. water features.</p>
		</div>
		<div id="page_4-0-0" class="page">
			<h3>Feature Identification</h3>
			<p>In this section, we will look at how atmospheric and surface features appear in the products.
				Each product displays the features slightly differently, and some cannot show all features
				clearly or even at all. To effectively analyse the weather using satellite imagery, you will
				learn to identify the differences found in these products and how to effectively use them for a
				basic weather analysis. To practice this task, you will answer the questions in the sub-sections
				below and then complete a follow-up section where all feature identification concepts are
				incorporated together in an analysis.</p>
		</div>
		<div id="page_4-1-0" class="page">
			<h3 class="sub_head"><small>Feature Identification » </small>Identifying Atmospheric Features</h3>
			<p>You will learn to distinguish clouds in two ways: </p>
			<ul>
				<li>By height: high, mid-level, and low</li>
				<li>By thickness: thick or thin</li>
			</ul>
		</div>
		<div id="page_4-1-1" class="page">
			<h3 class="sub_head"><small>Feature Identification » Identifying Atmospheric Features »
				</small>Cloud Heights</h3>
			<p>The easiest way to determine a cloud’s height is to use the visible channel to determine its type
				based on its texture, shape, and shadows. The cloud type then tells you its height. </p>
			<table class="table table-bordered">
				<tbody>
					<tr>
						<th colspan="1" rowspan="1">
							<p>Type of cloud</p>
						</th>
						<th colspan="1" rowspan="1">
							<p>Height</p>
						</th>
					</tr>
					<tr>
						<td colspan="1" rowspan="1">
							<p>Cirrus, cirrostratus, and cirrocumulus</p>
						</td>
						<td colspan="1" rowspan="1">
							<p>High clouds at 6000-13000 m (~20000-43000 ft)</p>
						</td>
					</tr>
					<tr>
						<td colspan="1" rowspan="1">
							<p>Altocumulus and altostratus </p>
						</td>
						<td colspan="1" rowspan="1">
							<p>Mid-level clouds at 2000-6000 m (~6500-20000ft)</p>
						</td>
					</tr>
					<tr>
						<td colspan="1" rowspan="1">
							<p>Stratocumulus and stratus</p>
						</td>
						<td colspan="1" rowspan="1">
							<p>Low-level clouds at 0-2000 m (0- ~6500ft)</p>
						</td>
					</tr>
				</tbody>
			</table>
			<p>This works for most clouds, but not for those with large vertical extent. Cumuliform clouds can
				be found from 0-13000 m, depending on their stage of development.</p>
			<p>Other factors can complicate cloud identification in visible imagery. For example, as the images
				below show, sun angle can make the same clouds look dramatically different at different times of
				day. Knowing where the sun is with relation to the clouds is the only way to combat this effect.
			</p>
			<div class="tabs-container">
				<ul class="nav nav-tabs" role="tablist" id="tab-set-09">
					<li class="active"><a href="#tab22-0" role="tab" data-toggle="tab"
							class="tab-switch">Visible Morning</a> </li>
					<li><a href="#tab23-0" role="tab" data-toggle="tab" class="tab-switch">Visible Mid-day</a>
					</li>
					<li><a href="#tab24-0" role="tab" data-toggle="tab" class="tab-switch">Visible Evening</a>
					</li>
				</ul>
				<div class="tab-content">
					<h3>Visible Morning</h3>
					<div class="tab-pane fade in active" id="tab22-0">
						<div class="center"><img src="media/graphics/2016_12_19_0600_vis_south.jpg" width="845"
								height="555" alt="EUMETSAT visible over Africa, 0600 UTC 19 Dec 2016" /></div>
					</div>
					<h3>Visible Mid-day</h3>
					<div class="tab-pane fade" id="tab23-0">
						<div class="center"><img src="media/graphics/2016_12_19_1200_vis_south.jpg" width="845"
								height="555" alt="EUMETSAT visible over Africa, 1200 UTC 19 Dec 2016" /></div>
					</div>
					<h3>Visible Evening</h3>
					<div class="tab-pane fade" id="tab24-0">
						<div class="center"><img src="media/graphics/2016_12_19_1800_vis_south.jpg" width="845"
								height="555" alt="EUMETSAT visible over Africa, 1800 UTC 19 Dec 2016" /></div>
					</div>
				</div>
			</div>
			<p>There’s another, more quantitative, way to identify cloud heights—using the brightness
				temperature of clouds in infrared images and RGBs made from those channels. Since IR channels
				are involved, the technique works during both day and night. </p>
			<p>Assuming that tropospheric temperatures decrease with increasing height from the surface,
				lighter-colored clouds are colder and higher, while darker-colored clouds are warmer and lower.
				This rule works for both infrared and water vapour imagery. It’s more difficult to define the
				exact cloud height in RGBs, but we will practice using multiple products together to get an idea
				if clouds are high or low.</p>
			<div class="center"><img src="media/graphics/cloud_types.jpg" width="850" height="540"
					alt="The ten basic cloud types in Earth&#039;s atmosphere." /></div>
			<p>Let’s practice identifying cloud height by using single channel imagery and RGBs and comparing
				the different products.</p>
			<div class="panel panel-default interaction-question">
				<div class="panel-body">
					<div class="question-wrap inlinedropdowns">
						<h4>Question</h4>
						<div class="dynamic-slider container-fluid">
							<div class="row radioslide-controls">
								<form class="as-form" data-path="2017_01_20_00Z_">
									<div class="col-xs-6" style="background: #EDEDED;">
										<h6>Left Side Image</h6>
										<dl class="as-select-list">
											<dt><label>Product:</label></dt>
											<dd> IR <input type="hidden" name="ld" value="ir" /> </dd>
										</dl>
									</div>
									<div class="col-xs-6" style="background: #D9D9D9">
										<h6>Right Side Image</h6>
										<dl class="as-select-list">
											<dt><label>Select Product:</label></dt>
											<dd> <select name="rd">
													<option value="wv" selected>Water Vapour</option>
													<option value="dust">Dust</option>
													<option value="night_micro">Night Microphysics</option>
												</select> </dd>
										</dl>
									</div>
								</form>
							</div>
							<div class="as-stage" style="padding-top:10px;">
								<div class="as-sweeper center-block"> <img
										src="media/graphics/2017_01_20_00Z_NIR.jpg" alt="left side product"
										class="left-as-image img-responsive center-block"> <img
										src="media/graphics/2017_01_20_00Z_WV.jpg" alt="right side product"
										class="right-as-image img-responsive center-block"> </div>
							</div>
						</div>
						<p>Use the slider to compare the clouds at each location in the four products. Then
							identify the height of the clouds at each location.</p>
						<form action="#">
							<fieldset>
								<div class="response-group-item"><strong> a) </strong> Location A: <select
										name="q09a">
										<option>--</option>
										<option>high</option>
										<option> middle</option>
										<option> low</option>
										<option> impossible to tell</option>
									</select> </div>
								<div class="correct response-group-item dropdown_correct answer">low</div>
								<div class="message">Please make a selection.</div>
								<div class="response-group-item"><strong> b) </strong> Location B: <select
										name="q09b">
										<option>--</option>
										<option>high</option>
										<option> middle</option>
										<option> low</option>
										<option> impossible to tell</option>
									</select> </div>
								<div class="correct response-group-item dropdown_correct answer">high</div>
								<div class="message">Please make a selection.</div>
								<div class="response-group-item"><strong> c) </strong> Location C: <select
										name="q09c">
										<option>--</option>
										<option>high</option>
										<option> middle</option>
										<option> low</option>
										<option> impossible to tell</option>
									</select> </div>
								<div class="correct response-group-item dropdown_correct answer">middle</div>
								<div class="message">Please make a selection.</div>
								<div class="response-group-item"><strong> d) </strong> Location D: <select
										name="q09d">
										<option>--</option>
										<option>high</option>
										<option> middle</option>
										<option> low</option>
										<option> impossible to tell</option>
									</select> </div>
								<div class="correct response-group-item dropdown_correct answer">middle</div>
								<div class="message">Please make a selection.</div> <input
									class="submit-button btn btn-primary" name="submit-button" value="Done"
									type="button">
							</fieldset>
						</form>
						<div class="answer">
							<p class="explanation">The warm brightness temperatures in the IR and the greenish
								coloration in the night microphysics RGB tell us that Location A has very low,
								water clouds. The WV channel and dust RGB cannot detect them since they are too
								low.</p>
							<p class="explanation">We know that Location B has high clouds since they are bright
								white in the IR and WV imagery, and red in the night microphysics and dust RGBs.
							</p>
							<p class="explanation">The clouds at Location C are mid-grey in the IR image and
								therefore mid-level. They are brownish to yellowish in the night microphysics
								and dust RGBs but too low to be seen by the WV channel.</p>
							<p class="explanation">The clouds at Location D are mid-grey in the IR imagery,
								brown in the dust RGB, and pink in the night microphysics RGB. They cannot be
								seen in the WV image. These clues tell us that the clouds are slightly higher at
								Location D than Location C but likely still in the middle of the troposphere.
							</p>
						</div>
						<div class="message">Please make a selection.</div>
					</div>
				</div>
			</div>
			<p>The hardest clouds to differentiate are overlapping clouds - especially where low clouds and/or
				fog occurs near snow cover. Snow and low clouds often have similar brightness temperatures,
				especially overnight.</p>
			<p>Another difficulty occurs when the upper cloud is very thin. If the upper cloud is more
				translucent than those below it, the cloud mass brightness temperatures will average out to be
				warmer and thus at a lower altitude. </p>
		</div>
		<div id="page_4-1-2" class="page">
			<h3 class="sub_head"><small>Feature Identification » Identifying Atmospheric Features » </small>
				Cloud Thickness</h3>
			<p>Visible imagery and the natural colour RGB are the most useful products for determining cloud
				thickness. The brightness of the clouds generally indicates their thickness. Thicker clouds tend
				to appear whiter since they reflect more incoming visible light. Very thin clouds can appear
				translucent in visible imagery and cyan in the natural colour RGB, depending on the time of day.
			</p>
			<div class="tabs-container">
				<ul class="nav nav-tabs" role="tablist" id="tab-set-10">
					<li class="active"><a href="#tab25-0" role="tab" data-toggle="tab"
							class="tab-switch">Visible</a> </li>
					<li><a href="#tab26-0" role="tab" data-toggle="tab" class="tab-switch">Natural Colour
							RGB</a> </li>
				</ul>
				<div class="tab-content">
					<h3>Visible</h3>
					<div class="tab-pane fade in active" id="tab25-0">
						<div class="center"><img src="media/graphics/2016_12_24_12Z_Vis_South.jpg" width="845"
								height="555" alt="EUMETSAT visible over Africa, 1200 UTC 24 Dec 2016" /></div>
					</div>
					<h3>Natural Colour RGB</h3>
					<div class="tab-pane fade" id="tab26-0">
						<div class="center"><img src="media/graphics/2016_12_24_12Z_Nat_Colour_South.jpg"
								width="845" height="55"
								alt="EUMETSAT natural colour RGB over Africa, 1200 UTC 24 Dec 2016" /></div>
						<p>Here’s how to determine the thickness of different cloud types in visible and natural
							colour products. </p>
						<table class="table table-bordered">
							<tbody>
								<tr>
									<td colspan="1" rowspan="1">
										<p><strong>Type</strong> </p>
									</td>
									<td colspan="1" rowspan="1">
										<p><strong>Thickness</strong> </p>
									</td>
									<td colspan="1" rowspan="1">
										<p><strong>Appearance</strong> </p>
									</td>
								</tr>
								<tr>
									<td colspan="1" rowspan="1">
										<p>Cumulonimbus</p>
									</td>
									<td colspan="1" rowspan="1">
										<p>Thick</p>
									</td>
									<td colspan="1" rowspan="1">
										<p>Bright white in VIS, cyan in natural colour</p>
									</td>
								</tr>
								<tr>
									<td colspan="1" rowspan="1">
										<p>Cumulus</p>
									</td>
									<td colspan="1" rowspan="1">
										<p>Variably thick</p>
									</td>
									<td colspan="1" rowspan="1">
										<p>Light grey to white in VIS, lighter cyan in natural colour</p>
									</td>
								</tr>
								<tr>
									<td colspan="1" rowspan="1">
										<p>Stratus </p>
									</td>
									<td colspan="1" rowspan="1">
										<p>Variably thin</p>
									</td>
									<td colspan="1" rowspan="1">
										<p>Nearly translucent through mid-grey in VIS, and light cyan to white
											in natural colour</p>
									</td>
								</tr>
								<tr>
									<td colspan="1" rowspan="1">
										<p>Cirrus </p>
									</td>
									<td colspan="1" rowspan="1">
										<p>Thin</p>
									</td>
									<td colspan="1" rowspan="1">
										<p>Translucent in VIS and light cyan in natural colour </p>
									</td>
								</tr>
							</tbody>
						</table>
					</div>
				</div>
			</div>
			<p>Now it’s your turn to identify cloud thickness. </p>
			<div class="panel panel-default interaction-question">
				<div class="panel-body">
					<div class="question-wrap-drag">
						<h4>Question</h4>
						<p><strong>Question 1 of 2</strong> </p>
						<p>Drag each label to a cloud of that thickness in the visible image. </p>
						<div class="drag-container" title="media/graphics/2016_08_24_1200_vis.jpg">
							<div class="image_holder"></div>
							<div class="drag_controls_holder">
								<div class="drag_controls">
									<div class="draggable ui-widget-content ui-draggable drag_item replenish ui-draggable-handle"
										style="position: relative;"><span
											class="glyphicon glyphicon-th"></span>Thick</div>
									<div class="draggable ui-widget-content ui-draggable drag_item replenish ui-draggable-handle"
										style="position: relative;"><span
											class="glyphicon glyphicon-th"></span>Thin</div>
								</div> <input class="done_drag btn btn-primary" value="Done" type="button">
								<input class="reset_drag btn btn-default" value="Reset" type="button">
							</div>
						</div>
						<div class="answer">
							<div class="group">
								<p>The whiter the cloud the thicker it is in the visible imagery. The thickest
									clouds are likely in the Democratic Republic of Congo. The greyer the cloud,
									the thinner it is in the visible imagery. The cirrus clouds in southern DR
									Congo are quite thin, as well as the stratus clouds off the coast of Angola.
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div class="panel panel-default interaction-question">
				<div class="panel-body">
					<div class="question-wrap-drag">
						<h4>Question</h4>
						<p><strong>Question 2 of 2</strong> </p>
						<p>Drag each label to a cloud of that thickness in the natural colour RGB.</p>
						<div class="drag-container" title="media/graphics/2016_08_24_1200_ncol.jpg">
							<div class="image_holder"></div>
							<div class="drag_controls_holder">
								<div class="drag_controls">
									<div class="draggable ui-widget-content ui-draggable drag_item replenish ui-draggable-handle"
										style="position: relative;"><span class="glyphicon glyphicon-th"></span>
										Thick</div>
									<div class="draggable ui-widget-content ui-draggable drag_item replenish ui-draggable-handle"
										style="position: relative;"><span class="glyphicon glyphicon-th"></span>
										Thin</div>
								</div> <input class="done_drag btn btn-primary" value="Done" type="button">
								<input class="reset_drag btn btn-default" value="Reset" type="button">
							</div>
						</div>
						<div class="answer">
							<div class="group">
								<p>You can differentiate between thick and thin ice clouds as well as thick and
									thin water clouds.</p>
								<p>The more saturated the cyan, the thicker the <strong>ice</strong> cloud is in
									the natural colour RGB. The thickest ice clouds are likely in the Democratic
									Republic of Congo, while the cirrus clouds in southern DR Congo are quite
									thin. The greyer and/or whiter-pink the <strong>water</strong> cloud, the
									thinner it is in the natural colour RGB. The stratus clouds off the coast of
									Angola are quite thin. </p>
								<p>Use the image below to differentiate the thicknesses of both water (two
									darker blue tones) and ice (two lighter blue tones) clouds. Within each
									particle type, there are two tones, one darker and one lighter. The darker
									tone is for thicker clouds.</p> <img class="img-responsive center-block"
									src="media/graphics/2016_08_24_1200_ncol_feedback_coloured.jpg"
									alt="Natural Colour RGB with overlays for cloud thicknesses">
								<p>This image was made objectively to help you identify the different cloud
									thicknesses and particle types. This is not an operational product, it is
									for instruction purposes only.</p>
							</div>
						</div>
					</div>
				</div>
			</div>
			<p>It’s significantly more difficult, if not impossible, to identify the thickness of all clouds in
				the other products. For instance, low clouds cannot be seen in the severe convection RGB, so
				their thickness cannot be determined.</p>
			<div class="tabs-container">
				<ul class="nav nav-tabs" role="tablist" id="tab-set-11">
					<li class="active"><a href="#tab27-0" role="tab" data-toggle="tab"
							class="tab-switch">Infrared</a> </li>
					<li><a href="#tab28-0" role="tab" data-toggle="tab" class="tab-switch">Water Vapour</a>
					</li>
					<li><a href="#tab29-0" role="tab" data-toggle="tab" class="tab-switch">Severe Convection
							RGB</a> </li>
					<li><a href="#tab30-0" role="tab" data-toggle="tab" class="tab-switch">Dust RGB</a> </li>
					<li><a href="#tab31-0" role="tab" data-toggle="tab" class="tab-switch">Night Microphysics
							RGB</a> </li>
				</ul>
				<div class="tab-content">
					<h3>Infrared</h3>
					<div class="tab-pane fade in active" id="tab27-0">
						<p>In infrared imagery, the thickness of the cloud is best determined by the cloud type,
							not by the colour of the imagery. Remember colour determines the cloud-top height or
							temperature in this imagery. In the southeast portion of this image (Central African
							Republic and Democratic Republic of Congo), you can see thicker convective clouds.
							In the central portion are cirrus clouds, with thicker clouds in the western
							portions (Mauritania, Senegal, and Mali). Low-level stratus clouds show up in the
							northwest portion of the image over the Atlantic Ocean as well as very faintly in
							the north central portion in Tunisia.</p>
						<div class="center"><img src="media/graphics/2017_11_17_1800_ir.jpg" width="845"
								height="590" alt="EUMETSAT infrared image over Africa, 1800 UTC 17 Nov 2017" />
						</div>
					</div>
					<h3>Water Vapour</h3>
					<div class="tab-pane fade" id="tab28-0">
						<p>Similar to the infrared imagery, the thickness of the clouds cannot be determined by
							the colour of the clouds in the water vapour imagery. It is dependent on the cloud
							type. Be especially careful with the water vapour imagery as it is hard to determine
							where the cloud edges are since this is a consistent 1mm of water vapour surface. It
							is also important to note that low-level clouds are not visible in this imagery.</p>
						<div class="center"><img src="media/graphics/2017_11_17_1800_wv.jpg" width="845"
								height="590"
								alt="EUMETSAT water vapour image over Africa, 1800 UTC 17 Nov 2017" /></div>
					</div>
					<h3>Severe Convection RGB</h3>
					<div class="tab-pane fade" id="tab29-0">
						<p>In the severe convection RGB, a central area of yellow within a cloud surrounded by
							red is very thick. Thin cirrus clouds can be light yellow through red and into pink.
							The less yellow the cloud, the thinner it is.</p>
						<div class="center"><img src="media/graphics/2016_08_24_1200_scon.jpg" width="845"
								height="555"
								alt="EUMETSAT severe convection RGB over Africa, 1200 UTC 24 Aug 2016" /></div>
					</div>
					<h3>Dust RGB</h3>
					<div class="tab-pane fade" id="tab30-0">
						<p>In the dust RGB, dust clouds are magenta. The more transparent the magenta shade, the
							thinner the dust cloud. </p>
						<div class="center"><img src="media/graphics/2016_08_28_1200_dust_north.jpg" width="845"
								height="555" alt="EUMETSAT dust RGB over Africa, 1200 UTC 28 Aug 2016" /></div>
					</div>
					<h3>Night Microphysics RGB</h3>
					<div class="tab-pane fade" id="tab31-0">
						<p>You can determine the thickness of stratus and convective clouds in the night
							microphysics RGB. The greener or lighter blue-grey the stratus clouds, the thicker
							they are. In the image below, the low clouds over Angola are thicker to the east,
							and thinner to the west where the purple is showing through the blue-grey.</p>
						<div class="center"><img src="media/graphics/2016_08_25_0000_night_micro.jpg"
								width="845" height="555"
								alt="EUMETSAT night microphysics RGB over Africa, 0000 UTC 24 Aug 2016" /></div>
						<p>Convective clouds are red. The more saturated the red, the thicker they are. </p>
						<p>Cirrus clouds are thin and appear black in this product. But it's hard to determine
							their exact thickness due to the lack of texture in the black colouration. </p>
					</div>
				</div>
			</div>
		</div>
		<div id="page_4-1-3" class="page">
			<h3 class="sub_head"><small>Feature Identification » Identifying Atmospheric Features » </small>Dust
				Cloud Height/Thickness</h3>
			<p>Low-level atmospheric dust is often more concerning than higher-level tropospheric dust because
				it can result in health and/or economic problems. The height of dust clouds can only be
				determined reliably at night with the dust RGB product.</p>
			<div class="center"><img src="media/graphics/2017_06_06_1800_dust.jpg" width="850" height="606"
					alt="EUMETSAT dust RGB over southern Africa, 0000 UTC 06 Jun 2017" /></div>
			<p>The dust RGB image above has one large area of dust, with differing heights throughout the swath.
				The more blue the dust area, the lower the altitude of the cloud. The more red the dust area,
				the higher the altitude. </p>
			<p>Any given colour of dust in the dust RGB can have varying degrees of saturated colour. The more
				saturated the colour the thicker the dust is. If the bright pink is highly saturated, then it is
				thicker. So, the dust in southern Libya is thicker than the dust in northern Mali. If the
				low-level, purple-blue dust is a more saturated colour it is also thicker. The more diffuse the
				colour the thinner the dust cloud is overall. Therefore, the low-level dust in southeast
				Mauritania is thicker than the low-level dust in central Chad. </p>
		</div>
		<div id="page_4-2-0" class="page">
			<h3 class="sub_head"><small>Feature Identification » </small>Identifying Surface Features</h3>
			<p>In this section, we’ll look at how land features appear in the different products. But first, see
				if you can answer the following questions based on what you’ve learned about the channels and
				RGBs so far. </p>
			<div class="panel panel-default interaction-question">
				<div class="panel-body">
					<div class="question-wrap checkboxes">
						<h4>Question 1 of 3</h4>
						<p>Which products are useful for looking at vegetation in daytime?</p>
						<form action="#">
							<fieldset>
								<div class="response-group-item correct"><input id="q12a" name="q12" value="a"
										type="checkbox"><label for="q12a"> <strong>a) </strong>Visible </label>
								</div>
								<div class="response-group-item correct"><input id="q12b" name="q12" value="b"
										type="checkbox"><label for="q12b"> <strong>b) </strong>IR </label>
								</div>
								<div class="response-group-item"><input id="q12c" name="q12" value="c"
										type="checkbox"><label for="q12c"> <strong>c) </strong>Water
										vapour</label> </div>
								<div class="response-group-item correct"><input id="q12d" name="q12" value="d"
										type="checkbox"><label for="q12d"> <strong>d) </strong>Natural colour
										RGB</label> </div> <input class="submit-button btn btn-primary"
									name="submit-button" value="Done" type="button">
							</fieldset>
						</form>
						<div class="answer">
							<p class="response">The correct answers are a, b, d.</p>
							<p class="explanation">Land features, such as deserts, vegetation, and mountains,
								show up clearly on visible and infrared imagery and the RGB products made from
								them, like the natural colour RGB. Atmospheric moisture typically prevents water
								vapour channels from detecting the ground surface. </p>
						</div>
						<div class="message">Please make a selection.</div>
					</div>
				</div>
			</div>
			<div class="panel panel-default interaction-question">
				<div class="panel-body">
					<div class="question-wrap checkboxes">
						<h4>Question 2 of 3</h4>
						<p>Which products are used if you want to find deserts at night?</p>
						<form action="#">
							<fieldset>
								<div class="response-group-item"><input id="q13a" name="q13" value="a"
										type="checkbox"><label for="q13a"> <strong>a) </strong>Visible </label>
								</div>
								<div class="response-group-item correct"><input id="q13b" name="q13" value="b"
										type="checkbox"><label for="q13b"> <strong>b) </strong>IR </label>
								</div>
								<div class="response-group-item"><input id="q13c" name="q13" value="c"
										type="checkbox"><label for="q13c"> <strong>c) </strong>Water
										vapour</label> </div>
								<div class="response-group-item"><input id="q13d" name="q13" value="d"
										type="checkbox"><label for="q13d"> <strong>d) </strong>Natural colour
										RGB</label> </div>
								<div class="response-group-item correct"><input id="q13e" name="q13" value="e"
										type="checkbox"><label for="q13e"> <strong>e) </strong>Night
										microphysics RGB</label> </div> <input
									class="submit-button btn btn-primary" name="submit-button" value="Done"
									type="button">
							</fieldset>
						</form>
						<div class="answer">
							<p class="response">The correct answers are b, e.</p>
							<p class="explanation">Since the visible channel is not useful at night, the natural
								colour RGB cannot be used. That leaves IR imagery and night microphysics RGB,
								which is made from IR channels. Water vapour imagery is generally not useful for
								seeing surface features at any time of day. </p>
						</div>
						<div class="message">Please make a selection.</div>
					</div>
				</div>
			</div>
			<div class="panel panel-default interaction-question">
				<div class="panel-body">
					<div class="question-wrap radio">
						<h4>Question 3 of 3</h4>
						<p>Which product is best for distinguishing snow and low clouds? </p>
						<form action="#">
							<fieldset>
								<div class="response-group-item"><input id="q14a" name="q14" value="a"
										type="radio"><label for="q14a"> <strong>a) </strong>Visible </label>
								</div>
								<div class="response-group-item"><input id="q14b" name="q14" value="b"
										type="radio"><label for="q14b"> <strong>b) </strong>IR </label> </div>
								<div class="response-group-item"><input id="q14c" name="q14" value="c"
										type="radio"><label for="q14c"> <strong>c) </strong>Water vapour</label>
								</div>
								<div class="response-group-item correct"><input id="q14d" name="q14" value="d"
										type="radio"><label for="q14d"> <strong>d) </strong>Natural colour
										RGB</label> </div>
								<div class="response-group-item"><input id="q14e" name="q14" value="e"
										type="radio"><label for="q14e"> <strong>e) </strong>Night microphysics
										RGB</label> </div> <input class="submit-button btn btn-primary"
									name="submit-button" value="Done" type="button">
							</fieldset>
						</form>
						<div class="answer">
							<p class="response">The correct answer is d.</p>
							<p class="explanation">Features look realistic in the natural colour RGB except for
								snow, which is cyan helping you distinguish it from clouds. </p>
						</div>
						<div class="message">Please make a selection.</div>
					</div>
				</div>
			</div>
			<p>Let’s look more in depth at how different land features appear in the various products. </p>
		</div>
		<div id="page_4-2-1" class="page">
			<h3 class="sub_head"><small>Feature Identification » Identifying Surface Features » </small>Deserts
			</h3>
			<p>To identify deserts in visible imagery, look for lightly coloured surface areas. </p>
			<p>Desert surfaces are sensitive to the diurnal heating cycle, so you can identify them in infrared
				imagery by animating the imagery and looking for areas with rapid temperature changes after
				sunrise and sunset. </p>
			<div class="tabs-container">
				<ul class="nav nav-tabs" role="tablist" id="tab-set-12">
					<li class="active"><a href="#tab32-0" role="tab" data-toggle="tab"
							class="tab-switch">Visible</a> </li>
					<li><a href="#tab33-0" role="tab" data-toggle="tab" class="tab-switch">Infrared</a> </li>
				</ul>
				<div class="tab-content">
					<h3>Visible</h3>
					<div class="tab-pane fade in active" id="tab32-0">
						<div class="center"><a href="media/loops/2016_06_15_0000_vis_north/index.htm"
								class="module_hide datalooper"><img
									src="media/loops/2016_06_15_0000_vis_north/2016_06_15_0000_vis_north.jpg"
									alt="EUMETSAT visible image over Africa, 0000-1200 UTC 15 Jun 2016"
									class="img-responsive center-block" /></a>
							<div class="print_hide embed-responsive center-block"
								style="padding-bottom:80.355029585799%"><iframe
									src="media/loops/2016_06_15_0000_vis_north/index.htm" frameborder="0"
									class="embed-responsive-item"></iframe></div>
						</div>
					</div>
					<h3>Infrared</h3>
					<div class="tab-pane fade" id="tab33-0">
						<div class="center"><a href="media/loops/2016_06_15_0000_ir/index.htm"
								class="module_hide datalooper"><img
									src="media/loops/2016_06_15_0000_ir/2016_06_15_0000_ir.jpg"
									alt="EUMETSAT infrared loop over Africa, 0000 through 1200 UTC 15 Jun 2016"
									class="img-responsive center-block" /></a>
							<div class="print_hide embed-responsive center-block"
								style="padding-bottom:80.355029585799%"><iframe
									src="media/loops/2016_06_15_0000_ir/index.htm" frameborder="0"
									class="embed-responsive-item"></iframe></div>
						</div>
					</div>
				</div>
			</div>
			<p>Here’s how desert appears in the RGBs.</p>
			<ul>
				<li>Natural Colour: Typically light brown to tan</li>
				<li>Dust: Light blue during the day and shades of pale yellow at night </li>
				<li>Night Microphysics: Magenta to lighter pink at night</li>
			</ul>
			<div class="tabs-container">
				<ul class="nav nav-tabs" role="tablist" id="tab-set-13">
					<li class="active"><a href="#tab34-0" role="tab" data-toggle="tab"
							class="tab-switch">Natural Colour RGB</a> </li>
					<li><a href="#tab35-0" role="tab" data-toggle="tab" class="tab-switch">Dust RGB (Day)</a>
					</li>
					<li><a href="#tab36-0" role="tab" data-toggle="tab" class="tab-switch">Dust RGB (Night)</a>
					</li>
					<li><a href="#tab37-0" role="tab" data-toggle="tab" class="tab-switch">Night
							Microphysics</a> </li>
				</ul>
				<div class="tab-content">
					<h3>Natural Colour RGB</h3>
					<div class="tab-pane fade in active" id="tab34-0">
						<div class="center"><img src="media/graphics/2016_01_31_1200_ncol.jpg" width="845"
								height="446"
								alt="EUMETSAT natural colour RGB over Africa, 1200 UTC 31 Jan 2016" /></div>
					</div>
					<h3>Dust RGB (Day)</h3>
					<div class="tab-pane fade" id="tab35-0">
						<div class="center"><img src="media/graphics/2016_01_31_1200_dust.jpg" width="845"
								height="446" alt="EUMETSAT dust RGB over Africa, 1200 UTC 31 Jan 2016" /></div>
					</div>
					<h3>Dust RGB (Night)</h3>
					<div class="tab-pane fade" id="tab36-0">
						<div class="center"><img src="media/graphics/2016_01_30_1800_dust.jpg" width="845"
								height="446" alt="EUMETSAT dust RGB over Africa, 1800 UTC 30 Jan 2016" /></div>
					</div>
					<h3>Night Microphysics</h3>
					<div class="tab-pane fade" id="tab37-0">
						<div class="center"><img src="media/graphics/2016_01_30_1800_ncmp.jpg" width="845"
								height="446"
								alt="EUMETSAT night microphysics RGB over Africa, 1800 UTC 30 Jan 2016" /></div>
					</div>
				</div>
			</div>
		</div>
		<div id="page_4-2-2" class="page">
			<h3 class="sub_head"><small>Feature Identification » Identifying Surface Features » </small>
				Vegetation</h3>
			<p>Vegetated surfaces are darker than deserts in visible imagery. In infrared imagery, the
				temperature of deserts varies more with diurnal heating than vegetated areas. So vegetated areas
				are cooler in daytime and warmer at night than deserts. In the natural colour RGB, vegetated
				areas are green. </p>
			<div class="tabs-container">
				<ul class="nav nav-tabs" role="tablist" id="tab-set-14">
					<li class="active"><a href="#tab38-0" role="tab" data-toggle="tab"
							class="tab-switch">Visible</a> </li>
					<li><a href="#tab39-0" role="tab" data-toggle="tab" class="tab-switch">Infrared (Day)</a>
					</li>
					<li><a href="#tab40-0" role="tab" data-toggle="tab" class="tab-switch">Infrared (Night)</a>
					</li>
					<li><a href="#tab41-0" role="tab" data-toggle="tab" class="tab-switch">Natural colour
							RGB</a> </li>
				</ul>
				<div class="tab-content">
					<h3>Visible</h3>
					<div class="tab-pane fade in active" id="tab38-0">
						<div class="center"><img src="media/graphics/2016_06_26_12Z_vis_south.jpg" width="845"
								height="555"
								alt="EUMETSAT visible over southern Africa, 1200 UTC 26 Jun 2016" /></div>
					</div>
					<h3>Infrared (Day)</h3>
					<div class="tab-pane fade" id="tab39-0">
						<div class="center"><img src="media/graphics/2016_06_26_12Z_nir_south.jpg" width="845"
								height="555"
								alt="EUMETSAT infrared over southern Africa, 1200 UTC 26 Jun 2016" /></div>
					</div>
					<h3>Infrared (Night)</h3>
					<div class="tab-pane fade" id="tab40-0">
						<div class="center"><img src="media/graphics/2016_06_26_00Z_nir_south.jpg" width="845"
								height="555"
								alt="EUMETSAT infrared over southern Africa, 0000 UTC 26 Jun 2016" /></div>
					</div>
					<h3>Natural colour RGB</h3>
					<div class="tab-pane fade" id="tab41-0">
						<div class="center"><img src="media/graphics/2016_06_26_1200_ncol.jpg" width="845"
								height="555"
								alt="EUMETSAT natural colour RGB over Africa, 1200 UTC 26 Jun 2016" /></div>
					</div>
				</div>
			</div>
		</div>
		<div id="page_4-2-3" class="page">
			<h3 class="sub_head"><small>Feature Identification » Identifying Surface Features » </small> Water
				Bodies</h3>
			<p>Bodies of water like oceans, large lakes, and even wide rivers are easy to see on most satellite
				products. The main exception is WV imagery, which cannot see to the surface. </p>
			<p>Water temperatures do not change dramatically during the diurnal heating cycle like land surface
				temperatures do. Therefore, water is typically cooler than the surrounding land surfaces during
				daytime and has a whiter appearance in the infrared images below. </p>
			<div class="center"><img src="media/graphics/2016_06_26_12Z_nir_south.jpg" width="845" height="555"
					alt="EUMETSAT infrared over southern Africa, 1200 UTC 26 Jun 2016" /></div>
			<p>At night, when land surfaces cool rapidly, their temperatures may go below that of water. This
				means that water will have a warmer brightness temperature and appear darker than the
				surrounding land. </p>
			<div class="center"><img src="media/graphics/2016_06_26_00Z_nir_south.jpg" width="845" height="555"
					alt="EUMETSAT infrared over southern Africa, 0000 UTC 26 Jun 2016" /></div>
			<p>Occasionally, water and land temperatures are so similar that water bodies are completely
				camouflaged. That’s the case with Lake Malawi in the image below, which we can barely detect.
				However, in the previous image, you can find Lake Malawi quite readily on the border between
				Malawi, Tanzania, and Mozambique.</p>
			<div class="center"><img src="media/graphics/2016_06_26_06Z_nir_south.jpg" width="845" height="555"
					alt="EUMETSAT infrared over southern Africa, 0600 UTC 26 Jun 2016" /></div>
			<p>Let’s take a look at how water bodies appear in RGBs compared to VIS and IR imagery. In the
				slider interactions below, the IR image always displays first. Select the other images to
				compare them to it. </p>
			<p>Here are images from mid-day. </p>
			<div class="dynamic-slider container-fluid">
				<div class="row radioslide-controls">
					<form class="as-form" data-path="2016_06_26_12Z_">
						<div class="col-xs-6" style="background: #EDEDED;">
							<h6>Left Side Image</h6>
							<dl class="as-select-list">
								<dt><label>Product:</label></dt>
								<dd> IR <input type="hidden" name="ld" value="nir_south" /> </dd>
							</dl>
						</div>
						<div class="col-xs-6" style="background: #D9D9D9">
							<h6>Right Side Image</h6>
							<dl class="as-select-list">
								<dt><label>Select Product:</label></dt>
								<dd> <select name="rd">
										<option value="vis_south" selected>Visible</option>
										<option value="dust_south">Dust</option>
										<option value="convection_south">Severe Convection</option>
										<option value="Nat_colour_south">Natural Colour</option>
									</select> </dd>
							</dl>
						</div>
					</form>
				</div>
				<div class="as-stage row" style="padding-top:10px; padding-bottom: 10px;">
					<div class="as-sweeper center-block" style="max-width:845px"> <img
							class="left-as-image img-responsive center-block"
							src="media/graphics/2016_06_26_12Z_vis_south.jpg" alt="left side product"> <img
							class="right-as-image img-responsive center-block"
							src="media/graphics/2016_06_26_12Z_NIR_south.jpg" alt="right side product"> </div>
				</div>
			</div>
			<p>Now look at midnight scenes. </p>
			<div class="dynamic-slider container-fluid">
				<div class="row radioslide-controls">
					<form class="as-form" data-path="2016_06_26_00Z_">
						<div class="col-xs-6" style="background: #EDEDED;">
							<h6>Left Side Image</h6>
							<dl class="as-select-list">
								<dt><label>Product:</label></dt>
								<dd> IR <input type="hidden" name="ld" value="nir_south" /> </dd>
							</dl>
						</div>
						<div class="col-xs-6" style="background: #D9D9D9">
							<h6>Right Side Image</h6>
							<dl class="as-select-list">
								<dt><label>Select Product:</label></dt>
								<dd> <select name="rd">
										<option value="dust_south">Dust</option>
										<option value="convection_south">Severe Convection</option>
										<option value="night_microphysics_south">Night Microphysics</option>
									</select> </dd>
							</dl>
						</div>
					</form>
				</div>
				<div class="as-stage row" style="padding-top:10px; padding-bottom: 10px;">
					<div class="as-sweeper center-block" style="max-width:845px"> <img
							class="left-as-image img-responsive center-block"
							src="media/graphics/2016_06_26_00Z_nir_south.jpg" alt="left side product"> <img
							class="right-as-image img-responsive center-block"
							src="media/graphics/2016_06_26_00Z_night_microphysics_south.jpg"
							alt="right side product"> </div>
				</div>
			</div>
			<p>Finally, let’s look at the 0600Z imagery. At this time, the sun has recently risen which rapidly
				changes the colors in some of the imagery. In some cases the water bodies remain warmer/colder
				than the surroundings, while in others, the land and water become nearly indistinguishable.</p>
			<div class="dynamic-slider container-fluid">
				<div class="row radioslide-controls">
					<form class="as-form" data-path="2016_06_26_06Z_">
						<div class="col-xs-6" style="background: #EDEDED;">
							<h6>Left Side Image</h6>
							<dl class="as-select-list">
								<dt><label>Product:</label></dt>
								<dd> IR <input type="hidden" name="ld" value="nir_south" /> </dd>
							</dl>
						</div>
						<div class="col-xs-6" style="background: #D9D9D9">
							<h6>Right Side Image</h6>
							<dl class="as-select-list">
								<dt><label>Select Product:</label></dt>
								<dd> <select name="rd">
										<option value="vis_south" selected>Visible</option>
										<option value="dust_south">Dust</option>
										<option value="convection_south">Severe Convection</option>
										<option value="nat_colour_south">Natural Colour</option>
									</select> </dd>
							</dl>
						</div>
					</form>
				</div>
				<div class="as-stage row" style="padding-top:10px; padding-bottom: 10px;">
					<div class="as-sweeper center-block" style="max-width:845px"> <img
							class="left-as-image img-responsive center-block"
							src="media/graphics/2016_06_26_06Z_nir_south.jpg" alt="left side product"> <img
							class="right-as-image img-responsive center-block"
							src="media/graphics/2016_06_26_06Z_vis_south.jpg" alt="right side product"> </div>
				</div>
			</div>
			<div class="panel panel-default interaction-question">
				<div class="panel-body">
					<div class="question-wrap inlinedropdowns">
						<h4>Question</h4>
						<p>For each product listed below, indicate the colour you would expect water to be
							during each time of the day. (Use the above sliders to help you answer these
							questions)</p>
						<p><strong>During the day:</strong> </p>
						<form action="#">
							<fieldset>
								<div class="response-group-item"><strong> a) </strong> Severe Convection <select
										name="q15a">
										<option>--</option>
										<option>blue</option>
										<option> purple</option>
										<option> yellow</option>
										<option> not visible</option>
									</select> </div>
								<div class="correct response-group-item dropdown_correct answer">purple</div>
								<div class="response-group-item"><strong> b) </strong> Dust <select name="q15b">
										<option>--</option>
										<option>light blue</option>
										<option> purple</option>
										<option> bright pink</option>
										<option> not visible</option>
									</select> </div>
								<div class="correct response-group-item dropdown_correct answer">light blue
								</div>
								<div class="response-group-item"><strong> c) </strong> Natural Colour <select
										name="q15c">
										<option>--</option>
										<option>blue</option>
										<option> green</option>
										<option> tan</option>
										<option> not visible</option>
									</select> </div>
								<div class="correct response-group-item dropdown_correct answer">blue</div>
								<div class="response-group-item"><strong> d) </strong> Night Microphysics
									<select name="q15d">
										<option>--</option>
										<option>blue</option>
										<option> purple</option>
										<option> green</option>
										<option> not visible</option>
									</select> </div>
								<div class="correct response-group-item dropdown_correct answer">blue</div> <br>
								<p><strong>During the night:</strong></p>
								<div class="response-group-item"><strong> a) </strong> Severe Convection <select
										name="q15d">
										<option>--</option>
										<option> blue</option>
										<option> purple</option>
										<option> yellow</option>
										<option> not visible</option>
									</select> </div>
								<div class="correct response-group-item dropdown_correct answer">not visible
								</div>
								<div class="response-group-item"><strong> b) </strong> Dust <select name="q15e">
										<option>--</option>
										<option>light blue</option>
										<option> purple</option>
										<option> bright pink</option>
										<option> not visible</option>
									</select> </div>
								<div class="correct response-group-item dropdown_correct answer">light blue
								</div>
								<div class="response-group-item"><strong> c) </strong> Natural Colour <select
										name="q15f">
										<option>--</option>
										<option>blue</option>
										<option> green</option>
										<option> tan</option>
										<option> not visible</option>
									</select> </div>
								<div class="correct response-group-item dropdown_correct answer">not visible
								</div>
								<div class="response-group-item"><strong> d) </strong> Night Microphysics
									<select name="q15g">
										<option>--</option>
										<option>blue</option>
										<option> purple</option>
										<option> green</option>
										<option> not visible</option>
									</select> </div>
								<div class="correct response-group-item dropdown_correct answer">blue</div>
								<div class="message">Please make a selection.</div> <input
									class="submit-button btn btn-primary" name="submit-button" value="Done"
									type="button">
							</fieldset>
						</form>
						<div class="answer">
							<p class="explanation">If you haven’t already done so, verify your answers with the
								imagery above. Use the 12Z for the daytime questions and the 00Z for the
								nighttime questions.</p>
						</div>
						<div class="message">Please make a selection.</div>
					</div>
				</div>
			</div>
		</div>
		<div id="page_4-2-4" class="page">
			<h3 class="sub_head"><small>Feature Identification » Identifying Surface Features » </small> Snow
			</h3>
			<p>Although snow on the ground is uncommon in low elevation Africa, it can still be challenging to
				distinguish it from low clouds. You can do several things to differentiate snow on the ground
				from low clouds:</p>
			<ul>
				<li>Animate the imagery, looking for how the features change over time. Snow cover often lasts
					for longer periods without much change in shape, while clouds (as seen by their shape, size,
					and texture) tend to change more rapidly. </li>
				<li>Check the Natural Colour RGB in which snow cover and water clouds are different colours—snow
					is cyan while clouds are white.</li>
			</ul>
			<p>In the visible imagery below, there is snow in Lesotho, but it is impossible to detect without
				further investigation. Compare the visible to the natural colour RGB to find it below.</p>
			<div class="image-sweep center-block"> <img class="img-responsive center-block"
					src="media/graphics/2016_06_15_0600_vis_south.jpg" alt="left side product"> <img
					class="img-responsive center-block" src="media/graphics/2016_06_15_0600_ncol_south.jpg"
					alt="right side product"> </div>
			<p>In mountainous regions, like the Atlas Mountains outlined in yellow, snow often has a dendritic
				(branched) pattern like that shown below. Clouds rarely look like this—only when they’re heavily
				influenced by topographic features.</p>
			<div class="center"><img src="media/graphics/2016_12_21_1200_vis_zoom.jpg" width="845" height="420"
					alt="EUMETSAT visible imagery over Africa, 1200 UTC 21 Dec 2016" /></div>
		</div>
		<div id="page_5-0-0" class="page">
			<h3>Exercise 1</h3>
			<p>This section lets you integrate the skills that you’ve learned. We’ll present different products
				and ask you to identify them and the features displayed. </p>
			<div class="panel panel-default interaction-question">
				<div class="panel-body">
					<div class="question-wrap radio">
						<h4>Question 1 of 3</h4>
						<div class="center"><img src="media/graphics/2015_12_17_0600_scon.jpg" width="845"
								height="555"
								alt="EUMETSAT severe convection RGB over Africa, 0600 UTC 17 Dec 2015" /></div>
						<p> What product is this?</p>
						<form action="#">
							<fieldset>
								<div class="response-group-item"><input id="q16a" name="q16" value="a"
										type="radio"><label for="q16a"> <strong>a) </strong>Visible</label>
								</div>
								<div class="response-group-item"><input id="q16b" name="q16" value="b"
										type="radio"><label for="q16b"> <strong>b) </strong>Infrared</label>
								</div>
								<div class="response-group-item"><input id="q16c" name="q16" value="c"
										type="radio"><label for="q16c"> <strong>c) </strong>Water vapour</label>
								</div>
								<div class="response-group-item"><input id="q16d" name="q16" value="d"
										type="radio"><label for="q16d"> <strong>d) </strong>Dust RGB</label>
								</div>
								<div class="response-group-item correct"><input id="q16e" name="q16" value="e"
										type="radio"><label for="q16e"> <strong>e) </strong>Severe convection
										RGB</label> </div>
								<div class="response-group-item"><input id="q16f" name="q16" value="f"
										type="radio"><label for="q16f"> <strong>f) </strong>Night microphysics
										RGB</label> </div>
								<div class="response-group-item"><input id="q16g" name="q16" value="g"
										type="radio"><label for="q16g"> <strong>g) </strong>Natural colour
										RGB</label> </div> <input class="submit-button btn btn-primary"
									name="submit-button" value="Done" type="button">
							</fieldset>
						</form>
						<div class="answer">
							<p class="response">The correct answer is e.</p>
							<p class="explanation">The yellow cloud tops and overall blue and pink tones
								indicate that this is a severe convection RGB. </p>
						</div>
						<div class="message">Please make a selection.</div>
					</div>
				</div>
			</div>
			<div class="show-after" style="display: none;">
				<div class="panel panel-default interaction-question">
					<div class="panel-body">
						<div class="question-wrap checkboxes">
							<h4>Question 2 of 3</h4>
							<p>Of the following products, which will show a similar pattern to this severe
								convection RGB where there is more definition/data depth on the eastern half of
								the image? Check <strong>all</strong> that apply.</p>
							<form action="#">
								<fieldset>
									<div class="response-group-item"><input id="q17a" name="q17" value="a"
											type="checkbox"><label for="q17a"> <strong>a)
											</strong>Visible</label> </div>
									<div class="response-group-item"><input id="q17b" name="q17" value="b"
											type="checkbox"><label for="q17b"> <strong>b)
											</strong>Infrared</label> </div>
									<div class="response-group-item"><input id="q17c" name="q17" value="c"
											type="checkbox"><label for="q17c"> <strong>c) </strong>Water
											vapour</label> </div>
									<div class="response-group-item"><input id="q17d" name="q17" value="d"
											type="checkbox"><label for="q17d"> <strong>d) </strong>Dust
											RGB</label> </div>
									<div class="response-group-item"><input id="q17e" name="q17" value="e"
											type="checkbox"><label for="q17e"> <strong>e) </strong>Night
											Microphysics RGB</label> </div>
									<div class="response-group-item"><input id="q17f" name="q17" value="f"
											type="checkbox"><label for="q17f"> <strong>f) </strong>Natural
											Colour RGB</label> </div> <input
										class="submit-button btn btn-primary" name="submit-button" value="Done"
										type="button">
								</fieldset>
							</form>
							<div class="answer"> <!-- <p class="response">The correct answers are a, f.</p> -->
								<p class="explanation"> Continue to the next question to learn the answer.</p>
							</div>
							<div class="message">Please make a selection.</div>
						</div>
					</div>
				</div>
			</div>
			<div class="show-after" style="display: none;">
				<div class="panel panel-default interaction-question">
					<div class="panel-body">
						<div class="question-wrap radio">
							<h4>Question 3 of 3</h4>
							<p> In which part of the image is it night?</p>
							<form action="#">
								<fieldset>
									<div class="response-group-item"><input id="q18a" name="q18" value="a"
											type="radio"><label for="q18a"> <strong>a) </strong>Northern
											portion</label> </div>
									<div class="response-group-item"><input id="q18b" name="q18" value="b"
											type="radio"><label for="q18b"> <strong>b) </strong>Eastern
											portion</label> </div>
									<div class="response-group-item"><input id="q18c" name="q18" value="c"
											type="radio"><label for="q18c"> <strong>c) </strong>Southern
											portion</label> </div>
									<div class="response-group-item correct"><input id="q18d" name="q18"
											value="d" type="radio"><label for="q18d"> <strong>d)
											</strong>Western portion</label> </div>
									<div class="response-group-item"><input id="q18e" name="q18" value="e"
											type="radio"><label for="q18e"> <strong>e) </strong>The entire image
											is in full sunlight</label> </div> <input
										class="submit-button btn btn-primary" name="submit-button" value="Done"
										type="button">
								</fieldset>
							</form>
							<div class="answer">
								<p class="response">The correct answer is d.</p>
								<p class="explanation">The flat magenta/pink colour of the clouds in the western
									portion of the product make it clear that it is night. The land surface also
									shows a flat blue colouration not more gradation of colours. Both the
									visible and the natural colour RGB products have no use during the nighttime
									hours. </p>
							</div>
							<div class="message">Please make a selection.</div>
						</div>
					</div>
				</div>
			</div>
		</div>
		<div id="page_6-0-0" class="page">
			<h3>Exercise 2</h3>
			<div class="panel panel-default interaction-question">
				<div class="panel-body">
					<div class="question-wrap checkboxes">
						<h4>Question 1 of 2</h4>
						<p>If you are looking for atmospheric dust and don’t have access to the Dust RGB, which
							product(s) could be used instead? Check <strong>all</strong> that apply.</p>
						<form action="#">
							<fieldset>
								<div class="response-group-item correct"><input id="q19a" name="q19" value="a"
										type="checkbox"><label for="q19a"> <strong>a) </strong>Visible</label>
								</div>
								<div class="response-group-item correct"><input id="q19b" name="q19" value="b"
										type="checkbox"><label for="q19b"> <strong>b) </strong>Infrared</label>
								</div>
								<div class="response-group-item"><input id="q19c" name="q19" value="c"
										type="checkbox"><label for="q19c"> <strong>c) </strong>Water
										vapour</label> </div>
								<div class="response-group-item"><input id="q19d" name="q19" value="d"
										type="checkbox"><label for="q19d"> <strong>d) </strong>Severe convection
										RGB</label> </div>
								<div class="response-group-item"><input id="q19e" name="q19" value="e"
										type="checkbox"><label for="q19e"> <strong>e) </strong>Night
										microphysics RGB</label> </div>
								<div class="response-group-item correct"><input id="q19f" name="q19" value="f"
										type="checkbox"><label for="q19f"> <strong>f) </strong>Natural colour
										RGB</label> </div> <input class="submit-button btn btn-primary"
									name="submit-button" value="Done" type="button">
							</fieldset>
						</form>
						<div class="answer">
							<p class="response">The correct answers are a, b, f.</p>
							<p class="explanation">During daytime, these products can show some indication of
								dust. But none can do so reliably at night except the dust RGB. </p>
						</div>
						<div class="message">Please make a selection.</div>
					</div>
				</div>
			</div>
			<div class="show-after" style="display: none;">
				<div class="panel panel-default interaction-question">
					<div class="panel-body">
						<div class="question-wrap checkboxes">
							<h4>Question 2 of 2</h4>
							<p>Which statement(s) are true of the dust RGB? Check <strong>all</strong> that
								apply.</p>
							<form action="#">
								<fieldset>
									<div class="response-group-item"><input id="q20a" name="q20" value="a"
											type="checkbox"><label for="q20a"> <strong>a) </strong>Dust is
											easier to identify at night than during the day</label> </div>
									<div class="response-group-item"><input id="q20b" name="q20" value="b"
											type="checkbox"><label for="q20b"> <strong>b) </strong>You can
											easily differentiate dust from snow cover</label> </div>
									<div class="response-group-item correct"><input id="q20c" name="q20"
											value="c" type="checkbox"><label for="q20c"> <strong>c) </strong>You
											can determine dust thickness at night but not during the day</label>
									</div>
									<div class="response-group-item"><input id="q20d" name="q20" value="d"
											type="checkbox"><label for="q20d"> <strong>d) </strong>You can
											identify dust height by the intensity of the pink/magenta colours.
										</label> </div> <input class="submit-button btn btn-primary"
										name="submit-button" value="Done" type="button">
								</fieldset>
							</form>
							<div class="answer">
								<p class="response">The correct answer is c.</p>
								<p class="explanation">The only product that can help you determine dust height
									is the dust RGB and this is only possible at night. The height is indicated
									by the amount of blue or red: the bluer the dust, the lower the altitude,
									and the redder the dust, the higher the altitude. </p>
							</div>
							<div class="message">Please make a selection.</div>
						</div>
					</div>
				</div>
			</div>
		</div>
		<div id="page_7-0-0" class="page">
			<h3>Exercise 3</h3>
			<p>The questions below are based on the following products. View and compare them by selecting a
				different image for each radio button. Note that the imagery and products are no longer labeled
				for you. This means you will have to differentiate the imagery from each other before moving
				through the exercise for most effective learning. Write down which option number is which
				product for reference along the way.</p>
			<div class="dynamic-slider container-fluid">
				<div class="row radioslide-controls">
					<form class="as-form" data-path="2017_08_16_0630_">
						<div class="col-xs-6" style="background: #EDEDED;">
							<h6>Left Side Image</h6>
							<dl class="as-select-list">
								<dt><label>Product:</label></dt>
								<dd> <select name="ld">
										<option value="wv" selected>Option 1</option>
										<option value="night_micro">Option 2</option>
										<option value="convection">Option 3</option>
										<option value="dust">Option 4</option>
										<option value="vis">Option 5</option>
										<option value="natural_colour">Option 6</option>
										<option value="nir">Option 7</option>
									</select> </dd>
							</dl>
						</div>
						<div class="col-xs-6" style="background: #D9D9D9">
							<h6>Right Side Image</h6>
							<dl class="as-select-list">
								<dt><label>Select Product:</label></dt>
								<dd> <select name="rd">
										<option value="wv" selected>Option 1</option>
										<option value="night_micro">Option 2</option>
										<option value="convection">Option 3</option>
										<option value="dust">Option 4</option>
										<option value="vis">Option 5</option>
										<option value="natural_colour">Option 6</option>
										<option value="nir">Option 7</option>
									</select> </dd>
							</dl>
						</div>
					</form>
				</div>
				<div class="as-stage row" style="padding-top:10px; padding-bottom: 10px;">
					<div class="as-sweeper center-block" style="max-width:845px"> <img
							class="left-as-image img-responsive center-block"
							src="media/graphics/2016_01_30_18Z_Vis.jpg" alt="left side product"> <img
							class="right-as-image img-responsive center-block"
							src="media/graphics/2016_01_30_18Z_NIR.jpg" alt="right side product"> </div>
				</div>
			</div> <!-- Carousel Qs -->
			<div id="qslide2" class="carousel slide" data-ride="carousel" data-wrap="false"
				data-interval="false"> <!-- Indicators -->
				<ol class="carousel-indicators print_hide">
					<li data-target="#qslide2" data-slide-to="0" class="active"></li>
					<li data-target="#qslide2" data-slide-to="1"></li>
					<li data-target="#qslide2" data-slide-to="2"></li>
					<li data-target="#qslide2" data-slide-to="3"></li>
					<li data-target="#qslide2" data-slide-to="4"></li>
					<li data-target="#qslide2" data-slide-to="5"></li>
					<li data-target="#qslide2" data-slide-to="6"></li>
					<li data-target="#qslide2" data-slide-to="7"></li>
				</ol> <!-- Wrapper for slides -->
				<div class="carousel-inner" role="listbox">
					<div class="item active">
						<div class="panel panel-default interaction-question">
							<div class="panel-body">
								<div class="question-wrap radio">
									<h4>Question 1 of 8</h4>
									<p>What time of day are the images from? </p>
									<form action="#">
										<fieldset>
											<div class="response-group-item correct"><input id="q21a" name="q21"
													value="a" type="radio"><label for="q21a"> <strong>a)
													</strong>Dawn (early morning)</label> </div>
											<div class="response-group-item"><input id="q21b" name="q21"
													value="b" type="radio"><label for="q21b"> <strong>b)
													</strong>Mid-day</label> </div>
											<div class="response-group-item"><input id="q21c" name="q21"
													value="c" type="radio"><label for="q21c"> <strong>c)
													</strong>Dusk (transition of day to night)</label> </div>
											<div class="response-group-item"><input id="q21d" name="q21"
													value="d" type="radio"><label for="q21d"> <strong>d)
													</strong>Midnight</label> </div> <input
												class="submit-button btn btn-primary" name="submit-button"
												value="Done" type="button">
										</fieldset>
									</form>
									<div class="answer">
										<p class="response">The correct answer is a.</p>
										<p class="explanation">The small amount of dark in the bottom left
											(western) corner of the visible and natural colour products tells us
											that it’s dawn.</p>
									</div>
									<div class="message">Please make a selection.</div>
								</div>
							</div>
						</div>
					</div>
					<div class="item">
						<div class="panel panel-default interaction-question">
							<div class="panel-body">
								<div class="question-wrap radio">
									<h4>Question 2 of 8</h4>
									<p>What month do you think it is in these images? </p>
									<form action="#">
										<fieldset>
											<div class="response-group-item"><input id="q22a" name="q22"
													value="a" type="radio"><label for="q22a"> <strong>a)
													</strong>January</label> </div>
											<div class="response-group-item"><input id="q22b" name="q22"
													value="b" type="radio"><label for="q22b"> <strong>b)
													</strong>April</label> </div>
											<div class="response-group-item correct"><input id="q22c" name="q22"
													value="c" type="radio"><label for="q22c"> <strong>c)
													</strong>August</label> </div>
											<div class="response-group-item"><input id="q22d" name="q22"
													value="d" type="radio"><label for="q22d"> <strong>d)
													</strong>November</label> </div>
											<div class="response-group-item"><input id="q22e" name="q22"
													value="e" type="radio"><label for="q22e"> <strong>e)
													</strong>Cannot tell</label> </div> <input
												class="submit-button btn btn-primary" name="submit-button"
												value="Done" type="button">
										</fieldset>
									</form>
									<div class="answer">
										<p class="response">The correct answer is c.</p>
										<p class="explanation">Based on the slope of the terminator, the sun is
											north of the equator. This means the Northern Hemisphere is in the
											summer month of August.</p>
									</div>
									<div class="message">Please make a selection.</div>
								</div>
							</div>
						</div>
					</div>
					<div class="item">
						<div class="panel panel-default interaction-question">
							<div class="panel-body">
								<div class="question-wrap radio">
									<h4>Question 3 of 8</h4>
									<p>Since these products are from a summer morning, the low clouds in the
										night microphysics RGB should be: </p>
									<form action="#">
										<fieldset>
											<div class="response-group-item"><input id="q23a" name="q23"
													value="a" type="radio"><label for="q23a"> <strong>a)
													</strong>Pink</label> </div>
											<div class="response-group-item correct"><input id="q23b" name="q23"
													value="b" type="radio"><label for="q23b"> <strong>b)
													</strong>Light blue-grey</label> </div>
											<div class="response-group-item"><input id="q23c" name="q23"
													value="c" type="radio"><label for="q23c"> <strong>c)
													</strong>Blue</label> </div>
											<div class="response-group-item"><input id="q23d" name="q23"
													value="d" type="radio"><label for="q23d"> <strong>d)
													</strong>Black</label> </div>
											<div class="response-group-item"><input id="q23e" name="q23"
													value="e" type="radio"><label for="q23e"> <strong>e)
													</strong>Light green</label> </div>
											<div class="response-group-item"><input id="q23f" name="q23"
													value="f" type="radio"><label for="q23f"> <strong>f)
													</strong>Dark green</label> </div> <input
												class="submit-button btn btn-primary" name="submit-button"
												value="Done" type="button">
										</fieldset>
									</form>
									<div class="answer">
										<p class="response">The correct answer is b.</p>
										<p class="explanation">During the warm season and warm weather regimes,
											low clouds are light blue-grey. They are only light green during the
											cold season and cold weather regimes.</p>
									</div>
									<div class="message">Please make a selection.</div>
								</div>
							</div>
						</div>
					</div>
					<div class="item">
						<div class="panel panel-default interaction-question">
							<div class="panel-body">
								<div class="question-wrap checkboxes">
									<h4>Question 4 of 8</h4>
									<p>View the night microphysics RGB and look at the low clouds. Why are they
										both light blue and light green?</p>
									<form action="#">
										<fieldset>
											<div class="response-group-item"><input id="q24a" name="q24"
													value="a" type="checkbox"><label for="q24a"> <strong>a)
													</strong>The season must be transitioning earlier this year
													than in other years thus making different types of low
													clouds.</label> </div>
											<div class="response-group-item correct"><input id="q24b" name="q24"
													value="b" type="checkbox"><label for="q24b"> <strong>b)
													</strong>These cloud layers are at different heights, which
													produces different RGB combinations.</label> </div>
											<div class="response-group-item correct"><input id="q24c" name="q24"
													value="c" type="checkbox"><label for="q24c"> <strong>c)
													</strong>The more equatorial clouds are “summer” clouds
													while those toward the poles are “winter” clouds.</label>
											</div>
											<div class="response-group-item"><input id="q24d" name="q24"
													value="d" type="checkbox"><label for="q24d"> <strong>d)
													</strong>The northern clouds contain more ice, which makes
													them greener than the southern clouds. </label> </div>
											<input class="submit-button btn btn-primary" name="submit-button"
												value="Done" type="button">
										</fieldset>
									</form>
									<div class="answer">
										<p class="response">The correct answers are b, c.</p>
										<p class="explanation">The height of the clouds and their latitudinal
											differences make them look different. </p>
										<p class="explanation">The cloud tops are warmer in the southern portion
											of the image so they are likely lower. However, since the thickness
											of the troposphere is markedly different in the northern and
											southern portions of the image, it is impossible to truly compare
											the cloud heights without more information, say, from soundings.</p>
										<p class="explanation">The closer to the equator you get, the less
											clouds look like “winter” low clouds on RGB imagery unless there is
											a climatological anomaly in the area. </p>
									</div>
									<div class="message">Please make a selection.</div>
								</div>
							</div>
						</div>
					</div>
					<div class="item">
						<div class="panel panel-default interaction-question">
							<div class="panel-body">
								<div class="question-wrap checkboxes">
									<h4>Question 5 of 8</h4>
									<p>There are generally two heights of clouds off the western coast of Africa
										from Liberia to Senegal. Which product could you use to identify their
										cloud-top height differences?</p>
									<form action="#">
										<fieldset>
											<div class="response-group-item"><input id="q25a" name="q25"
													value="a" type="checkbox"><label for="q25a"> <strong>a)
													</strong>Visible</label> </div>
											<div class="response-group-item correct"><input id="q25b" name="q25"
													value="b" type="checkbox"><label for="q25b"> <strong>b)
													</strong>Infrared</label> </div>
											<div class="response-group-item correct"><input id="q25c" name="q25"
													value="c" type="checkbox"><label for="q25c"> <strong>c)
													</strong>Water Vapour</label> </div>
											<div class="response-group-item correct"><input id="q25d" name="q25"
													value="d" type="checkbox"><label for="q25d"> <strong>d)
													</strong>Severe convection RGB</label> </div>
											<div class="response-group-item correct"><input id="q25e" name="q25"
													value="e" type="checkbox"><label for="q25e"> <strong>e)
													</strong>Dust RGB</label> </div>
											<div class="response-group-item correct"><input id="q25f" name="q25"
													value="f" type="checkbox"><label for="q25f"> <strong>f)
													</strong>Night microphysics RGB</label> </div>
											<div class="response-group-item"><input id="q25g" name="q25"
													value="g" type="checkbox"><label for="q25g"> <strong>g)
													</strong>Natural colour RGB</label> </div> <input
												class="submit-button btn btn-primary" name="submit-button"
												value="Done" type="button">
										</fieldset>
									</form>
									<div class="answer">
										<p class="response">The correct answers are b, c, d, e, and f.</p>
										<p class="explanation">The most effective products to use are the
											infrared channels and the night microphysics product. The water
											vapour, dust RGB, and severe convection RGB can be used for this but
											they shouldn’t be depended on in all situations to differentiate the
											cloud heights, especially at night with low-level clouds. The other
											imagery are not useful at night, or cannot see low enough in the
											atmosphere to see these clouds.</p>
									</div>
									<div class="message">Please make a selection.</div>
								</div>
							</div>
						</div>
					</div>
					<div class="item">
						<div class="panel panel-default interaction-question">
							<div class="panel-body">
								<div class="question-wrap-drag">
									<h4>Question 6 of 8</h4>
									<p>Identify the two different height clouds in the following drag and drop
										interaction.</p>
									<div class="drag-container" title="">
										<div class="radio-image-selector image_holder">
											<div class="rs-content">
												<div>
													<div class="center"><img
															src="media/graphics/2017_08_16_0630_nir.jpg"
															width="845" height="446"
															alt="EUMETSAT infrared over Africa, 0600 UTC 16 Aug 2017" />
													</div>
												</div>
												<div>
													<div class="center"><img
															src="media/graphics/2017_08_16_0630_dust.jpg"
															width="845" height="446"
															alt="EUMETSAT dust RGB over Africa, 0600 UTC 16 Aug 2016" />
													</div>
												</div>
												<div>
													<div class="center"><img
															src="media/graphics/2017_08_16_0630_night_micro.jpg"
															width="845" height="446"
															alt="EUMETSAT night microphysics RGB over Africa, 0600 UTC 16 Aug 2017" />
													</div>
												</div>
											</div>
											<ul class="rs-list">
												<li><input type="radio" id="opt7" name="rs-0" checked> <label
														for="opt7">Option 7</label></li>
												<li><input type="radio" id="opt4" name="rs-0"> <label
														for="opt4">Option 4</label></li>
												<li><input type="radio" id="opt2" name="rs-0"> <label
														for="opt2">Option 2</label></li>
											</ul>
										</div>
										<p class="drag_directions">Use the above radio buttons to switch between
											imagery options, then drag the two different heights onto the
											appropriate clouds.</p>
										<div class="drag_controls_holder">
											<div class="drag_controls">
												<div class="draggable ui-widget-content ui-draggable drag_item replenish ui-draggable-handle"
													style="position: relative;"><span
														class="glyphicon glyphicon-th"></span> Higher</div>
												<div class="draggable ui-widget-content ui-draggable drag_item replenish ui-draggable-handle"
													style="position: relative;"><span
														class="glyphicon glyphicon-th"></span> Lower</div>
											</div> <input class="done_drag btn btn-primary" value="Done"
												type="button"> <input class="reset_drag btn btn-default"
												value="Reset" type="button">
										</div>
									</div>
									<div class="answer">
										<div class="group">
											<p>The cloud heights can be differentiated by cloud type or by
												colour in the different imagery. In the IR imagery, the lower
												clouds are smoother in texture. In the night microphysics RGB,
												the lower clouds have a center that contains sparse yellow-green
												speckling. In the dust RGB, the lower clouds are yellow with
												green edging. All the rest of the clouds are higher in that
												vicinity.</p>
											<p>For an objective analysis of the entire infrared image, use the
												below image where red areas are low-level, green areas are
												mid-level, and blue areas are high-level clouds. Some clouds
												were not captured as they were too small for the objective
												analysis to pick out.</p> <img
												class="img-responsive center-block"
												src="media/graphics/2017_08_16_0630_ir_low_mid_high_clouds_feedback.jpg"
												alt="feedback" width="850" height="824">
											<p>This is not an operational product as it is for instructional
												purposes only.</p>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div class="item">
						<div class="panel panel-default interaction-question">
							<div class="panel-body">
								<div class="question-wrap-drag">
									<h4>Question 7 of 8</h4>
									<p>Identify the areas that are land and ocean by dragging land and ocean
										markers to various locations that you can identify with the seven
										available images. Use the radio buttons below the imagery to switch the
										imagery type for ease of finding the surface features.</p>
									<div class="drag-container" title="">
										<div class="radio-image-selector image_holder">
											<div class="rs-content">
												<div>
													<div class="center"><img
															src="media/graphics/2017_08_16_0630_wv.jpg"
															width="845" height="446"
															alt="EUMETSAT water vapour over Africa, 0600 UTC 16 Aug 2017" />
													</div>
												</div>
												<div>
													<div class="center"><img
															src="media/graphics/2017_08_16_0630_night_micro.jpg"
															width="845" height="446"
															alt="EUMETSAT night microphysics RGB over Africa, 0600 UTC 16 Aug 2017" />
													</div>
												</div>
												<div>
													<div class="center"><img
															src="media/graphics/2017_08_16_0630_convection.jpg"
															width="845" height="446"
															alt="EUMETSAT severe convection RGB over Africa, 0600 UTC 16 Aug 2017" />
													</div>
												</div>
												<div>
													<div class="center"><img
															src="media/graphics/2017_08_16_0630_dust.jpg"
															width="845" height="446"
															alt="EUMETSAT dust RGB over Africa, 0600 UTC 16 Aug 2016" />
													</div>
												</div>
												<div>
													<div class="center"><img
															src="media/graphics/2017_08_16_0630_vis.jpg"
															width="845" height="446"
															alt="EUMETSAT visible over Africa, 0600 UTC 16 Aug 2017" />
													</div>
												</div>
												<div>
													<div class="center"><img
															src="media/graphics/2017_08_16_0630_natural_colour.jpg"
															width="845" height="446"
															alt="EUMETSAT natural colour RGB over Africa, 0600 UTC 16 Aug 2017" />
													</div>
												</div>
												<div>
													<div class="center"><img
															src="media/graphics/2017_08_16_0630_nir.jpg"
															width="845" height="446"
															alt="EUMETSAT infrared over Africa, 0600 UTC 16 Aug 2017" />
													</div>
												</div>
											</div>
											<ul class="rs-list">
												<li><input type="radio" id="2017_08_16_0630_wv" name="rs-1"
														checked> <label for="2017_08_16_0630_wv">Option
														1</label></li>
												<li><input type="radio" id="2017_08_16_0630_night_micro"
														name="rs-1"> <label
														for="2017_08_16_0630_night_micro">Option 2</label></li>
												<li><input type="radio" id="2017_08_16_0630_convection"
														name="rs-1"> <label
														for="2017_08_16_0630_convection">Option 3</label></li>
												<li><input type="radio" id="2017_08_16_0630_dust" name="rs-1">
													<label for="2017_08_16_0630_dust">Option 4</label></li>
												<li><input type="radio" id="2017_08_16_0630_vis" name="rs-1">
													<label for="2017_08_16_0630_vis">Option 5</label></li>
												<li><input type="radio" id="2017_08_16_0630_natural_colour"
														name="rs-1"> <label
														for="2017_08_16_0630_natural_colour">Option 6</label>
												</li>
												<li><input type="radio" id="2017_08_16_0630_nir" name="rs-1">
													<label for="2017_08_16_0630_nir">Option 7</label></li>
											</ul>
										</div>
										<p class="drag_directions">Use the above radio buttons to switch between
											imagery options, then drag the “land” and “ocean” labels to the
											correct locations on the image.</p>
										<div class="drag_controls_holder">
											<div class="drag_controls">
												<div class="draggable ui-widget-content ui-draggable drag_item replenish ui-draggable-handle"
													style="position: relative;"><span
														class="glyphicon glyphicon-th"></span>Land</div>
												<div class="draggable ui-widget-content ui-draggable drag_item replenish ui-draggable-handle"
													style="position: relative;"><span
														class="glyphicon glyphicon-th"></span>Ocean</div>
											</div> <input class="done_drag btn btn-primary" value="Done"
												type="button"> <input class="reset_drag btn btn-default"
												value="Reset" type="button">
										</div>
									</div>
									<div class="answer">
										<div class="group">
											<p>Option 6 makes it easier to define where land and ocean are.
												Ocean is dark blue or black, and land varies from earth tones
												through greens. In the areas where the natural colour imagery is
												dark, you can use other channels and products to help you
												identify the difference. The night microphysics RGB can be
												useful to help you differentiate clouds from land from ocean.
											</p>
											<p>The following night microphysics RGB image shows an
												objectively-analyzed land and ocean mask. The land areas are
												coloured brown and the ocean areas are coloured blue. Areas
												where you can see the night microphysics RGB are areas where it
												iss too cloudy to differentiate the surface features.</p> <img
												class="img-responsive center-block"
												src="media/graphics/2017_08_16_0630_night_micro_land_ocean_feedback.jpg"
												alt="feedback" width="850" height="824">
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div class="item">
						<div class="panel panel-default interaction-question">
							<div class="panel-body">
								<div class="question-wrap reordering">
									<h4>Question 8 of 8</h4>
									<p>Arrange the list of products to the order of the options in the
										comparison slider above. For instance, if you believe "option 1" in the
										comparison slider to be the night microphysics RGB, move the "night
										microphysics RGB" answer choice to be the first in the following list.
									</p>
									<form action="#">
										<fieldset>
											<div class="‘response-group-item’">
												<ol class="sortable sortIt ui-sortable" start="1">
													<li class="ui-state-default ui-sortable-handle"><span
															class="glyphicon glyphicon-th"></span> Visible<span
															class="glyphicon glyphicon-sort"></span> </li>
													<li class="ui-state-default ui-sortable-handle"><span
															class="glyphicon glyphicon-th"></span> Infrared<span
															class="glyphicon glyphicon-sort"></span> </li>
													<li class="ui-state-default ui-sortable-handle"><span
															class="glyphicon glyphicon-th"></span> Water
														vapour<span class="glyphicon glyphicon-sort"></span>
													</li>
													<li class="ui-state-default ui-sortable-handle"><span
															class="glyphicon glyphicon-th"></span> Dust RGB<span
															class="glyphicon glyphicon-sort"></span> </li>
													<li class="ui-state-default ui-sortable-handle"><span
															class="glyphicon glyphicon-th"></span> Severe
														convection RGB<span
															class="glyphicon glyphicon-sort"></span> </li>
													<li class="ui-state-default ui-sortable-handle"><span
															class="glyphicon glyphicon-th"></span> Night
														microphysics RGB<span
															class="glyphicon glyphicon-sort"></span> </li>
													<li class="ui-state-default ui-sortable-handle"><span
															class="glyphicon glyphicon-th"></span> Natural
														Colour<span class="glyphicon glyphicon-sort"></span>
													</li>
												</ol>
											</div> <input class="submit-button btn btn-primary"
												name="submit-button" value="Done" type="button">
										</fieldset>
									</form>
									<div class="answer response-group-item dropdown_correct correct">
										<ol class="ordered-response-list" start="1">
											<li>Water vapour</li>
											<li>Night microphysics RGB</li>
											<li>Severe convection RGB</li>
											<li>Dust RGB</li>
											<li>Visible</li>
											<li>Natural Colour</li>
											<li>Infrared</li>
										</ol>
									</div>
								</div>
							</div>
						</div>
					</div> <!-- Controls -->
					<div class="print_hide"> <a class="left carousel-control" href="#qslide2" role="button"
							data-slide="prev"> <span class="glyphicon glyphicon-chevron-left"
								aria-hidden="true"></span> <span class="sr-only">Previous</span> </a> <a
							class="right carousel-control" href="#qslide2" role="button" data-slide="next">
							<span class="glyphicon glyphicon-chevron-right" aria-hidden="true"></span> <span
								class="sr-only">Next</span> </a> </div>
				</div>
			</div> <!-- END CAROUSEL -->
		</div>
		<div id="page_8-0-0" class="page">
			<h3>Summary</h3>
			<p>The EUMETSAT Meteosat Second Generation (MSG) satellite provides many channels of data. In this
				lesson, we explored the most commonly used channels and products: Visible, Infrared (IR), Water
				Vapour, Severe Convection RGB, Dust RGB, Night Microphysics RGB, and Natural Colour RGB. </p>
			<p>Each product is best-suited to specific forecasting applications:</p>
			<ul>
				<li>Visible imagery has the highest resolution and can help you identify cloud types at all
					levels and surface features. Visible satellite imagery is not useful at night, however.</li>
				<li>Infrared imagery shows not only cloud types, but also gives quantitative information about
					the height of cloud tops. Infrared imagery does not provide as much horizontal detail as
					visible imagery due to its lower resolution.</li>
				<li>Water Vapour imagery provides considerable information on moisture in the mid-levels of the
					troposphere. It cannot detect features at or very near the surface, however.</li>
				<li>The Severe Convection RGB detects rapidly growing thunderstorms that could be considered
					severe at the surface. At night the product can lose some ability to differentiated severe
					from general convection.</li>
				<li>Dust RGB detects dust clouds at any level during the day or night, including information
					about dust cloud heights and thicknesses.</li>
				<li>Night Microphysics RGB enhances the ability to detect low clouds and fog at night, when it
					is especially hard to track. It cannot be used in the same manner during the day.</li>
				<li>Natural Colour RGB is a good companion or substitute for visible imagery, as its colouring
					adds more detail tosome features. It colours ice clouds and snow cyan which helps define
					some of the microphysical character of clouds. Since this is highly dependent on visible
					channels, this product cannot be used at night. </li>
			</ul>
			<p>There are many comparisons to be made between the products that enhance monitoring and
				forecasting skills. The satellite product comparisons section walked you through some of these
				simple comparisons to improve your skills in atmospheric and surface feature identification.
			</p>
			<p>You have practiced using different product information to assess cloud height and thickness,
				including dust clouds.</p>
			<p>Lastly, you have identified product type when given the images without their titles. This
				practice allowed you to quickly assess different features and find the appropriate products for
				use in many different situations. </p>
			<p>You should now assess your knowledge of the learning objectives for this lesson by completing the
				<span>quiz</span>. After the quiz, to receive your certificate of
				completion, you should complete the <span>survey</span>. We
				hope you have enjoyed learning about using satellite products over Africa using the MSG
				satellite. </p>
		</div>
		<div id="page_contributors" class="page">
			<h3>Contributors</h3>
			<div>
				<h4 id="sponsors">COMET Sponsors</h4>
				<p>MetEd and the COMET® Program are a part of the <a href="http://www.ucp.ucar.edu/">University
						Corporation for Atmospheric Research's (UCAR's) Community Programs (UCP)</a> and are
					sponsored by <a href="http://www.weather.gov/about" target="_blank">NOAA's National Weather
						Service (NWS)</a>, with additional funding by:</p>
				<ul>
					<li><a href="http://www.bom.gov.au/" target="_blank">Bureau of Meteorology of Australia
							(BoM)</a> </li>
					<li><a href="http://www.usbr.gov/" target="_blank">Bureau of Reclamation, United States
							Department of the Interior</a> </li>
					<li><a href="http://weather.gc.ca/" target="_blank">Meteorological Service of Canada
							(MSC)</a> </li>
					<li><a href="http://www.nesdis.noaa.gov/" target="_blank">NOAA's National Environmental
							Satellite, Data and Information Service (NESDIS)</a> </li>
					<li><a href="http://www.ngs.noaa.gov/" target="_blank">NOAA's National Geodetic Survey
							(NGS)</a> </li>
					<li><a href="http://www.nsf.gov" target="_blank">National Science Foundation (NSF)</a> </li>
					<li><a href="http://www.navmetoccom.navy.mil/" target="_blank">Naval Meteorology and
							Oceanography Command (NMOC)</a> </li>
					<li><a href="http://www.usace.army.mil/" target="_blank">U.S. Army Corps of Engineers
							(USACE)</a> </li>
				</ul>
				<p>To learn more about us, please visit the <a href="http://www.comet.ucar.edu">COMET
						website</a>.</p>
				<h4 id="contributors">Project Contributors</h4>
				<h5>Program Managers</h5>
				<ul>
					<li>Bruce Muller</li>
					<li>Vesa Nietosvaara - EUMETSAT</li>
				</ul>
				<h5>Project Leads</h5>
				<ul>
					<li>Bryan Guarente</li>
					<li>Marianne Weingroff</li>
				</ul>
				<h5>Instructional Design</h5>
				<ul>
					<li>Bryan Guarente</li>
					<li>Marianne Weingroff</li>
				</ul>
				<h5>Science Advisors</h5>
				<ul>
					<li>Vesa Nietosvaara - EUMETSAT</li>
					<li>Mark Higgins - EUMETSAT</li>
					<li>Ian Mills - EUMETSAT</li>
					<li>Andrea Smith - COMET</li>
				</ul>
				<h5>Graphics/Animations</h5>
				<ul>
					<li>Sylvia Quesada - COMET</li>
					<li>Steve Deyo - COMET</li>
					<li>Lindsay Johnson - COMET</li>
				</ul>
				<h5>Multimedia Authoring/Interface Design</h5>
				<ul>
					<li>Gary Pacheco - COMET</li>
				</ul>
			</div>
			<div>
				<h4>COMET Staff, December 2017</h4>
				<h5>Director's Office</h5>
				<ul>
					<li>Dr. Elizabeth Mulvihill Page, Director</li>
					<li>Tim Alberta, Assistant Director Operations and IT</li>
					<li>Paul Kucera, Assistant Director International Programs</li>
				</ul>
				<h5>Business Administration</h5>
				<ul>
					<li>Lorrie Alberta, Administrator</li>
					<li>Tara Torres, Program Coordinator</li>
				</ul>
				<h5>IT Services</h5>
				<ul>
					<li>Bob Bubon, Systems Administrator</li>
					<li>Joshua Hepp, Student Assistant</li>
					<li>Joey Rener, Software Engineer</li>
					<li>Malte Winkler, Software Engineer</li>
				</ul>
				<h5>Instructional Services</h5>
				<ul>
					<li>Dr. Alan Bol, Scientist/Instructional Designer</li>
					<li>Tsvetomir Ross-Lazarov, Instructional Designer</li>
				</ul>
				<h5>International Programs</h5>
				<ul>
					<li>Rosario Alfaro Ocampo, Translator/Meteorologist</li>
					<li>Bruce Muller, Project Manager</li>
					<li>David Russi, Translations Coordinator</li>
					<li>Martin Steinson, Project Manager</li>
				</ul>
				<h5>Production and Media Services</h5>
				<ul>
					<li>Steve Deyo, Graphic and 3D Designer</li>
					<li>Dolores Kiessling, Software Engineer</li>
					<li>Gary Pacheco, Web Designer and Developer</li>
					<li>Sylvia Quesada, Production Assistant</li>
				</ul>
				<h5>Science Group</h5>
				<ul>
					<li>Dr. William Bua, Meteorologist</li>
					<li>Patrick Dills, Meteorologist</li>
					<li>Bryan Guarente, Instructional Designer/Meteorologist</li>
					<li>Matthew Kelsch, Hydrometeorologist</li>
					<li>Erin Regan, Student Assistant</li>
					<li>Andrea Smith, Meteorologist</li>
					<li>Amy Stevermer, Meteorologist </li>
					<li>Vanessa Vincente, Meteorologist</li>
				</ul>
			</div>
		</div>
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