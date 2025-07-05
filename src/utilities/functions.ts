export function numberToBooleanArray(num: number): boolean[] {
  const newByte = [];
  for (let i = 0; i < 8; i++) {
    newByte[i] = !!(num & (1 << i));
  }
  return newByte.reverse();
}