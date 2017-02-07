var groceryList = [
  {name: 'TV Dinners',
   price: 2},
  {name: 'avocados',
   price: 0.99},
  {name: 'salmon filets',
   price: 14},
  {name: 'meatballs',
   price: 4.99},
  {name: 'chips',
   price: 3}];


  var sum = 0;
groceryList.forEach(function(groceryList) {
  sum += groceryList.price;
  console.log(groceryList.name +" $" + groceryList.price);
  });
console.log("Grand Total: " + "$" + sum);
