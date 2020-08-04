/******************************************
Treehouse Techdegree:
FSJS project 2 - List Filter and Pagination
******************************************/

const studentList = document.querySelectorAll('.student-item'); 
const pageLength = 10;

//programatically calculates the startIndex and endIndex via page parameter (global variable pageLength).
      // toggles visibility to show the list items in the start/endIndex range.
const showPage = (list, page) => {
      const startIndex = (page * pageLength) - pageLength;
      const endIndex = page * pageLength;
      for(let i = 0; i < list.length; i++){
         let listItem = list[i];
         listItem.style.display = 'none';
         if (i >= startIndex && i < endIndex){
            listItem.style.display = 'block';
         }
      }
   }

/*** 
   Create the `appendPageLinks function` to generate, append, and add 
   functionality to the pagination buttons.
***/
const appendPageLinks = (list) => {

   const totalPages = Math.ceil(list.length /pageLength);  //Determine pagination length via global variable
   const pageDiv = document.querySelector('.page');
   const pagination = document.createElement('div');
   const ul = document.createElement('ul');

// create page navigation list items
   pageDiv.appendChild(pagination);
   pagination.classList.add('pagination');
   pagination.appendChild(ul);
// add page numbers and other properties to list items
   for (let i = 0; i < totalPages; i++){   
      const li = document.createElement('li');
      const a = document.createElement('a');
      li.appendChild(a);
      a.innerText = i +1; // +1 starts the list with 1 instead of 0
      a.id = i +1 ; // +1 starts the list with 1 instead of 0
      a.href = `#`;
      ul.appendChild(li);
   }

   const navLis = document.querySelectorAll('li a');     
   navLis[0].classList.add('active');     //add the active class to the first page to denote that we are on that page.
   for(let i = 0; i < navLis.length; i++){

      navLis[i].addEventListener("click", function(){
         const activeLink = document.querySelector(".active");
         if(activeLink){activeLink.className = " ";} // if there was an active link it removes that class --- is there a better method ? if I pass an empty string, then I have loose class tags, so I added a whites space...
         const activePageIndex = this.id ;
         this.className ='active';
         showPage(studentList, activePageIndex);
         });
   }
   }

   showPage(studentList, 1);
   appendPageLinks(studentList);
   

/******************************************
               exceeds 
******************************************/

   
//Use unobtrusive JavaScript to append HTML for a search bar.
const pageHeader = document.querySelector('.page-header');
const searchBarDiv = document.createElement("div");
   searchBarDiv.className = 'student-search';
const searchBarField = document.createElement('input');
   searchBarField.placeholder = "Search for students...";
const searchButton = document.createElement('button');
   searchButton.innerText = "search";


pageHeader.appendChild(searchBarDiv);
searchBarDiv.appendChild(searchBarField);
searchBarDiv.appendChild( searchButton);

searchButton.addEventListener("click", function(){
   const mySearch = searchBarField.value.toLowerCase();
   const oldPagination = document.querySelector('.pagination');
   if(oldPagination){oldPagination.remove()} // if there is a new search it removes the old pagination
   const newSearch = document.querySelector(".noSearchResults")
   if(newSearch){newSearch.remove()}// if there is a new search after a search that yielded no results it removes that message.

   const mySearchArray = []; // empty arr for the search form field
//loop through list items if mySearch === to a name it pushes it to mySearchArray
   for (let i = 0; i < studentList.length; i++) {
      const element = studentList[i];
      const studentName = element.querySelector('h3').innerText.toLowerCase();
      if(studentName.includes(mySearch)){
         element.style.display = 'block';
         mySearchArray.push(element);
      }else{
         element.style.display = 'none';
      }
      
   }
   showPage(mySearchArray, 1);
   //enter mySearchArray as a parameter to the showPage function. 
      // if there are not results print a message
      // if mySearchArray is longer that the pageLength, run the appendPageLinks function.
   // clear the searchBarField 

   if(mySearchArray.length <= 0){
      const noSearchResults = document.createElement('div');
      noSearchResults.classList.add('noSearchResults')
      document.querySelector('ul').appendChild(noSearchResults);
      noSearchResults.innerText = "Sorry, no students found with that name";
   }else if(mySearchArray.length > pageLength){
      appendPageLinks(mySearchArray);
   }
   searchBarField.value = '';

});



//Future to do?? 
// only show one if there are duplicate entries on the search.
//refactor creation of elements using this function?

//https://kyleshevlin.com/how-to-write-your-own-javascript-dom-element-factory

// const elFactory = (type, attributes, children) => {
//    const el = document.createElement(type)
 
//    return el
//  }

//  const elFactory = (type, attributes, children) => {
//    const el = document.createElement(type)
 
//    for (key in attributes) {
//      el.setAttribute(key, attributes[key])
//    }
 
//    return el
//  }