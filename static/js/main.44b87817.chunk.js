(this["webpackJsonpsimple-blog_app"]=this["webpackJsonpsimple-blog_app"]||[]).push([[0],{100:function(e,t,a){},101:function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),o=a(18),r=a.n(o),u=a(8),s=a(15),l=a(20),c=a(43),m=a(44),p="GET_POST_START",d="GET_POST_SUCCESS",f="GET_POST_ERROR",b=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0,a=t.type,n=t.payload;switch(a){case d:return n;default:return e}},h=a(52),E="ADD_POST_START",_="ADD_POST_SUCCESS",g="ADD_POST_ERROR",O="DELETE_POST_START",v="DELETE_POST_SUCCESS",y="DELETE_POST_ERROR",T=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0,a=t.type,n=t.payload;switch(a){case _:return[n].concat(Object(h.a)(e));case v:return e.filter((function(e){return e.id!==n}));default:return e}},S="FETCH_POSTS_ALL_START",P="FETCH_POSTS_ALL_SUCCESS",C="FETCH_POSTS_ALL_ERROR",q=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0,a=t.type,n=t.payload;switch(a){case P:return n;default:return e}},j="isLoading/LOADER_ON",A="isLoading/LOADER_OFF",R=function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=arguments.length>1?arguments[1]:void 0,a=t.type;switch(a){case j:case E:case O:case S:case p:return!0;case A:case _:case g:case v:case y:case P:case C:case d:case f:return!1;default:return e}},N=Object(l.combineReducers)({postId:b,postNew:T,postsAll:q,isLoading:R}),x=Object(l.applyMiddleware)(m.a),L=Object(l.createStore)(N,Object(c.composeWithDevTools)(x)),I=a(10),w=a(11),D=a(14),F=a(12),k=a(13),U=a(19),H=a(45),M=a.n(H),B=function(e){return e.isLoading},G=(a(81),a(46)),Q=a.n(G),J={color:"palevioletred"},V=function(){return i.a.createElement("ul",{className:Q.a.navigation},i.a.createElement("li",null,i.a.createElement(s.c,{to:"/home",activeStyle:J},"Home")),i.a.createElement("li",null,i.a.createElement(s.c,{to:"/",exact:!0,activeStyle:J},"Posts")),i.a.createElement("li",null,i.a.createElement(s.c,{to:"/posts/new",activeStyle:J},"Create Post")),i.a.createElement("li",null,i.a.createElement(s.c,{to:"/about",activeStyle:J},"About")))},W=a(48),z=a.n(W),K=function(){return i.a.createElement("h1",{className:z.a.title},"Welcom to Paws online blog")},X=a(31),Y=a.n(X),Z=function(){return i.a.createElement(i.a.Fragment,null,i.a.createElement("h3",{className:Y.a.about},"Fun facts about us"),i.a.createElement("p",{className:Y.a.aboutText},"Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates harum voluptatibus veniam ipsa similique laudantium, soluta ipsum aut dolorem sint libero, iste accusantium magni nihil tenetur error laboriosam placeat consequatur nobis incidunt illum alias laborum! Obcaecati error consequatur inventore exercitationem, facilis, illo facere debitis molestiae sint, perspiciatis voluptas! Molestiae aliquid quasi iure temporibus eum vitae facere consectetur minima possimus voluptate, perspiciatis eaque nulla nam, tempore illo blanditiis cumque repellat! Nulla cum nostrum officiis nemo, quae accusantium veniam reprehenderit aspernatur, sapiente ipsum alias, eius quasi soluta dolores et minima deleniti perspiciatis cumque? Culpa necessitatibus, ipsam soluta molestiae odio fugit ullam animi non. Odio obcaecati alias eligendi sit error ullam fugit consequatur! Minima dolorum, explicabo aliquid magni iste dicta fugiat asperiores sequi cupiditate totam debitis eligendi quas corporis saepe omnis autem voluptatibus itaque veniam a quidem praesentium sint ducimus! Dolorum sapiente harum, tempora quam odio corrupti doloremque beatae nemo dolor sit sint consequatur, facilis et omnis explicabo voluptates! Quia commodi quisquam corrupti animi expedita, sit, iste officiis soluta, incidunt voluptatem nihil! Optio sint commodi expedita. Blanditiis aut mollitia similique vel. Optio vitae fugit in autem aliquam unde! Voluptatem molestiae officia eos quas saepe. Labore quis, facere distinctio, consequatur reiciendis exercitationem unde fugiat laborum cupiditate deleniti officiis nesciunt possimus quae ea laboriosam iure! Asperiores tempore vero nihil libero magnam perspiciatis dolores quis dignissimos nisi sapiente quo praesentium consequuntur officia modi molestias laborum assumenda molestiae optio deleniti, provident deserunt illum voluptatibus nesciunt. Pariatur quis, eum sunt cum deleniti dolores cumque, fugit veritatis quidem dignissimos quas blanditiis nesciunt similique. Aut similique iusto nemo, a eaque distinctio enim corrupti dicta, exercitationem mollitia tempore sunt recusandae voluptate optio. Voluptatem veniam iste neque cupiditate ipsa. Cupiditate magnam illum enim quia saepe accusantium veritatis debitis laborum molestiae est, tempore placeat voluptatibus nobis minima voluptate ducimus repudiandae natus quibusdam praesentium?"))},$=a(24),ee=a.n($),te=function(e){function t(){var e,a;Object(I.a)(this,t);for(var n=arguments.length,i=new Array(n),o=0;o<n;o++)i[o]=arguments[o];return(a=Object(D.a)(this,(e=Object(F.a)(t)).call.apply(e,[this].concat(i)))).state={},a}return Object(k.a)(t,e),Object(w.a)(t,[{key:"componentDidMount",value:function(){(0,this.props.getPostsAll)()}},{key:"render",value:function(){var e=this.props.postsAll;return i.a.createElement(i.a.Fragment,null,i.a.createElement("ul",{className:ee.a.list},e.map((function(e){return i.a.createElement("li",{key:e.id,className:ee.a.item},i.a.createElement(s.b,{to:"/posts/".concat(e.id)},i.a.createElement("h3",{className:ee.a.itemTitle},e.title),i.a.createElement("p",{className:ee.a.itemBody},e.body)))}))))}}]),t}(n.Component),ae=a(5),ne=a(17),ie=a.n(ne);ie.a.defaults.headers.post["Content-Type"]="application/json",ie.a.defaults.headers.get["Content-Type"]="application/json",ie.a.defaults.headers.put["Content-Type"]="application/json",ie.a.defaults.baseURL="https://simple-blog-api.crew.red";ae.a.configure({autoClose:5e3,draggable:!1});var oe=function(e){return e.postsAll},re={getPostsAll:function(){return function(e){e({type:"FETCH_POSTS_ALL_START"}),ie.a.get("/posts").then((function(t){e({type:"FETCH_POSTS_ALL_SUCCESS",payload:t.data})})).catch((function(t){return ae.a.error("\u0421\u0442\u0430\u043b\u0430\u0441\u044f \u043f\u043e\u043c\u0438\u043b\u043a\u0430. \u0421\u0435\u0440\u0432\u0456\u0441 \u0442\u0438\u043c\u0447\u0430\u0441\u043e\u0432\u043e \u043d\u0435\u0434\u043e\u0441\u0442\u0443\u043f\u043d\u0438\u0439. \u0421\u043f\u0440\u043e\u0431\u0443\u0439\u0442\u0435, \u0431\u0443\u0434\u044c-\u043b\u0430\u0441\u043a\u0430, \u043f\u0456\u0437\u043d\u0456\u0448\u0435",{position:ae.a.POSITION.TOP_CENTER,className:"foo-bar"}),e(function(e){return{type:"FETCH_POSTS_ALL_ERROR",payload:e}}(t))}))}}},ue=Object(u.b)((function(e){return{postsAll:oe(e)}}),re)(te),se=function(){return i.a.createElement(i.a.Fragment,null,i.a.createElement(ue,null))};ae.a.configure({autoClose:5e3,draggable:!1});var le=function(e){return function(t){t({type:"GET_POST_START"}),function(e){return ie.a.get("/posts/".concat(e))}(e).then((function(e){t({type:"GET_POST_SUCCESS",payload:e.data})})).catch((function(e){return ae.a.error("\u0421\u0442\u0430\u043b\u0430\u0441\u044f \u043f\u043e\u043c\u0438\u043b\u043a\u0430. \u0421\u0435\u0440\u0432\u0456\u0441 \u0442\u0438\u043c\u0447\u0430\u0441\u043e\u0432\u043e \u043d\u0435\u0434\u043e\u0441\u0442\u0443\u043f\u043d\u0438\u0439. \u0421\u043f\u0440\u043e\u0431\u0443\u0439\u0442\u0435, \u0431\u0443\u0434\u044c-\u043b\u0430\u0441\u043a\u0430, \u043f\u0456\u0437\u043d\u0456\u0448\u0435",{position:ae.a.POSITION.TOP_CENTER,className:"foo-bar"}),t(function(e){return{type:"GET_POST_ERROR",payload:e}}(e))}))}},ce=a(21),me=a.n(ce),pe=function(e){var t=e.postId,a=t.title,n=t.body,o=t.id,r=e.onReturn,u=e.onRemove;return i.a.createElement("div",{className:me.a.container},i.a.createElement("button",{type:"button",onClick:r,className:me.a.btn},"Return"),i.a.createElement("h2",{className:me.a.title},a),i.a.createElement("p",{className:me.a.text},n),i.a.createElement("button",{className:me.a.btn,type:"button",onClick:function(){return u(o)}},"Delete"))},de=function(e){return e.postId};ae.a.configure({autoClose:5e3,draggable:!1});var fe=function(e){return function(t){t({type:O}),function(e){return ie.a.delete("/posts/".concat(e))}(e).then((function(e){var a;t((a=e.data,{type:v,payload:a}))})).catch((function(e){return ae.a.error("\u0421\u0442\u0430\u043b\u0430\u0441\u044f \u043f\u043e\u043c\u0438\u043b\u043a\u0430. \u0421\u0435\u0440\u0432\u0456\u0441 \u0442\u0438\u043c\u0447\u0430\u0441\u043e\u0432\u043e \u043d\u0435\u0434\u043e\u0441\u0442\u0443\u043f\u043d\u0438\u0439. \u0421\u043f\u0440\u043e\u0431\u0443\u0439\u0442\u0435, \u0431\u0443\u0434\u044c-\u043b\u0430\u0441\u043a\u0430, \u043f\u0456\u0437\u043d\u0456\u0448\u0435",{position:ae.a.POSITION.TOP_CENTER,className:"foo-bar"}),t(function(e){return{type:y,payload:{error:e}}}(e))}))}},be={onRemove:function(e){return fe(e)}},he=Object(u.b)((function(e){return{postId:de(e)}}),be)(pe),Ee=function(e){function t(){var e,a;Object(I.a)(this,t);for(var n=arguments.length,i=new Array(n),o=0;o<n;o++)i[o]=arguments[o];return(a=Object(D.a)(this,(e=Object(F.a)(t)).call.apply(e,[this].concat(i)))).state={},a.getIdFromProps=function(e){return e.match.params.id},a.handleOnReturn=function(){a.props.history.push("/")},a}return Object(k.a)(t,e),Object(w.a)(t,[{key:"componentDidMount",value:function(){var e=this.getIdFromProps(this.props);this.props.getPostId(e)}},{key:"render",value:function(){return i.a.createElement(i.a.Fragment,null,i.a.createElement(he,{onReturn:this.handleOnReturn}))}}]),t}(n.Component),_e={getPostId:le},ge=Object(u.b)(null,_e)(Ee),Oe=a(49),ve=a(50),ye=a.n(ve),Te=function(e){function t(){var e,a;Object(I.a)(this,t);for(var n=arguments.length,i=new Array(n),o=0;o<n;o++)i[o]=arguments[o];return(a=Object(D.a)(this,(e=Object(F.a)(t)).call.apply(e,[this].concat(i)))).state={title:"",body:""},a.handleSubmit=function(e){e.preventDefault(),a.props.addPost(a.state),a.setState({title:"",body:""})},a.handleChange=function(e){var t=e.target,n=t.name,i=t.value;a.setState(Object(Oe.a)({},n,i))},a}return Object(k.a)(t,e),Object(w.a)(t,[{key:"render",value:function(){var e=this.state,t=e.title,a=e.body;return i.a.createElement(i.a.Fragment,null,i.a.createElement("form",{className:ye.a.adForm,onSubmit:this.handleSubmit},i.a.createElement("label",null,"Title"),i.a.createElement("input",{placeholder:"...",onChange:this.handleChange,minLength:"3",required:!0,type:"text",name:"title",value:t}),i.a.createElement("label",null,"Description"),i.a.createElement("textarea",{placeholder:"...",onChange:this.handleChange,required:!0,minLength:"3",type:"text",name:"body",value:a}),i.a.createElement("button",{type:"submit"},"Create post")))}}]),t}(n.Component),Se={addPost:function(e){return function(t){t({type:E}),function(e){return ie.a.post("/posts",e)}(e).then((function(e){t(function(e){return{type:_,payload:e}}(e.data))})).catch((function(e){return ae.a.error("\u0421\u0442\u0430\u043b\u0430\u0441\u044f \u043f\u043e\u043c\u0438\u043b\u043a\u0430. \u0421\u0435\u0440\u0432\u0456\u0441 \u0442\u0438\u043c\u0447\u0430\u0441\u043e\u0432\u043e \u043d\u0435\u0434\u043e\u0441\u0442\u0443\u043f\u043d\u0438\u0439. \u0421\u043f\u0440\u043e\u0431\u0443\u0439\u0442\u0435, \u0431\u0443\u0434\u044c-\u043b\u0430\u0441\u043a\u0430, \u043f\u0456\u0437\u043d\u0456\u0448\u0435",{position:ae.a.POSITION.TOP_CENTER,className:"foo-bar"}),t(function(e){return{type:g,payload:{error:e}}}(e))}))}}},Pe=Object(u.b)(null,Se)(Te),Ce=a(51),qe=a.n(Ce),je=function(e){function t(){var e,a;Object(I.a)(this,t);for(var n=arguments.length,i=new Array(n),o=0;o<n;o++)i[o]=arguments[o];return(a=Object(D.a)(this,(e=Object(F.a)(t)).call.apply(e,[this].concat(i)))).state={},a}return Object(k.a)(t,e),Object(w.a)(t,[{key:"render",value:function(){return i.a.createElement("div",{className:qe.a.container},i.a.createElement(Pe,null))}}]),t}(n.Component),Ae=function(e){function t(){var e,a;Object(I.a)(this,t);for(var n=arguments.length,i=new Array(n),o=0;o<n;o++)i[o]=arguments[o];return(a=Object(D.a)(this,(e=Object(F.a)(t)).call.apply(e,[this].concat(i)))).state={},a}return Object(k.a)(t,e),Object(w.a)(t,[{key:"render",value:function(){var e=this.props.isLoading;return i.a.createElement(i.a.Fragment,null,e&&i.a.createElement(M.a,{type:"ThreeDots",color:"#F39A3E",height:80,width:80,style:{position:"fixed",display:"flex",justifyContent:"center",alignItems:"center",height:"100vh",width:"100%",backgroundColor:"#fff",zIndex:"10"},timeout:0}),i.a.createElement(V,null),i.a.createElement(U.d,null,i.a.createElement(U.b,{path:"/",exact:!0,component:se}),i.a.createElement(U.b,{path:"/home",component:K}),i.a.createElement(U.b,{path:"/posts/new",component:je}),i.a.createElement(U.b,{path:"/posts/:id",component:ge}),i.a.createElement(U.b,{path:"/about",component:Z}),i.a.createElement(U.a,{to:"/home"})))}}]),t}(n.Component),Re=Object(u.b)((function(e){return{isLoading:B(e)}}))(Ae);a(100);r.a.render(i.a.createElement(u.a,{store:L},i.a.createElement(s.a,null,i.a.createElement(Re,null))),document.getElementById("root"))},21:function(e,t,a){e.exports={container:"PostId_container__CBCu-",btn:"PostId_btn__1SUfy",title:"PostId_title__PToHw",text:"PostId_text__20gDW"}},24:function(e,t,a){e.exports={list:"PostsAll_list__2gkMR",item:"PostsAll_item__17eQb",itemTitle:"PostsAll_itemTitle__14Ua5",itemBody:"PostsAll_itemBody__3sper"}},31:function(e,t,a){e.exports={about:"AboutPage_about__11gMD",aboutText:"AboutPage_aboutText__1S5xh"}},46:function(e,t,a){e.exports={navigation:"Navigation_navigation__tomJQ"}},48:function(e,t,a){e.exports={title:"HomePage_title__heAQ8"}},50:function(e,t,a){e.exports={adForm:"PostNew_adForm__2hKsU"}},51:function(e,t,a){e.exports={container:"CreatePostPage_container__1PA1u"}},53:function(e,t,a){e.exports=a(101)}},[[53,1,2]]]);
//# sourceMappingURL=main.44b87817.chunk.js.map