import { Component, OnInit, Inject } from '@angular/core';
import { TestAdminService } from '../../shared/test-admin.service';
import { User } from 'src/app/test-admin/shared/user.model'
import { NgForm } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef, MatDialog } from '@angular/material';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data,
    public dialogRef: MatDialogRef<AddUserComponent>,
    public toastr: ToastrService,
    public dialog: MatDialog,
    private service: TestAdminService) { }

  quiztakers: any[];

  ngOnInit() {
    if (this.data != null) {
      this.loadSpecificUsers(+this.data);
    }
    else {
      this.loadUsers();
    }
  }

  loadUsers() {
    this.service.retrieveAllEmployees().subscribe((res: any) => {
      res.forEach(obj => obj.selected = false);
      this.quiztakers = res as User[];
    })
  }
  loadSpecificUsers(id: number) {
    this.service.retrieveSpecificEmployees(id).subscribe((res: any) => {
      res.forEach(obj => obj.selected = false);
      this.quiztakers = res as User[];
    })
  }
  updateSelectedUsers(index) {
    this.quiztakers[index].selected = !this.quiztakers[index].selected;
  }
  onSubmit(form: NgForm) {
    var quiztakerId = this.quiztakers.filter(Id => Id.selected).map(idSelected => idSelected.Id);
    console.log(quiztakerId);
    this.service.quiztakerId = quiztakerId;
  }
}

