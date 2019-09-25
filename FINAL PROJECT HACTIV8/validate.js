document.getElementById('submits').addEventListener('click', validates);
var err =  document.getElementById('error');

function validates(event) {
    if(!checkNameMustBeFilled()) {
        event.preventDefault();
        return;
    }
    if(!checkAgreement()) {
        event.preventDefault();
        return;
    }
    if(!checkEmail()) {
        event.preventDefault();
        return;
    }
    if(!checkQuantity()) {
        event.preventDefault();
        return;
    }
    else {
        err.innerHTML = '';
    }
}


  function checkNameMustBeFilled() {
    //validate name must be filled
    var user = document.getElementById("fullname").value;
        if(user == ""){
            err.innerHTML = "Name Must Be Filled";
            return false;
        }
    //validate first character must be capital!
        if(user.charCodeAt(0) < 65 || user.charCodeAt(0) > 90){
            err.innerHTML = "First Character Must be Capital!";
            return false;
        }
    //validate length characters
    var Char,lengthChar;
    Char = document.getElementById("fullname").value;
    lengthChar = Char.length;
        if(lengthChar > 30) {
        err.innerHTML = "Character length must be under 30 characters";
        return false;
        }
        return true;
    }

    function checkAgreement() {

    //validate checkbox must be checked
    if(!document.getElementById("agree").checked) {
        err.innerHTML = "You Must Checked the agreement box!";
        return false;
    }
        return true;
}
    function checkEmail() {
    //validate email
    //. sama @ tidak boleh di awal dan di akhir
    var email = document.getElementById("email").value;
        if(email.indexOf("@") <= 0 || email.indexOf(".") <= 0 || email.indexOf("@") == email.length-1 || email.indexOf(".") == email.length-1){
            err.innerHTML = "Wrong Format Email";
            return false;
        }
            return true;
    }

    function checkQuantity(){
    	var qty = document.getElementById("qty").value;
    	if(qty == "" || qty <= 0){
    		err.innerHTML = "Quantity must be more than 0";
    		return false;
    	}
    	return true;
    }
  


