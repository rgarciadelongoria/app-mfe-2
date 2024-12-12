import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-redirect',
  standalone: true,
  imports: [],
  templateUrl: './redirect.component.html',
  styleUrl: './redirect.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RedirectComponent {
  constructor() {}
}
