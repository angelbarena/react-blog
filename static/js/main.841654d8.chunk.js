(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{128:function(e,t,a){"use strict";a.r(t);a(86),a(89);var n=a(1),o=a.n(n),r=a(77),c=a.n(r),s=a(15),l=a(6),i=a(133),p=a(134),u=a(135),m=a(79),d=a.n(m),h=a(132),b=a(53),f=a(80),y=a(46),v=a.n(y),E=a(48),j=a.n(E),O="fetch_posts",g="fetch_post",k="create_post",N="delete_post",P="http://reduxblog.herokuapp.com/api",w="?key=AJW3EWORMKF";var C=Object(l.c)({posts:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case N:return v.a.omit(e,t.payload);case g:return Object(f.a)({},e,Object(b.a)({},t.payload.data.id,t.payload.data));case O:return v.a.mapKeys(t.payload.data,"id");default:return e}},form:h.a}),x=a(34),F=a(35),S=a(38),D=a(36),_=a(41),J=a(129),M=function(e){function t(){return Object(x.a)(this,t),Object(S.a)(this,Object(D.a)(t).apply(this,arguments))}return Object(_.a)(t,e),Object(F.a)(t,[{key:"componentDidMount",value:function(){this.props.fetchPosts()}},{key:"renderPosts",value:function(){return v.a.map(this.props.posts,function(e){return o.a.createElement("li",{className:"list-group-item",key:e.id},o.a.createElement(J.a,{to:"/posts/".concat(e.id)},e.title))})}},{key:"render",value:function(){return o.a.createElement("div",{className:"m-3"},o.a.createElement("h3",null,"Posts"),o.a.createElement("div",{className:"mb-2 mt-2"},o.a.createElement(J.a,{className:"btn btn-primary",to:"/posts/new"},"Add a Post")),o.a.createElement("ul",{className:"list-group"},this.renderPosts()))}}]),t}(n.Component);var A=Object(s.b)(function(e){return{posts:e.posts}},{fetchPosts:function(){var e=j.a.get("".concat(P,"/posts").concat(w));return{type:O,payload:e}}})(M),K=a(131),T=a(130),W=function(e){function t(){return Object(x.a)(this,t),Object(S.a)(this,Object(D.a)(t).apply(this,arguments))}return Object(_.a)(t,e),Object(F.a)(t,[{key:"renderField",value:function(e){var t=e.meta,a=t.touched,n=t.error,r="form-group ".concat(a&&n?"has-danger":"");return o.a.createElement("div",{className:r},o.a.createElement("label",null,e.label),o.a.createElement("input",Object.assign({className:"form-control",type:"text"},e.input)),o.a.createElement("div",{className:"text-help"},a?n:""))}},{key:"onSubmit",value:function(e){var t=this;this.props.createPost(e,function(){t.props.history.push("/")})}},{key:"render",value:function(){var e=this.props.handleSubmit;return o.a.createElement("form",{className:"m-3",onSubmit:e(this.onSubmit.bind(this))},o.a.createElement(K.a,{label:"Title for Post",name:"title",component:this.renderField}),o.a.createElement(K.a,{label:"Categories",name:"categories",component:this.renderField}),o.a.createElement(K.a,{label:"Post content",name:"content",component:this.renderField}),o.a.createElement("button",{type:"submit",className:"btn btn-primary mr-2"},"Submit"),o.a.createElement(J.a,{to:"/",className:"btn btn-danger"},"Cancel"))}}]),t}(n.Component);var q=Object(T.a)({validate:function(e){var t={};return e.title||(t.title="Enter a title"),e.categories||(t.categories="Enter some categories"),e.content||(t.content="Enter some content please"),t},form:"PostsNewForm"})(Object(s.b)(null,{createPost:function(e,t){var a=j.a.post("".concat(P,"/posts").concat(w),e).then(function(){return t()});return{type:k,payload:a}}})(W)),B=function(e){function t(){return Object(x.a)(this,t),Object(S.a)(this,Object(D.a)(t).apply(this,arguments))}return Object(_.a)(t,e),Object(F.a)(t,[{key:"componentDidMount",value:function(){var e=this.props.match.params.id;this.props.fetchPost(e)}},{key:"onDeleteClick",value:function(){var e=this,t=this.props.match.params.id;this.props.deletePost(t,function(){e.props.history.push("/")})}},{key:"render",value:function(){var e=this.props.post;return e?o.a.createElement("div",{className:"m-3"},o.a.createElement(J.a,{to:"/"},"Back To Index"),o.a.createElement("button",{className:"btn btn-danger ml-5",onClick:this.onDeleteClick.bind(this)},"Delete Post"),o.a.createElement("h1",{className:"mt-3"},e.title),o.a.createElement("h6",null,"Categories: ",e.categories),o.a.createElement("p",null,e.content)):o.a.createElement("div",null,"Loading...")}}]),t}(n.Component);var I=Object(s.b)(function(e,t){return{post:e.posts[t.match.params.id]}},{fetchPost:function(e){var t=j.a.get("".concat(P,"/posts/").concat(e).concat(w));return{type:g,payload:t}},deletePost:function(e,t){return j.a.delete("".concat(P,"/posts/").concat(e).concat(w)).then(function(){return t()}),{type:N,payload:e}}})(B),L=Object(l.a)(d.a)(l.d);c.a.render(o.a.createElement(s.a,{store:L(C)},o.a.createElement(i.a,null,o.a.createElement("div",{className:"d-flex justify-content-center"},o.a.createElement(p.a,null,o.a.createElement(u.a,{path:"/posts/new",component:q}),o.a.createElement(u.a,{path:"/posts/:id",component:I}),o.a.createElement(u.a,{path:"/",component:A}))))),document.querySelector("#root"))},85:function(e,t,a){e.exports=a(128)}},[[85,2,1]]]);
//# sourceMappingURL=main.841654d8.chunk.js.map