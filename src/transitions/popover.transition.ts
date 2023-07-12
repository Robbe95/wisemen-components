import type { TransitionClasses } from '.'

export const popoverTransition: TransitionClasses = {
  enterFromClass: 'scale-95 opacity-0',
  enterActiveClass: 'ease-out-back duration-200',
  enterToClass: 'scale-100 opacity-100',
  leaveFromClass: 'scale-100 opacity-100',
  leaveActiveClass: 'ease-out-back duration-200',
  leaveToClass: 'scale-95 opacity-0',

  enterFrom: 'scale-95 opacity-0',
  enter: 'ease-out-back duration-200',
  enterTo: 'scale-100 opacity-100',
  leaveFrom: 'scale-100 opacity-100',
  leave: 'ease-out-back duration-200',
  leaveTo: 'scale-95 opacity-0',
}
