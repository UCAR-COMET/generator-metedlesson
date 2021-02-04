<?php
require_once( 'cometAPI.inc.php' );
$mm = new MediaItemManager();
?>
<!doctype html>
<html lang="<% if (lessonLang === 'ES') { %>es<% } else if (lessonLang === 'FR') { %>fr<% } else { %>en<% } %>">
<head>
<title><%= lessonTitle %></title>
<meta content="text/html; charset=UTF-8" http-equiv="content-type">
<meta name="author" content="UCAR/COMET">
<meta name="dcterms.rightsHolder" content="UCAR/COMET">
<meta name="robots" content="all">
<meta name="Description" content="<%= lessonDesc %>">
<meta name="keywords" content="<%= lessonKeys %>">
<meta name="viewport" content="width=device-width">
<meta name="viewport" content="initial-scale=1.0">
<link rel="stylesheet" type="text/css" media="screen" href="bootstrap/css/bootstrap.min.css">
<link rel="stylesheet" type="text/css" media="screen" href="jquery/jquery-ui.min.css">
<link rel="stylesheet" type="text/css" media="screen" href="css/meted-base.css">
<link rel="stylesheet" type="text/css" media="print" href="css/module-print.css">
<script src="jquery/jquery.min.js"></script>
<script src="jquery/jquery-ui.min.js"></script>
<script src="jquery/jquery-plugins.min.js"></script>
<script src="bootstrap/js/bootstrap.min.js"></script>
<script src="modernizr/modernizr.min.js"></script>
<script src="jquery/defaults.js"></script>
<script>
	var printVersion = true;
</script>
<!--[if lte IE 9]><script type="text/javascript" src="jquery/apps/draw/excanvas.js"></script><script type="text/javascript" src="ie-support/respond.js"></script><link rel="stylesheet" type="text/css" media="screen" href="ie-support/ie-support.css" /><![endif]-->
</head>
<body>
<!-- MODULE WRAPPER (container) ==================================-->
<div id="module-wrapper" class="container">
	<div class="row">
		<section id="module-topbanner">
			<a id="module-title" class="module-title-text" href="index.htm"></a>
			<h3 id="module-credit" class="hidden-sm hidden-xs">Produced by The COMET® Program</h3>
		</section>
	</div><!-- end row 1/3 -->
		
	<div class="row">
		<!-- TABLE OF CONTENTS ==================================-->
		<div id="tableofcontents" class="sidebar-toc">
			<ul class="nav lc-docs-sidenav">
				<li><a href="#page_1-0-0">Page_1-0-0</a>
				</li>
				<li><a href="#page_2-0-0">Page_2-0-0</a>
					<ul class="nav" id="ul_2-0-0">
						<li><a href="#page_2-1-0">Page_2-1-0</a>
							<ul class="nav" id="ul_2-1-0">
								<li><a href="#page_2-1-1">Page_2-1-1</a>
								</li>
							</ul>
						</li>
					</ul>
				</li>
				<li><a href="#page_contributors">Contributors</a></li>
			</ul>
		</div>

		<!-- MODULE CONTENT ==================================-->
		<div id="module-content" class="col-md-9">
			<div class="row unit-header"></div>
			<div id="page_1-0-0" class="page">
				<h3>Page 1-0-0 Title</h3>
				...
			</div>
			<div id="page_2-0-0" class="page">
				<h3>Page 2-0-0 Title</h3>
				...
			</div>
			<div id="page_2-1-0" class="page">
				<h3 class="sub_head"><small>Parent Page 2-0-0 Title » </small>Child Page 2-1-0 Title</h3>
				...
			</div>
			<div id="page_2-1-1" class="page">
				<h3 class="sub_head"><small>Parent Page 2-0-0 Title » Child Page 2-1-0 Title » </small>Child Page 2-1-1 Title</h3>
				...
			</div>				
			<div id="page_contributors" class="page">
				<h3>Contributors</h3>
				...
			</div>
		</div>
		<!-- END MODULE CONTENT ==============================-->
	</div><!-- end row 2/3 -->
		
	<!-- MODULE FOOTER ==================================-->
	<div id="module-footer" class="row">
		<div class="col-md-10 col-sm-12">
			<p class="footer-text">&copy; Copyright <%= currentYear %>, <a href="http://www.ucar.edu">University Corporation for Atmospheric Research</a>.<br> All rights reserved. <a href="http://meted.ucar.edu/legal.htm">Legal notices</a></p>
		</div>
		<div class="col-md-2 hidden-sm hidden-xs">
			<ul class="footer-links list-unstyled">
				<li><a href="https://www.meted.ucar.edu/"><span class="glyphicon glyphicon-link"></span>MetEd Home</a></li>
				<li><a href="http://comet.ucar.edu"><span class="glyphicon glyphicon-link"></span>COMET Home</a></li>
			</ul>
		</div>
	</div><!-- end row 3/3 -->
	<!-- END MODULE FOOTER ==================================-->

</div>
<!-- END MODULE WRAPPER (container) ==================================-->

<!-- BACK TO TOP BUTTON =========================== -->
<p class="back-top"><a href="#top"><span class="glyphicon glyphicon-upload"></span>Back to Top</a></p>

<!-- MODAL PROMPTS ======================== -->
<div id="quiz-prompt"></div>
	
<!-- PRINT STYLES SCRIPT ==========================-->
<script>
$(document).ready(function(){
	// Remove all media stylesheets
	$('link[media~="screen"]').remove();
	// Convert print stylesheet to all-media
	$('link[media~="print"]').attr('media', 'all');
});
</script>
</body>
</html>