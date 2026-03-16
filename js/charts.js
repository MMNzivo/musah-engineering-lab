fetch('data/projects.json')

.then(response => response.json())

.then(data => {

let labels=[]
let progress=[]

data.projects.forEach(p=>{

labels.push(p.name)
progress.push(p.progress)

})

let ctx=document.getElementById("progressChart")

new Chart(ctx,{

type:'bar',

data:{

labels:labels,

datasets:[{

label:'Project Progress',

data:progress

}]

}

})

})
