var slicedMovies = movies.slice(30, 40);

var elWrapper = document.querySelector(".card__wrapper")

function renderMovies(array, wrapper) {

    wrapper.innerHTML = null
    
    // for (let i = 0; i < array.length; i++) {

        // // h4
        // var newh4 = document.createElement("h4");
        
        // newh4.textContent = array[i].Title;
    
        // // div
    
        // var newWrapperDiv = document.createElement("div");
    
        // newWrapperDiv.classList = "card-body";
    
        // newWrapperDiv.appendChild(newh4);
    
        // // img
    
        // var newImg = document.createElement("img");
    
        // newImg.classList = "card-img-top mb-2";
    
        // newImg.src = "https://upload.wikimedia.org/wikipedia/ru/e/eb/3_spider-mans_%28No_way_home%29.jpg"
    
    
        // // div
    
        // var newDivCard = document.createElement("div");
    
        // newDivCard.classList = "card";
    
        // newDivCard.appendChild(newImg);
    
        // newDivCard.appendChild(newWrapperDiv);
    
        // // cardWrapper
    
        // var newCardWrapper = document.createElement("div");
    
        // newCardWrapper.classList = "col-6 mb-3";
    
        // newCardWrapper.appendChild(newDivCard);
    
        // wrapper.appendChild(newCardWrapper)
    
        // console.log(newCardWrapper);
    // }

    for (var item of array) {
         // h4
         var newh4 = document.createElement("h4");
        
         newh4.textContent = item.Title;
     
         // div
     
         var newWrapperDiv = document.createElement("div");
     
         newWrapperDiv.classList = "card-body";
     
         newWrapperDiv.appendChild(newh4);
     
         // img
     
         var newImg = document.createElement("img");
     
         newImg.classList = "card-img-top mb-2";
     
         newImg.src = `https://img.youtube.com/vi/${item.ytid}/mqdefault.jpg`
     
     
         // div
     
         var newDivCard = document.createElement("div");
     
         newDivCard.classList = "card";
     
         newDivCard.appendChild(newImg);
     
         newDivCard.appendChild(newWrapperDiv);
     
         // cardWrapper
     
         var newCardWrapper = document.createElement("div");
     
         newCardWrapper.classList = "col-6 mb-3";
     
         newCardWrapper.appendChild(newDivCard);
     
         wrapper.appendChild(newCardWrapper)
     
    }
    
    
}

renderMovies(slicedMovies, elWrapper)

