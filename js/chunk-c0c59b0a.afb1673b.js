(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-c0c59b0a"],{"0bfb":function(t,e,a){"use strict";var i=a("cb7c");t.exports=function(){var t=i(this),e="";return t.global&&(e+="g"),t.ignoreCase&&(e+="i"),t.multiline&&(e+="m"),t.unicode&&(e+="u"),t.sticky&&(e+="y"),e}},"2b05":function(t,e,a){"use strict";var i=a("83f6"),r=a.n(i);r.a},"3b2b":function(t,e,a){var i=a("7726"),r=a("5dbc"),n=a("86cc").f,o=a("9093").f,s=a("aae3"),c=a("0bfb"),l=i.RegExp,u=l,d=l.prototype,p=/a/g,m=/a/g,f=new l(p)!==p;if(a("9e1e")&&(!f||a("79e5")(function(){return m[a("2b4c")("match")]=!1,l(p)!=p||l(m)==m||"/a/i"!=l(p,"i")}))){l=function(t,e){var a=this instanceof l,i=s(t),n=void 0===e;return!a&&i&&t.constructor===l&&n?t:r(f?new u(i&&!n?t.source:t,e):u((i=t instanceof l)?t.source:t,i&&n?c.call(t):e),a?this:d,l)};for(var v=function(t){t in l||n(l,t,{configurable:!0,get:function(){return u[t]},set:function(e){u[t]=e}})},g=o(u),b=0;g.length>b;)v(g[b++]);d.constructor=l,l.prototype=d,a("2aba")(i,"RegExp",l)}a("7a56")("RegExp")},"5dbc":function(t,e,a){var i=a("d3f4"),r=a("8b97").set;t.exports=function(t,e,a){var n,o=e.constructor;return o!==a&&"function"==typeof o&&(n=o.prototype)!==a.prototype&&i(n)&&r&&r(t,n),t}},"83f6":function(t,e,a){},"8b97":function(t,e,a){var i=a("d3f4"),r=a("cb7c"),n=function(t,e){if(r(t),!i(e)&&null!==e)throw TypeError(e+": can't set as prototype!")};t.exports={set:Object.setPrototypeOf||("__proto__"in{}?function(t,e,i){try{i=a("9b43")(Function.call,a("11e9").f(Object.prototype,"__proto__").set,2),i(t,[]),e=!(t instanceof Array)}catch(r){e=!0}return function(t,a){return n(t,a),e?t.__proto__=a:i(t,a),t}}({},!1):void 0),check:n}},fac3:function(t,e,a){"use strict";a.r(e);var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"wiki-active-warp"},[a("div",{staticClass:"wiki-active"},[a("div",{staticClass:"wiki-active-content"},[a("div",{staticClass:"active-content-email"},[t._v("\n        邮箱：\n        "),a("el-form",{ref:"dynamicValidateForm",staticClass:"demo-dynamic",attrs:{model:t.dynamicValidateForm,"label-width":"100px"}},[a("el-form-item",{staticClass:"wiki-modify-main-select-email",attrs:{prop:"email",rules:[{required:!0,message:"请输入邮箱地址",trigger:"blur"},{type:"email",message:"请输入正确的邮箱格式",trigger:"change"}]}},[a("el-input",{model:{value:t.dynamicValidateForm.email,callback:function(e){t.$set(t.dynamicValidateForm,"email",e)},expression:"dynamicValidateForm.email"}})],1)],1)],1),a("input",{directives:[{name:"model",rawName:"v-model",value:t.password,expression:"password"}],staticClass:"active-content-password",attrs:{type:"password",placeholder:"请输入密码"},domProps:{value:t.password},on:{input:function(e){e.target.composing||(t.password=e.target.value)}}}),a("a",{staticClass:"active-content-go-login",attrs:{href:"#/login"}},[t._v("已有账号？登录")]),a("el-button",{attrs:{type:"primary"},on:{click:t.handleActive}},[t._v("发送激活邮件")])],1)])])},r=[],n=(a("3b2b"),a("365c")),o={data:function(){return{password:"",ruleForm2:{pass:"",checkPass:""},errorMessage:"",dynamicValidateForm:{domains:[{value:""}],email:""}}},methods:{handleActive:function(){var t=this,e=new RegExp("^[a-z0-9A-Z]+[- | a-z0-9A-Z . _]+@([a-z0-9A-Z]+(-[a-z0-9A-Z]+)?\\.)+[a-z]{2,}$");""!=this.password?""!=this.dynamicValidateForm.email?e.test(this.dynamicValidateForm.email)?n["p"](this.password,this.dynamicValidateForm.email).then(function(e){e.data.code?(t.$message("发送成功，请在10分钟之内查看邮件激活！"),t.$router.push("/login")):(t.errorMessage=e.data.msg,t.$message({showClose:!0,message:msg,type:"error"}))}):alert("邮箱格式不对，请输入正确的邮箱！"):alert("邮箱为空，请输入邮箱"):alert("密码不能为空")}}},s=o,c=(a("2b05"),a("2877")),l=Object(c["a"])(s,i,r,!1,null,null,null);e["default"]=l.exports}}]);
//# sourceMappingURL=chunk-c0c59b0a.afb1673b.js.map