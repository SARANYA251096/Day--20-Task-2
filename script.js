async function foo() {

    try {
        let res = await fetch("https://hp-api.herokuapp.com/api/characters/students");
        let res1 = await res.json();
        for(let i=0;i<res1.length;i++){
            console.log(res1);
        }
        let div = document.createElement("div");
        div.classList.add("container-fluid", "d-flex:", "justify-content:center", "m-5", "p-5")
        div.innerHTML = `<div class="card text-white bg-secondary mb-3" style="max-width: 400px; margin-left:400px;" >
        <div class="card-header" style="text-align:center;">Harry potter characters</div>
        <div class="card-body">
        <p class="card-text">Name:    ${res1[1].name}</p>
        <p class="card-text">Gender:    ${res1[1].gender}</p>
        <p class="card-text">DOB:    ${res1[1].dateOfBirth}</p>
        
        <img src="${res1[1].image}" class="card-img-top" style="width:200px; margin-left:70px;">
        </div>
      </div>
        </div>
      </div>`
        document.body.append(div);
  
    } 
    catch (error) {
        console.log(error);
    }
  
  }
  foo();
