export const checkAge = birthdate => {
  const brd = new Date(birthdate.toLocaleDateString());
  const now = Date.now();
  const milisecondspassed = now - brd;
  return milisecondspassed / (1000 * 60 * 60 * 24 * 365);
};
