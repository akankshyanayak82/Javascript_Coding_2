console.clear();
// Question 1:
// Write a program to search if a number exists in an array. If the number exists then return the position. If it exists multiple time then return an array with all the positions. If the number doesn't exist then return -1;
// For example,
// Input: [1, 2, 3, 4, 5, 1, 3] and Search Elem: 4
// Output: 3
// Input: [1, 2, 3, 4, 5, 1, 3] and Search Elem: 1
// Output: [0, 5]
// Input: [1, 2, 3, 4, 5, 1, 3] and Search Elem: 7
// Output: -1
console.log("Q1 END =====================");
// Answer 1
function search_all(input_array, search_element)
{
	var found = [];

	for(var i = 0 ; i < input_array.length ; i++)
	{
		if(input_array[i] == search_element) found.push(i);
	}

	if(found.length < 1) return -1;
	else if(found.length == 1) return found[0];
	else return found;
}
console.log(search_all([1, 4, 5, 1, 7, 8, 5, 9, 4], 5));
console.log(search_all([1, 4, 5, 1, 7, 8, 5, 9, 4], 8));
console.log(search_all([1, 4, 5, 1, 7, 8, 5, 9, 4], 6));
console.log("Answer 1 -----------------------------------");

// Question 2:
// Write a program to print following pattern in the console.
// 54321
// 5432
// 543
// 54
// 5
console.log("Q2 END =====================");
// Answer 2
function pattern_1(value)
{
	for(var i = 0 ; i < value ; i++)
	{
		var temp = "";
		for(var j = value ; j > i ; j--)
		{
			temp = temp + j;
		}
		console.log(temp);
	}
}

pattern_1(5);
console.log("Answer 2 -----------------------------------");

// Question 3:
// Write a JavaScript program to sort an array in ascending order
// For example,
// Input: [3, 2, 1, 4, 5, 45]
// Output: [1, 2, 3, 4, 5, 45]
console.log("Q3 END =====================");
// Answer 3
function sort_asscending(array)
{
	array.sort(function(a, b) { return a - b; });
	return array;
}

console.log(sort_asscending([5, 6, 36, 45, 78, 89, 2, 8]));
console.log("Answer 3 -----------------------------------");

// Question 4:
// Write a JavaScript program to check if two strings are anagrams. Anagram string are such two strings which can be rearranged to create one another.
// For example,
// Input: LISTEN and SILENT
// Output: True
// Input: HELLO and JELLO
// Output: False
console.log("Q4 END =====================");
// Answer 4
function anagram(str_1, str_2)
{
	if(str_1.length == str_2.length)
	{
		for(var i = 0 ; i < anagram.length ; i++)
		{
			if(!str_2.includes(str_1[i])) return false;
		}

		return true;
	}
	return false;
}

if(anagram("TRIANGLE", "INTEGRAL")) console.log("True");
else console.log("False");
if(anagram("ACROSS", "CROSS")) console.log("True");
else console.log("False");
console.log("Answer 4 -----------------------------------");

// Question 5:
// Write a JavaScript program to reverse a string without using inbuilt methods.
// For example,
// Input: Hello
// Output: olleH
console.log("Q5 END =====================");
// Answer 5
function reverse_string(str)
{
	var temp = "";
	for(var i = str.length - 1 ; i >= 0 ; i-- )
	{
		temp = temp + str[i];
	}

	return temp;
}

console.log(reverse_string("AKANKSHYA"));
console.log("Answer 5 -----------------------------------");


