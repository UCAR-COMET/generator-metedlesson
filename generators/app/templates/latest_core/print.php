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
</head>

<body>
    <!-- MODULE WRAPPER (container) ==================================-->
    <main id="module-wrapper" class="container">
        <div class="row">
            <header id="module-topbanner">
                <a id="module-title" class="module-title-text " href="index.htm"></a>
                <h3 id="module-credit" class="hidden-sm hidden-xs">
                    Produced by The COMET&reg; Program
                </h1>
            </header>
        </div>

        <div class="row">
            <!-- TABLE OF CONTENTS ==================================-->
            <nav id="tableofcontents" class="sidebar-toc">
            <ul class="nav lc-docs-sidenav">
                <li><a href="#page_1-0-0" title="Learning Objectives">Learning Objectives</a></li>
                <li><a href="#page_2-0-0" title="Introduction">Introduction</a>
                    <ul id="ul_2-0-0" class="nav">
                        <li><a href="#page_2-1-0" title="A note on radar color maps for this lesson">A note on radar color maps for
                                this lesson</a></li>
                        <li><a href="#page_2-2-0" title="Polarimetry principles">Polarimetry principles</a></li>
                        <li><a href="#page_2-3-0" title="Brief history of polarimetric radar">Brief history of polarimetric
                                radar</a>
                            <ul id="ul_2-3-0" class="nav">
                                <li><a href="#page_2-3-1" title="ZDR arc">ZDR arc</a></li>
                                <li><a href="#page_2-3-2" title="ZDR column">ZDR column</a></li>
                            </ul>
                        </li>
                        <li><a href="#page_2-4-0" title="Correlation coefficient (CC or ρHV)">Correlation coefficient (CC or
                                ρHV)</a>
                            <ul id="ul_2-4-0" class="nav">
                                <li><a href="#page_2-4-1" title="Tornado Debris Signature (TDS)">Tornado Debris Signature (TDS)</a>
                                </li>
                            </ul>
                        </li>
                        <li><a href="#page_2-5-0"
                                title="Differential phase (ɸDP) and specific differential phase (KDP)">Differential phase (ɸDP) and
                                specific differential phase (KDP)</a>
                            <ul id="ul_2-5-0" class="nav">
                                <li><a href="#page_2-5-1" title="KDP column and foot">KDP column and foot</a></li>
                            </ul>
                        </li>
                        <li><a href="#page_2-6-0" title="Linear Depolarization Ratio (LDR)">Linear Depolarization Ratio (LDR)</a>
                        </li>
                        <li><a href="#page_2-7-0"
                                title="Putting it all together: 3D polarimetric features in a tornadic supercell">Putting it all
                                together: 3D polarimetric features in a tornadic supercell</a></li>
                    </ul>
                </li>
                <li><a href="#page_3-0-0" title="Summary">Summary</a></li>
                <li><a href="#page_4-0-0" title="Glossary">Glossary</a></li>
                <li><a href="#page_5-0-0" title="References">References</a></li>
            </ul>
            </nav>

            <!-- MODULE CONTENT ==================================-->
            <div id="module-content" class="col-md-9">
                <div class="row unit-header"></div>
                <div id="unit-1" class="unit-section">
                    <section class="unit-section">
                        <div id="page_1-0-0" class="page">
                            <h1 class="sub_head">Learning Objectives</h1>
                            <ul data-level="0" type="disc">
                                <li>Explain the operating principles of dual orthogonal polarimetric weather radar.</li>
                                <ul data-level="1" type="circle">
                                    <li>Basic polarimetry principles</li>
                                    <li>H and V polarizations </li>
                                </ul>
                                <li>Explain the physical significance of the following variables: </li>
                                <ul data-level="1" type="circle">
                                    <li>Differential reflectivity (ZDR), </li>
                                    <li>Correlation coefficient (CC or ρhv), </li>
                                    <li>Differential phase (Φdp), </li>
                                    <li>Specific differential phase (Kdp),</li>
                                    <li>Linear depolarization ratio (LDR)</li>
                                </ul>
                                <li>Ascribe physical significance to features primarily related to one or more of these variables</li>
                                <li>Identify likeliest echo types based upon combinations of the classical (Z, Vr, SW) and polarimetric
                                    radar variables (listed above)</li>
                                <ul data-level="1" type="circle">
                                    <li>Identify the polarimetric variables that are the strongest discriminators for some hydrometeor
                                        classes</li>
                                </ul>
                            </ul>
                            <p><b>Summary: </b>Once an experimental type of weathe...</p>
                        </div>
                        <div id="page_2-0-0" class="page">
                            <h1 class="sub_head">Introduction</h1>
                            <p>Have you ever heard of a “tornado debris signature” ...</p>
                        </div>
                        <div id="page_2-1-0" class="page">
                            <h1 class="sub_head"><small>Introduction »</small><br>A note on radar color maps for this lesson</h1>
                            <p>This lesson uses color maps for radar variables that are intended to be accessible to learners with color
                                vision deficiency <a href="https://www.zotero.org/google-docs/?FymUp3" target="_blank"
                                    rel="noreferrer">(Stauffer et al. 2014; Sherman et al. 2024)</a>. These color maps look somewhat
                                different from the default color maps used by, for example, the National Weather Service, or your
                                favorite radar app. The learner is encouraged to focus on the numerical <em>values</em> associated with
                                different colors, rather than the colors themselves. </p>
                        </div>
                        <div id="page_2-2-0" class="page">
                            <h1 class="sub_head"><small>Introduction »</small>Polarimetry principles</h1>
                            <p>All electromagnetic waves have a <em>polarization</em>: a preferred plane along which the electrical
                                portion of the wave oscillates. When we refer to the <em>polarization</em> of a wave, we specifically
                                mean the plane in which the <em>electrical</em> wave oscillates, not the coupled magnetic wave. When a
                                radar makes use of a transmitted or received signal’s polarization to obtain information about the
                                atmosphere, such a radar is said to be <em>polarimetric</em>.</p>&lt;?php echo
                            $mm-&gt;getPrintMediaItemWrapper(83564); ?&gt; <br>
                            <p>Until the 2010s, most operational weather radars wo...</p>
                            <div id="q12204" class="panel panel-default interaction-question">
                                <div class="panel-body">
                                    <div class="question-wrap radio">
                                        <h4>Question</h4>
                                        <p>In weather radars, why is horizontal polarization generally favored when only one
                                            polarization is possible?</p>
                                        <form action="#">
                                            <fieldset>
                                                <div class="response-group-item "><input id="o12204-0" type="radio" name="q12204"><label
                                                        for="o12204-0"> <strong>a) </strong>Collision and coalescence tend to enhance
                                                        reflectivity in the horizontal polarization.</label></div>
                                                <div class="response-group-item "><input id="o12204-1" type="radio" name="q12204"><label
                                                        for="o12204-1"> <strong>b) </strong>Most human-generated radiation is vertically
                                                        polarized, which makes it easy to tell it apart from radar-generated
                                                        horizontally polarized radiation.</label></div>
                                                <div class="response-group-item correct"><input id="o12204-2" type="radio"
                                                        name="q12204"><label for="o12204-2"> <strong>c) </strong>Most hydrometeors
                                                        exhibit greater variability in their horizontal dimension than their vertical
                                                        dimension.</label></div><input class="submit-button btn btn-primary"
                                                    name="submit-button" type="button" value="Done">
                                            </fieldset>
                                        </form>
                                        <div class="answer">
                                            <p class="response">The correct answer is d.</p>
                                            <p>As raindrops fall through the air, air drag causes t...</p>
                                        </div>
                                        <div class="message">Please make a selection.</div>
                                    </div>
                                </div>
                            </div>&lt;?php echo $mm-&gt;getPrintMediaItemWrapper(83538,
                            "https://www.meted.ucar.edu/radar/basic_wxradar/media/graphics/dual_pol2.jpgDepiction of single vs dual
                            polarized waves as emitted by a weather radar."); ?&gt; <br> &lt;?php echo
                            $mm-&gt;getPrintMediaItemWrapper(83564, "Horizontally and vertically polarized waves scatter differently off
                            of hydrometeors - snow,... makes orthogonal polarizations
                            particularly effective for telling them apart."); ?&gt; <br>
                            <p>Dual-polarized (dual pol) radar uses both horizontal and vertically polarized waves (<em>orthogonal
                                    polarization</em>) to detect hydrometeors. By “horizontal,” we mean, “parallel to the local plane of
                                the earth.” By “v...</p>
                            <div id="q12208" class="panel panel-default interaction-question">
                                <div class="panel-body">
                                    <div class="question-wrap radio">
                                        <h4>Question</h4>
                                        <p>Prior to the dual-pol upgrade, what type of polarization did operational U. S. weather radars
                                            use?</p>
                                        <form action="#">
                                            <fieldset>
                                                <div class="response-group-item "><input id="o12208-0" type="radio" name="q12208"><label
                                                        for="o12208-0"> <strong>a) </strong>+/- 45-degree “slant” polarization</label>
                                                </div>
                                                <div class="response-group-item "><input id="o12208-1" type="radio" name="q12208"><label
                                                        for="o12208-1"> <strong>b) </strong>Circular polarization</label></div>
                                                <div class="response-group-item correct"><input id="o12208-2" type="radio"
                                                        name="q12208"><label for="o12208-2"> <strong>c) </strong>Horizontal
                                                        polarization</label></div>
                                                <div class="response-group-item "><input id="o12208-3" type="radio" name="q12208"><label
                                                        for="o12208-3"> <strong>d) </strong>Vertical polarization</label></div><input
                                                    class="submit-button btn btn-primary" name="submit-button" type="button"
                                                    value="Done">
                                            </fieldset>
                                        </form>
                                        <div class="answer">
                                            <p class="response">The correct answer is d.</p>
                                            <p>The correct answer is horizontal polarization. Most hydrometeors exhibit their largest
                                                size variability in the horizontal dimension due to the effects of air drag as they
                                                ...</p>
                                        </div>
                                        <div class="message">Please make a selection.</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div id="page_2-3-0" class="page">
                            <h1 class="sub_head"><small>Introduction »</small>Brief history of polarimetric radar</h1>
                            <p>Dual-polarized weather radar was first developed in the 1970s. Seliga and Bringi <a
                                    href="https://www.zotero.org/google-docs/?Zl9NCu" target="_blank" rel="noreferrer">(1976)</a>,
                                Balakrishnan and Zrnić <a href="https://www.zotero.org/google-docs/?tfspR4" target="_blank"
                                    rel="noreferrer">(1990)</a>, and others described distinct variables that could be calculated from
                                polarimetric measurements and suggested means by which they could be used to categorize hydrometeors.
                                ...</p>&lt;?php echo $mm-&gt;getPrintMediaItemWrapper(83565, "An S-band polarimetric radar
                            (S-Pol) deployed as part of the PECAN field campaign in 2015. Note the two waveguides (one each for the
                            horizontal and vertical polarizations) attached to two of the four struts on the antenna face."); ?&gt; <br>
                            <p>It quickly became apparent that dual polarized radar was useful for distinguishing features and processes
                                that were invisible...ar has
                                become highly useful in areas like precipitation microphysics, quantitative precipitation estimation,
                                and tornado detection.</p>&lt;?php echo $mm-&gt;getPrintMediaItemWrapper(83566, "The National Severe
                            Storms Laboratory operated a polarimetric D...tal basis from
                            1982 to 2005. Some of the first polarimetric radar observations of supercells were made with this
                            instrument."); ?&gt; <br>
                            <p><a href="https://deved.meted.ucar.edu/radar/purdue_lesson1/navmenu.php" target="_blank"
                                    rel="noreferrer">https://deved.meted.ucar.edu/radar/purdue_lesson1/navmenu.php</a></p>
                            <p>Oblate drops, i.e. drops that are wider than they are tall, tend to backscatter more energy in the
                                horizontal polarization than the vertical polarization <a
                                    href="https://www.zotero.org/google-docs/?iJBEJ6" target="_blank" rel="noreferrer">(Seliga and
                                    Bringi 1976)</a>. Z<sub>DR</sub>, therefore, can exhibit hotspots in regions where large, oblate
                                drops were present. </p>
                            <div class="image-sweep center-block" style="max-width: 850px;"><img class="img-responsive center-block"
                                    src="https://deved.meted.ucar.edu/radar/purdue_lesson1/media/graphics/20210715_222511_KILX_0_5deg_Z.jpg"
                                    alt="Reflectivity (Z) from the Springfield, Illinois WSR-88D at 2225 UTC on 15 July 2021"><img
                                    class="img-responsive center-block"
                                    src="https://deved.meted.ucar.edu/radar/purdue_lesson1/media/graphics/20210715_222511_KILX_0_5deg_ZDR.jpg"
                                    alt="Differential reflectivity (ZDR) from the Springfield, Illinois WSR-88D at 2225 UTC on 15 July 2021">
                                <p></p>
                            </div>
                            <div id="draw-12308" class="drawing-question panel-body" data-image="20210715_222511_KILX_0_5deg_ZDR.jpg"
                                data-colors="#000" data-labels="Large Drops">
                                <h4>Exercise</h4>
                                <p class="question">Compare the two images above and indicate using the differential reflectivity (ZDR)
                                    where there are areas of large drops. Circle as many areas as needed.</p>
                                <p class="directions">Circle the areas of large drops.</p>
                                <div class="answer">
                                    <p> In the figure, there are six areas where large drops are likely. The areas correlated with some
                                        of the areas of higher reflectivity. High Z<sub>DR</sub> values (&gt; 5 dB, dashed pink circles)
                                        highlight regions where large drops (likely melted hail) predominate. The use of additional
                                        products can help refine and identify areas where weather hazards are occurring. </p>
                                </div>
                            </div>
                            <div id="q12309" class="panel panel-default interaction-question">
                                <div class="panel-body">
                                    <div class="question-wrap radio">
                                        <h4>Question</h4>
                                        <p>What ZDR value can hail be expected to have?</p>
                                        <form action="#">
                                            <fieldset>
                                                <div class="response-group-item "><input id="o12309-0" type="radio" name="q12309"><label
                                                        for="o12309-0"> <strong>a) </strong>ZDR &lt; 0 dB</label></div>
                                                <div class="response-group-item correct"><input id="o12309-1" type="radio"
                                                        name="q12309"><label for="o12309-1"> <strong>b) </strong>ZDR ≅ 0 dB</label>
                                                </div>
                                                <div class="response-group-item "><input id="o12309-2" type="radio" name="q12309"><label
                                                        for="o12309-2"> <strong>c) </strong>ZDR &gt; 0 dB</label></div><input
                                                    class="submit-button btn btn-primary" name="submit-button" type="button"
                                                    value="Done">
                                            </fieldset>
                                        </form>
                                        <div class="answer">
                                            <p class="response">The correct answer is c.</p>
                                            <p>Hail exhibits Z<sub>DR</sub> near 0 dB because it tumbles as it falls. </p>
                                        </div>
                                        <div class="message">Please make a selection.</div>
                                    </div>
                                </div>
                            </div>
                            <p>The expected value of Z<sub>DR</sub> for hail in a large volume of space is 0 dB. Consider a pulse volume
                                containing tumbling hail. At any given instant in time, each pulse volume may contain thousands of
                                hailstones, and each one will have a semi-random orientation. The “average” hailstone will be spherical,
                                and hence have a Z<sub>DR</sub> value close to 0 dB.</p>
                            <p><a href="https://sketchfab.com/3d-models/hailstone-3-5c0ca2930c96481f8822de309269d8e7" target="_blank"
                                    rel="noreferrer">https://sketchfab.com/3d-models/hailstone-3-5c0ca2930c96481f8822de309269d8e7</a>
                            </p>&lt;?php echo $mm-&gt;getPrintMediaItemWrapper(83784, "Hailstones constantly change orientation (tumble)
                            as they fall. This hailstone was photographed in an Oklahoma thunderstorm using a high-speed, ground-based
                            camera. The hailstone is centered in the image so that its tumbling motion can be seen. Photos and animation
                            by Dr. Jeffrey Snyder, NSSL. Used with permission."); ?&gt; <br>
                            <div class="image-sweep center-block" style="max-width: 850px;"><img class="img-responsive center-block"
                                    src="https://deved.meted.ucar.edu/radar/purdue_lesson1/media/graphics/20210618_013711_KARX_0_9_deg_Z.jpg"
                                    alt="Reflectivity from La Crosse, WI on June 18, 2021. "><img class="img-responsive center-block"
                                    src="https://deved.meted.ucar.edu/radar/purdue_lesson1/media/graphics/20210618_013711_KARX_0_9_deg_ZDR.jpg"
                                    alt="Differential reflectivity from La Crosse, WI on June 18, 2021. ">
                                <p></p>
                            </div>
                            <div id="draw-123014" class="drawing-question panel-body" data-image="20210618_013711_KARX_0_9_deg_ZDR.jpg"
                                data-colors="#000" data-labels="Hail">
                                <h4>Exercise</h4>
                                <p class="question">Compare the two images above and indicate using the differential reflectivity (ZDR)
                                    what area(s) are likely to contain hail. Circle as many areas as needed.</p>
                                <p class="directions">Circle the area(s) of likely hail.</p>
                                <div class="answer">
                                    <p> In the figure, there is one primary area of large hail. Hail up to 2.5 inches in diameter was
                                        reported in Wabasha, Minnesota (near the center of the oval) shortly after this radar image was
                                        taken at 0137 UTC on 18 June 2021. Note: The low-ZDR appendage extending off to the northwest is
                                        a “three body scatter spike,” an artifact caused by the hail but not located with the hail
                                        itself.</p>
                                </div>
                            </div>
                            <p>Some nonmeteorological scatterer categories, such as bioscatter (for example, birds, insects, bats) and
                                chaff can exhibit extremely high values of ZDR, sometimes as high as 10 dB! </p>&lt;?php echo
                            $mm-&gt;getPrintMediaItemWrapper(83785, "Educational aid from the National Weather Service, showing expected
                            ZDR values (in dB) for different types of scatterers at S-band. Note the significant overlap between many
                            categories, including all categories for values of 1.0 to 2.0 dB. ZDR is generally a poor discriminator
                            between hydrometeor these categories when used alone. To be used effectively for scatterer classification,
                            ZDR should be combined with other variables."); ?&gt; <br>
                            <p>To understand why this is the case, consider the example of a bird in flight. All living creatures are
                                composed predominantly of water, and will therefore interact with a radar signal much like a hydrometeor
                                would <a href="https://www.zotero.org/google-docs/?jXd12d" target="_blank" rel="noreferrer">(Chilson et
                                    al. 2017)</a>. When in flight, a bird’s extended wings may span many times its body height,
                                exaggerating the amount of backscattered signal in the horizontal polarization. These extreme values -
                                sometimes higher than 8 dB - have prompted an expansion of the Z<sub>DR</sub> measurement scale in the
                                WSR-88D <a href="https://www.zotero.org/google-docs/?5nfXcw" target="_blank" rel="noreferrer">(Melnikov
                                    et al. 2019)</a>.</p>&lt;?php echo $mm-&gt;getPrintMediaItemWrapper(83872, "Most types of flying
                            animals (birds, insects, and bats) are much wider than they are tall when their wings are extended in
                            flight. This aspect ratio results in much higher backscattered signal in the horizontal polarization of a
                            weather radar than the vertical, and can lead to extremely high values of ZDR."); ?&gt; <br>
                            <div id="q123019" class="panel panel-default interaction-question">
                                <div class="panel-body">
                                    <div class="question-wrap radio">
                                        <h4>Question</h4>
                                        <p>The following reflectivity animation shows a group of bats leaving their roost at sunset.
                                            What Z<sub>DR</sub> value would this echo be expected to exhibit?
<b>_msdb</b></p>
<p><a href="https://outside.comet.ucar.edu/activeprojects_2/mediaItem.php?fileID=84285&amp;projectID=2096"
        target="_blank" rel="noreferrer">84285</a></p>
<p><b>_caption</b></p>
<p>This expanding 40 dBZ echo was caused by thousands of Mexican free-tailed bats emerging from their cave near Knippa,
    Texas at sunset on 9 April 2018. The data were collected by the Laughlin Air Force Base WSR-88D at an elevation
    angle of 0.5 degrees. The radar is located off the left edge of the image.</p>
<p><b>_end_msdb</b></p>
<form action="#">
    <fieldset>
        <div class="response-group-item correct"><input id="o123019-0" type="radio" name="q123019"><label
                for="o123019-0"> <strong>a) </strong>ZDR &gt; 5 dB</label></div>
        <div class="response-group-item "><input id="o123019-1" type="radio" name="q123019"><label for="o123019-1">
                <strong>b) </strong>0 dB &lt; ZDR &lt; 5 dB</label></div>
        <div class="response-group-item "><input id="o123019-2" type="radio" name="q123019"><label for="o123019-2">
                <strong>c) </strong>ZDR ≅ 0 dB</label></div>
        <div class="response-group-item "><input id="o123019-3" type="radio" name="q123019"><label for="o123019-3">
                <strong>d) </strong>-5 dB &lt; ZDR &lt; 0 dB</label></div>
        <div class="response-group-item "><input id="o123019-4" type="radio" name="q123019"><label for="o123019-4">
                <strong>e) </strong>ZDR &lt; -5 dB</label></div><input class="submit-button btn btn-primary"
            name="submit-button" type="button" value="Done">
    </fieldset>
