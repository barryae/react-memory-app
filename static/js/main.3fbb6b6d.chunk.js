(this["webpackJsonpclicky-game"]=this["webpackJsonpclicky-game"]||[]).push([[0],{26:function(e,t,a){e.exports=a.p+"static/media/bird1.ac3a0411.jpg"},27:function(e,t,a){e.exports=a.p+"static/media/bird2.3389cb2d.jpg"},28:function(e,t,a){e.exports=a.p+"static/media/bird3.7354752b.png"},29:function(e,t,a){e.exports=a.p+"static/media/bird4.63873b65.jpg"},30:function(e,t,a){e.exports=a.p+"static/media/bird5.a31f782d.jpg"},31:function(e,t,a){e.exports=a.p+"static/media/bird6.36add9e1.jpg"},32:function(e,t,a){e.exports=a.p+"static/media/bird7.34001aaa.jpg"},33:function(e,t,a){e.exports=a.p+"static/media/bird8.22b16a2d.jpg"},34:function(e,t,a){e.exports=a.p+"static/media/bird9.c7dfc338.jpg"},35:function(e,t,a){e.exports=a.p+"static/media/bird10.fb96837e.jpg"},36:function(e,t,a){e.exports=a.p+"static/media/bird11.836a848a.jpg"},37:function(e,t,a){e.exports=a.p+"static/media/bird12.09c3c572.jpg"},42:function(e,t,a){e.exports=a(50)},50:function(e,t,a){"use strict";a.r(t);var i=a(0),n=a.n(i),r=a(24),c=a.n(r),l=a(76),o=a(39),s=a(77),u=a(74),d=a(75),m=a(79),p=a(70),h=a(71);var g=function(){return n.a.createElement("div",null,n.a.createElement(m.a,{position:"static"},n.a.createElement(p.a,null,n.a.createElement(h.a,{variant:"h2",color:"inherit"},"Clicky Game"))))},f=a(17),b=a(9),j=a(18),E=a(19),v=a(20),k=a(73),x=a(38),y=a(72),O=a(78),C=a(26),S=a.n(C),w=a(27),B=a.n(w),F=a(28),G=a.n(F),H=a(29),I=a.n(H),J=a(30),L=a.n(J),M=a(31),N=a.n(M),D=a(32),T=a.n(D),W=a(33),q=a.n(W),z=a(34),A=a.n(z),K=a(35),P=a.n(K),Q=a(36),R=a.n(Q),U=a(37),V=a.n(U),X=[{img:S.a,title:"bird1",cols:1},{img:B.a,title:"bird2",cols:1},{img:G.a,title:"bird3",cols:1},{img:I.a,title:"bird4",cols:1},{img:L.a,title:"bird5",cols:1},{img:N.a,title:"bird6",cols:1},{img:T.a,title:"bird7",cols:1},{img:q.a,title:"bird8",cols:1},{img:A.a,title:"bird9",cols:1},{img:P.a,title:"bird10",cols:1},{img:R.a,title:"bird11",cols:1},{img:V.a,title:"bird12",cols:1}],Y=Object(x.a)((function(e){return{root:{display:"flex",flexWrap:"wrap",justifyContent:"space-around",overflow:"hidden",backgroundColor:e.palette.background.paper},gridList:{width:100,height:100}}})),Z=function(e){function t(e){var a;return Object(f.a)(this,t),(a=Object(j.a)(this,Object(E.a)(t).call(this,e))).state={chosenBirds:[],score:0,highScore:0},a}return Object(v.a)(t,e),Object(b.a)(t,[{key:"shuffle",value:function(e){for(var t=e.length-1;t>0;t--){var a=Math.floor(Math.random()*(t+1)),i=e[t];e[t]=e[a],e[a]=i}}},{key:"handleClick",value:function(e,t){t.preventDefault(),this.state.chosenBirds.includes(e)?(this.state.score>this.state.highScore&&this.setState((function(e){return{highScore:e.score}})),this.setState((function(e){return{chosenBirds:[],score:0}})),alert("Game Over"),this.shuffle(X)):(console.log("Correct!"),this.setState((function(t){return console.log(e),{chosenBirds:t.chosenBirds+=e,score:t.score+=1}})),this.shuffle(X))}},{key:"render",value:function(){var e=this;return n.a.createElement(n.a.Fragment,null,n.a.createElement("div",null,n.a.createElement("h2",null,"Instructions"),n.a.createElement("p",null,"Try to click on each image without clicking the same one twice!")),n.a.createElement("div",null,n.a.createElement("h3",null,"High Score:",this.state.highScore),n.a.createElement("h3",null,"Current Score:",this.state.score)),n.a.createElement("div",{className:Y.root},n.a.createElement(y.a,{cellHeight:250,className:Y.gridList,cols:3},X.map((function(t){return n.a.createElement(O.a,{onClick:function(a){return e.handleClick(t.title,a)},key:t.img,cols:t.cols||1},n.a.createElement("img",{src:t.img,alt:t.title}))})))))}}]),t}(i.Component),$=function(e){function t(){return Object(f.a)(this,t),Object(j.a)(this,Object(E.a)(t).apply(this,arguments))}return Object(v.a)(t,e),Object(b.a)(t,[{key:"render",value:function(){return n.a.createElement(k.a,null,n.a.createElement(Z,null))}}]),t}(i.Component),_=Object(o.a)({palette:{primary:u.a,secondary:d.a}});var ee=function(){return n.a.createElement(n.a.Fragment,null,n.a.createElement(l.a,null),n.a.createElement(s.a,{theme:_},n.a.createElement(g,null),n.a.createElement($,null)))};c.a.render(n.a.createElement(ee,null),document.getElementById("root"))}},[[42,1,2]]]);
//# sourceMappingURL=main.3fbb6b6d.chunk.js.map