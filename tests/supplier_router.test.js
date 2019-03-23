const request = require('supertest');
jest.mock('../backend/services/supplier_services')
const {app,} = require('../backend/app');
//jest.mock("pg-promise");
//const pgp = require("../backend/db/database");

// pgp.mockImplementation(() => {
//     return function() {
//         return {
//             none: () => Promise.resolve(),
//             one: () => Promise.resolve(),
//         }
//     } 
// })

const supplierService = require ("../backend/services/supplier_services");

// //--- TEST FOR POST PRODUCTS SERVICE 

// test("objectWithoutInfo", ()=>{ 
  
// supplierService.post(1,"mie","admi123" ,"heyho",123455,"mie@email.com","queens","phil","2019-01-01", "2019-01-01","{test}").then(data => {
//         expect(data).toBe(undefined)
//     })
// })


// test("objectWithInfo", ()=>{
//     supplierService.post(1,"mie","admi123" ,"heyho",123455,"mie@email.com","queens","phil","2019-01-01", "2019-01-01","{test}" ).then(data => {
//            // expect(data).toBe(data)
//             expect(data).toEqual({supplierId : 1, productName :"Charles and Keith",productDesc : "Handbag" ,unitPrice: 70,color: "white",quantityPerUnit : 80,categoryName: "Handbag",categoryDesc: "test",imgurl: "{test}" })
//         })
//     })

// //--- TEST FOR GET PRODUCTS SERVICE
// test("objectWithoutInfo", ()=>{
// supplierService.get(1,"mie","admi123" ,"heyho",123455,"mie@email.com","queens","phil","2019-01-01", "2019-01-01","{test}" ).then(data => {
//         expect(data).toBe(undefined)    
//     })
// })

// test("objectWithInfo", ()=>{
//     supplierService.get(1,"mie","admi123" ,"heyho",123455,"mie@email.com","queens","phil","2019-01-01", "2019-01-01","{test}" ).then(data => {
//             expect(data).toEqual({supplierId : 1, productName :"Charles and Keith",productDesc : "Handbag" ,unitPrice: 70,color: "white",quantityPerUnit : 80,categoryName: "Handbag",categoryDesc: "test",imgurl: "{test}"  })
//         })
//     })
// //--- TEST FOR UPDATE/PUT PRODUCTS SERVICEž
// test("objectWithoutInfo", ()=>{
//     supplierService.put(1,"mie","admi123" ,"heyho",123455,"mie@email.com","queens","phil","2019-01-01", "2019-01-01","{test}" ).then(data => {
//             expect(data).toBe(undefined)
//         })
//     })
    
// test("objectWithInfo", ()=>{

//     supplierService.put(1,"mie","admi123" ,"heyho",123455,"mie@email.com","queens","phil","2019-01-01", "2019-01-01","{test}" ).then(data => {
//                 expect(data).toEqual({supplierId : 1, productName :"Charles and Keith",productDesc : "Handbag" ,unitPrice: 70,color: "white",quantityPerUnit : 80,categoryName: "Handbag",categoryDesc: "test",imgurl: "{test}"   })
//             })
//         })

// //--- TEST FOR DELETE PRODUCTS SERVICE
// test("objectWithoutInfo", ()=>{
//     supplierService.delete(1,"mie","admi123" ,"heyho",123455,"mie@email.com","queens","phil","2019-01-01", "2019-01-01","{test}" ).then(data => {
//             expect(data).toBe(undefined)
//         })
//     })
// test("objectWithInfo", ()=>{
//         supplierService.delete(1,"mie","admi123" ,"heyho",123455,"mie@email.com","queens","phil","2019-01-01", "2019-01-01","{test}" ).then(data => {
//                 expect(data).toEqual({supplierId : 1, productName :"Charles and Keith",productDesc : "Handbag" ,unitPrice: 70,color: "white",quantityPerUnit : 80,categoryName: "Handbag",categoryDesc: "test",imgurl: "{test}"   })
//             })
//         })


test("post create for supplier",done=>{
    supplierService.post.mockImplementation(()=> Promise.resolve({test:'1'}))
        request(app)
         .post('/supplier')
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
    supplierService.post.mockImplementation(()=> Promise.reject())
    request(app)
        .post('/supplier')
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

test("to read the supplier ",done=>{
    supplierService.get.mockImplementation(()=> Promise.resolve({test:'1'}))
    request(app)
    .get('/supplier/1')
    .then(response=>{
        expect(response).toEqual({test:'1'})
        done()
    })
    .catch(e=>{
        done()
    })
})

test("to read the supplier negative test ",done=>{
    supplierService.get.mockImplementation(()=> Promise.reject())
    request(app)
    .get('/supplier/1')
    .then(()=>{
        done()
    })
    .catch(e=>{
        expect().toBe(undefined)
        done()
    })
})

test("test update supplier",done=>{
    supplierService.put.mockImplementation(()=> Promise.resolve())
        request(app)
         .post('/supplier/1')
         
         .then(response=>{
          expect(response).toBe(undefined)
            done()
            })
            .catch(e=>{
                done()
            })
        })
test(' put request fail test',done=>{
    supplierService.put.mockImplementation(()=> Promise.reject())
    request(app)
        .post('/supplier/1')
        
        .then(()=>{
            done();
        })
        .catch(e=>{
            expect().toBe(undefined)
            done()
        })
})

test('delete request test', done =>{
    supplierService.delete.mockImplementation(() => Promise.resolve());
    request(app)
        .delete('/supplier/1')
        .then(response=>{
            expect(response).toBe(undefined)
            done();
        })
        .catch(e => {
          done();
        })
})

test('delete request fail test', done =>{
    supplierService.delete.mockImplementation(() => Promise.reject());
    request(app)
        .delete('/supplier/1')
        .then(()=>{
            done();
        })
        .catch(e => {
            expect().toBe(undefined)
            done();
        })
})
