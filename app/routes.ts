
import { Route, RouterModule } from '@angular/router';

import { MainComponent } from "./components/Main/Main.component";


export const routes: Route[] = [
    { path: '', pathMatch: 'full', component: MainComponent }
];

export const routing = RouterModule.forRoot(routes, { useHash: true });
