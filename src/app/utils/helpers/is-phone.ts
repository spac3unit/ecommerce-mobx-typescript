export const isPhone = (phone: string): boolean =>
  !!(phone && phone.replace(/[\s()+\-A-Z_a-z]+/gm, '').length === 11);
