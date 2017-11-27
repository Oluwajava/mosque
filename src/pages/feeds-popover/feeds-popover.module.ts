import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { FeedsPopoverPage } from './feeds-popover';

@NgModule({
  declarations: [
    FeedsPopoverPage,
  ],
  imports: [
    IonicPageModule.forChild(FeedsPopoverPage),
  ],
})
export class FeedsPopoverPageModule {}
