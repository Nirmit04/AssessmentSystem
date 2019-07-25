import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef, MatDialog, MatDialogConfig } from '@angular/material';
import { TestAdminService } from '../../services/test-admin.service';
import { User } from '../../models/user.model';
import { NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Subject, Subscription } from 'rxjs';
import { HttpService } from '../../../../core/http/http.service';
@Component({
  selector: 'app-add-user1',
  templateUrl: './add-user1.component.html',
  styleUrls: ['./add-user1.component.css']
})

export class AddUser1Component implements OnInit {
  public quiztakers: any[];
  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<any> = new Subject();
  subscription: Subscription;


  constructor(@Inject(MAT_DIALOG_DATA) public data,
    private service: TestAdminService,
    public toastr: ToastrService,
    private httpService: HttpService,
    private dialogRef: MatDialogRef<AddUser1Component>) { }

  ngOnInit() {
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 4,
    };
    this.loadUsers()
    this.dtTrigger.next();
  };

  private loadUsers(): void {
    this.httpService.retrieveAllEmployees(this.data).subscribe((res: any) => {
      res.forEach(obj => obj.selected = false);
      this.quiztakers = res as User[];

    });
  }

  public updateSelectedUsers(index): any {
    this.quiztakers[index].selected = !this.quiztakers[index].selected;
  }

  public onSubmit(form: NgForm): any {
    const quiztakerId = this.quiztakers.filter(Id => Id.selected).map(idSelected => idSelected.Id);
    this.httpService.addUserInExistingSchedule(this.data, quiztakerId).subscribe(res => {
      this.toastr.success('added succesfully');
      this.dialogRef.close('Added');
    });
  }

}
