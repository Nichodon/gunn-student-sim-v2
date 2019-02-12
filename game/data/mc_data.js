/**
 * @Author: Edmund Lam <edl>
 * @Date:   18:22:30, 25-Nov-2018
 * @Filename: mc_data.js
 * @Last modified by:   edl
 * @Last modified time: 17:06:17, 11-Feb-2019
 */

var INVENTORY_SIZE = 10;
var MC_DATA = {
 animations:[
   ["0.png", "1.png", "0.png", "2.png"],
   ["0.png", "1.png", "0.png", "2.png"],
   ["0.png", "1.png", "0.png", "1.png"],
   ["0.png", "1.png", "0.png", "1.png"]
 ],
 cursor:null
};

init_mc_data();

function init_mc_data(){
  let directions = ["front", "back", "left", "right"];
  for (let i = 0; i < MC_DATA.animations.length; i++){
    for (let j = 0; j < MC_DATA.animations[i].length; j++){
      let img = new Image();
      img.src = "../images/objects/mc/"+directions[i]+"/"+MC_DATA.animations[i][j];
      img.onload = function() {
        MC_DATA.animations[i][j] = img;
      }
    }
  }

  //load cursor
  let img = new Image();
  img.src = "../images/objects/mc/cursor.png";
  img.onload = function(){
    MC_DATA.cursor = img;
  }
}
