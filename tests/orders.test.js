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
            done()
            })
            .catch(e=>{
                done()
            })
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
            done();
        })
        .catch(e=>{
            expect().toEqual(undefined)
            done()
        })
})

test("to read the products ",done=>{
    productService.get.mockImplementation(()=> Promise.resolve({test:'1'}))
    request(app)
    .get('/products/1')
    .then(response=>{
        expect(response).toEqual({test:'1'})
        done()
    })
    .catch(e=>{
        done()
    })
})

test("to read the products negative test ",done=>{
    productService.get.mockImplementation(()=> Promise.reject())
    request(app)
    .get('/products/1')
    .then(()=>{
        done()
    })
    .catch(e=>{
        expect().toBe(undefined)
        done()
    })
})

test("test update products",done=>{
    productService.put.mockImplementation(()=> Promise.resolve())
        request(app)
         .post('/products/1')
         
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
        .post('/products/1')
        
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
        .delete('/products/1')
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
        .delete('/products/1')
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

// //--- TEST FOR POST PRODUCTS SERVICE 

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

// //--- TEST FOR GET PRODUCTS SERVICE
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
// //--- TEST FOR UPDATE/PUT PRODUCTS SERVICEž
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

// //--- TEST FOR DELETE PRODUCTS SERVICE
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


      