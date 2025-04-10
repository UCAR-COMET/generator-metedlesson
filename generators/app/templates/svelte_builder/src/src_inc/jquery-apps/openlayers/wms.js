// JavaScript Document
	$(document).ready( function() {
		$('#chanSelector').change(changeChannel);

		function changeChannel() {
			console.log("Fired changeChannel");
			var chan = $("#chanSelector").val();
			if (chan == "Visible") {
				layers[0].getSource().updateParams({'LAYERS': 'msg_vis006'});
				layers[1].setVisible(false);
				console.log("VIS01");
			} else if (chan == "LW Infrared") {
				layers[0].getSource().updateParams({'LAYERS': 'meteosat:msg_ir108'});
				layers[1].setVisible(false);
				console.log("IR09");
			} else if (chan == "Water Vapour") {
				layers[0].getSource().updateParams({'LAYERS': 'msg_wv062'});
				layers[1].setVisible(false);
				console.log("WV05");
			} else if (chan == "Convection") {
				layers[0].getSource().updateParams({'LAYERS': 'msg_convection'});
				layers[1].setVisible(false);
				console.log("Convection");
			} else if (chan == "Airmass") {
				layers[0].getSource().updateParams({'LAYERS': 'msg_airmass'});
				layers[1].setVisible(false);
				console.log("Airmass");
			} else if (chan == "Dust") {
				layers[0].getSource().updateParams({'LAYERS': 'msg_dust'});
				layers[1].setVisible(false);
				console.log("Dust");
			} else if (chan == "Day Natural Colours") {
				layers[0].getSource().updateParams({'LAYERS': 'msg_natural'});
				layers[1].setVisible(false);
				console.log("Day Natural Colours");
			} else if (chan == "Day Microphysics") {
				layers[0].getSource().updateParams({'LAYERS': 'msg_microphysics'});
				layers[1].setVisible(false);
				console.log("Day Microphysics");
			} else if (chan == "Night Microphysics") {
				layers[0].getSource().updateParams({'LAYERS': 'msg_fog'});
	//			layers[0].getSource().updateParams({'LAYERS': 'msg_mpe'});
				layers[1].setVisible(false);
				console.log("Night Microphysics");
			} else {
				console.log("Error: Select a channel.");
			}
		}
	});
	