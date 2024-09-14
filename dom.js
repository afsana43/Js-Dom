// console.log('hello from external js');
const myNamesCollections = document.getElementsByTagName('li');
// console.log(myNamesCollections);


// loop for of using to find li text
for(const myNamesCollection of myNamesCollections){
    console.log(myNamesCollection.innerText);
    
}
