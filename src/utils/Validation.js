export const textLength = (str) => {
  return str.length >= 3 ? true : false;
};

export const selectCheck = (drzava, prodavac, oblasti, prioritet) => {
  return drzava && prodavac && oblasti && prioritet ? true : false;
};

export const formValidate = (val1, val2, cb) => {
  return val1 && val2 ? cb(false) : cb(true);
};

export const vinChecker = (vin) => {
  const checkLength =
    vin.toLowerCase().split(' ').join('').length === 17 || vin === ''
      ? true
      : false;

  const checkLetterO = vin.toLowerCase().split('').join('').includes('o');
  const VinChecked = {
    length: checkLength,
    letterO: checkLetterO,
  };
  return VinChecked;
};
