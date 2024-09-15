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
// console.log(favouriteFruite);


// style dom property
const divs = document.querySelectorAll('div');
// console.log(divs);

// for of using add ,remove style
for(const div of divs){
    // console.log(div);
    div.style.border = '2px solid red';
    div.style.margin = '20px';
    div.style.padding = '20px';
    div.classList.add('text-center')
    div.classList.remove('bg-color')
    
}



// create and append childs

const fruitList = document.getElementById('fruits-list');
// console.log(fruitList);

const li = document.createElement('li');
li.innerText = 'Mango';

fruitList.appendChild(li)


