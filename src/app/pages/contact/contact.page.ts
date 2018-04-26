import { Component } from '@angular/core';

@Component({
  selector: 'app-page-contact',
  templateUrl: 'contact.page.html',
  styleUrls: ['contact.page.scss']
})
export class ContactPage {

  onPullToRefresh(refresher) {
    setTimeout(() => {
      refresher.complete();
    }, 3000);
  }
}
