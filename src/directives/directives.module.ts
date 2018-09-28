import { NgModule } from '@angular/core';
import { AutosizeDirective } from './autosize/autosize';
import { ElasticDirective } from './elastic/elastic';
@NgModule({
	declarations: [AutosizeDirective,
    ElasticDirective],
	imports: [],
	exports: [AutosizeDirective,
    ElasticDirective]
})
export class DirectivesModule {}
