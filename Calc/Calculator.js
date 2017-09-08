function pop(box) {
	document.getElementById('display').value+=box.innerText;
}
function compute(){
	document.data=eval(document.getElementById('display').value);
	document.getElementById('display').value=document.data;
}
function erase() {
	document.getElementById('display').value="";
}
function del() {
	document.oldString=document.getElementById('display').value;
	document.newString = document.oldString.substring(0, document.oldString.length-1); 
	document.getElementById('display').value=document.newString;
}