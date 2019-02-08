(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{37:function(e,t,n){e.exports=n(67)},67:function(e,t,n){"use strict";n.r(t);var a=n(1),r=n.n(a),o=n(10),c=n.n(o),i=n(11),l=n(12),u=n(16),s=n(13),d=n(17),h=n(73),m=n(74),p=n(75),v=n(31),b=n.n(v),f=n(8),E=n(68),g=n(69),w=n(70),y=n(71),j=n(9);function O(){var e=Object(f.a)(["\n    position: relative;\n"]);return O=function(){return e},e}function k(){var e=Object(f.a)(["\n    color: gray;\n    font-weight: 900;\n    font-size: 24px;\n    position: absolute;\n    top: 0;\n    right: 5px;\n    cursor: pointer;\n\n    :hover {\n        color: #4fcec6;\n    }\n"]);return k=function(){return e},e}var V=j.a.span(k()),x=Object(j.a)(E.a)(O()),S=function(e){function t(){var e,n;Object(i.a)(this,t);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(n=Object(u.a)(this,(e=Object(s.a)(t)).call.apply(e,[this].concat(r)))).state={search:""},n.handleInputChange=function(e){var t=e.target.value;n.setState({search:t}),n.props.searchYouTube(t)},n}return Object(d.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement(g.a,{onSubmit:function(e){return e.preventDefault()}},r.a.createElement(x,null,r.a.createElement(w.a,{for:"search",hidden:!0},"Search"),r.a.createElement(y.a,{type:"text",name:"search",id:"search",placeholder:"What would you like to search for?",value:this.state.search,onChange:this.handleInputChange}),r.a.createElement(V,{onClick:function(){return e.setState({search:""})}},"X")))}}]),t}(a.Component),T=function(e){var t=e.video;if(!t)return r.a.createElement("p",null,"Loading spinner goes here...");console.log(t);var n=t.id.videoId,a="https://www.youtube.com/embed/".concat(n,"?rel=0");return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"embed-responsive embed-responsive-16by9"},r.a.createElement("iframe",{className:"embed-responsive-item",src:a,allowFullScreen:!0})),r.a.createElement("h2",null,t.snippet.title),r.a.createElement("p",null,t.snippet.description))},I=n(72);function C(){var e=Object(f.a)(["\n    color: #37908a;\n    border-radius: 25px;\n"]);return C=function(){return e},e}var Y=Object(j.a)(I.a)(C()),N=function(e){return r.a.createElement("div",null,r.a.createElement(Y,null,r.a.createElement(h.a,null,r.a.createElement("h1",{className:"display-3"},r.a.createElement("strong",null,"React-YouTube")),r.a.createElement("p",{className:"lead"},"YouTube search application built with React. Search a keyword to get started."))))};function R(){var e=Object(f.a)(["\n    img {\n        border: ","; \n        width: 200px;\n        margin-bottom: 15px;\n        cursor: pointer;\n        border-radius: 5px;\n\n        :hover {\n            border-color: #1531b7;\n        }\n    }\n"]);return R=function(){return e},e}function W(){var e=Object(f.a)(["\n    padding: 0;\n    list-style-type: none;\n"]);return W=function(){return e},e}var A=j.a.ul(W()),B=j.a.li(R(),function(e){return e.active?"3px solid #4fcec6":"3px solid #b9b9b9"}),J=function(e){return r.a.createElement(A,null,e.children)},M=function(e){var t=e.video,n=e.selectedVideo,a=e.selectVideo;return r.a.createElement(B,{active:t===n,onClick:function(){return a(t)}},r.a.createElement("img",{src:t.snippet.thumbnails.medium.url}))},z=n(35),D=n.n(z),F={searchVideos:function(e){return D.a.get("https://www.googleapis.com/youtube/v3/search",{params:{key:"AIzaSyBTTxprPNI4u3hpR-2W9JVpMae_ehutaiM",part:"snippet",q:e,maxResults:8}})}},q=function(e){function t(){var e,n;Object(i.a)(this,t);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(n=Object(u.a)(this,(e=Object(s.a)(t)).call.apply(e,[this].concat(r)))).state={videos:[],selectedVideo:null},n.searchYouTube=function(e){F.searchVideos(e).then(function(e){return n.setState({videos:e.data.items,selectedVideo:e.data.items[0]})}).catch(function(e){return console.log(e)})},n.selectVideo=function(e){n.setState({selectedVideo:e})},n.throttledSearch=b.a.debounce(n.searchYouTube,800),n}return Object(d.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){this.searchYouTube("kittens in buckets")}},{key:"render",value:function(){var e=this;return r.a.createElement(h.a,null,r.a.createElement(N,null),r.a.createElement(m.a,null,r.a.createElement(p.a,null,r.a.createElement(S,{searchYouTube:this.throttledSearch}))),r.a.createElement(m.a,null,r.a.createElement(p.a,{md:"9"},r.a.createElement(T,{video:this.state.selectedVideo})),r.a.createElement(p.a,{md:"3"},r.a.createElement(J,null,this.state.videos.map(function(t){return r.a.createElement(M,{video:t,key:t.id.videoId||t.id.playlistId,selectedVideo:e.state.selectedVideo,selectVideo:e.selectVideo})})))))}}]),t}(a.Component);n(65),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(q,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[37,2,1]]]);
//# sourceMappingURL=main.3e3d5ddf.chunk.js.map