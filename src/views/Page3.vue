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
            p5.createCanvas(w, h,);
            p5.noStroke();
            p5.rectMode(p5.CENTER); 
        };

        p5.draw = () => {
            p5.background(96, 47, 47);
            p5.fill(244, 122, 158);
            p5.rect(p5.mouseX, p5.height / 2, p5.mouseY / 2 + 10, p5.mouseY / 2 + 10);
            p5.fill(237, 34, 93);
            let inverseX = p5.width - p5.mouseX;
            let inverseY = p5.height - p5.mouseY;
            p5.ellipse(inverseX, p5.height / 2, inverseY / 2 + 10, inverseY / 2 + 10)
        };
        
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