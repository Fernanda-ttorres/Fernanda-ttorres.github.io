var form = document.getElementById ("myForm")

form.addEventListener('submit',function(e){
    e.preventDefault()

    var search = document.getElementById('search').value
    var originalName = search.split(' ').join('')
    
    document.getElementById("result").innerHTML = ""

    fetch("https://api.github.com/users/" + originalName)
    .then((result) => result.json())
    .then((data) => {
        console.log(data)

        document.getElementById("result").innerHTML = `
        <a target="_blank" href = "https://www.github.com/${originalName}"> <img src"${data.avatar_url}"/> </a>
        `
    })


})



function perfilGithub () {
    let xhr = new XMLHttpRequest ();

    xhr.onload = function () {
        // alert ('Retorno da requiaição: \n' + this.responseText);
        let data = JSON.parse (this.responseText);

        let perfilStr = `<div class="flex-container-perfil">
                            <div class="flex-container-foto">
                                <img src="${data.avatar_url}" class="perfil">
                            </div>
                        
                            <div class="col-10">
                                <div class="descriçao"> 
                                    <h2>${data.name}</h2>
                                    <p>${data.bio} </p>
                                    <a href="${data.html_url}" target="_blank" class="btn btn-dark">GitHub</a>
                                </div>
                            </div>
                        </div> `;

        document.getElementById ('tela').innerHTML = perfilStr;
    }

    xhr.onerror = function () {
        alert (`Error na requisição \nCódigo: ${this.status} - ${this.statusText} `);
    }


    xhr.open ('GET', 'https://api.github.com/users/Fernanda-ttorres' );
    xhr.send ();
}
  
function repositorioGithub () {
    let xhr = new XMLHttpRequest ();

    xhr.onload = function () {
        // alert ('Retorno da requiaição: \n' + this.responseText);
        let data = JSON.parse (this.responseText);

        let repositroioStr = `<a href="${data.repos_url}" target="_blank" class="btn btn-dark">Carregar no GitHub</a> `;

        document.getElementById ('repo').innerHTML = repositroioStr;
    }

    xhr.onerror = function () {
        alert (`Error na requisição \nCódigo: ${this.status} - ${this.statusText} `);
    }


    xhr.open ('GET', 'https://api.github.com/users/Fernanda-ttorres/repos');
    xhr.send ();
}