</form>
<div class="answer">
    <p class="response">The correct answer is b.</p>
    <p>Because bats are much wider than they are tall when in flight, they can be expected to exhibit exceptionally high
        Z<sub>DR</sub>. The Z<sub>DR</sub> associated with this “bat signal” exceeds 8.0 dB.</p>&lt;?php echo
    $mm-&gt;getPrintMediaItemWrapper(84286, "The ZDR field associated with the reflectivity animation above, showing
    that the expanding echo generated by the bats is associated with very high ZDR values, sometimes exceeding 8.0
    dB."); ?&gt; <br>
</div>
<div class="message">Please make a selection.</div>
</div>
</div>
</div>
</div>
<div id="page_2-3-1" class="page">
    <h1 class="sub_head"><small>Introduction » Brief history of polarimetric radar »</small> ZDR arc</h1>
    <p>One place that Z<sub>DR</sub> can be particularly enhanced is in the forward-flank region of supercells, where
        strong winds flowing into the storm at low levels preferentially blow small drops into the interior of the storm
        (a process called size sorting), leaving behind a region of predominantly large drops <a
            href="https://www.zotero.org/google-docs/?eGTNaa" target="_blank" rel="noreferrer">(Kumjian and Ryzhkov
            2008; Romine et al. 2008; Dawson et al. 2014)</a>. This elongated region of relatively high Z<sub>DR</sub>
        is known as a Z<sub>DR</sub> arc. (Footnote: Romine et al. [2008] called the broader region of enhanced ZDR in
        the forward flank the “Z<sub>DR</sub> shield.”) The water in the Z<sub>DR</sub> arc is believed to originate in
        melting hail ejected from the storm’s updraft <a href="https://www.zotero.org/google-docs/?2cnYTY"
            target="_blank" rel="noreferrer">(Dawson et al. 2014)</a>. While not a direct indicator of storm severity or
        hazards, it can indicate that a storm has strong inflow winds.</p>
    <div class="image-sweep center-block" style="max-width: 850px;"><img class="img-responsive center-block"
            src="https://deved.meted.ucar.edu/radar/purdue_lesson1/media/graphics/12April2020_2139UTC_Jackson_MS_reflectivity.jpg"
            alt="Reflectivity (Z) observed by the Jackson, Mississippi WSR-88D at 0.3 degrees elevation at 2139 UTC on April 12, 2020 showing a tornadic supercell approaching the towns of Soso and Heidelberg, Mississippi"><img
            class="img-responsive center-block"
            src="https://deved.meted.ucar.edu/radar/purdue_lesson1/media/graphics/12April2020_2139UTC_Jackson_MS_ZDR.jpg"
            alt="Differential reflectivity (ZDR) observed by the Jackson, Mississippi WSR-88D at 0.3 degrees elevation at 2139 UTC on April 12, 2020 showing a tornadic supercell approaching the towns of Soso and Heidelberg, Mississippi">
        <p></p>
    </div>&lt;?php echo $mm-&gt;getPrintMediaItemWrapper(83567, "Fig. 2 from (Kumjian and Ryzhkov 2009) showing how
    storm-relative winds (vectors on the z-axis) preferentially transport smaller drops (dotted trajectory and light
    gray shading) into the interior of a cyclonic supercell in the Northern Hemisphere, leaving behind a region of
    relatively large, oblate drops (solid trajectory and dark gray shading). Intermediate sized drops (dotted trajectory
    and medium gray shading) form a gradient between these regions. The region shaded dark gray is the expected location
    of the ZDR arc. The solid gray outline near the surface is the 30-dBZ ZH contour."); ?&gt; <br>
    <div id="q12314" class="panel panel-default interaction-question">
        <div class="panel-body">
            <div class="question-wrap radio">
                <h4>Question</h4>
                <p>Why does a “ZDR arc” signature often form at low altitudes in the forward flank region of supercells?
                </p>
                <form action="#">
                    <fieldset>
                        <div class="response-group-item "><input id="o12314-0" type="radio" name="q12314"><label
                                for="o12314-0"> <strong>a) </strong>Large drops centrifuge out of the supercell’s
                                updraft and fall out in the forward flank.</label></div>
                        <div class="response-group-item "><input id="o12314-1" type="radio" name="q12314"><label
                                for="o12314-1"> <strong>b) </strong>Drops tend to fall more slowly in the forward flank
                                than other parts of the storm, causing them to collide and coalesce into larger
                                ones.</label></div>
                        <div class="response-group-item correct"><input id="o12314-2" type="radio" name="q12314"><label
                                for="o12314-2"> <strong>c) </strong>Storm-relative inflow winds sort the drops by size,
                                leaving behind mainly large drops in the forward flank.</label></div><input
                            class="submit-button btn btn-primary" name="submit-button" type="button" value="Done">
                    </fieldset>
                </form>
                <div class="answer">
                    <p class="response">The correct answer is d.</p>
                    <p>Storm-relative inflow winds blow small, spherical drops into the storm’s core, leaving mainly
                        large, oblate drops in the forward flank. These large drops are responsible for the high
                        Z<sub>DR</sub> values found in the forward flank.</p>
                </div>
                <div class="message">Please make a selection.</div>
            </div>
        </div>
    </div>
