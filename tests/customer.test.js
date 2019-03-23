const request = require('supertest');
//jest.mock('pg-promise');
jest.mock('../backend/services/customer_services')
//const pgp = require('pg-promise');
const {app,} = require('../backend/app');

// pgp.mockImplementation(() => {
//     return function() {
//         return {
//             none: () => Promise.resolve(),
//             one: () => Promise.resolve(),
            
//         }
//     }
// })
const customerService = require ('../backend/services/customer_services');
// //--- TEST FOR POST CUSTOMER SERVICE 
// test("objectWithoutInfo", ()=>{
   
// customerService.post("Mie", 123, "mie@email.com", "Queens", "NYC", "NYC", 59679).then(data => {
//         expect(data).toBe(undefined)
//         //expect(data).toEqual({userName : "Mie", userPassword : 10383, email : "lara@email.com", billingAdd : "Brooklyn", city: "NYC", state: "NYC", creditCard: 01010 })
//     })
// })

// test("objectWithInfo", ()=>{
   
//     customerService.post("Mie", 123, "mie@email.com", "Queens", "NYC", "NYC", 59679).then(data => {
//            // expect(data).toBe(data)
//             expect(data).toEqual({userName : "Mie", userPassword : 123, email : "mie@email.com", billingAdd : "Queens", city: "NYC", state: "NYC", creditCard: 59679 })
//         })
//     })

// //--- TEST FOR GET CUSTOMER SERVICE
// test("objectWithoutInfo", ()=>{

// customerService.get("Mie", 123, "mie@email.com", "Queens", "NYC", "NYC", 59679).then(data => {
//         expect(data).toBe(undefined)
//         //expect(data).toEqual({userName : "Mie", userPassword : 10383, email : "lara@email.com", billingAdd : "Brooklyn", city: "NYC", state: "NYC", creditCard: 01010 })
//     })
// })

// test("objectWithInfo", ()=>{
   
//     customerService.get("Mie", 123, "mie@email.com", "Queens", "NYC", "NYC", 59679).then(data => {
//            // expect(data).toBe(data)
//             expect(data).toEqual({userName : "Mie", userPassword : 123, email : "mie@email.com", billingAdd : "Queens", city: "NYC", state: "NYC", creditCard: 59679 })
//         })
//     })
// //--- TEST FOR UPDATE/PUT CUSTOMER SERVICE 
// test("objectWithoutInfo", ()=>{
    
//     customerService.put("Mie", 123, "mie@email.com", "Queens", "NYC", "NYC", 59679).then(data => {
//             expect(data).toBe(undefined)
//             //expect(data).toEqual({userName : "Mie", userPassword : 10383, email : "lara@email.com", billingAdd : "Brooklyn", city: "NYC", state: "NYC", creditCard: 01010 })
//         })
//     })
    
// test("objectWithInfo", ()=>{
 
//     customerService.put("Mie", 123, "mie@email.com", "Queens", "NYC", "NYC", 59679).then(data => {
//                // expect(data).toBe(data)
//                 expect(data).toEqual({userName : "Mie", userPassword : 123, email : "mie@email.com", billingAdd : "Queens", city: "NYC", state: "NYC", creditCard: 59679 })
//             })
//         })

// //--- TEST FOR DELETE CUSTOMER SERVICE
// test("objectWithoutInfo", ()=>{

//     customerService.delete("Mie", 123, "mie@email.com", "Queens", "NYC", "NYC", 59679).then(data => {
//             expect(data).toBe(undefined)
//             //expect(data).toEqual({userName : "Mie", userPassword : 10383, email : "lara@email.com", billingAdd : "Brooklyn", city: "NYC", state: "NYC", creditCard: 01010 })
//         })
//     })
// test("objectWithInfo", ()=>{
       
//         customerService.delete("Mie", 123, "mie@email.com", "Queens", "NYC", "NYC", 59679).then(data => {
//                // expect(data).toBe(data)
//                 expect(data).toEqual({userName : "Mie", userPassword : 123, email : "mie@email.com", billingAdd : "Queens", city: "NYC", state: "NYC", creditCard: 59679 })
//             })
//         })

test("customer with info",done=>{
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
          expect(response).toEqual({test:'1'})
            done()
            })
            .catch(e=>{
                done()
            })
            
        })
test('post request fail test', done =>{
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

test("to read the customer ",done=>{
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

test("to read the customer negative test ",done=>{
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

test("test update customer",done=>{
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
test(' put request fail test',done=>{
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

test('delete request test', done =>{
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

test('delete request fail test', done =>{
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
