import { Component, OnInit } from '@angular/core';
import { TestAdminService } from '../../shared/test-admin.service';
import { User } from 'src/app/test-admin/shared/user.model'
import { NgForm } from '@angular/forms';
@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {

  constructor(private service: TestAdminService) { }
  quiztakers: any[];
  ngOnInit() {
    this.loadUsers();
  }

  loadUsers() {
    this.service.retrieveAllEmployees().subscribe((res: any) => {
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

