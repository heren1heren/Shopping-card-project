export function getRandomPrize() {
  return +(Math.random() * 1000).toFixed(2);
}
export function getRandomColor() {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}
export function returnRandomNumber(max: number) {
  return Math.round(Math.random() * (max - 1));
}
export function invertHex(hex: string) {
  return (Number(`0x${hex}`) ^ 0xffffff)
    .toString(16)
    .toUpperCase()
    .padStart(6, '0');
}
export function contains(item: object, container: object[]) {
  for (let i = 0; i < container.length; i++) {
    const element = container[i];
    if (element === item) return true;
  }
  return false;
}

// custom fetch hook here:
