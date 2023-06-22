const { faker } = require('@faker-js/faker')

class ProductsService {
  constructor() {
    this.products = []

    for (let index = 0; index < 100; index++) {
      this.products.push
      (
        {
          id: faker.phone.number(),
          name: faker.commerce.product(),
          price: faker.commerce.price()
        }
      )
      
    }
  }

  explore(size) {
    return this.products.filter((_,index) => {
      if (size) return index < size
      return this.products
    })
  }

  create(data) {
    const newProduct = {
      id: '731-318-0423',
      ...data,
    }
    this.products.push(newProduct)
    return newProduct
  }


  find(id) {
    return this.products.find(product => product.id === id)
  }

  update(id, body) {
    const isThere =  this.products.some((product) => product.id === id)
    if (isThere) {
      const udpateProduct = {
        message: "update",
        ...body,
        id
      }
      return udpateProduct
    }
  }

  delete(id, body){
    const isThere =  this.products.some((product) => product.id === id)
    if (isThere) {
      const deleteProduct = {
        message: "deleted",
        ...body,
        id
      }
      return deleteProduct
    }
    
  }
}


module.exports = ProductsService