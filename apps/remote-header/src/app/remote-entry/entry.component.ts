import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  standalone: true,
  imports: [CommonModule],
  selector: 'app-remote-header-entry',
  template: `<div class="container"><div class="header">Header</div></div>`,
  styles: `.container {
    text-align: center;
    border: dashed 1rem;
    box-sizing: border-box;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: large;
    font-weight: bolder;
  }
  .header {
    padding: 1rem;
  }`,
})
export class RemoteEntryComponent {}
