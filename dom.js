// console.log('hello from external js');

// tagName selector
const myNamesCollections = document.getElementsByTagName('li');
// console.log(myNamesCollections);


// loop for of using to find li text
for(const myNamesCollection of myNamesCollections){
    // console.log(myNamesCollection.innerText);
    
}

// id selector
const placeLists = document.getElementById('favourite-place');
// console.log(placeLists.innerText);

// class selector 
const fvrtFood = document.getElementsByClassName('favouirte-fruits');
// console.log(fvrtFood);


// query selector all 
const favouriteFruites = document.querySelectorAll('.favouirte-fruits')
// console.log(favouriteFruites);


// query selector  
const favouriteFruite = document.querySelector('.favouirte-fruit li')
console.log(favouriteFruite);



