export function getRedirectTo(type, header) {
  let path
  if (type === 'boy') {
    path = '/boy'
  } else {
    path = '/girl'
  }
  if (!header) {
    path += 'info'
  }

  return path
}