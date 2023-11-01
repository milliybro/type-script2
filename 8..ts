function reverseArray<T>(arr: T[]): T[] {
   return arr.reverse();
 }

 const arr = [1, 2, 3, 4, 5]
 const reverse = reverseArray(arr);
console.log(reverse);