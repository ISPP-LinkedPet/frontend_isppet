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
    trigger('enterTrigger', [
    state('leftPannel', style({
        opacity: '1',
    })),
    state('rightPannel', style({
      opacity: '1',
    })),
    transition('void => *', [style({opacity: '0'}), animate('500ms')])
    ])
  ]
})
export class SlidePanelComponent {
  @Input() activePane: PaneType = 'left';
}
