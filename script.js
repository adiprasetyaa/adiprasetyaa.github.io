let form = document.getElementById('sheetdb-form');
form.addEventListener('submit', e=>{
  e.preventDefault();
  fetch(form.action,{
    method : "POST",
    body: new FormData(document.getElementById("sheetdb-form")),
  }).then(
    response => response.json()
  ).then((html) => {
    alert('Your message has been sent successfully!');
  });
});

