"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[193],{193:(e,t,c)=>{c.r(t),c.d(t,{log_sign:()=>s});const s=()=>{let e=document.querySelectorAll(".toggle_btn_wrapper .btn"),t=document.querySelector(".sign_up_wrapper"),s=document.querySelector(".log_in_wrapper"),r=document.querySelector(".ext_btn"),n=document.querySelector(".nav_item .sign_in_btn");e.forEach(((c,r)=>{c.addEventListener("click",(()=>{c.classList.contains("active")||(e.forEach((e=>e.classList.remove("active"))),c.classList.add("active"),c.classList.contains("btn_2")?(s.classList.add("active"),t.classList.remove("active")):c.classList.contains("btn_1")&&(t.classList.add("active"),s.classList.remove("active")))}))})),r.addEventListener("click",(()=>{document.querySelector(".reg_wrapper").classList.remove("active_reg"),document.querySelector(".log_in_form").reset(),document.querySelector(".sign_up_form").reset()})),n.addEventListener("click",(()=>{document.querySelector(".reg_wrapper").classList.add("active_reg"),Promise.all([c.e(427),c.e(810)]).then(c.bind(c,810)).then((e=>e.log_in_sign_up()))}))}}}]);