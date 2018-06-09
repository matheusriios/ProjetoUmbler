(function(fn){if(typeof define==='function'&&define.amd){define([],fn);}else if((typeof module!=="undefined"&&module!==null)&&module.exports){module.exports=fn;}else{fn();}})(function(){var assign=Object.assign||window.jQuery&&jQuery.extend;var threshold=8;var requestFrame=(function(){return(window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||window.oRequestAnimationFrame||window.msRequestAnimationFrame||function(fn,element){return window.setTimeout(function(){fn();},25);});})();var ignoreTags={textarea:true,input:true,select:true,button:true};var mouseevents={move:'mousemove',cancel:'mouseup dragstart',end:'mouseup'};var touchevents={move:'touchmove',cancel:'touchend',end:'touchend'};var rspaces=/\s+/;var eventOptions={bubbles:true,cancelable:true};var eventsSymbol=Symbol('events');function createEvent(type){return new CustomEvent(type,eventOptions);}
function getEvents(node){return node[eventsSymbol]||(node[eventsSymbol]={});}
function on(node,types,fn,data,selector){types=types.split(rspaces);var events=getEvents(node);var handlers,type;function handler(e){fn(e,data);}
for(type of types){handlers=events[type]||(events[type]=[]);handlers.push([fn,handler]);node.addEventListener(type,handler);}}
function off(node,types,fn,selector){types=types.split(rspaces);var events=getEvents(node);var type,handlers,i;if(!events){return;}
for(type of types){handlers=events[type];if(!handlers){continue;}
i=handlers.length;while(i--){if(handlers[i][0]===fn){node.removeEventListener(type,handlers[i][1]);handlers.splice(i,1);}}}}
function trigger(node,type,properties){var event=createEvent(type);if(properties){assign(event,properties);}
node.dispatchEvent(event);}
function Timer(fn){var callback=fn,active=false,running=false;function trigger(time){if(active){callback();requestFrame(trigger);running=true;active=false;}
else{running=false;}}
this.kick=function(fn){active=true;if(!running){trigger();}};this.end=function(fn){var cb=callback;if(!fn){return;}
if(!running){fn();}
else{callback=active?function(){cb();fn();}:fn;active=true;}};}
function noop(){}
function preventDefault(e){e.preventDefault();}
function isIgnoreTag(e){return!!ignoreTags[e.target.tagName.toLowerCase()];}
function isPrimaryButton(e){return(e.which===1&&!e.ctrlKey&&!e.altKey);}
function identifiedTouch(touchList,id){var i,l;if(touchList.identifiedTouch){return touchList.identifiedTouch(id);}
i=-1;l=touchList.length;while(++i<l){if(touchList[i].identifier===id){return touchList[i];}}}
function changedTouch(e,data){var touch=identifiedTouch(e.changedTouches,data.identifier);if(!touch){return;}
if(touch.pageX===data.pageX&&touch.pageY===data.pageY){return;}
return touch;}
function mousedown(e){if(!isPrimaryButton(e)){return;}
if(isIgnoreTag(e)){return;}
on(document,mouseevents.move,mousemove,e);on(document,mouseevents.cancel,mouseend,e);}
function mousemove(e,data){checkThreshold(e,data,e,removeMouse);}
function mouseend(e,data){removeMouse();}
function removeMouse(){off(document,mouseevents.move,mousemove);off(document,mouseevents.cancel,mouseend);}
function touchstart(e){if(ignoreTags[e.target.tagName.toLowerCase()]){return;}
var touch=e.changedTouches[0];var data={target:touch.target,pageX:touch.pageX,pageY:touch.pageY,identifier:touch.identifier,touchmove:function(e,data){touchmove(e,data);},touchend:function(e,data){touchend(e,data);}};on(document,touchevents.move,data.touchmove,data);on(document,touchevents.cancel,data.touchend,data);}
function touchmove(e,data){var touch=changedTouch(e,data);if(!touch){return;}
checkThreshold(e,data,touch,removeTouch);}
function touchend(e,data){var touch=identifiedTouch(e.changedTouches,data.identifier);if(!touch){return;}
removeTouch(data);}
function removeTouch(data){off(document,touchevents.move,data.touchmove);off(document,touchevents.cancel,data.touchend);}
function checkThreshold(e,data,touch,fn){var distX=touch.pageX-data.pageX;var distY=touch.pageY-data.pageY;if((distX*distX)+(distY*distY)<(threshold*threshold)){return;}
triggerStart(e,data,touch,distX,distY,fn);}
function triggerStart(e,data,touch,distX,distY,fn){var touches=e.targetTouches;var time=e.timeStamp-data.timeStamp;var template={altKey:e.altKey,ctrlKey:e.ctrlKey,shiftKey:e.shiftKey,startX:data.pageX,startY:data.pageY,distX:distX,distY:distY,deltaX:distX,deltaY:distY,pageX:touch.pageX,pageY:touch.pageY,velocityX:distX/time,velocityY:distY/time,identifier:data.identifier,targetTouches:touches,finger:touches?touches.length:1,enableMove:function(){this.moveEnabled=true;this.enableMove=noop;e.preventDefault();}};trigger(data.target,'movestart',template);fn(data);}
function activeMousemove(e,data){var timer=data.timer;data.touch=e;data.timeStamp=e.timeStamp;timer.kick();}
function activeMouseend(e,data){var target=data.target;var event=data.event;var timer=data.timer;removeActiveMouse();endEvent(target,event,timer,function(){setTimeout(function(){off(target,'click',preventDefault);},0);});}
function removeActiveMouse(){off(document,mouseevents.move,activeMousemove);off(document,mouseevents.end,activeMouseend);}
function activeTouchmove(e,data){var event=data.event;var timer=data.timer;var touch=changedTouch(e,event);if(!touch){return;}
e.preventDefault();event.targetTouches=e.targetTouches;data.touch=touch;data.timeStamp=e.timeStamp;timer.kick();}
function activeTouchend(e,data){var target=data.target;var event=data.event;var timer=data.timer;var touch=identifiedTouch(e.changedTouches,event.identifier);if(!touch){return;}
removeActiveTouch(data);endEvent(target,event,timer);}
function removeActiveTouch(data){off(document,touchevents.move,data.activeTouchmove);off(document,touchevents.end,data.activeTouchend);}
function updateEvent(event,touch,timeStamp){var time=timeStamp-event.timeStamp;event.distX=touch.pageX-event.startX;event.distY=touch.pageY-event.startY;event.deltaX=touch.pageX-event.pageX;event.deltaY=touch.pageY-event.pageY;event.velocityX=0.3*event.velocityX+0.7*event.deltaX/time;event.velocityY=0.3*event.velocityY+0.7*event.deltaY/time;event.pageX=touch.pageX;event.pageY=touch.pageY;}
function endEvent(target,event,timer,fn){timer.end(function(){trigger(target,'moveend',event);return fn&&fn();});}
function movestart(e){if(e.defaultPrevented){return;}
if(!e.moveEnabled){return;}
var event={startX:e.startX,startY:e.startY,pageX:e.pageX,pageY:e.pageY,distX:e.distX,distY:e.distY,deltaX:e.deltaX,deltaY:e.deltaY,velocityX:e.velocityX,velocityY:e.velocityY,identifier:e.identifier,targetTouches:e.targetTouches,finger:e.finger};var data={target:e.target,event:event,timer:new Timer(update),touch:undefined,timeStamp:e.timeStamp};function update(time){updateEvent(event,data.touch,data.timeStamp);trigger(data.target,'move',event);}
if(e.identifier===undefined){on(e.target,'click',preventDefault);on(document,mouseevents.move,activeMousemove,data);on(document,mouseevents.end,activeMouseend,data);}
else{data.activeTouchmove=function(e,data){activeTouchmove(e,data);};data.activeTouchend=function(e,data){activeTouchend(e,data);};on(document,touchevents.move,data.activeTouchmove,data);on(document,touchevents.end,data.activeTouchend,data);}}
on(document,'mousedown',mousedown);on(document,'touchstart',touchstart);on(document,'movestart',movestart);if(!window.jQuery){return;}
var properties=("startX startY pageX pageY distX distY deltaX deltaY velocityX velocityY").split(' ');function enableMove1(e){e.enableMove();}
function enableMove2(e){e.enableMove();}
function enableMove3(e){e.enableMove();}
function add(handleObj){var handler=handleObj.handler;handleObj.handler=function(e){var property;for(property of properties){e[property]=e.originalEvent[property];}
handler.apply(this,arguments);};}
jQuery.event.special.movestart={setup:function(){on(this,'movestart',enableMove1);return false;},teardown:function(){off(this,'movestart',enableMove1);return false;},add:add};jQuery.event.special.move={setup:function(){on(this,'movestart',enableMove2);return false;},teardown:function(){off(this,'movestart',enableMove2);return false;},add:add};jQuery.event.special.moveend={setup:function(){on(this,'movestart',enableMove3);return false;},teardown:function(){off(this,'movestart',enableMove3);return false;},add:add};});