(function(){"use strict";var t={3923:function(t,n,o){var e=o(5130),i=o(6768);const a={id:"app"};function s(t,n,o,e,s,r){return(0,i.uX)(),(0,i.CE)("div",a,[(0,i.Lk)("button",{onClick:n[0]||(n[0]=(...t)=>r.copyAdult&&r.copyAdult(...t)),class:"copy-button adult-button"},"Adult"),(0,i.Lk)("button",{onClick:n[1]||(n[1]=(...t)=>r.copyMom&&r.copyMom(...t)),class:"copy-button mom-button"},"Mom"),(0,i.Lk)("button",{onClick:n[2]||(n[2]=(...t)=>r.copyDad&&r.copyDad(...t)),class:"copy-button dad-button"},"Dad"),(0,i.Lk)("button",{onClick:n[3]||(n[3]=(...t)=>r.copyParents&&r.copyParents(...t)),class:"copy-button parents-button"}," Parents "),(0,i.Lk)("button",{onClick:n[4]||(n[4]=(...t)=>r.copyGuardian&&r.copyGuardian(...t)),class:"copy-button guardian-button"}," Guardian "),(0,i.Lk)("button",{onClick:n[5]||(n[5]=(...t)=>r.copyuri&&r.copyuri(...t)),class:"copy-button uri-button"}," URI "),(0,i.Lk)("button",{onClick:n[6]||(n[6]=(...t)=>r.copyDxUri&&r.copyDxUri(...t)),class:"copy-button dx-uri-button"}," Dx:URI "),(0,i.Lk)("button",{onClick:n[7]||(n[7]=(...t)=>r.copySinus&&r.copySinus(...t)),class:"copy-button sinus-button"}," Sinus "),(0,i.Lk)("button",{onClick:n[8]||(n[8]=(...t)=>r.copyekg&&r.copyekg(...t)),class:"copy-button ekg-button"}," EKG ")])}var r={data(){return{adultText:"The patient is given and understands strict follow up and return instruction, patient agrees and wishes to be discharged.",momText:"The mom is given and understands strict follow up and return instruction, mom agrees and wishes to be discharged.",dadText:"The dad is given and understands strict follow up and return instruction, dad agrees and wishes to be discharged.",parentsText:"The parents are given and understand strict follow up and return instruction, the parents agree and wish to be discharged.",guardianText:"The guardian is given and understands strict follow up and return instruction, guardian agrees and wishes to be discharged.",uriText:"The patient presents with cough and congestion. Sinusitis could cause congestion and cough, but it is usually accompanied by facial pain, pressure, and symptoms lasting more than 10 days, which are not present.\n\nBronchitis can present with a cough, but it is typically associated with more severe symptoms such as persistent wheezing or mucus production, which is not the case here.\n\nAllergic Rhinitis might cause congestion and cough due to post-nasal drip, but it is typically associated with sneezing, itching, and watery eyes, which are not present.\n\nPneumonia might present with cough and congestion, but it is usually associated with fever, difficulty breathing, and abnormal lung sounds, which are absent in this presentation.\n\nUpper Respiratory Infection is often viral and is a common cause of cough and congestion, frequently accompanied by mild fatigue or a sore throat. The patient’s presentation aligns well with this diagnosis.\n\nBased on the clinical presentation, upper respiratory infection is considered the most likely diagnosis. The patient is safe for outpatient management. Follow-up is advised if symptoms worsen or fail to improve.",DxUriText:"NASAL CONGESTION - [R09.81] , OTHER FATIGUE- [R53.83], ACUTE UPPER RESPIRATORY INFECTION UNSPECIFIED  - [J06.9], COUGH - [R05], PAIN IN THROAT - [R07.0], MYALGIA, UNSPECIFIED SITE - (M79.10), CONTACT WITH AND (SUSPECTED) EXPOSURE TO OTHER VIRAL COMMUNICABLE DISEASES INCLUDING COVID-19 - [Z20.828]",sinusText:"The patient presents with facial pain and congestion.\n\nMigraine could cause facial pain, but it is typically associated with unilateral throbbing headaches, nausea, and sensitivity to light or sound. These symptoms are not present.\n\nDental Abscess might present with facial pain, especially around the affected tooth, and is usually accompanied by dental symptoms such as toothache, swelling in the gums, or fever. These symptoms are not present.\n\nAllergic Rhinitis can cause congestion, but it is typically associated with itching, sneezing, and watery eyes. These symptoms are not present.\n\nTonsillitis could present with facial pain and congestion, but it is usually accompanied by a sore throat, swollen tonsils, and fever. These symptoms are not present.\n\nSinusitis is an inflammation of the sinuses that typically presents with facial pain or pressure, nasal congestion, purulent nasal discharge, and may be accompanied by fever or fatigue. The patient's symptoms align well with this diagnosis.\n\nBased on the clinical presentation, sinusitis is considered the most likely diagnosis.\n\nThe patient is safe for outpatient management. Follow-up is advised if symptoms worsen or fail to improve.",ekgText:"EKG Interpretation was performed and documented."}},methods:{copyAdult(){navigator.clipboard.writeText(this.adultText).then((()=>{console.log("Text copied to clipboard")})).catch((t=>{console.error("Could not copy text: ",t)}))},copyMom(){navigator.clipboard.writeText(this.momText).then((()=>{console.log("Text copied to clipboard")})).catch((t=>{console.error("Could not copy text: ",t)}))},copyDad(){navigator.clipboard.writeText(this.dadText).then((()=>{console.log("Text copied to clipboard")})).catch((t=>{console.error("Could not copy text: ",t)}))},copyParents(){navigator.clipboard.writeText(this.parentsText).then((()=>{console.log("Text copied to clipboard")})).catch((t=>{console.error("Could not copy text: ",t)}))},copyGuardian(){navigator.clipboard.writeText(this.guardianText).then((()=>{console.log("Text copied to clipboard")})).catch((t=>{console.error("Could not copy text: ",t)}))},copyuri(){navigator.clipboard.writeText(this.uriText).then((()=>{console.log("URI text copied to clipboard")})).catch((t=>{console.error("Could not copy URI text: ",t)}))},copyDxUri(){navigator.clipboard.writeText(this.DxUriText).then((()=>{console.log("Dx:URI text copied to clipboard")})).catch((t=>{console.error("Could not copy Dx:URI text: ",t)}))},copySinus(){navigator.clipboard.writeText(this.sinusText).then((()=>{console.log("Sinus text copied to clipboard")})).catch((t=>{console.error("Could not copy Sinus text: ",t)}))},copyekg(){navigator.clipboard.writeText(this.ekgText).then((()=>{console.log("EKG text copied to clipboard")})).catch((t=>{console.error("Could not copy EKG text: ",t)}))}}},c=o(1241);const u=(0,c.A)(r,[["render",s],["__scopeId","data-v-1edf0bc0"]]);var l=u;(0,e.Ef)(l).mount("#app")}},n={};function o(e){var i=n[e];if(void 0!==i)return i.exports;var a=n[e]={exports:{}};return t[e].call(a.exports,a,a.exports,o),a.exports}o.m=t,function(){var t=[];o.O=function(n,e,i,a){if(!e){var s=1/0;for(l=0;l<t.length;l++){e=t[l][0],i=t[l][1],a=t[l][2];for(var r=!0,c=0;c<e.length;c++)(!1&a||s>=a)&&Object.keys(o.O).every((function(t){return o.O[t](e[c])}))?e.splice(c--,1):(r=!1,a<s&&(s=a));if(r){t.splice(l--,1);var u=i();void 0!==u&&(n=u)}}return n}a=a||0;for(var l=t.length;l>0&&t[l-1][2]>a;l--)t[l]=t[l-1];t[l]=[e,i,a]}}(),function(){o.n=function(t){var n=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(n,{a:n}),n}}(),function(){o.d=function(t,n){for(var e in n)o.o(n,e)&&!o.o(t,e)&&Object.defineProperty(t,e,{enumerable:!0,get:n[e]})}}(),function(){o.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){o.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)}}(),function(){var t={524:0};o.O.j=function(n){return 0===t[n]};var n=function(n,e){var i,a,s=e[0],r=e[1],c=e[2],u=0;if(s.some((function(n){return 0!==t[n]}))){for(i in r)o.o(r,i)&&(o.m[i]=r[i]);if(c)var l=c(o)}for(n&&n(e);u<s.length;u++)a=s[u],o.o(t,a)&&t[a]&&t[a][0](),t[a]=0;return o.O(l)},e=self["webpackChunkcommonbuttons"]=self["webpackChunkcommonbuttons"]||[];e.forEach(n.bind(null,0)),e.push=n.bind(null,e.push.bind(e))}();var e=o.O(void 0,[504],(function(){return o(3923)}));e=o.O(e)})();
//# sourceMappingURL=app.b494fc02.js.map