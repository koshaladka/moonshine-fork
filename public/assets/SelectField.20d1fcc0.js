import{_ as r}from"./FieldWrapper.vue_vue_type_script_setup_true_lang.6e0ac546.js";import{h as p}from"./handlesChanges.5dd1bc9b.js";import{d as u,q as f,_ as m,M as c,o as a,e as v,w as h,P as g,g as n,B as _,t,c as o,F as C,r as b,a3 as w}from"./main.59b16f1c.js";const B=u({name:"SelectField",components:{FieldWrapper:r},mixins:[p],props:{field:{type:Object,required:!0}},setup(){const{t:e}=f();return{t:e}}}),F=["id","name"],$=["disabled","selected"],k=["value"];function S(e,s,y,q,D,M){const i=c("field-wrapper");return a(),v(i,{field:e.field},{default:h(()=>[g(n("select",_({"onUpdate:modelValue":s[0]||(s[0]=l=>e.field.value.value=l),onChange:s[1]||(s[1]=(...l)=>e.handleChanges&&e.handleChanges(...l))},e.field.attributes,{id:e.field.id,name:e.field.name,class:["ms-input ms-input__text form-select",e.field.class]}),[n("option",{value:null,disabled:!e.field.nullable,selected:!e.field.value},t(e.t("ui.select_placeholder")),9,$),(a(!0),o(C,null,b(e.field.items,(l,d)=>(a(),o("option",{key:d+l.value,value:l.value},t(l.label),9,k))),128))],16,F),[[w,e.field.value.value]])]),_:1},8,["field"])}const E=m(B,[["render",S]]);export{E as default};
