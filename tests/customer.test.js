const request = require('supertest');
jest.mock('../backend/services/customer_services')
const {app,} = require('../backend/app');


const customerService = require ('../backend/services/customer_services');


test("customer with info",async (done)=>{
     customerService.post.mockImplementation(()=> Promise.resolve({test:'1'}))
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
            "createdAt": "2019-01-01",
            "updatedAt" : "2019-01-01",
         })
         .then(response=>{
          expect\(response).toEqual({test:'1'})
            done()
            })
            .catch(e=>{
                done()
            })
        })
test('post request fail test',async (done)=>{
     customerService.post.mockImplementation(()=> Promise.reject())
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

test("to read the customer ",async (done)=>{
    customerService.get.mockImplementation(()=> Promise.resolve({test:'1'}))
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

test("to read the customer negative test ",async (done)=>{
     customerService.get.mockImplementation(()=> Promise.reject())
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

test("test update customer",async (done)=>{
    customerService.put.mockImplementation(()=> Promise.resolve())
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
test(' put request fail test',async (done)=>{
     customerService.put.mockImplementation(()=> Promise.reject())
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

test('delete request test', async (done) =>{
     customerService.delete.mockImplementation(() => Promise.resolve());
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

test('delete request fail test', async (done) =>{
    customerService.delete.mockImplementation(() => Promise.reject());
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


