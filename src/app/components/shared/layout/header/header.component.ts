import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  type OnInit,
} from '@angular/core';
import { HEADER_MODULES } from './header.components.imports';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: HEADER_MODULES,
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent implements OnInit {
  toolbarForm!: FormGroup<{ searchInput: FormControl<string | null> }>;

  ngOnInit(): void {
    this.setupForm();
  }

  setupForm(): void {
    this.toolbarForm = new FormGroup({
      searchInput: new FormControl<string>(''),
    });
  }

  onFocus() {
    console.log('focused');
  }
}
