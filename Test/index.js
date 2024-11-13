function TestArray() {
    const array2d = [
        ['a','b','c'],
        ['d','e',''],
        ['g','h','i']
    ]
    //alert(array2d[2][1])
    let array1d = array2d[1];
    alert(array1d.indexOf(''));
}

function testDictionary() {
    var dict = {
        Name: "Eric",
        Age : 23,
        Job: "Freelancer",
        Skills : "JavaScript"
      };
      dict["new"]="New Value";
      alert(dict["new"]);

}

function TestRadio() {
    var rates = document.querySelector('input[name="rate"]:checked').value;
    var rate_value;
    if(rates =='Fixed Rate'){
        rate_value = document.getElementById('r1').value;
        
    }else if(rates =='Variable Rate'){
        rate_value = document.getElementById('r2').value;
        
    }else if(rates =='Multi Rate'){
        rate_value = document.getElementById('r3').value;
    }  
     alert(rates);
   /*  document.getElementById('results').innerHTML = rate_value; */
  alert(rate_value);
}

function DropDownChange() {
    var e = document.getElementById("ddlViewBy");
    var value = e.value;
    var text = e.options[e.selectedIndex].text;
    console.log(value);
    console.log(text);
}