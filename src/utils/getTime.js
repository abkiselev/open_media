export const getTime = (value) => {
  const minutes = Math.floor(+value / 60)
  const seconds = Math.floor(+value - minutes * 60)

  return `${minutes < 10 ? '0' + minutes : minutes}:${seconds < 10 ? '0' + seconds : seconds}`
}
