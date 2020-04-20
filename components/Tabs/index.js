// STEP 2: Create tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-backend.herokuapp.com/topics
// Once the data is resolved use console logs or breakpoints to review the structure.
// Iterate over the topics creating a new tab for each topic, and appending it to the DOM
// under the div.topics element.
//
//  Each tab should look like this:
//    <div class="tab">topic here</div>


//My Code
//pseudocode

//send GET request
axios.get('https://lambda-times-backend.herokuapp.com/topics')
    //use .then() to console.log the response
    .then((response) => {
        console.log(response);
        tabConstructor(response);
    })
    //use .catch() to console.log the error
    .catch((error) => {
        console.log(error);
    });

//create function to iterate over the topics
function tabConstructor(topicInfoObj) {
    //use .forEach to iterate over each topic
    topicInfoObj.data.topics.forEach((topicEntry) => {
        //create div element
        const tab = document.createElement('div');
        //give class 'tab' to div element
        tab.classList.add('tab');
        //give textContent to div element
        tab.textContent = topicEntry;

        //append div element to the div.topics element
        const topicsContainer = document.querySelector('.topics');
        topicsContainer.appendChild(tab);
    })
};