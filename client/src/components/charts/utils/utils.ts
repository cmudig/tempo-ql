export function cumulativeSum(arr: Array<number>): Array<number> {
    return arr.map(
      (
        (sum) => (value) =>
          (sum += value)
      )(0)
    );
  }