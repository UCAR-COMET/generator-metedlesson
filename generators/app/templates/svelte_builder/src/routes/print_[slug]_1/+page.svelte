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
								<li><a href="#page_1-0-0">Objectives</a></li>
								<li><a href="#page_2-0-0">History of Ocean Acoustics</a></li>
								<li><a href="#page_3-0-0" class="innerNode">Physics of Sound
										Propagation</a>
									<ul class="nav" id="ul_3-0-0">
										<li><a href="#page_3-1-0">Sound as a Pressure Wave</a></li>
										<li><a href="#page_3-2-0">Characteristics of Sound Waves</a>
											<ul class="nav" id="ul_3-2-0">
												<li><a href="#page_3-2-1">Amplitude and Intensity</a>
												</li>
												<li><a href="#page_3-2-2">Frequency, Speed, and
														Wavelength</a></li>
												<li><a href="#page_3-2-3">Phase</a></li>
											</ul>
										</li>
										<li><a href="#page_3-3-0" class="innerNode">Questions</a>
											<ul class="nav" id="ul_3-3-0">
												<li><a href="#page_3-3-1">Question</a></li>
												<li><a href="#page_3-3-2">Question</a></li>
												<li><a href="#page_3-3-3">Question</a></li>
												<li><a href="#page_3-3-4">Question</a></li>
												<li><a href="#page_3-3-5">Question</a></li>
											</ul>
										</li>
									</ul>
								</li>
								<li><a href="#page_4-0-0">Sound Speed</a>
									<ul class="nav" id="ul_4-0-0">
										<li><a href="#page_4-1-0">Factors Affecting Sound Speed
												Variations</a>
											<ul class="nav" id="ul_4-1-0">
												<li><a href="#page_4-1-1">Temperature and Sound
														Speed</a></li>
												<li><a href="#page_4-1-2">Pressure and Sound Speed</a>
												</li>
												<li><a href="#page_4-1-3">The Interplay Between Pressure
														and Temperature</a></li>
											</ul>
										</li>
										<li><a href="#page_4-2-0">Sound Speed Profiles</a></li>
									</ul>
								</li>
								<li><a href="#page_5-0-0">Refraction and Reflection</a>
									<ul class="nav" id="ul_5-0-0">
										<li><a href="#page_5-1-0">Sound Rays</a></li>
										<li><a href="#page_5-2-0">Refraction</a></li>
										<li><a href="#page_5-3-0">Sound Velocity Gradients</a></li>
										<li><a href="#page_5-4-0">Refraction and Frequency</a></li>
										<li><a href="#page_5-5-0">Reflection</a></li>
									</ul>
								</li>
								<li><a href="#page_6-0-0">Propagation Paths</a>
									<ul class="nav" id="ul_6-0-0">
										<li><a href="#page_6-1-0">The Surface Duct, Mixed Layer, and
												Sonic Layer Depth</a>
											<ul class="nav" id="ul_6-1-0">
												<li><a href="#page_6-1-1">Surface Duct</a></li>
												<li><a href="#page_6-1-2">Mixed Layer</a></li>
												<li><a href="#page_6-1-3">Sonic Layer Depth</a></li>
												<li><a href="#page_6-1-4">Questions</a></li>
											</ul>
										</li>
										<li><a href="#page_6-2-0" class="innerNode">Convergence Zone
												Paths</a>
											<ul class="nav" id="ul_6-2-0">
												<li><a href="#page_6-2-1">Limiting Rays</a></li>
												<li><a href="#page_6-2-2">Convergence Zones</a></li>
												<li><a href="#page_6-2-3">Multiple Convergence Zones</a>
												</li>
											</ul>
										</li>
										<li><a href="#page_6-3-0">Bottom Bounce</a></li>
										<li><a href="#page_6-4-0">Frequency Dependence</a></li>
										<li><a href="#page_6-5-0">Questions</a></li>
										<li><a href="#page_6-6-0">Sound Channels</a>
											<ul class="nav" id="ul_6-6-0">
												<li><a href="#page_6-6-1">Deep Sound Channel</a></li>
												<li><a href="#page_6-6-2">Secondary Sound Channels</a>
												</li>
												<li><a href="#page_6-6-3">Half-Channel and Near-Bottom
														Sound Channels</a></li>
												<li><a href="#page_6-6-4">Near-Bottom Sound Channel</a>
												</li>
											</ul>
										</li>
										<li><a href="#page_6-7-0" class="innerNode">Questions</a>
											<ul class="nav" id="ul_6-7-0">
												<li><a href="#page_6-7-1">Question</a></li>
												<li><a href="#page_6-7-2">Question</a></li>
											</ul>
										</li>
									</ul>
								</li>
								<li><a href="#page_7-0-0">Ocean Structures</a>
									<ul class="nav" id="ul_7-0-0">
										<li><a href="#page_7-1-0">Ocean Fronts</a></li>
										<li><a href="#page_7-2-0">Eddies</a></li>
										<li><a href="#page_7-3-0">Warm Core Eddies</a></li>
										<li><a href="#page_7-4-0">Cold Core Eddies</a></li>
									</ul>
								</li>
								<li><a href="#page_8-0-0">Sources of Change in Ocean Acoustic
										Features</a>
									<ul class="nav" id="ul_8-0-0">
										<li><a href="#page_8-1-0">Seasonal Effects – Winter</a></li>
										<li><a href="#page_8-2-0">Seasonal Effects - Summer</a></li>
										<li><a href="#page_8-3-0">Weather Effects – Tropical
												Cyclones</a></li>
										<li><a href="#page_8-4-0">Seasonal Effects – Fall and Spring
												Transitions</a></li>
										<li><a href="#page_8-5-0">Internal Waves/Internal Tides</a></li>
									</ul>
								</li>
								<li><a href="#page_9-0-0">Scattering and Absorption</a>
									<ul class="nav" id="ul_9-0-0">
										<li><a href="#page_9-1-0">Reflectivity of Sediments</a></li>
										<li><a href="#page_9-2-0">Distribution of Sediments</a></li>
										<li><a href="#page_9-3-0">Bathymetry</a></li>
										<li><a href="#page_9-4-0">Absorption by Seawater</a></li>
										<li><a href="#page_9-5-0">Bubbles and Swim Bladders</a></li>
										<li><a href="#page_9-6-0">Reverberation in Active Sonar
												Systems</a></li>
										<li><a href="#page_9-7-0">Questions</a></li>
									</ul>
								</li>
								<li><a href="#page_10-0-0">Factors Affecting Detection of Sound</a>
									<ul class="nav" id="ul_10-0-0">
										<li><a href="#page_10-1-0">Ambient Noise</a></li>
										<li><a href="#page_10-2-0">Natural Sources of Noise</a></li>
										<li><a href="#page_10-3-0">Human Sources of Ambient Noise</a>
										</li>
										<li><a href="#page_10-4-0">Self Noise</a></li>
										<li><a href="#page_10-5-0">Source Level</a></li>
										<li><a href="#page_10-6-0">Transmission Loss (TL)</a></li>
										<li><a href="#page_10-7-0">Questions</a></li>
										<li><a href="#page_10-8-0">Propagation Paths</a>
											<ul class="nav" id="ul_10-8-0">
												<li><a href="#page_10-8-1">Direct Path</a></li>
												<li><a href="#page_10-8-2">Sound Channels</a></li>
												<li><a href="#page_10-8-3">Convergent Zones</a></li>
												<li><a href="#page_10-8-4">Duct Leakage</a></li>
												<li><a href="#page_10-8-5">Bottom Bounce</a></li>
												<li><a href="#page_10-8-6">Down-Slope Propagation</a>
												</li>
												<li><a href="#page_10-8-7">Shadow Zones</a></li>
												<li><a href="#page_10-8-8">Multipath Detection</a></li>
											</ul>
										</li>
										<li><a href="#page_10-9-0" class="innerNode">Questions</a>
											<ul class="nav" id="ul_10-9-0">
												<li><a href="#page_10-9-1">Question</a></li>
												<li><a href="#page_10-9-2">Question</a></li>
											</ul>
										</li>
									</ul>
								</li>
								<li><a href="#page_11-0-0">Sensors</a>
									<ul class="nav" id="ul_11-0-0">
										<li><a href="#page_11-1-0">Passive sonar/sensors</a></li>
										<li><a href="#page_11-2-0">Reciprocity in Propagation Paths</a>
										</li>
										<li><a href="#page_11-3-0">Active Sonar/Sensors</a></li>
										<li><a href="#page_11-4-0">Target Strength</a></li>
									</ul>
								</li>
								<li><a href="#page_12-0-0" class="innerNode">SONAR Equation (Advanced
										Topic)</a>
									<ul class="nav" id="ul_12-0-0">
										<li><a href="#page_12-1-0">Introduction</a></li>
										<li><a href="#page_12-2-0">The Variables</a></li>
										<li><a href="#page_12-3-0">Sonar Equation: Passive Systems</a>
										</li>
										<li><a href="#page_12-4-0">Example</a></li>
										<li><a href="#page_12-5-0">Sonar Equation: Active Systems</a>
										</li>
										<li><a href="#page_12-6-0">DT vs RD vs RT</a></li>
										<li><a href="#page_12-7-0">Figure of Merit (FOM)</a></li>
									</ul>
								</li>
								<li><a href="#page_13-0-0">Summary</a></li>
								<li><a href="#page_14-0-0">References</a></li>
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
		<div id="page_1-0-0" class="page">
			<h3>Objectives</h3>
			<p>After completing the module, the learner should be able to do the following:</p>
			<p><em>Physics of sound propagation</em></p>
			<ul>
				<li>Explain why sound is a pressure wave</li>
				<li>List and describe the important characteristics of sound waves </li>
				<li>Describe the relationship between sound pressure and sound intensity</li>
			</ul>
			<p><em>Sound Speed</em></p>
			<ul>
				<li>List the factors that affect underwater sound speed (temperature, salinity, pressure)</li>
				<li>Describe how sound speed changes with changes in temperature, salinity, and pressure</li>
				<li>Describe typical sound speed profiles in the world&rsquo;s oceans and major marginal seas
				</li>
			</ul>
			<p><em>Refraction and Reflection</em></p>
			<ul>
				<li>Given a sound speed profile, describe how sound will refract</li>
				<li>Describe the relationship between refraction and frequency</li>
				<li>Describe the factors that affect sound reflection off of the seafloor or sea surface</li>
			</ul>
			<p><em>Propagation Paths</em></p>
			<ul>
				<li>Describe the surface duct, mixed layer, and sonic layer depth and their interrelationship.
				</li>
				<li>Describe sound propagation in the surface duct</li>
				<li>Describe the conditions that lead to sound channels</li>
				<li>Describe the deep and secondary sound channels </li>
				<li>Describe the convergence zone</li>
				<li>Describe factors that lead to bottom bounce</li>
			</ul>
			<p><em>Ocean Structures</em></p>
			<ul>
				<li>Describe how sound propagation is affected by oceanic fronts and eddies</li>
			</ul>
			<p><em>Sources of Change in Ocean Acoustic Features</em></p>
			<ul>
				<li>Describe seasonal and diurnal effects on ocean sound speed profiles</li>
				<li>Describe the effect of large storms on ocean sound speed profiles</li>
				<li>Describe the effect of internal waves and tides on sound propagation</li>
			</ul>
			<p><em>Scattering and Absorption</em></p>
			<ul>
				<li>Describe the factors that affect scattering and absorption of sound at the seafloor</li>
				<li>Describe how bathymetry affects scattering and sound propagation</li>
				<li>Describe how seawater absorbs sound energy</li>
				<li>Describe how air bubbles affect sound propagation</li>
			</ul>
			<p><em>Factors Affecting Detection of Sound</em></p>
			<ul>
				<li>List the factors that affect the detection of sounds under water</li>
				<li>List sources of ambient noise in the ocean</li>
				<li>Describe the difference between spherical and cylindrical spreading of sound waves</li>
				<li>Describe how sound propagation paths affect the detection of sound sources</li>
			</ul>
			<p><em>Sensors</em></p>
			<ul>
				<li>Explain the difference between active and passive sonar systems</li>
				<li>Describe the strengths and weaknesses of active and passive sonar systems</li>
				<li>Describe the factors that determine target strength</li>
			</ul>
			<p><em>SONAR Equation (Advanced Topic)</em></p>
			<ul>
				<li>List the variables in the sonar equation </li>
				<li>Recall the difference in the sonar equation for active and passive systems</li>
				<li>Describe the Figure of Merit (FOM)</li>
			</ul>
		</div>
		<div id="page_2-0-0" class="page">
			<h3>History of Ocean Acoustics</h3>
			<div class="print_hide center" style="max-width:600px;margin:10px auto;">
				<div class="videowrap-16x9"> <video class="html5video" width="690" height="574"
						style="max-width:100%;" poster="media/video/2.0.0.jpg" preload="none" controls
						playsinline>
						<source src="media/video/2.0.0.mp4" type="video/mp4">
					</video> </div>
			</div>
			<div class="module_hide">
				<div class="center"><img src="media/graphics/collodon_sound_speed.jpg"
						alt="The First Measurement of Sound Speed" /></div>
				<p>In 1490 Leonardo da Vinci first proposed detecting ships by listening to the noise they
					radiate into water. He demonstrated that sound propagating through the ocean could be used
					for detection or tracking of objects in the water.</p>
				<p>Later, in 1826 Colladon and Sturm recorded the underwater speed of sound in Lake Geneva,
					Switzerland. In their experiment, a bell was struck underwater simultaneously with a
					gunpowder flash. By timing the interval between the flash and the arrival of the sound, they
					calculated the speed of sound. The value they determined was remarkably accurate.</p>
				<div class="center"><img src="media/graphics/titanic.jpg"
						alt="Drawing of Titanic hitting an iceberg" /></div>
				<p>Interest in using sound to detect objects in the water was aroused following the Titanic
					accident. Could the iceberg have been detected and the subsequent accident avoided?</p>
				<div class="center"><img src="media/graphics/submarine.jpg"
						alt="Photo of submarine (USS Grayling) in 1909" /></div>
				<p>However, it was the advent of the submarine that drove the development of sonar and the
					science of ocean acoustic/acoustical oceanography. The submarine shown here predates World
					War I.</p>
				<div class="center"><img src="media/graphics/3D_echogram.jpg"
						alt="3-dimensional distribution of widow rockfish schools overlayed on bathymetry (blue surface) off the coast of Oregon, as observed using scientific echosounders. The green lines represent the vessel track and the acoustic energy is represented on a color scale with grey denoting low fish density to red denoting high fish density." />
				</div>
				<p>Today, acoustic waves are used under water to detect and locate objects and targets; to
					measure the characteristics of the environment or the velocity and location of moving
					underwater objects; and to transmit signals.</p>
			</div>
		</div>
		<div id="page_3-0-0" class="page">
			<h3>Physics of Sound Propagation</h3>
		</div>
		<div id="page_3-1-0" class="page">
			<h3 class="sub_head"><small>Physics of Sound Propagation » </small>Sound as a Pressure Wave</h3>
			<div class="print_hide center" style="max-width:600px;margin:10px auto;">
				<div class="videowrap-16x9"> <video class="html5video" width="690" height="574"
						style="max-width:100%;" poster="media/video/3.1.0.jpg" preload="none" controls
						playsinline>
						<source src="media/video/3.1.0.mp4" type="video/mp4">
					</video> </div>
			</div>
			<div class="module_hide">
				<div class="center">
					<script
						type="text/javascript">if (printVersion) { document.write('<a href="media/video/pressure_wave.mp4" target="_blank"><img class="img-responsive center-block" src="media/video/pressure_wave.jpg" alt="conceptual animation of a pressure (sound) wave"/></a>'); }</script>
					<script
						type="text/javascript">if (printVersion === false) { document.write('<video class="html5video center-block" width="514" height="364" poster="media/video/pressure_wave.jpg" preload="auto" controls playsinline   ><source src="media/video/pressure_wave.mp4" type="video/mp4"></video>'); }</script>
				</div><br>
				<p>Although sound is often illustrated with a sine wave, sound is actually a pressure wave, with
					the peak in the sine wave indicating compaction of the medium and the trough indicating
					rarefaction (spreading out—thinning) of the medium.</p>
				<p>The speed of sound depends on the distance between molecules and the strength of the
					intermolecular interactions. Consequently sound speed increases with density and
					temperature. </p>
				<div class="center">
					<script
						type="text/javascript">if (printVersion) { document.write('<a href="media/video/pressure_wave_slow.mp4" target="_blank"><img class="img-responsive center-block" src="media/video/pressure_wave_slow.jpg" alt="conceptual animation of a slow pressure (sound) wave"/></a>'); }</script>
					<script
						type="text/javascript">if (printVersion === false) { document.write('<video class="html5video center-block" width="488" height="364" poster="media/video/pressure_wave_slow.jpg" preload="auto" controls playsinline   ><source src="media/video/pressure_wave_slow.mp4" type="video/mp4"></video>'); }</script>
				</div><br>
				<p>In a gas, the molecules are widely spaced with very low intermolecular forces. As a result,
					the speed of sound tends to be slower in gasses than liquids or solids. The speed of sound
					tends to be highest in solids: the molecules are relatively close together and the bonds and
					structure between them are stable.</p>
			</div>
		</div>
		<div id="page_3-2-0" class="page">
			<h3 class="sub_head"><small>Physics of Sound Propagation » </small>Characteristics of Sound Waves
			</h3>
			<div class="print_hide center" style="max-width:600px;margin:10px auto;">
				<div class="videowrap-16x9"> <video class="html5video" width="690" height="574"
						style="max-width:100%;" poster="media/video/3.2.0.jpg" preload="none" controls
						playsinline>
						<source src="media/video/3.2.0.mp4" type="video/mp4">
					</video> </div>
			</div>
			<div class="module_hide">
				<p>Sound waves are characterized by their amplitude, intensity, frequency, speed, wavelength,
					and phase.</p>
			</div>
		</div>
		<div id="page_3-2-1" class="page">
			<h3 class="sub_head"><small>Physics of Sound Propagation » Characteristics of Sound Waves »
				</small>Amplitude and Intensity</h3>
			<div class="print_hide center" style="max-width:600px;margin:10px auto;">
				<div class="videowrap-16x9"> <video class="html5video" width="690" height="574"
						style="max-width:100%;" poster="media/video/3.2.1.jpg" preload="none" controls
						playsinline>
						<source src="media/video/3.2.1.mp4" type="video/mp4">
					</video> </div>
			</div>
			<div class="module_hide">
				<div class="center"><img src="media/graphics/wave_amplitude.jpg"
						alt="Plot showing sine waves with 3 different amplitudes" /></div>
				<p>The amplitude is proportional to the maximum displacement of the particles in the medium. An
					increase in amplitude is perceived as a louder sound.</p>
				<div class="center"><img src="media/graphics/sound_pressure_intensity.jpg"
						alt="Plot of Underwater Sound Pressure versus Sound Intensity" /></div>
				<p>We measure loudness in terms of the sound intensity, generally given in terms of decibels
					(dB). The intensity of a sound is the power per unit area in the direction of propagation.
					The decibel is a logarithmic pressure scale. This is because human perception of sound is on
					a logarithmic scale – every increase of 10dB is perceived as being twice as loud, but has 10
					times the sound pressure. For example, a sound pressure of 100 µPa has a sound intensity of
					20 dB, while a sound pressure of 1000 µPa has a sound intensity of 30 dB. 30 dB is perceived
					by humans as being twice as loud as 20dB.</p>
			</div>
		</div>
		<div id="page_3-2-2" class="page">
			<h3 class="sub_head"><small>Physics of Sound Propagation » Characteristics of Sound Waves »
				</small>Frequency, Speed, and Wavelength</h3>
			<div class="print_hide center" style="max-width:600px;margin:10px auto;">
				<div class="videowrap-16x9"> <video class="html5video" width="690" height="574"
						style="max-width:100%;" poster="media/video/3.2.2.jpg" preload="none" controls
						playsinline>
						<source src="media/video/3.2.2.mp4" type="video/mp4">
					</video> </div>
			</div>
			<div class="module_hide">
				<div class="center"><img src="media/graphics/sinewave.jpg"
						alt="Plot of Underwater Sound Pressure versus Sound Intensity" /></div>
				<p>The frequency is the rate of oscillation of the wave particles. To the human ear, an increase
					in frequency is perceived as a higher pitched sound. The speed of a wave is the rate at
					which it passes through the medium and depends on the properties of the medium. The
					wavelength is the length peak-to-peak of a sound wave.</p>
				<p>Frequency, speed, and wavelength are all related as:</p>
				<p>Frequency x Wavelength = Speed</p>
				<p>For example, if the Frequency = 100 Hz (cycles per second) and the wavelength = 15 m, then
					the Speed = 1500 m/s.</p>
				<p>100 Hz x 15 m = 1500 m/s = Speed</p>
			</div>
		</div>
		<div id="page_3-2-3" class="page">
			<h3 class="sub_head"><small>Physics of Sound Propagation » Characteristics of Sound Waves »
				</small>Phase</h3>
			<p>The phase of a sound wave refers to whether we are in the compression or rarefaction portion of
				the wave (increased or decreased pressure). The phase of the sound has its primary importance in
				how sound waves interact. Two waves with the same phase (and similar frequency) will interact
				constructively. The amplitude of the resulting wave will equal the sum of the two. Two waves
				with opposite phase, off by 1/2 wavelength, will interact destructively. The amplitude of the
				resulting wave will equal the difference between the two. If the amplitudes of both waves are
				the same, two will completely cancel each other out.</p>
			<p class="print_hide">Use the interaction below to examine how varying the phase and amplitude of
				two interacting sound waves changes the resulting sound wave.</p>
			<p class="module_hide">Use this interactive <a href="phase_interaction.htm" class="fbox-res-iframe"
					target="_blank">tool</a> to examine how varying the phase and amplitude of two interacting
				sound waves changes the resulting sound wave. </p>
			<div class="print_hide center"> <iframe src="phase_interaction.htm" width="640" height="646"
					style="min-height:560px;"></iframe> </div>
			<p>Note that as the relative phases of the waves change with respect to each other, the resultant
				wave will alternately grow to its maximum amplitude then shrink back to its minimum.</p>
		</div>
		<div id="page_3-3-0" class="page">
			<h3 class="sub_head"><small>Physics of Sound Propagation » </small>Questions</h3>
		</div>
		<div id="page_3-3-1" class="page">
			<h3 class="sub_head"><small>Physics of Sound Propagation » Questions » </small>Question</h3>
			<div class="panel panel-default interaction-question">
				<div class="panel-body">
					<div class="question-wrap radio">
						<h4>Question 1</h4>
						<p>As sound waves propagate through a medium, in what direction do the molecules move?
							(Choose the best answer.)</p>
						<form action="#">
							<fieldset>
								<div class="response-group-item correct"> <input id="q01a" name="q01"
										type="radio" value="a"> <label for="q01a"> <strong>a) </strong>Back and
										forth, parallel to the direction of propagation</label> </div>
								<div class="response-group-item"> <input id="q01b" name="q01" type="radio"
										value="b"> <label for="q01b"> <strong>b) </strong>Back and forth,
										perpendicular to the direction of propagation</label> </div> <input
									class="submit-button btn btn-primary" name="submit-button" value="Done"
									type="button">
							</fieldset>
						</form>
						<div class="answer">
							<p class="response">The correct answer is a) back and forth, parallel to the
								direction of propagation.</p>
							<p class="explanation">Sound is a pressure wave. The back and forth motion parallel
								to the propagation direction results in compaction and rarefaction of the medium
								through which the sound propagates.</p>
						</div>
						<div class="message">Please make a selection.</div>
					</div>
				</div>
			</div>
		</div>
		<div id="page_3-3-2" class="page">
			<h3 class="sub_head"><small>Physics of Sound Propagation » Questions » </small>Question</h3>
			<div class="panel panel-default interaction-question">
				<div class="panel-body">
					<div class="question-wrap radio">
						<h4>Question 2</h4>
						<p>A sound that is 10 times higher in pressure is perceived as being _____ as loud.
							(Choose the best answer.)</p>
						<form action="#">
							<fieldset>
								<div class="response-group-item"> <input id="q02a" name="q02" type="radio"
										value="a"> <label for="q02a"> <strong>a) </strong>half</label> </div>
								<div class="response-group-item correct"> <input id="q02b" name="q02"
										type="radio" value="b"> <label for="q02b"> <strong>b)
										</strong>twice</label> </div>
								<div class="response-group-item"> <input id="q02c" name="q02" type="radio"
										value="c"> <label for="q02c"> <strong>c) </strong>ten times</label>
								</div>
								<div class="response-group-item"> <input id="q02d" name="q02" type="radio"
										value="d"> <label for="q02d"> <strong>d) </strong>one hundred
										times</label> </div> <input class="submit-button btn btn-primary"
									name="submit-button" value="Done" type="button">
							</fieldset>
						</form>
						<div class="answer">
							<p class="response">The correct answer is b) twice as loud.</p>
							<p class="explanation">This is because human perception of sound is on a logarithmic
								scale.</p>
						</div>
						<div class="message">Please make a selection.</div>
					</div>
				</div>
			</div>
		</div>
		<div id="page_3-3-3" class="page">
			<h3 class="sub_head"><small>Physics of Sound Propagation » Questions » </small>Question</h3>
			<div class="panel panel-default interaction-question">
				<div class="panel-body">
					<div class="question-wrap radio">
						<h4>Question 3</h4>
						<p>How is an increase in sound frequency perceived by the human ear? (Choose the best
							answer.)</p>
						<form action="#">
							<fieldset>
								<div class="response-group-item correct"> <input id="q03a" name="q03"
										type="radio" value="a"> <label for="q03a"> <strong>a) </strong>As a
										higher pitched sound</label> </div>
								<div class="response-group-item"> <input id="q03b" name="q03" type="radio"
										value="b"> <label for="q03b"> <strong>b) </strong>As a louder
										sound</label> </div>
								<div class="response-group-item"> <input id="q03c" name="q03" type="radio"
										value="c"> <label for="q03c"> <strong>c) </strong>As an increase in
										pressure</label> </div> <input class="submit-button btn btn-primary"
									name="submit-button" value="Done" type="button">
							</fieldset>
						</form>
						<div class="answer">
							<p class="response">The correct answer is a) As a higher pitched sound.</p>
							<p class="explanation"> </p>
						</div>
						<div class="message">Please make a selection.</div>
					</div>
				</div>
			</div>
		</div>
		<div id="page_3-3-4" class="page">
			<h3 class="sub_head"><small>Physics of Sound Propagation » Questions » </small>Question</h3>
			<div class="panel panel-default interaction-question">
				<div class="panel-body">
					<div class="question-wrap radio">
						<h4>Question 4</h4>
						<p>How are frequency, speed, and wavelength related? (Choose the best answer.)</p>
						<form action="#">
							<fieldset>
								<div class="response-group-item"> <input id="q04a" name="q04" type="radio"
										value="a"> <label for="q04a"> <strong>a) </strong>Frequency x Speed =
										Wavelength</label> </div>
								<div class="response-group-item correct"> <input id="q04b" name="q04"
										type="radio" value="b"> <label for="q04b"> <strong>b) </strong>Frequency
										x Wavelength = Speed</label> </div>
								<div class="response-group-item"> <input id="q04c" name="q04" type="radio"
										value="c"> <label for="q04c"> <strong>c) </strong>Speed x Wavelength =
										Frequency</label> </div> <input class="submit-button btn btn-primary"
									name="submit-button" value="Done" type="button">
							</fieldset>
						</form>
						<div class="answer">
							<p class="response">The correct answer is b) Frequency x Wavelength = Speed.</p>
							<p class="explanation">Here’s an example: 150 cycles/second x 100 meters/cycle =
								1500 meters/second.</p>
						</div>
						<div class="message">Please make a selection.</div>
					</div>
				</div>
			</div>
		</div>
		<div id="page_3-3-5" class="page">
			<h3 class="sub_head"><small>Physics of Sound Propagation » Questions » </small>Question</h3>
			<div class="panel panel-default interaction-question">
				<div class="panel-body">
					<div class="question-wrap radio">
						<h4>Question 5</h4>
						<p>[T/F] When two sound waves with similar frequency interact, the sound intensity
							(loudness) always increases. (Choose the best answer.)</p>
						<form action="#">
							<fieldset>
								<div class="response-group-item"> <input id="q05a" name="q05" type="radio"
										value="a"> <label for="q05a"> <strong>a) </strong>True</label> </div>
								<div class="response-group-item correct"> <input id="q05b" name="q05"
										type="radio" value="b"> <label for="q05b"> <strong>b)
										</strong>False</label> </div> <input
									class="submit-button btn btn-primary" name="submit-button" value="Done"
									type="button">
							</fieldset>
						</form>
						<div class="answer">
							<p class="response">The correct answer is b) False.</p>
							<p class="explanation">The result of the interaction depends on the phase of the
								waves. Waves with the same phase will interact constructively, resulting in
								higher amplitude than the two separately. However, waves with opposite phase
								will interact destructively and cancel each other out.</p>
						</div>
						<div class="message">Please make a selection.</div>
					</div>
				</div>
			</div>
		</div>
		<div id="page_4-0-0" class="page">
			<h3>Sound Speed</h3>
			<div class="print_hide center" style="max-width:600px;margin:10px auto;">
				<div class="videowrap-16x9"> <video class="html5video" width="690" height="574"
						style="max-width:100%;" poster="media/video/4.0.0.jpg" preload="none" controls
						playsinline>
						<source src="media/video/4.0.0.mp4" type="video/mp4">
					</video> </div>
			</div>
			<div class="module_hide">
				<p>Sound speed variations in seawater typically are relatively small, with the sound speed
					between 1450 and 1540 m/s. However, even small changes in sound speed can significantly
					affect the propagation of sound in the ocean.</p>
			</div>
		</div>
		<div id="page_4-1-0" class="page">
			<h3 class="sub_head"><small>Sound Speed » </small>Factors Affecting Sound Speed Variations</h3>
			<div class="print_hide center" style="max-width:600px;margin:10px auto;">
				<div class="videowrap-16x9"> <video class="html5video" width="690" height="574"
						style="max-width:100%;" poster="media/video/4.1.0.jpg" preload="none" controls
						playsinline>
						<source src="media/video/4.1.0.mp4" type="video/mp4">
					</video> </div>
			</div>
			<div class="module_hide">
				<p>Three ocean properties determine underwater sound speed: temperature, salinity, and pressure.
					Sound speed increases with increasing temperature, salinity, and pressure. </p>
				<p>This <a href="sound_speed_calc.htm" class="fbox-res-iframe" target="_blank">calculator</a>
					uses a simple equation for the speed of sound from Medwin, 1975:</p>
				<p>Sound speed (m/s) = 1449.2 + 4.6T - 0.055T2 + 0.00029T3 + (1.34 - 0.010T)(S - 35) + 0.016z
				</p>
				<p>Where: <br /> T is the temperature (&deg;C), <br /> S is the salinity (parts per thousand),
					and <br /> z is the depth (m). </p>
			</div>
			<div class="panel panel-default interaction-question">
				<div class="panel-body">
					<div class="question-wrap radio">
						<h4>Question 6</h4>
						<p>Let’s use the <a href="sound_speed_calc.htm" class="fbox-res-iframe"
								target="_blank">calculator</a> to see how much of an effect these three factors
							have on sound speed. Ocean salinity typically varies from about 32 to 37 parts per
							thousand (ppt) and averages 35 ppt. Using default values for depth and temperature
							of 0 meters and 15°C, how much does increasing salinity from 32 ppt to 37 ppt change
							the sound speed? (Choose the best answer.)</p>
						<form action="#">
							<fieldset>
								<div class="response-group-item correct"> <input id="q06a" name="q06"
										type="radio" value="a"> <label for="q06a"> <strong>a) </strong>6
										m/s</label> </div>
								<div class="response-group-item"> <input id="q06b" name="q06" type="radio"
										value="b"> <label for="q06b"> <strong>b) </strong>29 m/s</label> </div>
								<div class="response-group-item"> <input id="q06c" name="q06" type="radio"
										value="c"> <label for="q06c"> <strong>c) </strong>79 m/s</label> </div>
								<input class="submit-button btn btn-primary" name="submit-button" value="Done"
									type="button">
							</fieldset>
						</form>
						<div class="answer">
							<p class="response">The correct answer is a) 6 m/s.</p>
							<p class="explanation">The sound speed ranges from 1503 m/s at 32 ppt to 1509 m/s at
								37 ppt. Clearly, in the open ocean, salinity has little effect on sound speed.
							</p>
						</div>
						<div class="message">Please make a selection.</div>
					</div>
				</div>
			</div>
			<div class="panel panel-default interaction-question">
				<div class="panel-body">
					<div class="question-wrap radio">
						<h4>Question 7</h4>
						<p>Use the <a href="sound_speed_calc.htm" class="fbox-res-iframe"
								target="_blank">calculator</a>. Now suppose that you are on a ship that enters
							Chesapeake Bay, where the water is much less salty, and you find a salinity of 10
							ppt at the surface in the middle of the bay. How much does decreasing salinity from
							35 ppt to 10 ppt change the sound speed? (Choose the best answer.)</p>
						<form action="#">
							<fieldset>
								<div class="response-group-item"> <input id="q07a" name="q07" type="radio"
										value="a"> <label for="q07a"> <strong>a) </strong>6 m/s</label> </div>
								<div class="response-group-item correct"> <input id="q07b" name="q07"
										type="radio" value="b"> <label for="q07b"> <strong>b) </strong>29
										m/s</label> </div>
								<div class="response-group-item"> <input id="q07c" name="q07" type="radio"
										value="c"> <label for="q07c"> <strong>c) </strong>79 m/s</label> </div>
								<input class="submit-button btn btn-primary" name="submit-button" value="Done"
									type="button">
							</fieldset>
						</form>
						<div class="answer">
							<p class="response">The correct answer is b) 29 m/s.</p>
							<p class="explanation">The sound speed drops from 1506 to 1477 m/s, or about 29 m/s.
								If you continued all the way to Baltimore, where the water is nearly fresh (just
								a few ppt), the sound speed drops to about 1465 m/s, about 40 m/s slower than
								typical ocean conditions. So we see that salinity can be a significant factor in
								estuarine environments.</p>
							<p class="explanation">Operationally, we usually treat salinity as a constant over a
								region. However, there are places in the ocean that salinity plays a significant
								role in the sound velocity structure:</p>
							<ul>
								<li>Near the outlets of major fresh water rivers or</li>
								<li>Where very salty Mediterranean Sea water intrudes into the Atlantic Ocean
								</li>
							</ul>
						</div>
						<div class="message">Please make a selection.</div>
					</div>
				</div>
			</div>
		</div>
		<div id="page_4-1-1" class="page">
			<h3 class="sub_head"><small>Sound Speed » Factors Affecting Sound Speed Variations »
				</small>Temperature and Sound Speed</h3>
			<div class="panel panel-default interaction-question">
				<div class="panel-body">
					<div class="question-wrap radio">
						<h4>Question 8</h4>
						<p>Use the <a href="sound_speed_calc.htm" class="fbox-res-iframe"
								target="_blank">calculator</a>. Now let’s look at temperature. In the open
							ocean, significant temperature gradients occur in the vicinity of warm currents like
							the Gulf Stream. Across the north side of the Gulf Stream near Cape Hatteras, NC,
							temperature drops 10°C, from 25°C to 15°C, over a very short distance. How does the
							sound speed change in response? (Choose the best answer.)</p>
						<form action="#">
							<fieldset>
								<div class="response-group-item correct"> <input id="q08a" name="q08"
										type="radio" value="a"> <label for="q08a"> <strong>a) </strong>It drops
										about 30 m/s</label> </div>
								<div class="response-group-item"> <input id="q08b" name="q08" type="radio"
										value="b"> <label for="q08b"> <strong>b) </strong>It’s relatively
										unchanged</label> </div>
								<div class="response-group-item"> <input id="q08c" name="q08" type="radio"
										value="c"> <label for="q08c"> <strong>c) </strong>It increases about 30
										m/s</label> </div> <input class="submit-button btn btn-primary"
									name="submit-button" value="Done" type="button">
							</fieldset>
						</form>
						<div class="answer">
							<p class="response">The correct answer is a) It drops about 30 m/s.</p>
							<p class="explanation">Sound speed drops from 1534 to 1506 m/s, about 30 m/s, when
								temperature drops 10°C, a significant change with important operational
								implications.</p>
						</div>
						<div class="message">Please make a selection.</div>
					</div>
				</div>
			</div>
		</div>
		<div id="page_4-1-2" class="page">
			<h3 class="sub_head"><small>Sound Speed » Factors Affecting Sound Speed Variations »
				</small>Pressure and Sound Speed</h3>
			<div class="panel panel-default interaction-question">
				<div class="panel-body">
					<div class="question-wrap radio">
						<h4>Question 9</h4>
						<p>Use the <a href="sound_speed_calc.htm" class="fbox-res-iframe"
								target="_blank">calculator</a>. Suppose now that you’re lucky enough to cruise
							to the North Pole on an Icebreaker. Under the sea ice, the temperature and salinity
							is nearly constant from the surface to the seafloor: 2°C and 35 ppt. How does the
							sound speed change from the surface to the seafloor at 4000 meters? (Choose the best
							answer.)</p>
						<form action="#">
							<fieldset>
								<div class="response-group-item"> <input id="q09a" name="q09" type="radio"
										value="a"> <label for="q09a"> <strong>a) </strong>It drops about 60
										m/s</label> </div>
								<div class="response-group-item"> <input id="q09b" name="q09" type="radio"
										value="b"> <label for="q09b"> <strong>b) </strong>It’s relatively
										unchanged</label> </div>
								<div class="response-group-item correct"> <input id="q09c" name="q09"
										type="radio" value="c"> <label for="q09c"> <strong>c) </strong>It
										increases about 60 m/s</label> </div> <input
									class="submit-button btn btn-primary" name="submit-button" value="Done"
									type="button">
							</fieldset>
						</form>
						<div class="answer">
							<p class="response">The correct answer is c) It increases about 60 m/s.</p>
							<p class="explanation">Sound speed increases from 1458 to 1522 m/s, about 64 m/s,
								when pressure increases with a depth increase of 4000 meters.</p>
						</div>
						<div class="message">Please make a selection.</div>
					</div>
				</div>
			</div>
		</div>
		<div id="page_4-1-3" class="page">
			<h3 class="sub_head"><small>Sound Speed » Factors Affecting Sound Speed Variations » </small>The
				Interplay Between Pressure and Temperature</h3>
			<div class="panel panel-default interaction-question">
				<div class="panel-body">
					<div class="question-wrap radio">
						<h4>Question 10</h4>
						<div class="center"><img src="media/graphics/t_watl.jpg"
								alt="Temperature Profile in the Western North Atlantic. GDEM February Climatology at 22.8N, 307.3E" />
						</div>
						<p>Use the <a href="sound_speed_calc.htm" class="fbox-res-iframe"
								target="_blank">calculator</a>. This plot shows a vertical profile of soundspeed
							from the Western North Atlantic taken from the Generalized Digital Environmental
							Model (GDEM), a climatology compiled by the U.S. Navy. In most of the world’s
							oceans, a relatively warm mixed surface layer is underlain by a sharp thermocline
							with temperatures dropping to about 4°C at 1500 meters depth. Assuming 15°C at the
							surface and 4°C at 1500 meters depth, use the sound speed calculator to determine
							whether the sound speed increases or decreases through the thermocline. In other
							words, which has a greater effect, the decrease in sound speed due to the drop in
							temperature or the increase in sound speed due to the rise in pressure? (Choose the
							best answer.)</p>
						<form action="#">
							<fieldset>
								<div class="response-group-item"> <input id="q10a" name="q10" type="radio"
										value="a"> <label for="q10a"> <strong>a) </strong>Sound speed will
										increase through the thermocline</label> </div>
								<div class="response-group-item correct"> <input id="q10b" name="q10"
										type="radio" value="b"> <label for="q10b"> <strong>b) </strong>Sound
										speed will decrease through the thermocline</label> </div> <input
									class="submit-button btn btn-primary" name="submit-button" value="Done"
									type="button">
							</fieldset>
						</form>
						<div class="answer">
							<p class="response">The correct answer is b) Sound speed will decrease through the
								thermocline from 1506 to 1490 m/s.</p>
							<p class="explanation">Due to temperature alone, the sound speed would drop 40 m/s,
								but this is partially offset by an increase in pressure. Overall, in the upper
								1500 meters (5000 ft) — above the base of the thermocline — temperature
								generally drives the sound speed variations.</p>
							<div class="center"><img src="media/graphics/tsv_watl.jpg"
									alt="Profile of Temperature, Salinity, and Sound Speed in the Western North Atlantic. " />
							</div>
							<p>This plot shows representative temperature, salinity, and sound speed profiles.
								Sound speed drops through the thermocline. From the base of the thermocline at
								1200 meters down to the seafloor at 5000 meters, temperature and salinity change
								very little, while pressure increases with increasing depth. The slow rise in
								sound speed below the thermocline results in a sound speed minimum near the base
								of the thermocline.</p>
						</div>
						<div class="message">Please make a selection.</div>
					</div>
				</div>
			</div>
		</div>
		<div id="page_4-2-0" class="page">
			<h3 class="sub_head"><small>Sound Speed » </small>Sound Speed Profiles</h3>
			<div class="panel panel-default interaction-question">
				<div class="panel-body">
					<div class="question-wrap textentry">
						<h4>Question 11</h4>
						<p>Select the points on the map to view the February and August profiles.</p>
						<div class="center"><img src="media/graphics/tsv_profiles.png" width="600" height="400"
								usemap="#m11" alt="world map" /></div> <map class="mapper" name="m11"> <area
								shape="circle" coords="292,88,13" alt="point a" href="#m11a"> <area
								shape="circle" coords="278,147,13" alt="point b" href="#m11b"> <area
								shape="circle" coords="275,250,13" alt="point c" href="#m11c"> <area
								shape="circle" coords="198,152,13" alt="point d" href="#m11d"> <area
								shape="circle" coords="150,165,13" alt="point e" href="#m11e"> <area
								shape="circle" coords="139,240,13" alt="point f" href="#m11f"> <area
								shape="circle" coords="96,152,13" alt="point g" href="#m11g"> <area
								shape="circle" coords="72,77,13" alt="point h" href="#m11h"> <area
								shape="circle" coords="37,179,13" alt="point i" href="#m11i"> <area
								shape="circle" coords="18,270,13" alt="point j" href="#m11j"> <area
								shape="circle" coords="96,318,13" alt="point k" href="#m11k"> <area
								shape="circle" coords="363,316,13" alt="point l" href="#m11l"> <area
								shape="circle" coords="330,147,13" alt="point m" href="#m11m"> <area
								shape="circle" coords="405,188,13" alt="point n" href="#m11n"> <area
								shape="circle" coords="427,234,13" alt="point o" href="#m11o"> <area
								shape="circle" coords="474,282,13" alt="point p" href="#m11p"> <area
								shape="circle" coords="488,185,13" alt="point q" href="#m11q"> <area
								shape="circle" coords="518,143,13" alt="point r" href="#m11r"> <area
								shape="circle" coords="542,151,13" alt="point s" href="#m11s"> </map>
						<div class="m11">
							<div class="center mapper_item" id="m11a"><img
									src="media/graphics/tsv_profiles_13n64e.png" alt="point a" /></div>
							<div class="center mapper_item" id="m11b"><img
									src="media/graphics/tsv_profiles_74n355e.png" alt="point b" /></div>
							<div class="center mapper_item" id="m11c"><img
									src="media/graphics/tsv_profiles_28s342e.png" alt="point c" /></div>
							<div class="center mapper_item" id="m11d"><img
									src="media/graphics/tsv_profiles_35n298e.png" alt="point d" /></div>
							<div class="center mapper_item" id="m11e"><img
									src="media/graphics/tsv_profiles_25n270e.png" alt="point e" /></div>
							<div class="center mapper_item" id="m11f"><img
									src="media/graphics/tsv_profiles_20s260e.png" alt="point f" /></div>
							<div class="center mapper_item" id="m11g"><img
									src="media/graphics/tsv_profiles_36n232e.png" alt="point g" /></div>
							<div class="center mapper_item" id="m11h"><img
									src="media/graphics/tsv_profiles_80n222e.png" alt="point h" /></div>
							<div class="center mapper_item" id="m11i"><img
									src="media/graphics/tsv_profiles_16n200e.png" alt="point i" /></div>
							<div class="center mapper_item" id="m11j"><img
									src="media/graphics/tsv_profiles_38s188e.png" alt="point j" /></div>
							<div class="center mapper_item" id="m11k"><img
									src="media/graphics/tsv_profiles_70s237e.png" alt="point k" /></div>
							<div class="center mapper_item" id="m11l"><img
									src="media/graphics/tsv_profiles_65s38e.png" alt="point l" /></div>
							<div class="center mapper_item" id="m11m"><img
									src="media/graphics/tsv_profiles_35n19e.png" alt="point m" /></div>
							<div class="center mapper_item" id="m11n"><img
									src="media/graphics/tsv_profiles_13n64e.png" alt="point n" /></div>
							<div class="center mapper_item" id="m11o"><img
									src="media/graphics/tsv_profiles_20s77e.png" alt="point o" /></div>
							<div class="center mapper_item" id="m11p"><img
									src="media/graphics/tsv_profiles_42s101e.png" alt="point p" /></div>
							<div class="center mapper_item" id="m11q"><img
									src="media/graphics/tsv_profiles_14n114e.png" alt="point q" /></div>
							<div class="center mapper_item" id="m11r"><img
									src="media/graphics/tsv_profiles_39n133e.png" alt="point r" /></div>
							<div class="center mapper_item" id="m11s"><img
									src="media/graphics/tsv_profiles_35n148e.png" alt="point s" /></div>
						</div>
						<p class="question">Compare the sound speed profile for the Arctic with other regions.
							What is unique about this profile? (Enter your response and select Done.)</p>
						<form action="#">
							<fieldset> <textarea name="textarea11" cols="50" rows="5" class="textbox"
									id="textarea11"></textarea> <br /> <input
									class="submit-button btn btn-primary" name="submit_button" value="Done"
									type="button" /> </fieldset>
						</form>
						<div class="answer">
							<p class="response"></p>
							<p class="explanation">The Arctic Ocean is unique in that the sound speed,
								temperature, and salinity are all lowest at the surface. This has interesting
								consequences for sound propagation, as we shall see later in the module.</p>
						</div>
					</div>
				</div>
			</div>
			<div class="panel panel-default interaction-question">
				<div class="panel-body">
					<div class="question-wrap textentry">
						<h4>Question 12</h4>
						<p>Select the points on the map to view the February and August profiles.</p>
						<div class="center"><img src="media/graphics/tsv_profiles.png" width="600" height="400"
								usemap="#m12" alt="world map" /></div> <map class="mapper" name="m12"> <area
								shape="circle" coords="292,88,13" alt="point a" href="#m12a"> <area
								shape="circle" coords="278,147,13" alt="point b" href="#m12b"> <area
								shape="circle" coords="275,250,13" alt="point c" href="#m12c"> <area
								shape="circle" coords="198,152,13" alt="point d" href="#m12d"> <area
								shape="circle" coords="150,165,13" alt="point e" href="#m12e"> <area
								shape="circle" coords="139,240,13" alt="point f" href="#m12f"> <area
								shape="circle" coords="96,152,13" alt="point g" href="#m12g"> <area
								shape="circle" coords="72,77,13" alt="point h" href="#m12h"> <area
								shape="circle" coords="37,179,13" alt="point i" href="#m12i"> <area
								shape="circle" coords="18,270,13" alt="point j" href="#m12j"> <area
								shape="circle" coords="96,318,13" alt="point k" href="#m12k"> <area
								shape="circle" coords="363,316,13" alt="point l" href="#m12l"> <area
								shape="circle" coords="330,147,13" alt="point m" href="#m12m"> <area
								shape="circle" coords="405,188,13" alt="point n" href="#m12n"> <area
								shape="circle" coords="427,234,13" alt="point o" href="#m12o"> <area
								shape="circle" coords="474,282,13" alt="point p" href="#m12p"> <area
								shape="circle" coords="488,185,13" alt="point q" href="#m12q"> <area
								shape="circle" coords="518,143,13" alt="point r" href="#m12r"> <area
								shape="circle" coords="542,151,13" alt="point s" href="#m12s"> </map>
						<div class="m12">
							<div class="center mapper_item" id="m12a"><img
									src="media/graphics/tsv_profiles_13n64e.png" alt="point a" /></div>
							<div class="center mapper_item" id="m12b"><img
									src="media/graphics/tsv_profiles_74n355e.png" alt="point b" /></div>
							<div class="center mapper_item" id="m12c"><img
									src="media/graphics/tsv_profiles_28s342e.png" alt="point c" /></div>
							<div class="center mapper_item" id="m12d"><img
									src="media/graphics/tsv_profiles_35n298e.png" alt="point d" /></div>
							<div class="center mapper_item" id="m12e"><img
									src="media/graphics/tsv_profiles_25n270e.png" alt="point e" /></div>
							<div class="center mapper_item" id="m12f"><img
									src="media/graphics/tsv_profiles_20s260e.png" alt="point f" /></div>
							<div class="center mapper_item" id="m12g"><img
									src="media/graphics/tsv_profiles_36n232e.png" alt="point g" /></div>
							<div class="center mapper_item" id="m12h"><img
									src="media/graphics/tsv_profiles_80n222e.png" alt="point h" /></div>
							<div class="center mapper_item" id="m12i"><img
									src="media/graphics/tsv_profiles_16n200e.png" alt="point i" /></div>
							<div class="center mapper_item" id="m12j"><img
									src="media/graphics/tsv_profiles_38s188e.png" alt="point j" /></div>
							<div class="center mapper_item" id="m12k"><img
									src="media/graphics/tsv_profiles_70s237e.png" alt="point k" /></div>
							<div class="center mapper_item" id="m12l"><img
									src="media/graphics/tsv_profiles_65s38e.png" alt="point l" /></div>
							<div class="center mapper_item" id="m12m"><img
									src="media/graphics/tsv_profiles_35n19e.png" alt="point m" /></div>
							<div class="center mapper_item" id="m12n"><img
									src="media/graphics/tsv_profiles_13n64e.png" alt="point n" /></div>
							<div class="center mapper_item" id="m12o"><img
									src="media/graphics/tsv_profiles_20s77e.png" alt="point o" /></div>
							<div class="center mapper_item" id="m12p"><img
									src="media/graphics/tsv_profiles_42s101e.png" alt="point p" /></div>
							<div class="center mapper_item" id="m12q"><img
									src="media/graphics/tsv_profiles_14n114e.png" alt="point q" /></div>
							<div class="center mapper_item" id="m12r"><img
									src="media/graphics/tsv_profiles_39n133e.png" alt="point r" /></div>
							<div class="center mapper_item" id="m12s"><img
									src="media/graphics/tsv_profiles_35n148e.png" alt="point s" /></div>
						</div>
						<p class="question">The Mediterranean and Sea of Japan share some interesting
							characteristics, much different than the midlatitude open oceans. What are they?
							(Enter your response and select Done.)</p>
						<form action="#">
							<fieldset> <textarea name="textarea12" cols="50" rows="5" class="textbox"
									id="textarea12"></textarea> <br /> <input
									class="submit-button btn btn-primary" name="submit_button" value="Done"
									type="button" /> </fieldset>
						</form>
						<div class="answer">
							<p class="response"></p>
							<p class="explanation">In both the Mediterranean and Sea of Japan, the temperature
								profile is nearly isothermal from a very shallow depth to the seafloor. This
								results in a very shallow sound speed minimum in both seas.</p>
						</div>
					</div>
				</div>
			</div>
			<div class="panel panel-default interaction-question">
				<div class="panel-body">
					<div class="question-wrap textentry">
						<h4>Question 13</h4>
						<p>Select the points on the map to view the February and August profiles.</p>
						<div class="center"><img src="media/graphics/tsv_profiles.png" width="600" height="400"
								usemap="#m13" alt="world map" /></div> <map class="mapper" name="m13"> <area
								shape="circle" coords="292,88,13" alt="point a" href="#m13a"> <area
								shape="circle" coords="278,147,13" alt="point b" href="#m13b"> <area
								shape="circle" coords="275,250,13" alt="point c" href="#m13c"> <area
								shape="circle" coords="198,152,13" alt="point d" href="#m13d"> <area
								shape="circle" coords="150,165,13" alt="point e" href="#m13e"> <area
								shape="circle" coords="139,240,13" alt="point f" href="#m13f"> <area
								shape="circle" coords="96,152,13" alt="point g" href="#m13g"> <area
								shape="circle" coords="72,77,13" alt="point h" href="#m13h"> <area
								shape="circle" coords="37,179,13" alt="point i" href="#m13i"> <area
								shape="circle" coords="18,270,13" alt="point j" href="#m13j"> <area
								shape="circle" coords="96,318,13" alt="point k" href="#m13k"> <area
								shape="circle" coords="363,316,13" alt="point l" href="#m13l"> <area
								shape="circle" coords="330,147,13" alt="point m" href="#m13m"> <area
								shape="circle" coords="405,188,13" alt="point n" href="#m13n"> <area
								shape="circle" coords="427,234,13" alt="point o" href="#m13o"> <area
								shape="circle" coords="474,282,13" alt="point p" href="#m13p"> <area
								shape="circle" coords="488,185,13" alt="point q" href="#m13q"> <area
								shape="circle" coords="518,143,13" alt="point r" href="#m13r"> <area
								shape="circle" coords="542,151,13" alt="point s" href="#m13s"> </map>
						<div class="m13">
							<div class="center mapper_item" id="m13a"><img
									src="media/graphics/tsv_profiles_13n64e.png" alt="point a" /></div>
							<div class="center mapper_item" id="m13b"><img
									src="media/graphics/tsv_profiles_74n355e.png" alt="point b" /></div>
							<div class="center mapper_item" id="m13c"><img
									src="media/graphics/tsv_profiles_28s342e.png" alt="point c" /></div>
							<div class="center mapper_item" id="m13d"><img
									src="media/graphics/tsv_profiles_35n298e.png" alt="point d" /></div>
							<div class="center mapper_item" id="m13e"><img
									src="media/graphics/tsv_profiles_25n270e.png" alt="point e" /></div>
							<div class="center mapper_item" id="m13f"><img
									src="media/graphics/tsv_profiles_20s260e.png" alt="point f" /></div>
							<div class="center mapper_item" id="m13g"><img
									src="media/graphics/tsv_profiles_36n232e.png" alt="point g" /></div>
							<div class="center mapper_item" id="m13h"><img
									src="media/graphics/tsv_profiles_80n222e.png" alt="point h" /></div>
							<div class="center mapper_item" id="m13i"><img
									src="media/graphics/tsv_profiles_16n200e.png" alt="point i" /></div>
							<div class="center mapper_item" id="m13j"><img
									src="media/graphics/tsv_profiles_38s188e.png" alt="point j" /></div>
							<div class="center mapper_item" id="m13k"><img
									src="media/graphics/tsv_profiles_70s237e.png" alt="point k" /></div>
							<div class="center mapper_item" id="m13l"><img
									src="media/graphics/tsv_profiles_65s38e.png" alt="point l" /></div>
							<div class="center mapper_item" id="m13m"><img
									src="media/graphics/tsv_profiles_35n19e.png" alt="point m" /></div>
							<div class="center mapper_item" id="m13n"><img
									src="media/graphics/tsv_profiles_13n64e.png" alt="point n" /></div>
							<div class="center mapper_item" id="m13o"><img
									src="media/graphics/tsv_profiles_20s77e.png" alt="point o" /></div>
							<div class="center mapper_item" id="m13p"><img
									src="media/graphics/tsv_profiles_42s101e.png" alt="point p" /></div>
							<div class="center mapper_item" id="m13q"><img
									src="media/graphics/tsv_profiles_14n114e.png" alt="point q" /></div>
							<div class="center mapper_item" id="m13r"><img
									src="media/graphics/tsv_profiles_39n133e.png" alt="point r" /></div>
							<div class="center mapper_item" id="m13s"><img
									src="media/graphics/tsv_profiles_35n148e.png" alt="point s" /></div>
						</div>
						<p class="question">Compare the Eastern Atlantic to the Western Atlantic. How do they
							differ? (Enter your response and select Done.)</p>
						<form action="#">
							<fieldset> <textarea name="textarea13" cols="50" rows="5" class="textbox"
									id="textarea13"></textarea> <br /> <input
									class="submit-button btn btn-primary" name="submit_button" value="Done"
									type="button" /> </fieldset>
						</form>
						<div class="answer">
							<p class="response"></p>
							<p class="explanation">The Eastern Atlantic has local maximum in the profile
								centered at about 1200 meters depth. This bump is caused by warmer, saltier
								water, which causes a bump in the sound speed. The source of the warm, salty
								water is outflow from the Mediterranean Sea. After exiting the Mediterranean,
								this water settles to a level centered about 1200 meters deep. A similar bump
								can be found in the Indian Ocean near the outflow of the Red Sea.</p>
						</div>
					</div>
				</div>
			</div>
		</div>
		<div id="page_5-0-0" class="page">
			<h3>Refraction and Reflection</h3>
			<div class="print_hide center" style="max-width:600px;margin:10px auto;">
				<div class="videowrap-16x9"> <video class="html5video" width="690" height="574"
						style="max-width:100%;" poster="media/video/5.0.0.jpg" preload="none" controls
						playsinline>
						<source src="media/video/5.0.0.mp4" type="video/mp4">
					</video> </div>
			</div>
			<div class="module_hide">
				<div class="center"><img src="media/graphics/shallow_sound_channel.jpg"
						alt="Transmission loss diagram for sound propagation near a shallow sound channel, also showing surface reflections." />
				</div>
				<p>As sound waves pass through the ocean, they refract as they speed up and slow down, and
					reflect off of interfaces at the sea surface and seafloor. In this section we examine how
					this refraction and reflection affect sound propagation, like that shown in this graphic.
				</p>
			</div>
		</div>
		<div id="page_5-1-0" class="page">
			<h3 class="sub_head"><small>Refraction and Reflection » </small>Sound Rays</h3>
			<div class="print_hide center" style="max-width:600px;margin:10px auto;">
				<div class="videowrap-16x9"> <video class="html5video" width="690" height="574"
						style="max-width:100%;" poster="media/video/5.1.0.jpg" preload="none" controls
						playsinline>
						<source src="media/video/5.1.0.mp4" type="video/mp4">
					</video> </div>
			</div>
			<div class="module_hide">
				<div class="center">
					<script
						type="text/javascript">if (printVersion) { document.write('<a href="media/video/wave_ray_propagation.mp4" target="_blank"><img class="img-responsive center-block" src="media/video/wave_ray_propagation.jpg" alt="conceptual animation of wave propagation with rays. Includes reflection off the seafloor and sea surface, but no refraction"/></a>'); }</script>
					<script
						type="text/javascript">if (printVersion === false) { document.write('<video class="html5video center-block" width="500" height="350" poster="media/video/wave_ray_propagation.jpg" preload="auto" controls playsinline   ><source src="media/video/wave_ray_propagation.mp4" type="video/mp4"></video>'); }</script>
				</div><br>
				<p>So far in our discussion of sound waves, we have viewed them as wave fronts moving away from
					some source. We can also visualize sound as a series of rays emanating from that source.
					These rays are lines that always stay oriented perpendicular to the wave front. These rays
					make it easier to see wave propagation paths.</p>
			</div>
		</div>
		<div id="page_5-2-0" class="page">
			<h3 class="sub_head"><small>Refraction and Reflection » </small>Refraction</h3>
			<div class="print_hide center" style="max-width:600px;margin:10px auto;">
				<div class="videowrap-16x9"> <video class="html5video" width="690" height="574"
						style="max-width:100%;" poster="media/video/5.2.0.jpg" preload="none" controls
						playsinline>
						<source src="media/video/5.2.0.mp4" type="video/mp4">
					</video> </div>
			</div>
			<div class="module_hide">
				<div class="center">
					<script>
						if (printVersion) {
							document.write(
								'<a href="media/loops/wave_refraction/index.htm" class="datalooper fancybox.iframe"><img src="media/loops/wave_refraction/wave_refraction_01.png" alt="conceptual animation of wave refraction" class="img-responsive center-block"></a>'
							);
						} else {
							document.write(
								'<iframe src="media/loops/wave_refraction/index.htm" width="478" height="370" frameborder="0" style="min-height:420px;min-width:100%"></iframe>'
							);
						}
					</script>
				</div>
				<p>In an ocean with a uniform sound speed, sound rays would always travel straight paths.
					However, when sound waves encounter a change in speed, they refract and bend. Analogous to
					surface waves at the ocean surface, sound wave bend toward the slower speed. This animation
					illustrates how that occurs. In the ocean, the amount that sound refracts is determined by
					its frequency and speed. The ocean is a complex medium where the sound speed changes with
					position, both horizontally and vertically, and with time. Consequently, sound continually
					bends as it passes through seawater.</p>
			</div>
		</div>
		<div id="page_5-3-0" class="page">
			<h3 class="sub_head"><small>Refraction and Reflection » </small>Sound Velocity Gradients</h3>
			<div class="print_hide center" style="max-width:600px;margin:10px auto;">
				<div class="videowrap-16x9"> <video class="html5video" width="690" height="574"
						style="max-width:100%;" poster="media/video/5.3.0.jpg" preload="none" controls
						playsinline>
						<source src="media/video/5.3.0.mp4" type="video/mp4">
					</video> </div>
			</div>
			<div class="module_hide">
				<p>We start by looking at vertical changes in sound speed. We can characterize sound velocity
					profiles as having a positive, negative, or neutral gradient. With a positive gradient, the
					sound velocity increases with depth, with a negative gradient, sound velocity decreases with
					depth, and with a neutral gradient, the sound velocity is constant.</p>
			</div>
			<div class="panel panel-default interaction-question">
				<div class="panel-body">
					<div class="question-wrap inlinedropdowns">
						<h4>Question 14</h4>
						<div class="center"><img src="media/graphics/svt_may_35n290e.jpg"
								alt="Vertical Profiles of Temperature, Salinity, and Sound Speed from the Western Atlantic. " />
						</div>
						<p>This example comes from the Western Atlantic for the month of May and shows profiles
							for water temperature sound speed and salinity. Identify the gradient in each
							segment of the sound velocity profile. (Use the pull-down menu to choose the best
							answer.)</p>
						<form action="#">
							<fieldset>
								<div class="response-group-item"><strong> a) </strong> (100-400 meters): <select
										name="q14a">
										<option>--</option>
										<option>positive</option>
										<option>negative</option>
										<option>neutral</option>
									</select> </div>
								<div class="correct response-group-item dropdown_correct answer">neutral</div>
								<div class="response-group-item"><strong> b) </strong> (600-1000 meters):
									<select name="q14b">
										<option>--</option>
										<option>positive</option>
										<option>negative</option>
										<option>neutral</option>
									</select> </div>
								<div class="correct response-group-item dropdown_correct answer">negative</div>
								<div class="response-group-item"><strong> c) </strong> (1500-4500 meters):
									<select name="q14c">
										<option>--</option>
										<option>positive</option>
										<option>negative</option>
										<option>neutral</option>
									</select> </div>
								<div class="correct response-group-item dropdown_correct answer">positive</div>
								<input class="submit-button btn btn-primary" name="submit-button" value="Done"
									type="button">
							</fieldset>
						</form>
						<div class="answer">
							<p class="response print_hide">The correct answers are highlighted above.</p>
							<p class="explanation">Near the surface, from 100 - 400 meters, the sound velocity
								gradient is neutral. This is caused by the offsetting effects of increasing
								pressure and decreasing temperature, while salinity remains largely unchanged.
								Deeper in the water column, we see a negative sound velocity gradient in the
								thermocline, where the temperature decreases rapidly with depth down to about
								1200 meters. Below the thermocline, temperature and salinity become nearly
								constant while pressure increases with depth. This leads to a positive sound
								velocity gradient.</p>
						</div>
						<div class="message">Please make a selection.</div>
					</div>
				</div>
			</div>
			<div class="panel panel-default interaction-question">
				<div class="panel-body">
					<div class="question-wrap inlinedropdowns">
						<h4>Question 15</h4>
						<p>Now, based on what you’ve learned about gradients and refraction, select the expected
							refraction pattern on the appropriate part of the sound velocity profile. (Use the
							pull-down menu to choose the best answer.)</p>
						<div class="center"><img src="media/graphics/arrows_page5_3.jpg" alt="arrows" /></div>
						<form action="#">
							<fieldset>
								<div class="response-group-item"><strong> a) </strong> (100-400 meters): <select
										name="q15a">
										<option>--</option>
										<option>Refraction pattern (a)</option>
										<option>Refraction pattern (b)</option>
										<option>Refraction pattern (c)</option>
									</select> </div>
								<div class="correct response-group-item dropdown_correct answer">refraction
									pattern (a)</div>
								<div class="response-group-item"><strong> b) </strong>(600-1000 meters): <select
										name="q15b">
										<option>--</option>
										<option>Refraction pattern (a)</option>
										<option>Refraction pattern (b)</option>
										<option>Refraction pattern (c)</option>
									</select> </div>
								<div class="correct response-group-item dropdown_correct answer">refraction
									pattern (c)</div>
								<div class="response-group-item"><strong> c) </strong>(1500-4500 meters):
									<select name="q15c">
										<option>--</option>
										<option>Refraction pattern (a)</option>
										<option>Refraction pattern (b)</option>
										<option>Refraction pattern (c)</option>
									</select> </div>
								<div class="correct response-group-item dropdown_correct answer">refraction
									pattern (b)</div> <input class="submit-button btn btn-primary"
									name="submit-button" value="Done" type="button">
							</fieldset>
						</form>
						<div class="answer">
							<p class="response print_hide">The correct answers are highlighted above.</p>
							<p class="explanation">Remember that sound waves refract toward slower sound speeds.
								As a result, sound refracts downward through the thermocline and upward in the
								deep ocean layer below. In the shallow water layer, sound radiates uniformly due
								to the neutral sound velocity gradient.</p>
							<div class="center"><img src="media/graphics/refraction_gradient.jpg"
									alt="Schematic diagram showing the effect of sound speed gradient on wave refraction" />
							</div>
							<p>Note that the amount of refraction experienced by a sound wave is not constant .
								As this schematic diagram shows, the greater the sound speed gradient, the more
								sound waves curve.</p>
						</div>
						<div class="message">Please make a selection.</div>
					</div>
				</div>
			</div>
		</div>
		<div id="page_5-4-0" class="page">
			<h3 class="sub_head"><small>Refraction and Reflection » </small>Refraction and Frequency</h3>
			<div class="print_hide center" style="max-width:600px;margin:10px auto;">
				<div class="videowrap-16x9"> <video class="html5video" width="690" height="574"
						style="max-width:100%;" poster="media/video/5.4.0.jpg" preload="none" controls
						playsinline>
						<source src="media/video/5.4.0.mp4" type="video/mp4">
					</video> </div>
			</div>
			<div class="module_hide">
				<p>As the previous sections have illustrated, sound refracts as it passes through water due to
					changes in sound speed. The refraction may be described using Snell’s Law, where the amount
					of refraction varies with the index of refraction (which is the ratio of the sound speed in
					the medium to a reference sound speed). However, it is not simply a matter of applying
					Snell’s law. The index of refraction in the water is actually frequency dependent, and
					increases with increasing frequency. The rate of change in the index of refraction is
					proportional to the wavelength of the sound, consequently it changes more rapidly at low
					frequencies than at higher frequencies.</p>
			</div>
		</div>
		<div id="page_5-5-0" class="page">
			<h3 class="sub_head"><small>Refraction and Reflection » </small>Reflection</h3>
			<div class="print_hide center" style="max-width:600px;margin:10px auto;">
				<div class="videowrap-16x9"> <video class="html5video" width="690" height="574"
						style="max-width:100%;" poster="media/video/5.5.0.jpg" preload="none" controls
						playsinline>
						<source src="media/video/5.5.0.mp4" type="video/mp4">
					</video> </div>
			</div>
			<div class="module_hide">
				<p>Sound propagating through water encounters a variety of interfaces, the most obvious being
					the sea surface and the seafloor. According to Haines (1974), "…the interface between sea
					and air acts as a virtually complete barrier to sound." However, neither the sea surface nor
					the seafloor can be considered a 100% hard surface where the sound is guaranteed to reflect.
				</p>
				<div class="center">
					<script
						type="text/javascript">if (printVersion) { document.write('<a href="media/video/sfc_scatter.mp4" target="_blank"><img class="img-responsive center-block" src="media/video/sfc_scatter.jpg" alt="Schematic animation showing how ocean waves scatter sound waves"/></a>'); }</script>
					<script
						type="text/javascript">if (printVersion === false) { document.write('<video class="html5video center-block" width="500" height="350" poster="media/video/sfc_scatter.jpg" preload="auto" controls playsinline   ><source src="media/video/sfc_scatter.mp4" type="video/mp4"></video>'); }</script>
				</div><br>
				<p>At the surface, waves and ripples scatter incoming waves.</p>
				<div class="center">
					<script
						type="text/javascript">if (printVersion) { document.write('<a href="media/video/seafloor_absorb.mp4" target="_blank"><img class="img-responsive center-block" src="media/video/seafloor_absorb.jpg" alt="Schematic animation showing how the seafloor absorbs sound waves"/></a>'); }</script>
					<script
						type="text/javascript">if (printVersion === false) { document.write('<video class="html5video center-block" width="500" height="350" poster="media/video/seafloor_absorb.jpg" preload="auto" controls playsinline   ><source src="media/video/seafloor_absorb.mp4" type="video/mp4"></video>'); }</script>
				</div><br>
				<p>At the seafloor, sediments can absorb much of the sound without reflection and a rough bottom
					can scatter much of the energy.</p>
				<p>Regardless of the details, a great deal of sound energy is typically reflected at these
					surfaces. And generally, the angle between the surface and the incoming wave equals the
					angle between the surface and the outgoing wave.</p>
			</div>
		</div>
		<div id="page_6-0-0" class="page">
			<h3>Propagation Paths</h3>
			<div class="print_hide center" style="max-width:600px;margin:10px auto;">
				<div class="videowrap-16x9"> <video class="html5video" width="690" height="574"
						style="max-width:100%;" poster="media/video/6.0.0.jpg" preload="none" controls
						playsinline>
						<source src="media/video/6.0.0.mp4" type="video/mp4">
					</video> </div>
			</div>
			<div class="module_hide">
				<div class="center"><img src="media/graphics/whale_breaching.jpg"
						alt="Photo of whale breaching" /> </div>
				<p>To badly paraphrase an old question: If a whale falls in the ocean, will anyone hear it? In
					other words, if we make a noise in the ocean, where does the sound go? The answer is
					complicated and depends on several factors.</p>
				<div class="center"><img src="media/graphics/tsv_watl.jpg"
						alt="Profile of Temperature, Salinity, and Sound Speed in the Western North Atlantic. " />
				</div>
				<p>In our discussion we start with a relatively common and simple situation: a sound source at
					the surface with a simple, common sound velocity profile: a positive sound velocity gradient
					in an isothermal mixed layer near the surface, a negative sound velocity gradient in the
					thermocline down to about 1000 meters, then back to a positive sound velocity gradient in
					the deep, cold isothermal layer that extends to the seafloor.</p>
				<p>With these conditions, we’ll see what happens as sound waves propagate progressively deeper
					into the ocean.</p>
			</div>
		</div>
		<div id="page_6-1-0" class="page">
			<h3 class="sub_head"><small>Propagation Paths » </small>The Surface Duct, Mixed Layer, and Sonic
				Layer Depth</h3>
			<div class="print_hide center" style="max-width:600px;margin:10px auto;">
				<div class="videowrap-16x9"> <video class="html5video" width="690" height="574"
						style="max-width:100%;" poster="media/video/6.1.0.jpg" preload="none" controls
						playsinline>
						<source src="media/video/6.1.0.mp4" type="video/mp4">
					</video> </div>
			</div>
			<div class="module_hide">
				<div class="center"><img src="media/graphics/svt_profile.jpg"
						alt="Temperature and Sound Speed Profiles showing Mixed Layer, Surface Duct, and Sonic Layer Depth. GDEM climatology for February at 36.1 N, 314.4 E" />
				</div>
				<p>The terms surface duct, mixed layer, and sonic layer depth are often used interchangeably;
					however they are not the same thing.</p>
			</div>
		</div>
		<div id="page_6-1-1" class="page">
			<h3 class="sub_head"><small>Propagation Paths » The Surface Duct, Mixed Layer, and Sonic Layer Depth
					» </small>Surface Duct</h3>
			<div class="print_hide center" style="max-width:600px;margin:10px auto;">
				<div class="videowrap-16x9"> <video class="html5video" width="690" height="574"
						style="max-width:100%;" poster="media/video/6.1.1.jpg" preload="none" controls
						playsinline>
						<source src="media/video/6.1.1.mp4" type="video/mp4">
					</video> </div>
			</div>
			<div class="module_hide">
				<div class="center"><img src="media/graphics/svt_profile.jpg"
						alt="Temperature and Sound Speed Profiles showing Mixed Layer, Surface Duct, and Sonic Layer Depth. GDEM climatology for February at 36.1 N, 314.4 E" />
				</div>
				<p>A surface duct exists any time the surface sound speed is less than the sound speed at the
					top of the thermocline, resulting in a positive sound speed gradient.</p>
				<div class="center" style="max-width:500px;margin:10px auto;">
					<script>
						if (printVersion) {
							document.write(
								'<a href="media/video/surface_duct.mp4" target="_blank"><img src="media/video/surface_duct.jpg" alt="Sound Propagation and Bottom Bounce" class="img-responsive center-block"></a>'
							);
						} else {
							document.write(
								'<div><video  loop muted playsinline class="html5video center-block" width="500" height="350" style="max-width:100%;" poster="media/video/surface_duct.jpg" preload="auto" controls><source src="media/video/surface_duct.mp4" type="video/mp4" /></video><p></p></div>'
							);
						}
					</script>
				</div>
				<p>If the sound speed gradient is steep or the surface duct is sufficiently deep (which depends
					on the frequency of the sound), the sound will be refracted upward. Once the sound reaches
					the surface, it is reflected, only to be refracted upward again by the gradient. This
					effectively "traps" the sound in the surface duct. A surface duct of 50 ft is sufficiently
					deep to trap sound at frequencies above around 3000 Hz. However, a duct 300 ft deep or more
					is needed to duct frequencies 300 Hz or lower. Thus, higher frequencies may duct while lower
					frequencies do not. </p>
			</div>
		</div>
		<div id="page_6-1-2" class="page">
			<h3 class="sub_head"><small>Propagation Paths » The Surface Duct, Mixed Layer, and Sonic Layer Depth
					» </small>Mixed Layer</h3>
			<div class="print_hide center" style="max-width:600px;margin:10px auto;">
				<div class="videowrap-16x9"> <video class="html5video" width="690" height="574"
						style="max-width:100%;" poster="media/video/6.1.2.jpg" preload="none" controls
						playsinline>
						<source src="media/video/6.1.2.mp4" type="video/mp4">
					</video> </div>
			</div>
			<div class="module_hide">
				<div class="center"><img src="media/graphics/svt_profile.jpg"
						alt="Temperature and Sound Speed Profiles showing Mixed Layer, Surface Duct, and Sonic Layer Depth. GDEM climatology for February at 36.1 N, 314.4 E" />
				</div>
				<p>The mixed layer is defined as a layer of surface water that has a nearly constant
					temperature. </p>
				<div class="center"><img src="media/graphics/mixed_layer.jpg"
						alt="Schematic diagram showing origin of the mixed layer" /></div>
				<p>The mixed layer arises from mixing in response to wind and waves. As you might imagine,
					stronger winds and larger waves result in a deeper mixed layer. At times the mixed layer and
					the surface duct coincide. However, it is possible to have a surface duct without a mixed
					layer.</p>
			</div>
		</div>
		<div id="page_6-1-3" class="page">
			<h3 class="sub_head"><small>Propagation Paths » The Surface Duct, Mixed Layer, and Sonic Layer Depth
					» </small>Sonic Layer Depth</h3>
			<div class="print_hide center" style="max-width:600px;margin:10px auto;">
				<div class="videowrap-16x9"> <video class="html5video" width="690" height="574"
						style="max-width:100%;" poster="media/video/6.1.3.jpg" preload="none" controls
						playsinline>
						<source src="media/video/6.1.3.mp4" type="video/mp4">
					</video> </div>
			</div>
			<div class="module_hide">
				<div class="center"><img src="media/graphics/svt_profile.jpg"
						alt="Temperature and Sound Speed Profiles showing Mixed Layer, Surface Duct, and Sonic Layer Depth. GDEM climatology for February at 36.1 N, 314.4 E" />
				</div>
				<p>The bottom of the surface duct is located where the sound velocity gradient changes from
					positive in the mixed layer to negative in the thermocline. The sonic layer depth (SLD) is
					the maximum depth of the surface duct.</p>
				<div class="center">
					<script
						type="text/javascript">if (printVersion) { document.write('<a href="media/video/sonic_layer_depth.mp4" target="_blank"><img class="img-responsive center-block" src="media/video/sonic_layer_depth.jpg" alt="Schematic diagram showing sound ray propagation and sonic layer depth."/></a>'); }</script>
					<script
						type="text/javascript">if (printVersion === false) { document.write('<video class="html5video center-block" width="500" height="350" poster="media/video/sonic_layer_depth.jpg" preload="auto" controls playsinline   ><source src="media/video/sonic_layer_depth.mp4" type="video/mp4"></video>'); }</script>
				</div><br>
				<p>The ray path that leaves the sound source with the steepest angle and still refracts back up
					to the surface at the SLD is called the limiting ray. Shallower ray paths stay in the
					surface duct, steeper ray paths refract downward as they enter the negative sound speed
					gradient in the thermocline.</p>
			</div>
		</div>
		<div id="page_6-1-4" class="page">
			<h3 class="sub_head"><small>Propagation Paths » The Surface Duct, Mixed Layer, and Sonic Layer Depth
					» </small>Questions</h3>
			<div class="panel panel-default interaction-question">
				<div class="panel-body">
					<div class="question-wrap radio">
						<h4>Question 16</h4>
						<p>This graphic shows profiles of temperature, salinity, and sound speed profiles from
							near Antarctica in February and August.</p>
						<div class="center"><img src="media/graphics/tsv_antarctica.jpg"
								alt="Temperature, Salinity, and Sound Speed Profiles from Indian Ocean near Antarctica" />
						</div>
						<p>Which month exhibits a surface duct? (Choose the best answer.)</p>
						<form action="#">
							<fieldset>
								<div class="response-group-item"> <input id="q16a" name="q16" type="radio"
										value="a"> <label for="q16a"> <strong>a) </strong>February</label>
								</div>
								<div class="response-group-item correct"> <input id="q16b" name="q16"
										type="radio" value="b"> <label for="q16b"> <strong>b)
										</strong>August</label> </div>
								<div class="response-group-item"> <input id="q16c" name="q16" type="radio"
										value="c"> <label for="q16c"> <strong>c) </strong>Both</label> </div>
								<div class="response-group-item"> <input id="q16d" name="q16" type="radio"
										value="d"> <label for="q16d"> <strong>d) </strong>Neither</label> </div>
								<input class="submit-button btn btn-primary" name="submit-button" value="Done"
									type="button">
							</fieldset>
						</form>
						<div class="answer">
							<p class="response">The correct answer is b) August.</p>
							<p class="explanation">A surface duct requires that sound speed increase with depth
								from the surface downward. The August profile shows this.</p>
						</div>
						<div class="message">Please make a selection.</div>
					</div>
				</div>
			</div>
			<div class="panel panel-default interaction-question">
				<div class="panel-body">
					<div class="question-wrap radio">
						<h4>Question 17</h4>
						<p>This graphic shows profiles of temperature, salinity, and sound speed profiles from
							near Antarctica in February and August.</p>
						<div class="center"><img src="media/graphics/tsv_antarctica.jpg"
								alt="Temperature, Salinity, and Sound Speed Profiles from Indian Ocean near Antarctica" />
						</div>
						<p>What is the sonic layer depth in August? (Choose the best answer.)</p>
						<form action="#">
							<fieldset>
								<div class="response-group-item correct"> <input id="q17a" name="q17"
										type="radio" value="a"> <label for="q17a"> <strong>a) </strong>30
										m</label> </div>
								<div class="response-group-item"> <input id="q17b" name="q17" type="radio"
										value="b"> <label for="q17b"> <strong>b) </strong>100 m</label> </div>
								<div class="response-group-item"> <input id="q17c" name="q17" type="radio"
										value="c"> <label for="q17c"> <strong>c) </strong>150 m</label> </div>
								<div class="response-group-item"> <input id="q17d" name="q17" type="radio"
										value="d"> <label for="q17d"> <strong>d) </strong>250 m</label> </div>
								<input class="submit-button btn btn-primary" name="submit-button" value="Done"
									type="button">
							</fieldset>
						</form>
						<div class="answer">
							<p class="response">The correct answer is a) 30 m.</p>
							<p class="explanation">The sonic layer depth marks the sound speed maximum
								immediately below the surface, typically at the top of the thermocline. However,
								near Antarctica, ocean temperatures at the surface are colder than those at
								depth.</p>
						</div>
						<div class="message">Please make a selection.</div>
					</div>
				</div>
			</div>
		</div>
		<div id="page_6-2-0" class="page">
			<h3 class="sub_head"><small>Propagation Paths » </small>Convergence Zone Paths</h3>
		</div>
		<div id="page_6-2-1" class="page">
			<h3 class="sub_head"><small>Propagation Paths » Convergence Zone Paths » </small>Limiting Rays </h3>
			<div class="print_hide center" style="max-width:600px;margin:10px auto;">
				<div class="videowrap-16x9"> <video class="html5video" width="690" height="574"
						style="max-width:100%;" poster="media/video/6.2.1.jpg" preload="none" controls
						playsinline>
						<source src="media/video/6.2.1.mp4" type="video/mp4">
					</video> </div>
			</div>
			<div class="module_hide">
				<div class="center"><img src="media/graphics/cz.jpg"
						alt="Schematic diagram showing sound ray propagation and convergence zone" /></div>
				<p>In the deep ocean, sound paths that leave a surface source at an angle just steep enough to
					escape the mixed layer refract downward through the thermocline, and then back upward in the
					deep isothermal layer.</p>
				<p>Several factors promote sound propagation through the mixed layer to the thermocline below:
				</p>
				<ol>
					<li>A low sound frequency that doesn&rsquo;t refract as much.</li>
					<li>A negative or only weakly positive sound velocity gradient. </li>
					<li>A shallow sonic layer depth that limits the depth through which the sound can refract.
					</li>
				</ol>
				<p>The shallowest ray to turn back toward the surface is called the limiting ray. The limiting
					ray becomes horizontal at the conjugate depth, as shown here. This same ray is essentially
					the same as the limiting ray in the surface duct, but ever so slightly steeper so that it
					refracts downward at the sonic layer depth. Thus, the limiting ray is horizontal at both the
					sonic layer depth and the conjugate depth, where the sound speed is the same.</p>
				<p>Sound rays that leave the source at steeper angles than the limiting ray dive progressively
					deeper. Eventually, one of those rays will just graze the bottom. This is our bottom
					limiting ray. Any steeper and it runs into the seafloor.</p>
				<p>Note that, technically speaking, the conjugate depth occurs where the sound speed equals that
					at the source. However, in the case of a source at the surface, the conjugate depth is taken
					as the depth where the sound speed equals that at the sonic layer depth.</p>
			</div>
		</div>
		<div id="page_6-2-2" class="page">
			<h3 class="sub_head"><small>Propagation Paths » Convergence Zone Paths » </small>Convergence Zones
			</h3>
			<div class="print_hide center" style="max-width:600px;margin:10px auto;">
				<div class="videowrap-16x9"> <video class="html5video" width="690" height="574"
						style="max-width:100%;" poster="media/video/6.2.2.jpg" preload="none" controls
						playsinline>
						<source src="media/video/6.2.2.mp4" type="video/mp4">
					</video> </div>
			</div>
			<div class="module_hide">
				<div class="center"><img src="media/graphics/cz.jpg"
						alt="Schematic diagram showing sound ray propagation and convergence zone" /></div>
				<p>As we can see here, all of the sound rays bracketed by the upper and lower limiting rays tend
					to come together near the surface in what we call a Convergence Zone (CZ). This concentrates
					the sound in a small area and can have important operational implications. How much sound
					gets concentrated depends on the distance from the conjugate depth to the seafloor, labeled
					as the depth excess. The greater the depth excess, the greater the window for sound energy
					to pass through and refract back to the surface.</p>
				<p>Note that for very deep water and relatively high frequency, very little sound energy comes
					anywhere close to the seafloor. When this happens, the depth excess can actually be far less
					than the depth below the conjugate depth.</p>
			</div>
		</div>
		<div id="page_6-2-3" class="page">
			<h3 class="sub_head"><small>Propagation Paths » Convergence Zone Paths » </small>Multiple
				Convergence Zones</h3>
			<div class="print_hide center" style="max-width:600px;margin:10px auto;">
				<div class="videowrap-16x9"> <video class="html5video" width="690" height="574"
						style="max-width:100%;" poster="media/video/6.2.3.jpg" preload="none" controls
						playsinline>
						<source src="media/video/6.2.3.mp4" type="video/mp4">
					</video> </div>
			</div>
			<div class="module_hide">
				<div class="center"><img src="media/graphics/cz_reps.jpg"
						alt="Schematic diagram showing sound ray propagation and multiple convergence zones" />
				</div>
				<p>As you might expect, when the sound waves return to the surface in a convergence zone, they
					reflect back down, and refract back up in a second convergence zone further away. In fact,
					under the right circumstances, this occurs several times, resulting in several convergence
					zones at regular intervals.</p>
			</div>
		</div>
		<div id="page_6-3-0" class="page">
			<h3 class="sub_head"><small>Propagation Paths » </small>Bottom Bounce</h3>
			<div class="print_hide center" style="max-width:600px;margin:10px auto;">
				<div class="videowrap-16x9"> <video class="html5video" width="690" height="574"
						style="max-width:100%;" poster="media/video/6.3.0.jpg" preload="none" controls
						playsinline>
						<source src="media/video/6.3.0.mp4" type="video/mp4">
					</video> </div>
			</div>
			<div class="module_hide">
				<div class="center">
					<script
						type="text/javascript">if (printVersion) { document.write('<a href="media/video/bottom_bounce.mp4" target="_blank"><img class="img-responsive center-block" src="media/video/bottom_bounce.jpg" alt="Schematic animation showing sound ray propagation and bottom bounce"/></a>'); }</script>
					<script
						type="text/javascript">if (printVersion === false) { document.write('<video class="html5video center-block" width="500" height="350" poster="media/video/bottom_bounce.jpg" preload="auto" controls playsinline   ><source src="media/video/bottom_bounce.mp4" type="video/mp4"></video>'); }</script>
				</div><br>
				<p>Bottom bounce is the term used to describe rays that leave the sound source, run into the
					bottom and reflect off it. When these rays return to the surface, they reflect again and
					head back to the bottom. In theory, these sound waves could travel a long way, alternately
					reflecting off the seafloor and sea surface. In practice the sound energy usually diminishes
					rapidly as the seafloor, sea surface, and water column absorb and scatter energy.</p>
				<p>There are two situations where bottom bounce occurs. The first are rays that leave the source
					at angles steeper than the bottom limiting ray. The second is where the water is so shallow
					that there is no conjugate depth. In this last situation, all rays will bounce off the
					bottom at some point.</p>
			</div>
		</div>
		<div id="page_6-4-0" class="page">
			<h3 class="sub_head"><small>Propagation Paths » </small>Frequency Dependence</h3>
			<div class="print_hide center" style="max-width:600px;margin:10px auto;">
				<div class="videowrap-16x9"> <video class="html5video" width="690" height="574"
						style="max-width:100%;" poster="media/video/6.4.0.jpg" preload="none" controls
						playsinline>
						<source src="media/video/6.4.0.mp4" type="video/mp4">
					</video> </div>
			</div>
			<div class="module_hide">
				<p>It bears repeating that the propagation paths discussed previously depend on frequency, sound
					velocity profile, and water depth. The interplay of these three factors determines whether
					sound rays are trapped in a surface duct, form a convergence zone, or bounce off the bottom.
					Higher frequency waves refract the most and are most likely to trap in the surface duct.
					Lower frequency waves do not refract as much and thus are more likely to bounce off the
					seafloor.</p>
			</div>
		</div>
		<div id="page_6-5-0" class="page">
			<h3 class="sub_head"><small>Propagation Paths » </small>Questions</h3>
			<div class="panel panel-default interaction-question">
				<div class="panel-body">
					<div class="question-wrap inlinedropdowns">
						<h4>Question 18</h4>
						<p>All else being equal, a slightly higher frequency sound should have what effects? Use
							the pull-down menu to (choose the best answer.)</p>
						<form action="#">
							<fieldset>
								<div class="response-group-item"><strong> a) </strong>Conjugate depth and depth
									excess should <select name="q18a">
										<option>--</option>
										<option>decrease</option>
										<option>increase</option>
										<option>not change</option>
									</select> </div>
								<div class="correct response-group-item dropdown_correct answer">not change
								</div>
								<div class="response-group-item"><strong> b) </strong>The distance from a source
									to a convergence zone should <select name="q18b">
										<option>--</option>
										<option>decrease</option>
										<option>increase</option>
										<option>not change</option>
									</select> </div>
								<div class="correct response-group-item dropdown_correct answer">decrease </div>
								<input class="submit-button btn btn-primary" name="submit-button" value="Done"
									type="button">
							</fieldset>
						</form>
						<div class="answer">
							<p class="response print_hide">The correct answers are highlighted above.</p>
							<div class="center explanation"><img src="media/graphics/cz_frequency.jpg"
									alt="Schematic diagram showing effect of frequency on sound ray propagation and convergence zone" />
							</div>
							<p class="explanation">For sound sources at the surface, the conjugate depth occurs
								where the sound speed equals that at the sonic layer depth. This stays the same
								regardless of frequency. However, since higher frequencies refract more sharply
								than lower frequencies, they will dive down and return to the surface at steeper
								angles than lower frequencies, resulting in a shorter distance from the source
								to the convergence zone.</p>
						</div>
						<div class="message">Please make a selection.</div>
					</div>
				</div>
			</div>
			<div class="panel panel-default interaction-question">
				<div class="panel-body">
					<div class="question-wrap checkboxes">
						<h4>Question 19</h4>
						<p>Which of the following factors promote trapping of sound waves in a surface duct?
							(Choose all that apply.)</p>
						<form action="#">
							<fieldset>
								<div class="response-group-item correct"> <input id="q19a" name="q19"
										type="checkbox" value="a"> <label for="q19a"> <strong>a) </strong>A
										higher sound frequency</label> </div>
								<div class="response-group-item"> <input id="q19b" name="q19" type="checkbox"
										value="b"> <label for="q19b"> <strong>b) </strong>A negative sound
										velocity gradient</label> </div>
								<div class="response-group-item correct"> <input id="q19c" name="q19"
										type="checkbox" value="c"> <label for="q19c"> <strong>c) </strong>A
										deeper sonic layer depth</label> </div> <input
									class="submit-button btn btn-primary" name="submit-button" value="Done"
									type="button">
							</fieldset>
						</form>
						<div class="answer">
							<p class="response">The correct answers are a) and c).</p>
							<p class="explanation">Higher frequencies refract more, thus are more likely to
								curve back to the surface and become trapped than low frequencies. A deeper
								sonic layer depth also promotes trapping because it allows more room for sound
								to refract back to the surface. However, a negative sound speed gradient hinders
								trapping of waves because it means that sound speed decreases with depth. Since
								sound refracts toward lower sound speed, sound will refract away from the
								surface, rather return to it.</p>
						</div>
						<div class="message">Please make a selection.</div>
					</div>
				</div>
			</div>
		</div>
		<div id="page_6-6-0" class="page">
			<h3 class="sub_head"><small>Propagation Paths » </small>Sound Channels</h3>
			<div class="print_hide center" style="max-width:600px;margin:10px auto;">
				<div class="videowrap-16x9"> <video class="html5video" width="690" height="574"
						style="max-width:100%;" poster="media/video/6.6.0.jpg" preload="none" controls
						playsinline>
						<source src="media/video/6.6.0.mp4" type="video/mp4">
					</video> </div>
			</div>
			<div class="module_hide">
				<div class="center">
					<script
						type="text/javascript">if (printVersion) { document.write('<a href="media/video/deep_sound_channel.mp4" target="_blank"><img class="img-responsive center-block" src="media/video/deep_sound_channel.jpg" alt="Schematic animation showing sound ray propagation in the deep sound channel"/></a>'); }</script>
					<script
						type="text/javascript">if (printVersion === false) { document.write('<video class="html5video center-block" width="500" height="357" poster="media/video/deep_sound_channel.jpg" preload="auto" controls playsinline   ><source src="media/video/deep_sound_channel.mp4" type="video/mp4"></video>'); }</script>
				</div><br>
				<p>Sound channels are defined as regions in the water column where sound speed decreases from
					above and below to some minimum. The depth of the minimum defines the sound channel axis.
					The boundaries of the sound channel are sound speed maxima immediately above and below the
					sound channel axis. Within the sound channel waves refract toward lower sound speeds, so
					sound rays above the minimum bend downward and sound rays below the minimum bend upward. The
					likelihood of a sound ray remaining trapped depends on several factors:</p>
				<ol>
					<li>the thickness of the sound channel (distance between the upper and lower boundaries),
					</li>
					<li>strength of the sound channel (the difference between the sound speeds at the axis and
						the boundary),</li>
					<li>the sound frequency, and </li>
					<li>the propagation angle.</li>
				</ol>
			</div>
		</div>
		<div id="page_6-6-1" class="page">
			<h3 class="sub_head"><small>Propagation Paths » Sound Channels » </small>Deep Sound Channel</h3>
			<div class="print_hide center" style="max-width:600px;margin:10px auto;">
				<div class="videowrap-16x9"> <video class="html5video" width="690" height="574"
						style="max-width:100%;" poster="media/video/6.6.1.jpg" preload="none" controls
						playsinline>
						<source src="media/video/6.6.1.mp4" type="video/mp4">
					</video> </div>
			</div>
			<div class="module_hide">
				<div class="center"><img src="media/graphics/tsv_watl.jpg"
						alt="Profile of Temperature, Salinity, and Sound Speed in the Western North Atlantic. GDEM February Climatology" />
				</div>
				<p>The deep sound channel (DSC), sometimes called the primary sound channel, occurs where the
					water is deeper than the thermocline. A temperature profile shows temperature decreasing
					with depth to a minimum value and then remaining nearly isothermal to the seafloor. The deep
					sound channel axis (DSCA) is located where water becomes isothermal, at the base of the
					thermocline.</p>
				<p>Above the deep sound channel axis, sound speed variations are primarily driven by
					temperature. The sound speed decreases with depth due to the decrease in temperature through
					the thermocline. Below the DSCA, the temperature is practically constant and the sound speed
					increases with depth due to increasing pressure. Thus, sound waves above the DSCA refract
					downward while those below the DSCA refract upwards.</p>
				<p>At mid -latitudes the DSCA is typically around 3000 ft; it is deeper near the equator and
					shallower at extreme latitudes or in confined seas such as the Mediterranean Sea.</p>
			</div>
		</div>
		<div id="page_6-6-2" class="page">
			<h3 class="sub_head"><small>Propagation Paths » Sound Channels » </small>Secondary Sound Channels
			</h3>
			<div class="print_hide center" style="max-width:600px;margin:10px auto;">
				<div class="videowrap-16x9"> <video class="html5video" width="690" height="574"
						style="max-width:100%;" poster="media/video/6.6.2.jpg" preload="none" controls
						playsinline>
						<source src="media/video/6.6.2.mp4" type="video/mp4">
					</video> </div>
			</div>
			<div class="module_hide">
				<p>A secondary sound channel is any sound channel that occurs in the water column above the
					DSCA—above the point where the water becomes isothermal. Secondary sound channels may form
					within or below the surface layer. To be exploited, a secondary sound channel must be thick
					enough and strong enough to trap the frequency of interest and it must be shallow enough for
					the sensor to operate.</p>
				<div class="center">
					<script
						type="text/javascript">if (printVersion) { document.write('<a href="media/video/surface_sound_channel.mp4" target="_blank"><img class="img-responsive center-block" src="media/video/surface_sound_channel.jpg" alt="Schematic animation showing sound ray propagation in the surface sound channel"/></a>'); }</script>
					<script
						type="text/javascript">if (printVersion === false) { document.write('<video class="html5video center-block" width="500" height="350" poster="media/video/surface_sound_channel.jpg" preload="auto" controls playsinline   ><source src="media/video/surface_sound_channel.mp4" type="video/mp4"></video>'); }</script>
				</div><br>
				<p>Secondary sound channels come in two general types. The first is caused by heating at the sea
					surface in the presence of a surface duct or mixed layer. As the surface heats, the surface
					sound speed may increase until it is greater than the sound speed at the top of the
					thermocline. However, a minimum sound speed remains between the surface and the top of the
					thermocline, resulting in a sound channel that acts like a surface duct. Such a sound
					channel is sometimes called a surface sound channel. These may be transient, appearing
					during heating of day and disappearing over night to reappear the following day. As a
					result, this has been called the "afternoon effect."</p>
				<div class="center"><img src="media/graphics/gdem_eatl_feb.jpg"
						alt="Vertical Profile of Sound Speed, Temperature, and Salinity in the Eastern Atlantic. GDEM February Average" />
				</div>
				<p>The second type of secondary sound channel is longer lived and more widespread with the axis
					generally deeper than a surface sound channel. These may be formed due to intrusions of
					cold, low salinity water into warmer more saline water (or the reverse). This can occur
					along fronts and eddies or result from outflow from marginal seas. The depth of the
					intrusion is determined by its density. For example, this profile from the Eastern Atlantic
					shows the intrusion of warm, salty outflow from the Mediterranean Sea centered about 1000m.
					This produces a sound speed maximum resulting in a secondary sound channel above and a deep
					sound channel below.</p>
			</div>
		</div>
		<div id="page_6-6-3" class="page">
			<h3 class="sub_head"><small>Propagation Paths » Sound Channels » </small>Half-Channel and
				Near-Bottom Sound Channels</h3>
			<div class="print_hide center" style="max-width:600px;margin:10px auto;">
				<div class="videowrap-16x9"> <video class="html5video" width="690" height="574"
						style="max-width:100%;" poster="media/video/6.6.3.jpg" preload="none" controls
						playsinline>
						<source src="media/video/6.6.3.mp4" type="video/mp4">
					</video> </div>
			</div>
			<div class="module_hide">
				<p>There are two conditions that result in acoustic propagation similar to that of a sound
					channel, but fail the condition of a sound channel of being bound at the top and the bottom
					by the same maximum sound velocity. These are half-channel and near-bottom sound channel
					conditions.</p>
				<div class="center"><img src="media/graphics/half_channel.jpg"
						alt="Sound propagation path in a half channel" /></div>
				<p>If a positive sound velocity gradient extends from the surface to the seafloor, the result is
					a surface duct that extends all the way to the bottom. This type of propagation path is
					called a half-channel. This condition occurs in shallow water, under ice, during seasonal
					transitions, and in the winter in parts of the Mediterranean Sea. In these cases, the
					greatest sound speed is at the bottom (due to the effects of pressure), and the sound energy
					is refracted upward with increasing depth and then reflected back downward at the surface.
					Sound can propagate great distances under half-channel conditions.</p>
			</div>
		</div>
		<div id="page_6-6-4" class="page">
			<h3 class="sub_head"><small>Propagation Paths » Sound Channels » </small>Near-Bottom Sound Channel
			</h3>
			<div class="print_hide center" style="max-width:600px;margin:10px auto;">
				<div class="videowrap-16x9"> <video class="html5video" width="690" height="574"
						style="max-width:100%;" poster="media/video/6.6.4.jpg" preload="none" controls
						playsinline>
						<source src="media/video/6.6.4.mp4" type="video/mp4">
					</video> </div>
			</div>
			<div class="module_hide">
				<div class="center"><img src="media/graphics/bottom_channel.jpg"
						alt="Sound propagation path in a near bottom channel" /></div>
				<p>A uniquely shallow water sound speed feature is a near-bottom sound channel. This occurs when
					the thermocline either reaches the seafloor or the deep sound channel axis is very close to
					the seafloor. In this case the negative sound speed gradient of the thermocline bends the
					sound toward the bottom. Sound waves reflect off of the bottom, then refract back down. At
					times the gradient is sufficient to keep sound emitted within the channel from reaching the
					sea surface, and may even trap sound originally emitted above the near-bottom channel.
					Unlike half-channel conditions which tend to extend propagation, near–bottom sound channel
					conditions usually result in increased bottom interactions and reduced propagation ranges.
				</p>
			</div>
		</div>
		<div id="page_6-7-0" class="page">
			<h3 class="sub_head"><small>Propagation Paths » </small>Questions</h3>
		</div>
		<div id="page_6-7-1" class="page">
			<h3 class="sub_head"><small>Propagation Paths » Questions » </small>Question</h3>
			<div class="panel panel-default interaction-question">
				<div class="panel-body">
					<div class="question-wrap-drag dragitem">
						<h4>Question 20</h4>
						<p class="question">Drag the appropriate labels to the boxes on the graphic, then select
							Done.</p>
						<form action="#">
							<fieldset>
								<div class="drag-container" title="media/graphics/prop_paths_q.png">
									<div class="image_holder"></div>
									<div class="drag_controls_holder">
										<div class="drag_controls">
											<div class="draggable ui-widget-content ui-draggable drag_item">
												Bottom Bounce </div>
											<div class="draggable ui-widget-content ui-draggable drag_item">
												Convergence Zone </div>
											<div class="draggable ui-widget-content ui-draggable drag_item">
												Deep Sound Channel </div>
											<div class="draggable ui-widget-content ui-draggable drag_item">
												Direct Path </div>
											<div class="draggable ui-widget-content ui-draggable drag_item">
												Half Channel </div>
											<div class="draggable ui-widget-content ui-draggable drag_item">
												Near-bottom Sound Channel </div>
											<div class="draggable ui-widget-content ui-draggable drag_item">
												Secondary Sound Channel </div>
											<div class="draggable ui-widget-content ui-draggable drag_item">
												Surface Duct </div>
										</div> <input class="submit_button btn btn-primary done_drag"
											name="submit_button" value="Done" type="button" /> <input
											class="reset_drag btn btn-primary" value="Reset" type="button" />
									</div>
								</div>
							</fieldset>
						</form>
						<div class="answer">
							<p class="explanation">Compare your answer to the answer below.</p>
							<div class="center explanation"><img src="media/graphics/prop_paths_q_ans.png"
									alt="propagation path" /></div>
						</div>
					</div>
				</div>
			</div>
		</div>
		<div id="page_6-7-2" class="page">
			<h3 class="sub_head"><small>Propagation Paths » Questions » </small>Question</h3>
			<div class="panel panel-default interaction-question">
				<div class="panel-body">
					<div class="question-wrap inlinedropdowns">
						<h4>Question 21</h4>
						<div class="center"><img src="media/graphics/velocity_profile_q.png"
								alt="velocity profile" /></div>
						<p>Match the appropriate sound velocity to its propagation path. Use the pull-down menu
							to (choose the best answer.)</p>
						<form action="#">
							<fieldset>
								<div class="response-group-item"> The <select name="q21a">
										<option>--</option>
										<option>sound velocity profile a</option>
										<option>sound velocity profile b</option>
										<option>sound velocity profile c</option>
										<option>sound velocity profile d</option>
										<option>sound velocity profile e</option>
									</select> matches propagation path A. </div>
								<div class="correct response-group-item dropdown_correct answer">sound velocity
									profile b</div>
								<div class="response-group-item"> The <select name="q21b">
										<option>--</option>
										<option>sound velocity profile a</option>
										<option>sound velocity profile b</option>
										<option>sound velocity profile c</option>
										<option>sound velocity profile d</option>
										<option>sound velocity profile e</option>
									</select> matches propagation path B. </div>
								<div class="correct response-group-item dropdown_correct answer">sound velocity
									profile c</div>
								<div class="response-group-item">The <select name="q21c">
										<option>--</option>
										<option>sound velocity profile a</option>
										<option>sound velocity profile b</option>
										<option>sound velocity profile c</option>
										<option>sound velocity profile d</option>
										<option>sound velocity profile e</option>
									</select> matches propagation path C. </div>
								<div class="correct response-group-item dropdown_correct answer">sound velocity
									profile d</div>
								<div class="response-group-item"> The <select name="q21d">
										<option>--</option>
										<option>sound velocity profile a</option>
										<option>sound velocity profile b</option>
										<option>sound velocity profile c</option>
										<option>sound velocity profile d</option>
										<option>sound velocity profile e</option>
									</select> matches propagation path D. </div>
								<div class="correct response-group-item dropdown_correct answer">sound velocity
									profile a</div> <input class="submit-button btn btn-primary"
									name="submit-button" value="Done" type="button">
							</fieldset>
						</form>
						<div class="answer">
							<p class="response print_hide">The correct answers are highlighted above.</p>
							<p class="explanation">Compare your answer to the answer below.</p>
							<div class="center explanation"><img src="media/graphics/velocity_profile_a.png"
									alt="velocity profile" /></div>
						</div>
						<div class="message">Please make a selection.</div>
					</div>
				</div>
			</div>
		</div>
		<div id="page_7-0-0" class="page">
			<h3>Ocean Structures</h3>
			<div class="print_hide center" style="max-width:600px;margin:10px auto;">
				<div class="videowrap-16x9"> <video class="html5video" width="690" height="574"
						style="max-width:100%;" poster="media/video/7.0.0.jpg" preload="none" controls
						playsinline>
						<source src="media/video/7.0.0.mp4" type="video/mp4">
					</video> </div>
			</div>
			<div class="module_hide">
				<p>So far, we have only discussed vertical variations in sound speed. But what happens when
					there are horizontal variations? This section looks at several types of ocean structures
					with horizontal variations in sound speed.</p>
			</div>
		</div>
		<div id="page_7-1-0" class="page">
			<h3 class="sub_head"><small>Ocean Structures » </small>Ocean Fronts</h3>
			<div class="print_hide center" style="max-width:600px;margin:10px auto;">
				<div class="videowrap-16x9"> <video class="html5video" width="690" height="574"
						style="max-width:100%;" poster="media/video/7.1.0.jpg" preload="none" controls
						playsinline>
						<source src="media/video/7.1.0.mp4" type="video/mp4">
					</video> </div>
			</div>
			<div class="module_hide">
				<div class="center"><img src="media/graphics/gs_front_xsect.jpg"
						alt="Vertical cross section of temperature across the north wall of the gulf stream" />
				</div>
				<p>Oceanic fronts are boundaries between water masses with different temperatures and/or
					salinities. Oceanic fronts can extend from the surface to very deep. Some fronts are current
					driven; others are weather driven.</p>
				<p>Oceanic fronts may be either permanent or transient features, depending on the source.
					Permanent oceanic fronts are generally associated with strong ocean currents, such as the
					Gulf Stream, off the east coast of North America, and the Kuroshio Current, located off the
					east coast of Asia. This cross section shows the front on the north side of the Gulf Stream
					northeast of Cape Hatteras, NC. These frontal boundaries always exhibit a pronounced
					horizontal temperature gradient and can be thousands of meters deep. Transient oceanic
					fronts usually occur seasonally and are generally weaker, with more diffuse boundaries.
					Transient fronts may occur only a few weeks a year.</p>
				<div class="center"><img src="media/graphics/duct_leakage_example.jpg"
						alt="Cross Section of Acoustic Energy Crossing an Ocean Front Showing Duct Leakage" />
				</div>
				<p>Acoustically speaking, fronts act as a barrier to acoustic energy, though not all fronts are
					significant. Strong fronts having a large density gradient can act as a wall, with no
					acoustic energy crossing the front. In areas such as this, energy trapped in a surface duct
					will be dumped below the layer in a process called duct leakage. In this example, nearly all
					of the acoustic energy from a source in the upper left escapes the surface duct into deeper
					water.</p>
				<p>The effect of a front will be more pronounced as the frequency increases and refraction
					becomes more pronounced.</p>
			</div>
		</div>
		<div id="page_7-2-0" class="page">
			<h3 class="sub_head"><small>Ocean Structures » </small>Eddies</h3>
			<div class="print_hide center" style="max-width:600px;margin:10px auto;">
				<div class="videowrap-16x9"> <video class="html5video" width="690" height="574"
						style="max-width:100%;" poster="media/video/7.2.0.jpg" preload="none" controls
						playsinline>
						<source src="media/video/7.2.0.mp4" type="video/mp4">
					</video> </div>
			</div>
			<div class="module_hide">
				<p>Eddies, in the oceanographic sense, are large rotating masses of water. They can be treated
					as circular fronts with the water trapped inside having different physical characteristics
					than the water outside.</p>
				<p>Typically eddies are classified as one of two types—warm core or cold core.</p>
			</div>
		</div>
		<div id="page_7-3-0" class="page">
			<h3 class="sub_head"><small>Ocean Structures » </small>Warm Core Eddies</h3>
			<div class="print_hide center" style="max-width:600px;margin:10px auto;">
				<div class="videowrap-16x9"> <video class="html5video" width="690" height="574"
						style="max-width:100%;" poster="media/video/7.3.0.jpg" preload="none" controls
						playsinline>
						<source src="media/video/7.3.0.mp4" type="video/mp4">
					</video> </div>
			</div>
			<div class="module_hide">
				<div class="center"><img src="media/graphics/wce_xsect.jpg"
						alt="Vertical Cross Section of Temperature Across a Warm Eddy NCOM Analysis valid 00 UTC 23 Jan 2009" />
				</div>
				<p>As the name implies, the water inside warm core eddies is warmer than the water outside the
					circulation. This leads to an elevated sea surface height, resulting in anti-cyclonic
					circulation (clockwise in the Northern Hemisphere, counterclockwise in the Southern
					Hemisphere). Also, the mixed layer tends to be deeper inside than outside the eddy,
					increasing the sonic layer depth. The increased surface duct depth allows lower-frequency
					sound to propagate across the eddy.</p>
				<div class="center"><img src="media/graphics/sld_wce.jpg"
						alt="Map of sonic layer depth (SLD) in the vicinity of Taiwan for an unspecified time/date" />
				</div>
				<p>However, the improved acoustic propagation inside the eddy is often less significant than the
					boundary effects. This graphic shows sonic layer depth (SLD) in the vicinity of Taiwan.
					Warmer colors indicate a deeper SLD. Near the center of the plot we see a warm core eddy
					with deep SLD. However the north and east sides of this eddy are bounded by a very shallow
					SLD. This is caused by the entrainment of cooler water from the north around the edges of
					the eddy.</p>
				<p>Eddies of any type can entrain water in their circulation from a water mass of very different
					characteristics than the eddy. Thus the boundary of the eddy can be far more significant
					acoustically than the body of the eddy itself.</p>
			</div>
		</div>
		<div id="page_7-4-0" class="page">
			<h3 class="sub_head"><small>Ocean Structures » </small>Cold Core Eddies</h3>
			<div class="print_hide center" style="max-width:600px;margin:10px auto;">
				<div class="videowrap-16x9"> <video class="html5video" width="690" height="574"
						style="max-width:100%;" poster="media/video/7.4.0.jpg" preload="none" controls
						playsinline>
						<source src="media/video/7.4.0.mp4" type="video/mp4">
					</video> </div>
			</div>
			<div class="module_hide">
				<div class="center"><img src="media/graphics/cce_xsect.jpg"
						alt="Vertical Cross Sections of Temperature Across Warm- and Cold-Core Eddies NCOM Analysis valid 00 UTC 23 Jan 2009" />
				</div>
				<p>Cold core eddies typically have a cyclonic circulation with cold, deep water upwelling in the
					center. As this graphic shows, upwelling decreases the depth of the mixed layer and results
					in a significant slope to the isotherms. </p>
				<div class="center"><img src="media/graphics/sld_cce.jpg"
						alt="Map of sonic layer depth (SLD) in the vicinity of Taiwan for an unspecified time/date with cold core eddy annotated" />
				</div>
				<p>In our plot of SLD, we see a cold core eddy with a resulting shallow SLD.</p>
			</div>
		</div>
		<div id="page_8-0-0" class="page">
			<h3>Sources of Change in Ocean Acoustic Features</h3>
			<div class="print_hide center" style="max-width:600px;margin:10px auto;">
				<div class="videowrap-16x9"> <video class="html5video" width="690" height="574"
						style="max-width:100%;" poster="media/video/8.0.0.jpg" preload="none" controls
						playsinline>
						<source src="media/video/8.0.0.mp4" type="video/mp4">
					</video> </div>
			</div>
			<div class="module_hide">
				<p>Several processes in the ocean result in short-term changes to sound propagation,
					particularly in shallow water. This section examines some of those processes and their
					effects.</p>
			</div>
		</div>
		<div id="page_8-1-0" class="page">
			<h3 class="sub_head"><small>Sources of Change in Ocean Acoustic Features » </small>Seasonal Effects
				– Winter</h3>
			<div class="panel panel-default interaction-question">
				<div class="panel-body">
					<div class="question-wrap radio">
						<h4>Question 22</h4>
						<div class="center"><img src="media/graphics/ship_seas.jpg"
								alt="Photo of a ship in rough seas" /></div>
						<p>During winter months, strong, cold midlatitude cyclones frequently sweep across
							oceans.</p>
						<p>What effect would you anticipate after passage of such a storm? (Choose the best
							answer.)</p>
						<form action="#">
							<fieldset>
								<div class="response-group-item correct"> <input id="q22a" name="q22"
										type="radio" value="a"> <label for="q22a"> <strong>a) </strong>Deeper
										mixed layer and SLD</label> </div>
								<div class="response-group-item"> <input id="q22b" name="q22" type="radio"
										value="b"> <label for="q22b"> <strong>b) </strong>Shallower mixed layer
										and SLD</label> </div> <input class="submit-button btn btn-primary"
									name="submit-button" value="Done" type="button">
							</fieldset>
						</form>
						<div class="answer">
							<p class="response">The correct answer is a).</p>
							<p class="explanation">During the winter, cold air cools the surface and severe
								storms mix the surface water, potentially hundreds of feet deep. This leads to a
								deep surface duct that effectively traps mid to high-frequency energy near the
								surface. At times, the surface duct can be deep enough to trap lower-frequency
								energy as well.</p>
						</div>
						<div class="message">Please make a selection.</div>
					</div>
				</div>
			</div>
		</div>
		<div id="page_8-2-0" class="page">
			<h3 class="sub_head"><small>Sources of Change in Ocean Acoustic Features » </small>Seasonal Effects
				- Summer</h3>
			<div class="panel panel-default interaction-question">
				<div class="panel-body">
					<div class="question-wrap radio">
						<h4>Question 23</h4>
						<div class="center"><img src="media/graphics/tortola_beach.jpg"
								alt="Photo of a ship in rough seas" /></div>
						<p>During summer months, fewer storms and warmer temperatures occur.</p>
						<p>What effect would you anticipate after a long warm, calm spell? (Choose the best
							answer.)</p>
						<form action="#">
							<fieldset>
								<div class="response-group-item correct"> <input id="q23a" name="q23"
										type="radio" value="a"> <label for="q23a"> <strong>a) </strong>Surface
										duct weakens or vanishes</label> </div>
								<div class="response-group-item"> <input id="q23b" name="q23" type="radio"
										value="b"> <label for="q23b"> <strong>b) </strong>Surface duct
										strengthens</label> </div>
								<div class="response-group-item"> <input id="q23c" name="q23" type="radio"
										value="c"> <label for="q23c"> <strong>c) </strong>Surface duct is
										replaced by a shallow sound channel</label> </div> <input
									class="submit-button btn btn-primary" name="submit-button" value="Done"
									type="button">
							</fieldset>
						</form>
						<div class="answer">
							<p class="response">The correct answer is a).</p>
							<p class="explanation">In the summer, solar heating of the sea surface can reduce
								the efficiency of the duct or eliminate it completely. However, a surface sound
								channel may develop that behaves much like a surface duct.</p>
							<div class="center"><img src="media/graphics/afternoon_sfc_channel.jpg"
									alt="Depth Profile of Temperature in the Afternoon (solid, 1840 LST) and Nighttime (dashed, 2125 LST) 28 May 1973 in the Western Atlantic" />
							</div>
							<p>While this effect tends to be seasonal, it can occur on a daily basis with
								afternoon heating and disappearance of the surface duct. This graphic shows one
								example from a summer day in the western Atlantic.</p>
						</div>
						<div class="message">Please make a selection.</div>
					</div>
				</div>
			</div>
		</div>
		<div id="page_8-3-0" class="page">
			<h3 class="sub_head"><small>Sources of Change in Ocean Acoustic Features » </small>Weather Effects –
				Tropical Cyclones</h3>
			<div class="print_hide center" style="max-width:600px;margin:10px auto;">
				<div class="videowrap-16x9"> <video class="html5video" width="690" height="574"
						style="max-width:100%;" poster="media/video/8.3.0.jpg" preload="none" controls
						playsinline>
						<source src="media/video/8.3.0_.mp4" type="video/mp4">
					</video> </div>
			</div>
			<div class="module_hide">
				<div class="center"><img src="media/graphics/typhoon_sst.jpg"
						alt="SST in the Philippine and East China Seas before and after typhoon passage in Sept 2007" />
				</div>
				<p>Deep mixing from storm generated waves doesn’t just occur in the winter months. Tropical
					cyclones, in particular, can mix the water tens to hundreds of feet deep, cooling the
					surface water by bringing cold water from below to the surface. These images show sea
					surface temperatures before and after the passage of Typhoons Nari and Wipha. Note the
					significant cooling to the east of Taiwan. The dots on the maps mark the location of
					vertical profiles we will examine next.</p>
			</div>
			<div class="panel panel-default interaction-question">
				<div class="panel-body">
					<div class="question-wrap inlinedropdowns">
						<h4>Question 24</h4>
						<div class="center"><img src="media/graphics/typhoon_profiles.jpg"
								alt="Vertical Profiles of Salinity, Temperature, and Sound Speed Before (top) and After (bottom) Typhoon Passage" />
						</div>
						<p>Looking at the near-surface portion of these before and after profiles, what happens
							to the following properties after passage of the typhoons? Use the pull-down menu to
							(choose the best answer.)</p>
						<form action="#">
							<fieldset>
								<div class="response-group-item"><strong> a) </strong>Salinity <select
										name="q24a">
										<option>--</option>
										<option>decrease</option>
										<option>increase</option>
									</select> </div>
								<div class="correct response-group-item dropdown_correct answer">decrease </div>
								<div class="response-group-item"><strong> b) </strong>Temperature <select
										name="q24b">
										<option>--</option>
										<option>decrease</option>
										<option>increase</option>
									</select> </div>
								<div class="correct response-group-item dropdown_correct answer">decrease </div>
								<div class="response-group-item"><strong> c) </strong>Sound speed <select
										name="q24c">
										<option>--</option>
										<option>decrease</option>
										<option>increase</option>
									</select> </div>
								<div class="correct response-group-item dropdown_correct answer">decrease </div>
								<div class="response-group-item"><strong> d) </strong>Mixed layer depth <select
										name="q24d">
										<option>--</option>
										<option>decrease</option>
										<option>increase</option>
									</select> </div>
								<div class="correct response-group-item dropdown_correct answer">increase </div>
								<input class="submit-button btn btn-primary" name="submit-button" value="Done"
									type="button">
							</fieldset>
						</form>
						<div class="answer">
							<p class="response print_hide">The correct answers are highlighted above.</p>
							<p class="explanation">Salinity at the surface decreases, probably due to
								precipitation. The temperature decreases, probably due to mixing. As a result
								the mixed layer deepens and a pronounced surface duct forms with a strong
								positive sound speed gradient.</p>
							<div class="center"><img src="media/graphics/typhoon_duct.jpg"
									alt="Modeled Signal Excess (dB) Showing Surface Duct Before (top) and After (bottom) Typhoon Passage" />
							</div>
							<p>This graphic shows a vertical cross section of the modeled signal excess (signal
								minus noise and transmission loss) for a source within the area. Before , the
								surface duct is confined to a small area on the left side of the cross section.
								After typhoon passage, the surface duct spreads across the area.</p>
						</div>
						<div class="message">Please make a selection.</div>
					</div>
				</div>
			</div>
		</div>
		<div id="page_8-4-0" class="page">
			<h3 class="sub_head"><small>Sources of Change in Ocean Acoustic Features » </small>Seasonal Effects
				– Fall and Spring Transitions</h3>
			<div class="print_hide center" style="max-width:600px;margin:10px auto;">
				<div class="videowrap-16x9"> <video class="html5video" width="690" height="574"
						style="max-width:100%;" poster="media/video/8.4.0.jpg" preload="none" controls
						playsinline>
						<source src="media/video/8.4.0.mp4" type="video/mp4">
					</video> </div>
			</div>
			<div class="module_hide">
				<p>Fall and spring are transitional periods. The sea surface tends to be hottest in the early
					fall, after a summer of heating, while the surface duct will be deepest in the early spring
					when winter storms have mixed the layer to great depths and summer heating has not yet
					started.</p>
			</div>
		</div>
		<div id="page_8-5-0" class="page">
			<h3 class="sub_head"><small>Sources of Change in Ocean Acoustic Features » </small>Internal
				Waves/Internal Tides</h3>
			<div class="print_hide center" style="max-width:600px;margin:10px auto;">
				<div class="videowrap-16x9"> <video class="html5video" width="690" height="574"
						style="max-width:100%;" poster="media/video/8.5.0.jpg" preload="none" controls
						playsinline>
						<source src="media/video/8.5.0.mp4" type="video/mp4">
					</video> </div>
			</div>
			<div class="module_hide">
				<div class="center"><img src="media/graphics/internal_tides.jpg"
						alt="Time depth cross-sections of temperature in the East China Sea from 21 Sep to 15 Oct 2007 from glider observations and East China Sea NCOM" />
				</div>
				<p>Internal waves are wavelike motions that propagate below the surface through the ocean.
					Instead of traveling along the sea surface, they travel along surfaces where there is a
					strong vertical change in density, such as occurs at the base of the mixed layer or along
					some ocean fronts.</p>
				<p>Internal waves generated by tides are called internal tides . They form when tidally driven
					currents in the deep ocean slosh on and off the edge of the continental shelf or ridges
					associated with island chains. The resulting internal tidal waves tend to have diurnal (24
					hour) or semidiurnal (12 hour) periods.</p>
				<p>These graphics show time versus depth cross sections of water temperature for a location in
					the western Pacific during a 24-day period. Contours on the plot are isotherms, or surfaces
					of constant temperature. The squiggles in the isotherms represent internal tides. The heavy
					purple line near the surface indicates the depth of the mixed layer.</p>
				<p>The primary oceanographic effect of internal tides is the fluctuation of the sonic layer
					depth. These fluctuations can lead to duct leakage, which causes sound propagation into
					random places across an area and can lead to detections where we wouldn’t expect any. Unless
					the SLD is very deep, these variations primarily affect higher frequency sound that has been
					trapped in the surface duct.</p>
			</div>
		</div>
		<div id="page_9-0-0" class="page">
			<h3>Scattering and Absorption</h3>
			<div class="print_hide center" style="max-width:600px;margin:10px auto;">
				<div class="videowrap-16x9"> <video class="html5video" width="690" height="574"
						style="max-width:100%;" poster="media/video/9.0.0.jpg" preload="none" controls
						playsinline>
						<source src="media/video/9.0.0.mp4" type="video/mp4">
					</video> </div>
			</div>
			<div class="module_hide">
				<p>Sound propagating through water encounters a variety of interfaces, some obvious some not so
					obvious. Additionally, there are impurities and suspended objects that can scatter or absorb
					sound. In this section, we examine common cases of scattering and absorption.</p>
				<div class="center">
					<script
						type="text/javascript">if (printVersion) { document.write('<a href="media/video/scattering.mp4" target="_blank"><img class="img-responsive center-block" src="media/video/scattering.jpg" alt="Side-by-side animations of coherent and scattered reflections"/></a>'); }</script>
					<script
						type="text/javascript">if (printVersion === false) { document.write('<video class="html5video center-block" width="500" height="350" poster="media/video/scattering.jpg" preload="auto" controls playsinline   ><source src="media/video/scattering.mp4" type="video/mp4"></video>'); }</script>
				</div><br>
				<p>Scattering occurs when sound waves run into something that alters their propagation path. In
					the absence of scattering, the incoming and reflected sound waves have the same angle to the
					reflective surface. With scattering, the reflected sound waves come off the surface at
					various angles, and the reflection is diffuse, not coherent.</p>
				<div class="center" style="max-width:500px;margin:10px auto">
					<script>
						if (printVersion) {
							document.write(
								'<a href="media/video/absorption_mod.mp4" target="_blank"><img src="media/video/absorption_mod.jpg" alt="Animation illustrating reflected versus absorbed sound energy at the seafloo" class="img-responsive center-block"></a>'
							);
						} else {
							document.write(
								'<div><video  loop muted playsinline class="html5video center-block" width="500" height="350" style="max-width:100%;" poster="media/video/absorption_mod.jpg" preload="auto" controls><source src="media/video/absorption_mod.mp4" type="video/mp4" /></video><p></p></div>'
							);
						}
					</script>
				</div>
				<p>Generally, when we are talking about ocean acoustics, absorption is the difference between
					the incoming sound energy and the reflected sound energy for some surface.</p>
			</div>
		</div>
		<div id="page_9-1-0" class="page">
			<h3 class="sub_head"><small>Scattering and Absorption » </small>Reflectivity of Sediments</h3>
			<div class="print_hide center" style="max-width:600px;margin:10px auto;">
				<div class="videowrap-16x9"> <video class="html5video" width="690" height="574"
						style="max-width:100%;" poster="media/video/9.1.0.jpg" preload="none" controls
						playsinline>
						<source src="media/video/9.1.0.mp4" type="video/mp4">
					</video> </div>
			</div>
			<div class="module_hide">
				<div class="center"><img src="media/graphics/grain_size.jpg"
						alt="Schematic illustration of the effect of sediment grain size on reflectivity /absorption" />
				</div>
				<p>Seafloor material can have a significant effect on sound propagation. For example,
					fine-grained silt and clay absorb sound efficiently, while sand, gravel, and bedrock are
					more reflective.</p>
				<div class="center"><img src="media/graphics/frequency_reflection.jpg"
						alt="Schematic illustration of the effect of sound frequency on reflectivity /absorption" />
				</div>
				<p>Reflectivity is also frequency dependent, with the higher-frequency sound reflecting more
					efficiently than lower-frequency sound.</p>
				<div class="center"><img src="media/graphics/mud_shells.jpg"
						alt="Schematic illustration of the effect of shells embedded in mud on reflectivity /absorption" />
				</div>
				<p>Because lower-frequency sound penetrates further into seafloor sediments, layering in those
					sediments becomes an important consideration when evaluating seafloor reflectivity.</p>
				<p>A reflective layer below the surface may become the dominant influence on the reflected
					sound. For example, in a study in the Mediterranean Sea, an area of mud with embedded shells
					reflected a higher proportion of sound energy than did a sandy region. Based on the surface
					sediment types, we would have expected the opposite.</p>
			</div>
		</div>
		<div id="page_9-2-0" class="page">
			<h3 class="sub_head"><small>Scattering and Absorption » </small>Distribution of Sediments</h3>
			<div class="print_hide center" style="max-width:600px;margin:10px auto;">
				<div class="videowrap-16x9"> <video class="html5video" width="690" height="574"
						style="max-width:100%;" poster="media/video/9.2.0.jpg" preload="none" controls
						playsinline>
						<source src="media/video/9.2.0.mp4" type="video/mp4">
					</video> </div>
			</div>
			<div class="module_hide">
				<div class="center"><img src="media/graphics/long_island_seds.jpg"
						alt="Distribution of Surficial Sediment in Long Island Sound" /></div>
				<p>The distribution of sediment types can be highly variable, particularly near the coast. For
					example, this map shows sediment distribution in Long Island Sound, near New York City.
					Seafloor sediments range from silty clay to gravel and bedrock. This will have a tremendous
					effect on any propagation path that involves bottom bounce.</p>
				<p>Maps similar to this one exist for other coastal regions, as well as the deep ocean basins.
				</p>
			</div>
		</div>
		<div id="page_9-3-0" class="page">
			<h3 class="sub_head"><small>Scattering and Absorption » </small>Bathymetry</h3>
			<div class="print_hide center" style="max-width:600px;margin:10px auto;">
				<div class="videowrap-16x9"> <video class="html5video" width="690" height="574"
						style="max-width:100%;" poster="media/video/9.3.0.jpg" preload="none" controls
						playsinline>
						<source src="media/video/9.3.0.mp4" type="video/mp4">
					</video> </div>
			</div>
			<div class="module_hide">
				<div class="center"><img src="media/graphics/sandy_bottom.jpg"
						alt="Photo of Diver over Sandy Bottom" /> <img
						src="media/graphics/submarine_volcanoes.jpg"
						alt="Shaded relief image of submarine volcanoes" /> <img
						src="media/graphics/astoria_cyn.jpg"
						alt="Shaded relief image of Astoria Submarine Canyon" /></div>
				<p>Not just the material, but the shape of the seafloor can have a tremendous effect on
					reflecting sound waves. The seafloor is covered with ripples, plains, ridges, seamounts, and
					canyons on scales from a few centimeters to hundreds of kilometers across.</p>
				<div class="center">
					<script
						type="text/javascript">if (printVersion) { document.write('<a href="media/video/seamount_block.mp4" target="_blank"><img class="img-responsive center-block" src="media/video/seamount_block.jpg" alt="Deep sound channel propagation blocked by a seamount"/></a>'); }</script>
					<script
						type="text/javascript">if (printVersion === false) { document.write('<video class="html5video center-block" width="500" height="350" poster="media/video/seamount_block.jpg" preload="auto" controls playsinline   ><source src="media/video/seamount_block.mp4" type="video/mp4"></video>'); }</script>
				</div><br>
				<p>Large seamounts and ridges can play an important role in deep water acoustic propagation;
					these features can block a signal, reflect or channel it into the deep sound channel where
					it is not detectable, or scatter it so much that it becomes undetectable.</p>
				<div class="center"><img src="media/graphics/ripple_reverb.jpg"
						alt="Modeled Transmission Loss for Sound Striking Sand Waves at Different Angles and Frequencies showing lower transmission loss with ripples." />
				</div>
				<p>In shallow water at high frequencies, small sand ripples can have a significant effect on the
					intensity of scattered and reflected sound. In fact, it has been observed that reverberation
					off the small-scale ripples can introduce so much noise that it becomes impossible to locate
					or identify a target.</p>
				<p>These graphics show modeled transmission loss for sound striking sand waves at different
					angles to the wave crests over a range of frequencies. In the plot on the left, the sand
					wave is smooth. As the angle of the transmitted sound increases, less sound is reflected
					back, so the transmission loss increases. Higher frequencies reflect more efficiently, so
					they also show higher transmission loss.</p>
				<p>In the plot on the right, random ripples cover the sand wave. We can see that there is less
					transmission loss with the rippled surface, meaning that the scattered sound energy is much
					stronger. This is true across all frequencies and angles.</p>
				<p>Thus, for active sonar systems operating in shallow water with small random ripples, it will
					be much more difficult to discern a target from the noise caused by reverberation off the
					seafloor. For passive systems, more of the signal from the source will be scattered rather
					than propagated forward, reducing the potential for detection.</p>
			</div>
		</div>
		<div id="page_9-4-0" class="page">
			<h3 class="sub_head"><small>Scattering and Absorption » </small>Absorption by Seawater</h3>
			<div class="print_hide center" style="max-width:600px;margin:10px auto;">
				<div class="videowrap-16x9"> <video class="html5video" width="690" height="574"
						style="max-width:100%;" poster="media/video/9.4.0.jpg" preload="none" controls
						playsinline>
						<source src="media/video/9.4.0.mp4" type="video/mp4">
					</video> </div>
			</div>
			<div class="module_hide">
				<p>Because sound is a pressure wave, its propagation requires some motion of molecules. Any time
					motion is involved, friction acts to dissipate, and sound propagation is no different. In
					seawater, friction between and within molecules converts sound energy to heat, and absorbs
					sound in the process. Absorption varies directly with frequency. Low frequency sound will
					propagate through the water with very little loss for very long distances; low frequency
					whale songs can be heard across ocean basins. In contrast, high frequency attenuates very
					quickly; high frequency sound such as an aircraft pinger may propagate only a few nautical
					miles from the source, even at very high source levels.</p>
				<p>Absorption of sound by seawater decreases with depth by about 2% for every 1000 ft of depth.
					By 15,000 ft depth, the absorption coefficient is around 71% of its value at the surface.
				</p>
			</div>
		</div>
		<div id="page_9-5-0" class="page">
			<h3 class="sub_head"><small>Scattering and Absorption » </small>Bubbles and Swim Bladders</h3>
			<div class="print_hide center" style="max-width:600px;margin:10px auto;">
				<div class="videowrap-16x9"> <video class="html5video" width="690" height="574"
						style="max-width:100%;" poster="media/video/9.5.0.jpg" preload="none" controls
						playsinline>
						<source src="media/video/9.5.0.mp4" type="video/mp4">
					</video> </div>
			</div>
			<div class="module_hide">
				<p>Bubbles in seawater and gas-filled swim bladders in fish have very similar acoustic
					responses. For that reason, we combine the topics here.</p>
				<div class="center"><img src="media/graphics/sea_waves.jpg"
						alt="Photo of waves in the deep ocean" /></div>
				<p>Gas bubbles have two origins: air bubbles resulting from breaking waves and whitecaps and
					methane bubbles resulting from the decay of organic material. Bubbles in the sea are very
					small because large bubbles tend to rise quickly to the surface. They are a very small
					percentage of the sea in which they occur, but their effects on underwater sound are
					significant due to the differences in density and compressibility and because of the
					resonant characteristics of suspended bubbles.</p>
				<div class="center"><img src="media/graphics/swim_bladder.jpg"
						alt="Diagram of a Swim Bladder in a Fish" /></div>
				<p>Most species of fish have gas-filled swim bladders. Swim bladders provide buoyancy and
					enhance hearing. Experiments have shown that fish swim bladders can have a large effect on
					acoustic transmission loss. Fish swim bladders may be thought of as suspended, oblong
					bubbles.</p>
				<div class="center">
					<script
						type="text/javascript">if (printVersion) { document.write('<a href="media/video/bubble_reverb.mp4" target="_blank"><img class="img-responsive center-block" src="media/video/bubble_reverb.jpg" alt="Animation showing reverberation of a bubble"/></a>'); }</script>
					<script
						type="text/javascript">if (printVersion === false) { document.write('<video class="html5video center-block" width="500" height="358" poster="media/video/bubble_reverb.jpg" preload="auto" controls playsinline   ><source src="media/video/bubble_reverb.mp4" type="video/mp4"></video>'); }</script>
				</div><br>
				<p>So what do swim bladders and bubbles do to sound waves? If the sound waves are the right
					frequency and wavelength for the size of the bubbles, the bubble will oscillate in harmony
					with the sound waves. This resonance absorbs sound energy and re-radiates it as the bubble
					reverberates. Thus, clouds of bubbles or schools of fish between you and some sound source
					may effectively block sound propagation from that source.</p>
			</div>
		</div>
		<div id="page_9-6-0" class="page">
			<h3 class="sub_head"><small>Scattering and Absorption » </small>Reverberation in Active Sonar
				Systems</h3>
			<div class="print_hide center" style="max-width:600px;margin:10px auto;">
				<div class="videowrap-16x9"> <video class="html5video" width="690" height="574"
						style="max-width:100%;" poster="media/video/9.6.0.jpg" preload="none" controls
						playsinline>
						<source src="media/video/9.6.0.mp4" type="video/mp4">
					</video> </div>
			</div>
			<div class="module_hide">
				<div class="center"><img src="media/graphics/reverb.jpg"
						alt="Diagram showing reverberation from surface, bottom, and water column." /></div>
				<p>As sound propagates through seawater, it encounters inhomogeneities ranging in size from very
					tiny particles of dust that make the sea blue to schools of fish to large seamounts and
					pinnacles on the seafloor. All of these serve to absorb and reradiate a portion of the
					acoustic energy. Reverberation is the sum of all the contributions from the various
					scatterers. Reverberation is often a primary limiting factor on active sonar performance,
					particularly if the system is high power or low directivity.</p>
				<p>There are three types of reverberation: volume reverberation produced by scatterers in the
					water column, sea surface reverberation, and bottom reverberation. Reverberation is
					difficult to separate from the received signal because the spectral characteristics are very
					similar, except for the Doppler effect of a moving target [Lurton, 2002].</p>
			</div>
		</div>
		<div id="page_9-7-0" class="page">
			<h3 class="sub_head"><small>Scattering and Absorption » </small>Questions</h3>
			<div class="panel panel-default interaction-question">
				<div class="panel-body">
					<div class="question-wrap radio">
						<h4>Question 25</h4>
						<p>Which of the following properties promotes reflection of sound off the seafloor?
							(Choose the best answer.)</p>
						<form action="#">
							<fieldset>
								<div class="response-group-item"> <input id="q25a" name="q25" type="radio"
										value="a"> <label for="q25a"> <strong>a) </strong>Lower frequency
										sound</label> </div>
								<div class="response-group-item correct"> <input id="q25b" name="q25"
										type="radio" value="b"> <label for="q25b"> <strong>b) </strong>Larger
										sediment grain size</label> </div> <input
									class="submit-button btn btn-primary" name="submit-button" value="Done"
									type="button">
							</fieldset>
						</form>
						<div class="answer">
							<p class="response">The correct answer is b) Larger sediment grain size.</p>
							<p class="explanation">Fine sediments, like mud, tend to absorb more sound than
								coarser sediments, like sand and gravel. More sound energy from low-frequency
								sound tends to penetrate sediments, than from higher-frequency sounds, which
								tend to reflect off of sediments.</p>
						</div>
						<div class="message">Please make a selection.</div>
					</div>
				</div>
			</div>
			<div class="panel panel-default interaction-question">
				<div class="panel-body">
					<div class="question-wrap checkboxes">
						<h4>Question 26</h4>
						<p>Which of the following features tend to cause scattering and reverberation? (Choose
							all that apply.)</p>
						<form action="#">
							<fieldset>
								<div class="response-group-item correct"> <input id="q26a" name="q26"
										type="checkbox" value="a"> <label for="q26a"> <strong>a) </strong>Air
										bubbles</label> </div>
								<div class="response-group-item"> <input id="q26b" name="q26" type="checkbox"
										value="b"> <label for="q26b"> <strong>b) </strong>Dissolved
										salts</label> </div>
								<div class="response-group-item correct"> <input id="q26c" name="q26"
										type="checkbox" value="c"> <label for="q26c"> <strong>c) </strong>Fish
										swim bladders</label> </div>
								<div class="response-group-item correct"> <input id="q26d" name="q26"
										type="checkbox" value="d"> <label for="q26d"> <strong>d)
										</strong>Seafloor ripples</label> </div>
								<div class="response-group-item correct"> <input id="q26e" name="q26"
										type="checkbox" value="e"> <label for="q26e"> <strong>e)
										</strong>Surface waves</label> </div> <input
									class="submit-button btn btn-primary" name="submit-button" value="Done"
									type="button">
							</fieldset>
						</form>
						<div class="answer">
							<p class="response">The correct answers are a), c), d), and e).</p>
							<p class="explanation">All of these features, except b) dissolved salts, tend to
								cause reverberation of sound waves. Certain dissolved salts do, however, tend to
								cause the absorption of sound waves by seawater.</p>
						</div>
						<div class="message">Please make a selection.</div>
					</div>
				</div>
			</div>
		</div>
		<div id="page_10-0-0" class="page">
			<h3>Factors Affecting Detection of Sound</h3>
			<div class="print_hide center" style="max-width:600px;margin:10px auto;">
				<div class="videowrap-16x9"> <video class="html5video" width="690" height="574"
						style="max-width:100%;" poster="media/video/10.0.0.jpg" preload="none" controls
						playsinline>
						<source src="media/video/10.0.0.mp4" type="video/mp4">
					</video> </div>
			</div>
			<div class="module_hide">
				<p>Up to this point we have examined how sound travels through water and the various factors
					that affect that propagation. Now, let&rsquo;s turn our attention to what we actually hear
					underwater and how this affects our ability to detect noise from a particular source.</p>
				<p>Most areas of the world can be categorized into one of three detection zones:</p>
				<ol>
					<li>Noise limited, where the ambient noise is the primary predictor of detection potential;
					</li>
					<li>Range limited, where detection potential is determined primarily by range and the
						reduction of signal to noise through losses due to scattering and absorption in the
						water.</li>
					<li>Bottom limited, where detection probability and ranges are governed primarily by bottom
						interactions, in other words, how does the bottom absorb/reflect/scatter the sound, how
						many times does the sound hit bottom? </li>
				</ol>
			</div>
		</div>
		<div id="page_10-1-0" class="page">
			<h3 class="sub_head"><small>Factors Affecting Detection of Sound » </small>Ambient Noise</h3>
			<div class="print_hide center" style="max-width:600px;margin:10px auto;">
				<div class="videowrap-16x9"> <video class="html5video" width="690" height="574"
						style="max-width:100%;" poster="media/video/10.1.0.jpg" preload="none" controls
						playsinline>
						<source src="media/video/10.1.0.mp4" type="video/mp4">
					</video> </div>
			</div>
			<div class="module_hide">
				<div class="center"><img src="media/graphics/ocean_noise.jpg"
						alt="Schematic diagram showing some sources of ambient noise in the ocean" /></div>
				<p>One common perception of the open ocean is that when you get below the surface layer, where
					waves and light don’t penetrate, the ocean is still, dark, and silent. As ocean measurements
					and modeling advance, it becomes more and more apparent that while the depths of the ocean
					may be dark, they are hardly still and far from silent, even far from any human activity.
				</p>
				<p>Ambient noise is any sound in the water that is not emitted by the source of interest. There
					are many sources of sound in the water, but they all can be generally classified under the
					headings of either natural sources or man-made sources. The frequency range of ambient noise
					is as great as the number of sources of sound.</p>
			</div>
		</div>
		<div id="page_10-2-0" class="page">
			<h3 class="sub_head"><small>Factors Affecting Detection of Sound » </small>Natural Sources of Noise
			</h3>
			<div class="print_hide center" style="max-width:600px;margin:10px auto;">
				<div class="videowrap-16x9"> <video class="html5video" width="690" height="574"
						style="max-width:100%;" poster="media/video/10.2.0.jpg" preload="none" controls
						playsinline>
						<source src="media/video/10.2.0.mp4" type="video/mp4">
					</video> </div>
			</div>
			<div class="module_hide">
				<p>Natural sources of ambient noise run the spectrum from geological processes, to weather
					phenomena, to biological sources.</p>
				<p>Whenever sources of marine biologic sound in the water are discussed, the most people think
					of aquatic mammals, in particular whales and dolphins. While these are sources of sound in
					the ocean, they are far from the only biological sources of acoustic noise. Several species
					of fish raise a racket under water. Among invertebrates, Snapping Shrimp are quite noisy.
				</p>
				<div class="center"><img src="media/graphics/weather_acoustics.jpg"
						alt="Underwater sound spectra for different weather events" /></div>
				<p>Not all sounds underwater come from animals. Breaking waves and rainfall can also be heard.
					Geologic processes like volcanic eruptions, earthquakes, and landslides add to the noise.
				</p>
				<p>The table below lists the sound characteristics of animals and phenomena. Click the link to
					hear the sound they make.</p>
			</div>
			<table class="table table-bordered">
				<thead>
					<tr>
						<td>Source</td>
						<td>Link</td>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td>Dolphin clicks</td>
						<td><a href="https://www.hnsa.org/wp-content/uploads/2014/07/track04.mp3"
								target="_blank">https://www.hnsa.org/wp-content/uploads/2014/07/track04.mp3</a></td>
					</tr>
					<tr>
						<td>Orca</td>
						<td><a href="https://www.hnsa.org/wp-content/uploads/2014/07/track06.mp3"
								target="_blank">https://www.hnsa.org/wp-content/uploads/2014/07/track06.mp3</a></td>
					</tr>
					<tr>
						<td>Humpback whales</td>
						<td><a href="https://www.hnsa.org/wp-content/uploads/2014/07/track02.mp3"
								target="_blank">https://www.hnsa.org/wp-content/uploads/2014/07/track02.mp3</a></td>
					</tr>
					<tr>
						<td>Snapping shrimp</td>
						<td><a href="https://www.hnsa.org/wp-content/uploads/2014/07/track10.mp3"
								target="_blank">https://www.hnsa.org/wp-content/uploads/2014/07/track10.mp3</a></td>
					</tr>
					<tr>
						<td>Fish (croaker)</td>
						<td><a href="https://www.hnsa.org/wp-content/uploads/2014/07/track11.mp3"
								target="_blank">https://www.hnsa.org/wp-content/uploads/2014/07/track11.mp3</a></td>
					</tr>
				</tbody>
			</table>
		</div>
		<div id="page_10-3-0" class="page">
			<h3 class="sub_head"><small>Factors Affecting Detection of Sound » </small>Human Sources of Ambient
				Noise</h3>
			<div class="print_hide center" style="max-width:600px;margin:10px auto;">
				<div class="videowrap-16x9"> <video class="html5video" width="690" height="574"
						style="max-width:100%;" poster="media/video/10.3.0.jpg" preload="none" controls
						playsinline>
						<source src="media/video/10.3.0.mp4" type="video/mp4">
					</video> </div>
			</div>
			<div class="module_hide">
				<div class="center"><img src="media/graphics/cargo_ship.jpg" alt="Photo of cargo ship" /></div>
				<p>Shipping traffic is a significant source of ambient noise at lower frequencies. The noise
					peaks around 60 Hz, the maximum in the cavitation spectrum of typical merchant ships.</p>
			</div>
			<p>Sounds of the Ron Brown, a NOAA oceanographic research vessel:</p>
			<p><a href="http://www.pmel.noaa.gov/vents/acoustics/env-noise/ronbrown.html"
					target="_blank">http://www.pmel.noaa.gov/vents/acoustics/env-noise/ronbrown.html</a></p>
			<p><a href="http://www.pmel.noaa.gov/vents/acoustics/env-noise/sounds/RHB_arrival_h07_00N_110w_jd31913-RonBrown-10x.wav"
					target="_blank">http://www.pmel.noaa.gov/vents/acoustics/env-noise/sounds/RHB_arrival_h07_00N_110w_jd31913-RonBrown-10x.wav</a>
			</p>
			<p>Large cargo ship:</p>
			<p><a href="https://www.hnsa.org/wp-content/uploads/2014/07/track22.mp3"
					target="_blank">https://www.hnsa.org/wp-content/uploads/2014/07/track22.mp3</a></p>
			<div class="module_hide">
				<div class="center"><img src="media/graphics/global_shipping.jpg"
						alt="Global shipping activity" /></div>
				<p>The contribution to ambient noise depends on the distance from the shipping lane. This map
					shows global shipping lanes. Clearly, most of the traffic is in the Northern Hemisphere.</p>
			</div>
		</div>
	
	<div id="page_10-4-0" class="page">
		<h3 class="sub_head"><small>Factors Affecting Detection of Sound » </small>Self Noise</h3>
		<div class="print_hide center" style="max-width:600px;margin:10px auto;">
			<div class="videowrap-16x9"> <video class="html5video" width="690" height="574"
					style="max-width:100%;" poster="media/video/10.4.0.jpg" preload="none" controls playsinline>
					<source src="media/video/10.4.0.mp4" type="video/mp4">
				</video> </div>
		</div>
		<div class="module_hide">
			<p>Self noise is exactly what it says—it is the noise related to the vessel or apparatus of the
				listener. It can be due to machine operations, motion through the water, and even the hum of
				electronic equipment.</p>
			<p>Self noise can present a problem if you are listening for a sound with a frequency close to the
				self noise. This may make it hard to detect the noise even if it would be loud enough to hear
				otherwise.</p>
		</div>
	</div>
	<div id="page_10-5-0" class="page">
		<h3 class="sub_head"><small>Factors Affecting Detection of Sound » </small>Source Level</h3>
		<div class="print_hide center" style="max-width:600px;margin:10px auto;">
			<div class="videowrap-16x9"> <video class="html5video" width="690" height="574"
					style="max-width:100%;" poster="media/video/10.5.0.jpg" preload="none" controls playsinline>
					<source src="media/video/10.5.0.mp4" type="video/mp4">
				</video> </div>
		</div>
		<div class="module_hide">
			<p>Source level is how loud the noise emitted by the object is. For example, a whisper has a much
				lower source level than a shout. And just as you may need to shout to be heard in a crowded
				room, the level of the sound you’re interested in needs to exceed the ambient noise level to be
				detected.</p>
			<p>Although source level is usually reported as a single value for a given frequency, it may have a
				directional component dependent on the relative orientations of the source and receiver. The
				frequency and source level of emitted sound may also vary with time.</p>
		</div>
	</div>
	<div id="page_10-6-0" class="page">
		<h3 class="sub_head"><small>Factors Affecting Detection of Sound » </small>Transmission Loss (TL) </h3>
		<div class="print_hide center" style="max-width:600px;margin:10px auto;">
			<div class="videowrap-16x9"> <video class="html5video" width="690" height="574"
					style="max-width:100%;" poster="media/video/10.6.0.jpg" preload="none" controls playsinline>
					<source src="media/video/10.6.0.mp4" type="video/mp4">
				</video> </div>
		</div>
		<div class="module_hide">
			<div class="center">
				<script
					type="text/javascript">if (printVersion) { document.write('<a href="media/video/spherical_spreading.mp4" target="_blank"><img class="img-responsive center-block" src="media/video/spherical_spreading.jpg" alt="animation showing spherical spreading"/></a>'); }</script>
				<script
					type="text/javascript">if (printVersion === false) { document.write('<video class="html5video center-block" width="500" height="350" poster="media/video/spherical_spreading.jpg" preload="auto" controls playsinline   ><source src="media/video/spherical_spreading.mp4" type="video/mp4"></video>'); }</script>
			</div><br>
			<p>When sound waves leave a source they typically start uniformly spreading out. As the sound wave
				expands, the energy is essentially spread over a larger surface. This decreases the intensity of
				the sound at any one location. Even focused beams of acoustic energy will spread as they
				propagate through the water.</p>
			<p>Most of the time spreading near the source can be approximated by spherical spreading. In
				spherical spreading, the intensity decreases as the square of the distance from the source,
				called the range.</p>
			<div class="center">
				<script
					type="text/javascript">if (printVersion) { document.write('<a href="media/video/cylindrical_spreading.mp4" target="_blank"><img class="img-responsive center-block" src="media/video/cylindrical_spreading.jpg" alt="animation showing cylindrical spreading"/></a>'); }</script>
				<script
					type="text/javascript">if (printVersion === false) { document.write('<video class="html5video center-block" width="500" height="358" poster="media/video/cylindrical_spreading.jpg" preload="auto" controls playsinline   ><source src="media/video/cylindrical_spreading.mp4" type="video/mp4"></video>'); }</script>
			</div><br>
			<p>If the sound becomes trapped in a surface duct or sound channel, its spreading becomes
				cylindrical, with the height of the cylinder equal to the depth of the surface duct or thickness
				of the sound channel. In cylindrical spreading, the intensity decreases linearly with increasing
				range. Cylindrical spreading of the sound will predict a reduction of 3 dB in intensity every
				time the range is doubled. Cylindrical spreading occurs in the sound duct and in sound channels.
			</p>
		</div>
	</div>
	<div id="page_10-7-0" class="page">
		<h3 class="sub_head"><small>Factors Affecting Detection of Sound » </small>Questions</h3>
		<div class="panel panel-default interaction-question">
			<div class="panel-body">
				<div class="question-wrap checkboxes">
					<h4>Question 27</h4>
					<p>Which of the following are sources of noise in the ocean? (Choose all that apply.) </p>
					<form action="#">
						<fieldset>
							<div class="response-group-item correct"> <input id="q27a" name="q27"
									type="checkbox" value="a"> <label for="q27a"> <strong>a)
									</strong>Earthquakes</label> </div>
							<div class="response-group-item correct"> <input id="q27b" name="q27"
									type="checkbox" value="b"> <label for="q27b"> <strong>b)
									</strong>Fish</label> </div>
							<div class="response-group-item correct"> <input id="q27c" name="q27"
									type="checkbox" value="c"> <label for="q27c"> <strong>c)
									</strong>Rain</label> </div>
							<div class="response-group-item correct"> <input id="q27d" name="q27"
									type="checkbox" value="d"> <label for="q27d"> <strong>d)
									</strong>Ships</label> </div>
							<div class="response-group-item correct"> <input id="q27e" name="q27"
									type="checkbox" value="e"> <label for="q27e"> <strong>e)
									</strong>Shrimp</label> </div>
							<div class="response-group-item correct"> <input id="q27f" name="q27"
									type="checkbox" value="f"> <label for="q27f"> <strong>f)
									</strong>Wind</label> </div>
							<div class="response-group-item correct"> <input id="q27g" name="q27"
									type="checkbox" value="g"> <label for="q27g"> <strong>g)
									</strong>Whales</label> </div>
							<div class="response-group-item correct"> <input id="q27h" name="q27"
									type="checkbox" value="h"> <label for="q27h"> <strong>h)
									</strong>Volcanoes</label> </div> <input
								class="submit-button btn btn-primary" name="submit-button" value="Done"
								type="button">
						</fieldset>
					</form>
					<div class="answer">
						<p class="response">The correct answers are a), b), c), d), e), f), g) and h).</p>
						<p class="explanation">Though some are certainly more common than others.</p>
					</div>
					<div class="message">Please make a selection.</div>
				</div>
			</div>
		</div>
		<div class="panel panel-default interaction-question">
			<div class="panel-body">
				<div class="question-wrap inlinedropdowns">
					<h4>Question 28</h4>
					<p class="question">Looking at the near-surface portion of these before and after profiles,
						what happens to the following properties after passage of the typhoons? Select the
						correct words to complete the sentence.</p>
					<form action="#">
						<fieldset>
							<div class="response-group-item">In the sound duct and in sound channels,
								transmission loss occurs due to <select name="q28a">
									<option>--</option>
									<option>cylindrical</option>
									<option>spherical</option>
								</select> spreading, where the sound intensity decreases <select name="q28b">
									<option>--</option>
									<option>linearly with distance</option>
									<option>with the square of the distance</option>
								</select> . </div>
							<div class="correct response-group-item dropdown_correct answer">In the sound duct
								and in sound channels, transmission loss occurs due to
								<strong>cylindrical</strong> spreading, where the sound intensity decreases
								<strong>linearly with distance</strong>. </div> <input
								class="submit-button btn btn-primary" name="submit-button" value="Done"
								type="button">
						</fieldset>
					</form>
					<div class="answer">
						<p class="explanation">The correct answer shown above.</p>
						<p class="explanation">Because sound ducts and sound channels are confined above and
							below, transmission loss occurs due to cylindrical spreading. With cylindrical
							spreading, sound intensity falls off linearly. In other words, at twice the
							distance, the signal is half as strong.</p>
					</div>
					<div class="message">Please make a selection.</div>
				</div>
			</div>
		</div>
	</div>
	<div id="page_10-8-0" class="page">
		<h3 class="sub_head"><small>Factors Affecting Detection of Sound » </small>Propagation Paths </h3>
		<div class="print_hide center" style="max-width:600px;margin:10px auto;">
			<div class="videowrap-16x9"> <video class="html5video" width="690" height="574"
					style="max-width:100%;" poster="media/video/10.8.0.jpg" preload="none" controls playsinline>
					<source src="media/video/10.8.0.mp4" type="video/mp4">
				</video> </div>
		</div>
		<div class="module_hide">
			<p>The last factor we will consider regarding sound detection is the propagation path. Once sound
				leaves a source, if it can’t follow a propagation path to your receiver, you’ll never hear it.
				Sometimes, as they say, "You can’t get there from here." This section looks at propagation paths
				as they affect sound detection.</p>
		</div>
	</div>
	<div id="page_10-8-1" class="page">
		<h3 class="sub_head"><small>Factors Affecting Detection of Sound » Propagation Paths » </small>Direct
			Path</h3>
		<div class="print_hide center" style="max-width:600px;margin:10px auto;">
			<div class="videowrap-16x9"> <video class="html5video" width="690" height="574"
					style="max-width:100%;" poster="media/video/10.8.1.jpg" preload="none" controls playsinline>
					<source src="media/video/10.8.1.mp4" type="video/mp4">
				</video> </div>
		</div>
		<div class="module_hide">
			<div class="center"><img src="media/graphics/direct_path.jpg" alt="Direct path propagation" />
			</div>
			<p>The simplest propagation path is direct path. This means that the sound travels through the water
				directly from the source to sensor. Only effects related to the water column between the source
				and sensor affect the propagation and detection potential is determined by the ratio of the
				signal strength to the noise at the sensor location. The frequency dependence of the sound path
				is generally not significant. While higher frequencies are attenuated at a greater rate than
				lower frequencies, ambient noise may mask low frequencies, but not high ones.</p>
			<p>In certain areas, only direct path energy is detectable. This may be due to a seafloor that
				absorbs so much sound that any reflected energy is not detectable. In other areas, the sound has
				such a low source level or the ambient noise is sufficiently high that its strength falls below
				detectable levels before it travels very far.</p>
		</div>
	</div>
	<div id="page_10-8-2" class="page">
		<h3 class="sub_head"><small>Factors Affecting Detection of Sound » Propagation Paths » </small>Sound
			Channels</h3>
		<div class="print_hide center" style="max-width:600px;margin:10px auto;">
			<div class="videowrap-16x9"> <video class="html5video" width="690" height="574"
					style="max-width:100%;" poster="media/video/10.8.2.jpg" preload="none" controls playsinline>
					<source src="media/video/10.8.2.mp4" type="video/mp4">
				</video> </div>
		</div>
		<div class="module_hide">
			<div class="center"><img src="media/graphics/sound_channel.jpg" alt="Sound Channel Propagation" />
			</div>
			<p>Sound channel propagation paths include surface duct, half-channel, and shallow sound channel.
				From a detection standpoint, if your detector is in the sound channel, you have a good chance of
				detecting a source that is also in the sound channel. Conversely, if your source is in the sound
				channel, but your detector is not, your chances of detection are slim.</p>
		</div>
	</div>
	<div id="page_10-8-3" class="page">
		<h3 class="sub_head"><small>Factors Affecting Detection of Sound » Propagation Paths »
			</small>Convergent Zones</h3>
		<div class="print_hide center" style="max-width:600px;margin:10px auto;">
			<div class="videowrap-16x9"> <video class="html5video" width="690" height="574"
					style="max-width:100%;" poster="media/video/10.8.3.jpg" preload="none" controls playsinline>
					<source src="media/video/10.8.3.mp4" type="video/mp4">
				</video> </div>
		</div>
		<div class="module_hide">
			<div class="center"><img src="media/graphics/con_zone.jpg" alt="Convergence Zone" /></div>
			<p>Sound following a convergent zone propagation path comes to the surface at regular intervals
				measured in kilometers. If you are in the convergent zone, constructive interference of multiple
				rays results in a strong sound signal. Sometimes a target within the propagation path of the
				refracted rays may be detected, other times there is insufficient energy for detection anywhere
				except in the convergent zone. However, outside the convergence zone, the sound signal vanishes.
			</p>
		</div>
	</div>
	<div id="page_10-8-4" class="page">
		<h3 class="sub_head"><small>Factors Affecting Detection of Sound » Propagation Paths » </small>Duct
			Leakage</h3>
		<div class="print_hide center" style="max-width:600px;margin:10px auto;">
			<div class="videowrap-16x9"> <video class="html5video" width="690" height="574"
					style="max-width:100%;" poster="media/video/10.8.4.jpg" preload="none" controls playsinline>
					<source src="media/video/10.8.4.mp4" type="video/mp4">
				</video> </div>
		</div>
		<div class="module_hide">
			<div class="center"><img src="media/graphics/duct_leak.jpg" alt="Duct Leakage" /></div>
			<p>Duct leakage occurs when energy trapped in the surface duct or shallow sound channel is released
				or "leaks" into deep water as a result of variations in the SLD. Because these variations are
				difficult to know or predict, so are the propagation paths. Thus, detection of sound along a
				duct leakage path is erratic and somewhat random.</p>
		</div>
	</div>
	<div id="page_10-8-5" class="page">
		<h3 class="sub_head"><small>Factors Affecting Detection of Sound » Propagation Paths » </small>Bottom
			Bounce</h3>
		<div class="print_hide center" style="max-width:600px;margin:10px auto;">
			<div class="videowrap-16x9"> <video class="html5video" width="690" height="574"
					style="max-width:100%;" poster="media/video/10.8.5.jpg" preload="none" controls playsinline>
					<source src="media/video/10.8.5.mp4" type="video/mp4">
				</video> </div>
		</div>
		<div class="module_hide">
			<div class="center"><img src="media/graphics/bb.jpg" alt="Bottom Bounce" /></div>
			<p>Bottom bounce and near-bottom sound channels have in common that both propagation paths require
				reflection off of the seafloor. In some shallow water areas, sound tends to fill the water
				column for long ranges due to multiple bottom bounces. This obviously helps sound detection.</p>
		</div>
	</div>
	<div id="page_10-8-6" class="page">
		<h3 class="sub_head"><small>Factors Affecting Detection of Sound » Propagation Paths »
			</small>Down-Slope Propagation</h3>
		<div class="print_hide center" style="max-width:600px;margin:10px auto;">
			<div class="videowrap-16x9"> <video class="html5video" width="690" height="574"
					style="max-width:100%;" poster="media/video/10.8.6.jpg" preload="none" controls playsinline>
					<source src="media/video/10.8.6.mp4" type="video/mp4">
				</video> </div>
		</div>
		<div class="module_hide">
			<div class="center"><img src="media/graphics/downslope.jpg" alt="Down-Slope Propagation Path" />
			</div>
			<p>Down-slope propagation includes elements of both bottom bounce and sound channel propagation. In
				this case, a sound source is located in shallow water near a drop-off in bathymetry. The
				acoustic energy initially strikes the seafloor in shallow water and bounces back. However, as
				the sound follows the slope downward, it will eventually bounce off the slope at a point below
				the top of the thermocline. Once this happens, the sound becomes entrained or trapped in the
				deep sound channel, typically at depths below the maximum depth of most sensors.</p>
		</div>
	</div>
	<div id="page_10-8-7" class="page">
		<h3 class="sub_head"><small>Factors Affecting Detection of Sound » Propagation Paths » </small>Shadow
			Zones</h3>
		<div class="print_hide center" style="max-width:600px;margin:10px auto;">
			<div class="videowrap-16x9"> <video class="html5video" width="690" height="574"
					style="max-width:100%;" poster="media/video/10.8.7.jpg" preload="none" controls playsinline>
					<source src="media/video/10.8.7.mp4" type="video/mp4">
				</video> </div>
		</div>
		<div class="module_hide">
			<div class="center"><img src="media/graphics/shadow.jpg" alt="Shadow Zone" /></div>
			<p>Shadow zones are areas where sound from a source at a given location cannot go due to the sound
				speed structure. This example shows a shadow zone below the surface duct, where sound is
				refracted upward, and near the top of the thermocline, where the sound is refracted downward. In
				practice, a shadow zone is never truly free of radiated sound because of scattered sound from
				the sea surface and by diffusion of sound from the sound channel. However, the sound leaked into
				the shadow zone is usually too weak to reveal a target.</p>
		</div>
	</div>
	<div id="page_10-8-8" class="page">
		<h3 class="sub_head"><small>Factors Affecting Detection of Sound » Propagation Paths » </small>Multipath
			Detection</h3>
		<div class="print_hide center" style="max-width:600px;margin:10px auto;">
			<div class="videowrap-16x9"> <video class="html5video" width="690" height="574"
					style="max-width:100%;" poster="media/video/10.8.8.jpg" preload="none" controls playsinline>
					<source src="media/video/10.8.8.mp4" type="video/mp4">
				</video> </div>
		</div>
		<div class="module_hide">
			<div class="center"><img src="media/graphics/multipath.jpg"
					alt="Multipath Propagation: multiple paths between source and receiver" /></div>
			<p>Multi-path detection is when sound emitted by or reflected off the target reaches the sensor via
				two or more propagation paths. In the graphic, sound from the whale is reaching the sensor via
				direct path and bottom bounce pathways. For an active system, multi-path detection would be
				heard as two or more returns for every ping, with each return representing the two-way travel
				time from the source/sensor to the target via one of the propagation pathways.</p>
		</div>
	</div>
	<div id="page_10-9-0" class="page">
		<h3 class="sub_head"><small>Factors Affecting Detection of Sound » </small>Questions</h3>
	</div>
	<div id="page_10-9-1" class="page">
		<h3 class="sub_head"><small>Factors Affecting Detection of Sound » Questions » </small>Question </h3>
		<div class="panel panel-default interaction-question">
			<div class="panel-body">
				<div class="question-wrap radio">
					<h4>Question 29</h4>
					<div class="center"><img src="media/graphics/prop_path_q2.jpg" alt="Propagation path" />
					</div>
					<p>Will the ship hear the whale? (Choose the best answer.)</p>
					<form action="#">
						<fieldset>
							<div class="response-group-item"> <input id="q29a" name="q29" type="radio"
									value="a"> <label for="q29a"> <strong>a) </strong>Yes</label> </div>
							<div class="response-group-item correct"> <input id="q29b" name="q29" type="radio"
									value="b"> <label for="q29b"> <strong>b) </strong>No</label> </div> <input
								class="submit-button btn btn-primary" name="submit-button" value="Done"
								type="button">
						</fieldset>
					</form>
					<div class="answer">
						<p class="response">The best answer is b) No.</p>
						<p class="explanation">The whale lies in a sound channel from which its call is unlikely
							to escape. Of course, this depends on several factors, most importantly the
							frequency of the whale song and the depth of the sound channel.</p>
					</div>
					<div class="message">Please make a selection.</div>
				</div>
			</div>
		</div>
	</div>
	<div id="page_10-9-2" class="page">
		<h3 class="sub_head"><small>Factors Affecting Detection of Sound » Questions » </small>Question </h3>
		<div class="panel-body drawing-question" data-image="prop_path_q3.png" data-colors="RGB(255,255,255)"
			data-labels="propagation path">
			<h4>Question 30</h4>
			<p>On the image below:</p>
			<ul>
				<li>Use the pen to draw a propagation path from ship 1 to ship 3 that bypasses ship 2. </li>
			</ul>
			<p> </p>
			<p><strong>When you have finished, select Done.</strong></p>
			<div class="answer">
				<p class="explanation"><strong>Compare your answer to the answer below.</strong></p>
				<div class="center explanation"><img src="media/graphics/prop_path_q3_ans.png"
						alt="Propagation path"></div>
			</div>
		</div>
	</div>
	<div id="page_11-0-0" class="page">
		<h3>Sensors</h3>
		<div class="print_hide center" style="max-width:600px;margin:10px auto;">
			<div class="videowrap-16x9"> <video class="html5video" width="690" height="574"
					style="max-width:100%;" poster="media/video/11.0.0.jpg" preload="none" controls playsinline>
					<source src="media/video/11.0.0.mp4" type="video/mp4">
				</video> </div>
		</div>
		<div class="module_hide">
			<p>All sonar can be classified as one of two types: active or passive, though some can do both. </p>
		</div>
	</div>
	<div id="page_11-1-0" class="page">
		<h3 class="sub_head"><small>Sensors » </small>Passive sonar/sensors</h3>
		<div class="print_hide center" style="max-width:600px;margin:10px auto;">
			<div class="videowrap-16x9"> <video class="html5video" width="690" height="574"
					style="max-width:100%;" poster="media/video/11.1.0.jpg" preload="none" controls playsinline>
					<source src="media/video/11.1.0.mp4" type="video/mp4">
				</video> </div>
		</div>
		<div class="module_hide">
			<div class="center"><img src="media/graphics/passive_array.jpg"
					alt="Ship Towing Passive Sonar Array" /></div>
			<p>Passive sonar operates by listening for sound in a specified, typically low-frequency, bandwidth.
				Some passive sonars can hear sound emitted over a wide band of frequencies, others are more
				limited in bandwidth; these often have a much higher receiver gain so they can hear sound from
				greater distances.</p>
			<p>Passive sensors are typically long arrays of hydrophones towed behind a ship or submarine. The
				frequencies typically detected by passive sensors generally will not trap in the surface duct,
				unless it is very deep.</p>
		</div>
	</div>
	<div id="page_11-2-0" class="page">
		<h3 class="sub_head"><small>Sensors » </small>Reciprocity in Propagation Paths</h3>
		<div class="print_hide center" style="max-width:600px;margin:10px auto;">
			<div class="videowrap-16x9"> <video class="html5video" width="690" height="574"
					style="max-width:100%;" poster="media/video/11.2.0.jpg" preload="none" controls playsinline>
					<source src="media/video/11.2.0.mp4" type="video/mp4">
				</video> </div>
		</div>
		<div class="module_hide">
			<div class="center"><img src="media/graphics/reciprocity.jpg"
					alt="Vertical Cross Section of Transmission Loss Modeled from Both the Source and Sensor Showing a Failure of Reciprocity" />
			</div>
			<p>Sonar modeling for passive acoustic propagation often assumes reciprocity of propagation paths.
				Reciprocity states that for a source that radiates equally well in all directions and a receiver
				that receives equally well from all directions, the source and receiver can be interchanged
				without affecting the answer, regardless of how complicated the propagation paths. Thus, passive
				acoustic modeling for sonar performance predictions often models transmission loss relative to
				the location/depth of the sensor (sensor centric). In other words, the assumption is made that
				by modeling the sensor as a source, the propagation paths emanating out from that location will
				show where a target could be detected.</p>
			<p>In some cases, this is a reasonable approximation. Reciprocity can be shown to hold
				point-to-point: sound radiated from either point will have (approximately) the same intensity
				regardless of which direction it follows along the propagation path.</p>
			<p>The problem with this is that reciprocity holds ONLY point-to-point. The transmission loss values
				are reciprocal only at the specified source and sensor points. However, the actual detection
				potential depends on the entire sound field. The fields are rarely reciprocal and in some cases
				are not even close to reciprocal.</p>
			<p>This example shows two cross sections extending from sensor (left) to source (right). The top one
				shows transmission loss modeled from the sensor location (sensor-centric). The bottom one shows
				the same thing modeled from the source location (source-centric). From the sensor-centric model,
				there is little transmission loss between sensor and source so one would expect to detect the
				source. However, source-centric modeling shows much greater transmission loss. Not enough sound
				energy reaches the sensor for detection.</p>
			<p>When the acoustic environments of the source and sensor are very different, sensor centric
				modeling may be at best misleading and at worst completely wrong. "Different" can mean different
				water depths, in and out of a sound channel or duct, or very different depths relative to the
				deep sound channel.</p>
		</div>
	</div>
	<div id="page_11-3-0" class="page">
		<h3 class="sub_head"><small>Sensors » </small>Active Sonar/Sensors</h3>
		<div class="print_hide center" style="max-width:600px;margin:10px auto;">
			<div class="videowrap-16x9"> <video class="html5video" width="690" height="574"
					style="max-width:100%;" poster="media/video/11.3.0.jpg" preload="none" controls playsinline>
					<source src="media/video/11.3.0.mp4" type="video/mp4">
				</video> </div>
		</div>
		<div class="module_hide">
			<div class="center">
				<script
					type="text/javascript">if (printVersion) { document.write('<a href="media/video/active_sonar.mp4" target="_blank"><img class="img-responsive center-block" src="media/video/active_sonar.jpg" alt="Conceptual animation showing active sonar"/></a>'); }</script>
				<script
					type="text/javascript">if (printVersion === false) { document.write('<video class="html5video center-block" width="500" height="350" poster="media/video/active_sonar.jpg" preload="auto" controls playsinline   ><source src="media/video/active_sonar.mp4" type="video/mp4"></video>'); }</script>
			</div><br>
			<p>Active sonar operates by sending out a pulse of sound at a specified frequency, then listening
				for the reflection from the target. Most of the time, frequencies used by active sensors are
				2000 Hz and above. Although the higher frequency sound experiences greater attenuation, it
				facilitates localization of the reflector. The catch is that not only does the sound reflect off
				any target in the area, it also reflects off the seafloor, the sea surface, and even "stuff" in
				the water. As a result, the return signal is a jumble of the reflections off many reflectors.
				Plus, it may also contain ambient noise components due to weather and biological sources.</p>
			<p>Active systems are often attached to the hull of a ship. Consequently, ocean features near the
				surface of the water have a significant effect on the propagation and detection of sound.
				Furthermore, higher frequencies are more likely to trap in the surface duct. Therefore, active
				sonar may have very long detection ranges against any reflector in the surface duct, but a low
				probability of detecting a deep target.</p>
		</div>
	</div>
	<div id="page_11-4-0" class="page">
		<h3 class="sub_head"><small>Sensors » </small>Target Strength</h3>
		<div class="print_hide center" style="max-width:600px;margin:10px auto;">
			<div class="videowrap-16x9"> <video class="html5video" width="690" height="574"
					style="max-width:100%;" poster="media/video/11.4.0.jpg" preload="none" controls playsinline>
					<source src="media/video/11.4.0.mp4" type="video/mp4">
				</video> </div>
		</div>
		<div class="module_hide">
			<div class="center">
				<script
					type="text/javascript">if (printVersion) { document.write('<a href="media/video/target_strength.mp4" target="_blank"><img class="img-responsive center-block" src="media/video/target_strength.jpg" alt="Conceptual animation showing strong and weak target strength"/></a>'); }</script>
				<script
					type="text/javascript">if (printVersion === false) { document.write('<video class="html5video center-block" width="500" height="350" poster="media/video/target_strength.jpg" preload="auto" controls playsinline   ><source src="media/video/target_strength.mp4" type="video/mp4"></video>'); }</script>
			</div><br>
			<p>The probability of detection for an active sonar system depends in part on target strength.
				Target strength is a measure of how efficiently an object reflects sound of a certain frequency.
				It depends on the reflectivity of the object (at the specific frequency) and its size. A small
				object that reflects sound efficiently might have a higher target strength than a larger object
				that tends to absorb or scatter sound rather than reflecting it.</p>
			<div class="center">
				<script
					type="text/javascript">if (printVersion) { document.write('<a href="media/video/target_aspect.mp4" target="_blank"><img class="img-responsive center-block" src="media/video/target_aspect.jpg" alt="Conceptual animation showing importance of target aspect ratio to active sonar source level"/></a>'); }</script>
				<script
					type="text/javascript">if (printVersion === false) { document.write('<video class="html5video center-block" width="500" height="350" poster="media/video/target_aspect.jpg" preload="auto" controls playsinline   ><source src="media/video/target_aspect.mp4" type="video/mp4"></video>'); }</script>
			</div><br>
			<p>For most objects, target strength is also aspect dependent. That is, for a very flattened or
				elongate target, the strength of the reflection will depend on the orientation of the target
				relative to the sound waves.</p>
		</div>
	</div>
	<div id="page_12-0-0" class="page">
		<h3>SONAR Equation (Advanced Topic)</h3>
	</div>
	<div id="page_12-1-0" class="page">
		<h3 class="sub_head"><small>SONAR Equation (Advanced Topic) » </small>Introduction</h3>
		<p>Sonar performance is predicted based on the interplay between several parameters that depend on the
			equipment, environment, and target. Very simply detection is possible if</p>
		<div class="center">
			<p>Signal – noise + gain &#8250; detection threshold</p>
		</div>
		<p>Each of the variables on the left-hand side of the equation is a combination of several parameters.
			The units of each term in the sonar equation are decibels (dB. The use of the decibel as the "unit"
			for terms in the sonar equation makes it possible to combine unlike physical parameters to obtain a
			usable result.</p>
	</div>
	<div id="page_12-2-0" class="page">
		<h3 class="sub_head"><small>SONAR Equation (Advanced Topic) » </small>The Variables</h3>
		<p>Before detailing the breakdown of the variables, a few definitions are in order.</p>
		<table class="table table-bordered">
			<thead>
				<tr>
				<td>&nbsp;</td>
				<td>Active</td>
				<td>Passive</td>
				</tr>
			</thead>
			<tbody>
			<tr>
				<th colspan="3">Parameters depending on the <em>equipment</em>:</th>
			</tr>
			<tr>
				<td>Projector Source Level (SL)</td>
				<td>X</td>
				<td>&nbsp;</td>
			</tr>
			<tr>
				<td>Self-noise level (NL)</td>
				<td>X</td>
				<td>X</td>
			</tr>
			<tr>
				<td>Receiving directivity index (DI)</td>
				<td>X</td>
				<td>X</td>
			</tr>
			<tr>
				<td>Detection Threshold (DT)/ Recognition Differential (RD)</td>
				<td>X</td>
				<td>X</td>
			</tr>
			<tr>
				<th colspan="3">Parameters depending on the <em>environment</em>:</th>
			</tr>
			<tr>
				<td>Transmission Loss (TL)</td>
				<td>X</td>
				<td>X</td>
			</tr>
			<tr>
				<td>Reverberation Level (RL)</td>
				<td>X</td>
				<td>&nbsp;</td>
			</tr>
			<tr>
				<td>Ambient Noise Level (AN, sometimes referred to as NLAN)</td>
				<td>X</td>
				<td>X</td>
			</tr>
			<tr>
				<th colspan="3">Parameters depending on the <em>target</em>:</th>
			</tr>
			<tr>
				<td>Target Strength (TS)</td>
				<td>X</td>
				<td>&nbsp;</td>
			</tr>
			<tr>
				<td>Target Source Level (SL)</td>
				<td>&nbsp;</td>
				<td>X</td>
			</tr>
			</tbody>
		</table>
	</div>
	<div id="page_12-3-0" class="page">
		<h3 class="sub_head"><small>SONAR Equation (Advanced Topic) » </small>Sonar Equation: Passive Systems
		</h3>
		<p>Now, back to the basic form of the Sonar equation:</p>
		<div class="center">
			<p>Signal – noise + gain &#8250; detection threshold</p>
		</div>
		<p>Let’s expand this equation for the simpler passive systems.</p>
		<p>The <em>signal</em> is the signal level received by the system. For passive systems it is the sound
			source level minus the one-way transmission loss:</p>
		<div class="center">
			<p>Signal = SL – TL</p>
		</div>
		<p>The <em>noise</em> affecting reception is the power sum of the ambient noise and the self-noise of
			the system (which includes both noise in the processors, etc. and noise due to own-ship):</p>
		<div class="center">
			<p>Noise = AN &#8853; NL<sub>s</sub></p>
		</div>
		<p>The power sum just means that we sum the pressure intensities of the noise sources, rather than the
			decibel levels. Because the decibel is a logarithmic measure, this has a significant effect on the
			calculation.</p>
		<p>The <em>gain</em> is the array directivity index, which includes the receiver processing gain. This
			number varies with target location relative to the receiver array orientation. </p>
		<div class="center">
			<p>Gain = DI</p>
		</div>
		<p>The detection threshold (DT) is the minimum value of receiver output that leads to detection of a
			target. Detection threshold is also known as the recognition threshold or sensor recognition
			differential (RD). Thus, a target can be detected if</p>
		<div class="center">
			<p>[signal – noise + gain] &#8250; DT</p>
		</div>
		<p>Or in a more expanded form:</p>
		<div class="center">
			<p>[SL – TL – (AN &#8853; NL<sub>s</sub>) + DI] &#8250; DT</p>
		</div>
		<p>Usually the sonar equation is given in terms of signal excess (SE), which is the amount by which the
			received signal exceeds the detection threshold. When this is done, the DI and DT, both of which
			depend on the sensor, are often combined.</p>
		<div class="center">
			<p>SE = SL – TL – AN + (DI – DT )</p>
		</div>
		<div class="center">
			<p>SE = SL – TL – NL + (DI – DT )</p>
		</div>
		<p>Note that we assume that either the ambient noise (AN) or the self noise (NL) dominates, so that we
			neglect the other noise term.</p>
	</div>
	<div id="page_12-4-0" class="page">
		<h3 class="sub_head"><small>SONAR Equation (Advanced Topic) » </small>Example</h3>
		<div class="panel panel-default interaction-question">
			<div class="panel-body">
				<div class="question-wrap radio">
					<h4>Question 31</h4>
					<p>Given a case with the values in this table. Can the source be detected by our sensor?
						(Choose the best answer.)</p>
					<p>(Remember from the previous page that SE = SL – TL – AN + (DI – DT ))</p>
					<table class="table table-bordered">
						<tbody>
						<tr>
							<th>Source</th>
							<td>SL </td>
							<td>= 130 dB</td>
						</tr>
						<tr>
							<th>Sensor</th>
							<td>DI &ndash; DT</td>
							<td>= 18 dB</td>
						</tr>
						<tr>
							<th rowspan="2">Environment</th>
							<td>AN</td>
							<td>= 65 dB</td>
						</tr>
						<tr>
							<td>TL </td>
							<td>= 83 dB </td>
						</tr>
						</tbody>
					</table> <br />
					<form action="#">
						<fieldset>
							<div class="response-group-item correct"> <input id="q31a" name="q31" type="radio"
									value="a"> <label for="q31a"> <strong>a) </strong>Yes, the signal can be
									detected</label> </div>
							<div class="response-group-item"> <input id="q31b" name="q31" type="radio"
									value="b"> <label for="q31b"> <strong>b) </strong>No, the signal cannot be
									detected.</label> </div> <input class="submit-button btn btn-primary"
								name="submit-button" value="Done" type="button">
						</fieldset>
					</form>
					<div class="answer">
						<p class="response">The correct answer is a) Yes, the signal can be detected. </p>
						<p class="explanation">Substituting the values from the table into the passive sonar
							equation we find</p>
						<p class="explanation">SE = SL – TL – AN + (DI – DT)</p>
						<p class="explanation">SE = 130 dB – 83 dB – 65 dB + 18 dB</p>
						<p class="explanation">SE = 0 dB</p>
						<p class="explanation">Or, the signal is just strong enough to meet the detection
							threshold.</p>
						<p class="explanation">Note that if we tried to do this same calculation using the
							intensities and power rather than the dB ratios, the simple equation above would not
							yield the correct result.</p>
					</div>
					<div class="message">Please make a selection.</div>
				</div>
			</div>
		</div>
	</div>
	<div id="page_12-5-0" class="page">
		<h3 class="sub_head"><small>SONAR Equation (Advanced Topic) » </small>Sonar Equation: Active Systems
		</h3>
		<p>The <em>signal</em> term for active systems differs from that for passive systems. For active systems
			we must consider the two-way transmission loss (to target and back) plus the target backscattering
			strength.</p>
		<div class="center">
			<p>Signal = SL – 2TL + TS</p>
		</div>
		<p>For the noise, we add a term for the reverberation level. The total noise affecting reception is the
			power sum of the ambient noise, the reverberation level, and the self-noise of the system (all at
			the frequency of interest).</p>
		<div class="center">
			<p>Noise = AN &#8853; RL &#8853; NLs</p>
		</div>
		<p>The total noise is given in terms of dB, which means for an active system there is interplay between
			the ambient noise, the reverberation level, and the self-noise as to which is the dominant factor in
			determining the total noise level.</p>
		<p>The gain term remains unchanged:</p>
		<div class="center">
			<p>Gain = DI</p>
		</div>
		<p>Now, we can expand the sonar equation for an active system in two forms:</p>
		<p>(1) the noise limited form</p>
		<div class="center">
			<p>Signal Excess (SE) = SL – 2TL + TS – NL + DI – DT</p>
		</div>
		<p>(2) the reverberation limited form:</p>
		<div class="center">
			<p>Signal Excess (SE) = SL – 2TL + TS – RL – DT</p>
		</div>
		<p>where RL is the equivalent plane-wave reverberation level and includes the ambient noise and DI
			terms.</p>
	</div>
	<div id="page_12-6-0" class="page">
		<h3 class="sub_head"><small>SONAR Equation (Advanced Topic) » </small>DT vs RD vs RT</h3>
		<p>One of the most confusing terms used with the sonar equation is detection threshold (DT). This factor
			may be called detection threshold, as it is here, recognition differential (RD), used in many
			standard Navy publications and sensor databases, or even recognition threshold (RT).</p>
		<p>To make matters worse, the same terminology might mean slightly different things depending on the
			technical background of the author and/or the context. For example, recognition differential or
			detection threshold may refer each of the following: </p>
		<ul>
			<li>The level at which a signal will appear on the screen, an intrinsic property of the sensor,
			</li>
			<li>The level at which a trained, alerted operator will call a detection 50% of the time, or </li>
			<li>The difference in the ability of a trained versus untrained operator to detect a signal. </li>
		</ul>
		<p>For active sensors, there is a minimum signal level for a signal to show up on the sonar screen. Now
			suppose a particular sensor requires 10 dB of signal for something to show on the screen. If the
			signal is less than 10 dB, the probability of detection is zero; the signal that is not on the
			screen cannot be seen by even the best operator. However, appearing on the screen is not sufficient
			criteria for detection. Often the required signal level for a trained operator to call a detection
			is greater than the signal required for it to appear on the screen. Furthermore, usually a trace
			must be present for some number of pings and exhibit behavior consistent with that expected from the
			target before a contact is called.</p>
		<p>Passive sensors do not have minimum signal at the sensor required for the signal to show on the
			screen. However, as with active sensors, it is usually necessary for a signal to persist long enough
			at some minimum signal level and display behavior consistent with that of the target for a contact
			to be called.</p>
	</div>
	<div id="page_12-7-0" class="page">
		<h3 class="sub_head"><small>SONAR Equation (Advanced Topic) » </small>Figure of Merit (FOM)</h3>
		<p>The sonar equations are often rearranged and stated in terms of a "figure of merit" (FOM). The FOM
			represents the maximum allowable one-way transmission loss for passive sensors and the maximum
			allowable two-way transmission loss for active sensors. The FOM is usually considered dimensionless,
			values included in the calculation are in dB.</p>
		<p>The passive FOM is given by:</p>
		<div class="center">
			<p>FOM = SL – NL + DI – DT</p>
		</div>
		<p>The FOM for active sensors verses a target with target strength TS is given by:</p>
		<div class="center">
			<p>FOM = SL + TS – NL + DI – DT</p>
		</div>
		<p>The utility of the FOM is it can be used to give "rule-of-thumb" detection ranges. For example, an
			FOM of 76 for a passive sensor is generally assumed to translate to a detection range of
			approximately 20 kyds. Of course, the actual detection range varies with propagation pathway,
			condition of the equipment, and the environment, both water and sediment.</p>
	</div>
	<div id="page_13-0-0" class="page">
		<h3>Summary</h3>
		<p>Sound is a pressure wave.Sound waves are characterized by their amplitude, frequency, speed,
			wavelength, and phase. Waves with the same phase interact constructively, resulting in higher
			amplitude. Waves with opposite phase interact destructively.</p>
		<p>Sound speed variations in seawater typically are relatively small. </p>
		<p>Sound speed increases with increasing temperature, salinity, and pressure.</p>
		<p>In most of the world&rsquo;s oceans, a relatively warm, well-mixed surface layer is underlain by a
			sharp thermocline with temperatures dropping to about 4&deg;C at 1500 meters depth. Sound speed
			increases slightly through the mixed layer, drops through the thermocline, and increases slowly
			below that. </p>
		<p>As sound waves pass through the ocean, they refract as they speed up and slow down, bending toward
			the slower speeds. Higher frequencies refract more than lower frequencies.</p>
		<p>A surface duct that can trap sound exists any time the sound speed increases with depth in the mixed
			layer. The sonic layer depth (SLD) is the maximum depth of the surface duct.</p>
		<p>Sound paths that escape the mixed layer refract downward through the thermocline, and then back
			upward in the deep isothermal layer. All of the sound rays passing below the conjugate depth and
			above the seafloor tend to come together near the surface in the convergence zone. </p>
		<p>Sound channels are levels in the ocean that trap sound waves. A sound channel can occur anytime there
			is a minimum in a vertical sound speed profile. The deep sound channel occurs deep in the ocean,
			typically at depths around 3000 ft. Secondary sound channels also occur, typically at shallower
			depths.</p>
		<p>A half-channel occurs when a positive sound velocity gradient extends all the way from the surface to
			the seafloor. Sound continually refracts upward toward the surface throughout the water column.</p>
		<p>A near-bottom sound channel occurs when the there is a negative sound speed gradient from the surface
			to the seafloor, usually in shallow water. Sound continually refracts downward toward the seafloor
			throughout the water column.</p>
		<p>Ocean fronts act as a barrier to acoustic energy. Energy trapped in a surface duct will be dumped
			below the layer in a process called duct leakage.</p>
		<p>Eddies can be treated as circular fronts. In warm core eddies, the mixed layer tends to be deeper
			inside the eddy, increasing the sonic layer depth. In cold core eddies the sonic layer depth tends
			to be shallow.</p>
		<p>Severe storms mix the surface water, leading to a deep surface duct. At times, the surface duct can
			be deep enough to trap even lower-frequency energy.</p>
		<p>In the summer, solar heating can reduce the surface duct or eliminate it completely. A surface sound
			channel may develop. This effect can occur on either a seasonal or a daily basis.</p>
		<p>The primary oceanographic effect of internal tides is the fluctuation of the sonic layer depth. </p>
		<p>Sound reflects off the seafloor and the sea surface. Reflectivity depends on several factors,
			including sediment type, shape of the seafloor, and sound frequency. Seafloor sediments can absorb
			much of the sound without reflection and a rough bottom can scatter much of the energy. </p>
		<p>Scattering and reverberation also occur at the sea surface and in the water column. Fish swim
			bladders and air bubbles both reverberate and scatter sound energy. Absorption also occurs in
			seawater by the presence of some impurities that convert sound energy to heat.</p>
		<p>Detecting sound underwater depends on whether the sound we would like to hear is stronger than the
			background ambient noise. Ambient noise has many sources, including marine fauna, ships, and
			weather.</p>
		<p>As sound travels through water it weakens due to spreading of the sound waves. This can occur as
			either spherical spreading or cylindrical spreading. The propagation path sound takes will also
			determine whether you can hear it.</p>
		<p>Sonars that detect targets underwater can be either passive or active. Passive sonars just listen for
			sound from a source. Active sonars emit a sound and listen for the reflection off of a target.
			Target strength and target aspect are important properties in determining whether a reflected sound
			is strong enough to be detected.</p>
	</div>
	<div id="page_14-0-0" class="page">
		<h3>References</h3>
		<p>Bruce, J.C., and Firing, E., 1974: Temperature measurements in the upper 10 m with modified
			expendable bathythermograph probes. <em>J. Geophysical Research</em> <strong>79</strong>, 4110-4111.
		</p>
		<p>Colladon, J. D., 1893: <em>Souvenirs et M&eacute;moires, </em>Albert-Schuchardt, Geneva.</p>
		<p>Haines, G., 1974: <em>Sound Underwater, </em>Crane Russak &amp; Company, Inc., New York, NY. </p>
		<p>Lurton, Xavier, 2002: <em>An Introduction to Underwater Acoustics: Principles and Applications</em>,
			Chichester, UK : Springer/Praxis Publishing.</p>
		<p>Medwin, Herman and colleagues, 2005: <em>Sounds in the Sea: From Ocean Acoustics to Acoustical
				Oceanography</em>, New York : Cambridge University Press.</p>
		<p>Medwin, H., 1975: Speed of sound in water: a simple equation for realistic parameters. <em>Journal of
				the Acoustical Society of America,</em>, <strong>58</strong>, 1318-19. </p>
		<p>Simmonds, Mark, Sarah Dolman, and Lindy Wielgart, 2004: <em>Oceans of Noise 2004</em>,&nbsp; WDCS
			Whale and Dolphin Conservation Society: Chippenham.</p>
		<p>Urick, Robert J., 1983: <em>Principles of Underwater Sound, 3rd Edition</em>, McGraw-Hill Book
			Company, New York.</p>
		<p>Wenz, G.M. 1962: Ambient noise in the ocean: spectra and sources. <em>Journal of the Acoustical
				Society of America,</em> <strong>34</strong>, 1936.</p>
	</div>
	<div id="page_contributors" class="page">
		<h3>Contributors</h3>
		<h4 id="sponsors">COMET Sponsors</h4>
		<p> The COMET<sup>&reg;</sup> Program is sponsored by NOAA National Weather Service (NWS), with
			additional funding by:</p>
		<ul>
			<li>Air Force Weather (AFW)</li>
			<li>European Organisation for the Exploitation of Meteorological Satellites (EUMETSAT)</li>
			<li>Meteorological Service of Canada (MSC)</li>
			<li>National Environmental Education Foundation (NEEF)</li>
			<li>National Polar-orbiting Operational Environmental Satellite System (NPOESS)</li>
			<li>NOAA National Environmental Satellite, Data and Information Service (NESDIS)</li>
			<li>Naval Meteorology and Oceanography Command (NMOC)</li>
		</ul>
		<h4 id="contributors">Project Contributors</h4>
		<h5>Principal Science Advisor</h5>
		<ul>
			<li>Dr. Heidi Vosbein - Naval Oceanographic Office</li>
		</ul>
		<h5>Senior Project Manager</h5>
		<ul>
			<li>Dr. Greg Byrd - UCAR/COMET</li>
		</ul>
		<h5>Project Lead And Instructional Design</h5>
		<ul>
			<li>Dr. Alan Bol - UCAR/COMET</li>
		</ul>
		<h5>Graphics/Interface Design</h5>
		<ul>
			<li>Steve Deyo - UCAR/COMET</li>
			<li> Brannan McGill - UCAR/COMET</li>
		</ul>
		<h5>Multimedia Authoring</h5>
		<ul>
			<li>Dan Riter - UCAR/COMET</li>
		</ul>
		<h5>Audio Editing/Production</h5>
		<ul>
			<li>Seth Lamos - UCAR/COMET</li>
		</ul>
		<h5>Audio Narration</h5>
		<ul>
			<li>Melinda Powers - UCAR/SAS</li>
		</ul>
		<h4>COMET HTML Integration Team 2021</h4>
		<ul>
			<li>Tim Alberta &mdash; Project Manager</li>
			<li>Dolores Kiessling &mdash; Project Lead</li>
			<li>Steve Deyo &mdash; Graphic Artist</li>
			<li>Ariana Kiessling &mdash; Web Developer</li>
			<li>Gary Pacheco &mdash; Lead Web Developer</li>
			<li>David Russi &mdash; Translations</li>
			<li>Tyler Winstead &mdash; Web Developer</li>
		</ul>
		<h4 id="staff">COMET Staff, October 2009</h4>
		<h5>Director</h5>
		<ul>
			<li>Dr. Timothy Spangler</li>
		</ul>
		<h5>Deputy Director</h5>
		<ul>
			<li>Dr. Joe Lamos</li>
		</ul>
		<h5>Administration</h5>
		<ul>
			<li>Elizabeth Lessard, Administration and Business Manager</li>
			<li>Lorrie Alberta</li>
			<li>Michelle Harrison</li>
			<li>Hildy Kane</li>
			<li>Ellen Martinez</li>
		</ul>
		<h5>Hardware/Software Support and Programming</h5>
		<ul>
			<li>Tim Alberta, Group Manager</li>
			<li>Bob Bubon</li>
			<li>James Hamm</li>
			<li>Ken Kim</li>
			<li>Mark Mulholland</li>
			<li>Wade Pentz, Student</li>
			<li>Malte Winkler</li>
		</ul>
		<h5>Instructional Designers</h5>
		<ul>
			<li>Dr. Patrick Parrish, Senior Project Manager</li>
			<li>Dr. Alan Bol</li>
			<li>Maria Frostic</li>
			<li>Lon Goldstein</li>
			<li>Bryan Guarente</li>
			<li>Dr. Vickie Johnson</li>
			<li>Tsvetomir Ross-Lazarov</li>
			<li>Marianne Weingroff</li>
		</ul>
		<h5>Media Production Group</h5>
		<ul>
			<li>Bruce Muller, Group Manager</li>
			<li>Steve Deyo</li>
			<li>Seth Lamos</li>
			<li>Brannan McGill</li>
			<li>Dan Riter</li>
			<li>Carl Whitehurst</li>
		</ul>
		<h5>Meteorologists/Scientists</h5>
		<ul>
			<li>Dr. Greg Byrd, Senior Project Manager</li>
			<li>Wendy Schreiber-Abshire, Senior Project Manager</li>
			<li>Dr. William Bua</li>
			<li>Patrick Dills</li>
			<li>Dr. Stephen Jascourt</li>
			<li>Matthew Kelsch</li>
			<li>Dolores Kiessling</li>
			<li>Dr. Arlene Laing</li>
			<li>Dave Linder</li>
			<li>Dr. Elizabeth Mulvihill Page</li>
			<li>Amy Stevermer</li>
			<li>Warren Rodie</li>
		</ul>
		<h5>Science Writer</h5>
		<ul>
			<li>Jennifer Frazer</li>
		</ul>
		<h5>Spanish Translations</h5>
		<ul>
			<li>David Russi</li>
		</ul>
		<h5>NOAA/National Weather Service - Forecast Decision Training Branch</h5>
		<ul>
			<li>Anthony Mostek, Branch Chief</li>
			<li>Dr. Richard Koehler, Hydrology Training Lead</li>
			<li>Brian Motta, IFPS Training</li>
			<li>Dr. Robert Rozumalski, SOO Science and Training Resource (SOO/STRC) Coordinator</li>
			<li> Ross Van Til, Meteorologist</li>
			<li>Shannon White, AWIPS Training</li>
		</ul>
		<h5>Meteorological Service of Canada Visiting Meteorologists</h5>
		<ul>
			<li>Phil Chadwick</li>
		</ul>
	</div>
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