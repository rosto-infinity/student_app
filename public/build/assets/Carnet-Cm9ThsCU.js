import{M as _}from"./MonLayout-qSQ2KFDw.js";import{d as k,c as p,a as D,o as n,w as C,b as t,g as i,f as a,t as e,F as x,r as c,n as y,h as u}from"./app-B32XEERy.js";import{_ as B}from"./_plugin-vue_export-helper-DlAUqK2U.js";import"./DropdownMenuTrigger.vue_vue_type_script_setup_true_lang-BbNmasx3.js";import"./utils-RycQgYwf.js";import"./TextLink.vue_vue_type_script_setup_true_lang-BDHw2Uln.js";import"./sun-DRak2UxW.js";import"./createLucideIcon-DuQL7yvt.js";const N={class:"max-w-5xl mx-auto p-4 sm:p-6 bg-gradient-to-br from-gray-900 to-gray-800 text-gray-100 min-h-screen"},F={class:"mb-8 animate-slide-in"},M={class:"bg-gray-800 p-4 sm:p-6 rounded-xl shadow-lg text-center"},T={class:"mt-4 text-gray-200 space-y-2"},A={key:0,class:"space-y-6"},z={class:"hidden md:block print-block overflow-x-auto bg-gray-800 rounded-xl shadow-lg"},H={class:"w-full text-left text-gray-200"},I={class:"p-4 print-hide"},S={class:"p-4 font-medium"},L={class:"p-4 print-hide"},V={class:"p-4"},$={class:"p-4"},j={class:"p-4"},E={class:"p-4"},P={class:"p-4 print-hide"},q={class:"md:hidden print-hide space-y-4"},G={class:"text-lg font-semibold text-gray-100 flex items-center"},J={class:"grid grid-cols-2 gap-2 mt-2 text-sm text-gray-200"},K={class:"bg-gradient-to-r from-gray-700 to-gray-600 p-4 sm:p-6 rounded-xl shadow-lg animate-fade-in"},O={class:"grid grid-cols-1 sm:grid-cols-3 gap-4 text-gray-200"},Q={key:1,class:"bg-gradient-to-r from-yellow-900 to-yellow-800 p-6 rounded-xl shadow-lg text-center animate-pulse"},R=k({__name:"Carnet",props:{carnetData:{}},setup(b){const o=b,f=l=>l?l>=16?"text-green-400":l>=12?"text-yellow-400":"text-red-400":"text-gray-400",h=l=>l?l>=16?"Très Bien":l>=14?"Bien":l>=12?"Assez Bien":l>=10?"Passable":"Insuffisant":"Non défini",w=p(()=>o.carnetData.total_heures??o.carnetData.disciplines.reduce((l,s)=>l+s.heures_total,0)),d=p(()=>o.carnetData.moyenne_formation??0),v=()=>{window.print()};return(l,s)=>(n(),D(_,null,{default:C(()=>{var g;return[t("div",N,[t("header",F,[t("div",M,[s[5]||(s[5]=t("h1",{class:"text-2xl sm:text-3xl font-extrabold text-white flex items-center justify-center"},[t("i",{class:"fas fa-book mr-3 text-indigo-400 animate-pulse"}),a(" Carnet de Notes ")],-1)),t("div",T,[t("p",null,[s[0]||(s[0]=t("strong",null,"École :",-1)),a(" "+e(o.carnetData.ecole),1)]),t("p",null,[s[1]||(s[1]=t("strong",null,"Apprenant :",-1)),a(" "+e(o.carnetData.apprenant),1)]),t("p",null,[s[2]||(s[2]=t("strong",null,"Formation/Classe :",-1)),a(" "+e(o.carnetData.titre),1)]),t("p",null,[s[3]||(s[3]=t("strong",null,"Année scolaire :",-1)),a(" "+e(o.carnetData.annee_scolaire),1)])]),t("button",{onClick:v,class:"print-hide mt-4 bg-indigo-600 text-white px-4 py-2 rounded-lg shadow-md hover:bg-indigo-700 transition-all duration-300 flex items-center mx-auto"},s[4]||(s[4]=[t("i",{class:"fas fa-print mr-2"},null,-1),a(" Imprimer ")]))])]),(g=o.carnetData.disciplines)!=null&&g.length?(n(),i("div",A,[t("div",z,[t("table",H,[s[6]||(s[6]=t("thead",{class:"bg-gradient-to-r from-gray-900 to-gray-800 sticky top-0 z-10"},[t("tr",null,[t("th",{class:"p-4 text-sm font-semibold text-gray-300 print-hide"},[t("i",{class:"fas fa-id-badge mr-2"}),a("N°")]),t("th",{class:"p-4 text-sm font-semibold text-gray-300"},[t("i",{class:"fas fa-book-open mr-2"}),a("Discipline")]),t("th",{class:"p-4 text-sm font-semibold text-gray-300 print-hide"},[t("i",{class:"fas fa-clock mr-2"}),a("H. Hebdo")]),t("th",{class:"p-4 text-sm font-semibold text-gray-300"},[t("i",{class:"fas fa-hourglass mr-2"}),a("H. Total")]),t("th",{class:"p-4 text-sm font-semibold text-gray-300"},[t("i",{class:"fas fa-user-tie mr-2"}),a("Formateur")]),t("th",{class:"p-4 text-sm font-semibold text-gray-300"},[t("i",{class:"fas fa-weight mr-2"}),a("Coef")]),t("th",{class:"p-4 text-sm font-semibold text-gray-300"},[t("i",{class:"fas fa-star mr-2"}),a("Notes (/20)")]),t("th",{class:"p-4 text-sm font-semibold text-gray-300 print-hide"},[t("i",{class:"fas fa-check-circle mr-2"}),a("Statut")])])],-1)),t("tbody",null,[(n(!0),i(x,null,c(o.carnetData.disciplines,(r,m)=>(n(),i("tr",{key:r.id,class:"border-b border-gray-700 hover:bg-gray-700 transition-all duration-300 animate-row-in",style:y({animationDelay:`${m*.1}s`})},[t("td",I,e(r.id),1),t("td",S,e(r.titre),1),t("td",L,e(r.heures_hebdo)+"h",1),t("td",V,e(r.heures_total)+"h",1),t("td",$,e(r.formateur),1),t("td",j,e(r.coefficient),1),t("td",E,e(r.note),1),t("td",P,[t("span",{class:u(r.statut==="Terminé"?"text-green-400":"text-yellow-400")},e(r.statut),3)])],4))),128))])])]),t("div",q,[(n(!0),i(x,null,c(o.carnetData.disciplines,(r,m)=>(n(),i("div",{key:r.id,class:"bg-gray-800 p-4 rounded-xl shadow-lg animate-row-in",style:y({animationDelay:`${m*.1}s`})},[t("h3",G,[s[7]||(s[7]=t("i",{class:"fas fa-book-open mr-2 text-indigo-400"},null,-1)),a(e(r.titre),1)]),t("div",J,[t("p",null,[s[8]||(s[8]=t("i",{class:"fas fa-clock mr-1"},null,-1)),a(e(r.heures_hebdo)+"h/sem",1)]),t("p",null,[s[9]||(s[9]=t("i",{class:"fas fa-hourglass mr-1"},null,-1)),a(e(r.heures_total)+"h",1)]),t("p",null,[s[10]||(s[10]=t("i",{class:"fas fa-user-tie mr-1"},null,-1)),a(e(r.formateur),1)]),t("p",null,[s[11]||(s[11]=t("i",{class:"fas fa-weight mr-1"},null,-1)),a(e(r.coefficient),1)]),t("p",null,[s[12]||(s[12]=t("i",{class:"fas fa-star mr-1"},null,-1)),a(e(r.note),1)]),t("p",null,[s[13]||(s[13]=t("i",{class:"fas fa-check-circle mr-1"},null,-1)),t("span",{class:u(r.statut==="Terminé"?"text-green-400":"text-yellow-400")},e(r.statut),3)])])],4))),128))]),t("div",K,[t("div",O,[t("p",null,[s[14]||(s[14]=t("i",{class:"fas fa-hourglass-end mr-2 text-indigo-400"},null,-1)),s[15]||(s[15]=t("strong",null,"Total des heures :",-1)),a(" "+e(w.value)+"h ",1)]),t("p",null,[s[16]||(s[16]=t("i",{class:"fas fa-chart-bar mr-2 text-indigo-400"},null,-1)),s[17]||(s[17]=t("strong",null,"Moyenne :",-1)),t("span",{class:u(f(d.value))},e(d.value?d.value.toFixed(2):"N/A")+" / 20 ",3)]),t("p",null,[s[18]||(s[18]=t("i",{class:"fas fa-award mr-2 text-indigo-400"},null,-1)),s[19]||(s[19]=t("strong",null,"Mention :",-1)),t("span",{class:u(f(d.value))},e(h(d.value)),3)])])])])):(n(),i("div",Q,s[20]||(s[20]=[t("i",{class:"fas fa-exclamation-triangle text-yellow-400 text-3xl mb-3"},null,-1),t("p",{class:"text-gray-200 text-lg"},"Aucune discipline ou notes disponibles pour le moment.",-1)])))])]}),_:1}))}}),at=B(R,[["__scopeId","data-v-9e501c83"]]);export{at as default};
