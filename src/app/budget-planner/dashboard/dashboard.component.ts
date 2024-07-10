import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { SideNavComponent } from '../side-nav/side-nav.component';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [MatIconModule, SideNavComponent, CommonModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {

  constructor(private router: Router) {

  }
  //income
  lastMonthsIncome = ['January:$1000', 'February: $1500', 'March: $1400'];
  currentMonthIncome = '$2000';



  //expense
  lastMonthsExpense = ['January:$700', 'February: $800', 'March: $670'];
  currentMonthExpense = '$1500';


  //to do transactions
  todoTransactions = [
    { description: 'Pay electricity bill' },
    { description: 'Pay water bill' },
    { description: 'Pay internet bill' },
    { description: 'Pay car insurance bill' },
  ]


  totalCurrentMonthIncome = 2000;
  totalCurrentMonthExpense = 1500;


  onExpense() {
    this.router.navigate(['budget-planner/expense']);
  }
  onTodo() {
    this.router.navigate(['/budget-planner/todo']);
  }

  onIncome() {
    this.router.navigate(['budget-planner/income']);
  }


  get currentMonthSavings(): number {
    return this.totalCurrentMonthIncome - this.totalCurrentMonthExpense;
  }
}
