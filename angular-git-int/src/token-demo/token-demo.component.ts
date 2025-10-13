import { Component } from '@angular/core';

@Component({
  selector: 'app-token-demo',
  imports: [],
  templateUrl: './token-demo.component.html',
  styleUrl: './token-demo.component.scss'
})
export class TokenDemoComponent {
brandColors = [
    { name: 'Primary', class: 'brand-primary', value: '$color-brand-primary' },
    { name: 'Secondary', class: 'brand-secondary', value: '$color-brand-secondary' }
  ];

  backgroundColors = [
    { name: 'Default', class: 'bg-default', value: '$color-background-default' },
    { name: 'Muted', class: 'bg-muted', value: '$color-background-muted' },
    { name: 'Inverse', class: 'bg-inverse', value: '$color-background-inverse' }
  ];

  textColors = [
    { name: 'Default', class: 'text-default', value: '$color-text-default' },
    { name: 'Subtle', class: 'text-subtle', value: '$color-text-subtle' },
    { name: 'Inverse', class: 'text-inverse', value: '$color-text-inverse' },
    { name: 'Link', class: 'text-link', value: '$color-text-link' }
  ];

  statusColors = [
    { name: 'Success', class: 'status-success', value: '$color-status-success' },
    { name: 'Warning', class: 'status-warning', value: '$color-status-warning' },
    { name: 'Danger', class: 'status-danger', value: '$color-status-danger' },
    { name: 'Info', class: 'status-info', value: '$color-status-info' }
  ];
}
