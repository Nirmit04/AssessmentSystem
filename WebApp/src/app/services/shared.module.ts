import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToastrModule } from 'ngx-toastr';
import { FormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule, MatSidenavModule, MatListModule } from '@angular/material';
import { DataTablesModule } from 'angular-datatables';
import { NgxUiLoaderModule, NgxUiLoaderConfig, SPINNER, POSITION, PB_DIRECTION } from 'ngx-ui-loader';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { NgxGaugeModule } from 'ngx-gauge';
import { MatExpansionModule } from '@angular/material/expansion';
import { LoaderComponent } from '../core/loader/loader.component';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { LoaderServiceService } from './loader-service.service';
import { TableModule } from 'primeng/table';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';
import { ChartsModule } from 'ng2-charts';
import { DatePipe } from '@angular/common';
import { OwlDateTimeModule, OwlNativeDateTimeModule } from 'ng-pick-datetime';


const ngxUiLoaderConfig: NgxUiLoaderConfig = {
  bgsColor: '#00ACC1',
  bgsOpacity: 0.7,
  bgsPosition: 'bottom-right',
  bgsSize: 60,
  bgsType: 'rectangle-bounce-pulse-out',
  blur: 16,
  fgsColor: '#00ACC1',
  fgsPosition: 'center-center',
  fgsSize: 60,
  fgsType: 'rectangle-bounce-pulse-out',
  gap: 24,
  logoPosition: 'center-center',
  logoSize: 120,
  logoUrl: '',
  masterLoaderId: 'master',
  overlayBorderRadius: '0',
  overlayColor: 'rgba(40, 40, 40, 0.8)',
  pbColor: '#00ACC1',
  pbDirection: 'ltr',
  pbThickness: 1,
  hasProgressBar: false,
  text: 'LOADING...',
  textColor: '#FFFFFF',
  textPosition: 'center-center',
  threshold: 500
};

@NgModule({
  declarations: [LoaderComponent,],
  imports: [    
    CommonModule,
    FormsModule,
    ToastrModule.forRoot(),
    MatDialogModule,
		MatButtonModule,
		MatFormFieldModule,
		MatIconModule,
		MatTableModule,
		LayoutModule,
		MatToolbarModule,
		MatSidenavModule,
		MatListModule,
		DataTablesModule,
		NgxUiLoaderModule.forRoot(ngxUiLoaderConfig),
    MatProgressBarModule,
    NgxGaugeModule,
    MatExpansionModule,
    MatProgressSpinnerModule,
    TableModule,
    NgMultiSelectDropDownModule.forRoot(),
    ChartsModule,
    OwlDateTimeModule,
		OwlNativeDateTimeModule,
  ],
  providers:[LoaderServiceService,DatePipe,],
  exports:[
    CommonModule,
    FormsModule,
    ToastrModule,
    MatDialogModule,
		MatButtonModule,
		MatFormFieldModule,
		MatIconModule,
		MatTableModule,
		LayoutModule,
		MatToolbarModule,
		MatSidenavModule,
		MatListModule,
		DataTablesModule,
		NgxUiLoaderModule,
    MatProgressBarModule,
    NgxGaugeModule,
    MatExpansionModule,
    MatProgressSpinnerModule,
    TableModule,
    NgMultiSelectDropDownModule,
    LoaderComponent,
    ChartsModule,
    OwlDateTimeModule,
    OwlNativeDateTimeModule,
   
  ]
})
export class SharedModule { }
