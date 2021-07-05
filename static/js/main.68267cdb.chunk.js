(this.webpackJsonpcounters=this.webpackJsonpcounters||[]).push([[0],{58:function(t,e,n){},76:function(t,e,n){"use strict";n.r(e);var s,c=n(22),i=n.n(c),a=n(47),o=n(10),r=n(11),l=n(12),u=n(14),h=n(13),d=n(1),m=n(17),j=n.n(m),p=n(44),b=(n(33),n(58),n(4)),g=function(t){Object(u.a)(n,t);var e=Object(h.a)(n);function n(){return Object(o.a)(this,n),e.apply(this,arguments)}return Object(r.a)(n,[{key:"changeTitleToInput",value:function(){this.setState({editingTitle:!0})}},{key:"checkChangingToText",value:function(t){(t instanceof d.KeyboardEvent&&"Enter"===t.code||t instanceof d.FocusEvent)&&this.setState({title:t.currentTarget.value,editingTitle:!1})}},{key:"getTitleField",value:function(){var t=Object(b.jsx)(p.a,{onClick:this.changeTitleToInput,className:"title",children:this.state.title}),e=Object(b.jsx)("input",{type:"text",maxLength:12,className:"form-control default titleEdit",onKeyUp:this.checkChangingToText,onBlur:this.checkChangingToText,defaultValue:this.state.title});return this.state.editingTitle?e:t}}]),n}(d.Component),v=n(77),O=function(t){Object(u.a)(n,t);var e=Object(h.a)(n);function n(t){var s;return Object(o.a)(this,n),s=e.call(this,t),j()(Object(l.a)(s)),s.state={title:s.props.children,editingTitle:!1,count:0},s}return Object(r.a)(n,[{key:"getCount",value:function(){return 0===this.state.count?"\u041d\u0443\u043b\u0430":this.state.count}},{key:"doIncrement",value:function(){this.setState({count:this.state.count+1})}},{key:"doDecrement",value:function(){this.setState({count:this.state.count-1})}},{key:"canDecrement",value:function(){return 0===this.state.count}},{key:"render",value:function(){return Object(b.jsxs)(v.a,{color:"warning",className:"m-1 counter bg-warning",children:[this.getTitleField(),Object(b.jsx)("h4",{className:"display-4",children:this.getCount()}),Object(b.jsx)(p.a,{color:"secondary",size:"sm",onClick:this.doIncrement,className:"m-2",children:"\u041f\u043e\u0432\u0435\u045b\u0430\u0458"}),Object(b.jsx)(p.a,{color:"secondary",size:"sm",onClick:this.doDecrement,className:"m-2",disabled:this.canDecrement(),children:"\u0421\u043c\u0430\u045a\u0438"}),Object(b.jsx)(p.a,{color:"danger",size:"sm",onClick:this.props.removeAction,className:"m-2",children:"\u0418\u0437\u0431\u0440\u0438\u0448\u0438"})]})}}]),n}(g),k=function(t){Object(u.a)(n,t);var e=Object(h.a)(n);function n(t){var s;return Object(o.a)(this,n),s=e.call(this,t),j()(Object(l.a)(s)),s.state={title:s.props.children,editingTitle:!1,tenths:0,stopwatch:-1},s}return Object(r.a)(n,[{key:"updateTime",value:function(){this.setState({tenths:this.state.tenths+1})}},{key:"onStart",value:function(){this.setState({stopwatch:window.setInterval(this.updateTime,100)})}},{key:"onPause",value:function(){clearInterval(this.state.stopwatch),this.setState({stopwatch:-1})}},{key:"onStop",value:function(){this.setState({tenths:0,editingTitle:!1,stopwatch:-1}),clearInterval(this.state.stopwatch)}},{key:"isRunning",value:function(){return-1!==this.state.stopwatch}},{key:"getStartButton",value:function(){return Object(b.jsx)(p.a,{color:this.isRunning()?"warning":"success",size:"sm",className:"m-2",onClick:this.isRunning()?this.onPause:this.onStart,children:this.isRunning()?"\u041f\u0430\u0443\u0437\u0438\u0440\u0430\u0458":"\u041f\u043e\u043a\u0440\u0435\u043d\u0438"})}},{key:"isResetButtonDisabled",value:function(){return!this.isRunning()&&0===this.state.tenths}},{key:"getTimeText",value:function(){var t=new Date(100*this.state.tenths);return("0"+t.getUTCHours()).slice(-2)+":"+("0"+t.getUTCMinutes()).slice(-2)+":"+("0"+t.getUTCSeconds()).slice(-2)+":"+String(t.getUTCMilliseconds()/100)}},{key:"render",value:function(){return Object(b.jsxs)(v.a,{color:"info",className:"counter m-1 bg-info",children:[this.getTitleField(),Object(b.jsx)("h4",{className:"display-4",children:this.getTimeText()}),this.getStartButton(),Object(b.jsx)(p.a,{color:"danger",size:"sm",className:"m-2",onClick:this.onStop,disabled:this.isResetButtonDisabled(),children:"\u0420\u0435\u0441\u0435\u0442\u0443\u0458"}),Object(b.jsx)(p.a,{color:"danger",size:"sm",className:"m-2",onClick:this.props.removeAction,children:"\u0418\u0437\u0431\u0440\u0438\u0448\u0438"})]})}}]),n}(g),f=n(78),y=n(79),x=n(80),w=n(81),T=n(84),S=n(85),C=n(83),N=n(82),I=function(t){Object(u.a)(n,t);var e=Object(h.a)(n);function n(t){var s;return Object(o.a)(this,n),s=e.call(this,t),j()(Object(l.a)(s)),s.state={dropdownOpen:!1},s}return Object(r.a)(n,[{key:"toggleDropdown",value:function(){this.setState({dropdownOpen:!this.state.dropdownOpen})}},{key:"getCorrectText",value:function(){return 0===this.props.count?"\u041d\u0435\u043c\u0430 \u0431\u0440\u043e\u0458\u0430\u0447\u0430":"\u0423\u043a\u0443\u043f\u043d\u043e"+(this.props.count%10<2||this.props.count<=20&&this.props.count>4?" \u0438\u043c\u0430 ":" \u0438\u043c\u0430\u0458\u0443 ")+String(this.props.count)+(this.props.count%10===1&&11!==this.props.count?" \u0431\u0440\u043e\u0458\u0430\u0447":" \u0431\u0440\u043e\u0458\u0430\u0447\u0430")}},{key:"canDeleteElements",value:function(){return 0===this.props.count}},{key:"render",value:function(){return Object(b.jsxs)(f.a,{color:"dark",dark:!0,children:[Object(b.jsx)(y.a,{className:"display-4 mb-0 ms-2 text-white",children:this.getCorrectText()}),Object(b.jsxs)(x.a,{children:[Object(b.jsx)(w.a,{children:Object(b.jsxs)(T.a,{className:"m-1",isOpen:this.state.dropdownOpen,toggle:this.toggleDropdown,children:[Object(b.jsx)(S.a,{color:"success",caret:!0,children:"\u0414\u043e\u0434\u0430\u0458"}),Object(b.jsxs)(C.a,{right:!0,children:[Object(b.jsx)(N.a,{onClick:this.props.addIncrementer,children:"\u0411\u0440\u043e\u0458\u0430\u0447"}),Object(b.jsx)(N.a,{onClick:this.props.addStopwatch,children:"\u0428\u0442\u043e\u043f\u0435\u0440\u0438\u0446\u0430"})]})]})}),Object(b.jsx)(w.a,{children:Object(b.jsx)(p.a,{color:"danger",className:"m-1",disabled:this.canDeleteElements(),onClick:this.props.removeAllElements,children:"\u0418\u0437\u0431\u0440\u0438\u0448\u0438 \u0441\u0432\u0435 \u0431\u0440\u043e\u0458\u0430\u0447\u0435"})})]})]})}}]),n}(d.Component);!function(t){t[t.Incrementer=0]="Incrementer",t[t.Stopwatch=1]="Stopwatch"}(s||(s={}));var E=function(t){Object(u.a)(n,t);var e=Object(h.a)(n);function n(t){var c;return Object(o.a)(this,n),c=e.call(this,t),j()(Object(l.a)(c)),c.state={elements:[{type:s.Incrementer,key:1,title:"1. \u0431\u0440\u043e\u0458\u0430\u0447"},{type:s.Stopwatch,key:2,title:"2. \u0448\u0442\u043e\u043f\u0435\u0440\u0438\u0446\u0430"}]},c}return Object(r.a)(n,[{key:"getNewKey",value:function(){var t=this.state.elements.length;return 0!==t?this.state.elements[t-1].key+1:1}},{key:"addCounter",value:function(t){var e=this.getNewKey();console.log("Adding ".concat(s[t]," with key = ").concat(e)),this.setState({elements:[].concat(Object(a.a)(this.state.elements),[{type:t,key:e,title:"".concat(e,". ").concat(t===s.Incrementer?"\u0431\u0440\u043e\u0458\u0430\u0447":"\u0448\u0442\u043e\u043f\u0435\u0440\u0438\u0446\u0430")}])})}},{key:"removeElement",value:function(t){console.log("Deleting element with key = "+t),this.setState({elements:this.state.elements.filter((function(e){return e.key!==t}))})}},{key:"removeAllElements",value:function(){console.log("Deleting all elements"),this.setState({elements:[]})}},{key:"render",value:function(){var t=this;return Object(b.jsxs)(d.Fragment,{children:[Object(b.jsx)(I,{count:this.state.elements.length,addIncrementer:function(){return t.addCounter(s.Incrementer)},addStopwatch:function(){return t.addCounter(s.Stopwatch)},removeAllElements:this.removeAllElements}),Object(b.jsx)("section",{className:"d-inline-block mx-md-auto",children:this.state.elements.map((function(e){switch(e.type){case s.Incrementer:return Object(b.jsx)(O,{removeAction:function(){return t.removeElement(e.key)},children:e.title},e.key);case s.Stopwatch:return Object(b.jsx)(k,{removeAction:function(){return t.removeElement(e.key)},children:e.title},e.key);default:return console.error("Unknown type of counter"),null}}))})]})}}]),n}(d.Component);i.a.render(Object(b.jsx)(E,{}),document.getElementById("root"))}},[[76,1,2]]]);
//# sourceMappingURL=main.68267cdb.chunk.js.map