import{o as f,c as h,g as o,h as r,a as d,w as u,T as m,i as _}from"./main.53808d6f.js";import{F as p,f as F}from"./view.2c3d720f.js";const g={class:"text-2xl"},$={class:"space-y-4"},C={class:"mt-4"},B={__name:"CardBlockLayout",setup(s){return(e,t)=>(f(),h("section",null,[o("header",null,[o("h2",g,[r(e.$slots,"title")]),o("div",null,[r(e.$slots,"header")])]),d(m,{class:"mt-2"},{default:u(()=>[o("main",$,[r(e.$slots,"default")]),o("footer",C,[r(e.$slots,"footer")])]),_:3})]))}},E=B,n=s=>_(s,{state:()=>({attributes:{},fields:[],loaded:!1,fetching:!1}),getters:{nonRelationFields(e){return e.fields.filter(t=>!t.resource)},relationFields(e){return e.fields.filter(t=>!!t.resource)},getAjaxForm(){const e={};return this.fields.forEach(t=>e[t.key]=t.value),e}},actions:{setForm(e){const{fields:t,...a}=e;this.fields=[],t==null||t.forEach(i=>this.fields.push(new p(i))),Object.assign(this.$state,a)},fetch(e,t,a,i){this.fetching=!0,F(e,t,a,i).then(c=>{this.setForm(c.data),this.fetching=!1})},reset(){this.$reset()}}}),l={};function V(s){return s=`form-${s}`,l[s]||(l[s]=n(s)),n(s)()}export{E as C,V as u};
