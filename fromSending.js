document.querySelector("#post-info-form").addEventListener("submit", addPost);

const url = "https://jsonplaceholder.typicode.com/comments";
console.log('hey');

function addPost(preventForm) {
  preventForm.preventDefault();
  // Apuntar a todos los inputs que necesitamos
  let name = document.querySelector("#name").value;
  let email = document.querySelector("#email").value;
  let phone = document.querySelector("#phone").value;
  let message = document.querySelector("#field").value;

  // vamos a usar el metodo fetch, llamamos a la constante url que esta afuera y le pasamos el objeto con 3 propiedades[method, headers, body]

  fetch(url, {
    method: "POST",
    headers: {
      "Content-type": "application/json",
      Accept: "application/json, text/plain",
    },
    body: JSON.stringify({
      name: name,
      email: email,
      phone: phone,
      body: message,
    }),
  })
    .then((response) => response.json())
    .then((dataForm) => console.log(dataForm))
    .then(() => {
      let message = "";
      message += `
		   <div id="formDome">
		  <h6>Message Submitted</h6>
	  </div> 
		  `;
      document.querySelector("#formDome").innerHTML = message;
    })
    .catch(() => {
      let message = "";
      message += `
			 <div id="formFail">
			<h6>oh oh, there has been an error with your message!</h6>
		</div> 
			`;
      document.querySelector("#formFail").innerHTML = message;
    });

  document.querySelector("#name").value = "";
  document.querySelector("#email").value = "";
  document.querySelector("#phone").value = "";
  document.querySelector("#field").value = "";
}
