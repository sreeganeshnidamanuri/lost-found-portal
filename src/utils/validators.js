export function isEmail(v) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v)
}
export function minLength(v, n) {
  return typeof v === 'string' && v.trim().length >= n
}
