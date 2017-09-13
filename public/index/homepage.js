var $gear = $("#gear"),
    $fanEmpty = $("#fan-empty"),
    $fanFull = $("#fan-full_1_"),
    $bellows = $("#bellows"),
    $bigLtBase = $("#light-base_1_"),
    $bigLtBulb = $("#bulb_1_"),
    $smLtBase = $("#light-base"),
    $smLtBulb = $("#bulb"),
    $filament = $("#filament"),
    $faucet = $("#faucet"),
    $bigLtBulb = $("#bulb_1_"),
    $smGlow = $("#glow"),
    $firefly1 = $("#firefly"),
    $firefly2 = $("#firefly_1_"),
    $firefly3 = $("#firefly_2_");

TweenMax.set("#firefly, #firefly_1_, #firefly_2_, #glow, #big-glow", { visibility:"visible" });

// the first scene
function sceneOne() {
  var tl = new TimelineLite();
  
  tl.add( "start")
  .to($smLtBase, 1, {fill:"rgb(108, 115, 103)", ease:Power2.easeOut}, "start+=1.5")
  .to($smLtBulb, 1, {fill:"rgb(191, 191, 131)", ease:Power2.easeOut}, "start+=1.5")
  .to($filament, 1, {fill:"rgb(242, 224, 138)", ease:Power2.easeOut}, "start+=1.5")
  .to($smGlow, 1, {opacity:0.5, ease:Circ.easeOut}, "start+=1.5")
  .to($smGlow, 4, {opacity:0.8, ease:Circ.easeOut}, "start+=3")
  .to($firefly1, 1.5, {opacity:1, ease:Elastic.easeOut}, "start+=3")
  .to($firefly1, 6, {
    bezier:{
      type:"soft", 
      values:[{x:10, y:30}, {x:-30, y:20}, {x:-40, y:10}, {x:30, y:20}, {x:10, y:30}],
      autoRotate:true
    },
  ease:Linear.easeNone, repeat:-1}, "start+=3")
  .to($firefly2, 1.5, {opacity:1, ease:Elastic.easeOut}, "start+=3.5")
  .to($firefly2, 6, {
    bezier:{
      type:"soft", 
      values:[{x:30, y:10}, {x:60, y:40}, {x:50, y:30}, {x:40, y:20}, {x:30, y:10}],
      autoRotate:true
    },
  ease:Linear.easeNone, repeat:-1}, "start+=3.5")
  .to($firefly3, 1.5, {opacity:1, ease:Elastic.easeOut}, "start+=4")
  .to($("#big-glow"), 1.5, {opacity:0.5, ease:Elastic.easeOut}, "start+=4")
  .to($firefly3, 6, {
    bezier:{
      type:"soft", 
      values:[{x:-10, y:5}, {x:-20, y:40}, {x:-50, y:30}, {x:-40, y:0}, {x:-10, y:5}],
      autoRotate:true
    },
  ease:Linear.easeNone, repeat:-1}, "start+=4")
  .to($bigLtBase, 2.5, {fill:"rgba(191, 191, 131, 0.3)", ease:SlowMo.easeOut}, "start+=3.5")
  .to($bigLtBulb, 2, {fill:"rgb(191, 191, 131)", ease:SlowMo.easeOut}, "start+=3.5")
  .fromTo($bellows, 2, {scale:1, ease:Back.easeOut}, {scaleY:0.75, y:10, repeat:-1, ease:Circ.easeIn}, "start")
  .to($gear, 4, {rotation:-360, repeat:-1, ease:Linear.easeNone, transformOrigin:"50% 50%"}, "start")
  .to($fanEmpty, 4, {rotation:360, repeat:-1, ease:Linear.easeNone, transformOrigin:"60% 53%"}, "start")
  .to($fanFull, 2, {rotation:360, repeat:-1, ease:Linear.easeNone, transformOrigin:"58% 50%"}, "start");
  
  return tl;
}

var master = new TimelineLite();
master.add(sceneOne(), "sceneOne");

//master.seek("scene1+=4");