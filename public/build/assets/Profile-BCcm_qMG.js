import{d as f,a as g,o as i,u as e,B as P,D as B,w as o,z as y,c as D,e as t,E as C,b as p,g as _,h as F,j as T,C as U,f as m,s as X,m as j,k as q,i as z,t as v,P as H}from"./app-B32XEERy.js";import{a as A,_ as K}from"./Layout.vue_vue_type_script_setup_true_lang-DostpDk2.js";import{_ as $}from"./InputError.vue_vue_type_script_setup_true_lang-Bh8M61Vu.js";import{_ as w}from"./Button.vue_vue_type_script_setup_true_lang-CNDeaXAH.js";import{S as I,n as L,X as M,I as R,$ as W,P as Y,c as b,O as N,p as G,B as J,r as Q}from"./utils-RycQgYwf.js";import{X as Z}from"./x-C5PoZ2u5.js";import{_ as k,a as h}from"./Label.vue_vue_type_script_setup_true_lang-BXAQ2t-R.js";import{M as ee}from"./MonLayout-qSQ2KFDw.js";import{S as se}from"./transition-Cq0LEFQU.js";import"./TextLink.vue_vue_type_script_setup_true_lang-BDHw2Uln.js";import"./createLucideIcon-DuQL7yvt.js";import"./index-DBgQACIk.js";import"./DropdownMenuTrigger.vue_vue_type_script_setup_true_lang-BbNmasx3.js";import"./sun-DRak2UxW.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";const te=f({__name:"Dialog",props:{open:{type:Boolean},defaultOpen:{type:Boolean},modal:{type:Boolean}},emits:["update:open"],setup(d,{emit:n}){const r=I(d,n);return(c,a)=>(i(),g(e(L),P(B(e(r))),{default:o(()=>[y(c.$slots,"default")]),_:3},16))}}),ae=f({__name:"DialogClose",props:{asChild:{type:Boolean},as:{}},setup(d){const n=d;return(s,u)=>(i(),g(e(M),P(B(n)),{default:o(()=>[y(s.$slots,"default")]),_:3},16))}}),oe=f({__name:"DialogContent",props:{forceMount:{type:Boolean},trapFocus:{type:Boolean},disableOutsidePointerEvents:{type:Boolean},asChild:{type:Boolean},as:{},class:{}},emits:["escapeKeyDown","pointerDownOutside","focusOutside","interactOutside","openAutoFocus","closeAutoFocus"],setup(d,{emit:n}){const s=d,u=n,r=D(()=>{const{class:a,...l}=s;return l}),c=I(r,u);return(a,l)=>(i(),g(e(R),null,{default:o(()=>[t(e(W),{class:"fixed inset-0 z-50 bg-black/80 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0"}),t(e(Y),C(e(c),{class:e(b)("fixed left-1/2 top-1/2 z-50 grid w-full max-w-lg -translate-x-1/2 -translate-y-1/2 gap-4 border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-lg",s.class)}),{default:o(()=>[y(a.$slots,"default"),t(e(M),{class:"absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground"},{default:o(()=>[t(e(Z),{class:"h-4 w-4"}),l[0]||(l[0]=p("span",{class:"sr-only"},"Close",-1))]),_:1})]),_:3},16,["class"])]),_:3}))}}),re=f({__name:"DialogDescription",props:{asChild:{type:Boolean},as:{},class:{}},setup(d){const n=d,s=D(()=>{const{class:r,...c}=n;return c}),u=N(s);return(r,c)=>(i(),g(e(G),C(e(u),{class:e(b)("text-sm text-muted-foreground",n.class)}),{default:o(()=>[y(r.$slots,"default")]),_:3},16,["class"]))}}),le=f({__name:"DialogFooter",props:{class:{}},setup(d){const n=d;return(s,u)=>(i(),_("div",{class:F(e(b)("flex flex-col-reverse sm:flex-row sm:justify-end sm:gap-x-2",n.class))},[y(s.$slots,"default")],2))}}),ne=f({__name:"DialogHeader",props:{class:{}},setup(d){const n=d;return(s,u)=>(i(),_("div",{class:F(e(b)("flex flex-col gap-y-1.5 text-center sm:text-left",n.class))},[y(s.$slots,"default")],2))}}),de=f({__name:"DialogTitle",props:{asChild:{type:Boolean},as:{},class:{}},setup(d){const n=d,s=D(()=>{const{class:r,...c}=n;return c}),u=N(s);return(r,c)=>(i(),g(e(J),C(e(u),{class:e(b)("text-lg font-semibold leading-none tracking-tight",n.class)}),{default:o(()=>[y(r.$slots,"default")]),_:3},16,["class"]))}}),ie=f({__name:"DialogTrigger",props:{asChild:{type:Boolean},as:{}},setup(d){const n=d;return(s,u)=>(i(),g(e(Q),P(B(n)),{default:o(()=>[y(s.$slots,"default")]),_:3},16))}}),ue={class:"space-y-6"},pe={class:"space-y-4 rounded-lg border border-red-100 bg-red-50 p-4 dark:border-red-200/10 dark:bg-red-700/10"},ce={class:"grid gap-2"},me=f({__name:"DeleteUser",setup(d){const n=T(null),s=U({password:""}),u=c=>{c.preventDefault(),s.delete(route("profile.destroy"),{preserveScroll:!0,onSuccess:()=>r(),onError:()=>{var a;return(a=n.value)==null?void 0:a.focus()},onFinish:()=>s.reset()})},r=()=>{s.clearErrors(),s.reset()};return(c,a)=>(i(),_("div",ue,[t(A,{title:"Delete account",description:"Delete your account and all of its resources"}),p("div",pe,[a[7]||(a[7]=p("div",{class:"relative space-y-0.5 text-red-600 dark:text-red-100"},[p("p",{class:"font-medium"},"Warning"),p("p",{class:"text-sm"},"Please proceed with caution, this cannot be undone.")],-1)),t(e(te),null,{default:o(()=>[t(e(ie),{"as-child":""},{default:o(()=>[t(e(w),{variant:"destructive"},{default:o(()=>a[1]||(a[1]=[m("Delete account")])),_:1})]),_:1}),t(e(oe),null,{default:o(()=>[p("form",{class:"space-y-6",onSubmit:u},[t(e(ne),{class:"space-y-3"},{default:o(()=>[t(e(de),null,{default:o(()=>a[2]||(a[2]=[m("Are you sure you want to delete your account?")])),_:1}),t(e(re),null,{default:o(()=>a[3]||(a[3]=[m(" Once your account is deleted, all of its resources and data will also be permanently deleted. Please enter your password to confirm you would like to permanently delete your account. ")])),_:1})]),_:1}),p("div",ce,[t(e(k),{for:"password",class:"sr-only"},{default:o(()=>a[4]||(a[4]=[m("Password")])),_:1}),t(e(h),{id:"password",type:"password",name:"password",ref_key:"passwordInput",ref:n,modelValue:e(s).password,"onUpdate:modelValue":a[0]||(a[0]=l=>e(s).password=l),placeholder:"Password"},null,8,["modelValue"]),t($,{message:e(s).errors.password},null,8,["message"])]),t(e(le),{class:"gap-2"},{default:o(()=>[t(e(ae),{"as-child":""},{default:o(()=>[t(e(w),{variant:"secondary",onClick:r},{default:o(()=>a[5]||(a[5]=[m(" Cancel ")])),_:1})]),_:1}),t(e(w),{variant:"destructive",disabled:e(s).processing},{default:o(()=>a[6]||(a[6]=[p("button",{type:"submit"},"Delete account",-1)])),_:1},8,["disabled"])]),_:1})],32)]),_:1})]),_:1})])]))}}),fe={class:"flex flex-col space-y-6"},_e={class:"grid gap-2"},ge={key:1,class:"mt-1 block w-full px-3 py-2 bg-gray-100 text-gray-700 border border-gray-300 rounded-md"},ye={key:0},ve={key:1},be={class:"grid gap-2"},we={key:0},xe={class:"-mt-4 text-sm text-muted-foreground"},$e={key:0,class:"mt-2 text-sm font-medium text-green-600"},ke={class:"flex items-center gap-4"},Ne=f({__name:"Profile",props:{mustVerifyEmail:{type:Boolean},status:{}},setup(d){const s=X().props.auth.user,u=s.role==="admin",r=U({name:s.name,email:s.email}),c=()=>{u?r.patch(route("profile.update"),{preserveScroll:!0}):r.patch(route("profile.update"),{preserveScroll:!0,data:{email:r.email}})};return(a,l)=>(i(),g(ee,null,{default:o(()=>[t(e(j),{title:"Profile settings"}),t(K,null,{default:o(()=>{var S,V,E,O;return[p("div",fe,[t(A,{title:"Profile information",description:"Update your name and email address"}),p("form",{onSubmit:q(c,["prevent"]),class:"space-y-6"},[p("div",_e,[t(e(k),{for:"name"},{default:o(()=>l[2]||(l[2]=[m("Name")])),_:1}),u?(i(),g(e(h),{key:0,id:"name",class:"mt-1 block w-full",modelValue:e(r).name,"onUpdate:modelValue":l[0]||(l[0]=x=>e(r).name=x),required:"",autocomplete:"name",placeholder:"Full name"},null,8,["modelValue"])):(i(),_("div",ge,[e(s).role!="admin"?(i(),_("div",ye,v((S=e(s).apprenant)==null?void 0:S.nom)+" "+v((V=e(s).apprenant)==null?void 0:V.prenom)+" "+v((E=e(s).formateur)==null?void 0:E.nom)+" "+v((O=e(s).formateur)==null?void 0:O.prenom),1)):(i(),_("div",ve,v(e(s).email),1))])),t($,{class:"mt-2",message:e(r).errors.name},null,8,["message"])]),p("div",be,[t(e(k),{for:"email"},{default:o(()=>l[3]||(l[3]=[m("Email address")])),_:1}),t(e(h),{id:"email",type:"email",class:"mt-1 block w-full",modelValue:e(r).email,"onUpdate:modelValue":l[1]||(l[1]=x=>e(r).email=x),required:"",autocomplete:"username",placeholder:"Email address"},null,8,["modelValue"]),t($,{class:"mt-2",message:e(r).errors.email},null,8,["message"])]),a.mustVerifyEmail&&!e(s).email_verified_at?(i(),_("div",we,[p("p",xe,[l[5]||(l[5]=m(" Your email address is unverified. ")),t(e(H),{href:a.route("verification.send"),method:"post",as:"button",class:"text-foreground underline decoration-neutral-300 underline-offset-4 transition-colors duration-300 ease-out hover:!decoration-current dark:decoration-neutral-500"},{default:o(()=>l[4]||(l[4]=[m(" Click here to resend the verification email. ")])),_:1},8,["href"])]),a.status==="verification-link-sent"?(i(),_("div",$e," A new verification link has been sent to your email address. ")):z("",!0)])):z("",!0),p("div",ke,[t(e(w),{disabled:e(r).processing},{default:o(()=>l[6]||(l[6]=[m("Save")])),_:1},8,["disabled"]),t(e(se),{show:e(r).recentlySuccessful,enter:"transition ease-in-out","enter-from":"opacity-0",leave:"transition ease-in-out","leave-to":"opacity-0"},{default:o(()=>l[7]||(l[7]=[p("p",{class:"text-sm text-neutral-600"},"Saved.",-1)])),_:1},8,["show"])])],32)]),t(me)]}),_:1})]),_:1}))}});export{Ne as default};
