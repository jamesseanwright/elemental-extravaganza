var e=0,g=0,h=!0,k={D:function(){this.x=400;this.y=240;this.l=0;this.b=75;a.onmousemove=function(b){100<b.clientX&&700>b.clientX&&k.r(b)}},r:function(b){this.l=(b.clientX-800)/800*Math.PI*2+Math.PI},m:function(){c.strokeStyle="#fff";c.beginPath();c.arc(this.x,this.y,this.b,this.i().A,this.i().e);c.stroke()},i:function(){return{A:this.l-Math.PI/4,e:this.l+Math.PI/4}},h:function(b){return l(this,b)&&Math.atan2(b.y-240,b.x-400)>=this.i().A&&Math.atan2(b.y-240,b.x-400)<=this.i().e},g:function(b){b.F=
!0;b.o=-1*b.o;b.s=-1*b.s;e+=10;0===e%100&&g++}},m=[],n=0,p=["#f60","#088"];
function q(b){b=b||{};var d=!(Math.random()+.5|0),f=b.b||25,t=b.x||d?800*Math.random():Math.random()+.5|0?800+f:0-f,d=b.y||d?Math.random()+.5|0?480+f:0-f:Math.random()+.5|0?480-(80-80*Math.random()):80-80*Math.random(),f={j:b.j,x:t,y:d,o:(400-t)/400*5,s:(240-d)/240*3,b:f,fill:b.j?"#00f":p[Math.random()*p.length|0],g:b.g,h:b.h,m:function(){c.fillStyle=this.fill;c.shadowColor=this.fill;c.shadowBlur=100;c.beginPath();c.arc(this.x,this.y,this.b,0,2*Math.PI);c.fill()},G:function(){this.x+=this.o;this.y+=
this.s},C:function(){return this.x>800+this.b+1||this.x<0-(this.b+1)||this.y>480+this.b+1||this.y<0-(this.b+1)}};b.j&&r.u.call(r,f);m.push(f)}function u(){m=m.filter(function(b){return!b.v})}var r={f:[],u:function(b){b.w=!0;this.f.push(b)},H:function(b){this.f=this.f.filter(function(d){return b!==d})},B:function(b){if(!b.w&&!b.F&&h)for(var d in this.f)this.f[d].h(b)&&this.f[d].g&&this.f[d].g(b)}};k.D();r.u.call(r,k);q({j:!0,b:45,x:400,y:240,g:v,h:function(b){return l(this,b)}});
function l(b,d){return Math.sqrt((b.x-d.x)*(b.x-d.x)+(b.y-d.y)*(b.y-d.y))<b.b+d.b}w();function v(){this.v=!0;r.H(this);h=!1}function w(b){c.fillStyle="#000";c.fillRect(0,0,800,480);u();b-n>=1500-100*g&&(q(),n=b);for(var d in m)m[d].m(),m[d].w||(m[d].G(),m[d].v=m[d].C()),r.B(m[d]);k.m();c.fillStyle="#fff";c.font="26px Arial";c.fillText(e,20,40);h||c.fillText("BOOM",360,240);requestAnimationFrame(w)};
