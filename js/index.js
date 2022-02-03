// Initializing News Variables

let source = "the-times-of-india";
let country = "in";
let apiKey = "478d303df5ac424a822ecb62c2649d94";

// Grab Container element from DOM
let newsAccordion = document.getElementById("newsAccordion");

//Creating an ajax get request
let xhr = new XMLHttpRequest();
xhr.open(
  "GET",
  `https://newsapi.org/v2/top-headlines?country=${country}&apiKey=${apiKey}`
);

//What to do when response is ready
xhr.onload = function () {
  if (this.status === 200) {
    let json = JSON.parse(this.responseText);
    let articles = json.articles;
    console.log(articles);
    let newsHtml = "";
    articles.forEach(function (element, index) {
      newsHtml += `<div class="accordion-item">
                        <h2 class="accordion-header" id="heading${index}">
                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                data-bs-target="#collapse${index}" aria-expanded="false" aria-controls="collapse${index}">
                                <b>Breaking News ${index+1}:</b> &nbsp; ${element.title}
                            </button>
                        </h2>
                        <div id="collapse${index}" class="accordion-collapse collapse" aria-labelledby="heading${index}"
                            data-bs-parent="#newsAccordion">
                            <div class="accordion-body">
                                <strong>${element.description}</strong> ${element.content} <a href="${element.url}" target="_blank">Read More</a>
                            </div>
                        </div>
                    </div>`;
    });

    newsAccordion.innerHTML = newsHtml;
  } else {
    console.log("Some error occured");
  }
};

// Sending xhr request
xhr.send();
