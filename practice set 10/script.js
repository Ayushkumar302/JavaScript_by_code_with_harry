// let p = fetch("https://hp-api.onrender.com/api/characters")
// .then((response)=>{
//    return response.json()
// }).then((data)=>{
//     console.log(data);
// })

let url = "https://hp-api.onrender.com/api/characters";
let response = fetch(url);
response
  .then((value) => {
    return value.json();
  })
  .then((data) => {
    // console.log(data);
    ihtml = "";
    for (item in data) {
      // console.log(data[item]);
      ihtml += `
    <div class="card">
    <div class="images">
    <img src="${data[item].image}" class="card-img-top" alt="Harry Potter style">
    </div>
    <div class="card-body">
    <h5 class="card-title">${data[item].name}</h5>
    <p class="card-text">
        <b>Species:</b>${data[item].species}<br>
        <b>House:</b>${data[item].house}<br>
        <b>Date of Birth:</b>${data[item].dateOfBirth}<br>
        <b>Ancestry:</b> ${data[item].ancestry}<br>
        <b>Eye color:</b> ${data[item].eyeColour}<br>
        <b>Hair color:</b> ${data[item].hairColour}<br>
        <b>Patronus:</b>${data[item].patronus}
    </p>
    </div>
</div>
    `;
}
cardContainer.innerHTML = ihtml

  });

  function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth' 
    });
}
document.addEventListener('DOMContentLoaded', function() {
    const scrollButton = document.querySelector('.button a');
    if (scrollButton) {
        scrollButton.addEventListener('click', scrollToTop);
    }
});