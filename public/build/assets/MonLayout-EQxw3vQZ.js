import{a as q,b as K,_ as G}from"./DropdownMenuTrigger.vue_vue_type_script_setup_true_lang-D4wlLDbq.js";import{d as J,K as O,j as y,s as Q,q as U,c as X,A as Y,Q as H,g as l,o as t,b as a,f as b,e as v,t as _,u as o,w as u,T as p,F as z,r as P,h as d,i,a as E,z as Z,J as ee,D as ae}from"./app-lorCX1eB.js";import{_ as g}from"./TextLink.vue_vue_type_script_setup_true_lang-CjKIcNLf.js";import{S as te,M as se}from"./sun-BuT6VOkM.js";import{_ as le}from"./_plugin-vue_export-helper-DlAUqK2U.js";const re={class:"min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100 flex overflow-hidden relative"},ne=["onClick"],oe={class:"flex flex-col h-full"},ie={class:"p-4 flex items-center justify-between bg-gray-300 dark:bg-gray-900"},ue={key:0,class:"flex items-center gap-3"},de={class:"flex-1 py-4"},fe={key:0,class:"space-y-2"},ce={key:0,class:"flex-1"},ve={key:0,class:"flex-1"},pe={key:0,class:"flex-1"},ge={key:1,class:"bg-red-500 text-white text-xs rounded-full px-2 py-0.5 ml-2 animate-pulse"},me={key:0,class:"flex-1"},xe={key:0,class:"flex-1"},he={key:1,class:"space-y-2"},ke={key:0,class:"flex-1"},ye={key:0,class:"flex-1"},be={key:0,class:"flex-1"},_e={key:0,class:"flex-1"},we={key:0,class:"flex-1"},Ce={key:2,class:"space-y-2"},De={key:0,class:"flex-1"},Me={key:0,class:"flex-1"},Ae={key:0,class:"flex-1"},Se={key:0,class:"flex-1"},Fe={key:0,class:"flex-1"},Ne={key:3,class:"mt-6 px-4"},Le={key:0,class:"space-y-3 max-h-64 overflow-y-auto"},ze={class:"text-sm text-gray-900 dark:text-white"},Pe={class:"text-xs text-gray-500 dark:text-gray-400 mt-1"},Ee=["onClick"],$e={key:1,class:"text-sm text-gray-500 dark:text-gray-400 italic"},We={class:"mt-4 px-4"},Be={key:0,class:"flex-1"},Ie={class:"p-4 mt-auto"},Te={class:"flex items-center justify-between w-full px-4 py-3 bg-gray-200 dark:bg-gray-800 text-gray-900 dark:text-gray-200 rounded-lg hover:bg-gray-300 dark:hover:bg-gray-700 transition-all duration-300"},Ve={class:"flex items-center gap-2"},je={key:0,class:"flex-1"},Re={key:1,class:"bg-red-500 text-white text-xs rounded-full px-2 py-0.5 animate-pulse"},qe={key:2,class:"fas fa-chevron-down"},Ke={class:"text-sm sm:text-base"},Ge=J({__name:"MonLayout",setup(Je){var L;const{appearance:$,updateAppearance:W}=O(),B=[{value:"light",Icon:te,label:"Light"},{value:"dark",Icon:se,label:"Dark"}],n=y(!0),r=y(!1),s=y(!1),D=()=>{s.value=window.innerWidth<1024,s.value?r.value=!1:r.value=!0},S=()=>{s.value?r.value=!r.value:n.value=!n.value},M=Q(),h=M.props.auth.user,I=h&&h.role==="admin",T=h&&h.role==="formateur",F=h&&h.role==="apprenant",x=y(((L=M.props.dashboardData)==null?void 0:L.notifications)||[]);U(()=>{var c;return(c=M.props.dashboardData)==null?void 0:c.notifications},c=>{x.value=c||[]},{immediate:!0});const N=X(()=>x.value.filter(c=>c.type==="note_update").length),V=c=>{var m;const e=(m=document.querySelector('meta[name="csrf-token"]'))==null?void 0:m.content;if(!e){console.error("CSRF token not found");return}ae.post(p("notifications.read",c),{},{headers:{"X-CSRF-TOKEN":e}}).then(k=>{k.data.success&&(x.value=x.value.filter(C=>C.id!==c))}).catch(k=>{var C;console.error("Error:",((C=k.response)==null?void 0:C.data)||k.message)})},f=c=>p().current(c),w=y(null),A=y(!1);window.addEventListener("beforeinstallprompt",c=>{c.preventDefault(),w.value=c,A.value=!0});const j=async()=>{if(w.value){w.value.prompt();const{outcome:c}=await w.value.userChoice;console.log(c==="accepted"?"Application installée":"Installation refusée"),w.value=null,A.value=!1}},R=async()=>{if("serviceWorker"in navigator){const c=await navigator.serviceWorker.getRegistrations();for(const e of c)await e.unregister();await navigator.serviceWorker.register("/service-worker.js"),console.log("Service Worker réinitialisé")}};return Y(()=>{R(),D(),window.addEventListener("resize",D)}),H(()=>{window.removeEventListener("resize",D)}),(c,e)=>(t(),l("div",re,[a("div",{class:d([["inline-flex gap-1 rounded-lg  p-1"],"fixed top-0 right-0 mt-1 dark:bg-slate-600 bg-slate-300 theme mr-4 z-10 md:flex"])},[b(_(o(h).id)+" ",1),v(g,{href:o(p)("chat"),class:"chat text-white"},{default:u(()=>e[0]||(e[0]=[b("Mon chat")])),_:1},8,["href"]),(t(),l(z,null,P(B,({value:m,Icon:k,label:C})=>a("button",{key:m,onClick:Oe=>o(W)(m),class:d(["flex items-center rounded-md px-2 py-[.2rem] transition-colors",o($)===m?"bg-white shadow-sm text-neutral-900 dark:bg-neutral-700 dark:text-neutral-100":"text-neutral-500 hover:bg-neutral-200/60 hover:text-neutral-900 dark:text-neutral-400 dark:hover:bg-neutral-700/60 dark:hover:text-neutral-100"])},[(t(),E(ee(k),{class:"-ml-1 h-4 w-4"}))],10,ne)),64))]),a("aside",{class:d(["sidebar flex-shrink-0 bg-gradient-to-b from-gray-200 dark:from-gray-800 to-gray-300 dark:to-gray-900 shadow-xl transition-all duration-300 fixed top-0 left-0 h-full z-20",{"w-64":!s.value&&n.value||s.value&&r.value,"w-16":!s.value&&!n.value,"w-0":s.value&&!r.value}])},[a("div",oe,[a("div",ie,[!s.value&&n.value||s.value&&r.value?(t(),l("div",ue,e[1]||(e[1]=[a("div",{class:"bg-white p-1 rounded-full shadow-md"},[a("img",{src:"/img/logo.png",alt:"Logo CFPCa",class:"h-10 w-10 rounded-full animate-spin-slow"})],-1),a("span",{class:"text-lg font-bold text-gray-900 dark:text-white"},"CFPCa",-1)]))):i("",!0),a("button",{onClick:S,class:"text-gray-600 dark:text-gray-200 hover:text-gray-900 dark:hover:text-white p-2 rounded-full hover:bg-gray-400 dark:hover:bg-gray-600 transition-all ml-auto"},[a("i",{class:d([s.value?r.value?"fas fa-times":"fas fa-bars":n.value?"fas fa-chevron-left":"fas fa-chevron-right","text-lg"])},null,2)])]),a("nav",de,[o(F)?(t(),l("div",fe,[v(g,{href:o(p)("apprenant.dashboard"),class:d(["nav-link",{active:f("apprenant.dashboard")}])},{default:u(()=>[e[2]||(e[2]=a("i",{class:"fas fa-home w-6 text-cyan-400"},null,-1)),(s.value?r.value:n.value)?(t(),l("span",ce,"Dashboard")):i("",!0)]),_:1},8,["href","class"]),v(g,{href:o(p)("apprenant.disciplines"),class:d(["nav-link",{active:f("apprenant.disciplines")}])},{default:u(()=>[e[3]||(e[3]=a("i",{class:"fas fa-graduation-cap w-6 text-indigo-500"},null,-1)),(s.value?r.value:n.value)?(t(),l("span",ve,"Mes Disciplines")):i("",!0)]),_:1},8,["href","class"]),v(g,{href:o(p)("apprenant.notes"),class:d(["nav-link",{active:f("apprenant.notes")}])},{default:u(()=>[e[4]||(e[4]=a("i",{class:"fas fa-clipboard-check w-6 text-yellow-400"},null,-1)),(s.value?r.value:n.value)?(t(),l("span",pe,"Mes Notes")):i("",!0),N.value>0&&(s.value?r.value:n.value)?(t(),l("span",ge,_(N.value),1)):i("",!0)]),_:1},8,["href","class"]),v(g,{href:o(p)("apprenant.carnet"),class:d(["nav-link",{active:f("apprenant.carnet")}])},{default:u(()=>[e[5]||(e[5]=a("i",{class:"fas fa-address-card w-6 text-green-400"},null,-1)),(s.value?r.value:n.value)?(t(),l("span",me,"Mon Carnet")):i("",!0)]),_:1},8,["href","class"]),v(g,{href:o(p)("apprenant.progression"),class:d(["nav-link",{active:f("apprenant.progression")}])},{default:u(()=>[e[6]||(e[6]=a("i",{class:"fas fa-arrow-trend-up w-6 text-purple-400"},null,-1)),(s.value?r.value:n.value)?(t(),l("span",xe,"Ma Progression")):i("",!0)]),_:1},8,["href","class"])])):i("",!0),o(T)?(t(),l("div",he,[v(g,{href:o(p)("formateur.dashboard"),class:d(["nav-link",{active:f("formateur.dashboard"),"formateur-active":f("formateur.dashboard")}])},{default:u(()=>[e[7]||(e[7]=a("i",{class:"fas fa-home w-6 text-red-500"},null,-1)),(s.value?r.value:n.value)?(t(),l("span",ke,"Dashboard")):i("",!0)]),_:1},8,["href","class"]),v(g,{href:o(p)("formateur.formations"),class:d(["nav-link",{active:f("formateur.formations"),"formateur-active":f("formateur.formations")}])},{default:u(()=>[e[8]||(e[8]=a("i",{class:"fas fa-chalkboard w-6 text-orange-500"},null,-1)),(s.value?r.value:n.value)?(t(),l("span",ye,"Mes Formations")):i("",!0)]),_:1},8,["href","class"]),v(g,{href:o(p)("formateur.apprenants"),class:d(["nav-link",{active:f("formateur.apprenants"),"formateur-active":f("formateur.apprenants")}])},{default:u(()=>[e[9]||(e[9]=a("i",{class:"fas fa-user-graduate w-6 text-yellow-500"},null,-1)),(s.value?r.value:n.value)?(t(),l("span",be,"Mes Apprenants")):i("",!0)]),_:1},8,["href","class"]),v(g,{href:o(p)("formateur.notes"),class:d(["nav-link",{active:f("formateur.notes"),"formateur-active":f("formateur.notes")}])},{default:u(()=>[e[10]||(e[10]=a("i",{class:"fas fa-pen w-6 text-pink-500"},null,-1)),(s.value?r.value:n.value)?(t(),l("span",_e,"Gérer les Notes")):i("",!0)]),_:1},8,["href","class"]),v(g,{href:o(p)("formateur.disciplines"),class:d(["nav-link",{active:f("formateur.disciplines"),"formateur-active":f("formateur.disciplines")}])},{default:u(()=>[e[11]||(e[11]=a("i",{class:"fas fa-graduation-cap w-6 text-teal-500"},null,-1)),(s.value?r.value:n.value)?(t(),l("span",we,"Mes Disciplines")):i("",!0)]),_:1},8,["href","class"])])):i("",!0),o(I)?(t(),l("div",Ce,[v(g,{href:o(p)("admin.dashboard"),class:d(["nav-link",{active:f("admin.dashboard")}])},{default:u(()=>[e[12]||(e[12]=a("i",{class:"fas fa-home w-6 text-blue-400"},null,-1)),(s.value?r.value:n.value)?(t(),l("span",De,"Dashboard Admin")):i("",!0)]),_:1},8,["href","class"]),v(g,{href:o(p)("apprenants.index"),class:d(["nav-link",{active:f("apprenants.index")}])},{default:u(()=>[e[13]||(e[13]=a("i",{class:"fas fa-user-graduate w-6 text-green-400"},null,-1)),(s.value?r.value:n.value)?(t(),l("span",Me,"Apprenants")):i("",!0)]),_:1},8,["href","class"]),v(g,{href:o(p)("formateurs.index"),class:d(["nav-link",{active:f("formateurs.index")}])},{default:u(()=>[e[14]||(e[14]=a("i",{class:"fas fa-chalkboard-teacher w-6 text-purple-400"},null,-1)),(s.value?r.value:n.value)?(t(),l("span",Ae,"Formateurs")):i("",!0)]),_:1},8,["href","class"]),v(g,{href:o(p)("formations.index"),class:d(["nav-link",{active:f("formations.index")}])},{default:u(()=>[e[15]||(e[15]=a("i",{class:"fas fa-chalkboard w-6 text-orange-400"},null,-1)),(s.value?r.value:n.value)?(t(),l("span",Se,"Formations")):i("",!0)]),_:1},8,["href","class"]),v(g,{href:o(p)("disciplines.index"),class:d(["nav-link",{active:f("disciplines.index")}])},{default:u(()=>[e[16]||(e[16]=a("i",{class:"fas fa-graduation-cap w-6 text-pink-400"},null,-1)),(s.value?r.value:n.value)?(t(),l("span",Fe,"Disciplines")):i("",!0)]),_:1},8,["href","class"])])):i("",!0),o(F)&&(s.value?r.value:n.value)?(t(),l("div",Ne,[e[17]||(e[17]=a("h3",{class:"text-sm font-semibold text-gray-600 dark:text-gray-300 mb-3 flex items-center gap-2"},[a("i",{class:"fas fa-bell text-indigo-400"}),b(" Notifications ")],-1)),x.value.length?(t(),l("div",Le,[(t(!0),l(z,null,P(x.value,m=>(t(),l("div",{key:m.id,class:"p-3 bg-gray-200 dark:bg-gray-700 rounded-lg shadow-md hover:bg-gray-300 dark:hover:bg-gray-600 transition-all duration-200"},[a("p",ze,_(m.message),1),a("p",Pe,_(m.created_at),1),a("button",{onClick:k=>V(m.id),class:"text-indigo-600 dark:text-indigo-400 hover:text-indigo-800 dark:hover:text-indigo-300 text-xs mt-2 transition-colors"}," Marquer comme lu ",8,Ee)]))),128))])):(t(),l("p",$e,"Aucune notification"))])):i("",!0),a("div",We,[A.value?(t(),l("button",{key:0,onClick:j,class:"nav-link w-full text-left bg-indigo-600 hover:bg-indigo-700 dark:bg-indigo-500 dark:hover:bg-indigo-600"},[e[18]||(e[18]=a("i",{class:"fas fa-download w-6 text-white"},null,-1)),(s.value?r.value:n.value)?(t(),l("span",Be,"Installer l’app")):i("",!0)])):i("",!0)])]),a("div",Ie,[v(o(G),null,{default:u(()=>[v(o(q),{"as-child":""},{default:u(()=>[a("button",Te,[a("span",Ve,[e[19]||(e[19]=a("i",{class:"fas fa-user w-6 text-indigo-400"},null,-1)),(s.value?r.value:n.value)?(t(),l("span",je,"Profil")):i("",!0),x.value.length&&(s.value?r.value:n.value)?(t(),l("span",Re,_(x.value.length),1)):i("",!0),(s.value?r.value:n.value)?(t(),l("i",qe)):i("",!0)])])]),_:1}),(s.value?r.value:n.value)?(t(),E(o(K),{key:0,class:"bg-gray-200 dark:bg-gray-800 text-gray-900 dark:text-gray-100 rounded-lg shadow-lg w-48"},{default:u(()=>[v(g,{class:"block px-4 py-2 hover:bg-gray-300 dark:hover:bg-gray-700 transition-all",href:o(p)("profile.edit"),as:"button"},{default:u(()=>e[20]||(e[20]=[b(" Paramètres ")])),_:1},8,["href"]),v(g,{class:"block px-4 py-2 hover:bg-gray-300 dark:hover:bg-gray-700 transition-all",method:"post",href:o(p)("logout"),as:"button"},{default:u(()=>e[21]||(e[21]=[b(" Déconnexion ")])),_:1},8,["href"])]),_:1})):i("",!0)]),_:1})])])],2),a("main",{class:d(["flex-1 p-4 sm:p-6 bg-gray-50 dark:bg-gray-800 mb-16  overflow-y-auto transition-all duration-300 relative",s.value?"ml-0":n.value?"lg:ml-64":"lg:ml-16"])},[s.value&&!r.value?(t(),l("button",{key:0,onClick:S,class:"fixed top-4 left-4 z-30 bg-indigo-600 text-white p-2 rounded-full shadow-lg hover:bg-indigo-700 dark:bg-indigo-500 dark:hover:bg-indigo-600 transition-all"},e[22]||(e[22]=[a("i",{class:"fas fa-bars text-lg"},null,-1)]))):i("",!0),Z(c.$slots,"default",{},void 0,!0),e[23]||(e[23]=a("div",{class:"scroll-hint bg-indigo-500 dark:bg-indigo-400 text-white px-3 py-1 rounded-full text-xs"},"Défiler ",-1))],2),a("footer",{class:d(["py-6 px-4 bg-gray-50 border-t-2 border-black text-center text-gray-600 absolute bottom-0 right-0",r.value?"w-[80%]":"w-full"])},[a("p",Ke,[b("© "+_(new Date().getFullYear())+" Centre de Formation Professionnel La Canadienne. Tous droits réservés. By ",1),e[24]||(e[24]=a("a",{href:"mailto:mciagnessi@gmail.com"},"mciagnessi@gmail.com",-1))])],2)]))}}),Ze=le(Ge,[["__scopeId","data-v-87b1e04a"]]);export{Ze as M};
