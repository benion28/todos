(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{36:function(e,t,n){e.exports=n(63)},41:function(e,t,n){},63:function(e,t,n){"use strict";n.r(t);var o=n(0),a=n.n(o),r=n(31),c=n.n(r),l=n(19),i=n(7),d=n(8),s=n(10),u=n(9),p=n(11),m=(n(41),function(e){function t(){var e,n;Object(i.a)(this,t);for(var o=arguments.length,a=new Array(o),r=0;r<o;r++)a[r]=arguments[r];return(n=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(a)))).getStyle=function(){return{backgroundColor:"#f4f4f4",padding:"10px",borderBottom:"1px #ccc dotted",textDecoration:n.props.todo.completed?"line-through":"none"}},n}return Object(p.a)(t,e),Object(d.a)(t,[{key:"render",value:function(){var e=this.props.todo,t=e.id,n=e.title;return a.a.createElement("div",{style:this.getStyle()},a.a.createElement("p",null,a.a.createElement("input",{type:"checkbox",onChange:this.props.markComplete.bind(this,t)})," ",n,a.a.createElement("button",{style:f,onClick:this.props.deleteTodo.bind(this,t)},"Delete")))}}]),t}(o.Component)),f={background:"#ff0000",color:"#fff",border:"none",padding:"5px 10px",borderRadius:"50%",cursor:"pointer",float:"right"},h=m,b=function(e){function t(){return Object(i.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(d.a)(t,[{key:"render",value:function(){var e=this;return this.props.todos.map(function(t){return a.a.createElement(h,{key:t.id,todo:t,markComplete:e.props.markComplete,deleteTodo:e.props.deleteTodo})})}}]),t}(o.Component),y=n(16),j={background:"#333",color:"#fff",textAlign:"center",padding:"10px"},E={color:"#fff",textDecoration:"none"},g=function(){return a.a.createElement("header",{style:j},a.a.createElement("h1",null,"Todo Lists"),a.a.createElement(y.Link,{style:E,to:"/"},"Home")," ","|"," ",a.a.createElement(y.Link,{style:E,to:"/about"},"About"))},v=n(34),O=function(e){function t(){var e,n;Object(i.a)(this,t);for(var o=arguments.length,a=new Array(o),r=0;r<o;r++)a[r]=arguments[r];return(n=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(a)))).state={title:" "},n.onChange=function(e){n.setState(Object(v.a)({},e.target.name,e.target.value))},n.onSubmit=function(e){e.preventDefault(),n.props.addTodo(n.state.title),n.setState({title:" "})},n}return Object(p.a)(t,e),Object(d.a)(t,[{key:"render",value:function(){return a.a.createElement("form",{onSubmit:this.onSubmit,style:{display:"flex"}},a.a.createElement("input",{type:"text",name:"title",style:{flex:"10",padding:"5px"},placeholder:"Type In Todo Here",value:this.state.title,onChange:this.onChange}),a.a.createElement("input",{type:"submit",value:"Add Todo",className:"btn",style:{flex:"1"}}))}}]),t}(o.Component),k=n(35),T=n(6),x=function(){return a.a.createElement(a.a.Fragment,null,a.a.createElement("h1",null,"About"),a.a.createElement("p",null,"This Is The Todo Lists...."))},C=n(15),S=n.n(C),w=function(e){function t(){var e,n;Object(i.a)(this,t);for(var o=arguments.length,a=new Array(o),r=0;r<o;r++)a[r]=arguments[r];return(n=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(a)))).state={todos:[]},n.markComplete=function(e){n.setState({todos:n.state.todos.map(function(t){return t.id===e&&(t.completed=!t.completed),t})})},n.deleteTodo=function(e){S.a.delete("https://jsonplaceholder.typicode.com/todos/".concat(e)).then(function(t){return n.setState({todos:Object(l.a)(n.state.todos.filter(function(t){return t.id!==e}))})})},n.addTodo=function(e){S.a.post("https://jsonplaceholder.typicode.com/todos",{title:e,completed:!1}).then(function(e){return n.setState({todos:[].concat(Object(l.a)(n.state.todos),[e.data])})})},n}return Object(p.a)(t,e),Object(d.a)(t,[{key:"componentDidMount",value:function(){var e=this;S.a.get("https://jsonplaceholder.typicode.com/todos?_limit=10").then(function(t){return e.setState({todos:t.data})})}},{key:"render",value:function(){var e=this;return a.a.createElement(k.a,null,a.a.createElement("div",{className:"App"},a.a.createElement("div",{className:"container"},a.a.createElement(g,null),a.a.createElement(T.Route,{exact:!0,path:"/",render:function(t){return a.a.createElement(a.a.Fragment,null,a.a.createElement(O,{addTodo:e.addTodo}),a.a.createElement(b,{todos:e.state.todos,markComplete:e.markComplete,deleteTodo:e.deleteTodo}))}}),a.a.createElement(T.Route,{path:"/about",component:x}))))}}]),t}(o.Component);c.a.render(a.a.createElement(w,null),document.getElementById("root"))}},[[36,1,2]]]);
//# sourceMappingURL=main.b81f7c7b.chunk.js.map