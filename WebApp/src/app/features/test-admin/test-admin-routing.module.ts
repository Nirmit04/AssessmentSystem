import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from '../../auth.guard';
import { CreateScheduleComponent } from './components/retrieve-schedule/create-schedule/create-schedule.component';
import { RetrieveScheduleComponent } from './components/retrieve-schedule/retrieve-schedule.component';
import { ArchivedScheduleComponent } from './components/retrieve-schedule/archived-schedule/archived-schedule.component';
import { TestAdminComponent } from './test-admin.component';
import { AddUserComponent } from './components/retrieve-schedule/add-user/add-user.component';

const routes: Routes = [
    // { path: 'testAdminCreateScheDule', component: CreateScheduleComponent, canActivate: [AuthGuard] },
    // { path: 'retrieve-schedule', component: RetrieveScheduleComponent, canActivate: [AuthGuard] },
    // { path: '', component: TestAdminComponent, canActivate: [AuthGuard] },
    // { path: 'archive-schedule', component: ArchivedScheduleComponent, canActivate: [AuthGuard] },
    // { path: 'add-user', component: AddUserComponent, canActivate: [AuthGuard] },
    {
        path: '',
        component: TestAdminComponent,
        canActivate: [AuthGuard],
        children: [
            {
                path: 'testAdminCreateScheDule',
                loadChildren: () =>
                    import('./components/retrieve-schedule/create-schedule/create-schedule.module').then(
                        m => m.CreateScheduleModule
                    )
            }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class TestAdminRoutingModule { }
