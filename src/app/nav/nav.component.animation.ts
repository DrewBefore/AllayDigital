import { trigger, transition, state, animate, style, keyframes, useAnimation, query, animateChild, group, stagger } from '@angular/animations';

export const expandCollapse = trigger('expandCollapse', [
    state('collapsed', style({
      height: '0',
      paddingTop: '0',
      paddingBottom: '0',
      opacity: -1
    }
    )),
    transition('collapsed => expanded', [
      animate('500ms ease-out', style({
        height: '*',
        paddingTop: '*',
        paddingBottom: '*',
        opacity: 1,
        color: 'green'
      })),
    ]),

    transition('expanded => collapsed', [
      animate('500ms ease-in')
    ])
  ]
)