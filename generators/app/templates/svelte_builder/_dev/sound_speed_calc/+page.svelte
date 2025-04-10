

  <style>
    #module-content {
      min-height: fit-content !important;
    }

    .container {
      width: 100% !important;
    }
  </style>
  <script>
    var printVersion = false;

    var SoundSpeedCalc = (function () {
      var T = 0;
      var S = 0;
      var z = 0;
      var outputUpdate = function (val, id) {
        document.querySelector(id).value = val;
        switch (id) {
          case '#Temp':
            T = val; break;
          case '#Salinity':
            S = val; break;
          case '#Depth':
            z = val; break;
          default: break;
        }
        updateSS('#SS');
        return false;
      };
      var updateSS = function (id) {
        var ss = parseInt(1449.2 + (4.6 * T) - (0.055 * T * T) + (0.00029 * T * T * T) + ((1.34 - (0.01 * T)) * (S - 35)) + (0.016 * z));
        document.querySelector(id).value = ss;
      };
      return {
        update: function (val, id) {
          outputUpdate(val, id);
        }
      };
    })();

  </script>


<section onload={self.focus()}>
  <div id="module-wrapper" class="container">
    <div id="module-content" class="col-md-9">
      <div id="appCalc" class="page">
        <h3>Ocean Sound Speed Calculator</h3>
        <p>Drag the slider knobs to set the values.</p>
        <div class="panel panel-default">
          <div class="panel-body center ">
            <label for="myTemp">Temp (C)</label>
            <input type="range" min="0" max="40" value="0" id="myTemp" step="1"
              oninput={(e) => {SoundSpeedCalc.update(e.target.value, '#Temp')}}>
            <output class="outs" for="myTemp" id="Temp">0</output>
            <br />
            <label for="mySalinity">Salinity (psu)</label>
            <input type="range" min="0" max="50" value="0" id="mySalinity" step="1"
              oninput={(e) => {SoundSpeedCalc.update(e.target.value, '#Salinity')}}>
            <output for="mySalinity" id="Salinity">0</output>
            <br />
            <label for="myDepth">Depth (m)</label>
            <input type="range" min="0" max="5000" value="0" id="myDepth" step="1"
              oninput={(e) => {SoundSpeedCalc.update(e.target.value, '#Depth')}}>
            <output for="myDepth" id="Depth">0</output>
            <br />
            <label for="mySS">Sound Speed (m/s)</label>
            <output style="background-color:black; color:white;" for="mySS" id="SS">1402</output>
            <br />
          </div>
        </div>
      </div>
      <div id="footer">
        <p class="footer-text">&copy; Copyright 2010-2021, <a href="http://www.ucar.edu">University Corporation for
            Atmospheric Research</a>.<br> All rights reserved. <a href="http://meted.ucar.edu/legal.htm">Legal
            notices</a></p>
      </div>
    </div>
  </div>
</section>
