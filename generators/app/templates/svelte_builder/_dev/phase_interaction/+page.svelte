<script>
    var printVersion = false;

    var speed = 1;
    var phase = 62.5;
    var amp = .5;
    function showAxes(ctx, axes) {
        var width = ctx.canvas.width;
        var height = ctx.canvas.height;
        var xMin = 0;
        ctx.beginPath();
        ctx.strokeStyle = "rgb(128,128,128)";
        // X-Axis
        ctx.moveTo(xMin, height / 2);
        ctx.lineTo(width, height / 2);
        // Y-Axis
        ctx.moveTo(width / 2, 0);
        ctx.lineTo(width / 2, height);
        ctx.moveTo(0, 0);
        ctx.lineTo(0, height);
        ctx.stroke();
    }
    function plotSine(ctx, xOffset, yOffset, stroke, alter) {
        var width = ctx.canvas.width;
        var height = ctx.canvas.height;
        var scale = 20;
        ctx.beginPath();
        ctx.lineWidth = 4;
        ctx.strokeStyle = stroke;
        var x = 0;
        var y = 0;
        var amplitude = 40;
        if (alter == true) {
            amplitude = 40 * amp;
        }
        var frequency = 20;
        ctx.moveTo(x, y);
        while (x < width) {
            y = height / 2 + amplitude * Math.sin((x + xOffset + 95) / frequency);
            ctx.lineTo(x, y);
            x++;
        }
        ctx.stroke();
        ctx.save();
        ctx.stroke();
        ctx.restore();
    }
    function interact(ctx, xOffset, yOffset) {
        var width = ctx.canvas.width;
        var height = ctx.canvas.height;
        var scale = 20;
        ctx.beginPath();
        ctx.lineWidth = 4;
        ctx.strokeStyle = "rgb(125,65,235)";
        var x = 0;
        var y = 0;
        var amplitude = 40;
        var frequency = 20;
        ctx.moveTo(x, y);
        while (x < width) {
            y = (height / 2 + (amplitude * amp) * Math.sin((x + xOffset + 95) / frequency)) + (amplitude * Math.sin((x + 95) / frequency));
            ctx.lineTo(x, y);
            x++;
        }
        ctx.stroke();
        ctx.save();
        ctx.stroke();
        ctx.restore();
    }
    function draw() {
        var canvas = document.getElementById("canvas");
        var context = canvas.getContext("2d");
        context.clearRect(0, 0, 500, 500);
        showAxes(context);
        context.save();
        plotSine(context, phase, 0, "rgb(50,80,230)", true);
        plotSine(context, 0, 0, "rgb(200,0,0)", false);
        context.restore();
        step += speed;
        window.requestAnimationFrame(draw);
    }
    function draw2() {
        var canvas2 = document.getElementById("canvas2");
        var context = canvas2.getContext("2d");
        context.clearRect(0, 0, 500, 500);
        showAxes(context);
        context.save();
        interact(context, phase, 0);
        context.restore();
        step += speed;
        window.requestAnimationFrame(draw2);
    }
    function init() {
        window.requestAnimationFrame(draw);
        window.requestAnimationFrame(draw2);
        var slider1 = document.getElementById("phaseSlider");
        slider1.oninput = function () {
            phase = this.value * -1.25;
            document.getElementById("phaseShift").innerHTML = "Phase Shift = " + this.value / 100 + " wavelength(s)";
        }
        var slider2 = document.getElementById("ampSlider");
        slider2.oninput = function () {
            amp = this.value / 100;
            document.getElementById("amplitude").innerHTML = "Amplitude = " + this.value / 100;
        }
    }
    var step = -4;
</script>
<style type="text/css">
    .background {
        background: #fff;
        width: 100%;
        height: 100%;
        padding: 15px;
    }
</style>

<section onload={() => {self.focus(); init();}}>
	<div class="background">
		<div>
			<div id="appCalc" class="page">
				<h4>Phase and Amplitude Interaction</h4>
				<p>Drag the amplitude and phase controls to change the waves.</p>
				<div class="panel panel-default">
					<div class="panel-body center ">
						<p class="sub_head">Interacting Waves</p>
						<canvas id="canvas" width="500" height="100"></canvas>
						<p class="sub_head" id="amplitude">Amplitude = .5</p>
						<div class="slidecontainer">
							<input type="range" min="0" max="100" value="50" class="slider" id="ampSlider">
						</div>
						<p class="sub_head" id="phaseShift">Phase Shift = .5 wavelength(s)</p>
						<div class="slidecontainer">
							<input type="range" min="0" max="100" value="50" class="slider" id="phaseSlider">
						</div>
						<p class="sub_head">Resulting Waves</p>
						<canvas id="canvas2" width="500" height="200"></canvas>
					</div>
				</div>
			</div>
		</div>
	</div>
</section>