import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SavePage } from './save';
import { DirectivesModule } from '../../directives/directives.module';

@NgModule({
  declarations: [
    SavePage,
  ],
  imports: [
    IonicPageModule.forChild(SavePage),
    DirectivesModule
  ],
})
export class SavePageModule {}
