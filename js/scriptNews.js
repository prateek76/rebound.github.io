var requestURL = 'https://newsapi.org/v2/top-headlines?sources=google-news-in&apiKey=c3eabb86163047f687a813cf4e6525aa';

var section = document.querySelector('section');

var request = new XMLHttpRequest();

request.open('GET', requestURL);

request.responseType = 'json';
request.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
request.send();

request.onload = function() {
  var news = request.response;
  shownews(news);
}

function ValidURL(str) {
  var regex = /(http|https):\/\/(\w+:{0,1}\w*)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%!\-\/]))?/;
  if(!regex .test(str)) {
    return false;
  } else {
    return true;
  }
}

function shownews(jsonObj) {
  var heroes = jsonObj['articles'];
  console.log(jsonObj['articles']);

  for (var i = 0; i < heroes.length; i++) {
    var row = document.createElement('div');
    row.setAttribute('class','row');
    var col12 = document.createElement('div');
    col12.setAttribute('class','col s12 m6');
    var parent_div = document.createElement('div');
    parent_div.setAttribute("class","card");
    var cardImage = document.createElement("div");
    cardImage.setAttribute('class','card-image');
    var pic = document.createElement('img');//
    pic.setAttribute('src',heroes[i].urlToImage);
    var spana = document.createElement('span');
    spana.setAttribute('class','card-title');
    var button = document.createElement('a');
    button.setAttribute('class','btn-floating halfway-fab waves-effect waves-light red');
    button.setAttribute('href',heroes[i].url);
    /***
    ******
    ******
    ***/
    var sup = document.createElement('a');
    sup.setAttribute('class','dropdown-button halfway-fab btn-floating waves-effect waves-light whatsapp');
    sup.setAttribute('style','margin-right:50px;');
    var text = encodeURI(heroes[i].title);
    sup.setAttribute('href','whatsapp://send?'+text);
    sup.setAttribute('data-text', heroes[i].title);
    sup.setAttribute('data-link','https://prateek76.github.io/rebound.github.io/');
    var ii2 = document.createElement('i');
    ii2.setAttribute('class','material-icons');
    ii2.textContent = "share";
    /***
    ******
    ******
    ***/
    var ii = document.createElement('i');
    ii.setAttribute('class','material-icons');
    ii.textContent = "more";

    var cardContent = document.createElement('div');
    cardContent.setAttribute("class","card-content");
    var myPara1 = document.createElement('p');

    spana.textContent = heroes[i].title;
    myPara1.textContent = heroes[i].description;




    if(heroes[i].urlToImage != null && ValidURL(heroes[i].urlToImage)) {
      cardImage.appendChild(pic);
    }
    cardContent.appendChild(spana);
    cardContent.appendChild(myPara1);
    cardImage.appendChild(sup);
    cardImage.appendChild(button);
    
    button.appendChild(ii);
    sup.appendChild(ii2);
    parent_div.appendChild(cardImage);
    parent_div.appendChild(cardContent);
    col12.appendChild(parent_div);
    row.appendChild(col12);


    section.appendChild(row);
  }
}
