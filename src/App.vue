<template>
  <div id="app">
     <p class="radio-group">
        <label>
          <input type="radio" name="rotate-cube-side" value="front"  checked/> front
        </label>
        <label>
          <input type="radio" name="rotate-cube-side" value="right" /> right
        </label>
        <label>
          <input type="radio" name="rotate-cube-side" value="back" /> back
        </label>
        <label>
          <input type="radio" name="rotate-cube-side" value="left" /> left
        </label>
        <label>
          <input type="radio" name="rotate-cube-side" value="top" /> top
        </label>
        <label>
          <input type="radio" name="rotate-cube-side" value="bottom" /> bottom
        </label>
      </p>
      <p class="radio-group-2">
        <label>
              <input type="radio" name="shrink-cube" value="shrink" /> shrink
        </label>
        <label>
              <input type="radio" name="shrink-cube" value="unshrink" checked /> unshrink
        </label>
      </p>
    <div class="scene">
      <div class="cube">
        <div class="cube__face cube__face--front">
          <div id="card">
            <img alt="bill logo" src="./assets/logo.png" width="200" height="200">
            <HelloWorld msg="William Groble"/>
          </div>
        </div>
        <div class="cube__face cube__face--back">
               <div id="card">
            <img alt="bill logo" src="./assets/logo.png" width="200" height="200">
            <HelloWorld msg="test"/>
          </div>
        </div>
        <div class="cube__face cube__face--right">
          <div id="card">
            <img alt="bill logo" src="./assets/logo.png" width="200" height="200">
            <HelloWorld msg="test"/>
          </div>
        </div>
        <div class="cube__face cube__face--left">
          <div id="card">
            <img alt="bill logo" src="./assets/logo.png" width="200" height="200">
            <HelloWorld msg="test"/>
          </div>
        </div>
        <div class="cube__face cube__face--top">
          <div id="card">
            <img alt="bill logo" src="./assets/logo.png" width="200" height="200">
            <HelloWorld msg="test"/>
          </div>
        </div>
        <div class="cube__face cube__face--bottom">
          <div id="card">
            <img alt="bill logo" src="./assets/logo.png" width="200" height="200">
            <HelloWorld msg="William Groble"/>
          </div>
        </div>
      </div>
    </div>
    <!-- Wave SVG Animation -->
    <div class="waves">
      <svg width="100%" height="200px" fill="none" version="1.1"
      xmlns="http://www.w3.org/2000/svg">
        <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stop-color="#00B4DB" />
          <stop offset="50%" stop-color="#224488" />
          <stop offset="100%" stop-color="#0083B0" />
        </linearGradient>
        
        <defs>
          <pattern id="img1" patternUnits="userSpaceOnUse" width="100" height="100">
            <image href="https://one37pm.imgix.net/one37pm-editor-dev-images/s3fs-public/user-images/2020-03/expensive_pokemon_cards_hero.jpg" x="0" y="0" />
            <animateTransform attributeType="xml"
                          attributeName="patternTransform"
                          type="rotate" from="35" to="395" begin="0"
                          dur="60s" repeatCount="indefinite"/>
          </pattern>
        </defs>
        
        <path 
          fill="url(#img1)" 
          d="
            M0 67
            C 273,183
              822,-40
              1920.00,106 
            
            V 359 
            H 0 
            V 67
            Z">
          <animate 
            repeatCount="indefinite" 
            fill="url(#img1)" 
            attributeName="d" 
            dur="15s"
            attributeType="XML"
            values="
              M0 77 
              C 473,283
                822,-40
                1920,116 
              
              V 359 
              H 0 
              V 67 
              Z; 

              M0 77 
              C 473,-40
                1222,283
                1920,136 
              
              V 359 
              H 0 
              V 67 
              Z; 

              M0 77 
              C 973,260
                1722,-53
                1920,120 
              
              V 359 
              H 0 
              V 67 
              Z; 

              M0 77 
              C 473,283
                822,-40
                1920,116 
              
              V 359 
              H 0 
              V 67 
              Z
              ">
          </animate>
        </path>
      </svg>
    </div>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  components: {
    HelloWorld
  }
}
</script>

<style>
.scene {
  width: 100%;
  height: 100%;
  perspective: 600px;
}

.cube {
  width: 100%;
  height: 100%;
  position: relative;
  transform-style: preserve-3d;
  transform: translateZ(-100%);
  /* background: white; */
}

.cube__face {
  position: absolute;
  width: 100%;
  height: 100%;
  background: white;
}

.radio-group {
  z-index: 999999;
  position: absolute;
  left:0;
  right:0;

  margin-left: auto;
  margin-right: auto;
}

.radio-group-2 {
  z-index: 999999;
  position: absolute;
  left:0;
  right:0;
  bottom: 0;
  margin-left: auto;
  margin-right: auto;
}

.cube__face--front  { transform: rotateY(  0deg) translateZ(500px); }
.cube__face--right  { transform: rotateY( 90deg) translateZ(500px); }
.cube__face--back   { transform: rotateY(180deg) translateZ(500px); }
.cube__face--left   { transform: rotateY(-90deg) translateZ(500px); }
.cube__face--top    { transform: rotateX( 90deg) translateZ(500px); }
.cube__face--bottom { transform: rotateX(-90deg) translateZ(500px); }
.scene--shrink      { transform: scale(1);}

.cube.show-front  { transform: translateZ(-500px) rotateY(   0deg); }
.cube.show-right  { transform: translateZ(-500px) rotateY( -90deg); }
.cube.show-back   { transform: translateZ(-500px) rotateY(-180deg); }
.cube.show-left   { transform: translateZ(-500px) rotateY(  90deg); }
.cube.show-top    { transform: translateZ(-500px) rotateX( -90deg); }
.cube.show-bottom { transform: translateZ(-500px) rotateX(  90deg); }
.scene.show-shrink { 
  transform: scale(0.5);
}

.cube { transition: transform 1s; }
.scene { transition: transform 1s; }

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  position: fixed;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  z-index: 10;
}

#card {
  margin: 0;
  position: absolute;
  top: 50%;
  left: 50%;
  -ms-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
}

html{
  height: 100vh;
}
/* div{
  --bg: radial-gradient(#000000 67%, rgba(0, 0, 0, 0) 68%);
  background: linear-gradient(#ff1493 calc(50% - 13em), #ffff00 calc(50% + 13em));
} */
body{
  height: 100%;
  margin: 0;
  animation: scrolling 5s linear infinite;
  background: url("https://www.nasa.gov/sites/default/files/thumbnails/image/stsci-h-p1958a-f-2300.jpg") repeat;
}
div.waves{
  width: 100%;
  bottom: 0;
  height: 20px;
  position: absolute;
  z-index: 99;
}

svg{
  transition: 2s;
  position: absolute;
  width: 100%;
  bottom: -15vh;
  left: 0;
  animation-name: move-left;
  animation-duration: 30s;
  animation-iteration-count: infinite;
  animation-direction: alternate;
}

svg:hover {
    transition: 2s;
    bottom: 0;
}

.spacer{
  height: 100px;
  width: 100%;
}

@keyframes example {
  0%   {
    left:0px;
    top:0px;}
  
  50%  {
    left:-2000px;
    top:200px;}
  
  100% {
    left:0px; 
    top:0px;}
}

@keyframes scrolling {
  from{
      background-position: 0 0;
  }
  to{
      background-position: 0 105%;
  }
}

</style>
