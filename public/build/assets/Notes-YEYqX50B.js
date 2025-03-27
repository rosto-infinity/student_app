import{d as p,j as u,c as g,A as h,g as l,o as i,e as m,u as _,m as y,w as v,b as t,f as d,t as o,l as w,v as b,F as c,r as D}from"./app-B32XEERy.js";import{M as N}from"./MonLayout-qSQ2KFDw.js";import{_ as M}from"./_plugin-vue_export-helper-DlAUqK2U.js";import"./DropdownMenuTrigger.vue_vue_type_script_setup_true_lang-BbNmasx3.js";import"./utils-RycQgYwf.js";import"./TextLink.vue_vue_type_script_setup_true_lang-BDHw2Uln.js";import"./sun-DRak2UxW.js";import"./createLucideIcon-DuQL7yvt.js";const L={class:"p-4 sm:p-6 bg-gradient-to-br from-gray-900 to-gray-800 text-gray-100 min-h-screen"},j={class:"mb-6 flex flex-col sm:flex-row items-center justify-between animate-slide-in"},k={class:"text-3xl sm:text-4xl font-extrabold text-white flex items-center"},C={class:"text-sm text-gray-400 mt-2 sm:mt-0"},F={class:"grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 mb-6 animate-fade-in"},S={class:"bg-gradient-to-r from-indigo-700 to-indigo-600 rounded-xl p-5 shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"},V={class:"flex items-center justify-between"},B={class:"text-3xl font-extrabold text-white"},T={class:"bg-gradient-to-r from-purple-700 to-purple-600 rounded-xl p-5 shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"},$={class:"flex items-center justify-between"},A={class:"text-3xl font-extrabold text-white"},I={class:"mb-6 animate-slide-in"},R={class:"relative"},E={class:"bg-gray-800 rounded-xl shadow-lg p-6"},G={key:0,class:"space-y-3"},O={class:"text-sm text-teal-300 font-medium"},U={class:"text-white"},q={class:"text-xs text-gray-400"},z={class:"text-xs text-gray-400 whitespace-nowrap"},H={key:1,class:"text-center text-gray-400 py-6"},J=p({__name:"Notes",props:{notesData:{}},setup(x){const s=x,r=u("");g(()=>{if(!r.value)return s.notesData.notes;const n=r.value.toLowerCase();return s.notesData.notes.filter(e=>e.discipline.toLowerCase().includes(n)||e.commentaire.toLowerCase().includes(n))});const f=n=>new Date(n).toLocaleDateString("fr-FR",{day:"2-digit",month:"long",year:"numeric"});return h(()=>{console.log("Notes Data:",s.notesData)}),(n,e)=>(i(),l(c,null,[m(_(y),{title:`Mes Notes${s.notesData.formation?` - ${s.notesData.formation.name}`:""}`},null,8,["title"]),m(N,null,{default:v(()=>[t("div",L,[t("header",j,[t("h1",k,[e[1]||(e[1]=t("i",{class:"fas fa-star mr-3 text-teal-400 animate-pulse"},null,-1)),d(" Mes Notes "+o(s.notesData.formation?`- ${s.notesData.formation.name}`:""),1)]),t("div",C,o(f(new Date().toISOString())),1)]),t("div",F,[t("div",S,[t("div",V,[t("div",null,[e[2]||(e[2]=t("p",{class:"text-sm text-indigo-200"},"Total des Notes",-1)),t("h2",B,o(s.notesData.totalNotes),1)]),e[3]||(e[3]=t("i",{class:"fas fa-star text-4xl text-indigo-300 opacity-80"},null,-1))])]),t("div",T,[t("div",$,[t("div",null,[e[4]||(e[4]=t("p",{class:"text-sm text-purple-200"},"Moyenne Générale",-1)),t("h2",A,o(s.notesData.moyenne.toFixed(1))+"% ",1)]),e[5]||(e[5]=t("i",{class:"fas fa-chart-line text-4xl text-purple-300 opacity-80"},null,-1))])])]),t("div",I,[t("div",R,[e[6]||(e[6]=t("i",{class:"fas fa-search absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"},null,-1)),w(t("input",{"onUpdate:modelValue":e[0]||(e[0]=a=>r.value=a),placeholder:"Rechercher par discipline ou commentaire...",class:"w-full pl-10 pr-4 py-3 bg-gray-700 text-gray-200 rounded-lg border border-gray-600 focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all duration-300 shadow-md"},null,512),[[b,r.value]])])]),t("div",E,[e[8]||(e[8]=t("h3",{class:"text-xl font-semibold text-white mb-4 flex items-center"},[t("i",{class:"fas fa-list mr-2 text-teal-400"}),d(" Détail des Notes ")],-1)),s.notesData.notes.length?(i(),l("div",G,[(i(!0),l(c,null,D(s.notesData.notes,a=>(i(),l("div",{key:a.id,class:"p-4 bg-gray-700 rounded-lg hover:bg-gray-600 transition-all flex items-center justify-between"},[t("div",null,[t("p",O,o(a.discipline),1),t("p",U,o(a.note)+" / "+o(a.max_note),1),t("p",q,o(a.commentaire),1)]),t("span",z,o(a.date),1)]))),128))])):(i(),l("div",H,e[7]||(e[7]=[t("i",{class:"fas fa-info-circle mr-2 text-xl"},null,-1),d(" Aucune note disponible ")])))])])]),_:1})],64))}}),et=M(J,[["__scopeId","data-v-a8cd11f6"]]);export{et as default};
