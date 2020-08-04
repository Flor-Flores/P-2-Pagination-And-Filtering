/******************************************
Treehouse Techdegree:
FSJS project 2 - List Filter and Pagination
******************************************/

const studentList = document.querySelectorAll('.student-item');
const pageLength = 10;


const showPage = (list, page) => {
   const startIndex = (page * pageLength)-pageLength;
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
   /*
   1. Determine how many pages are needed for the list by dividing the
   total number of list items by the max number of items per page
   2. Create a div, give it the “pagination” class, and append it to the .page div
   3. Add a ul to the “pagination” div to store the pagination links
   4. for every page, add li and a tags with the page number text
   
   5. Add an event listener to each a tag. When they are clicked
   call the showPage function to display the appropriate page
   6. Loop over pagination links to remove active class from all links
   7. Add the active class to the link that was just clicked. You can identify that
   clicked link using event.target
   */
   const totalPages = Math.ceil(list.length /pageLength);  //Determine pagination length 
   const pageDiv = document.querySelector('.page');
   const pagination = document.createElement('div');
   const ul = document.createElement('ul');

   pageDiv.appendChild(pagination);
   pagination.classList.add('pagination');
   pagination.appendChild(ul);

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
   navLis[0].classList.add('active');     //add the active class to the first page
   for(let i = 0; i < navLis.length; i++){

      navLis[i].addEventListener("click", function(){
         const activeLink = document.querySelector(".active");
         if(activeLink){activeLink.className = "null";}
         const activePageIndex = this.id ;
         this.className ='active';
         showPage(studentList, activePageIndex)
         

         });
   }
   }


   showPage(studentList, 1);
   appendPageLinks(studentList);
   
   
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
// searchBarField.appendChild(searchButton);

// console.log(mySearch);

searchButton.addEventListener("click", function(){
   const mySearch = searchBarField.value.toUpperCase();
   const oldPagination = document.querySelector('.pagination');
   if(oldPagination){oldPagination.remove()}

   alert(mySearch);
   const mySearchArray = [];

   for (let i = 0; i < studentList.length; i++) {
      const element = studentList[i];
      const studentName = element.querySelector('h3').innerText.toUpperCase();
      if(studentName.includes(mySearch)){
         element.style.display = 'block';
         mySearchArray.push(element);
      }else{
         element.style.display = 'none';
      }
      
   }
   showPage(mySearchArray, 1);

   if(mySearchArray.length <= 0){
      const oldAlert = document.querySelector(".myAlert")
      if(oldAlert){oldAlert.remove()}
      const myAlert = document.createElement('div');
         myAlert.classList.add('myAlert')
      document.querySelector('ul').appendChild(myAlert);
      myAlert.innerText = "Sorry, no students found with that name";
   }else if(mySearchArray.length > pageLength){
      appendPageLinks(mySearchArray);

   }
   
   // mySearch = ' ';

});






// ToDo:   clear search bar, and no results message if there is one. ; 













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