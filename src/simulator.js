;(function() {

  var lastTime = 0;
  var vendors = ['ms', 'moz', 'webkit', 'o'];
  for(var x = 0; x < vendors.length && !window.requestAnimationFrame; ++x) {
      window.requestAnimationFrame = window[vendors[x]+'RequestAnimationFrame'];
      window.cancelAnimationFrame = window[vendors[x]+'CancelAnimationFrame']
                                 || window[vendors[x]+'CancelRequestAnimationFrame'];
  }

  if (!window.requestAnimationFrame)
      window.requestAnimationFrame = function(simulator, element) {
          var currTime = new Date().getTime();
          var timeToCall = Math.max(0, 16 - (currTime - lastTime));
          var id = window.setTimeout(function() { simulator(currTime + timeToCall); },
            timeToCall);
          lastTime = currTime + timeToCall;
          return id;
      };

  if (!window.cancelAnimationFrame)
      window.cancelAnimationFrame = function(id) {
          clearTimeout(id);
      };


  function Simulator(simulator, renderer, integrationFps) {
    this.simulator = simulator;
    this.renderer = renderer;
    this.step = this.getStep();
    this.lastTime = 0;
    this.running = false;
    this.fps = 0;
    this.frames = 0;
    this.countTime = 0;
    this.countInterval = 250;
    this.accumulator = 0;
    this.integrationStep = 1000 / (integrationFps || 60);
    this.gravity = new Vector();
    this.systems = [];
  }

  Simulator.prototype.start = function() {
    this.running = true;
    this.countTime = Date.now() + 1000;
    requestAnimationFrame(this.step);
  };

  Simulator.prototype.stop = function() {
    this.running = false;
  };

  Simulator.prototype.integrate = function(time) {
    for(var j = 0, jlen = this.systems.length; j < jlen; j++) {
      this.systems[j].integrate(time);
    }
  };

  Simulator.prototype.setGravity = function(vec) {
    this.gravity = vec;
  };

  Simulator.prototype.addSystem = function(system) {
    this.systems.push(system);
  };

  Simulator.prototype.getStep = function() {
    var self = this;
    return function generatedStep() {
      if (!self.running) return;

      var time = Date.now();
      var step = time - self.lastTime;
      if (step > 100) step = 0;         // in case you leave / return

      self.accumulator += step;

      while (self.accumulator >= self.integrationStep) {
        self.simulator(self.integrationStep);
        self.integrate(self.integrationStep);
        self.accumulator -= self.integrationStep;
      }

      self.renderer(step);

      self.frames++;
      if (time >= self.countTime) {
        self.fps = (self.frames / (self.countInterval + time - self.countTime) * 1000).toFixed(0);
        self.frames = 0;
        self.countTime = time + self.countInterval;
      }

      self.lastTime = time;
      requestAnimationFrame(self.step);
    };
  };

  window.Simulator = Simulator;

})();
