import{_ as i}from"./FieldWrapper.vue_vue_type_script_setup_true_lang.615e4db7.js";import{h as t}from"./handlesChanges.4f816ecb.js";import{d as r,D as p,_ as u,M as s,o as f,e as m,w as _,g as a,V as v,P as c,W as h,a as C,B as g}from"./main.8d899daf.js";const y=r({name:"ColorField",components:{TheInput:p,FieldWrapper:i},mixins:[t],props:{field:{type:Object,required:!0}}});const w={class:"ms-input__color__wrapper"},V=["id"];function I(e,l,$,b,B,F){const n=s("TheInput"),d=s("field-wrapper");return f(),m(d,{field:e.field},{default:_(()=>[a("div",w,[a("label",{class:"ms-input__color__selector",style:v({backgroundColor:e.field.value.value})},[c(a("input",{"onUpdate:modelValue":l[0]||(l[0]=o=>e.field.value.value=o),type:"color",id:`color-${e.field.id}`,class:"w-0 h-0 opacity-0",onInput:l[1]||(l[1]=(...o)=>e.handleChanges&&e.handleChanges(...o))},null,40,V),[[h,e.field.value.value]])],4),C(n,g({modelValue:e.field.value.value,"onUpdate:modelValue":l[2]||(l[2]=o=>e.field.value.value=o)},e.field.attributes,{type:"text",id:e.field.id,name:e.field.name,onInput:e.handleChanges,class:["ms-input__color",e.field.class]}),null,16,["modelValue","id","name","onInput","class"])])]),_:1},8,["field"])}const M=u(y,[["render",I]]);export{M as default};
