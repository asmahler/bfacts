var browserSize = window.innerWidth;
var size = document.getElementById('size');
var wiki = document.getElementById('wikiText');
function init(){

  showSize(size);

  function showSize(el){
    el.innerText = browserSize;


  }
}



init();

function ajax(){
  var request = new XMLHttpRequest();
  request.open('GET', 'https://en.wikipedia.org/w/api.php?action=query&format=json&origin=*&list=search&srsearch= ' + browserSize, true);
  request.onload = function() {
  if (request.status >= 200 && request.status < 400) {
    // Success!
    var data = JSON.parse(request.responseText);
    var arr =  data.query.search;
    var random = Math.floor(Math.random() * arr.length);
      wikiText.innerHTML = data.query.search[random].title + " " + data.query.search[random].snippet;


  } else {
    // We reached our target server, but it returned an error

  }
};
    request.send();
}

ajax();


function resize (){
  var button = document.getElementById('new');
  button.addEventListener('click',function(){
      window.location.reload();
  });
}

  resize();
