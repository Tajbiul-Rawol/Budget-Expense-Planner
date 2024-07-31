import { Routes } from '@angular/router';

export const routes: Routes = [
    { path: 'budget-planner', redirectTo: 'budget-planner/login' },
    { path: 'budget-planner', loadChildren: () => import('./budget-planner/budget-planner.module').then(m => m.BudgetPlannerModule) },
];
