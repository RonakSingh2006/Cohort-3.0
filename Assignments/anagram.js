function isAnagram(str1,str2){
	let freq = [];
	for(let x =0 ; x <26 ; x++) freq.push(0);
	
	for(let i=0 ; i<str1.length ; i++){

		freq[str1.charCodeAt(i) - 'a'.charCodeAt(0)]++;
	}

	for(let i=0 ; i<str2.length ; i++){
		freq[str2.charCodeAt(i) - 'a'.charCodeAt(0)]--;
	}

	for(let i=0 ; i<26 ; i++){
		if(freq[i] !== 0) return false;
	}

	return true;
}

let ans = isAnagram('ronak','konar');

console.log(ans);


