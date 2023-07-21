
var a=prompt("Enter the number(max=10)");

var b,sum=0;
var temp=a;
while(a>0){
	b=a%10;
	sum=sum*10+b;
	a=parseInt(a/10);
}
document.write("Reverse of the number is"+" "+sum+"<br>"+"<br>");
if(sum==temp){
	document.write("palindrom");
}
else{
	document.write("not a palindrom");
}