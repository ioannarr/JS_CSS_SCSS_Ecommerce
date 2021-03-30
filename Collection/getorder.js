function getorder () {

    var xhr = new XMLHttpRequest();
    xhr.open('GET', 'http://127.0.0.1:8080/json/order.json', true);
    xhr.onreadystatechange = function () {
      if(this.status === 200 && this.readyState === 4)  
      {
        var resporder = JSON.parse(this.responseText)
        orderview(resporder);

      }
    }

    xhr.send();
  }
