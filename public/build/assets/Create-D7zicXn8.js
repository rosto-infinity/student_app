import{C as n,a as b,o as u,w as g,b as t,k as p,l as s,u as o,v as d}from"./app-B32XEERy.js";import{M as m}from"./MonLayout-qSQ2KFDw.js";import{_ as f}from"./_plugin-vue_export-helper-DlAUqK2U.js";import"./DropdownMenuTrigger.vue_vue_type_script_setup_true_lang-BbNmasx3.js";import"./utils-RycQgYwf.js";import"./TextLink.vue_vue_type_script_setup_true_lang-BDHw2Uln.js";import"./sun-DRak2UxW.js";import"./createLucideIcon-DuQL7yvt.js";const y={class:"form-group mb-4"},k={class:"form-group mb-4"},x={class:"form-group mb-4"},c={class:"form-group mb-4"},w=["disabled"],_={__name:"Create",props:["formateurs"],setup(h){const e=n({titre:"",description:"",nbh_hebdomadaire:"",nbh_total:"",formateur_id:""}),l=()=>{e.post(route("formations.store"),{onSuccess:()=>{e.reset()},onError:i=>{console.error(i)}})};return(i,r)=>(u(),b(m,null,{default:g(()=>[r[8]||(r[8]=t("h1",{class:"text-3xl font-bold mb-4 animate-fade-in"},"Ajouter une Formation",-1)),t("form",{onSubmit:p(l,["prevent"]),class:"bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md transition duration-300"},[t("div",y,[r[4]||(r[4]=t("label",{for:"titre",class:"block text-gray-700 dark:text-gray-300"},"Titre",-1)),s(t("input",{type:"text","onUpdate:modelValue":r[0]||(r[0]=a=>o(e).titre=a),class:"text-black dark:text-white bg-gray-100 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded p-2 w-full focus:ring-2 focus:ring-blue-500",required:""},null,512),[[d,o(e).titre]])]),t("div",k,[r[5]||(r[5]=t("label",{for:"description",class:"block text-gray-700 dark:text-gray-300"},"Description",-1)),s(t("textarea",{"onUpdate:modelValue":r[1]||(r[1]=a=>o(e).description=a),class:"text-black dark:text-white bg-gray-100 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded p-2 w-full focus:ring-2 focus:ring-blue-500",required:""},null,512),[[d,o(e).description]])]),t("div",x,[r[6]||(r[6]=t("label",{for:"nbh_hebdomadaire",class:"block text-gray-700 dark:text-gray-300"},"Heures Hebdomadaires",-1)),s(t("input",{type:"number","onUpdate:modelValue":r[2]||(r[2]=a=>o(e).nbh_hebdomadaire=a),class:"text-black dark:text-white bg-gray-100 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded p-2 w-full focus:ring-2 focus:ring-blue-500",required:""},null,512),[[d,o(e).nbh_hebdomadaire]])]),t("div",c,[r[7]||(r[7]=t("label",{for:"nbh_total",class:"block text-gray-700 dark:text-gray-300"},"Heures Totales",-1)),s(t("input",{type:"number","onUpdate:modelValue":r[3]||(r[3]=a=>o(e).nbh_total=a),class:"text-black dark:text-white bg-gray-100 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded p-2 w-full focus:ring-2 focus:ring-blue-500",required:""},null,512),[[d,o(e).nbh_total]])]),t("button",{type:"submit",class:"bg-blue-500 text-white rounded p-2 hover:bg-blue-600 transition duration-200",disabled:!o(e).titre||!o(e).description}," Créer ",8,w)],32)]),_:1}))}},T=f(_,[["__scopeId","data-v-0bf6b1e9"]]);export{T as default};
