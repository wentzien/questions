(this.webpackJsonpquestionvotes=this.webpackJsonpquestionvotes||[]).push([[0],{113:function(e,t){},122:function(e,t,n){},123:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(59),c=n.n(o),i=n(24),s=(n(70),n(3)),u=n(4),l=n(6),m=n(5),v=n(1),h=n(16),p=n(64),d=n(12),f=n.n(d),b=n(26),j=n(60),y=n.n(j),O=n(61),E=n.n(O),g=n(17),q=n(62),k=n(27),w=n.n(k),S=function(e){Object(l.a)(n,e);var t=Object(m.a)(n);function n(){var e;Object(s.a)(this,n);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={question:{question:""},errors:{}},e.schema={question:w.a.string().min(3).max(512).required().label("Question")},e.joiSchema=w.a.object(e.schema),e.validate=function(){var t=e.joiSchema.validate(e.state.question,{abortEarly:!1});if(!t.error)return null;var n,a={},r=Object(q.a)(t.error.details);try{for(r.s();!(n=r.n()).done;){var o=n.value;a[o.path[0]]=o.message}}catch(c){r.e(c)}finally{r.f()}return a},e.validateProperty=function(t){var n=t.name,a=t.value,r=Object(g.a)({},n,a),o=Object(g.a)({},n,e.schema[n]),c=w.a.object(o).validate(r).error;return c?c.details[0].message:null},e.handleSubmit=function(t){t.preventDefault();var n=e.validate();e.setState({errors:n||{}}),n||e.callServer()},e.callServer=function(){var t=e.state.question.question;e.props.onSubmit(t),e.setState({question:{question:""}})},e.handleChange=function(t){var n=t.currentTarget,a=Object(h.a)({},e.state.errors),r=e.validateProperty(n);r?a[n.name]=r:delete a[n.name];var o=Object(h.a)({},e.state.question);o[n.name]=n.value,e.setState({question:o,errors:a})},e}return Object(u.a)(n,[{key:"render",value:function(){return r.a.createElement("div",{className:"card"},r.a.createElement("div",{className:"card-body"},r.a.createElement("form",{onSubmit:this.handleSubmit},r.a.createElement("div",{className:"form-group"},r.a.createElement("textarea",{value:this.state.question.question,onChange:this.handleChange,type:"text",className:"form-control",name:"question",id:"frage","aria-describedby":"frageHilfe"}),this.state.errors.question&&r.a.createElement("div",{className:"alert alert-danger"},this.state.errors.question)),r.a.createElement("span",{className:"float left"},"Stell uns deine Frage"),r.a.createElement("button",{disabled:this.validate(),type:"submit",className:"btn btn-primary float-right",style:{width:"150px"}},"Senden"))))}}]),n}(a.Component),x=function(e){Object(l.a)(n,e);var t=Object(m.a)(n);function n(){var e;Object(s.a)(this,n);for(var a=arguments.length,o=new Array(a),c=0;c<a;c++)o[c]=arguments[c];return(e=t.call.apply(t,[this].concat(o))).renderIcon=function(e){return localStorage.getItem(e.id)?r.a.createElement("i",{className:"fa fa-heart"}):r.a.createElement("i",{className:"fa fa-heart-o"})},e}return Object(u.a)(n,[{key:"render",value:function(){var e=this.props,t=e.data,n=e.onVote;return r.a.createElement("div",{className:"card"},r.a.createElement("div",{className:"card-body"},r.a.createElement("div",null,t.question),r.a.createElement("div",{className:"mx-auto",onClick:function(){return n(t)},style:{cursor:"pointer",maxWidth:"50px"}},this.renderIcon(t)," ",t.votes)))}}]),n}(a.Component),N=function(e){Object(l.a)(n,e);var t=Object(m.a)(n);function n(){return Object(s.a)(this,n),t.apply(this,arguments)}return Object(u.a)(n,[{key:"render",value:function(){var e=this.props,t=e.questions,n=e.onVote;return t.map((function(e){return r.a.createElement(x,{key:e.id,data:e,onVote:n})}))}}]),n}(a.Component),C=function(e){Object(l.a)(n,e);var t=Object(m.a)(n);function n(){var e;Object(s.a)(this,n);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={questions:[]},e.urlApi="https://api.originjump.com",e.newQuestion=function(){var t=Object(b.a)(f.a.mark((function t(n){var a,r;return f.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:a=e.props.match.params.id,r={question:n,event_id:a},e.socket.emit("newQuestion",r);case 3:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),e.voteQuestion=function(){var t=Object(b.a)(f.a.mark((function t(n){return f.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,y.a.put(e.urlApi+"/questions/"+n);case 2:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),e.handleVote=function(t){if(!localStorage.getItem(t.id)){var n=Object(p.a)(e.state.questions),a=n.indexOf(t);(t=Object(h.a)({},n[a])).votes++,n[a]=t,e.setState({questions:n}),localStorage.setItem(t.id,!0),e.socket.emit("vote",t)}},e}return Object(u.a)(n,[{key:"componentDidMount",value:function(){var e=Object(b.a)(f.a.mark((function e(){var t,n=this;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:this.socket=E()(this.urlApi),t=this.props.match.params.id,this.socket.emit("join",{id:t},(function(e){e.sort((function(e,t){return t.votes-e.votes})),n.setState({questions:e})})),this.socket.on("questions",(function(e){e.sort((function(e,t){return t.votes-e.votes})),n.setState({questions:e})}));case 4:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"componentWillUnmount",value:function(){this.socket.emit("disconnect"),this.socket.off()}},{key:"render",value:function(){var e=this.state.questions;return r.a.createElement("div",{className:"App"},r.a.createElement(S,{onSubmit:this.newQuestion}),r.a.createElement(N,{questions:e,onVote:this.handleVote}))}}]),n}(a.Component),A=function(e){Object(l.a)(n,e);var t=Object(m.a)(n);function n(){return Object(s.a)(this,n),t.apply(this,arguments)}return Object(u.a)(n,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("h1",null,"Veranstaltung verwalten"))}}]),n}(a.Component),I=function(e){Object(l.a)(n,e);var t=Object(m.a)(n);function n(){return Object(s.a)(this,n),t.apply(this,arguments)}return Object(u.a)(n,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("h1",{style:{margin:"20px"}},"Not Found"))}}]),n}(a.Component),V=function(e){Object(l.a)(n,e);var t=Object(m.a)(n);function n(){var e;Object(s.a)(this,n);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={redirect:""},e.handleNewEvent=function(){var t=e.generateId();e.setState({redirect:"/events/"+t})},e.generateId=function(){for(var e="",t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=t.length,a=0;a<24;a++)e+=t.charAt(Math.floor(Math.random()*n));return e},e}return Object(u.a)(n,[{key:"render",value:function(){var e=this.state.redirect;return r.a.createElement("div",{style:{display:"flex",justifyContent:"center",alignItems:"center"}},r.a.createElement("button",{style:{width:"700px",marginTop:"50px"},className:"btn btn-primary",onClick:this.handleNewEvent},"Neues Event"),e?r.a.createElement(v.a,{to:e}):"")}}]),n}(a.Component),Q=function(e){Object(l.a)(n,e);var t=Object(m.a)(n);function n(){return Object(s.a)(this,n),t.apply(this,arguments)}return Object(u.a)(n,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(v.d,null,r.a.createElement(v.b,{path:"/events/:id",component:C}),r.a.createElement(v.b,{path:"/admin",component:A}),r.a.createElement(v.b,{path:"/404",component:I}),r.a.createElement(v.b,{path:"/",component:V}),r.a.createElement(v.b,{exact:!0,path:"/*"},r.a.createElement(v.a,{to:"/404"}))))}}]),n}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));n(120),n(121),n(122);c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(i.a,null,r.a.createElement(Q,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},65:function(e,t,n){e.exports=n(123)},70:function(e,t,n){}},[[65,1,2]]]);
//# sourceMappingURL=main.81178fa7.chunk.js.map