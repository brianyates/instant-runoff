(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{22:function(e,t,a){e.exports=a.p+"static/media/logo.5f854386.svg"},23:function(e,t,a){e.exports=a.p+"static/media/thumbs_up.914ed44c.svg"},26:function(e,t,a){e.exports=a(55)},31:function(e,t,a){},55:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(14),o=a.n(r),s=(a(31),a(2)),i=a(3),c=a(5),m=a(4),u=a(6),d=a(57),p=a(59),h=a(58),v=a(22),f=a.n(v),E=function(e){function t(){return Object(s.a)(this,t),Object(c.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return l.a.createElement("nav",null,l.a.createElement("a",{title:"InstantRCV",href:"/",className:"float-left logo nav-items"},l.a.createElement("span",null,l.a.createElement("img",{alt:"Logo",src:f.a})),l.a.createElement("span",{className:"orange-1"},"Instant"),l.a.createElement("span",{className:"orange-2"},"RCV")),l.a.createElement("div",{className:"float-right nav-items"},l.a.createElement("a",{href:"/new-poll",className:"btn nav-btn"},l.a.createElement("span",null),l.a.createElement("span",null,"Create a Poll"))))}}]),t}(n.Component),g=a(23),b=a.n(g),y=function(){return l.a.createElement(n.Fragment,null,l.a.createElement(E,null),l.a.createElement("div",{className:"main-container mc-2 landing-page-container row"},l.a.createElement("div",{className:"col-2 landing-section-1"},l.a.createElement("div",{style:{maxWidth:500,margin:"auto",padding:20}},l.a.createElement("img",{alt:"Thumbs up",src:b.a,width:"80%",className:"thumb-img"}))),l.a.createElement("div",{className:"col-2 landing-section-2"},l.a.createElement("div",{style:{maxWidth:500}},l.a.createElement("div",{className:"landing-big-text"},"Create Your Own RCV Poll"),l.a.createElement("div",{className:"landing-small-text"}," Use our free tool to create your own Ranked Choice Voting (RCV) polls. Simply build your poll, and we'll share it with your voters through email!")))))},x=function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(a=Object(c.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(l)))).state={focused:!1},a.handleFocus=function(){a.setState({focused:!0,touched:!0})},a.handleBlur=function(){a.setState({focused:!1})},a.hasError=function(){return a.props.submitted&&a.props.error},a}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this,t=this.props,a=t.type,n=t.name,r=t.label,o=t.value,s=t.index,i=t.error;return l.a.createElement("div",{className:"input-container".concat(this.state.focused?" focused":"").concat(this.hasError()?" has-error":"")},l.a.createElement("div",{className:"input-label-container"},l.a.createElement("div",{className:"label".concat(this.state.focused||this.props.value?" focused":"")},r),l.a.createElement("input",{autoComplete:"emails"===n||"createdBy"===n?n:"off",className:"form-input",type:a,name:n,onFocus:function(){return e.handleFocus()},onBlur:function(){return e.handleBlur()},value:o,onChange:function(t){return e.props.handleChange(t.target.value,n,s)}})),l.a.createElement("div",{className:"border-container"},l.a.createElement("div",{className:"border-filler"})),l.a.createElement("div",{className:"error-msg"},this.hasError()&&i),s>3&&l.a.createElement("button",{className:"remove-item",title:"Remove this voting option",onClick:function(){return e.props.removeInput(s)}},l.a.createElement("span",null,"\xd7")))}}]),t}(n.Component),N={plus:{path:"M416 208H272V64c0-17.67-14.33-32-32-32h-32c-17.67 0-32 14.33-32 32v144H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h144v144c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32V304h144c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z",viewBox:"0 0 448 512"}},S=function(e){var t=e.color,a=e.icon,n=e.width;return l.a.createElement("svg",{"aria-hidden":"true",role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:N[a].viewBox,style:{width:n}},l.a.createElement("path",{fill:t,d:N[a].path}))},w=function(e){var t=e.classOption;return l.a.createElement(n.Fragment,null,l.a.createElement("div",{className:"".concat(t||"loading-container"),alt:"Loading..."},l.a.createElement("div",null),l.a.createElement("div",null),l.a.createElement("div",null),l.a.createElement("div",null)),t&&l.a.createElement("div",{className:"p-10"},"Loading..."))},C=a(11),O=a.n(C),k=function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(c.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={submitting:!1,error:!1},a.handleSubmit=function(){a.setState({submitting:!0}),O.a.post("/api/create-poll",a.props.values).then(function(e){var t=e.data;201===e.status?a.props.handleSuccess(t):a.setState({error:!0,submitting:!1})}).catch(function(e){console.log(e),a.setState({error:!0,submitting:!1})})},a.renderEmails=function(){return a.props.values.emails.split(",").map(function(e,t){return l.a.createElement("li",{key:"".concat(e+t)},e.trim())})},a.renderOptions=function(){return a.props.values.options.filter(function(e){return e.length>0}).map(function(e,t){return l.a.createElement("li",{key:"option-".concat(t)},e)})},a}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this,t=this.props,a=t.modalStatus,n=t.values,r=t.handleModalClose;return l.a.createElement("div",{className:"modal-backdrop ".concat(a)},l.a.createElement("div",{className:"modal-container p-10"},l.a.createElement("div",{style:{fontSize:32,marginBottom:10},className:"text-center"},"Confirmation"),l.a.createElement("p",{style:{marginBottom:20,fontSize:16,textAlign:"center"}},"Please confirm your poll entries are correct before submitting"),l.a.createElement("div",{className:"confirmation-values p-10",style:{borderTop:"1px solid #ddd",borderBottom:"1px solid #ddd"}},l.a.createElement("div",null,l.a.createElement("strong",null,"Poll Title: "),n.title),l.a.createElement("div",null,l.a.createElement("strong",null,"Voting Options:"),l.a.createElement("div",null,l.a.createElement("ul",{style:{paddingLeft:30}},this.renderOptions()))),l.a.createElement("div",null,l.a.createElement("strong",null,"Email Recipients:"),l.a.createElement("div",null,l.a.createElement("ul",{style:{paddingLeft:30}},this.renderEmails())))),this.state.submitting?l.a.createElement("div",{className:"text-right p-5"},l.a.createElement(w,null)):l.a.createElement("div",{className:"text-right"},l.a.createElement("button",{onClick:function(){return r()},className:"btn btn-white m-10"},"Cancel"),l.a.createElement("button",{onClick:function(){return e.handleSubmit()},className:"btn btn-orange btn-orange-2 m-10"},"Looks good, fire away!")),this.state.error&&l.a.createElement("div",{style:{color:"#d24425"},className:"text-right p-10"},"An error occurred. Please try again later.")))}}]),t}(n.Component),I=function(e){var t=e.pollID;return l.a.createElement("div",null,l.a.createElement("div",{className:"text-center modal-backdrop open"},l.a.createElement("div",{className:"modal-container p-10"},l.a.createElement("div",{style:{color:"#2c74c1",fontSize:49,marginBottom:15}},"Success!"),l.a.createElement("div",{style:{borderBottom:"1px solid #ddd",borderTop:"1px solid #ddd",padding:"20px 10px",margin:"20px auto"}},l.a.createElement("div",{style:{margin:"auto",maxWidth:450}},"You have successfully created a new poll. You should receive an email with a link to vote, assuming you added yourself as a voter. What would you like to do next?")),l.a.createElement("div",{className:"text-right"},l.a.createElement("a",{href:"/",className:"btn btn-white m-10"},"Go Home"),l.a.createElement("a",{href:"/poll/".concat(t,"/results"),className:"btn btn-orange btn-orange-2 m-10"},"View Results")))))},j=function(e){return e?e.length>80?"This field can't exceed 80 characters":null:"This is a required field"},D=function(e){return e?!1===/^[a-z ,.'-]+$/i.test(e)?"Please enter your full name":null:"This is a required field"},B=function(e){if(!e)return"This is a required field";var t=/^[a-zA-Z0-9.!#$%&\u2019*+\/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,a=e.split(",").map(function(e){return e.trim()}).filter(function(e){return!1===t.test(e)});return a.length>0?"The following emails are invalid: ".concat(a):e.split(",").length>200?"No more than 200 email recipients are allowed":null},R=["1st","2nd","3rd","4th","5th","6th","7th","8th","9th","10th"],P=function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(c.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={inputCount:3,values:{emails:"",title:"",createdBy:"",options:["","","","","","","","","",""]},errors:{emails:"",title:"",createdBy:"",options:["","","","","","","","","",""]},hasError:!1,submitted:!1,pollID:null,modalStatus:"closed"},a.handleChange=function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null,l=Object.assign({},a.state.values);n?l.options[n-1]=e:l[t]=e,a.setState({values:l},a.validateInputs)},a.validateInputs=function(e){var t=!1,n=Object.assign({},a.state.errors);n.emails=B(a.state.values.emails),n.title=j(a.state.values.title),n.createdBy=D(a.state.values.createdBy),(n.emails||n.title)&&(t=!0);for(var l=0;l<a.state.inputCount;l++)n.options[l]=j(a.state.values.options[l]),n.options[l]&&(t=!0);a.setState({errors:n,hasError:t},e)},a.submitAction=function(){a.state.hasError||a.setState({modalStatus:"open"})},a.handleSubmit=function(e){e.preventDefault(),a.setState({submitted:!0},a.validateInputs(a.submitAction))},a.handleSuccess=function(e){a.setState({pollID:e,modalStatus:"closed"})},a.addInput=function(){a.setState({inputCount:a.state.inputCount+1}),a.submitBtn.scrollIntoView({behavior:"smooth"})},a.removeInput=function(e){var t=Object.assign({},a.state.values);t.options[e-1]="";for(var n=t.options.length,l=e-1;l<n-1;l++)t.options[l]=t.options[l+1];t.options[n]="",a.setState({values:t,inputCount:a.state.inputCount-1})},a.isDisabled=function(){return a.state.inputCount>=a.state.values.options.length},a.renderInputs=function(){for(var e=[],t=0;t<a.state.inputCount;t++)e.push(l.a.createElement(x,{key:"option".concat(t),type:"text",name:"option$".concat(t),label:"Enter voting option #".concat(t+1),index:t+1,value:a.state.values.options[t],error:a.state.errors.options[t],submitted:a.state.submitted,handleChange:a.handleChange,removeInput:a.removeInput}));return e},a}return Object(u.a)(t,e),Object(i.a)(t,[{key:"componentWillMount",value:function(){document.title="Create a New Poll | InstantRCV"}},{key:"render",value:function(){var e=this;return l.a.createElement(n.Fragment,null,"open"===this.state.modalStatus&&l.a.createElement(k,{modalStatus:"open",values:this.state.values,handleModalClose:function(){return e.setState({modalStatus:"closed"})},handleSuccess:this.handleSuccess}),this.state.pollID&&l.a.createElement(I,{pollID:this.state.pollID}),l.a.createElement(E,null),l.a.createElement("div",{className:"main-container"},l.a.createElement("h1",{className:"text-center"},"Create a New RCV Poll"),l.a.createElement("div",{className:"p-10 text-center",style:{margin:"auto",maxWidth:600}},"*Limit 10 voting options per poll. Please separate each vote recipient's email address with a comma."),l.a.createElement("div",{className:"form-container"},l.a.createElement("form",{onSubmit:this.handleSubmit},l.a.createElement("input",{type:"hidden",value:"something"}),l.a.createElement(x,{type:"text",name:"createdBy",label:"Enter your full name",value:this.state.values.createdBy,error:this.state.errors.createdBy,submitted:this.state.submitted,handleChange:this.handleChange}),l.a.createElement(x,{type:"text",name:"emails",label:"Enter voter emails",value:this.state.values.emails,error:this.state.errors.emails,submitted:this.state.submitted,handleChange:this.handleChange}),l.a.createElement(x,{type:"text",name:"title",label:"Enter a poll title",value:this.state.values.title,error:this.state.errors.title,submitted:this.state.submitted,handleChange:this.handleChange}),this.renderInputs(),l.a.createElement("div",{style:{paddingBottom:20}},l.a.createElement("button",{ref:function(t){return e.submitBtn=t},className:"float-right btn btn-orange"},"SUBMIT POLL"))),l.a.createElement("button",{style:{marginTop:-20},className:"float-left btn btn-white".concat(this.isDisabled()?" disabled":""),disabled:this.isDisabled(),onClick:function(){return e.addInput()}},l.a.createElement(S,{icon:"plus",width:"10px",color:"#333"})," ",l.a.createElement("span",null,"Add Option")))))}}]),t}(n.Component),T=a(15),z=a(24),V=a.n(z),W=80,A=function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(a=Object(c.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(l)))).state={initialPosition:null,element:null},a.handleResize=function(){var e=document.documentElement.scrollLeft,t=document.documentElement.scrollTop,n=a.state.element.getBoundingClientRect(),l=n.x,r=n.y;a.setState({initialPosition:{x:l+e,y:r+t}},a.resizeReset())},a.resizeReset=function(){var e=a.props.data.selection;if(null!==e){var t=a.props.placeholders[e].getBoundingClientRect(),n=t.x+document.documentElement.scrollLeft,l=t.y+document.documentElement.scrollTop,r=a.state.initialPosition;a.props.setPosition({selection:e,position:{x:n-r.x,y:l-r.y}},a.props.index)}},a.handleRef=function(e){if(e&&!a.state.element){var t=document.documentElement.scrollLeft,n=document.documentElement.scrollTop,l=e.getBoundingClientRect(),r=l.x,o=l.y;a.setState({element:e,initialPosition:{x:r+t,y:o+n}})}},a.handleStop=function(e,t){var n=!1,l=t.node.getBoundingClientRect(),r=l.x,o=l.y,s=a.props.placeholders,i=document.documentElement.scrollLeft,c=document.documentElement.scrollTop;r+=i,o+=c;for(var m=0;m<s.length;m++){var u=s[m].getBoundingClientRect(),d=u.x+i,p=u.y+c;if(Math.sqrt((d-r)*(d-r)+(p-o)*(p-o))<W){var h=a.state.initialPosition;a.props.setPosition({selection:m,position:{x:d-h.x,y:p-h.y}},a.props.index),n=!0;break}}n||a.props.setPosition({selection:null,position:{x:0,y:0}},a.props.index)},a}return Object(u.a)(t,e),Object(i.a)(t,[{key:"componentWillMount",value:function(){window.addEventListener("resize",this.handleResize)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("resize",this.handleResize)}},{key:"render",value:function(){var e=this,t=this.props,a=t.option,n=t.index,r=t.data.position;return l.a.createElement("div",{ref:function(t){return e.handleRef(t)},className:"draggable-placeholder"},l.a.createElement("span",null,"Option #",n+1),l.a.createElement(V.a,{onStop:this.handleStop,position:r},l.a.createElement("div",{className:"draggable-option"},a)))}}]),t}(n.Component),L=function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(c.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={submitting:!1,error:!1},a.handleSubmit=function(){a.setState({submitting:!0}),O.a.post("/api/poll/".concat(a.props.pollID,"/voter/").concat(a.props.voterID),a.props.selections).then(function(e){202===e.status?a.props.handleSuccess():a.setState({error:!0,submitting:!1})}).catch(function(){a.setState({error:!0,submitting:!1})})},a.renderSelections=function(){return a.props.selections.map(function(e,t){return l.a.createElement("tr",{key:"r-".concat(t)},l.a.createElement("td",null,l.a.createElement("strong",null,R[t]," Choice:")),l.a.createElement("td",null,e))})},a}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this,t=this.props,a=t.modalStatus,n=t.title,r=t.handleModalClose;return l.a.createElement("div",{className:"text-center modal-backdrop ".concat(a)},l.a.createElement("div",{className:"modal-container p-10"},l.a.createElement("div",{style:{fontSize:28,marginBottom:20}},n),l.a.createElement("p",{style:{marginBottom:20,fontSize:16}},"Please confirm your poll entries are correct before submitting"),l.a.createElement("div",{style:{borderBottom:"1px solid #ddd",borderTop:"1px solid #ddd",padding:"10px 10px 20px 10px",margin:"20px auto"}},l.a.createElement("div",{style:{color:"#444",letterSpacing:3,marginBottom:20,fontSize:22,textDecoration:"underline"}},"YOUR SELECTIONS"),l.a.createElement("div",null,l.a.createElement("table",{className:"table"},l.a.createElement("tbody",null,this.renderSelections())))),this.state.submitting?l.a.createElement("div",{className:"text-right p-5"},l.a.createElement(w,null)):l.a.createElement("div",{className:"text-right"},l.a.createElement("button",{onClick:function(){return r()},className:"btn btn-white m-10"},"Cancel"),l.a.createElement("button",{onClick:function(){return e.handleSubmit()},className:"btn btn-orange btn-orange-2 m-10"},"Looks good, fire away!")),this.state.error&&l.a.createElement("div",{style:{color:"#d24425"},className:"text-right p-10"},"An error occurred. Please try again later.")))}}]),t}(n.Component),F=function(e){var t=e.pollID;return l.a.createElement("div",null,l.a.createElement("div",{className:"text-center modal-backdrop open"},l.a.createElement("div",{className:"modal-container p-10"},l.a.createElement("div",{style:{color:"#2c74c1",fontSize:49,marginBottom:15}},"Success!"),l.a.createElement("div",{style:{borderBottom:"1px solid #ddd",borderTop:"1px solid #ddd",padding:"20px 10px",margin:"20px auto"}},l.a.createElement("div",{style:{margin:"auto",maxWidth:400}},"We have successfully received your voting results. Now what would you like to do next?")),l.a.createElement("div",{className:"text-right"},l.a.createElement("a",{href:"/",className:"btn btn-white m-10"},"Go Home"),l.a.createElement("a",{href:"/poll/".concat(t,"/results"),className:"btn btn-orange btn-orange-2 m-10"},"View Results")))))},M=function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(c.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={draggables:[],selections:[],modalStatus:"closed",success:!1},a.handleSuccess=function(){a.setState({success:!0,modalStatus:"closed"})},a.setPosition=function(e,t){for(var n=!0,l=Object(T.a)(a.state.draggables),r=0;r<l.length;r++)l[r].selection===e.selection&&r!==t&&(n=!1);(n||!e.selection&&null!==l[t].selection)&&(l[t]=e,a.setState({draggables:l}))},a.renderOptions=function(){return a.props.options.map(function(e,t){return l.a.createElement(A,{key:"opt-".concat(t),option:e,placeholders:a.placeholders,index:t,data:a.state.draggables[t],setPosition:a.setPosition})})},a.renderPlaceholders=function(){return a.props.options.map(function(e,t){return l.a.createElement("div",{ref:function(e){return a.placeholders[t]=e},key:"placeholder-".concat(t),className:"draggable-selection"},l.a.createElement("span",null,"Drag your ",R[t]," choice here"))})},a.resetDraggables=function(){for(var e=a.state.draggables.length,t=[],n=0;n<e;n++)t.push({selection:null,position:{x:0,y:0}});a.setState({draggables:t})},a.handleSubmit=function(){for(var e=a.state.draggables,t=Object(T.a)(e).map(function(e){return null}),n=!0,l=0;l<e.length;l++){if(null===e[l].selection){n=!1;break}t[e[l].selection]=a.props.options[l]}n?a.setState({modalStatus:"open",selections:t}):window.alert("You must rank all options before submitting.")},a}return Object(u.a)(t,e),Object(i.a)(t,[{key:"componentWillMount",value:function(){this.placeholders=[];for(var e=[],t=0;t<this.props.options.length;t++)e.push({selection:null,position:{x:0,y:0}});this.setState({draggables:e})}},{key:"render",value:function(){var e=this;return l.a.createElement(n.Fragment,null,l.a.createElement("div",{style:{maxWidth:900,margin:"auto",padding:10}},l.a.createElement("h1",{className:"text-center"},this.props.title),l.a.createElement("div",{className:"p-10 text-center"},"Please rank the provided options in order from most preferable to least preferable"),l.a.createElement("div",{className:"border-holder"}),l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-2-always p-10"},l.a.createElement("div",{className:"text-center font-18"},"OPTIONS"),this.renderOptions()),l.a.createElement("div",{className:"col-2-always p-10"},l.a.createElement("div",{className:"text-center font-18"},"SELECTIONS"),this.renderPlaceholders())),l.a.createElement("div",{className:"border-holder"}),l.a.createElement("div",{className:"text-right"},l.a.createElement("button",{onClick:function(){return e.resetDraggables()},className:"btn btn-black m-10"},"RESET"),l.a.createElement("button",{onClick:function(){return e.handleSubmit()},style:{width:130,fontSize:22},className:"btn btn-orange m-10 box-shadow"},"SUBMIT"))),l.a.createElement(L,{handleModalClose:function(){return e.setState({modalStatus:"closed"})},handleSuccess:this.handleSuccess,modalStatus:this.state.modalStatus,title:this.props.title,selections:this.state.selections,pollID:this.props.pollID,voterID:this.props.voterID}),this.state.success&&l.a.createElement(F,{pollID:this.props.pollID}))}}]),t}(n.Component),U=function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(a=Object(c.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(l)))).state={poll:null,draggables:null,error:!1},a}return Object(u.a)(t,e),Object(i.a)(t,[{key:"componentWillMount",value:function(){var e=this;document.title="Make Your Poll Selections | InstantRCV",this.pollID=this.props.match.params.pollID,this.voterID=this.props.match.params.voterID,O.a.get("/api/poll/".concat(this.pollID,"/voter/").concat(this.voterID)).then(function(t){t.data?e.setState({poll:t.data}):e.setState({error:!0})}).catch(function(){e.setState({error:!0})})}},{key:"renderContent",value:function(){return this.state.error?l.a.createElement("div",{className:"p-10 text-center font-18"},"This poll no longer exists or could not be loaded."):this.state.poll?this.state.poll.voted?l.a.createElement("div",{className:"p-10 text-center font-18"},"You have already voted in this poll. ",l.a.createElement("a",{style:{color:"#fff",textDecoration:"underline"},href:"/poll/".concat(this.pollID,"/results")},"Click here to view the results"),"."):l.a.createElement(M,{pollID:this.pollID,voterID:this.voterID,options:this.state.poll.options,title:this.state.poll.title}):l.a.createElement("div",{className:"p-10 text-center"},l.a.createElement(w,{classOption:"loading-2"}))}},{key:"render",value:function(){return l.a.createElement(n.Fragment,null,l.a.createElement(E,null),l.a.createElement("div",{className:"main-container"},this.renderContent()))}}]),t}(n.Component),Y=function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(a=Object(c.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(l)))).state={poll:null,error:!1},a}return Object(u.a)(t,e),Object(i.a)(t,[{key:"componentWillMount",value:function(){var e=this;document.title="View Poll Results | InstantRCV",this.pollID=this.props.match.params.pollID,O.a.get("/api/results/".concat(this.pollID)).then(function(t){200===t.status?e.setState({poll:t.data}):e.setState({error:!0})}).catch(function(){e.setState({error:!0})})}},{key:"renderVoters",value:function(){if(this.state.poll){var e=this.state.poll.voters.filter(function(e){return e.voted});if(this.state.poll.allVotesReceived)return l.a.createElement(n.Fragment,null,l.a.createElement("div",{style:{margin:"20px auto",borderTop:"1px solid #fff",textAlign:"left",fontSize:24}},"Voter Selections:"),l.a.createElement("div",{className:"row"},e.map(function(e,t){return l.a.createElement("div",{key:"voter".concat(t),className:"col-3 p-10"},l.a.createElement("div",{className:"voter box-shadow"},l.a.createElement("div",{className:"email font-18"},e.email),l.a.createElement("table",{className:"table"},l.a.createElement("tbody",null,e.selections.map(function(e,t){return l.a.createElement("tr",{key:"row-".concat(t)},l.a.createElement("td",null,l.a.createElement("strong",null,R[t]," Choice:")),l.a.createElement("td",null,e))})))))})));if(e.length>0)return l.a.createElement(n.Fragment,null,l.a.createElement("div",{style:{margin:"20px auto",borderTop:"1px solid #fff",textAlign:"left",fontSize:24}},"Voter Selections:"),l.a.createElement("div",{className:"row"},e.map(function(e,t){return l.a.createElement("div",{key:"voter".concat(t),className:"col-3 p-10"},l.a.createElement("div",{className:"voter box-shadow"},l.a.createElement("div",{className:"email"},e.email),l.a.createElement("div",{title:"Voter selections are hidden until all votes are received",style:{cursor:"help",marginTop:10,color:"#e6e6e6",fontSize:16}},"(RESULTS HIDDEN)")))})))}}},{key:"renderPendingVoters",value:function(){if(this.state.poll){var e=this.state.poll.voters.filter(function(e){return!e.voted});if(e.length>0)return l.a.createElement(n.Fragment,null,l.a.createElement("div",{style:{margin:"40px auto 20px",borderTop:"1px solid #fff",textAlign:"left",fontSize:24}},"Pending Voters:"),l.a.createElement("div",{className:"row"},e.map(function(e,t){return l.a.createElement("div",{key:"pending-".concat(t),className:"col-3 p-10"},l.a.createElement("div",{className:"pending-voter box-shadow"},e.email))})))}}},{key:"renderWinner",value:function(){return this.state.poll.winner?l.a.createElement(n.Fragment,null,l.a.createElement("div",{style:{letterSpacing:5,fontSize:24,borderBottom:"1px solid #ddd",width:"80%",margin:"10px auto"}},"WINNER"),l.a.createElement("div",{style:{paddingBottom:10,color:"#ffc107",letterSpacing:5,fontSize:44}},this.state.poll.winner)):l.a.createElement("div",{style:{fontSize:20,padding:10}},"No winner has been determined yet...")}},{key:"renderContent",value:function(){return this.state.error?l.a.createElement("div",{className:"p-10 text-center font-18"},"This poll no longer exists or could not be loaded."):this.state.poll?l.a.createElement("div",{className:"text-center"},l.a.createElement("h1",{style:{borderBottom:"1px solid #f9f9f9",maxWidth:"100%"}},"VIEW RESULTS"),l.a.createElement("div",{style:{margin:"70px auto 20px",fontSize:24,letterSpacing:4}},this.state.poll.title),l.a.createElement("div",{className:"winner-section"},this.renderWinner()),l.a.createElement("div",{className:"progress box-shadow"},l.a.createElement("span",null,(this.state.poll.votesReceived/this.state.poll.totalVoters*100).toFixed(0),"% votes received"),l.a.createElement("div",{className:"progress-bar-container",style:{width:"".concat(this.state.poll.votesReceived/this.state.poll.totalVoters*100,"%")}},l.a.createElement("div",{className:"progress-bar"}))),this.renderVoters(),this.renderPendingVoters()):l.a.createElement("div",{className:"p-10 text-center"},l.a.createElement(w,{classOption:"loading-2"}))}},{key:"render",value:function(){return l.a.createElement(n.Fragment,null,l.a.createElement(E,null),l.a.createElement("div",{className:"main-container"},l.a.createElement("div",{style:{maxWidth:1e3,margin:"auto",padding:10}},this.renderContent())))}}]),t}(n.Component),H=function(e){function t(){return Object(s.a)(this,t),Object(c.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return l.a.createElement(d.a,null,l.a.createElement(p.a,null,l.a.createElement(h.a,{exact:!0,path:"/",component:y}),l.a.createElement(h.a,{exact:!0,path:"/new-poll",component:P}),l.a.createElement(h.a,{exact:!0,path:"/poll/:pollID/voter/:voterID",component:U}),l.a.createElement(h.a,{exact:!0,path:"/poll/:pollID/results",component:Y})))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(l.a.createElement(H,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[26,2,1]]]);
//# sourceMappingURL=main.e89e6d28.chunk.js.map