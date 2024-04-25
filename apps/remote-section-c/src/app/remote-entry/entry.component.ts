import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  standalone: true,
  imports: [CommonModule],
  selector: 'app-remote-section-c-entry',
  template: `<div class="container">section C</div> `,
  styles: `.container {
    border: dashed 1rem green;
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
