export default function isNullish<T>(
  value: T | undefined | null
): value is undefined | null {
  return <T>value === undefined || <T>value === null;
}
