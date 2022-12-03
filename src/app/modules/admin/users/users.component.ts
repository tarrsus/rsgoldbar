import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/shared/user.service';
import { BasePageComponent } from 'src/app/core/base-page.component';
import { takeUntil } from 'rxjs/operators';
import { Router } from '@angular/router';
import { FormControl, FormGroup } from '@angular/forms';
import { isEmptyOrNull } from 'src/app/shared/utils';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.sass']
})
export class UsersComponent extends BasePageComponent implements OnInit {
  displayedColumns: string[] = ['userId', 'groupName', 'email', 'refBy', 'dateCreated', 'lastUpdated', 'update'];
  data = [];

  p: number = 1;
  total: number;
  loading: boolean;
  usersForm = new FormGroup({
    filterBy: new FormControl(null),
    filter: new FormControl(''),
  })
  constructor(private user: UserService, private router: Router) {
    super();
  }

  ngOnInit() {
    this.getPage(1);
  }


  getPage(page: number) {
    if (!isNaN(page)) {
      this.loading = true;
      this.user.getAllUsers(page, this.filterCriteria).pipe(takeUntil(this.componentDestroyed$)).subscribe(response => {
        this.total = response.totalCount;
        this.p = page;
        this.loading = false;
        this.data = response.users;
      });
    }
  }

  public onAction($event) {
    switch ($event.action) {
      case 'update':
        this.router.navigate([`/admin/users/${$event.element.userId}`])
        break;
    }
  }

  public search(data: any) {
    this.getPage(1);
  }

  public get filterCriteria(): string {
    const filterBy = this.usersForm.get('filterBy').value;
    const filter = this.usersForm.get('filter').value;
    if (isEmptyOrNull(filterBy) || filterBy === 'null') {
      return '';
    }
    return `&filterBy=${filterBy}&filter=${filter}`
  }
}
