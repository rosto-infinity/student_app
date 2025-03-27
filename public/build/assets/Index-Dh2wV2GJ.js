import{d as B,j as v,c as h,q as E,g as d,o as u,e as b,u as T,m as U,w as _,b as t,f as l,h as o,l as j,v as O,F as k,r as N,t as i,p as R,i as H,n as M,C as G}from"./app-B32XEERy.js";import{_ as L}from"./TextLink.vue_vue_type_script_setup_true_lang-BDHw2Uln.js";import{M as J}from"./MonLayout-qSQ2KFDw.js";import{_ as K}from"./_plugin-vue_export-helper-DlAUqK2U.js";import"./DropdownMenuTrigger.vue_vue_type_script_setup_true_lang-BbNmasx3.js";import"./utils-RycQgYwf.js";import"./sun-DRak2UxW.js";import"./createLucideIcon-DuQL7yvt.js";const Q={class:"container mx-auto px-4 py-3 text-gray-900 dark:text-gray-100"},W={class:"flex flex-col sm:flex-row items-center justify-between mb-3 animate-fade-in"},X={class:"text-2xl sm:text-3xl font-extrabold flex items-center"},Y={class:"flex flex-col space-y-2 sm:flex-row sm:space-y-0 sm:space-x-4 mb-4 animate-slide-up",style:{animationDelay:"0.2s"}},Z={class:"relative flex-1"},tt={class:"relative sm:w-48"},et=["value"],st={class:"mb-4 text-gray-600 dark:text-gray-300 text-sm sm:text-base"},at={class:"rounded-xl shadow-lg bg-white dark:bg-gray-800 animate-fade-in",style:{animationDelay:"0.4s"}},rt={class:"hidden sm:block max-h-[60vh] overflow-y-auto relative"},lt={class:"min-w-full table-fixed"},ot={class:"bg-gray-100 dark:bg-gray-700 sticky top-0 z-10"},it={class:"w-16 px-2 py-3 text-left font-semibold text-gray-700 dark:text-gray-200 text-sm"},nt={class:"w-28 px-2 py-3 text-left font-semibold text-gray-700 dark:text-gray-200 text-sm"},dt={class:"w-28 px-2 py-3 text-left font-semibold text-gray-700 dark:text-gray-200 text-sm"},ut={class:"w-48 px-2 py-3 text-left font-semibold text-gray-700 dark:text-gray-200 text-sm"},mt={class:"w-36 px-2 py-3 text-left font-semibold text-gray-700 dark:text-gray-200 text-sm"},ct={class:"w-40 px-2 py-3 text-left font-semibold text-gray-700 dark:text-gray-200 text-sm"},xt={class:"px-2 py-3 text-gray-900 dark:text-gray-100 text-sm"},ft=["title"],gt=["title"],pt=["title"],yt=["title"],bt={class:"bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-300 px-2 py-1 rounded-full text-xs"},vt={class:"px-2 py-3 flex space-x-2"},ht=["onClick"],_t={class:"sm:hidden space-y-3 p-3 max-h-[60vh] overflow-y-auto"},kt={class:"flex justify-between items-start"},wt={class:"text-sm font-semibold text-gray-900 dark:text-gray-100"},Ct=["title"],At={class:"text-xs mt-1"},Nt={class:"bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-300 px-2 py-1 rounded-full"},Lt={class:"flex space-x-2"},Pt=["onClick"],St={key:0,class:"p-4 text-center text-gray-500 dark:text-gray-400 animate-pulse"},Dt={key:0,class:"flex flex-col sm:flex-row justify-between items-center py-2 px-4 bg-gray-50 dark:bg-gray-700 rounded-b-lg text-sm space-y-2 sm:space-y-0"},jt=["disabled"],Ht={class:"text-gray-700 dark:text-gray-200"},Mt=["disabled"],P=20,Vt=B({__name:"Index",props:{apprenants:{type:Object,required:!0}},setup(V){const w=V,f=v(""),g=v(""),m=v([...w.apprenants]),n=v(1),F=h(()=>{const r=new Set(w.apprenants.map(e=>{var s;return((s=e.formation)==null?void 0:s.titre)||"Non assignée"}));return["Choisir une formation",...Array.from(r)]});E([f,g],()=>{$(),n.value=1});function $(){let r=[...w.apprenants];f.value&&(r=r.filter(e=>{var s,p,c,x;return((s=e.nom)==null?void 0:s.toLowerCase().includes(f.value.toLowerCase()))||""||((p=e.prenom)==null?void 0:p.toLowerCase().includes(f.value.toLowerCase()))||""||((x=(c=e.user)==null?void 0:c.email)==null?void 0:x.toLowerCase().includes(f.value.toLowerCase()))||""})),g.value&&g.value!=="Choisir une formation"&&(r=r.filter(e=>{var s;return(((s=e.formation)==null?void 0:s.titre)||"Non assignée")===g.value})),m.value=r}function S(r){confirm("Êtes-vous sûr de vouloir supprimer cet étudiant ?")&&G().delete(route("apprenants.destroy",r),{preserveScroll:!0,onSuccess:()=>{m.value=m.value.filter(e=>e.id!==r)}})}const D=h(()=>{const r=(n.value-1)*P,e=r+P;return m.value.slice(r,e)}),C=h(()=>Math.ceil(m.value.length/P)),I=h(()=>m.value.length);function q(){n.value>1&&n.value--}function z(){n.value<C.value&&n.value++}const a={base:"text-blue-500",hover:"text-blue-400",delete:"text-red-500",deleteHover:"text-red-400",edit:"text-yellow-500",editHover:"text-yellow-400"};return(r,e)=>(u(),d(k,null,[b(T(U),{title:"Liste des Étudiants"}),b(J,null,{default:_(()=>[t("div",Q,[t("div",W,[t("h1",X,[t("i",{class:o(["fas fa-user-graduate mr-3",a.base,"transition-colors duration-300"])},null,2),e[2]||(e[2]=l(" Liste des Étudiants "))]),b(L,{href:r.route("apprenants.create"),class:"mt-2 sm:mt-0 bg-green-600 text-white px-4 py-2 rounded-lg shadow-md hover:bg-green-700 transition-all duration-300 flex items-center"},{default:_(()=>e[3]||(e[3]=[t("i",{class:"fas fa-plus mr-2 transition-colors duration-300 hover:text-green-300"},null,-1),l(" Ajouter ")])),_:1},8,["href"])]),t("div",Y,[t("div",Z,[t("i",{class:o(["fas fa-search absolute left-4 top-1/2 transform -translate-y-1/2",a.base])},null,2),j(t("input",{type:"text","onUpdate:modelValue":e[0]||(e[0]=s=>f.value=s),placeholder:"Rechercher...",class:"w-full pl-12 pr-4 py-2 sm:py-3 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 text-gray-900 dark:text-gray-100 text-sm sm:text-base"},null,512),[[O,f.value]])]),t("div",tt,[t("i",{class:o(["fas fa-book absolute left-4 top-1/2 transform -translate-y-1/2",a.base])},null,2),j(t("select",{"onUpdate:modelValue":e[1]||(e[1]=s=>g.value=s),class:"w-full pl-12 pr-4 py-2 sm:py-3 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 text-gray-900 dark:text-gray-100 text-sm sm:text-base"},[(u(!0),d(k,null,N(F.value,s=>(u(),d("option",{key:s,value:s},i(s),9,et))),128))],512),[[R,g.value]])])]),t("div",st,[t("span",null,i(I.value)+" apprenants trouvés",1)]),t("div",at,[t("div",rt,[t("table",lt,[t("thead",ot,[t("tr",null,[t("th",it,[t("i",{class:o(["fas fa-id-badge mr-1",a.base])},null,2),e[4]||(e[4]=l("ID "))]),t("th",nt,[t("i",{class:o(["fas fa-user mr-1",a.base])},null,2),e[5]||(e[5]=l("Nom "))]),t("th",dt,[t("i",{class:o(["fas fa-user-circle mr-1",a.base])},null,2),e[6]||(e[6]=l("Prénom "))]),t("th",ut,[t("i",{class:o(["fas fa-envelope mr-1",a.base])},null,2),e[7]||(e[7]=l("Email "))]),t("th",mt,[t("i",{class:o(["fas fa-book mr-1",a.base])},null,2),e[8]||(e[8]=l("Formation "))]),t("th",ct,[t("i",{class:o(["fas fa-cogs mr-1",a.base])},null,2),e[9]||(e[9]=l("Actions "))])])]),t("tbody",null,[(u(!0),d(k,null,N(D.value,(s,p)=>{var c,x,y,A;return u(),d("tr",{key:s.id,class:"border-b border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700 transition-all duration-200 animate-row-in",style:M({animationDelay:`${.1*p}s`})},[t("td",xt,i(s.id),1),t("td",{class:"px-2 py-3 text-gray-900 dark:text-gray-100 text-sm truncate",title:s.nom},i(s.nom),9,ft),t("td",{class:"px-2 py-3 text-gray-900 dark:text-gray-100 text-sm truncate",title:s.prenom},i(s.prenom),9,gt),t("td",{class:"px-2 py-3 text-gray-900 dark:text-gray-100 text-sm truncate",title:(c=s.user)==null?void 0:c.email},i(((x=s.user)==null?void 0:x.email)||"N/A"),9,pt),t("td",{class:"px-2 py-3 text-gray-900 dark:text-gray-100 text-sm truncate",title:(y=s.formation)==null?void 0:y.titre},[t("span",bt,i(((A=s.formation)==null?void 0:A.titre)||"Non assignée"),1)],8,yt),t("td",vt,[b(L,{href:r.route("apprenants.edit",s.id),class:o(["flex items-center text-sm",a.edit,"hover:"+a.editHover,"transition-colors duration-200"])},{default:_(()=>e[10]||(e[10]=[t("i",{class:"fas fa-edit mr-1 animate-pulse"},null,-1),l(" Modifier ")])),_:2},1032,["href","class"]),t("button",{onClick:Ft=>S(s.id),class:o(["flex items-center text-sm",a.delete,"hover:"+a.deleteHover,"transition-colors duration-200"])},e[11]||(e[11]=[t("i",{class:"fas fa-trash mr-1 animate-pulse"},null,-1),l(" Supprimer ")]),10,ht)])],4)}),128))])])]),t("div",_t,[(u(!0),d(k,null,N(D.value,(s,p)=>{var c,x,y;return u(),d("div",{key:s.id,class:"bg-gray-50 dark:bg-gray-700 p-4 rounded-lg shadow-md hover:bg-gray-100 dark:hover:bg-gray-600 transition-all duration-200 animate-row-in",style:M({animationDelay:`${.1*p}s`})},[t("div",kt,[t("div",null,[t("p",wt,[t("i",{class:o(["fas fa-user mr-2",a.base])},null,2),l(" "+i(s.nom)+" "+i(s.prenom),1)]),t("p",{class:"text-xs text-gray-600 dark:text-gray-300 truncate",title:(c=s.user)==null?void 0:c.email},[t("i",{class:o(["fas fa-envelope mr-2",a.base])},null,2),l(" "+i(((x=s.user)==null?void 0:x.email)||"N/A"),1)],8,Ct),t("p",At,[t("span",Nt,i(((y=s.formation)==null?void 0:y.titre)||"Non assignée"),1)])]),t("div",Lt,[b(L,{href:r.route("apprenants.edit",s.id),class:o(["text-sm",a.edit,"hover:"+a.editHover,"transition-colors duration-200"])},{default:_(()=>e[12]||(e[12]=[t("i",{class:"fas fa-edit"},null,-1)])),_:2},1032,["href","class"]),t("button",{onClick:A=>S(s.id),class:o(["text-sm",a.delete,"hover:"+a.deleteHover,"transition-colors duration-200"])},e[13]||(e[13]=[t("i",{class:"fas fa-trash"},null,-1)]),10,Pt)])])],4)}),128)),m.value.length===0?(u(),d("div",St,e[14]||(e[14]=[t("i",{class:"fas fa-exclamation-circle mr-2 text-lg"},null,-1),l(" Aucun étudiant trouvé ")]))):H("",!0)]),m.value.length>0?(u(),d("div",Dt,[t("button",{onClick:q,disabled:n.value===1,class:"w-full sm:w-auto px-4 py-2 bg-blue-500 text-white rounded-lg disabled:bg-gray-300 dark:disabled:bg-gray-600 hover:bg-blue-600 transition-all duration-200"},e[15]||(e[15]=[t("i",{class:"fas fa-arrow-left mr-2"},null,-1),l("Précédent ")]),8,jt),t("span",Ht,i(n.value)+" / "+i(C.value),1),t("button",{onClick:z,disabled:n.value===C.value,class:"w-full sm:w-auto px-4 py-2 bg-blue-500 text-white rounded-lg disabled:bg-gray-300 dark:disabled:bg-gray-600 hover:bg-blue-600 transition-all duration-200"},e[16]||(e[16]=[t("i",{class:"fas fa-arrow-right mr-2"},null,-1),l("Suivant ")]),8,Mt)])):H("",!0)])])]),_:1})],64))}}),Ot=K(Vt,[["__scopeId","data-v-841948f1"]]);export{Ot as default};