</div>
<div id="page_2-3-2" class="page">
    <h1 class="sub_head"><small>Introduction » Brief history of polarimetric radar »</small> ZDR column</h1>
    <p>Large, supercooled liquid water drops can be lofted above the 0 °C level in strong convective updrafts <a
            href="https://www.zotero.org/google-docs/?YFcaMC" target="_blank" rel="noreferrer">(Illingworth et al.
            1987)</a>. This vertical extension of positive Z<sub>DR</sub> above the 0 °C level is called a
        Z<sub>DR</sub> column <a href="https://www.zotero.org/google-docs/?1wp24I" target="_blank"
            rel="noreferrer">(Kumjian et al. 2014)</a>. Z<sub>DR</sub> columns can be used as an indirect indicator of
        strong updrafts in precipitating systems <a href="https://www.zotero.org/google-docs/?oGj71m" target="_blank"
            rel="noreferrer">(Snyder et al. 2015)</a>. </p>
    <div id="tabs-12322" class="tabs-container">
        <ul id="tab-set-12322" class="nav nav-tabs" role="tablist">
            <li class="active"><a href="#tab-12322-0" data-toggle="tab" class="tab-switch">Reflectivity</a></li>
            <li><a href="#tab-12322-1" data-toggle="tab" class="tab-switch">Differential Reflectivity</a></li>
        </ul>
        <div class="tab-content">
            <h3>Reflectivity</h1>
            <div class="tab-pane fade in active" id="tab-12322-0">&lt;?php echo $mm-&gt;getPrintMediaItemWrapper(84455,
                "Corresponding reflectivity (Z, in dBZ) range-height indicator (RHI) vertical scan through a convective
                storm near McCracken, Kansas on 26 June 2015."); ?&gt; <br> </div>
            <h3>Differential Reflectivity</h1>
            <div class="tab-pane fade in null" id="tab-12322-1">&lt;?php echo $mm-&gt;getPrintMediaItemWrapper(84456,
                "Corresponding differential reflectivity (ZDR, in dB) range-height indicator (RHI) vertical scan through
                a convective storm near McCracken, Kansas on 26 June 2015, showing the ZDR column extending more than 3
                km above the environmental 0 °C level."); ?&gt; <br> </div>
        </div>
    </div>
    <div class="image-sweep center-block" style="max-width: 850px;"><img class="img-responsive center-block"
            src="https://deved.meted.ucar.edu/radar/purdue_lesson1/media/graphics/ZDR_Arc_and_Column.jpg"
            alt="An image showing features in a super cell. The image shows the vertical growth at different levels. Various features are depicted. "><img
            class="img-responsive center-block"
            src="https://deved.meted.ucar.edu/radar/purdue_lesson1/media/graphics/ZDR_Arc_and_Column_pt2.jpg"
            alt="A two panel image showing features in a super cell. The top image shows the vertical growth at different levels. Various features are depicted. The bottom half of the image shows the ZDR column and arc. ">
        <p></p>
    </div>
    <div id="q12324" class="panel panel-default interaction-question">
        <div class="panel-body">
            <div class="question-wrap radio">
                <h4>Question</h4>
                <p>What does a Z<sub>DR</sub> column signify in a thunderstorm?</p>
                <form action="#">
                    <fieldset>
                        <div class="response-group-item "><input id="o12324-0" type="radio" name="q12324"><label
                                for="o12324-0"> <strong>a) </strong>A region of strong downdraft</label></div>
                        <div class="response-group-item correct"><input id="o12324-1" type="radio" name="q12324"><label
                                for="o12324-1"> <strong>b) </strong>A region of strong updraft</label></div>
                        <div class="response-group-item "><input id="o12324-2" type="radio" name="q12324"><label
                                for="o12324-2"> <strong>c) </strong>A region of evaporation</label></div>
                        <div class="response-group-item "><input id="o12324-3" type="radio" name="q12324"><label
                                for="o12324-3"> <strong>d) </strong>A region of large hail</label></div><input
                            class="submit-button btn btn-primary" name="submit-button" type="button" value="Done">
                    </fieldset>
                </form>
                <div class="answer">
                    <p class="response">The correct answer is c.</p>
                    <p>The ZDR column is associated with a strong updraft, which lofts liquid water above the freezing
                        level.</p>
                </div>
                <div class="message">Please make a selection.</div>
            </div>
        </div>
    </div>
   
