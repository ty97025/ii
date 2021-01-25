<template>
  <div class="container">
    <div id="p5Canvas"></div>
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
        let w = 640;
        let h = 400;

        // let w = window.innerWidth;
        // let h = window.innerHeight;

        p5.setup = () => {
            p5.createCanvas(w, h, p5.WEBGL);
        };

        p5.draw = () => {
            p5.background(225);
            p5.changeBG(p5.mouseX, p5.mouseY);

            let theta = 0;
            let a = 0;
            p5.translate(-195, 0, 0);
            p5.fill(255,20,0);
            p5.push();
            p5.rotateZ(p5.frameCount * 10);
            p5.rotateX(p5.frameCount* 10);
            p5.rotateY(p5.frameCount * 10);
            p5.sphere(55);
            p5.pop();
            p5.translate(440, 100, 100);
            p5.push();
            p5.rotateZ(theta* 0.1);
            p5.rotateX(theta* 0.1);
            p5.rotateY(theta* 0.1);
            p5.pop();
            theta += 0.25;
            p5.translate(-100, -100, 0);
            p5.fill(20,200,900);
            p5.push();
            p5.rotateZ(p5.frameCount * 10);
            p5.rotateX(p5.frameCount * 10);
            p5.rotateY(p5.frameCount * 10);
            p5.sphere(40);
            p5.pop();
            p5.translate(440, 100, 100);
            p5.push();
            p5.rotateZ(a * 0.1);
            p5.rotateX(a * 0.1);
            p5.rotateY(a * 0.1);
            p5.pop();
            a += 0.05;
        };
        p5.changeBG = (x, y) => {
          let _x = p5.map(x, 0, w, 0, 255);
          let _y = p5.map(y, 0, h, 0, 255);
          p5.background(_x, _y, 330);
        }
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