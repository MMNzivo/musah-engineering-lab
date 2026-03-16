fetch("https://api.github.com/users/MMNzivo/repos")

.then(response=>response.json())

.then(repos=>{

let container=document.getElementById("repoContainer")

repos.slice(0,5).forEach(repo=>{

container.innerHTML += `

<div class="card">

<h3>${repo.name}</h3>

<p>${repo.description || "No description"}</p>

<a href="${repo.html_url}" target="_blank">
View Repository
</a>

</div>

`

})

})
