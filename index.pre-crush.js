e=0,g=0,h=!0,l={x:400,y:240,g:0,b:75,l:!0,h:function(b){return k(this,b)&&Math.atan2(b.y-240,b.x-400)>=this.g-Math.PI/4&&Math.atan2(b.y-240,b.x-400)<=this.g+Math.PI/4},i:function(b){b.u=!0;b.m=-1*b.m;b.o=-1*b.o;e+=10;0===e%100&&g++}},m=[],n=0,p=["#f60","#088"],q=[];
function r(b){b=b||{};d=!(Math.random()+.5|0),f=b.b||25,t=b.x||(d?800*Math.random():Math.random()+.5|0?800+f:0-f),d=b.y||(d?Math.random()+.5|0?480+f:0-f:Math.random()+.5|0?480-(80-80*Math.random()):80-80*Math.random()),f={f:b.f,l:b.f,x:t,y:d,m:b.f?0:(400-t)/400*5,o:b.f?0:(240-d)/240*3,b:f,fill:b.f?"#00f":p[Math.random()*p.length|0],i:b.i,h:b.h,s:function(){return this.x>800+this.b+1||this.x<0-(this.b+1)||this.y>480+this.b+1||this.y<0-(this.b+1)}};b.f&&q.push(f);m.push(f)}
a.onmousemove=function(b){100<b.clientX&&700>b.clientX&&(l.g=(b.clientX-800)/800*Math.PI*2+Math.PI)};q.push(l);r({f:!0,b:45,x:400,y:240,i:function(){this.j=!0;h=!1},h:function(b){return k(this,b)}});function k(b,d){return Math.sqrt((b.x-d.x)*(b.x-d.x)+(b.y-d.y)*(b.y-d.y))<b.b+d.b}u();
function u(b){c.fillStyle="#000";c.fillRect(0,0,800,480);m=m.filter(function(b){return!b.j});b-n>=1500-100*g&&(r(),n=b);for(d in m)if(c.fillStyle=m[d].fill,c.shadowColor=m[d].fill,c.shadowBlur=100,c.beginPath(),c.arc(m[d].x,m[d].y,m[d].b,0,2*Math.PI),c.fill(),m[d].l||(m[d].x+=m[d].m,m[d].y+=m[d].o,m[d].j=m[d].s()),!m[d].l&&!m[d].u&&h)for(f in q)!q[f].j&&q[f].h(m[d])&&q[f].i(m[d]);c.strokeStyle="#fff";c.beginPath();c.arc(l.x,l.y,l.b,l.g-Math.PI/4,l.g+Math.PI/4);c.stroke();c.fillStyle="#fff";
c.font="26px Arial";c.fillText(e,20,40);h||c.fillText("BOOM",360,240);requestAnimationFrame(u)};
