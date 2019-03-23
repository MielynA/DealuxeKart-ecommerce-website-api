const request = require('supertest');
jest.mock('../backend/services/products_services')
const {app,} = require('../backend/app');
const productService = require ("../backend/services/products_services");

test("test get products",done=>{
    productService.post.mockImplementation(()=> Promise.resolve({test:'1'}))
        request(app)
         .post('/products')
         .send({
            "userName" : "Mie", 
            "userPassword" : "10383", 
            "email" : "lara@email.com", 
            "billingAdd" : "Brooklyn", 
            "city": "NYC", 
            "state": "NYC", 
            "creditCard": "01010",
         })
         .then(response=>{
          expect(response).toEqual({test:'1'})
                        })
            .catch(e=>{
                            })
                            done()
        })
test('post request fail test',done=>{
    productService.post.mockImplementation(()=> Promise.reject())
    request(app)
        .post('/products')
        .send({
            "userName" : "Mie", 
            "userPassword" : "10383", 
            "email" : "lara@email.com", 
            "billingAdd" : "Brooklyn", 
            "city": "NYC", 
            "state": "NYC", 
            "creditCard": "01010",
        })
        .then(()=>{
            
        })
        .catch(e=>{
            expect().toEqual(undefined)
                    })
                    done()
})

test("to read the products ",done=>{
    productService.get.mockImplementation(()=> Promise.resolve({test:'1'}))
    request(app)
    .get('/products/1')
    .then(response=>{
        expect(response).toEqual({test:'1'})
            })
    .catch(e=>{
            })
            done()
})

test("to read the products negative test ",done=>{
    productService.get.mockImplementation(()=> Promise.reject())
    request(app)
    .get('/products/1')
    .then(()=>{
            })
    .catch(e=>{
        expect().toBe(undefined)
            })
            done()
})

test("test update products",done=>{
    productService.put.mockImplementation(()=> Promise.resolve())
        request(app)
         .post('/products/1')
         
         .then(response=>{
          expect(response).toBe(undefined)
                        })
            .catch(e=>{
                            })
                            done()
        })
test(' put request fail test',done=>{
    productService.put.mockImplementation(()=> Promise.reject())
    request(app)
        .post('/products/1')
        
        .then(()=>{
            
        })
        .catch(e=>{
            expect().toBe(undefined)
                    })
                    done()
})

test('delete request test', done =>{
    productService.delete.mockImplementation(() => Promise.resolve());
    request(app)
        .delete('/products/1')
        .then(response=>{
            expect(response).toBe(undefined)
            
        })
        .catch(e => {
          
        })
        done()
})

test('delete request fail test', done =>{
    productService.delete.mockImplementation(() => Promise.reject());
    request(app)
        .delete('/products/1')
        .then(()=>{
            
        })
        .catch(e => {
            expect().toBe(undefined)
            
        })
        done()
})
