/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  transactions is an array where each
  Transaction - an object like 
        {
    id: 1,
    timestamp: 1656076800000,
    price: 10,
    category: 'Food',
    itemName: 'Pizza',
  }
  Output - [{ category: 'Food', totalSpent: 10 }] // Can have multiple categories, only one example is mentioned here
*/

function calculateTotalSpentByCategory(transactions) {
  let totalSpentByCategory = [];
  transactions.forEach((transaction) => {
      const currObj = totalSpentByCategory.find(item => item.category === transaction.category);
      if (currObj) {
          currObj.totalSpent += transaction.price;
      }
      else {
          totalSpentByCategory.push({
              category: transaction.category,
              totalSpent: transaction.price
          })
      }
  })
  return totalSpentByCategory;
}

module.exports = calculateTotalSpentByCategory;
