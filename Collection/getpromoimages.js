
          
          function getpromoimages() {

            var request = new XMLHttpRequest();
            
            request.open('GET','http://127.0.0.1:8080/json/promo.json',true);
            request.onreadystatechange = function () { 
              if(this.status === 200 && this.readyState === 4)
              {                
              
                var obj = JSON.parse(this.responseText)
  
               promoimagesview(obj);
               }
            }

           request.send();
           
          }

          