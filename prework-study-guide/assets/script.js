function listTopics(topics){
    console.log('Here are the topics we learned through prework.')
    let topicsArray = topics
    topicsArray.forEach(element => {
        console.log(element);
    });
}

function selectTopic(topics){
    console.log("Which topic should we study first?")
    let topicsArray = topics;
    let randomIndex = Math.floor(Math.random() * topicsArray.length);
    let selectedTopic = topicsArray[randomIndex];
    console.log(`Lets study ${selectedTopic}!`);
}





var elements = document.querySelectorAll(".card h2");
var topicsArray = Array.from(elements).map(element => element.textContent);
listTopics(topicsArray);
selectTopic(topicsArray);