</div>
<div id="page_2-4-0" class="page">
    <h1 class="sub_head"><small>Introduction »</small>Correlation coefficient (CC or ρHV)</h1>
    <p>In statistics, the correlation coefficient, a unitless quantity that ranges from 0 to 1, quantitatively describes
        how similar two variables are to one another. A similar interpretation applies to the correlation coefficient
        variable produced by dual-polarized weather radar: Correlation coefficient, which is usually denoted by the
        abbreviation CC in operational weather radar products, or ρ<sub>HV</sub> in scientific literature, measures the
        simil...al.</p>&lt;?php echo
    $mm-&gt;getPrintMediaItemWrapper(83788, "Phasor diagram showing instances of (left) high CC between five pulses and
    (right) low CC between five pulses. The x-axis is the real (in-phase) component of the received signal, and the
    y-axis is the imaginary (quadrature) component of the received signal."); ?&gt; <br> &lt;?php echo
    $mm-&gt;getPrintMediaItemWrapper(83786, "Decision aid from the National Weather Service, showing expected CC values
    for different types of scatterers at S-band. It can be seen that hydrometeors (the top five categories) tend to have
    high values of CC (&gt;=0.90), while mixed-phase and non-hydrometeor scatterers (the bottom five categories) have
    much lower values of CC (&lt;0.90). However, there is some overlap. Note that the x-axis is not linear."); ?&gt;
    <br>
    
    <div class="image-sweep center-block" style="max-width: 850px;"><img class="img-responsive center-block"
            src="https://deved.meted.ucar.edu/radar/purdue_lesson1/media/graphics/20230202_202043_KHTX_2_4deg_Z.jpg"
            alt="Reflectivity (in dBZ) as seen by the Hytop, Alabama WSR-88D, at an elevation angle of 2.4 degrees, on 2 February 2023 at 20:20 UTC."><img
            class="img-responsive center-block"
            src="https://deved.meted.ucar.edu/radar/purdue_lesson1/media/graphics/20230202_202043_KHTX_2_4deg_CC.jpg"
            alt="Correlation Coefficient as seen by the Hytop, Alabama WSR-88D, at an elevation angle of 2.4 degrees, on 2 February 2023 at 20:20 UTC.">
        <p></p>
    </div>
    <p>CC will generally be lower than 0.90 if non-hydrometeor scatterers are present in the region that the radar is
        scanning. Examples of these types of scatterers are smoke, chaff, dust, and debris. Bioscatterers (a
        non-hydometeor class that includes flying creatures like birds, bats, insects, and even spiders) will also
        reduce correlation coefficient below 0.9.</p>
    <div class="image-sweep center-block" style="max-width: 850px;"><img class="img-responsive center-block"
            src="https://deved.meted.ucar.edu/radar/purdue_lesson1/media/graphics/20201019_044903_KVWX_0_4deg_Z.jpg"
            alt="Reflectivity in dbz from Evansville, IN on October 19, 2020 at 4:49 UTC"><img
            class="img-responsive center-block"
            src="https://deved.meted.ucar.edu/radar/purdue_lesson1/media/graphics/20201019_044903_KVWX_0_4deg_CC.jpg"
            alt="Correlation Coefficient from Evansville, IN on October 19, 2020 at 4:49 UTC">
        <p></p>
    </div>
    <div id="drag-124010" class="panel panel-default interaction-question">
        <div class="panel-body">
            <div class="question-wrap-drag">
                <h4>Exercise</h4>
                <p class="question">Compare the reflectivity and correlation coefficient radar scan from Evansville, IN
                    to identify areas of hydrometeors and bioscatter. Use the labels to identify each area as either
                    hydrometeor or bioscatter.</p>
                <div class="drag-container" title="media/graphics/20201019_044903_KVWX_0_4deg_CC.jpg">
                    <div class="image_holder"></div>
                    <p class="drag_directions">Drag to the areas that match the sections.</p>
                    <div class="drag_controls_holder">
                        <div class="drag_controls">
                            <div class="draggable ui-widget-content ui-draggable drag_item ui-draggable-handle"><span
                                    class="glyphicon glyphicon-th"></span> Hydrometeor</div>
                            <div class="draggable ui-widget-content ui-draggable drag_item ui-draggable-handle"><span
                                    class="glyphicon glyphicon-th"></span> Bioscatter</div>
                        </div><input class="done_drag btn btn-primary" type="button" value="Done"> <input
                            class="reset_drag btn btn-default" type="button" value="Reset">
                    </div>
                </div>
                <div class="answer">
                    <p>Radar screenshot showing at least two distinct regions of hydrometeors and nonhydrometeors, e.g.,
                        a bird bloom at night while spotty precipitation is present. In the reflectivity image, echoes
                        of va...of
                        hydrometeors and nonhydrometeors. </p>
                    <p> Regions containing only hydrometeors tend to be associated with high values of CC ( &gt;0.9 or
                        greater), while regions containing non-meteorological scatterers like birds and insects tend to
                        have lower and...flying
                        animals like birds, bats, and insects are highly active. </p>
                </div>
            </div>
        </div>
    </div>&lt;?php echo $mm-&gt;getPrintMediaItemWrapper(84300); ?&gt; <br>
    <p>Othe...case, the CC may be reduced
        to 0.5, or even lower, even though only hydrometeors are present in the beam.</p>
    <p>Even when only hydrometeors are present in the beam, CC may be reduced below 1.0 by the microphysical properties
        of the particles themselves:</p>
    <ul data-level="0" type="disc">
        <li>Mixed phase hydrometeors are present, i.e., liquid and frozen hydrometeors coexist, as in the cases of
            melting snow or melting hail,</li>
        <li>The orientation (canting angle) of hydrometeors varies; or</li>
        <li>The hydrometeors have irregular shapes, such as hailstones with frozen protuberances.</li>
    </ul>
    <p>The principal conditions that reduce CC are summarized in the following diagram:</p>&lt;?php echo
    $mm-&gt;getPrintMediaItemWrapper(84301, "Schematic illustration of six volumes occupied by a radar pulse
    (approximated by a cylinder) and conditions that can exist inside of each that will reduce CC: a) non-uniform beam
    filling (NBF), b) mixed phase precipitation, c) size, orientation, or eccentricity variability, d) irregularly
    shaped particles, e) biological targets, and f) non-meteorological targets."); ?&gt; <br>
    <div id="q124017" class="panel panel-default interaction-question">
        <div class="panel-body">
            <div class="question-wrap checkboxes">
                <h4>Question</h4>
                <p>Given a radar gate containing scatterers with CC = 0.99, which of the following scatterer types or
                    conditions is <u>likeliest</u> to be present in the gate? </p>
                <form action="#">
                    <fieldset>
                        <div class="response-group-item correct"><input id="o124017-0" type="checkbox"
                                name="q124017"><label for="o124017-0"> <strong>a) </strong>Pure liquid rain</label>
                        </div>
                        <div class="response-group-item "><input id="o124017-1" type="checkbox" name="q124017"><label
                                for="o124017-1"> <strong>b) </strong>Tornado debris</label></div>
                        <div class="response-group-item "><input id="o124017-2" type="checkbox" name="q124017"><label
                                for="o124017-2"> <strong>c) </strong>Non-uniform beam filling</label></div>
                        <div class="response-group-item "><input id="o124017-3" type="checkbox" name="q124017"><label
                                for="o124017-3"> <strong>d) </strong>Bioscatterer activity</label></div>
                        <div class="response-group-item "><input id="o124017-4" type="checkbox" name="q124017"><label
                                for="o124017-4"> <strong>e) </strong>A mixture of rain and melting snow</label></div>
                        <div class="response-group-item "><input id="o124017-5" type="checkbox" name="q124017"><label
                                for="o124017-5"> <strong>f) </strong>Oddly shaped hailstones</label></div><input
                            class="submit-button btn btn-primary" name="submit-button" type="button" value="Done">
                    </fieldset>
                </form>
                <div class="answer">
                    <p class="response">The correct answer is a.</p>
                    <p>Only a volume uniformly filled with the same species of hydrometeor, e.g., liquid rain, will have
                        CC near unity. All of the other conditions will likely drive CC down below 0.9.</p>
                </div>
                <div class="message">Please make a selection.</div>
            </div>
        </div>
    </div>
