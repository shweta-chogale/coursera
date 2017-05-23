var string = "Hello";
string += "world";
console.log(string + '!');

console.log(undefined/5);

if(false || null || undefined || "" || 0 || NaN){
	console.log('This will never execute');
}else{
	console.log("All false");
}