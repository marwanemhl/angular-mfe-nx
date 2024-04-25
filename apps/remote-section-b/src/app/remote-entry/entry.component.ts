import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  standalone: true,
  imports: [CommonModule],
  selector: 'app-remote-section-b-entry',
  template: `<div class="container"><div>section B</div></div> `,
  styles: `.container {
    text-align: center;
    border: dashed 1rem red;
    box-sizing: border-box;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: large;
    font-weight: bolder;
  }
  `,
})
export class RemoteEntryComponent {}
