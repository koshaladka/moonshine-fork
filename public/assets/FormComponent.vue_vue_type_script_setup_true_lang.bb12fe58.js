import{u as C,C as f}from"./form_component.e95d489c.js";import{d as _,o as n,c as l,a as c,w as a,b as m,t as K,u as s,F as u,r as i,e as d,f as p,n as k}from"./main.9905be75.js";const g=_({__name:"FormComponent",props:{resourceKey:null,viewKey:null,viewComponentKey:null,resourceId:null},setup(y){const t=y,r=C(`${t.resourceKey}-${t.resourceId}`);return r.fetch(t.resourceKey,t.viewKey,t.viewComponentKey,t.resourceId),(w,F)=>(n(),l(u,null,[c(f,null,{title:a(()=>[m(K(s(r).title),1)]),default:a(()=>[(n(!0),l(u,null,i(s(r).nonRelationFields,e=>{var o;return n(),d(p(e.getEditComponent()),{key:`field-${(o=e.id)!=null?o:e.name}`,field:e},null,8,["field"])}),128))]),footer:a(()=>[c(k,{brand:"",class:"ml-auto"},{default:a(()=>[m("Update")]),_:1})]),_:1}),(n(!0),l(u,null,i(s(r).relationFields,e=>{var o;return n(),d(p(e.getEditComponent()),{key:`rel-field-${(o=e.id)!=null?o:e.name}`,field:e},null,8,["field"])}),128))],64))}});export{g as _};
