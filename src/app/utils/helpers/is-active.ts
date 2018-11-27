export const isActive = (match?: any, location?: Location) => {
  if (!match) {
    return false;
  }

  return match && location && location.pathname === match.url;
};
