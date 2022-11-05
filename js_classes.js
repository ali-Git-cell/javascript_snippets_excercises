class HelperFunctions { 	
    sortByNameAsc(record1,record2){
		if (record1.name < record2.name) return -1;
		else if (record1.name > record2.name) return 1;
		else return 0;
	  }
  	printRecord(record) {
		console.log(`${record.name} (${record.id}): ${record.paid ? "Paid" : "Not Paid"}`);
	  }
  
}

class Workshop extends HelperFunctions {
  constructor(){
  super()
  this.currentEnrollment = []
  this.studentRecords = []
  }
  
	addStudent(id,name,paid) {
		this.studentRecords.push({ id, name, paid, });
	}
  
	enrollStudent(id) {
		if (!this.currentEnrollment.includes(id)) {
			this.currentEnrollment.push(id);
		}
	}
  
	printCurrentEnrollment() {
		this.printRecords(this.currentEnrollment);
	}
  
	enrollPaidStudents() {
		this.currentEnrollment = this.paidStudentsToEnroll();
		this.printCurrentEnrollment();
	}
  
  	getStudentId(record) {
		return record.id;
	  }
  
	remindUnpaidStudents() {
		this.remindUnpaid(this.currentEnrollment);
	}
  
	getStudentFromId(studentId) {
		return this.studentRecords.find(matchId);
		function matchId(record) {
			return (record.id == studentId);
		}
	}

	printRecords(recordIds) {
		var records = recordIds.map(this.getStudentFromId.bind(this));
		records.sort(this.sortByNameAsc);
		records.forEach(this.printRecord);
	}
  
	sortByNameAsc(record1,record2){
		if (record1.name < record2.name) return -1;
		else if (record1.name > record2.name) return 1;
		else return 0;
	}
  
	paidStudentsToEnroll() {
		var recordsToEnroll = this.studentRecords.filter(this.needToEnroll.bind(this));
		var idsToEnroll = recordsToEnroll.map(this.getStudentId);
		return [ ...this.currentEnrollment, ...idsToEnroll ];
	}
  
	needToEnroll(record) {
		return (record.paid && !this.currentEnrollment.includes(record.id));
	}
  
	getStudentId(record) {
		return record.id;
	}
	remindUnpaid(recordIds) {
		var unpaidIds = recordIds.filter(this.notYetPaid.bind(this));
		this.printRecords(unpaidIds);
	}
  
	notYetPaid(studentId) {
		var record = this.getStudentFromId(studentId);
		return !record.paid;
	}
  
}

var stEnrollments = new Workshop()


// Execution code

stEnrollments.addStudent(311,"Frank",/*paid=*/true);
stEnrollments.addStudent(410,"Suzy",/*paid=*/true);
stEnrollments.addStudent(709,"Brian",/*paid=*/false);
stEnrollments.addStudent(105,"Henry",/*paid=*/false);
stEnrollments.addStudent(502,"Mary",/*paid=*/true);
stEnrollments.addStudent(664,"Bob",/*paid=*/false);
stEnrollments.addStudent(250,"Peter",/*paid=*/true);
stEnrollments.addStudent(375,"Sarah",/*paid=*/true);
stEnrollments.addStudent(867,"Greg",/*paid=*/false);

stEnrollments.enrollStudent(410);
stEnrollments.enrollStudent(105);
stEnrollments.enrollStudent(664);
stEnrollments.enrollStudent(375);
stEnrollments.printCurrentEnrollment();
stEnrollments.enrollPaidStudents();
stEnrollments.remindUnpaidStudents();
