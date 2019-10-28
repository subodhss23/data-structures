// what is hash table
// what is hashing algorithm?
// what makes a good hashing algorithm
// how collision occurs in a hash table
// handling collisions using separate chaining or linear probing 

function hash(key, arrayLen){
	let total = 0;
	for(let char of key){
	let value = char.charCodeAt(0) - 96;
	total = (total + value) % arrayLen;
	}
	return  total;
}

hash('pink', 10);
hash('red', 20);
hash('pink', 20);
