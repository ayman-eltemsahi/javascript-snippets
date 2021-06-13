
const clean = (obj) => {
  if (!obj || typeof obj !== 'object') return obj
  return Object.fromEntries(
    Object.keys(obj)
      .map((key) => [key, clean(obj[key])])
      .filter(
        ([k, v]) =>
          !(v === null || v === undefined || (typeof v === 'object' && Object.keys(v).length === 0))
      )
  )
}
