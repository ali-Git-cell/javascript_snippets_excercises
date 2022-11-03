// ******************************** Function executions ********************************


var dpJS = defineWorkshop();

dpJS.addStudent(311,"Frank",/*paid=*/true);
dpJS.addStudent(410,"Suzy",/*paid=*/true);
dpJS.addStudent(709,"Brian",/*paid=*/false);
dpJS.addStudent(105,"Henry",/*paid=*/false);
dpJS.addStudent(502,"Mary",/*paid=*/true);
dpJS.addStudent(664,"Bob",/*paid=*/false);
dpJS.addStudent(250,"Peter",/*paid=*/true);
dpJS.addStudent(375,"Sarah",/*paid=*/true);
dpJS.addStudent(867,"Greg",/*paid=*/false);

dpJS.enrollStudent(410);
dpJS.enrollStudent(105);
dpJS.enrollStudent(664);
dpJS.enrollStudent(375);

dpJS.printCurrentEnrollment();
console.log("----");
dpJS.enrollPaidStudents();
console.log("----");
dpJS.remindUnpaidStudents();




// ******************************** Function declarations ********************************
function defineWorkshop(){
  var currentEnrollment = [];
	var studentRecords = [];
	var publicAPI = {
		addStudent,
		enrollStudent,
		printCurrentEnrollment,
		enrollPaidStudents,
		remindUnpaidStudents,
	};
	return publicAPI;
  
	function addStudent(id,name,paid) {
		studentRecords.push({ id, name, paid, });
	}
  	function printCurrentEnrollment() {
		printRecords(currentEnrollment);
	}

	function enrollStudent(id) {
		if (!currentEnrollment.includes(id)) {
			currentEnrollment.push(id);
		}
	}
  	function remindUnpaidStudents() {
		remindUnpaid(currentEnrollment);
	}
  	function enrollPaidStudents() {
		currentEnrollment = paidStudentsToEnroll();
		printCurrentEnrollment();
	}

function getStudentFromId(studentId) {
	return studentRecords.find(matchId);
	function matchId(record) {
		return (record.id == studentId);
	}
}

function printRecords(recordIds) {
	var records = recordIds.map(getStudentFromId);
	records.sort(sortByNameAsc);
	records.forEach(printRecord);
}

function sortByNameAsc(record1,record2){
	if (record1.name < record2.name) return -1;
	else if (record1.name > record2.name) return 1;
	else return 0;
}

function printRecord(record) {
	console.log(`${record.name} (${record.id}): ${record.paid ? "Paid" : "Not Paid"}`);
}

function paidStudentsToEnroll() {
	var recordsToEnroll = studentRecords.filter(needToEnroll);
	var idsToEnroll = recordsToEnroll.map(getStudentId);
	return [ ...currentEnrollment, ...idsToEnroll ];
}

function needToEnroll(record) {
	return (record.paid && !currentEnrollment.includes(record.id));
}
function getStudentId(record) {
	return record.id;
}

function remindUnpaid(recordIds) {
	var unpaidIds = recordIds.filter(notYetPaid);
	printRecords(unpaidIds);
}

function notYetPaid(studentId) {
	var record = getStudentFromId(studentId);
	return !record.paid;
}
}
