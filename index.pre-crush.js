d=0,f=0,h=!0,k={x:400,y:240,g:0,b:75,l:!0},l=[],m=0,n=["#f60","#088"];
function p(e){e=e||{};b=!(Math.random()+.5|0),g=e.b||25,q=e.x||(b?800*Math.random():Math.random()+.5|0?800+g:0-g),b=e.y||(b?Math.random()+.5|0?480+g:0-g:Math.random()+.5|0?480-(80-80*Math.random()):80-80*Math.random());e={f:e.f,l:e.f,x:q,y:b,h:e.f?0:(400-q)/400*5,i:e.f?0:(240-b)/240*3,b:g,fill:e.f?"#00f":n[Math.random()*n.length|0],u:e.u,o:e.o,m:function(){return this.x>800+this.b+1||this.x<0-(this.b+1)||this.y>480+this.b+1||this.y<0-(this.b+1)}};l.push(e);return e}
a.onmousemove=function(e){100<e.clientX&&700>e.clientX&&(k.g=(e.clientX-800)/800*Math.PI*2+Math.PI)};r=p({f:!0,b:45,x:400,y:240});function t(e,b){return Math.sqrt((e.x-b.x)*(e.x-b.x)+(e.y-b.y)*(e.y-b.y))<e.b+b.b}u();
function u(e){c.fillStyle="#000";c.fillRect(0,0,800,480);l=l.filter(function(b){return!b.j});e-m>=1500-100*f&&(p(),m=e);for(b in l)c.fillStyle=l[b].fill,c.shadowColor=l[b].fill,c.shadowBlur=100,c.beginPath(),c.arc(l[b].x,l[b].y,l[b].b,0,2*Math.PI),c.fill(),l[b].l||(l[b].x+=l[b].h,l[b].y+=l[b].i,l[b].j=l[b].m(),t(r,l[b])&&(r.j=!0,h=!1),h&&!l[b].s&&t(k,l[b])&&Math.atan2(l[b].y-240,l[b].x-400)>=k.g-Math.PI/4&&Math.atan2(l[b].y-240,l[b].x-400)<=k.g+Math.PI/4&&(l[b].s=!0,l[b].h=-1*l[b].h,l[b].i=-1*
l[b].i,d+=10,0===d%100&&f++));c.strokeStyle="#fff";c.beginPath();c.arc(k.x,k.y,k.b,k.g-Math.PI/4,k.g+Math.PI/4);c.stroke();c.fillStyle="#fff";c.font="26px Arial";c.fillText(d,20,40);h||c.fillText("BOOM",360,240);requestAnimationFrame(u)};
