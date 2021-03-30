

        function getcartlines () {

            var xhr = new XMLHttpRequest();
            xhr.open('GET', 'http://127.0.0.1:8080/json/items.json', true);
            xhr.onreadystatechange = function () {
              if(this.status === 200 && this.readyState === 4)  
              {
                var resp = JSON.parse(this.responseText)
                cartlinesview(resp);
      
              }
            }

            xhr.send();
          }


    







         
