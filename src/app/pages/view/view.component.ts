import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { NzTableQueryParams } from 'ng-zorro-antd/table';
import { ServiceService } from '../service/service.service';
import { Router } from '@angular/router';
import { DetailComponent } from '../detail/detail.component';
import { UpdateComponent } from '../update/update.component';
import { MatDialog } from '@angular/material/dialog';
import { ChangeDetectorRef } from '@angular/core';
@Injectable({ providedIn: 'root' })

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {
  data: any;
  retrived_data: any;
  constructor(private service: ServiceService, private route: Router, private dialog: MatDialog,private cdr: ChangeDetectorRef) {
  }
  departs: any;
  dataChanged = false;
  ngOnInit(): void {
    this.loadData();
    //throw new Error('Method not implemented.');
    // this.service.GetByID(this.data.departmentcode).subscribe((res) => {
    //   this.retrived_data = res;
    //  });
  }
  loadData() {
    this.service.GetAll().subscribe(result => {
      this.departs = result;
    });
  }
 
  Deletedepartments(code: any) {
    // data: {
    //   departmentcode: code;
    // }
    // if(this.retrived_data.Manager != ""){
    this.service.deleteDepartment(code).subscribe(() => {
    });
    alert("Deleted Successfully");
    this.service.GetAll().subscribe((returnedValue) => (this.departs = returnedValue));
    //this.cdr.detectChanges();
    //this.dataChanged = true;
    //this.route.navigate(['/pages/view']);
  // }else{
  //   alert("You have a child");
  // }
}
  viewDetail(id: any) {
    const popup = this.dialog.open(DetailComponent, {
      enterAnimationDuration: '1000ms',
      exitAnimationDuration: '500ms',
      width: '60%',
      data: {
        departmentcode: id
      }
    });
    popup.afterClosed().subscribe(res => {
      this.service.GetAll().subscribe((returnedValue) => (this.departs = returnedValue));
    });
  }
  Update(id: any) {
    const popup = this.dialog.open(UpdateComponent, {
      enterAnimationDuration: '1000ms',
      exitAnimationDuration: '500ms',
      width: '60%',
      data: {
        departmentcode: id
      }

    });
    popup.afterClosed().subscribe(res => {
      this.service.GetAll().subscribe((returnedValue) => (this.departs = returnedValue));
    });
  }

}
