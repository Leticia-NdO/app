async function sleep (seconds) {
  const ms = seconds * 1000 // to convert seconds to milisseconds
  return await new Promise(resolve => setTimeout(resolve, ms))
}

async function defaultMain () {
  while (process.exitCode == null) {
  console.time('loop')
  console.log('Hello  world')
  await sleep(5)
  console.timeEnd('loop')
  }
}

defaultMain()
