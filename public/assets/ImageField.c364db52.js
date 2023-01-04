import{_ as I}from"./FieldWrapper.vue_vue_type_script_setup_true_lang.d54178d3.js";import{h as S}from"./handlesChanges.92ca7d9e.js";import{d as w,$ as U,a0 as $,G as t,s as V,a1 as z,v as y,_ as C,N as v,o as n,c as s,g as f,t as c,A as m,b as B,e as k,z as L,y as F,F as N,r as E,w as q,a as X}from"./main.304729cc.js";const A=w({name:"FileUploader",components:{XCircleIcon:U,BackwardIcon:$},props:{fileLabel:{type:String,default:null},name:{type:String,default:"file"},id:{type:String,default:"file_uploader"},previewUrl:{type:String,default:null},uploading:{type:Boolean,default:!1},disabled:{type:Boolean,default:!1},accepts:{type:String,required:!1},maxSize:{type:Number,default:0},emitNotValid:{type:Boolean,default:!1},value:{required:!0}},setup(e,{emit:a}){const l=t(null),u=t(!1),r=t(null),{t:h}=V();z(()=>e.value,o=>{l.value=o});const d=y(()=>!e.disabled&&!l.value&&!e.uploading&&!e.fileLabel),p=y(()=>{var b,g;const o=[];return l.value&&typeof l.value!="string"&&(e.maxSize&&((b=l.value)==null?void 0:b.size)>e.maxSize*1024&&o.push({key:"ui.validation.file_size",params:{maxSize:e.maxSize}}),((g=e.accepts)==null?void 0:g.indexOf(l.value.type))===-1&&o.push({key:"ui.validation.unsupported_file_type",params:{}})),o}),i=y(()=>p.value.length>0);return{t:h,file:l,fileInput:r,enabledInput:d,validationErrors:p,hasValidationErrors:i,fileUploaded:u,handleFileUpload:()=>{l.value=r.value.files[0],a("shine:fileUploaded"),a("shine:fileValidation",i.value),!(i.value&&!e.emitNotValid)&&a("shine:input",l.value)},simulateClick:()=>{var o;d.value&&((o=r.value)==null||o.click())},clearFile:()=>{l.value=null,r.value&&(r.value.files=null),a("shine:input",l.value),a("shine:fileCleared",l.value)}}}}),M={key:0,class:"h-full w-full"},O={key:1,class:"ms-input__file-uploader__preview__wrapper"},j=["alt","src"],D={class:"ms-input__file-uploader__text-wrapper"},G=f("br",null,null,-1),T={key:0},W={key:0,class:"text-right"},H=["id","accept","disabled","name"],J={key:0,class:"text-danger-500 block"};function K(e,a,l,u,r,h){const d=v("BackwardIcon"),p=v("XCircleIcon");return n(),s("section",null,[f("section",{class:F([{error:e.hasValidationErrors&&!e.emitNotValid},"ms-input ms-input__file-uploader"]),onClick:a[1]||(a[1]=(...i)=>e.simulateClick&&e.simulateClick(...i))},[!e.file&&!e.fileLabel?(n(),s("div",M,c(e.t("ui.drag_drop_file")),1)):(n(),s("div",O,[e.previewUrl?(n(),s("img",{key:0,alt:e.fileLabel,src:e.previewUrl,class:"ms-input__file-uploader__preview"},null,8,j)):m("",!0),f("div",D,[f("span",null,[B(c(e.fileLabel||e.file.name),1),G,e.file?(n(),s("i",T,c(Math.round(e.file.size/1024))+" \u043A\u0431",1)):m("",!0)]),e.file||e.fileLabel?(n(),s("div",W,[e.uploading?(n(),k(d,{key:0,class:"ms-input__file-uploader__spinner"})):(n(),k(p,{key:1,class:"ms-input__file-uploader__delete",onClick:L(e.clearFile,["stop"])},null,8,["onClick"]))])):m("",!0)])])),f("input",{id:e.name,ref:"fileInput",accept:e.accepts,disabled:!e.enabledInput,name:e.name,class:"hidden",type:"file",onChange:a[0]||(a[0]=(...i)=>e.handleFileUpload&&e.handleFileUpload(...i))},null,40,H)],2),e.hasValidationErrors?(n(),s("small",J,[(n(!0),s(N,null,E(e.validationErrors,i=>(n(),s("span",null,c(e.t(i.key,i.params)),1))),256))])):m("",!0)])}const P=C(A,[["render",K]]),Q=w({name:"ImageField",components:{FileUploader:P,FieldWrapper:I},mixins:[S],props:{field:{type:Object,required:!0}},setup(){const e=t(null),a=t(field.preview),l=t(field.url),u=t(field.image_label);return{file:e,preview:a,url:l,fileLabel:u,clearFile:()=>{e.value=null,a.value=null,l.value=null,u.value=null}}}});function R(e,a,l,u,r,h){const d=v("FileUploader"),p=v("field-wrapper");return n(),k(p,{field:e.field},{default:q(()=>{var i,_;return[X(d,{"file-label":(i=e.fileLabel)!=null?i:e.url,"preview-url":(_=e.preview)!=null?_:e.url,accepts:e.field.accept,name:e.field.name,id:e.field.id,class:F(e.field.class),value:e.file,"onShine:fileCleared":e.clearFile},null,8,["file-label","preview-url","accepts","name","id","class","value","onShine:fileCleared"])]}),_:1},8,["field"])}const ae=C(Q,[["render",R]]);export{ae as default};
