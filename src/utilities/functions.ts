export function numberToBooleanArray(num: number): boolean[] {
  const newByte = [];
  for (let i = 0; i < 8; i++) {
    newByte[i] = !!(num & (1 << i));
  }
  return newByte.reverse();
}

export function doBitmove(num: number, bitmove: string, size: number = 256): number {
    switch (bitmove) {
      case "+":
        return (num + 1) % size;
      case "<":
        return (num * 2) % size;
      case "~":
        return size - 1 - num;
      case ">":
        return Math.floor(num / 2);
      case "-":
        if (num === 0) {
          return 255
        }
        else {
          return num - 1
        }
      default:
        console.log("Invalid Token")
        return num;
    }
  }