import { Routes } from '@angular/router';
import { PoPageDynamicDetailComponent, PoPageDynamicEditComponent, PoPageDynamicTableComponent } from '@po-ui/ng-templates';

export const routes: Routes = [
	{
		path: 'people',
		component: PoPageDynamicTableComponent,
		data: {
			serviceApi: 'http://localhost:3000/v1/people', // endpoint dos dados
			//serviceMetadataApi: 'http://localhost:3000/v1/people/metadata', // endpoint dos metadados utilizando o método HTTP Get
			//serviceLoadApi: 'http://localhost:3000/people/load-metadata' // endpoint de customizações dos metadados utilizando o método HTTP Post
		}
	},
	{
		path: 'new',
		component: PoPageDynamicEditComponent,
		data: {
			serviceApi: 'http://localhost:3000/v1/people'
		}
	},
	{
		path: 'edit/:id',
		component: PoPageDynamicEditComponent,
		data: {
			serviceApi: 'http://localhost:3000/v1/people'
		}
	},
	{
		path: 'detail/:id',
		component: PoPageDynamicDetailComponent,
		data: {
			serviceApi: 'http://localhost:3000/v1/people'
		}
	},
	{
		path: '',
		redirectTo: '/people',
		pathMatch: 'full'
	}
];
