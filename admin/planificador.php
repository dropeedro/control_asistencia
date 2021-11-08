<!-- <?php require_once "./vista/vista_superior.php" ?> -->
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
	<title>MindFusion JsPlanner Sample - List view</title>
	<link href="../common/samples.css" rel="stylesheet" />
	<link rel="stylesheet" type="text/css" href="themes/light.css" />
	<link rel="stylesheet" type="text/css" href="css/planificador.css" />
    
</head>
<body>
	<div id="header">
		<p>	
				The Resource view is used here to create a timetable for execution of a production project. You can group the view by the contacts or tasks that we have added to the schedule. The schedule uses custom CSS styling on some of its elements.				
		</p>
</div>		
				
			<div style="margin-top: 10px;">
				<button onclick="group(1)">
					Group by contacts</button>
				<button onclick="group(4)">
					Group by tasks</button>
			</div>
		<div id="content" style="top: 100px; bottom: 24px;">		
		<div style="position: absolute; top: 120px; width: 98%; bottom: 20px;">
			<div id="calendar" style="margin-top: 20px; height: 100%; width: 100%;">
			</div>
			</div>
		</div>
	
		

	
	
	<script src="./scripts/MindFusion.Common.js" type="text/javascript"></script>
	<script src="./scripts/jscommon.js" type="text/javascript"></script>
	<script src="./scripts/jscollections.js" type="text/javascript"></script>
	<script src="./scripts/MindFusion.Scheduling.js" type="text/javascript"></script>
	<script src="./js/planificador.js" type="text/javascript"></script>	
	<script type="text/javascript" src="../common/samples.js"></script>
</body>
</html>