"use strict";(self["webpackChunkweweb_front"]=self["webpackChunkweweb_front"]||[]).push([[145],{1145:(e,t,u)=>{u.r(t),u.d(t,{default:()=>d});var r=u(6252);function a(e,t,u,a,n,o){const s=(0,r.up)("wwEditorInputRow");return(0,r.wg)(),(0,r.j4)(s,{label:"Auth token",type:"query","model-value":o.authToken,bindable:"",placeholder:"Enter an auth token",required:"","onUpdate:modelValue":o.setAuthToken},null,8,["model-value","onUpdate:modelValue"])}var n={props:{plugin:{type:Object,required:!0},args:{type:Object,required:!0}},emits:["update:args"],computed:{authToken(){return this.args.authToken}},methods:{setAuthToken(e){this.$emit("update:args",{...this.args,authToken:e})}}},o=u(3744);const s=(0,o.Z)(n,[["render",a]]);var d=s}}]);