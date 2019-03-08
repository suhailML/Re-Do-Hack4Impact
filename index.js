// submit_form("suhails@bu.edu", "suhails", "pizza", "test")
localStorage.clear();
var check = false;

function submit_local_storage(key, value) {
  // console.log(typeof value);
  // console.log(value);
  localStorage.setItem(key, JSON.stringify(value));
  // console.log(localStorage);
}

function submit_form(email, username, password, bio) {
  submit_local_storage(username, [email, password, bio])
  for(var i=0, len=localStorage.length; i<len; i++)
  {
    var key = localStorage.key(i);
    var value = localStorage[key];
    // console.log(key + " => " + value);
  }
}

function return_false(){
  return false;
}

function reset_form(){
  clearThis(document.getElementById("email"));
  clearThis(document.getElementById("uname"));
  clearThis(document.getElementById("psw"));
  clearThis(document.getElementById("bio"));
}

function clearThis(target){
  if (target.value != "")
  {
    target.value= "";
  }
}

function tableCreate(){
  // console.log("test")

  if (check)
  {
    // document.getElementsByTag('body')[0].removeChild('table');
    // document.getElementById("myId").style.display = 'none';
    var element = document.getElementById("myId");
    element.parentNode.removeChild(element);
    check = false;
  }
    var body = document.body,
        tbl  = document.createElement('table');
    tbl.style.width  = '100px';
    tbl.style.border = '1px solid black';
    tbl.setAttribute("id", "myId");
    // console.log(localStorage);
    for (var i in localStorage)
    {

      if (i == "length")
      {
        break
      }
        var tr = tbl.insertRow();
        // console.log(localStorage[i]);
        // console.log(localStorage[i].length)
        console.log(localStorage);
        console.log(i);
        // console.log(localStorage[i]);
        x = JSON.parse(localStorage[i]);
        // console.log(x);
        var td = tr.insertCell();
        td.appendChild(document.createTextNode(i));
        td.style.border = '1px solid black';
        for(var j = 0; j < x.length; j++)
        {
              var td = tr.insertCell();
              td.appendChild(document.createTextNode(x[j]));
              td.style.border = '1px solid black';
        }
        // console.log(j);
    }
    body.appendChild(tbl);
    check = true;
}
