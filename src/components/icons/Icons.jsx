// Ísso aqui foi criado pelo Claude, pois eu não tinha os ícones dos Apps (depois validar refatoração)
const base = (size) => ({
  width: size,
  height: size,
  viewBox: '0 0 24 24',
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.8,
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
  'aria-hidden': true,
  focusable: false,
})

export const IconArrowRight = ({ size = 22 }) => (
  <svg {...base(size)} strokeWidth={2.4}><path d="M5 12h14M13 6l6 6-6 6" /></svg>
)
export const IconArrowDown = ({ size = 22 }) => (
  <svg {...base(size)} strokeWidth={2.2}><path d="M12 5v14M6 13l6 6 6-6" /></svg>
)
export const IconUser = ({ size = 22 }) => (
  <svg {...base(size)}><circle cx="12" cy="12" r="9.5" /><circle cx="12" cy="10" r="3.2" /><path d="M5.8 18.6c1.4-2.4 3.6-3.6 6.2-3.6s4.8 1.2 6.2 3.6" /></svg>
)
export const IconPhone = ({ size = 22 }) => (
  <svg {...base(size)}><path d="M5 4h3.5l1.6 4-2 1.3a11 11 0 0 0 5.6 5.6l1.3-2 4 1.6V18a2 2 0 0 1-2.2 2A15.5 15.5 0 0 1 3 6.2 2 2 0 0 1 5 4Z" /></svg>
)
export const IconPhoneRing = ({ size = 22 }) => (
  <svg {...base(size)}><path d="M5 4h3.5l1.6 4-2 1.3a11 11 0 0 0 5.6 5.6l1.3-2 4 1.6V18a2 2 0 0 1-2.2 2A15.5 15.5 0 0 1 3 6.2 2 2 0 0 1 5 4Z" /><path d="M15 3.5a6 6 0 0 1 5.5 5.5M15 7a3 3 0 0 1 2.5 2.5" /></svg>
)
export const IconMail = ({ size = 22 }) => (
  <svg {...base(size)}><rect x="3" y="5" width="18" height="14" rx="2.5" /><path d="m4 7 8 6 8-6" /></svg>
)
export const IconInstagram = ({ size = 22 }) => (
  <svg {...base(size)}><rect x="3.5" y="3.5" width="17" height="17" rx="5" /><circle cx="12" cy="12" r="4" /><circle cx="17" cy="7" r="0.9" fill="currentColor" stroke="none" /></svg>
)
export const IconX = ({ size = 22 }) => (
  <svg {...base(size)}><path d="M4 4l16 16M20 4 4 20" /></svg>
)
export const IconGlobe = ({ size = 22 }) => (
  <svg {...base(size)}><circle cx="12" cy="12" r="9" /><path d="M3 12h18M12 3c3 3 3 15 0 18M12 3c-3 3-3 15 0 18" /></svg>
)
export const IconWhatsapp = ({ size = 22 }) => (
  <svg {...base(size)}><path d="M20 11.5a8 8 0 0 1-11.9 7L4 20l1.6-4A8 8 0 1 1 20 11.5Z" /><path d="M9 8.5c.3 2.6 2.6 5 5.6 5.7l1.1-1.3-2-1-.9.7a4 4 0 0 1-1.7-1.7l.7-.9-1-2Z" /></svg>
)
export const IconSliders = ({ size = 22 }) => (
  <svg {...base(size)}><path d="M4 7h9M17 7h3M4 17h3M11 17h9" /><circle cx="15" cy="7" r="2" /><circle cx="9" cy="17" r="2" /></svg>
)
export const IconScissors = ({ size = 22 }) => (
  <svg {...base(size)}><circle cx="6" cy="6" r="2.8" /><circle cx="6" cy="18" r="2.8" /><path d="M8.2 7.7 20 18M8.2 16.3 20 6" /></svg>
)
export const IconInfo = ({ size = 22 }) => (
  <svg {...base(size)}><circle cx="12" cy="12" r="9" /><path d="M12 11v5M12 7.8v.2" /></svg>
)
export const IconImage = ({ size = 22 }) => (
  <svg {...base(size)}><rect x="3.5" y="4.5" width="17" height="15" rx="2.5" /><circle cx="9" cy="10" r="1.7" /><path d="m4 17 5-4.5 4 3.5 3-2.5 4 3.5" /></svg>
)
export const IconCalendar = ({ size = 22 }) => (
  <svg {...base(size)}><rect x="3.5" y="5" width="17" height="15" rx="2.5" /><path d="M3.5 10h17M8 3v4M16 3v4" /></svg>
)
export const IconPin = ({ size = 22 }) => (
  <svg {...base(size)}><path d="M12 21s7-6.2 7-11.5A7 7 0 0 0 5 9.5C5 14.8 12 21 12 21Z" /><circle cx="12" cy="9.5" r="2.5" /></svg>
)
export const IconStar = ({ size = 22 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" focusable="false"><path d="m12 2.8 2.8 5.9 6.4.8-4.7 4.4 1.2 6.4L12 17.2 6.3 20.3l1.2-6.4L2.8 9.5l6.4-.8L12 2.8Z" /></svg>
)
export const IconCheck = ({ size = 22 }) => (
  <svg {...base(size)} strokeWidth={2.6}><path d="m5 12.5 4.5 4.5L19 7" /></svg>
)
export const IconClose = ({ size = 22 }) => (
  <svg {...base(size)} strokeWidth={2.2}><path d="M6 6l12 12M18 6 6 18" /></svg>
)
export const IconChevronLeft = ({ size = 22 }) => (
  <svg {...base(size)} strokeWidth={2.2}><path d="m15 5-7 7 7 7" /></svg>
)