</div>
<div id="page_2-4-1" class="page">
    <h1 class="sub_head"><small>Introduction » Correlation coefficient (CC or ρHV) »</small> Tornado Debris Signature
        (TDS)</h1>
    <p>The polarimetric tornado debris signature (TDS) <a href="https://www.zotero.org/google-docs/?r6bVly"
            target="_blank" rel="noreferrer">(Ryzhkov et al. 2005)</a> consists of a quasi-circular relative minimum in
        CC (indicating lofted debris) collocated with a strong azimuthal gradient in Doppler velocity (V<sub>r</sub>),
        and, optionally, a relative maximum in reflectivity (Z) and a relative minimum in Z<sub>DR</sub>. It indicates
        the presence of a damaging tornado that is lofting debris to the height of the radar beam. </p>
    <div id="tabs-12412" class="tabs-container">
        <ul id="tab-set-12412" class="nav nav-tabs" role="tablist">
            <li class="active"><a href="#tab-12412-0" data-toggle="tab" class="tab-switch">Reflectivity</a></li>
            <li><a href="#tab-12412-1" data-toggle="tab" class="tab-switch">Velocity</a></li>
            <li><a href="#tab-12412-2" data-toggle="tab" class="tab-switch">Differential Reflectivity</a></li>
            <li><a href="#tab-12412-3" data-toggle="tab" class="tab-switch">CC</a></li>
        </ul>
        <div class="tab-content">
            <h3>Reflectivity</h1>
            <div class="tab-pane fade in active" id="tab-12412-0">&lt;?php echo $mm-&gt;getPrintMediaItemWrapper(84303,
                "WSR-88D observations of the tornado debris signature (TDS) in the Soso, Mississippi tornado of 12 April
                2020 as it crossed the Covington-Jones county line (brown vertical line), showing the maximum in
                reflectivity in the hook echo. These data were collected by the Jackson, Mississippi WSR-88D (KDGX) at
                an elevation angle of 0.9°. The range rings are 10 km apart."); ?&gt; <br> </div>
            <h3>Velocity</h1>
            <div class="tab-pane fade in null" id="tab-12412-1">&lt;?php echo $mm-&gt;getPrintMediaItemWrapper(84304,
                "WSR-88D observations of the tornado debris signature (TDS) in the Soso, Mississippi tornado of 12 April
                2020 as it crossed the Covington-Jones county line (brown vertical line), showing the tornado vortex
                signature (TVS, automatically dealiased). These data were collected by the Jackson, Mississippi WSR-88D
                (KDGX) at an elevation angle of 0.9°. The range rings are 10 km apart."); ?&gt; <br> </div>
            <h3>Differential Reflectivity</h1>
            <div class="tab-pane fade in null" id="tab-12412-2">&lt;?php echo $mm-&gt;getPrintMediaItemWrapper(84305,
                "WSR-88D observations of the tornado debris signature (TDS) in the Soso, Mississippi tornado of 12 April
                2020 as it crossed the Covington-Jones county line (brown vertical line), showing the local minimum in
                ZDR. These data were collected by the Jackson, Mississippi WSR-88D (KDGX) at an elevation angle of 0.9°.
                The range rings are 10 km apart."); ?&gt; <br> </div>
            <h3>CC</h1>
            <div class="tab-pane fade in null" id="tab-12412-3">&lt;?php echo $mm-&gt;getPrintMediaItemWrapper(84306,
                "WSR-88D observations of the tornado debris signature (TDS) in the Soso, Mississippi tornado of 12 April
                2020 as it crossed the Covington-Jones county line (brown vertical line), showing the local minimum in
                CC. These data were collected by the Jackson, Mississippi WSR-88D (KDGX) at an elevation angle of 0.9°.
                The range rings are 10 km apart."); ?&gt; <br> </div>
        </div>
    </div>
    <p>The TDS is an enhancement to the previously used tornado vortex signature (TVS), which consisted of the enhanced
        reflectivity and azimuthal gradient in V<sub>r</sub> only. The TDS is generally more accurate for tornado
        detection than the TVS because it incorporates dual pol signatures for nonmeteorological scatter (debris).
        Debris tends... high reflectivity values.
        It also tends to be randomly oriented, leading to Z<sub>DR</sub> near 0 dB. Tornado debris tends to stand out as
        a local minimum in the CC field because tornadoes are often surrounded by hydrometeors (rain curtains), which
        have CC near 1.0.</p>&lt;?php echo $mm-&gt;getPrintMediaItemWrapper(84458); ?&gt; <br>
    <p>Concep...des than near the
        surface.</p>
    <div id="q12416" class="panel panel-default interaction-question">
        <div class="panel-body">
            <div class="question-wrap radio">
                <h4>Question</h4>
                <p>Which of the following is NOT a component of a polarimetric tornado debris signature (TDS)?</p>
                <form action="#">
                    <fieldset>
                        <div class="response-group-item "><input id="o12416-0" type="radio" name="q12416"><label
                                for="o12416-0"> <strong>a) </strong>A relative maximum in reflectivity (Z)</label></div>
                        <div class="response-group-item "><input id="o12416-1" type="radio" name="q12416"><label
                                for="o12416-1"> <strong>b) </strong>A relative minimum in correlation coefficient
                                (CC)</label></div>
                        <div class="response-group-item "><input id="o12416-2" type="radio" name="q12416"><label
                                for="o12416-2"> <strong>c) </strong>An area of ZDR near 0 dB</label></div>
                        <div class="response-group-item correct"><input id="o12416-3" type="radio" name="q12416"><label
                                for="o12416-3"> <strong>d) </strong>A relative maximum in specific differential phase
                                (KDP)</label></div>
                        <div class="response-group-item "><input id="o12416-4" type="radio" name="q12416"><label
                                for="o12416-4"> <strong>e) </strong>A strong azimuthal gradient in Doppler velocity
                                (Vr)</label></div><input class="submit-button btn btn-primary" name="submit-button"
                            type="button" value="Done">
                    </fieldset>
                </form>
                <div class="answer">
                    <p class="response">The correct answer is e.</p>
                    <p>The tornado debris signature does not incorporate phase-related variables like K<sub>DP</sub>,
                        which are associated with liquid water content. Debris tends to be randomly oriented and
                        non-meteorological, and therefore will not appear in the K<sub>DP</sub> field.</p>
                </div>
                <div class="message">Please make a selection.</div>
            </div>
        </div>
    </div>
