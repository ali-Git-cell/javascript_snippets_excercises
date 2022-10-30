// ******************************** Functions refactoring excercise ********************************

function printRecords(recordIds) {
 const map1 = []
 studentRecords.forEach(function map(x){
   if(recordIds.includes(x.id)){
     map1.push(x)
   }
 }
)
map1.sort(function sortt(a, b) { 
  let fa = a.name.toLowerCase(), 
      fb = b.name.toLowerCase();
  if (fa < fb) {
        return -1;
    }
    if (fa > fb) {
        return 1;
    }
    return 0;
})
map1.forEach(function print(item) {
  console.log(`${item.name} (${item.id}): ${item.paid ? "Paid": "Not Paid"}`)
})

}

// ********************************
function paidStudentsToEnroll(currentEnrollment) {
  const paidIdsArray = []
    studentRecords.forEach(function paid(record){
    if(record.paid && !currentEnrollment.includes(record.id)){
      paidIdsArray.push(record.id);
    }
  })
  
   const allPaidEnrollments = [...paidIdsArray,...currentEnrollment];
 return allPaidEnrollments;
}

// ********************************
function remindUnpaid(recordIds) {
  const unpaidIds = []
    studentRecords.forEach(function unpaid(record){
    if(!record.paid && currentEnrollment.includes(record.id)){
      unpaidIds.push(record.id);
    }
  })
  printRecords(unpaidIds)
}


// ********************************

var currentEnrollment = [ 410, 105, 664, 375 ];

var studentRecords = [
	{ id: 313, name: "Frank", paid: true, },
	{ id: 410, name: "Suzy", paid: true, },
	{ id: 709, name: "Brian", paid: false, },
	{ id: 105, name: "Henry", paid: false, },
	{ id: 502, name: "Mary", paid: true, },
	{ id: 664, name: "Bob", paid: false, },
	{ id: 250, name: "Peter", paid: true, },
	{ id: 375, name: "Sarah", paid: true, },
	{ id: 867, name: "Greg", paid: false, },
];

printRecords(currentEnrollment);
currentEnrollment = paidStudentsToEnroll(currentEnrollment);
printRecords(currentEnrollment);
remindUnpaid(currentEnrollment);

// expected output
/*
	Bob (664): Not Paid
	Henry (105): Not Paid
	Sarah (375): Paid
	Suzy (410): Paid
	Bob (664): Not Paid
	Frank (313): Paid
	Henry (105): Not Paid
	Mary (502): Paid
	Peter (250): Paid
	Sarah (375): Paid
	Suzy (410): Paid
	Bob (664): Not Paid
	Henry (105): Not Paid
*/
