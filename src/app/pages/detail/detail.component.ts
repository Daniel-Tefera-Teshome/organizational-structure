import { Component , OnInit,Inject } from '@angular/core';
import { ServiceService } from '../service/service.service';
import { ViewComponent } from '../view/view.component';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit{
  dataa:any;
  cd:any;
  DepartmentName:any;
  Description:any;
  Manager:any;

  constructor(private service:ServiceService, viewcomponent:ViewComponent, private dialog: MatDialogRef<DetailComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any){
  }
  ngOnInit(): void {
    this.service.GetByID(this.data.departmentcode).subscribe((res) => {
      this.dataa = res;
      this.DepartmentName = this.dataa.DepartmentName;
      this.Description = this.dataa.Description;
      this.Manager = this.dataa.Manager;
    });
  }


}
