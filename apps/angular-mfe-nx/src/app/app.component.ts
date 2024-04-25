import { Component, ViewContainerRef, ViewChild, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
  @ViewChild('headerPlaceHolder', { read: ViewContainerRef })
  headerViewContainer!: ViewContainerRef;
  @ViewChild('sectionAPlaceHolder', { read: ViewContainerRef })
  sectionAContainer!: ViewContainerRef;
  title = 'angular-mfe-nx';
  ngOnInit() {
    this.loadRemotes();
  }

  async loadRemotes(): Promise<void> {
    const header = await import('remote-header/component');
    this.headerViewContainer.createComponent(header.RemoteEntryComponent);
  }
}
