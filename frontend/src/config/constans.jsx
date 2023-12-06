const URLBASE = import.meta.env.VITE_URLBASE ?? ''
console.log(URLBASE)

export const ENDPOINT = {
  base: `${URLBASE}/`,
  profile: `${URLBASE}/profile`,
  login: `${URLBASE}/login`,
  register: `${URLBASE}/register`,
  newproduct: `${URLBASE}/newproduct`,
  products: `${URLBASE}/products`
}
