(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{121:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(47),o=a.n(r),i=(a(62),a(2)),s=a(3),c=a(5),d=a(4),m=a(6),u=a(123),p=a(124),h=a(125),v=a(48),f=a.n(v),g=function(e){function t(){return Object(i.a)(this,t),Object(c.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return l.a.createElement("nav",null,l.a.createElement("a",{title:"InstantRCV",href:"/",className:"float-left logo nav-items"},l.a.createElement("span",null,l.a.createElement("img",{alt:"Logo",src:f.a})),l.a.createElement("span",{className:"orange-1"},"Instant"),l.a.createElement("span",{className:"orange-2"},"RCV")),l.a.createElement("div",{className:"float-right nav-items"},l.a.createElement("a",{href:"/new-poll",className:"btn nav-btn"},l.a.createElement("span",null),l.a.createElement("span",null,"Create a Poll"))))}}]),t}(n.Component),E=a(27),b=a.n(E),y=a(28),x=a.n(y),N=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(a=Object(c.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(l)))).state={img1Loaded:!1,img2Loaded:!1},a.img1Loaded=function(){a.setState({img1Loaded:!0});var e=document.getElementById("landing-img-1");e.parentNode.removeChild(e)},a.img2Loaded=function(){a.setState({img2Loaded:!0});var e=document.getElementById("landing-img-2");e.parentNode.removeChild(e)},a.imagesLoaded=function(){return a.state.img1Loaded&&a.state.img2Loaded?" loaded":""},a}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this;return l.a.createElement(n.Fragment,null,l.a.createElement(g,null),l.a.createElement("div",{className:"main-container mc-2 landing-page-container row"},l.a.createElement("div",{className:"landing-col-2 landing-section-1"},l.a.createElement("div",{style:{maxWidth:580,margin:"auto",position:"relative"}},l.a.createElement("img",{alt:"Sun",src:x.a,className:"sun-img landing-img".concat(this.imagesLoaded())}),l.a.createElement("img",{alt:"Voting",src:b.a,width:"100%",className:"landing-img".concat(this.imagesLoaded())}),l.a.createElement("img",{id:"landing-img-1",alt:"Loading",src:x.a,width:"50px",style:{display:"none"},onLoad:function(){return e.img1Loaded()}}),l.a.createElement("img",{id:"landing-img-2",alt:"Loading",src:b.a,width:"50px",style:{display:"none"},onLoad:function(){return e.img2Loaded()}}))),l.a.createElement("div",{className:"landing-col-2 landing-section-2"},l.a.createElement("div",{style:{maxWidth:500}},l.a.createElement("div",{className:"landing-big-text"},"Create Your Own RCV Poll"),l.a.createElement("div",{className:"landing-small-text"}," Use our free tool to create your own Ranked Choice Voting (RCV) polls. Just build your poll, then we'll email it to your voters and calculate the winner!")))),l.a.createElement("div",{className:"row",style:{padding:"50px 20px"}},l.a.createElement("div",{className:"landing-col-2"},l.a.createElement("div",{style:{maxWidth:500,margin:"auto"}},l.a.createElement("div",{className:"landing-big-text"},"How It Works"),l.a.createElement("p",{className:"landing-p"},'Ranked Choice Voting (RCV), also known as Instant-runoff voting, is a type of preferential voting method used in elections with more than two candidates or voting options. Instead of voting only for a single candidate, voters in RCV elections rank the candidates in order of preference. Ballots are initially counted for each elector\'s top choice, losing candidates are eliminated, and ballots for losing candidates are redistributed until one candidate is the top remaining choice of a majority of the voters. When the field is reduced to two, it has become an "instant runoff" that allows a comparison of the top two candidates head-to-head. You can also learn more by reading ',l.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",className:"link",href:"https://en.wikipedia.org/wiki/Instant-runoff_voting"},"this Wikipedia article"),"."))),l.a.createElement("div",{className:"landing-col-2 landing-vid-container",style:{maxWidth:600,padding:20,display:"flex",alignItems:"center",justifyContent:"center"}},l.a.createElement("iframe",{title:"How RCV Works - YouTube",width:"100%",height:"370px",src:"https://www.youtube.com/embed/_5SLQXNpzsk",frameBorder:"0",allow:"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:!0}))),l.a.createElement("div",{className:"text-center",style:{padding:"50px 20px",background:"#333",color:"#fff"}},l.a.createElement("div",{className:"landing-big-text"},"Now You're In The Know..."),l.a.createElement("p",{style:{fontSize:20,maxWidth:650,margin:"10px auto 30px"}}," So why not give RCV a shot for your next important (or unimportant) group decision? It's 100% free, and we'll never send an email that you didn't ask for. Do it for America!"),l.a.createElement("div",{className:"p-10"},l.a.createElement("a",{href:"/new-poll",className:"btn btn-white"},"Create a New RCV Poll"))))}}]),t}(n.Component),w=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(a=Object(c.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(l)))).state={focused:!1},a.handleFocus=function(){a.setState({focused:!0,touched:!0})},a.handleBlur=function(){a.setState({focused:!1})},a.hasError=function(){return a.props.submitted&&a.props.error},a}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this,t=this.props,a=t.type,n=t.name,r=t.label,o=t.value,i=t.index,s=t.error;return l.a.createElement("div",{className:"input-container".concat(this.state.focused?" focused":"").concat(this.hasError()?" has-error":"")},l.a.createElement("div",{className:"input-label-container"},l.a.createElement("div",{className:"label".concat(this.state.focused||this.props.value?" focused":"")},r),l.a.createElement("input",{autoComplete:"emails"===n||"createdBy"===n?n:"off",className:"form-input",type:a,name:n,onFocus:function(){return e.handleFocus()},onBlur:function(){return e.handleBlur()},value:o,onChange:function(t){return e.props.handleChange(t.target.value,n,i)}})),l.a.createElement("div",{className:"border-container"},l.a.createElement("div",{className:"border-filler"})),l.a.createElement("div",{className:"error-msg"},this.hasError()&&s),i>3&&l.a.createElement("button",{className:"remove-item",title:"Remove this voting option",onClick:function(){return e.props.removeInput(i)}},l.a.createElement("span",null,"\xd7")))}}]),t}(n.Component),S={plus:{path:"M416 208H272V64c0-17.67-14.33-32-32-32h-32c-17.67 0-32 14.33-32 32v144H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h144v144c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32V304h144c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z",viewBox:"0 0 448 512"}},I=function(e){var t=e.color,a=e.icon;return l.a.createElement("svg",{"aria-hidden":"true",role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:S[a].viewBox,style:{width:12,height:12,marginLeft:-5}},l.a.createElement("path",{fill:t,d:S[a].path}))},C=function(e){var t=e.classOption;return l.a.createElement(n.Fragment,null,l.a.createElement("div",{className:"".concat(t||"loading-container"),alt:"Loading..."},l.a.createElement("div",null),l.a.createElement("div",null),l.a.createElement("div",null),l.a.createElement("div",null)),t&&l.a.createElement("div",{className:"p-10"},"Loading..."))},k=a(12),O=a.n(k),j=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(c.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(r)))).state={submitting:!1,error:!1},a.handleSubmit=function(){a.setState({submitting:!0}),O.a.post("/api/create-poll",a.props.values).then(function(e){var t=e.data;201===e.status?a.props.handleSuccess(t):a.setState({error:!0,submitting:!1})}).catch(function(e){console.log(e),a.setState({error:!0,submitting:!1})})},a.renderEmails=function(){return a.props.values.emails.split(",").map(function(e,t){return l.a.createElement("li",{key:"".concat(e+t)},e.trim())})},a.renderOptions=function(){return a.props.values.options.filter(function(e){return e.length>0}).map(function(e,t){return l.a.createElement("li",{key:"option-".concat(t)},e)})},a}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this,t=this.props,a=t.modalStatus,n=t.values,r=t.handleModalClose;return l.a.createElement("div",{className:"modal-backdrop ".concat(a)},l.a.createElement("div",{className:"modal-container p-10"},l.a.createElement("div",{style:{fontSize:32,marginBottom:10},className:"text-center"},"Confirmation"),l.a.createElement("p",{style:{marginBottom:20,fontSize:16,textAlign:"center"}},"Please confirm your poll entries are correct before submitting"),l.a.createElement("div",{className:"confirmation-values p-10",style:{borderTop:"1px solid #ddd",borderBottom:"1px solid #ddd"}},l.a.createElement("div",null,l.a.createElement("strong",null,"Poll Title: "),n.title),l.a.createElement("div",null,l.a.createElement("strong",null,"Voting Options:"),l.a.createElement("div",null,l.a.createElement("ul",{style:{paddingLeft:30}},this.renderOptions()))),l.a.createElement("div",null,l.a.createElement("strong",null,"Email Recipients:"),l.a.createElement("div",null,l.a.createElement("ul",{style:{paddingLeft:30}},this.renderEmails())))),this.state.submitting?l.a.createElement("div",{className:"text-right p-5"},l.a.createElement(C,null)):l.a.createElement("div",{className:"text-right"},l.a.createElement("button",{onClick:function(){return r()},className:"btn btn-white m-10"},"Cancel"),l.a.createElement("button",{onClick:function(){return e.handleSubmit()},className:"btn btn-orange btn-orange-2 m-10"},"Looks Good!")),this.state.error&&l.a.createElement("div",{style:{color:"#d24425"},className:"text-right p-10"},"An error occurred. Please try again later.")))}}]),t}(n.Component),L=function(e){var t=e.pollID;return l.a.createElement("div",null,l.a.createElement("div",{className:"text-center modal-backdrop open"},l.a.createElement("div",{className:"modal-container p-10"},l.a.createElement("div",{style:{color:"#2c74c1",fontSize:49,marginBottom:15}},"Success!"),l.a.createElement("div",{style:{borderBottom:"1px solid #ddd",borderTop:"1px solid #ddd",padding:"20px 10px",margin:"20px auto"}},l.a.createElement("div",{style:{margin:"auto",maxWidth:450}},"You have successfully created a new poll. You should receive an email with a link to vote, assuming you added yourself as a voter. What would you like to do next?")),l.a.createElement("div",{className:"text-right"},l.a.createElement("a",{href:"/",className:"btn btn-white m-10"},"Go Home"),l.a.createElement("a",{href:"/poll/".concat(t,"/results"),className:"btn btn-orange btn-orange-2 m-10"},"View Results")))))},D=function(e){return e?e.length>80?"This field can't exceed 80 characters":null:"This is a required field"},B=function(e){return e?!1===/^[a-z ,.'-]+$/i.test(e)?"Please enter your full name":null:"This is a required field"},R=function(e){if(!e)return"This is a required field";var t=/^[a-zA-Z0-9.!#$%&\u2019*+\/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,a=e.split(",").map(function(e){return e.trim()}).filter(function(e){return!1===t.test(e)});return a.length>0?"The following emails are invalid: ".concat(a):e.split(",").length>200?"No more than 200 email recipients are allowed":null},V=["1st","2nd","3rd","4th","5th","6th","7th","8th","9th","10th"],T=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(c.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(r)))).state={inputCount:3,values:{emails:"",title:"",createdBy:"",options:["","","","","","","","","",""]},errors:{emails:"",title:"",createdBy:"",options:["","","","","","","","","",""]},hasError:!1,submitted:!1,pollID:null,modalStatus:"closed"},a.handleChange=function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null,l=Object.assign({},a.state.values);n?l.options[n-1]=e:l[t]=e,a.setState({values:l},a.validateInputs)},a.validateInputs=function(e){var t=!1,n=Object.assign({},a.state.errors);n.emails=R(a.state.values.emails),n.title=D(a.state.values.title),n.createdBy=B(a.state.values.createdBy),(n.emails||n.title)&&(t=!0);for(var l=0;l<a.state.inputCount;l++)n.options[l]=D(a.state.values.options[l]),n.options[l]&&(t=!0);a.setState({errors:n,hasError:t},e)},a.submitAction=function(){a.state.hasError||a.setState({modalStatus:"open"})},a.handleSubmit=function(e){e.preventDefault(),a.setState({submitted:!0},a.validateInputs(a.submitAction))},a.handleSuccess=function(e){a.setState({pollID:e,modalStatus:"closed"})},a.addInput=function(){a.setState({inputCount:a.state.inputCount+1}),a.submitBtn.scrollIntoView({behavior:"smooth"})},a.removeInput=function(e){var t=Object.assign({},a.state.values);t.options[e-1]="";for(var n=t.options.length,l=e-1;l<n-1;l++)t.options[l]=t.options[l+1];t.options[n]="",a.setState({values:t,inputCount:a.state.inputCount-1})},a.isDisabled=function(){return a.state.inputCount>=a.state.values.options.length},a.renderInputs=function(){for(var e=[],t=0;t<a.state.inputCount;t++)e.push(l.a.createElement(w,{key:"option".concat(t),type:"text",name:"option$".concat(t),label:"Enter voting option #".concat(t+1),index:t+1,value:a.state.values.options[t],error:a.state.errors.options[t],submitted:a.state.submitted,handleChange:a.handleChange,removeInput:a.removeInput}));return e},a}return Object(m.a)(t,e),Object(s.a)(t,[{key:"componentWillMount",value:function(){document.title="Create a New Poll | InstantRCV"}},{key:"render",value:function(){var e=this;return l.a.createElement(n.Fragment,null,"open"===this.state.modalStatus&&l.a.createElement(j,{modalStatus:"open",values:this.state.values,handleModalClose:function(){return e.setState({modalStatus:"closed"})},handleSuccess:this.handleSuccess}),this.state.pollID&&l.a.createElement(L,{pollID:this.state.pollID}),l.a.createElement(g,null),l.a.createElement("div",{className:"main-container"},l.a.createElement("h1",{className:"text-center"},"Create a New RCV Poll"),l.a.createElement("div",{className:"p-10 text-center",style:{margin:"auto",maxWidth:600}},"*Limit 10 voting options per poll. Please separate each vote recipient's email address with a comma."),l.a.createElement("div",{className:"form-container"},l.a.createElement("form",{onSubmit:this.handleSubmit},l.a.createElement("input",{type:"hidden",value:"something"}),l.a.createElement(w,{type:"text",name:"createdBy",label:"Enter your full name",value:this.state.values.createdBy,error:this.state.errors.createdBy,submitted:this.state.submitted,handleChange:this.handleChange}),l.a.createElement(w,{type:"text",name:"emails",label:"Enter voter emails",value:this.state.values.emails,error:this.state.errors.emails,submitted:this.state.submitted,handleChange:this.handleChange}),l.a.createElement(w,{type:"text",name:"title",label:"Enter a poll title",value:this.state.values.title,error:this.state.errors.title,submitted:this.state.submitted,handleChange:this.handleChange}),this.renderInputs(),l.a.createElement("div",{style:{paddingBottom:20}},l.a.createElement("button",{ref:function(t){return e.submitBtn=t},className:"float-right btn btn-orange"},"SUBMIT POLL"))),l.a.createElement("button",{style:{marginTop:-20},className:"float-left btn btn-white".concat(this.isDisabled()?" disabled":""),disabled:this.isDisabled(),onClick:function(){return e.addInput()}},l.a.createElement(I,{icon:"plus",color:"#333"})," ",l.a.createElement("span",null,"Add Option")))))}}]),t}(n.Component),W=a(55),P=a(30),A=a(14),z=a(56),F=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(c.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(r)))).renderPlaceholders=function(e){for(var t=[],n=0;n<a.props.itemLength;n++)t.push(l.a.createElement("div",{className:"item-placeholder",key:"ph-".concat(n),style:{display:a.props.items.length+e>n?"none":"flex",top:110*n+10}},"Drag your ",V[n]," choice here"));return t},a}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this;return l.a.createElement(A.c,{droppableId:this.props.droppableId},function(t,a){return l.a.createElement("div",{ref:t.innerRef,style:(n=a.isDraggingOver,r=e.props.itemLength,{background:n?"#bbb":"#777",padding:10,width:"100%",height:110*r+10,position:"relative"})},e.props.items.map(function(e,t){return l.a.createElement(A.b,{key:e.id,draggableId:e.id,index:t},function(t,a){return l.a.createElement("div",Object.assign({ref:t.innerRef},t.draggableProps,t.dragHandleProps,{style:(n=a.isDragging,r=t.draggableProps.style,Object(z.a)({userSelect:"none",height:100,display:"flex",overflow:"hidden",alignItems:"center",justifyContent:"center",marginBottom:10,background:n?"#333":"#ffc107",color:n?"#fff":"#333",boxShadow:n?"0 2px 8px 0 rgba(0,0,0,.2), 0 3px 4px 0 rgba(0,0,0,.14), 0 3px 3px 1px rgba(0,0,0,.12)":"none",border:"1px solid #555",borderRadius:5,zIndex:99999},r))}),e.content);var n,r})}),"droppable2"===e.props.droppableId&&e.renderPlaceholders(a.isDraggingOver?1:0),t.placeholder);var n,r})}}]),t}(n.Component),M=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(c.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(r)))).state={submitting:!1,error:!1},a.handleSubmit=function(){a.setState({submitting:!0}),O.a.post("/api/poll/".concat(a.props.pollID,"/voter/").concat(a.props.voterID),a.props.selections).then(function(e){202===e.status?a.props.handleSuccess():a.setState({error:!0,submitting:!1})}).catch(function(){a.setState({error:!0,submitting:!1})})},a.renderSelections=function(){return a.props.selections.map(function(e,t){return l.a.createElement("tr",{key:"r-".concat(t)},l.a.createElement("td",null,l.a.createElement("strong",null,V[t]," Choice:")),l.a.createElement("td",null,e))})},a}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this,t=this.props,a=t.modalStatus,n=t.title,r=t.handleModalClose;return l.a.createElement("div",{className:"text-center modal-backdrop ".concat(a)},l.a.createElement("div",{className:"modal-container p-10"},l.a.createElement("div",{style:{fontSize:28,marginBottom:20}},n),l.a.createElement("p",{style:{marginBottom:20,fontSize:16}},"Please confirm your poll entries are correct before submitting"),l.a.createElement("div",{style:{borderBottom:"1px solid #ddd",borderTop:"1px solid #ddd",padding:"10px 10px 20px 10px",margin:"20px auto"}},l.a.createElement("div",{style:{color:"#444",letterSpacing:3,marginBottom:20,fontSize:22,textDecoration:"underline"}},"YOUR SELECTIONS"),l.a.createElement("div",null,l.a.createElement("table",{className:"table"},l.a.createElement("tbody",null,this.renderSelections())))),this.state.submitting?l.a.createElement("div",{className:"text-right p-5"},l.a.createElement(C,null)):l.a.createElement("div",{className:"text-right"},l.a.createElement("button",{onClick:function(){return r()},className:"btn btn-white m-10"},"Cancel"),l.a.createElement("button",{onClick:function(){return e.handleSubmit()},className:"btn btn-orange btn-orange-2 m-10"},"Looks Good!")),this.state.error&&l.a.createElement("div",{style:{color:"#d24425"},className:"text-right p-10"},"An error occurred. Please try again later.")))}}]),t}(n.Component),Y=function(e){var t=e.pollID;return l.a.createElement("div",null,l.a.createElement("div",{className:"text-center modal-backdrop open"},l.a.createElement("div",{className:"modal-container p-10"},l.a.createElement("div",{style:{color:"#2c74c1",fontSize:49,marginBottom:15}},"Success!"),l.a.createElement("div",{style:{borderBottom:"1px solid #ddd",borderTop:"1px solid #ddd",padding:"20px 10px",margin:"20px auto"}},l.a.createElement("div",{style:{margin:"auto",maxWidth:400}},"We have successfully received your voting results. Now what would you like to do next?")),l.a.createElement("div",{className:"text-right"},l.a.createElement("a",{href:"/",className:"btn btn-white m-10"},"Go Home"),l.a.createElement("a",{href:"/poll/".concat(t,"/results"),className:"btn btn-orange btn-orange-2 m-10"},"View Results")))))},H=function(e,t,a){var n=Array.from(e),l=n.splice(t,1),r=Object(P.a)(l,1)[0];return n.splice(a,0,r),n},U=function(e,t,a,n){var l=Array.from(e),r=Array.from(t),o=l.splice(a.index,1),i=Object(P.a)(o,1)[0];r.splice(n.index,0,i);var s={};return s[a.droppableId]=l,s[n.droppableId]=r,s},$=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(a=Object(c.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(l)))).state={poll:null,error:!1,success:!1,modalStatus:"closed",itemLength:0,items:[],selected:[]},a.id2List={droppable:"items",droppable2:"selected"},a.getList=function(e){return a.state[a.id2List[e]]},a.onDragEnd=function(e){var t=e.source,n=e.destination;if(n)if(t.droppableId===n.droppableId){var l=H(a.getList(t.droppableId),t.index,n.index),r={items:l};"droppable2"===t.droppableId&&(r={selected:l}),a.setState(r)}else{var o=U(a.getList(t.droppableId),a.getList(n.droppableId),t,n);a.setState({items:o.droppable,selected:o.droppable2})}},a.resetItems=function(){var e=Object(W.a)(a.state.poll.options).map(function(e,t){return{id:"".concat(e.replace(/ /,"")).concat(t),content:e}});a.setState({items:e,selected:[]})},a.handleSubmit=function(){a.state.selected.length!==a.state.itemLength?window.alert("Please rank all options before submitting your vote"):a.setState({modalStatus:"open"})},a.handleSuccess=function(){a.setState({success:!0,modalStatus:"closed"})},a}return Object(m.a)(t,e),Object(s.a)(t,[{key:"componentWillMount",value:function(){var e=this;document.title="Make Your Poll Selections | InstantRCV",this.pollID=this.props.match.params.pollID,this.voterID=this.props.match.params.voterID,O.a.get("/api/poll/".concat(this.pollID,"/voter/").concat(this.voterID)).then(function(t){if(t.data){var a=t.data.options.map(function(e,t){return{id:"".concat(e.replace(/ /,"")).concat(t),content:e}});e.setState({poll:t.data,items:a,itemLength:a.length})}else e.setState({error:!0})}).catch(function(){e.setState({error:!0})})}},{key:"renderContent",value:function(){var e=this;return this.state.error?l.a.createElement("div",null,"This poll could not be loaded or does not exist."):this.state.poll?this.state.poll.voted?l.a.createElement("div",null,"You have already voted in this poll. ",l.a.createElement("a",{href:"/poll/".concat(this.pollID,"/results"),style:{color:"#fff",textDecoration:"underline"}},"Click here to view the results"),"."):l.a.createElement("div",{style:{maxWidth:800,margin:"auto"}},l.a.createElement("h1",{className:"text-center",style:{marginBottom:10}},this.state.poll.title),l.a.createElement("div",{className:"p-10 text-center"},"Please rank the provided options in order from most preferable to least preferable"),l.a.createElement("div",{className:"border-holder"}),l.a.createElement("div",{className:"row",style:{marginBottom:20}},l.a.createElement(A.a,{onDragEnd:this.onDragEnd},l.a.createElement("div",{className:"col-2-always p-5"},l.a.createElement("div",{className:"text-center font-18 p-5"},"OPTIONS"),l.a.createElement(F,{items:this.state.items,droppableId:"droppable",itemLength:this.state.itemLength})),l.a.createElement("div",{className:"col-2-always p-5"},l.a.createElement("div",{className:"text-center font-18 p-5"},"SELECTIONS"),l.a.createElement(F,{items:this.state.selected,droppableId:"droppable2",itemLength:this.state.itemLength})))),l.a.createElement("div",{className:"border-holder"}),l.a.createElement("div",{className:"text-right"},l.a.createElement("button",{onClick:function(){return e.resetItems()},className:"btn btn-black m-10"},"RESET"),l.a.createElement("button",{onClick:function(){return e.handleSubmit()},style:{width:130,fontSize:22},className:"btn btn-orange m-10 box-shadow"},"SUBMIT"))):l.a.createElement("div",null,l.a.createElement(C,null),"Loading...")}},{key:"render",value:function(){var e=this;return l.a.createElement(n.Fragment,null,l.a.createElement(g,null),l.a.createElement("div",{className:"main-container text-center"},this.renderContent()),l.a.createElement(M,{handleModalClose:function(){return e.setState({modalStatus:"closed"})},handleSuccess:this.handleSuccess,modalStatus:this.state.modalStatus,title:this.props.title,selections:this.state.selected.map(function(e){return e.content}),pollID:this.pollID,voterID:this.voterID}),this.state.success&&l.a.createElement(Y,{pollID:this.pollID}))}}]),t}(n.Component),_=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(a=Object(c.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(l)))).state={poll:null,error:!1},a}return Object(m.a)(t,e),Object(s.a)(t,[{key:"componentWillMount",value:function(){var e=this;document.title="View Poll Results | InstantRCV",this.pollID=this.props.match.params.pollID,O.a.get("/api/results/".concat(this.pollID)).then(function(t){200===t.status?e.setState({poll:t.data}):e.setState({error:!0})}).catch(function(){e.setState({error:!0})})}},{key:"renderVoters",value:function(){if(this.state.poll){var e=this.state.poll.voters.filter(function(e){return e.voted});if(this.state.poll.allVotesReceived)return l.a.createElement(n.Fragment,null,l.a.createElement("div",{style:{margin:"20px auto",borderTop:"1px solid #fff",textAlign:"left",fontSize:24}},"Voter Selections:"),l.a.createElement("div",{className:"row"},e.map(function(e,t){return l.a.createElement("div",{key:"voter".concat(t),className:"col-3 p-10"},l.a.createElement("div",{className:"voter box-shadow"},l.a.createElement("div",{className:"email font-18"},e.email),l.a.createElement("table",{className:"table"},l.a.createElement("tbody",null,e.selections.map(function(e,t){return l.a.createElement("tr",{key:"row-".concat(t)},l.a.createElement("td",null,l.a.createElement("strong",null,V[t]," Choice:")),l.a.createElement("td",null,e))})))))})));if(e.length>0)return l.a.createElement(n.Fragment,null,l.a.createElement("div",{style:{margin:"20px auto",borderTop:"1px solid #fff",textAlign:"left",fontSize:24}},"Voter Selections:"),l.a.createElement("div",{className:"row"},e.map(function(e,t){return l.a.createElement("div",{key:"voter".concat(t),className:"col-3 p-10"},l.a.createElement("div",{className:"voter box-shadow"},l.a.createElement("div",{className:"email"},e.email),l.a.createElement("div",{title:"Voter selections are hidden until all votes are received",style:{cursor:"help",marginTop:10,color:"#e6e6e6",fontSize:16}},"(RESULTS HIDDEN)")))})))}}},{key:"renderPendingVoters",value:function(){if(this.state.poll){var e=this.state.poll.voters.filter(function(e){return!e.voted});if(e.length>0)return l.a.createElement(n.Fragment,null,l.a.createElement("div",{style:{margin:"40px auto 20px",borderTop:"1px solid #fff",textAlign:"left",fontSize:24}},"Pending Voters:"),l.a.createElement("div",{className:"row"},e.map(function(e,t){return l.a.createElement("div",{key:"pending-".concat(t),className:"col-3 p-10"},l.a.createElement("div",{className:"pending-voter box-shadow"},e.email))})))}}},{key:"renderWinner",value:function(){return this.state.poll.winner?l.a.createElement(n.Fragment,null,l.a.createElement("div",{style:{letterSpacing:5,fontSize:24,borderBottom:"1px solid #ddd",width:"80%",margin:"10px auto"}},"WINNER"),l.a.createElement("div",{style:{paddingBottom:10,color:"#ffc107",letterSpacing:5,fontSize:44}},this.state.poll.winner)):l.a.createElement("div",{style:{fontSize:20,padding:10}},"No winner has been determined yet...")}},{key:"renderResultsTable",value:function(){if(this.state.poll.winner){var e=this.state.poll,t=e.resultArray,a=e.winCutoff;return l.a.createElement("div",{style:{margin:"auto",maxWidth:1200,overflowX:"scroll"}},l.a.createElement("table",{className:"result-table"},l.a.createElement("tbody",null,l.a.createElement("tr",null,l.a.createElement("td",{style:{letterSpacing:2,fontWeight:"bold"},colSpan:t[0][1].length+1},"Vote Counts by Elimination Round")),l.a.createElement("tr",null,l.a.createElement("td",{className:"round-cell",style:{fontWeight:"normal"}},"OPTIONS"),t[0][1].map(function(e,t){return l.a.createElement("td",{className:"round-cell",key:"round-cell".concat(t)},"Round ",t+1)})),t.map(function(e,t){return l.a.createElement("tr",{key:"".concat(e[0]).concat(t)},l.a.createElement("td",{className:"option-cell"},e[0]),e[1].map(function(t,n){var r="cell-".concat(t,"-").concat(n);return t>=a?l.a.createElement("td",{key:r,className:"win-cell"},t):void 0===e[1][n+1]&&void 0!==t?l.a.createElement("td",{key:r,className:"elimination-cell"},t):l.a.createElement("td",{key:r},0===t?0:t||"-")}))}))))}}},{key:"renderContent",value:function(){return this.state.error?l.a.createElement("div",{className:"p-10 text-center font-18"},"This poll no longer exists or could not be loaded."):this.state.poll?l.a.createElement("div",{className:"text-center"},l.a.createElement("h1",{style:{borderBottom:"1px solid #f9f9f9",maxWidth:"100%"}},"POLL RESULTS"),l.a.createElement("div",{style:{margin:"50px auto 30px",fontSize:22,letterSpacing:3,maxWidth:600}},this.state.poll.title),l.a.createElement("div",{className:"winner-section"},this.renderWinner()),l.a.createElement("div",{className:"progress box-shadow"},l.a.createElement("span",null,(this.state.poll.votesReceived/this.state.poll.totalVoters*100).toFixed(0),"% votes received"),l.a.createElement("div",{className:"progress-bar-container",style:{width:"".concat(this.state.poll.votesReceived/this.state.poll.totalVoters*100,"%")}},l.a.createElement("div",{className:"progress-bar"}))),l.a.createElement("div",null,this.renderResultsTable()),this.renderVoters(),this.renderPendingVoters()):l.a.createElement("div",{className:"p-10 text-center"},l.a.createElement(C,{classOption:"loading-2"}))}},{key:"render",value:function(){return l.a.createElement(n.Fragment,null,l.a.createElement(g,null),l.a.createElement("div",{className:"main-container"},l.a.createElement("div",{style:{maxWidth:1e3,margin:"auto",padding:10}},this.renderContent())))}}]),t}(n.Component),G=function(e){function t(){return Object(i.a)(this,t),Object(c.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return l.a.createElement(u.a,null,l.a.createElement(p.a,null,l.a.createElement(h.a,{exact:!0,path:"/",component:N}),l.a.createElement(h.a,{exact:!0,path:"/new-poll",component:T}),l.a.createElement(h.a,{exact:!0,path:"/poll/:pollID/voter/:voterID",component:$}),l.a.createElement(h.a,{exact:!0,path:"/poll/:pollID/results",component:_})))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(l.a.createElement(G,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},27:function(e,t,a){e.exports=a.p+"static/media/landing_img.c06e07af.png"},28:function(e,t,a){e.exports=a.p+"static/media/sun.80a4a248.png"},48:function(e,t,a){e.exports=a.p+"static/media/logo.5f854386.svg"},57:function(e,t,a){e.exports=a(121)},62:function(e,t,a){}},[[57,2,1]]]);
//# sourceMappingURL=main.40e3bf70.chunk.js.map