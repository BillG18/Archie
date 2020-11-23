import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')

var cube = document.querySelector('.cube');
var radioGroup = document.querySelector('.radio-group');
var radioGroup2 = document.querySelector('.radio-group-2');
var currentClass = '';

function changeSide() {
  var checkedRadio = radioGroup.querySelector(':checked');
  var showClass = 'show-' + checkedRadio.value;
  if ( currentClass ) {
    cube.classList.remove( currentClass );
  }
  cube.classList.add( showClass );
  currentClass = showClass;
}
// set initial side
changeSide();

var scene = document.querySelector('.scene');
function shrinkCube() {
  var checkedRadio2 = radioGroup2.querySelector(':checked');
  if (checkedRadio2.value == 'shrink') {
    scene.classList.add( 'show-shrink' );
  } else {
    scene.classList.remove( 'show-shrink' );
  }
}

radioGroup.addEventListener( 'change', changeSide );
radioGroup2.addEventListener( 'change', shrinkCube);
