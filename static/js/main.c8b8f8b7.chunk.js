(this["webpackJsonpemployee-directory"]=this["webpackJsonpemployee-directory"]||[]).push([[0],{23:function(e,t,n){},25:function(e,t,n){},47:function(e,t,n){"use strict";n.r(t);var r=n(2),c=n(12),s=n.n(c),a=n(13),l=n(14),i=n(18),o=n(17),h=(n(23),n(0));var u=function(){return Object(h.jsx)("div",{className:"bg-light header",children:Object(h.jsx)("h2",{children:"Employee Directory"})})};n(25);var j=function(e){return Object(h.jsx)("form",{className:"search",children:Object(h.jsx)("div",{className:"form-group",children:Object(h.jsx)("input",{value:e.value,onChange:e.handleInputChange,name:"search",list:"breeds",type:"text",placeholder:"Search by name",id:"search"},e.id)})})};var d=function(e){return Object(h.jsx)("thead",{children:Object(h.jsxs)("tr",{children:[Object(h.jsx)("th",{scope:"col",children:"Image"}),Object(h.jsx)("th",{scope:"col",onClick:e.handleSort,children:"Name"}),Object(h.jsx)("th",{scope:"col",children:"Phone"}),Object(h.jsx)("th",{scope:"col",children:"Email"}),Object(h.jsx)("th",{scope:"col",children:"DOB"})]})})},b=n(15),m=n.n(b);var p=function(e){return Object(h.jsx)("tbody",{children:e.results&&e.results.map((function(e){return Object(h.jsxs)("tr",{children:[Object(h.jsx)("td",{children:Object(h.jsx)("img",{alt:"thumbnail",src:e.picture.thumbnail})}),Object(h.jsxs)("td",{children:[e.name.first," ",e.name.last]}),Object(h.jsx)("td",{children:e.phone}),Object(h.jsx)("td",{children:e.email}),Object(h.jsx)("td",{children:Object(h.jsx)(m.a,{format:"MM/DD/YYYY",children:e.dob.date})})]},e.index)}))})},O=n(16),x=n.n(O),f=function(){return x.a.get("https://randomuser.me/api/?nat=us&results=25&inc=name,phone,email,dob,picture")},v=function(e){Object(i.a)(n,e);var t=Object(o.a)(n);function n(){var e;Object(a.a)(this,n);for(var r=arguments.length,c=new Array(r),s=0;s<r;s++)c[s]=arguments[s];return(e=t.call.apply(t,[this].concat(c))).state={search:"",results:[]},e.getEmployees=function(){f().then((function(t){return e.setState({results:t.data.results})})).catch((function(e){return console.log(e)}))},e.handleInputChange=function(t){var n=t.target.value,r=e.state.results.filter((function(e){return e.name.first.includes(n)}));e.setState({search:n,results:r})},e.handleSort=function(t){t.preventDefault();var n=e.state.results.sort((function(e,t){return e.name.first.localeCompare(t.name.first)}));e.setState({results:n})},e}return Object(l.a)(n,[{key:"componentDidMount",value:function(){this.getEmployees()}},{key:"render",value:function(){return Object(h.jsxs)("div",{children:[Object(h.jsx)(u,{}),Object(h.jsx)(j,{name:"search",value:this.state.search,handleInputChange:this.handleInputChange}),Object(h.jsx)("div",{className:"container",children:Object(h.jsxs)("table",{className:"table table-striped",children:[Object(h.jsx)(d,{handleSort:this.handleSort}),Object(h.jsx)(p,{results:this.state.results})]})})]})}}]),n}(r.Component);var g=function(){return Object(h.jsx)("div",{children:Object(h.jsx)(v,{})})};n(46);s.a.render(Object(h.jsx)(g,{}),document.getElementById("root"))}},[[47,1,2]]]);
//# sourceMappingURL=main.c8b8f8b7.chunk.js.map