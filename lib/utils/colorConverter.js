
const HEX_MAP = {
  '0': 0, '1': 1, '2': 2, '3': 3,
  '4': 4, '5': 5, '6': 6, '7': 7,
  '8': 8, '9': 9, 'a': 10, 'b': 11,
  'c': 12, 'd': 13, 'e': 14, 'f': 15,
};

export function hexToRgb(hex) {
  const hexValues = hex.replace('#', '').toLowerCase();
  const red = hexValues.substring(0,2);
  const green = hexValues.substring(2,4);
  const blue = hexValues.substring(4,6);

  const newValues = [].concat(red, green, blue);
  const rgb = newValues.map(value => {
    return HEX_MAP[value[0]] * 16 + HEX_MAP[value[1]];
  });

  return rgb.join(', ');
};
