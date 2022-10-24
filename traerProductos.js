export const traerProductos = async() => {
    let response = await fetch('../DB/productos.json')
    let data = await response.json()
    return data
  }