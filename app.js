const axios = require('axios')

const playersHeights = async () => {
  const data = await axios.get('https://mach-eight.uc.r.appspot.com/')
  const info = data.data.values.map(item => item.h_in)

  const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  })
  readline.question('Enter a number:  ', entrypoint => {
    let match = false
    for (let i = 0; i < info.length; i++) {
      for (let j = i + 1; j < info.length; j++) {
        if (parseInt(info[i]) + parseInt(info[j]) === parseInt(entrypoint)) {
          match = true
          console.log(`- ${data.data.values[i].first_name} ${data.data.values[i].last_name}    ${data.data.values[j].first_name} ${data.data.values[j].last_name}`)
        }
      }
    }
    if (match === false) console.log('No matches found')
    readline.close()
  })
}

playersHeights()
