import { NgModule } from '@angular/core';
import { CardComponent } from './card/card';
import {MyApp} from "../app/app.component";
import {IonicModule} from "ionic-angular";

const COMPONENTS = [CardComponent];

@NgModule({
	declarations: [...COMPONENTS],
	imports: [IonicModule.forRoot(MyApp),],
	exports: [...COMPONENTS]
})
export class ComponentsModule {}
