function requestServer() 
  {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200)
       {
        accessJSON(this);
      }
    };
    xhttp.open("GET", "products.json", true);
    xhttp.send();
  }

  function accessJSON(xhttp) 
  {
    var products = JSON.parse(xhttp.responseText); // getting the array of objects
                            //setting a table header into a pseudo variable
    var table="<tr align=center><th>Serial No.</th><th>Item</th><th>Quantity</th><th>Department</th><th>Notes</th></tr>";
                        // accessing each object
    for (let i = 0; i < products.length; i++) 
    { 
                        //putting object properties into corresponding table rows
      table += "<tr align=center><td>" +
      products[i].slno +
      "</td><td>" +
      products[i].name +
      "</td><td align=right>" +
      products[i].quantity + " " + products[i].unit +
        "</td><td>" +
      products[i].department +
          "</td><td>" +
      products[i].note +
      "</td></tr>";
    }
    document.getElementById("itemList").innerHTML = table; //adding created table rows to the html page
    document.getElementById("itemList").scrollIntoView();
  }