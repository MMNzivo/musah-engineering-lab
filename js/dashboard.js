fetch('data/projects.json')

.then(response => response.json())

.then(data => {

let container=document.getElementById("projectContainer")

data.projects.forEach(project => {

let milestones=""

project.milestones.forEach(m => {

milestones += "<li>"+m+"</li>"

})

container.innerHTML += `

<div class="card">

<h3>${project.name}</h3>

<p>Status: ${project.status}</p>

<div class="progress">

<div class="bar" style="width:${project.progress}%"></div>

</div>

<p>${project.progress}% complete</p>

<h4>Milestones</h4>

<ul>${milestones}</ul>

<a href="${project.page}">Open Project</a>

</div>

`

})

})
