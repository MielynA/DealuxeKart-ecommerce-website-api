const request = require('supertest');
jest.mock('../backend/services/orders_services');
const {app,} = require('../backend/app');
const orderService = require ("../backend/services/orders_services");

test("test get orders",async (done)=>{
    orderService.post.mockImplementation(()=> Promise.resolve({test:'1'}))
        request(app)
         .post('/orders')
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
test('post request fail test',async (done)=>{
    orderService.post.mockImplementation(()=> Promise.reject())
    request(app)
        .post('/orders')
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

test("to read the orders ",async (done)=>{
     orderService.get.mockImplementation(()=> Promise.resolve({test:'1'}))
    request(app)
    .get('/orders/1')
    .then(response=>{
        expect(response).toEqual({test:'1'})
        done()
    })
    .catch(e=>{
        done()
    })
})

test("to read the orders negative test ",async (done)=>{
    // orderService.get.mockImplementation(()=> Promise.reject())
    request(app)
    .get('/orders/1')
    .then(()=>{
        done()
    })
    .catch(e=>{
        expect().toBe(undefined)
        done()
    })
})

test("test update orders",async (done)=>{
     orderService.put.mockImplementation(()=> Promise.resolve())
        request(app)
         .post('/orders/1')
         
         .then(response=>{
          expect(response).toBe(undefined)
            done()
            })
            .catch(e=>{
                done()
            })
        })
test(' put request fail test',async (done)=>{
     orderService.put.mockImplementation(()=> Promise.reject())
    request(app)
        .post('/orders/1')
        
        .then(()=>{
            done();
        })
        .catch(e=>{
            expect().toBe(undefined)
            done()
        })
})

test('delete request test', async (done) =>{
     orderService.delete.mockImplementation(() => Promise.resolve());
    request(app)
        .delete('/orders/1')
        .then(response=>{
            expect(response).toBe(undefined)
            done();
        })
        .catch(e => {
          done();
        })
})

test('delete request fail test', async (done) =>{
     orderService.delete.mockImplementation(() => Promise.reject());
    request(app)
        .delete('/orders/1')
        .then(()=>{
            done();
        })
        .catch(e => {
            expect().toBe(undefined)
            done();
        })
})



// jest.mock("pg-promise");
// const pgp = require("pg-promise");

// pgp.mockImplementation(() => {
//     return function() {
//         return {
//             none: () => Promise.resolve({}),
//             one: () => Promise.resolve(),
//         }
//     } 
// })

// const ordersService = require ("../backend/services/orders_services");

// //--- TEST FOR POST orders SERVICE 

// test("objectWithoutInfo", ()=>{ 
  
// ordersService.post(1,"mie","admi123" ,"heyho",123455,"mie@email.com","queens","phil","2019-01-01", "2019-01-01","{test}").then(data => {
//         expect(data).toBe(undefined)
//     })
// })


// test("objectWithInfo", ()=>{
//     ordersService.post(1,"mie","admi123" ,"heyho",123455,"mie@email.com","queens","phil","2019-01-01", "2019-01-01","{test}" ).then(data => {
//            // expect(data).toBe(data)
//             expect(data).toEqual({supplierId : 1, productName :"Charles and Keith",productDesc : "Handbag" ,unitPrice: 70,color: "white",quantityPerUnit : 80,categoryName: "Handbag",categoryDesc: "test",imgurl: "{test}" })
//         })
//     })

// //--- TEST FOR GET orders SERVICE
// test("objectWithoutInfo", ()=>{
// ordersService.get(1,"mie","admi123" ,"heyho",123455,"mie@email.com","queens","phil","2019-01-01", "2019-01-01","{test}" ).then(data => {
//         expect(data).toBe(undefined)    
//     })
// })

// test("objectWithInfo", ()=>{
//     ordersService.get(1,"mie","admi123" ,"heyho",123455,"mie@email.com","queens","phil","2019-01-01", "2019-01-01","{test}" ).then(data => {
//             expect(data).toEqual({supplierId : 1, productName :"Charles and Keith",productDesc : "Handbag" ,unitPrice: 70,color: "white",quantityPerUnit : 80,categoryName: "Handbag",categoryDesc: "test",imgurl: "{test}"  })
//         })
//     })
// //--- TEST FOR UPDATE/PUT orders SERVICEž
// test("objectWithoutInfo", ()=>{
//     ordersService.put(1,"mie","admi123" ,"heyho",123455,"mie@email.com","queens","phil","2019-01-01", "2019-01-01","{test}" ).then(data => {
//             expect(data).toBe(undefined)
//         })
//     })
    
// test("objectWithInfo", ()=>{

//     ordersService.put(1,"mie","admi123" ,"heyho",123455,"mie@email.com","queens","phil","2019-01-01", "2019-01-01","{test}" ).then(data => {
//                 expect(data).toEqual({supplierId : 1, productName :"Charles and Keith",productDesc : "Handbag" ,unitPrice: 70,color: "white",quantityPerUnit : 80,categoryName: "Handbag",categoryDesc: "test",imgurl: "{test}"   })
//             })
//         })

// //--- TEST FOR DELETE orders SERVICE
// test("objectWithoutInfo", ()=>{
//     ordersService.delete(1,"mie","admi123" ,"heyho",123455,"mie@email.com","queens","phil","2019-01-01", "2019-01-01","{test}" ).then(data => {
//             expect(data).toBe(undefined)
//         })
//     })
// test("objectWithInfo", ()=>{
//         ordersService.delete(1,"mie","admi123" ,"heyho",123455,"mie@email.com","queens","phil","2019-01-01", "2019-01-01","{test}" ).then(data => {
//                 expect(data).toEqual({supplierId : 1, productName :"Charles and Keith",productDesc : "Handbag" ,unitPrice: 70,color: "white",quantityPerUnit : 80,categoryName: "Handbag",categoryDesc: "test",imgurl: "{test}"   })
//             })
//         })


      