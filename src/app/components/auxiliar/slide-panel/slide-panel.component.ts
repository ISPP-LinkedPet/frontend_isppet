import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { animate, state, style, transition, trigger } from '@angular/animations';

type PaneType = 'left' | 'right';

@Component({
  // tslint:disable-next-line: component-selector
  selector: 'slide-panel',
  styleUrls: [ './slide-panel.component.scss' ],
  templateUrl: './slide-panel.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [
    trigger('slide', [
      state('left', style({ transform: 'translateX(0)' })),
      state('right', style({ transform: 'translateX(-50%)' })),
      transition('* => *', animate(600))
    ])
  ]
})
export class SlidePanelComponent {
  @Input() activePane: PaneType = 'left';
}
