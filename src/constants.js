import detectIt from 'detect-it';

export const deviceType = detectIt.deviceType;
export const hasTouchEventsApi = detectIt.hasTouchEventsApi;
export const passiveEventSupport = detectIt.passiveEvents;

export const mouseEvents = {
  mouseenter: 'onMouseEnter',
  mouseleave: 'onMouseLeave',
  mousemove: 'onMouseMove',
  mousedown: 'onMouseDown',
  mouseup: 'onMouseUp',
};

export const touchEvents = {
  touchstart: 'onTouchStart',
  touchend: 'onTouchEnd',
  touchcancel: 'onTouchCancel',
};

export const otherEvents = {
  focus: 'onFocus',
  blur: 'onBlur',
  keydown: 'onKeyDown',
  keyup: 'onKeyUp',
  dragstart: 'onDragStart',
  dragend: 'onDragEnd',
};

export const iStates = {
  normal: true,
  hover: true,
  hoverActive: true,
  touchActive: true,
  keyActive: true,
};

export const focusFromStates = {
  tab: true,
  mouse: true,
  touch: true,
};

export const stateProps = {
  ...iStates,
  active: true,
  focus: true,
};

export const iStateOptionsKeys = ['style', 'className'];

export const focusOptionsKeys = [
  ...iStateOptionsKeys,
  'focusFromTabStyle',
  'focusFromMouseStyle',
  'focusFromTouchStyle',
  'focusFromTabClassName',
  'focusFromMouseClassName',
  'focusFromTouchClassName',
];


// known props to not pass through, every prop not on this list is passed through
export const knownProps = {
  ...stateProps,
  children: true,
  as: true,
  style: true,
  className: true,
  onStateChange: true,
  setStateCallback: true,
  onClick: true,
  onMouseClick: true,
  onEnterKey: true,
  onTap: true,
  onTapTwo: true,
  onTapThree: true,
  onTapFour: true,
  onMouseEnter: true,
  onMouseLeave: true,
  onMouseMove: true,
  onMouseDown: true,
  onMouseUp: true,
  onTouchStart: true,
  onTouchMove: true,
  onTouchEnd: true,
  onTouchCancel: true,
  onFocus: true,
  onBlur: true,
  onKeyDown: true,
  onKeyUp: true,
  forceState: true,
  initialState: true,
  refDOMNode: true,
  mutableProps: true,
  useBrowserOutlineFocus: true,
  useBrowserCursor: true,
  touchActiveTapOnly: true,
  focusToggleOff: true,
  stylePriority: true,
  checkDOMChildren: true,
};

export function dummyEvent(type) {
  return {
    type,
    persist: () => {},
    preventDefault: () => {},
    stopPropagation: () => {},
  };
}
