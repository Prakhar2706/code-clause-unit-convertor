let km=document.getElementById("aa")
let m=document.getElementById("ab")
km.addEventListener("input",function(){
    let k=this.value
    let met=k*1000
    m.value=met
})
let dol=document.getElementById("ac")
let rup=document.getElementById("ad")
dol.addEventListener("input",function(){
    let d=this.value
    let r=d*79.29
    rup.value=r
})
let ft=document.getElementById("ae")
let inc=document.getElementById("af")
ft.addEventListener("input",function(){
    let f=this.value
    let i=f*12
    inc.value=i
})
let inn=document.getElementById("ag")
let cm=document.getElementById("ah")
inn.addEventListener("input",function(){
    let ii=this.value
    let cent=ii*2.54
    cm.value=cent
})
