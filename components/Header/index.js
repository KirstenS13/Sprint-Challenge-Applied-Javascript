// STEP 1: Create a Header component.
// -----------------------
// Write a function that returns the markup you see below:
//
//  <div class="header">
//    <span class="date">SMARCH 28, 2019</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div>
//
// Use your function to create a header
// and append it to the DOM inside the div.header-container


//My Code
//pseudocode
function Header() {
    //create div element
    const header = document.createElement('div');
    //give class 'header'
    header.classList.add('header');

    //create span element
    const date = document.createElement('span');
    //give textContent
    date.textContent = 'SMARCH 28, 2019';
    //give class 'date'
    date.classList.add('date');

    //create h1 element
    const title = document.createElement('h1');
    //give textContent
    title.textContent = 'Lambda Times';

    //create span element
    const temp = document.createElement('span');
    //give textContent
    temp.textContent = '98°'
    //give class 'temp'
    temp.classList.add('temp');

    //append 'date', h1, and 'temp' to 'header' div element
    header.appendChild(date);
    header.appendChild(title);
    header.appendChild(temp);

    //append 'header' to div.header-container
    const headerContainer = document.querySelector('.header-container');
    headerContainer.appendChild(header);
}
