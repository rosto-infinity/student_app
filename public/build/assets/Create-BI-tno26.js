import{d as c,C as f,e as n,o as i,g as o,u as r,m as x,w as b,a as t,b as l,h as y,i as m,v as u,F as k}from"./app-Dpxg1-kk.js";import{M as w}from"./MonLayout-CKdw4yiq.js";import{_ as p}from"./InputError.vue_vue_type_script_setup_true_lang-2-iTjHw_.js";import{_ as v}from"./_plugin-vue_export-helper-DlAUqK2U.js";import"./DropdownMenuTrigger.vue_vue_type_script_setup_true_lang-DqvJ_qTh.js";import"./utils-BvUa_fa_.js";import"./TextLink.vue_vue_type_script_setup_true_lang-Bofad1sM.js";const _={class:"container mx-auto px-4 py-6"},h={class:"mb-6"},V={class:"mt-1 relative"},C={class:"mb-6"},D={class:"mt-1 relative"},E=["disabled"],j={key:0},M={key:1,class:"flex items-center"},N=c({__name:"Create",setup(z){const s=f({nom:"",description:""});function g(){s.post(route("disciplines.store"),{preserveScroll:!0,onSuccess:()=>{s.reset()},onError:d=>{console.log("Validation errors:",d)}})}return(d,e)=>(i(),n(k,null,[o(r(x),{title:"Ajouter une Discipline"}),o(w,null,{default:b(()=>[t("div",_,[e[8]||(e[8]=t("h1",{class:"text-2xl sm:text-3xl font-extrabold text-gray-900 dark:text-gray-100 mb-6 flex items-center animate-fade-in"},[t("i",{class:"fas fa-plus-circle mr-3 text-green-500 dark:text-green-400"}),l(" Ajouter une Discipline ")],-1)),t("form",{onSubmit:y(g,["prevent"]),class:"max-w-2xl mx-auto bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg animate-slide-up"},[t("div",h,[e[3]||(e[3]=t("label",{for:"nom",class:"block text-sm font-medium text-gray-700 dark:text-gray-200"}," Nom de la Discipline ",-1)),t("div",V,[e[2]||(e[2]=t("i",{class:"fas fa-book-open absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 dark:text-gray-400"},null,-1)),m(t("input",{id:"nom","onUpdate:modelValue":e[0]||(e[0]=a=>r(s).nom=a),type:"text",placeholder:"Entrez le nom de la discipline",required:"",class:"pl-10 pr-4 py-3 w-full bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 text-gray-900 dark:text-gray-100"},null,512),[[u,r(s).nom]])]),o(p,{message:r(s).errors.nom,class:"mt-1"},null,8,["message"])]),t("div",C,[e[5]||(e[5]=t("label",{for:"description",class:"block text-sm font-medium text-gray-700 dark:text-gray-200"}," Description (optionnel) ",-1)),t("div",D,[e[4]||(e[4]=t("i",{class:"fas fa-info-circle absolute left-3 top-4 text-gray-500 dark:text-gray-400"},null,-1)),m(t("textarea",{id:"description","onUpdate:modelValue":e[1]||(e[1]=a=>r(s).description=a),placeholder:"Entrez une description",rows:"4",class:"pl-10 pr-4 py-3 w-full bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 text-gray-900 dark:text-gray-100 resize-y"},null,512),[[u,r(s).description]])]),o(p,{message:r(s).errors.description,class:"mt-1"},null,8,["message"])]),t("button",{type:"submit",disabled:r(s).processing,class:"w-full bg-green-500 text-white rounded-lg py-3 px-4 hover:bg-green-600 transition-all duration-300 flex items-center justify-center shadow-md"},[r(s).processing?(i(),n("span",M,e[7]||(e[7]=[t("i",{class:"fas fa-spinner fa-spin mr-2"},null,-1),l(" Envoi en cours... ")]))):(i(),n("span",j,e[6]||(e[6]=[t("i",{class:"fas fa-plus mr-2"},null,-1),l(" Ajouter ")])))],8,E)],32)])]),_:1})],64))}}),I=v(N,[["__scopeId","data-v-da87040b"]]);export{I as default};
