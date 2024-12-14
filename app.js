let key = `e7c59c5c1bd5454ea7f071e74eae3646`;
let cardData = document.querySelector(".cardData");
let searchbtn = document.getElementById("searchbtn");
let inputData = document.getElementById("inputData");

const getData = async(input) =>{
   let res = await fetch(`https://newsapi.org/v2/everything?q=${input}&apiKey=${key}`);
   let jsonData = await res.json()
  console.log(jsonData.articles);

  cardData.innerHTML="";

  jsonData.articles.forEach(function(article){
      console.log(article);
      let divs = document.createElement("div");
   divs.classList.add("card");
   cardData.appendChild(divs);

   divs.innerHTML = `
 <img src="${article.urlToImage}" alt="">
 <h3>${article.title}</h3>
 <p>${article.description}</p>
            
`

      
  })



  
  
}

window.addEventListener("load", function(){
  getData("pakistan")
})

searchbtn.addEventListener("click",function(){
  let inputvalue = inputData.value;
  getData(inputvalue);
})
