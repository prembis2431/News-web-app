
let bbcsports= document.getElementById("sports")

bbcsports.href= "https://www.bbc.com/sport";

// https://www.bbc.com/sport
// API key- d88620fa130d42b4878d0a7c1c64bfb8

let source = 'bbc-news';
let apiKey = 'd88620fa130d42b4878d0a7c1c64bfb8';

// creating the news container...
let newsAccordions = document.getElementById('newsAccordion');

//creating a get request...
const xhr = new XMLHttpRequest();

xhr.open('GET', `https://newsapi.org/v2/top-headlines?sources=${source}&apiKey=${apiKey}`, true);
xhr.getResponseHeader('Content-type', 'application/json');

// What to do when response is ready
xhr.onload = function () {
    if (this.status === 200) {

        let json = JSON.parse(this.responseText)
        let articles = json.articles;
        let newsHTML = "";
        articles.forEach(function(element, index)
        
         {

            let news1 = `<div class="card">
                <div class="card-header" id="heading${index}">
                    <h2 class="mb-0">
                        <button class="btn btn-link" type="button" data-toggle="collapse" data-target="#collapse${index}"
                           aria-expanded="true" aria-controls="collapseOne">
                           <b>Breaking News     ${index+1}: </b> ${element["title"]}
                        </button>
                    </h2>
                </div>

                <div id="collapse${index}" class="collapse hide" aria-labelledby="heading${index}"
                    data-parent="#newsAccordion">
                    <div class="card-body">${element["content"]}.<a href="${element['url']} "target= "_blank">  Read more here</a>
                      
                    </div>
                </div>
            </div>`;
           
            newsHTML += news1;

        });
        newsAccordions.innerHTML = newsHTML;
    }
    else {
        console.log("Some error occured")
    }

}

xhr.send();

