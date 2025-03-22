import{d as m,r as c,n as p,c as u,o as n,w as x,a as t,t as a,b as r,e as i,F as l,f as d}from"./app-Dpxg1-kk.js";import{M as f}from"./MonLayout-CKdw4yiq.js";import"./DropdownMenuTrigger.vue_vue_type_script_setup_true_lang-DqvJ_qTh.js";import"./utils-BvUa_fa_.js";import"./TextLink.vue_vue_type_script_setup_true_lang-Bofad1sM.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";const h={class:"flex-1 p-6 overflow-hidden"},g={class:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6"},v={class:"bg-gray-800 rounded-xl shadow-md p-6 transition-transform transform hover:scale-105"},_={class:"flex items-center justify-between"},y={class:"text-3xl font-bold text-white"},b={class:"bg-gray-800 rounded-xl shadow-md p-6 transition-transform transform hover:scale-105"},w={class:"flex items-center justify-between"},D={class:"text-3xl font-bold text-white"},F={class:"bg-gray-800 rounded-xl shadow-md p-6 transition-transform transform hover:scale-105"},k={class:"flex items-center justify-between"},A={class:"text-3xl font-bold text-white"},j={class:"bg-gray-800 rounded-xl shadow-md p-6 transition-transform transform hover:scale-105"},M={class:"flex items-center justify-between"},B={class:"text-3xl font-bold text-white"},C={class:"grid grid-cols-1 lg:grid-cols-3 gap-6 h-[calc(100%-12rem)]"},I={class:"bg-gray-800 rounded-xl shadow-md p-6 overflow-y-auto transition-transform transform hover:scale-105"},N={class:"space-y-3"},R={class:"text-gray-300"},L={class:"text-white font-medium"},V={class:"bg-gray-800 rounded-xl shadow-md p-6 overflow-y-auto transition-transform transform hover:scale-105"},q={class:"space-y-4"},E={class:"text-sm text-gray-300"},G={class:"text-white"},J={class:"text-xs text-gray-400"},P={class:"bg-gray-800 rounded-xl shadow-md p-6 overflow-y-auto transition-transform transform hover:scale-105"},S={class:"space-y-4"},T={class:"font-medium text-white"},W={class:"text-sm text-gray-300"},$=m({__name:"AdminDashboard",setup(z){const o=c({totalFormations:5,totalDisciplines:15,totalApprenants:120,totalFormateurs:12,niveaux:[{name:"Débutant",count:45},{name:"Intermédiaire",count:50},{name:"Avancé",count:25}],recentActivities:[{id:1,type:"Note ajoutée",description:"Jean Dupont - Programmation: 85%",date:"2025-03-13 09:15"},{id:2,type:"Carnet généré",description:"Marie Curie - Infographie",date:"2025-03-12 14:30"},{id:3,type:"Formation ajoutée",description:"Développement Mobile",date:"2025-03-11 10:00"}],formations:[{name:"Informatique",apprenants:40,disciplines:5,moyenne:82},{name:"Infographie",apprenants:30,disciplines:4,moyenne:89},{name:"Web Dev",apprenants:25,disciplines:3,moyenne:79},{name:"Réseaux",apprenants:15,disciplines:2,moyenne:85},{name:"Gestion",apprenants:10,disciplines:1,moyenne:88}]});return c(!1),p().props.auth.user,(K,s)=>(n(),u(f,null,{default:x(()=>[t("div",h,[t("div",g,[t("div",v,[t("div",_,[t("div",null,[s[0]||(s[0]=t("p",{class:"text-sm text-gray-400"},"Formations",-1)),t("h2",y,a(o.value.totalFormations),1)]),s[1]||(s[1]=t("i",{class:"fas fa-book text-3xl text-blue-400"},null,-1))])]),t("div",b,[t("div",w,[t("div",null,[s[2]||(s[2]=t("p",{class:"text-sm text-gray-400"},"Disciplines",-1)),t("h2",D,a(o.value.totalDisciplines),1)]),s[3]||(s[3]=t("i",{class:"fas fa-list text-3xl text-blue-400"},null,-1))])]),t("div",F,[t("div",k,[t("div",null,[s[4]||(s[4]=t("p",{class:"text-sm text-gray-400"},"Apprenants",-1)),t("h2",A,a(o.value.totalApprenants),1)]),s[5]||(s[5]=t("i",{class:"fas fa-users text-3xl text-blue-400"},null,-1))])]),t("div",j,[t("div",M,[t("div",null,[s[6]||(s[6]=t("p",{class:"text-sm text-gray-400"},"Formateurs",-1)),t("h2",B,a(o.value.totalFormateurs),1)]),s[7]||(s[7]=t("i",{class:"fas fa-chalkboard-teacher text-3xl text-blue-400"},null,-1))])])]),t("div",C,[t("div",I,[s[8]||(s[8]=t("h3",{class:"text-xl font-semibold text-white mb-4"},[t("i",{class:"fas fa-signal mr-2 text-blue-400"}),r("Répartition par Niveau ")],-1)),t("div",N,[(n(!0),i(l,null,d(o.value.niveaux,e=>(n(),i("div",{key:e.name,class:"flex justify-between items-center"},[t("span",R,a(e.name),1),t("span",L,a(e.count),1)]))),128))])]),t("div",V,[s[9]||(s[9]=t("h3",{class:"text-xl font-semibold text-white mb-4"},[t("i",{class:"fas fa-clock mr-2 text-blue-400"}),r("Activités Récentes ")],-1)),t("div",q,[(n(!0),i(l,null,d(o.value.recentActivities,e=>(n(),i("div",{key:e.id,class:"p-3 bg-gray-700 rounded-lg transition-transform transform hover:scale-105"},[t("p",E,a(e.type),1),t("p",G,a(e.description),1),t("span",J,a(e.date),1)]))),128))])]),t("div",P,[s[10]||(s[10]=t("h3",{class:"text-xl font-semibold text-white mb-4"},[t("i",{class:"fas fa-graduation-cap mr-2 text-blue-400"}),r("Formations ")],-1)),t("div",S,[(n(!0),i(l,null,d(o.value.formations,e=>(n(),i("div",{key:e.name,class:"p-3 bg-gray-700 rounded-lg transition-transform transform hover:scale-105"},[t("h4",T,a(e.name),1),t("p",W," Apprenants: "+a(e.apprenants)+" | Disciplines: "+a(e.disciplines)+" | Moyenne: "+a(e.moyenne)+"% ",1)]))),128))])])])])]),_:1}))}});export{$ as default};
