import{d as _,r as m,k as p,c as w,o as a,w as k,a as e,b as l,i as f,e as o,F as x,f as g,t as i,j as D,v as C,p as S,q as V}from"./app-Dpxg1-kk.js";import{M as B}from"./MonLayout-CKdw4yiq.js";import{_ as F}from"./_plugin-vue_export-helper-DlAUqK2U.js";import"./DropdownMenuTrigger.vue_vue_type_script_setup_true_lang-DqvJ_qTh.js";import"./utils-BvUa_fa_.js";import"./TextLink.vue_vue_type_script_setup_true_lang-Bofad1sM.js";const I={class:"p-6 bg-gray-900 text-gray-100 min-h-screen overflow-hidden"},L={class:"mb-4"},M=["value"],N={class:"grid grid-cols-1 gap-4 mb-8"},T={class:"bg-gray-800 rounded-lg shadow-lg p-4 flex items-center justify-between transform hover:scale-105 transition-all duration-300 animate-bounce-in"},j={class:"flex items-center"},A={class:"text-lg font-bold text-white animate-number"},U={class:"relative mb-8 animate-fade-up"},q={class:"bg-gray-800 rounded-xl shadow-2xl overflow-hidden transform transition-all duration-500 hover:shadow-[0_0_15px_rgba(59,130,246,0.5)]"},z={class:"min-w-full"},E={class:"py-4 px-6 text-gray-100 hover:text-blue-300 transition-colors duration-200"},G={class:"py-4 px-6 text-gray-300 hover:text-blue-300 transition-colors duration-200"},Q={key:0,class:"p-6 text-center text-gray-400 animate-pulse"},R=_({__name:"Index",props:{disciplines:{},formations:{}},setup(b){const v=b,r=m(""),n=m(""),d=p(()=>{const u=r.value.toLowerCase();return v.disciplines.filter(t=>{const s=n.value?t.formation_ids.includes(parseInt(n.value)):!0,c=t.nom.toLowerCase().includes(u);return s&&c})}),y=p(()=>d.value.length),h=()=>{r.value=""};return(u,t)=>(a(),w(B,null,{default:k(()=>[e("div",I,[t[8]||(t[8]=e("h1",{class:"text-3xl font-extrabold mb-8 flex items-center animate-slide-in"},[e("i",{class:"fas fa-book mr-3 text-blue-400 text-4xl animate-spin-slow"}),l(" Gestion des Disciplines ")],-1)),e("div",L,[f(e("select",{"onUpdate:modelValue":t[0]||(t[0]=s=>n.value=s),onChange:h,class:"w-full bg-gray-800 border border-gray-700 rounded-lg text-gray-100 p-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"},[t[2]||(t[2]=e("option",{value:""},"Toutes mes formations",-1)),(a(!0),o(x,null,g(u.formations,s=>(a(),o("option",{key:s.id,value:s.id},i(s.titre),9,M))),128))],544),[[D,n.value]])]),e("div",N,[e("div",T,[e("div",j,[t[4]||(t[4]=e("i",{class:"fas fa-book-open text-2xl text-blue-400 mr-3 animate-pulse"},null,-1)),e("div",null,[t[3]||(t[3]=e("p",{class:"text-xs text-gray-400"},"Disciplines",-1)),e("h2",A,i(y.value),1)])])])]),e("div",U,[t[5]||(t[5]=e("i",{class:"fas fa-search absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 animate-pulse"},null,-1)),f(e("input",{"onUpdate:modelValue":t[1]||(t[1]=s=>r.value=s),type:"text",placeholder:"Rechercher par nom de discipline",class:"w-full pl-12 pr-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent shadow-md hover:shadow-xl transition-all duration-300 hover:bg-gray-700"},null,512),[[C,r.value]])]),e("div",q,[e("table",z,[t[6]||(t[6]=e("thead",null,[e("tr",{class:"bg-gradient-to-r from-gray-700 to-gray-800 text-gray-200 animate-slide-in"},[e("th",{class:"py-4 px-6 text-left font-semibold"},[e("i",{class:"fas fa-book mr-2 text-blue-400 animate-pulse"}),l("Nom de Discipline ")]),e("th",{class:"py-4 px-6 text-left font-semibold"},[e("i",{class:"fas fa-info-circle mr-2 text-blue-400 animate-pulse"}),l("Description ")])])],-1)),e("tbody",null,[(a(!0),o(x,null,g(d.value,(s,c)=>(a(),o("tr",{key:s.id,class:"border-b border-gray-700 hover:bg-gray-700 transition-all duration-300 animate-row-in",style:V({animationDelay:`${.7+c*.1}s`})},[e("td",E,i(s.nom),1),e("td",G,i(s.description||"Aucune description disponible"),1)],4))),128))])]),d.value.length===0?(a(),o("div",Q,t[7]||(t[7]=[e("i",{class:"fas fa-exclamation-circle mr-2 text-xl animate-bounce"},null,-1),l(" Aucune discipline trouvée ")]))):S("",!0)])])]),_:1}))}}),W=F(R,[["__scopeId","data-v-caeb476a"]]);export{W as default};
