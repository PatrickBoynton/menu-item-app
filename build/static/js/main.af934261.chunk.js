(this["webpackJsonpmajestic-thai"]=this["webpackJsonpmajestic-thai"]||[]).push([[0],{14:function(e,t,n){},15:function(e,t,n){},17:function(e,t,n){"use strict";n.r(t);var i=n(1),c=n.n(i),r=n(9),a=n.n(r),s=(n(14),n(7)),l=n(2),o=n(3),u=n(6),d=n(5),h=n(4),j=(n(15),n(0)),v=function(e){Object(d.a)(n,e);var t=Object(h.a)(n);function n(e){var i;return Object(l.a)(this,n),(i=t.call(this,e)).handleClick=function(){var e;alert("Your order of ".concat(i.state.value," ").concat(i.props.item," for a price of ").concat((i.props.price*i.state.value).toFixed(2),", will be ready in ").concat(Math.round(25*Math.random())+5," minutes.")),localStorage.setItem("order",JSON.stringify({item:null===(e=i.props)||void 0===e?void 0:e.item,quantity:i.state.value,price:i.props.price*i.state.value}))},i.state={items:[],value:1,menuItem:"",quantity:0},i.handleChange=i.handleChange.bind(Object(u.a)(i)),i}return Object(o.a)(n,[{key:"handleChange",value:function(e){this.setState({value:e.target.value})}},{key:"render",value:function(){var e,t=this,n=null===(e=this.props.order)||void 0===e?void 0:e.map((function(e,n){return Object(j.jsxs)("li",{children:[Object(j.jsx)("h1",{children:t.props.item}),Object(j.jsxs)("p",{children:["$",(t.props.price*t.state.value||0).toFixed(2)]}),Object(j.jsx)("input",{type:"number",value:t.state.value,onChange:t.handleChange})]},n)}));return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)("ul",{children:n}),Object(j.jsx)("button",{onClick:this.handleClick,className:"btn",children:"Order Now!"})]})}}]),n}(i.Component),m=function(e){Object(d.a)(n,e);var t=Object(h.a)(n);function n(e){var i;return Object(l.a)(this,n),(i=t.call(this,e)).state={menuItem:""},i}return Object(o.a)(n,[{key:"render",value:function(){var e,t=this,n=null===(e=this.props.menu)||void 0===e?void 0:e.map((function(e,n){return Object(j.jsxs)("li",{className:"card",children:[e.item,": $",e.price,Object(j.jsx)("button",{onClick:function(){var e;return null===(e=t.props)||void 0===e?void 0:e.click(n,t.props)},children:"Add to Cart"})]},n)}));return Object(j.jsx)("ul",{className:"menu",children:n})}}]),n}(i.Component),b=function(e){Object(d.a)(n,e);var t=Object(h.a)(n);function n(){return Object(l.a)(this,n),t.apply(this,arguments)}return Object(o.a)(n,[{key:"render",value:function(){return Object(j.jsx)("nav",{children:Object(j.jsxs)("ul",{children:[Object(j.jsxs)("li",{children:[Object(j.jsx)("a",{href:"#",children:"Home"})," "]}),Object(j.jsx)("li",{children:Object(j.jsx)("a",{href:"#",children:"About"})}),Object(j.jsx)("li",{children:Object(j.jsx)("a",{href:"#",children:"Menu"})}),Object(j.jsx)("li",{children:Object(j.jsx)("a",{href:"#",children:"Cart"})})]})})}}]),n}(i.Component),p=function(e){Object(d.a)(n,e);var t=Object(h.a)(n);function n(e){var i;return Object(l.a)(this,n),(i=t.call(this,e)).state={menuItem:"Add Item to Cart",order:[]},i.handleClick=i.handleClick.bind(Object(u.a)(i)),i}return Object(o.a)(n,[{key:"componentDidMount",value:function(){this.setState({menu:[{item:"Curry",price:"4.99"},{item:"Sweet and Sour",price:"5.99"},{item:"Pad Thai",price:"8.99"},{item:"Cake",price:"2.99"}],order:[{}]})}},{key:"handleClick",value:function(e,t){var n,i,c,r;this.setState((r={},Object(s.a)(r,this.state.order,[{items:[{item:null===(n=this.props[e])||void 0===n?void 0:n.menuItem,price:null===(i=this.props[e])||void 0===i?void 0:i.price}],quantity:1,price:null===(c=this.props[e])||void 0===c?void 0:c.menuPrice}]),Object(s.a)(r,"menuItem",null===t||void 0===t?void 0:t.menu[e].item),Object(s.a)(r,"menuPrice",null===t||void 0===t?void 0:t.menu[e].price),Object(s.a)(r,"quantity",1),r))}},{key:"render",value:function(){var e,t,n,i,c,r,a;return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)(b,{}),Object(j.jsx)("h1",{children:"Majestic Thai"}),Object(j.jsxs)("div",{className:"App",children:[Object(j.jsx)(m,{className:"card",click:this.handleClick,menu:null===(e=this.state)||void 0===e?void 0:e.menu,item:null===(t=this.state)||void 0===t?void 0:t.menuItem}),Object(j.jsx)(v,{order:null===(n=this.state)||void 0===n?void 0:n.order,menu:null===(i=this.state)||void 0===i?void 0:i.menu,item:null===(c=this.state)||void 0===c?void 0:c.menuItem,price:null===(r=this.state)||void 0===r?void 0:r.menuPrice,quantity:null===(a=this.state)||void 0===a?void 0:a.quantity})]})]})}}]),n}(i.Component),O=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,18)).then((function(t){var n=t.getCLS,i=t.getFID,c=t.getFCP,r=t.getLCP,a=t.getTTFB;n(e),i(e),c(e),r(e),a(e)}))};a.a.render(Object(j.jsx)(c.a.StrictMode,{children:Object(j.jsx)(p,{})}),document.getElementById("root")),O()}},[[17,1,2]]]);
//# sourceMappingURL=main.af934261.chunk.js.map