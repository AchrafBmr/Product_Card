const sizes=document.querySelectorAll(".size")
const gradients=document.querySelectorAll(".gradient")
const colors=document.querySelectorAll(".color")
const root = document.querySelector(':root');
const shoes = document.querySelectorAll(".shoe")   

function changesize(){
   sizes.forEach((item)=>{
    item.classList.remove("active")
   })
   this.classList.add("active")
}
sizes.forEach((s)=>{
    s.addEventListener('click',changesize)
})


function changecolor(){
   colors.forEach((item)=>{
    item.classList.remove("active")
   })
   this.classList.add("active")
   let primary =this.getAttribute('primary');
   root.style.setProperty("--primary",primary)
   shoes.forEach((s)=>{
    s.classList.remove("show")
   })
   let color=this.getAttribute("color")
   const shoe=Array.from(shoes).find((s)=>s.getAttribute("color")==color)
   shoe.classList.add("show")
   gradients.forEach((s)=>{
    s.classList.remove("second")
   })
   const gradient=Array.from(gradients).find((s)=>s.getAttribute("color")==color)
   gradient.classList.add("second")
}
colors.forEach((c)=>{
    c.addEventListener('click',changecolor)
})









