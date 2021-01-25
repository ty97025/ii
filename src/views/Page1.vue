<template>
  <div class="container">
    <div class="p5Canvas"></div>
  </div>
</template>

<script>
import P5 from 'p5';

export default {
  data() {
    return {
      p5Canvas: null,
    }
  },
  created() {
    const sketch = p5 => {
        let w = 1440;
        let h = 800;
        // let w = window.innerWidth;
        // let h = window.innerHeight;

        p5.setup = () => {
            p5.createCanvas(w, h);
            p5.stroke(255);
            //let radius = p5.min(p5.width, p5.height) / 2;
            //let secondsRadius = p5.radius * 0.71;
            //let minutesRadius = p5.radius * 0.6;
            //let hoursRadius = p5.radius * 0.5;
            //let clockDiameter = p5.radius * 1.7;
            //let cx = p5.width / 2;
            //let cy = p5.height / 2;
        };

        p5.draw = () => {
            // call your method:
            let radius = p5.min(p5.width, p5.height) / 2;
            let secondsRadius = radius * 0.71;
            let minutesRadius = radius * 0.6;
            let hoursRadius = radius * 0.5;
            let clockDiameter = radius * 1.7;

            let cx = p5.width / 2;
            let cy = p5.height / 2;
            p5.background(200);
  
            //p5.fill(113, 183, 183);
            p5.fill(113, 183, 183);
            p5.triangle(350, 68, 395, 245, 520, 99)
            p5.triangle(1093, 68, 1047, 245, 909, 99);
            p5.fill(0, 48, 97);
            p5.noStroke();
            p5.triangle(391, 108, 417, 199, 491, 121)
            p5.triangle(1049, 108, 1024, 199, 957, 121);
            p5.noStroke();
            p5.noStroke();
            p5.fill(255);
            p5.ellipse(cx, cy, clockDiameter + 50, clockDiameter + 50);
            p5.fill(113, 183, 183);
            p5.ellipse(cx, cy, clockDiameter + 45, clockDiameter + 45);
            p5.fill(153, 204, 255);
            p5.ellipse(cx, cy, clockDiameter + 25, clockDiameter + 25);
            p5.fill(0, 48, 97);
            p5.ellipse(cx, cy, clockDiameter, clockDiameter);


            // Angles for sin() and cos() start at 3 o'clock;
            // subtract HALF_PI to make them start at the top
            let s = p5.map(p5.second(), 0, 60, 0, p5.TWO_PI) - p5.HALF_PI;
            let m = p5.map(p5.minute() + p5.norm(p5.second(), 0, 60), 0, 60, 0, p5.TWO_PI) - p5.HALF_PI;
            let h = p5.map(p5.hour() + p5.norm(p5.minute(), 0, 60), 0, 24, 0, p5.TWO_PI * 2) - p5.HALF_PI;

            // Draw the hands of the clock
            p5.stroke(255);
            p5.strokeWeight(1);
            p5.line(cx, cy, cx + p5.cos(s) * secondsRadius, cy + p5.sin(s) * secondsRadius);
            p5.strokeWeight(2);
            p5.line(cx, cy, cx + p5.cos(m) * minutesRadius, cy + p5.sin(m) * minutesRadius);
            p5.strokeWeight(4);
            p5.line(cx, cy, cx + p5.cos(h) * hoursRadius, cy + p5.sin(h) * hoursRadius);

            // Draw the minute ticks
            p5.strokeWeight(2);
            p5.beginShape(p5.POINTS);
            for (let a = 0; a < 360; a += 6) {
              let angle = p5.radians(a);
              let x = cx + p5.cos(angle) * secondsRadius;
              let y = cy + p5.sin(angle) * secondsRadius;
              p5.vertex(x, y);
            }
            p5.endShape();

        };

        // create methods:
    }

    this.p5Canvas = new P5(sketch, 'p5Canvas');
  },
  unmounted () {
    this.p5Canvas = null;
  },
}
</script>

<style>
#p5Canvas {
  width: 100vw;
  position: relative;
}

main {
  margin: 0 auto;
  width: 90vw;
}
</style>