</div>
<div id="page_2-5-0" class="page">
    <h1 class="sub_head"><small>Introduction »</small>Differential phase (ɸDP) and specific differential phase (KDP)
    </h1>
    <p>The two main phase-based dual-polarized radar variables are differential phase (ɸ<sub>DP</sub>) and specific
        differential phase (K<sub>DP</sub>). </p>
    <p>Consider two identical radar pulses, transmitted at the same time, with the same amplitude and initial phase. If
        one of ...olume containing
        hydrometeors, which one will <em>slow down</em> more?</p>&lt;?php echo $mm-&gt;getPrintMediaItemWrapper(84359,
    "Consider two identical radar pulses propagating through (top) scatterer-free clear air, and (bottom) a volume
    containing hydrometeors."); ?&gt; <br>
    <div id="q12504" class="panel panel-default interaction-question">
        <div class="panel-body">
            <div class="question-wrap radio">
                <h4>Question</h4>
                <p>Which pulse, the top or bottom one, will slow down more when passing through its corresponding
                    volume?</p>
                <form action="#">
                    <fieldset>
                        <div class="response-group-item "><input id="o12504-0" type="radio" name="q12504"><label
                                for="o12504-0"> <strong>a) </strong>The top pulse</label></div>
                        <div class="response-group-item correct"><input id="o12504-1" type="radio" name="q12504"><label
                                for="o12504-1"> <strong>b) </strong>The bottom pulse</label></div>
                        <div class="response-group-item "><input id="o12504-2" type="radio" name="q12504"><label
                                for="o12504-2"> <strong>c) </strong>They will both slow down equally</label></div><input
                            class="submit-button btn btn-primary" name="submit-button" type="button" value="Done">
                    </fieldset>
                </form>
                <div class="answer">
                    <p class="response">The correct answer is c.</p>
                    <p>The bottom pulse, which has to travel through liquid water, will slow down more, owing to
                        refraction (slowing of the waves) while passing through the liquid water.</p>
                </div>
                <div class="message">Please make a selection.</div>
            </div>
        </div>
    </div>
    <p>The difference in phase between the H and V pulses is denoted φ<sub>H</sub>-φ<sub>V</sub>.</p>&lt;?php echo
    $mm-&gt;getPrintMediaItemWrapper(84365, "As both the H and V pulses emerge from the volumes containing oblate
    raindrops, the horizontally polarized pulse will experience a larger phase shift than the vertically polarized
    pulse."); ?&gt; <br>
    <p>Again, after backscattering, the respective phase shifts of the two pulses will double on the return trip.</p>
    &lt;?php echo $mm-&gt;getPrintMediaItemWrapper(84366, "Upon backscatter, the horizontally polarized pulse will
    experience a doubling of its phase shift relative to the vertically polarized one."); ?&gt; <br>
    <p>The quantity Φ<sub>DP</sub> = Φ<sub>HH</sub> - Φ<sub>VV</sub> = 2φ<sub>HH</sub> - 2φ<sub>VV</sub> is called the
        <em>differential phase</em>, in units of degrees (of phase shift). Similar to differential reflectivity
        (Z<sub>DR</sub>), Φ<sub>DP </sub>tends to be near 0 degrees for spherical drops, greater than 0 degrees for
        oblate drops, and less than 0 degrees for oblate drops.</p>&lt;?php echo $mm-&gt;getPrintMediaItemWrapper(84307,
    "The physical interpretation of differential phase (ΦDP) regimes in liquid precipitation is similar to that for
    ZDR."); ?&gt; <br>
    <p>One might well ask, “What makes Φ<sub>DP </sub>useful, if Φ<sub>DP</sub> gives similar information about drop
        shape to Z<sub>DR</sub>?”</p>
    
    </div>&lt;?php echo $mm-&gt;getPrintMediaItemWrapper(84312, "Consider a horizontally polarized pulse traveling
    through two volumes, the first containing a higher concentration of raindrops than the second. More differential
    phase will accumulate in the first volume than the second. Additionally, this accumulated differential phase will
    carry forward to subsequent volumes down-radial. Image courtesy of NOAA."); ?&gt; <br>
    <p>In practice, it’s more informative to examine the <em>change</em> in Φ<sub>DP </sub>than Φ<sub>DP</sub> itself.
        We define a new variable, specific differential phase, or K<sub>DP</sub>, which is equal to one-half the radial
        derivative of Φ<sub>DP</sub>. By “radial,” we mean in the direction in which the radar beam points. </p>
    <p>In discrete form, K<sub>DP</sub> is defined as</p>
    <p>where r<sub>1</sub> and r<sub>2</sub> are two different ranges along the same radial.</p>&lt;?php echo
    $mm-&gt;getPrintMediaItemWrapper(84313, "KDP, by definition, is maximized in regions where ΦDP increases quickly -
    typically, regions of heavy rain (highlighted in yellow). From (Kumjian 2013)."); ?&gt; <br>
    <p>K<sub>DP</sub> is a useful variable for highlighting regions of heavy <em>liquid</em> precipitation. Therefore,
        it can be used by forecasters monitoring for localized heavy rain, which may lead to flooding. However, it is
        not useful for detecting heavy snow, because Φ<sub>DP </sub>is not very responsive to ice. (Previously, we noted
        that Φ<sub>DP </sub>does not change much in the presence of ice crystals, because ice has a much lower
        refractive index than liquid water.) Therefore, K<sub>DP</sub> is used almost exclusively for heavy rain
        detection.</p>
    <div class="image-sweep center-block" style="max-width: 850px;"><img class="img-responsive center-block"
            src="https://deved.meted.ucar.edu/radar/purdue_lesson1/media/graphics/20240314_161329_0_4deg_PDP.jpg"
            alt="Differential Phase from Indianapolis, Indiana radar on March 14, 2024 from 16:13 UTC"><img
            class="img-responsive center-block"
            src="https://deved.meted.ucar.edu/radar/purdue_lesson1/media/graphics/20240314_161329_0_4deg_KDP.jpg"
            alt="Specific differential phase from Indianapolis, Indiana radar on March 14, 2024 from 16:13 UTC">
        <p></p>
    </div>
    <p>Because it is a derivative quantity, measuring <em>change</em> in Φ<sub>DP</sub>, K<sub>DP</sub> is very
        sensitive to errors and noise in the Φ<sub>DP</sub> measurements. The Φ<sub>DP</sub> field tends to be quite
        noisy, and usually requires smoothing before K<sub>DP</sub> is computed. Additionally, K<sub>DP</sub> cannot be
        reliably calculated in regions where the radar signal may be affected by attenuation, non-uniform beam filling,
        or large hail. A correlation coefficient (CC) threshold may be applied to “mask” suspect Φ<sub>DP</sub> data
        before K<sub>DP</sub> is computed. As a result, K<sub>DP</sub> fields may exhibit corresponding regions of
        masked data. Often, these regions appear at long ranges from the radar, and particularly when non-uniform beam
        filling may be present.</p>
</div>
<div id="page_2-5-1" class="page">
    <h1 class="sub_head"><small>Introduction » Differential phase (ɸDP) and specific differential phase (KDP) »</small>
        KDP column and foot</h1>
    <p>Within a convective thunderstorm, a vertical extension of K<sub>DP</sub> may be found in proximity to hail cores,
        filled with large drops. This feature is called a <em>K</em><em>DP</em><em> column</em>. Much like the
        Z<sub>DR</sub> column, the K<sub>DP</sub> column extends above the 0 °C layer. However, the formation mechanism
        of a K<sub>DP</sub> column is quite different than that of a Z<sub>DR</sub> column. This region of enhanced
        liquid water content is generally thought to result from liquid water shedding by wet hail <a
            href="https://www.zotero.org/google-docs/?7deFLo" target="_blank" rel="noreferrer">(Hubbert et al. 2018;
            Loney et al. 2002)</a>. Physically, the K<sub>DP</sub> column signifies a region of downdraft, rather than
        an updraft.</p>
    
</div>
<div id="page_2-6-0" class="page">
    <h1 class="sub_head"><small>Introduction »</small>Linear Depolarization Ratio (LDR)</h1>
    <p>If a polarized signal becomes <em>depolarized</em>, that means that it changes polarization (wholly or partially)
        from its original polarization to a new one. For example, consider a hypothetical radar pulse transmitted with
        100% of its power in the H polarization. Upon reception, 99% of the received power is still in the H
        polarization, but 1% of the power has changed to the V polarization. It would be said that 1% of the transmitted
        signal had <em>depolarized</em> from horizontal to vertical polarization.</p>
    <p>When depolarization is important, it is common for reflectivity Z to be given two subscripts: for example,
        Z<sub>VH</sub>. The first subscript (V) gives the original polarization of the signal upon reception, while the
        second (H) tells the polarization upon transmission. In most cases, a vast majority of the received signal will
        retain the original polarization, while a tiny fraction will backscatter to the radar with a different
        polarization. In other words, for our hypothetical pulse which was originally transmitted with H polarization
        only, Z<sub>HH</sub> will be much greater than Z<sub>VH</sub>, usually by several orders of magnitude. </p>
    <div id="q12603" class="panel panel-default interaction-question">
        <div class="panel-body">
            <div class="question-wrap radio">
                <h4>Question</h4>
                <p>If a reflectivity value is denoted Z<sub>HV</sub>, what was the polarization of the
                    <em>transmitted</em> signal?</p>
                <form action="#">
                    <fieldset>
                        <div class="response-group-item "><input id="o12603-0" type="radio" name="q12603"><label
                                for="o12603-0"> <strong>a) </strong>Horizontal</label></div>
                        <div class="response-group-item correct"><input id="o12603-1" type="radio" name="q12603"><label
                                for="o12603-1"> <strong>b) </strong>Vertical</label></div>
                        <div class="response-group-item "><input id="o12603-2" type="radio" name="q12603"><label
                                for="o12603-2"> <strong>c) </strong>Circular</label></div><input
                            class="submit-button btn btn-primary" name="submit-button" type="button" value="Done">
                    </fieldset>
                </form>
                <div class="answer">
                    <p class="response">The correct answer is c.</p>
                    <p>The second subscript (V, in this case) tells us the polarization of the transmitted signal. The
                        first (H, in this case) tells us the polarization of the received signal.</p>
                </div>
                <div class="message">Please make a selection.</div>
            </div>
        </div>
    </div>
    <p>In its most common form, linear depolarization ratio (LDR, in dB) is defined as </p>
    <p>In words, this LDR quantity measures how much power depolarizes from the H to the V channel relative to how much
        power remains in the H channel. Other LDRs can be defined, for example, in the orthogonal polarization sense
        (Z<sub>HV</sub> vs Z<sub>VV</sub>, or left-hand circular to right-hand circular). In this case, the LDR
        abbreviation above may acquire a subscript indicating the original polarization of the transmitted signal, i.e.,
    </p>
    <p>versus</p>
    <p>If the abbreviation LDR is used without a subscript, it can usually be assumed to be LDR<sub>H</sub>.</p>
    
    <div id="tabs-126010" class="tabs-container">
        <ul id="tab-set-126010" class="nav nav-tabs" role="tablist">
            <li class="active"><a href="#tab-126010-0" data-toggle="tab" class="tab-switch">DBZ</a></li>
            <li><a href="#tab-126010-1" data-toggle="tab" class="tab-switch">LDR</a></li>
            <li><a href="#tab-126010-2" data-toggle="tab" class="tab-switch">ZDR</a></li>
        </ul>
        <div class="tab-content">
            <h3>DBZ</h1>
            <div class="tab-pane fade in active" id="tab-126010-0">&lt;?php echo
                $mm-&gt;getPrintMediaItemWrapper(84315CSU-CHILL observations at 0.5° elevation of reflectivity (in dBZ)
                in a severe hailstorm over Strasburg, CO at 2200 UTC on 21 May 2014, during the Front Range Observation
                Network Testbed (FRONT) field campaign. The cross “+” marks the approximate location where 1.75-in
                (44-mm) hail covering the ground “to a depth of four inches” was reported at 2239 UTC. It can be seen
                that this hail fell near a local maximum in Z (~65 dBZ) and LDR (~-18 dB), and local minimum in ZDR (~0
                dB).); ?&gt; <br> </div>
            <h3>LDR</h1>
            <div class="tab-pane fade in null" id="tab-126010-1">&lt;?php echo
                $mm-&gt;getPrintMediaItemWrapper(84316CSU-CHILL observations at 0.5° elevation of LDR (in dB) in a
                severe hailstorm over Strasburg, CO at 2200 UTC on 21 May 2014, during the Front Range Observation
                Network Testbed (FRONT) field campaign. The cross “+” marks the approximate location where 1.75-in
                (44-mm) hail covering the ground “to a depth of four inches” was reported at 2239 UTC. It can be seen
                that this hail fell near a local maximum in Z (~65 dBZ) and LDR (~-18 dB), and local minimum in ZDR (~0
                dB).); ?&gt; <br> </div>
            <h3>ZDR</h1>
            <div class="tab-pane fade in null" id="tab-126010-2">&lt;?php echo
                $mm-&gt;getPrintMediaItemWrapper(84317CSU-CHILL observations at 0.5° elevation of ZDR in a severe
                hailstorm over Strasburg, CO at 2200 UTC on 21 May 2014, during the Front Range Observation Network
                Testbed (FRONT) field campaign. The cross “+” marks the approximate location where 1.75-in (44-mm) hail
                covering the ground “to a depth of four inches” was reported at 2239 UTC. It can be seen that this hail
                fell near a local maximum in Z (~65 dBZ) and LDR (~-18 dB), and local minimum in ZDR (~0 dB).); ?&gt;
                <br> </div>
        </div>
    </div>&lt;?php echo $mm-&gt;getPrintMediaItemWrapper(84460, "Accumulated hail near Denver International Airport, on
    21 May 2014, shortly after the radar images above were taken."); ?&gt; <br> &lt;?php echo
    $mm-&gt;getPrintMediaItemWrapper(84461, "Linear depolarization ratio (LDR, in dB) range-height indicator (RHI)
    vertical scan through a convective storm near McCracken, Kansas on 26 June 2015, showing the an LDR plume (hail
    embryos ~ -20 dB) extending vertically above and downshear of the updraft (Hubbert et al. 2018). This image
    corresponds to the RHI shown in the ZDR column section."); ?&gt; <br>
    <p>LDR ...sible to tell whether either signal
        has depolarized into the orthogonal channel upon reception.</p>
    <div id="q126014" class="panel panel-default interaction-question">
        <div class="panel-body">
            <div class="question-wrap radio">
                <h4>Question</h4>
                <p>Why does the WSR-88D not provide LDR measurements?</p>
                <form action="#">
                    <fieldset>
                        <div class="response-group-item correct"><input id="o126014-0" type="radio"
                                name="q126014"><label for="o126014-0"> <strong>a) </strong>It transmits its H and V
                                polarized signals simultaneously.</label></div>
                        <div class="response-group-item "><input id="o126014-1" type="radio" name="q126014"><label
                                for="o126014-1"> <strong>b) </strong>The depolarized signal is too weak to
                                detect.</label></div>
                        <div class="response-group-item "><input id="o126014-2" type="radio" name="q126014"><label
                                for="o126014-2"> <strong>c) </strong>The WSR-88D does not transmit at horizontal
                                polarization very often.</label></div><input class="submit-button btn btn-primary"
                            name="submit-button" type="button" value="Done">
                    </fieldset>
                </form>
                <div class="answer">
                    <p class="response">The correct answer is b.</p>
                    <p>The WSR-88D employs a simultaneous transmission scheme in which it transmits horizontally and
                        vertically polarized signals at the same time. This makes it impossible to tell whether any of
                        the backscattered signal in either channel was depolarized from the other.</p>
                </div>
                <div class="message">Please make a selection.</div>
            </div>
        </div>
    </div>
</div>
<div id="page_2-7-0" class="page">
    <h1 class="sub_head"><small>Introduction »</small>Putting it all together: 3D polarimetric features in a tornadic
        supercell</h1>
    <p>Below is a display containing 3D “flyaround” views of several polarimetric variables in a tornadic supercell near
        Moore, Oklahoma on 20 May 2013.</p>
    <div id="tabs-12702" class="tabs-container">
        <ul id="tab-set-12702" class="nav nav-tabs" role="tablist">
            <li class="active"><a href="#tab-12702-0" data-toggle="tab" class="tab-switch">Reflectivity</a></li>
            <li><a href="#tab-12702-1" data-toggle="tab" class="tab-switch">Differential Reflectivity</a></li>
            <li><a href="#tab-12702-2" data-toggle="tab" class="tab-switch">Correlation Coefficient</a></li>
        </ul>
        <div class="tab-content">
            <h3>Reflectivity</h1>
            <div class="tab-pane fade in active" id="tab-12702-0">&lt;?php echo $mm-&gt;getPrintMediaItemWrapper(85085,
                "Reflectivity in dBZ"); ?&gt; <br> </div>
            <h3>Differential Reflectivity</h1>
            <div class="tab-pane fade in null" id="tab-12702-1">&lt;?php echo $mm-&gt;getPrintMediaItemWrapper(85084,
                "Differential Reflectivity in dB"); ?&gt; <br> </div>
            <h3>Correlation Coefficient</h1>
            <div class="tab-pane fade in null" id="tab-12702-2">&lt;?php echo $mm-&gt;getPrintMediaItemWrapper(85083,
                "Correlation Coefficient is unitless"); ?&gt; <br> </div>
        </div>
    </div>
    <p>As you view these videos, try to identify regions containing strong updrafts, large hail, and tornadic debris.
        You are invited to learn more about this case, and interact with these data more, in the Case Study Gallery.</p>
</div>
<div id="page_3-0-0" class="page">
    <h1 class="sub_head">Summary</h1>
    <p>This lesson has covered the basic principles of polarimetric radar, as well as commonly used variables, and their
        basic meteorological interpretation. We have seen that some polarimetric variables (Z<sub>DR</sub>, CC, and LDR)
        are based primarily on received power measurements, while others are concerned primarily with the phase of the
        received signal (Φ<sub>DP</sub> and K<sub>DP</sub>). Additional polarimetric variables can be described based on
        different combinations of received power and phase, but the five covered here are the most commonly displayed,
        and arguably the most useful for meteorological applications.</p>
    <table class="table table-responsive table-bordered">
        <tbody>
            <tr>
                <td>Variable</td>
                <td>Abbreviations</td>
                <td>Definition</td>
                <td>Units</td>
                <td>Power or phase based</td>
                <td>Primary uses</td>
            </tr>
            <tr>
                <td>Differential reflectivity</td>
                <td>ZDR</td>
                <td>ZDR = ZH - ZV</td>
                <td>dB</td>
                <td>Power</td>
                <td>Drop size characterization, hail detection</td>
            </tr>
            <tr>
                <td>Correlation coefficient</td>
                <td>CC (NWS products) or ρHV (scientific literature)</td>
                <td>Quantitative measure of the similarity between backscattered H and V signals</td>
                <td>Unitless</td>
                <td>Power</td>
                <td>Non-meteorological scatterer discrimination</td>
            </tr>
            <tr>
                <td>Differential phase</td>
                <td>ΦDP</td>
                <td>ΦDP = ΦHH - ΦVV</td>
                <td>Degrees</td>
                <td>Phase</td>
                <td>Detection of heavy liquid precipitation</td>
            </tr>
            <tr>
                <td>Specific differential phase</td>
                <td>KDP</td>
                <td></td>
                <td>Degrees km-1</td>
                <td>Phase</td>
                <td>Detection of heavy liquid precipitation</td>
            </tr>
            <tr>
                <td>Linear depolarization ratio</td>
                <td>LDR</td>
                <td></td>
                <td>dB</td>
                <td>Power</td>
                <td>Detection of canted hydrometeors, particularly hail</td>
            </tr>
        </tbody>
    </table>
</div>
<div id="page_4-0-0" class="page">
    <h1 class="sub_head">Glossary</h1>
    <p>Backscattering = The physical process whereby an object re-emits intercepted radiation back in the direction from
        which it came. Backscattering is a special case of scattering.</p>
    <p>Backscattering cross section = The cross section of an idealized, spherical, isotropic scatterer that would
        backscatter power density equal to the backscattered power density actually received from a target.</p>
    <p>CC = co-polar correlation coefficient (in National Weather Service products)</p>
    <p>Differential phase = The difference in phase between backscattered horizontally and vertically polarized signals,
        Φ<sub>DP</sub> = Φ<sub>H</sub> - Φ<sub>V</sub></p>
    <p>Doppler (radial) velocity = The velocity of a scatterer toward or away from a radar.</p>
    <p>Doppler spectrum width = The second moment (circular standard deviation) of a distribution of Doppler velocities
        received from a collection of scatterers, indicating the spread in the velocities of the scatterers.</p>
    <p>Hydrometeor = Within the atmosphere, a particle that is composed primarily of water (e.g., a rain drop, or a
        hailstone)</p>
    <p>K<sub>DP</sub> = specific differential phase</p>
    <p>K<sub>DP</sub> column = a region of relatively high K<sub>DP</sub> extending above the 0 °C level in a convective
        storm, indicating liquid water cast off from melting hailstones in a downdraft.</p>
    <p>K<sub>DP</sub> foot = a region of relatively high K<sub>DP</sub> at low altitudes in a convective storm,
        indicating heavy rainfall</p>
    <p>LDR = linear depolarization ratio</p>
    <p>LDR plume = a region of relatively high LDR extending above and downshear of a thunderstorm updraft, consisting
        mainly of hail embryos</p>
    <p>Φ<sub>DP</sub> = differential phase</p>
    <p>Polarization = the preferred plane along which the electrical portion of an electromagnetic wave oscillates</p>
    <p>Polarimetry = the use of polarization to infer physical properties of a scattering medium</p>
    <p>Pulse volume = the volume of space occupied by a radar pulse as it travels through the atmosphere, away from the
        radar</p>
    <p>ρ<sub>hv</sub> = co-polar correlation coefficient (in meteorological literature)</p>
    <p>Reflectivity = In radar meteorology, “reflectivity” is usually shorthand for “logarithmic radar reflectivity
        factor”, a measure of the relative backscattering efficiency of scatterers in the atmosphere. </p>
    <p>Scattering = The physical process whereby an object re-emits intercepted radiation.</p>
    <p>Specific differential phase = One-half the radial derivative of differential phase (Φ<sub>DP</sub>), denoted
        K<sub>DP</sub></p>
    <p>Z = reflectivity</p>
    <p>Z<sub>DR</sub> = differential reflectivity</p>
    <p>Z<sub>DR</sub> arc = a region of relatively high Z<sub>DR</sub> located along the inflow edge of a storm</p>
    <p>Z<sub>DR</sub> column = a vertically oriented region of relatively high Z<sub>DR</sub> extending above the 0 °C
        level in a convective storm, resulting from a strong updraft</p>
    <p>Z<sub>H</sub> = reflectivity received in the horizontal polarization</p>
    <p>Z<sub>V</sub> = reflectivity received in the vertical polarization</p>
    <p>Z<sub>HH</sub> = reflectivity received in the horizontal polarization after transmission in the horizontal
        polarization (usually shortened to Z<sub>H</sub>)</p>
    <p>Z<sub>HV</sub> = reflectivity received in the horizontal polarization after transmission in the vertical
        polarization</p>
    <p>Z<sub>VH</sub> = reflectivity received in the vertical polarization after transmission in the horizontal
        polarization</p>
    <p>Z<sub>VV</sub> = reflectivity received in the vertical polarization after transmission in the vertical
        polarization (usually shortened to Z<sub>V</sub>)</p>
</div>
<div id="page_5-0-0" class="page">
    <h1 class="sub_head">References</h1>
    <p><a href="https://www.zotero.org/google-docs/?mzhQRZ" target="_blank" rel="noreferrer">Balakrishnan, N., and D. S.
            Zrnic, 1990: Use of polarization to characterize precipitation and discriminate large hail. </a><a
            href="https://www.zotero.org/google-docs/?mzhQRZ" target="_blank" rel="noreferrer">Journal of the
            Atmospheric Sciences</a><a href="https://www.zotero.org/google-docs/?mzhQRZ" target="_blank"
            rel="noreferrer">, </a><b>47</b><a href="https://www.zotero.org/google-docs/?mzhQRZ" target="_blank"
            rel="noreferrer">, 1525–1540, https://doi.org/10.1175/1520-0469(1990)047&lt;1525:UOPTCP&gt;2.0.CO;2.</a></p>
    <p><a href="https://www.zotero.org/google-docs/?mzhQRZ" target="_blank" rel="noreferrer">Beard, K. V., and C.
            Chuang, 1987: A New Model for the Equilibrium Shape of Raindrops. </a><a
            href="https://www.zotero.org/google-docs/?mzhQRZ" target="_blank" rel="noreferrer">J. Atmos. Sci.</a><a
            href="https://www.zotero.org/google-docs/?mzhQRZ" target="_blank" rel="noreferrer">, </a><b>44</b><a
            href="https://www.zotero.org/google-docs/?mzhQRZ" target="_blank" rel="noreferrer">, 1509–1524,
            https://doi.org/10.1175/1520-0469(1987)044&lt;1509:ANMFTE&gt;2.0.CO;2.</a></p>
    
    <p><a href="https://www.zotero.org/google-docs/?mzhQRZ" target="_blank" rel="noreferrer">——, and A. V. Ryzhkov,
            2008: Polarimetric signatures in supercell thunderstorms. </a><a
            href="https://www.zotero.org/google-docs/?mzhQRZ" target="_blank" rel="noreferrer">Journal of Applied
            Meteorology and Climatology</a><a href="https://www.zotero.org/google-docs/?mzhQRZ" target="_blank"
            rel="noreferrer">, </a><b>47</b><a href="https://www.zotero.org/google-docs/?mzhQRZ" target="_blank"
            rel="noreferrer">, 1940–1961, https://doi.org/10.1175/2007JAMC1874.1.</a></p>
   
   
    <p><a href="https://www.zotero.org/google-docs/?mzhQRZ" target="_blank" rel="noreferrer">Tanamachi, R. L., and P. L.
            Heinselman, 2016: Rapid-scan, polarimetric observations of central Oklahoma severe storms on 31 May 2013.
        </a><a href="https://www.zotero.org/google-docs/?mzhQRZ" target="_blank" rel="noreferrer">Weather and
            Forecasting</a><a href="https://www.zotero.org/google-docs/?mzhQRZ" target="_blank" rel="noreferrer">,
        </a><b>31</b><a href="https://www.zotero.org/google-docs/?mzhQRZ" target="_blank" rel="noreferrer">, 19–42,
            https://doi.org/10.1175/WAF-D-15-0111.1.</a></p>
    <p><a href="https://www.zotero.org/google-docs/?mzhQRZ" target="_blank" rel="noreferrer">Wilson, M., and M. Van Den
            Broeke, 2022: Using the Supercell Polarimetric Observation Research Kit (SPORK) to examine a large sample of
            pretornadic and nontornadic supercells. </a><a href="https://www.zotero.org/google-docs/?mzhQRZ"
            target="_blank" rel="noreferrer">Electronic Journal of Severe Storms Meteorology</a><a
            href="https://www.zotero.org/google-docs/?mzhQRZ" target="_blank" rel="noreferrer">, </a><b>17</b><a
            href="https://www.zotero.org/google-docs/?mzhQRZ" target="_blank" rel="noreferrer">, 1–38,
            https://doi.org/10.55599/ejssm.v17i2.85.</a></p>
</div>
</section>
</div>
            </div>
            <!-- END MODULE CONTENT ==============================-->
        </div>

        <footer id="module-footer" class="row">
            <div class="col-md-10 col-sm-12">

                <p class="footer-text">&copy; 2024, <a href="https://www.ucar.edu/">The University Corporation for
                        Atmospheric Research</a><br>All Rights Reserved. <a
                        href="https://meted.ucar.edu/legal.htm">Legal notices</a></p>

            </div>
            <div class="col-md-2 hidden-sm hidden-xs">
                <ul class="footer-links list-unstyled">
                    <li><a href="https://www.meted.ucar.edu/"><span class="glyphicon glyphicon-link"></span>MetEd</a>
                    </li>
                    <li><a href="https://comet.ucar.edu"><span class="glyphicon glyphicon-link"></span>COMET</a></li>
                </ul>
            </div>
        </footer>

    </main>

</body>
</html>