(function(){"use strict";var a={9315:function(a,e,t){var n=t(9242),i=t(3396);const r={class:"wrap"};function o(a,e,t,n,o,l){const s=(0,i.up)("nav-bar"),c=(0,i.up)("main-page"),u=(0,i.up)("print-form-page"),d=(0,i.up)("code-view-page");return(0,i.wg)(),(0,i.iD)("div",r,[(0,i.Wm)(s),(0,i.Wm)(c),(0,i.Wm)(u),(0,i.Wm)(d)])}const l=(0,i.uE)('<nav class="navbar navbar-expand-lg navbar-light my-nav-bg" data-v-4a7bb1c2><div class="container-xl" data-v-4a7bb1c2><a class="navbar-brand" href="#" data-v-4a7bb1c2>SimplePrint</a><button class="navbar-toggler collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#navbarData" aria-controls="navbarData" aria-expanded="false" aria-label="Toggle navigation" data-v-4a7bb1c2><span class="navbar-toggler-icon" data-v-4a7bb1c2></span></button><div class="navbar-collapse collapse" id="navbarData" style="" data-v-4a7bb1c2><ul class="navbar-nav me-auto mb-2 mb-lg-0" data-v-4a7bb1c2><li class="nav-item" data-v-4a7bb1c2><a class="nav-link active" aria-current="page" href="#" data-v-4a7bb1c2>О нас</a></li><li class="nav-item" data-v-4a7bb1c2><a class="nav-link active" aria-current="page" href="#" data-v-4a7bb1c2>Цены</a></li><li class="nav-item" data-v-4a7bb1c2><a class="nav-link active" aria-current="page" href="#" data-v-4a7bb1c2>Вопросы</a></li><li class="nav-item" data-v-4a7bb1c2><a class="nav-link active" aria-current="page" href="#" data-v-4a7bb1c2>Поддержка</a></li></ul></div></div></nav>',1),s=[l];function c(a,e,t,n,r,o){return(0,i.wg)(),(0,i.iD)("header",null,s)}var u={name:"NavBar"},d=t(89);const v=(0,d.Z)(u,[["render",c],["__scopeId","data-v-4a7bb1c2"]]);var p=v;const f={class:"main_wrapper"},b={class:"wrapper"},m={class:"to_print_page_button"};function h(a,e,t,n,r,o){return(0,i.wg)(),(0,i.iD)("div",f,[(0,i._)("div",b,[(0,i._)("div",m,[(0,i._)("button",{type:"button",class:"btn btn-primary",onClick:e[0]||(e[0]=(...a)=>o.to_print_page&&o.to_print_page(...a))},"Начать печатать")])])])}var g=t(6943),_={name:"main-page",methods:{async to_print_page(){this.isLoading=!0,await g.Z.get("http://localhost:8000/v1/print/form/",{}).then((()=>{this.isLoading=!1}))}}};const w=(0,d.Z)(_,[["render",h],["__scopeId","data-v-2a60412c"]]);var y=w;const O=a=>((0,i.dD)("data-v-ef628ab8"),a=a(),(0,i.Cn)(),a),k={class:"main_wrapper"},D={class:"wrapper"},C={class:"to_main_page_button"},Z={class:"large-12 medium-12 small-12 cell"},j=O((()=>(0,i._)("label",null,"Цвет",-1))),S={ref:"color"},x=O((()=>(0,i._)("option",{selected:"",value:"BLACK"},"Черно-Белый",-1))),P=O((()=>(0,i._)("option",{value:"COLOR"},"Цветной",-1))),T=[x,P],$=O((()=>(0,i._)("label",null,"Формат",-1))),F={ref:"format"},L=O((()=>(0,i._)("option",{selected:"",value:"ONE-SIDE"},"Односторонний",-1))),I=O((()=>(0,i._)("option",{value:"TWO-SIDE"},"Двусторонний",-1))),z=[L,I],E=O((()=>(0,i._)("label",{for:"amount"},"Кол-во копий",-1))),W={type:"number",size:"3",name:"amount",min:"1",max:"10",value:"1",ref:"amount"};function A(a,e,t,n,r,o){return(0,i.wg)(),(0,i.iD)("div",k,[(0,i._)("div",D,[(0,i._)("div",C,[(0,i._)("div",Z,[(0,i._)("label",null,[(0,i.Uk)("Файл "),(0,i._)("input",{type:"file",id:"file",ref:"file",onChange:e[0]||(e[0]=a=>o.handleFileUpload())},null,544)])]),(0,i._)("div",null,[j,(0,i._)("select",S,T,512)]),(0,i._)("div",null,[$,(0,i._)("select",F,z,512)]),(0,i._)("div",null,[E,(0,i._)("input",W,null,512)]),(0,i._)("button",{type:"button",class:"btn btn-primary",onClick:e[1]||(e[1]=(...a)=>o.submitFile&&o.submitFile(...a))},"Печатать ")])])])}var B={name:"print-form-page",data(){return{file:"",validate:"",code:""}},methods:{handleFileUpload(){this.$refs.file.files[0]&&(this.file=this.$refs.file.files[0])},async submitFile(){if(!this.file)return;console.log(this.file.name),console.log(this.file.size);let a=this.file.name.split("."),e=!1;if("pdf"===a[a.length-1].toLowerCase()&&(e=!0),!e||this.file.size>104857600)return;console.log(this.$refs.color.value);let t=new FormData;t.append("file",this.file);let n=parseInt(this.$refs.amount.value);n>10&&(n=10),n<1&&(n=1),this.$refs.amount.value=n,await g.Z.post("http://localhost:8000/v1/print/form/filled/",t,{params:{color:this.$refs.color.value,format:this.$refs.format.value,amount:this.$refs.amount.value}},{headers:{"Content-Type":"multipart/form-data"}}).then((({data:a})=>{this.isLoading=!1,a.validate&&a.code&&(this.code=a.code)})),this.code&&await g.Z.get("http://localhost:8000/v1/print/code/",{code:this.code}).then((()=>{}))}}};const M=(0,d.Z)(B,[["render",A],["__scopeId","data-v-ef628ab8"]]);var N=M;const U={class:"main_wrapper"},K={class:"wrapper"},R={class:"output_window"},V={ref:"code",value:"123456"};function q(a,e,t,n,r,o){return(0,i.wg)(),(0,i.iD)("div",U,[(0,i._)("div",K,[(0,i._)("div",R,[(0,i._)("input",V,null,512)])])])}var G={name:"code-view-page",data(){return{code:""}},methods:{async get_data(){this.isLoading=!0,await g.Z.get("http://localhost:8000/v1/form/code/",{}).then((({data:a})=>{this.$refs.code.value=a.code,this.isLoading=!1}))}}};const H=(0,d.Z)(G,[["render",q]]);var J=H,Q={name:"App",components:{NavBar:p,MainPage:y,PrintFormPage:N,CodeViewPage:J}};const X=(0,d.Z)(Q,[["render",o]]);var Y=X,aa=t(5269),ea=t.n(aa);t(5654);const ta=a=>{a?g.Z.defaults.headers={Authorization:"Bearer "+a}:delete g.Z.defaults.headers.Authorization};var na=ta;localStorage.jwtToken?na(localStorage.jwtToken):na(!1);const ia=(0,n.ri)(Y);ia.use(ea()),ia.mount("#app")}},e={};function t(n){var i=e[n];if(void 0!==i)return i.exports;var r=e[n]={exports:{}};return a[n].call(r.exports,r,r.exports,t),r.exports}t.m=a,function(){var a=[];t.O=function(e,n,i,r){if(!n){var o=1/0;for(u=0;u<a.length;u++){n=a[u][0],i=a[u][1],r=a[u][2];for(var l=!0,s=0;s<n.length;s++)(!1&r||o>=r)&&Object.keys(t.O).every((function(a){return t.O[a](n[s])}))?n.splice(s--,1):(l=!1,r<o&&(o=r));if(l){a.splice(u--,1);var c=i();void 0!==c&&(e=c)}}return e}r=r||0;for(var u=a.length;u>0&&a[u-1][2]>r;u--)a[u]=a[u-1];a[u]=[n,i,r]}}(),function(){t.n=function(a){var e=a&&a.__esModule?function(){return a["default"]}:function(){return a};return t.d(e,{a:e}),e}}(),function(){t.d=function(a,e){for(var n in e)t.o(e,n)&&!t.o(a,n)&&Object.defineProperty(a,n,{enumerable:!0,get:e[n]})}}(),function(){t.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(a){if("object"===typeof window)return window}}()}(),function(){t.o=function(a,e){return Object.prototype.hasOwnProperty.call(a,e)}}(),function(){t.r=function(a){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(a,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(a,"__esModule",{value:!0})}}(),function(){var a={143:0};t.O.j=function(e){return 0===a[e]};var e=function(e,n){var i,r,o=n[0],l=n[1],s=n[2],c=0;if(o.some((function(e){return 0!==a[e]}))){for(i in l)t.o(l,i)&&(t.m[i]=l[i]);if(s)var u=s(t)}for(e&&e(n);c<o.length;c++)r=o[c],t.o(a,r)&&a[r]&&a[r][0](),a[r]=0;return t.O(u)},n=self["webpackChunksimpleprintweb"]=self["webpackChunksimpleprintweb"]||[];n.forEach(e.bind(null,0)),n.push=e.bind(null,n.push.bind(n))}();var n=t.O(void 0,[998],(function(){return t(9315)}));n=t.O(n)})();
//# sourceMappingURL=app.e4b2f900.js.map