import{_ as n}from"./FieldWrapper.vue_vue_type_script_setup_true_lang.34066549.js";import{h as i}from"./handlesChanges.132683e2.js";import{d,_ as l,M as r,o as t,e as p,w as f,P as m,g as u,B as h,U as c}from"./main.43a7554b.js";const C=d({name:"CheckboxField",components:{FieldWrapper:n},mixins:[i],props:{field:{type:Object,required:!0}}}),b=["id","name"];function k(e,a,v,_,g,w){const s=r("field-wrapper");return t(),p(s,{field:e.field},{default:f(()=>[m(u("input",h({"onUpdate:modelValue":a[0]||(a[0]=o=>e.field.value.value=o),onChange:a[1]||(a[1]=(...o)=>e.handleChanges&&e.handleChanges(...o))},e.field.attributes,{type:"checkbox",id:e.field.id,name:e.field.name,class:["ms-input__checkbox",e.field.class]}),null,16,b),[[c,e.field.value.value]])]),_:1},8,["field"])}const y=l(C,[["render",k]]);export{y as default};
