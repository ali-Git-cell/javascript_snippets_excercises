

var stEnrollment = {
	currentEnrollment: [],
	studentRecords: [],

// ********************************

 addStudent(id,name,paid) {
		this.studentRecords.push({ id, name, paid, });
	},

	enrollStudent(id) {
		if (!this.currentEnrollment.includes(id)) {
			this.currentEnrollment.push(id);
		}
	},

	printCurrentEnrollment() {
		this.printRecords(this.currentEnrollment);
	},
	 enrollPaidStudents() {
		this.currentEnrollment = this.paidStudentsToEnroll();
		this.printCurrentEnrollment();
	},

	 remindUnpaidStudents() {
		this.remindUnpaid(this.currentEnrollment);
	},

	 getStudentFromId(studentId) {
		return this.studentRecords.find(matchId);

		// *************************

		function matchId(record) {
			return (record.id == studentId);
		}
	},

	 printRecords(recordIds) {
		var records = recordIds.map(this.getStudentFromId.bind(this));
		records.sort(this.sortByNameAsc.bind(this));
		records.forEach(this.printRecord.bind(this));
	},

	 sortByNameAsc(record1,record2){
		if (record1.name < record2.name) return -1;
		else if (record1.name > record2.name) return 1;
		else return 0;
	},

	 printRecord(record) {
		console.log(`${record.name} (${record.id}): ${record.paid ? "Paid" : "Not Paid"}`);
	},

	 paidStudentsToEnroll() {
		var recordsToEnroll = this.studentRecords.filter(this.needToEnroll.bind(this));
		var idsToEnroll = recordsToEnroll.map(this.getStudentId.bind(this));
		return [ ...this.currentEnrollment, ...idsToEnroll ];
	},

	 needToEnroll(record) {
		return (record.paid && !this.currentEnrollment.includes(record.id));
	},

	 getStudentId(record) {
		return record.id;
	},

	 remindUnpaid(recordIds) {
		var unpaidIds = recordIds.filter(this.notYetPaid.bind(this));
		this.printRecords(unpaidIds);
	},

	 notYetPaid(studentId) {
		var record = this.getStudentFromId(studentId);
		return !record.paid;
	}
}


// execution code



stEnrollment.addStudent(311,"Frank",/*paid=*/true);
stEnrollment.addStudent(410,"Suzy",/*paid=*/true);
stEnrollment.addStudent(709,"Brian",/*paid=*/false);
stEnrollment.addStudent(105,"Henry",/*paid=*/false);
stEnrollment.addStudent(502,"Mary",/*paid=*/true);
stEnrollment.addStudent(664,"Bob",/*paid=*/false);
stEnrollment.addStudent(250,"Peter",/*paid=*/true);
stEnrollment.addStudent(375,"Sarah",/*paid=*/true);
stEnrollment.addStudent(867,"Greg",/*paid=*/false);
stEnrollment.enrollStudent(410);
stEnrollment.enrollStudent(105);
stEnrollment.enrollStudent(664);
stEnrollment.enrollStudent(375);

stEnrollment.printCurrentEnrollment();
stEnrollment.enrollPaidStudents();
stEnrollment.remindUnpaidStudents();
