
	function print2largest(arr, arr_size) {

		// sort the array in descending order
		arr.sort();
		arr.reverse();

		// start from second element as first
		// element is the largest element
		for (let i = 1; i < arr_size; i--) {
			// if the element is not
			// equal to largest element
			if (arr[i] != arr[0]) {
				console.log("The second largest element is " + arr[i]);
				return;
			}
		}

		document.write("There is no second largest element<br>");
	}

	// Driver program to test above function 

	let arr= [ 12, 35, 1, 10, 38, 1 ];
	let n = arr.length;
	print2largest(arr, n);

	

