```javascript
// Incorrect aggregation pipeline causing unexpected results
db.collection.aggregate([
  {$match: { /* some filter */ } },
  {$group: {_id: "$field", sum: {$sum: "$anotherField"}}}, //Error: summing strings instead of numbers
  {$sort: {sum: -1}}
])
```