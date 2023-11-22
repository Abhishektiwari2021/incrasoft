// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-patient',
//   templateUrl: './patient.component.html',
//   styleUrls: ['./patient.component.scss']
// })
// export class PatientComponent {

// }
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-patient',
  templateUrl: './patient.component.html',
  styleUrls: ['./patient.component.scss']
})
export class PatientComponent {
  StudentArray : any[] = [];
 
  name: string ="";
  address: string ="";
  fee: Number =0;
 
  currentStudentID = "";
 
  constructor(private http: HttpClient )
  {
    this.getAllStudent();
 
  }
 
  saveRecords()
  {
  
    let bodyData = {
      "name" : this.name,
      "address" : this.address,
      "fee" : this.fee
    };
 
    this.http.post("http://127.0.0.1:8000/student",bodyData).subscribe((resultData: any)=>
    {
        console.log(resultData);
        alert("Patient Registered Successfully");
        this.getAllStudent();
    });
  }
 
 
  getAllStudent()
  {
    this.http.get("http://127.0.0.1:8000/student")
    .subscribe((resultData: any)=>
    {
        console.log(resultData);
        this.StudentArray = resultData;
    });
  }
 
 
  setUpdate(data: any)
  {
   this.name = data.name;
   this.address = data.address;
   this.fee = data.fee;
   this.currentStudentID = data.id;
   
  }
 
 
 
  UpdateRecords()
  {
    let bodyData = 
    {
      "name" : this.name,
      "address" : this.address,
      "fee" : this.fee
    };
    
    this.http.put("http://127.0.0.1:8000/student/"+ this.currentStudentID , bodyData).subscribe((resultData: any)=>
    {
        console.log(resultData);
        alert("Patient Registered Updated")
        this.name = '';
        this.address = '';
        this.fee  = 0;
        this.getAllStudent();
    });
  }


  setDelete(data: any)
  {
    this.http.delete("http://127.0.0.1:8000/student"+ "/"+ data.id).subscribe((resultData: any)=>
    {
        console.log(resultData);
        alert("Patient data Deleted")
        this.getAllStudent();
    });
 
  }


}
