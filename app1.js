"use strict";  

// refactoring code! Better var names, less global vars!
const CountTime= 1; // examole 1 min
const WarnTime= 5; // example 10 seconds

const EndTime = 1000*60*60; 
const StartTime= 1000*60*(60-CountTime);  

let tmp=document.querySelector("body");
let tmp1=document.querySelector("clock");

let dat=new Date(); // init var only for cases that something go wrong?
let datms1=dat.getTime()-StartTime;
let sw1 = 1; // switch1 is start count time.
let i=1; // switch beetween start and stop counter.

let datms2=dat.getTime(); // temp var for time? why?
// let datms3=dat.getTime(); // globale end time. if 0 stop.
let datms3 = 0;

tmp.style.backgroundColor = "blue";

(function () {
  function timeMe() {
  var datms6 = datms1 - datms2 + EndTime;
    if ( datms6 < 0 ) { 
      datms3= 0; 
    }	
    if (i == 1 || sw1 == 1 ) { // update display
      dat = new Date();  // if dat=0 do not set it!
      datms2 = dat.getTime(); 
      dat.setTime( datms1 - datms2 );   
      if ( datms3 == 0 && sw1 == 0 ) {
	var h=0; 
	var m=0; 
	var s=0; 
	var ms=0;
      } else { 
	if ( sw1 == 0 ) { 
	  var h = dat.getHours(); 
	  var m = dat.getMinutes();
	  var s = dat.getSeconds();
	  var ms = dat.getMilliseconds(); 
        } else {
          var h=0; 
	  var m=CountTime; 
	  var s=0; 
	  var ms=0;  
        }   		
      }
      if ( m < 1 && s < WarnTime ) { 
	tmp.style.backgroundColor = "red"; 
      }
      // put data out!  
      // m = fuehrendeNull(m);
      s = fuehrendeNull(s);
      ms = fuehrendeNullen(ms);
      // tpm1.innerHTML = h + ':' + m + ':' + s + ':' + ms;
      tmp1.innerHTML = m + ':' + s + ':' + ms; // display only what is needed.
    } 
    if ( datms3 == 0 ) { 
      i= 0; 
    }		
    setTimeout(timeMe, 1);
  }

  function fuehrendeNull(zahl) {
    zahl = (zahl < 10 ? '0' : '') + zahl;
    return zahl;
  }
  function fuehrendeNullen(zahl) {
    zahl = (zahl < 10 ? '0' : '') + zahl;
    zahl = (zahl < 100 ? '0' : '') + zahl;
    return zahl;
  }
	
  document.addEventListener('DOMContentLoaded', timeMe);
}());


// openFullscreen();
// set starttime display it and wait for click/touch


document.body.addEventListener("click", event => {
  if ( sw1 > 0 ) {
    dat=new Date();	  
    datms1=dat.getTime()-StartTime;
  }
  sw1 = 0;	
  if (i == 1) {
    tmp.style.backgroundColor = "green"; 
    i=0; 
    // window.navigator.vibrate(1000);
  } else {
    tmp.style.backgroundColor = "yellow";
    i=1; 
    dat = new Date();
    datms2 = dat.getTime(); 
    var datms4 = datms1 - datms2 + EndTime; 
    if ( datms4 > 0 ) {	  
      datms3 = datms1 - datms2 ;  
    }
    else {
      datms3 = 0 ;
    }
  }
});

var elem = document.documentElement;
function openFullscreen() {
  if (elem.requestFullscreen) {
    elem.requestFullscreen();
  } else if (elem.mozRequestFullScreen) { /* Firefox */
    elem.mozRequestFullScreen();
  } else if (elem.webkitRequestFullscreen) { /* Chrome, Safari & Opera */
    elem.webkitRequestFullscreen();
  } else if (elem.msRequestFullscreen) { /* IE/Edge */
    elem.msRequestFullscreen();
  }
}
