const products =  [
    { 
        id: '1', 
        name: 'Remera Blanca Lisa', 
        price: 3000, 
        category: 'Remeras', 
        img:'/Images/remerablanca.jpg' , 
        stock: 25, 
        description:'Remera blanca lisa de algodón'
    },
    { 
        id: '2',
        name: 'Buzo Negro', 
        price: 8000, 
        category: 'Buzos', 
        img:'/Images/buzonegro.jpg', 
        stock: 16, 
        description:'Buzo negro liso de algodón'
    },
    {
        id: '3', 
        name: 'Buzo Blanco', 
        price: 8000, 
        category: 'Buzos', 
        img:'/Images/buzoblanco.jpg', 
        stock: 10, 
        description:'Buzo blanco liso de algodón'
},
{ 
        id: '4', 
        name: 'Camisa Azul', 
        price: 6500, 
        category: 'Camisas', 
        img:'/Images/camisaazul.jpg', 
        stock: 10, 
        description:'Camisa de vestir azul'
},
{ 
        id: '5', 
        name: 'Camisa Blanca', 
        price: 6500, 
        category: 'Camisas', 
        img:'/Images/camisablanca.jpg', 
        stock: 10, 
        description:'Camisa de vestir blanca'
},
{
        id: '6', 
        name: 'Remera Negra Lisa', 
        price: 3000, 
        category: 'Remeras', 
        img:'/Images/remeranegra.jpg', 
        stock: 10, 
        description:'Remera negra lisa de algodón'
}
]

export const getProducts = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products)
        }, 2000)
    })
}

export const getProductById = (id) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products.find (prod => prod.id === id))
        }, 2000)
    })
}

export const getProductsByCategory = (categoryId) => {
    return new Promise (resolve => {
        setTimeout(() => {
            resolve(products.filter(prod => prod.category === categoryId))
        }, 500)
    })
}