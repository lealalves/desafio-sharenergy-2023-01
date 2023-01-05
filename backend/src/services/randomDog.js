const randomDog = async () => {

  const url = 'https://random.dog/woof.json'

  const data = await (await fetch(url)).json()

  return data

}

module.exports = { randomDog }