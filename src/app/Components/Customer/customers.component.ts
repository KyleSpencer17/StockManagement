import { Component, OnInit, ViewChild } from '@angular/core';
import { CustomerDataService } from '../../Services/Data/customer-data.service';
import { ActivatedRoute, Router } from '@angular/router';
import { DomSanitizer } from '@angular/platform-browser';
import {CSVRecord} from './CSVRecord.model'
;

export class customer {
  public customerId: Number;
  public customerName: String;
  public password: String;

  constructor(customerId: Number, customerName: String, password: String) {
    this.customerId = customerId;
    this.customerName = customerName;
    this.password = password;
  }

  getCustomerName() {
    return this.customerName;
  }

  getCustomerId() {
    return this.customerId;
  }

}

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.scss']
})
export class CustomersComponent implements OnInit {
  customers = []
  fileUrl;
  fileToUpload: File = null;
  constructor(private service: CustomerDataService, private router: Router,private sanitizer: DomSanitizer) { }

  ngOnInit() {
    this.getCustomers();
    const data = 'UserName, Password';
    // const blob = new Blob([data], { type: 'application/octet-stream' });

    // this.fileUrl = this.sanitizer.bypassSecurityTrustResourceUrl(window.URL.createObjectURL(blob));
  }


  getCustomers() {
    this.service.retrieveCustomers().subscribe(response => { this.customers = response })
  }

  updateCustomer(id) {
    console.log(`${id}`)
    this.router.navigate(['updateCustomer', id]);
  }

  addCustomer() {
    this.router.navigate(['addCustomer'])
  }

  deleteCustomer(id: number) {
    this.service.deleteCustomer(id).subscribe(response =>{this.getCustomers(); alert(response['description'])} );
  }

  public csvRecords: any[] = [];

  @ViewChild('fileImportInput', {static: false}) fileImportInput: any;
  fileChangeListener($event: any): void {

    let text = [];
    let files = $event.srcElement.files;

    if (this.isCSVFile(files[0])) {

      let input = $event.target;
      let reader = new FileReader();
      reader.readAsText(input.files[0]);

      reader.onload = () => {
        let csvData = reader.result;
        let csvRecordsArray = (<string>csvData).split(/\r\n|\n/);

        let headersRow = this.getHeaderArray(csvRecordsArray);

        this.csvRecords = this.getDataRecordsArrayFromCSVFile(csvRecordsArray, headersRow.length);
      };

      reader.onerror = function () {
        alert('Unable to read ' + input.files[0]);
      };

    } else {
      alert("Please import valid .csv file.");
      this.fileReset();
    }
  }

  getDataRecordsArrayFromCSVFile(csvRecordsArray: any, headerLength: any) {
    let dataArr = [];
    var custArray: customer[] = [];
    let modelArray: []

    for (let i = 1; i < csvRecordsArray.length; i++) {
      let data = (<string>csvRecordsArray[i]).split(',');

      // FOR EACH ROW IN CSV FILE IF THE NUMBER OF COLUMNS
      // ARE SAME AS NUMBER OF HEADER COLUMNS THEN PARSE THE DATA
      if (data.length == headerLength) {

        let csvRecord: CSVRecord = new CSVRecord();
        var cus = new customer(0,"","");
        cus.customerName = data[0].trim();
        cus.password = data[1].trim();
        custArray.push(cus);
        csvRecord.username = data[0].trim();
        csvRecord.userEmail = data[1].trim();
        dataArr.push(csvRecord);
      }
    }
    this.service.getUsersFromFile(JSON.stringify(custArray)).subscribe((data:boolean)=>{console.log(data); this.getCustomers()})
    return dataArr;
  }

  // CHECK IF FILE IS A VALID CSV FILE
  isCSVFile(file: any) {
    return file.name.endsWith(".csv");
  }

  // GET CSV FILE HEADER COLUMNS
  getHeaderArray(csvRecordsArr: any) {
    let headers = (<string>csvRecordsArr[0]).split(',');
    let headerArray = [];
    for (let j = 0; j < headers.length; j++) {
      headerArray.push(headers[j]);
    }
    console.log("Get headers: " + headerArray)
    return headerArray;
  }

  fileReset() {
    this.fileImportInput.nativeElement.value = "";
    this.csvRecords = [];
  }

}
