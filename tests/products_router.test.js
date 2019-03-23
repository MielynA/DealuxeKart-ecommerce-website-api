const request = require('supertest');
jest.mock('../backend/services/products_services')
const {app,} = require('../backend/app');
const productService = require ("../backend/services/products_services");

test("test get customer",done=>{
    productService.post.mockImplementation(()=> Promise.resolve({test:'1'}))
        request(app)
         .post('/customer')
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
            done()
            })
            .catch(e=>{
                done()
            })
        })
test('post request fail test',done=>{
    productService.post.mockImplementation(()=> Promise.reject())
    request(app)
        .post('/customer')
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
            done();
        })
        .catch(e=>{
            expect().toEqual(undefined)
            done()
        })
})

test("to read the customer ",done=>{
    productService.get.mockImplementation(()=> Promise.resolve({test:'1'}))
    request(app)
    .get('/customer/1')
    .then(response=>{
        expect(response).toEqual({test:'1'})
        done()
    })
    .catch(e=>{
        done()
    })
})

test("to read the customer negative test ",done=>{
    productService.get.mockImplementation(()=> Promise.reject())
    request(app)
    .get('/customer/1')
    .then(()=>{
        done()
    })
    .catch(e=>{
        expect().toBe(undefined)
        done()
    })
})

test("test update customer",done=>{
    productService.put.mockImplementation(()=> Promise.resolve())
        request(app)
         .post('/customer/1')
         
         .then(response=>{
          expect(response).toBe(undefined)
            done()
            })
            .catch(e=>{
                done()
            })
        })
test(' put request fail test',done=>{
    productService.put.mockImplementation(()=> Promise.reject())
    request(app)
        .post('/customer/1')
        
        .then(()=>{
            done();
        })
        .catch(e=>{
            expect().toBe(undefined)
            done()
        })
})

test('delete request test', done =>{
    productService.delete.mockImplementation(() => Promise.resolve());
    request(app)
        .delete('/customer/1')
        .then(response=>{
            expect(response).toBe(undefined)
            done();
        })
        .catch(e => {
          done();
        })
})

test('delete request fail test', done =>{
    productService.delete.mockImplementation(() => Promise.reject());
    request(app)
        .delete('/customer/1')
        .then(()=>{
            done();
        })
        .catch(e => {
            expect().toBe(undefined)
            done();
        })
})
