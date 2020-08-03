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

   const totalPages = Math.ceil(list.length /10);  //Determine pagination length 
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
      // a.href = `#${i +1}`;
      a.href = `#`;
      ul.appendChild(li);

   }

   const navLis = document.querySelectorAll('li a');
   navLis[0].classList.add('active');
   for(let i = 0; i < navLis.length; i++){

      navLis[i].addEventListener("click", function(){
         const activeLink = document.querySelector(".active");
         activeLink.className = "";
         const activePageIndex = this.id ;
         this.classList.add('active');
         showPage(studentList, activePageIndex)

         });
   }


   }
showPage(studentList, 1);

appendPageLinks(studentList);


// Remember to delete the comments that came with this file, and replace them with your own code comments.