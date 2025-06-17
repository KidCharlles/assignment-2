// first function: foreach()
function myForEach(arr, func) {
  for (let i = 0; i < arr.length; i++) {
    func(arr[i]);
  }
}

let numbers = [1, 2, 3, 4, 5];

myForEach(numbers, function(number) {
  console.log(number);
});

// Second function: map()
