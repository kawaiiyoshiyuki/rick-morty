(this["webpackJsonprick-morty"]=this["webpackJsonprick-morty"]||[]).push([[0],{29:function(e,t,n){"use strict";n.r(t);var a=n(0),i=n.n(a);t.default=function(e){var t=e.episodes,n=e.store,a=e.toggleFavAction,r=e.favourites,c=n.state,o=n.dispatch;return t.map((function(e){return i.a.createElement("section",{key:e.id,className:"episode-box"},e.image&&i.a.createElement("img",{src:e.image.medium,alt:"Rick and Morty ".concat(e.name)}),i.a.createElement("div",null,e.name),i.a.createElement("section",null,i.a.createElement("div",null,"Season: ",e.season," Number: ",e.number),i.a.createElement("button",{type:"button",className:"btn",onClick:function(){return a(c,e,o)}},r.find((function(t){return t.id===e.id}))?"unafav":"fav")))}))}}}]);
//# sourceMappingURL=0.8b794f5a.chunk.js.map