```javascript
// Corrected aggregation pipeline using $toInt to handle potential string values
db.collection.aggregate([
  {$match: { /* some filter */ } },
  {$addFields: {anotherFieldNumeric: {$toInt: "$anotherField"}}}, //Convert to int, handles errors gracefully
  {$match: {anotherFieldNumeric: {$exists:true, $type: "number"}}}, //filter out non numeric values
  {$group: {_id: "$field", sum: {$sum: "$anotherFieldNumeric"}}}, 
  {$sort: {sum: -1}}
])
```