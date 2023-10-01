import { Component, OnInit,Inject, EventEmitter, Output } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ServiceService } from '../service/service.service';
import { ViewComponent } from '../view/view.component';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {
constructor(private service:ServiceService,
  viewcomponent:ViewComponent,
  private router:Router,
  private dialog: MatDialogRef<UpdateComponent>,
  private builder: FormBuilder,private _http: HttpClient,
  @Inject(MAT_DIALOG_DATA) public data: any,
  
  ){}
  editdata:any;
  //data:any;
  @Output() close: EventEmitter<void> = new EventEmitter<void>();
  ngOnInit(): void {
    this.service.GetByID(this.data.departmentcode).subscribe((res) => {
      this.editdata = res;
      this.updationform.setValue({
        id: this.editdata.id,
        DepartmentName: this.editdata.DepartmentName,
        Description: this.editdata.Description,
        Manager: this.editdata.Manager,
      });
    }); 
    this.data = this._http.get<any>("http://localhost:4000/Departments").subscribe(data => {
      this.data = data;
    });
}
updationform = this.builder.group({
  id: this.builder.control('',Validators.compose([Validators.required, Validators.minLength(5)])),
  DepartmentName: this.builder.control('', Validators.required),
  Description: this.builder.control('', Validators.required),
  Manager: this.builder.control(''),
});
updatedepartment() {
  if (this.updationform.valid) {
    this.service.Updatedepartment(this.updationform.value.id,this.updationform.value).subscribe( res => {
      this.router.navigate(['/pages/view']);
      alert("Update Successfully");
      //this.close.emit();
      this.router.navigate(['/pages/view']);
    });
  } else {
    alert('Failed to Update, Please enter valid data');
  }
}
onCancel(){
  this.close.emit();
}

}
