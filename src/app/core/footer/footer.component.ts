import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { openLiveChat } from 'src/app/shared/utils';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.sass']
})
export class FooterComponent implements OnInit {
  showFooter = this.router.url === '/';
  openLiveChat = openLiveChat;
  constructor(private router: Router, private dialog: MatDialog) {
  }

  ngOnInit() {
  }

  public contactus() {
    const w: any = window;
    w.$zopim.livechat.window.show();
    w.$zopim.livechat.say(`Hi, I need something!`);
  }
}
