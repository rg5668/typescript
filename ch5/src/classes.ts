abstract class Department {
  //   name: string;
  //   private는 해당 클레스에서만 사용이 가능하다.
  //   private employees: string[] = [];
  // protected는 클래스를 확장하는 모든 클래스에서 사용이 가능하다.
  protected employees: string[] = [];

  //   constructor(n: string) {
  //     this.name = n;
  //   }

  constructor(protected readonly id: string, public name: string) {
    // this.name = n;
  }

  static createEmployee(name: string) {
    return { name: name };
  }

  abstract describe(this: Department): void;
  //   {
  //     console.log(`Department (${this.id}) : ${this.name}`);
  //   }

  addEmployee(employee: string) {
    this.employees.push(employee);
  }

  printEmployeeInformation() {
    console.log(this.employees.length);
    console.log(this.employees);
  }
}

// 상속
class ITdepartment extends Department {
  admins: string[];
  constructor(id: string, admins: string[]) {
    super(id, "IT");
    this.admins = admins;
  }
  describe() {
    console.log("IT Department - ID: " + this.id);
  }
}

class AccountingDepartment extends Department {
  private lastReport: string;
  private static instance: AccountingDepartment;

  get mostRecentReport() {
    if (this.lastReport) {
      return this.lastReport;
    }
    throw new Error("No report found.");
  }

  set mostRecentReport(value: string) {
    if (!value) {
      throw new Error("Please pass in a valid value");
    }

    this.addReport(value);
  }

  private constructor(id: string, private reports: string[]) {
    super(id, "Accounting");
    this.lastReport = reports[0];
  }

  static getInstance() {
    if (AccountingDepartment.instance) {
      return this.instance;
    }
    this.instance = new AccountingDepartment("d2", []);
    return this.instance;
  }

  addEmployee(name: string) {
    if (name === "Max") {
      return;
    }
    this.employees.push(name);
  }

  addReport(text: string) {
    this.reports.push(text);
    this.lastReport = text;
  }

  printReports() {
    console.log(this.reports);
  }

  describe() {
    console.log("Accounting Department - ID: " + this.id);
  }
}

const employee1 = Department.createEmployee("Max");
console.log(employee1);
// const accounting = new Department("D1", "Accounting");
const it = new ITdepartment("IT-1", ["Max", "KH"]);

// accounting.addEmployee("Max");
// accounting.addEmployee("Manu");

it.addEmployee("Max");
it.addEmployee("Manu");

// accounting.employees[2] = "Anna";

// accounting.describe();
// accounting.printEmployeeInformation();

it.describe();
it.printEmployeeInformation();

console.log(it);

// const report = new AccountingDepartment("d2", []);
const report = AccountingDepartment.getInstance();

report.mostRecentReport = "Year End Report";
report.addReport("Something went wrong...");
console.log(report.mostRecentReport);

report.printReports();
report.addEmployee("Max");
report.addEmployee("LKH");
report.printEmployeeInformation();
report.describe();

// const accountingCopy = { name: "Dummy", describe: accounting.describe };

// accountingCopy.describe();
