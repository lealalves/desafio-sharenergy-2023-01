const randomUser = async () => {

  const url = 'https://randomuser.me/api/?results=5'

  const data = await (await fetch(url)).json()

  return data

}

module.exports = { randomUser }