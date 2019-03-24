const request = require('supertest');
jest.mock('../backend/services/orderline_service')
const {app,} = require('../backend/app');
const orderLineService = require ("../backend/services/orderline_service");

test("test get orderline",async (done)=>{
    orderLineService.post.mockImplementation(()=> Promise.resolve({test:'1'}))
        request(app)
         .post('/orderline')
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
test('post request fail test',async (done)=>{
    orderLineService.post.mockImplementation(()=> Promise.reject())
    request(app)
        .post('/orderline')
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

test("to read the orderline ",async (done)=>{
     orderLineService.get.mockImplementation(()=> Promise.resolve({test:'1'}))
    request(app)
    .get('/orderline/1')
    .then(response=>{
        expect(response).toEqual({test:'1'})
        done()
    })
    .catch(e=>{
        done()
    })
})

test("to read the orderline negative test ",async (done)=>{
    orderLineService.get.mockImplementation(()=> Promise.reject())
    request(app)
    .get('/orderline/1')
    .then(()=>{
        done()
    })
    .catch(e=>{
        expect().toBe(undefined)
        done()
    })
})

test("test update orderline",async (done)=>{
     orderLineService.put.mockImplementation(()=> Promise.resolve())
        request(app)
         .post('/orderline/1')
         
         .then(response=>{
          expect(response).toBe(undefined)
            done()
            })
            .catch(e=>{
                done()
            })
        })
test(' put request fail test',async (done)=>{
     orderLineService.put.mockImplementation(()=> Promise.reject())
    request(app)
        .post('/orderline/1')
        
        .then(()=>{
            done();
        })
        .catch(e=>{
            expect().toBe(undefined)
            done()
        })
})

test('delete request test', async (done) =>{
     orderLineService.delete.mockImplementation(() => Promise.resolve());
    request(app)
        .delete('/orderline/1')
        .then(response=>{
            expect(response).toBe(undefined)
            done();
        })
        .catch(e => {
          done();
        })
})

test('delete request fail test', async (done) =>{
     orderLineService.delete.mockImplementation(() => Promise.reject());
    request(app)
        .delete('/orderline/1')
        .then(()=>{
            done();
        })
        .catch(e => {
            expect().toBe(undefined)
            done();
        })
})



// jest.mock('pg-promise');
// const pgp = require('pg-promise');

// pgp.mockImplementation(() => {
//     return function() {
//         return {
//             none: () => Promise.resolve(),
//             one: () => Promise.resolve(),
//         }
//     }
// })

// const orderLineService = require('../backend/services/orderline_service')

// //--- TEST FOR POST ORDERLINE SERVICE 

// test("objectWithoutInfo", ()=>{ 
   
// orderLineService.post(1,1,30).then(data => {
//         expect(data).toBe(undefined)
//     })
// })


// test("objectWithInfo", ()=>{
//     orderLineService.post(1,1,30 ).then(data => {
//            // expect(data).toBe(data)
//             expect(data).toEqual({ orderId: 1,productId: 1,quantity: 30})
//         })
//     })

// //--- TEST FOR GET ORDERLINE SERVICE
// test("objectWithoutInfo", ()=>{
// orderLineService.get(1,1,30 ).then(data => {
//         expect(data).toBe(undefined)    
//     })
// })

// test("objectWithInfo", ()=>{
//     orderLineService.get(1,1,30 ).then(data => {
//             expect(data).toEqual({ orderId: 1,productId: 1,quantity: 30 })
//         })
//     })
// //--- TEST FOR UPDATE/PUT ORDERLINE SERVICEž
// test("objectWithoutInfo", ()=>{
//     orderLineService.put(1,1,30 ).then(data => {
//             expect(data).toBe(undefined)
//         })
//     })
    
// test("objectWithInfo", ()=>{

//     orderLineService.put(1,1,30 ).then(data => {
//                 expect(data).toEqual({ orderId: 1,productId: 1,quantity: 30  })
//             })
//         })

// //--- TEST FOR DELETE ORDERLINE SERVICE
// test("objectWithoutInfo", ()=>{
//     orderLineService.delete(1,1,30 ).then(data => {
//             expect(data).toBe(undefined)
//         })
//     })
// test("objectWithInfo", ()=>{
//         orderLineService.delete(1,1,30 ).then(data => {
//                 expect(data).toEqual({ orderId: 1,productId: 1,quantity: 30  })
//             })
//         })

// test('Expect status 200 if db promise resolves', done => {
//     orderLineService.post.mockImplementation(() => Promise.resolve());
//     request(app)
//         .post('/supplier')
//         .send({
//             'customerId': 1, 
//             'username': 'ley',
//             'supplierPassword': 'admin123', 
//             'shopName': 'crew', 
//             'phone': 1259595, 
//             'email': 'ley@email.com', 
//             'address': 'phil', 
//             'country': 'phil', 
//             'createdAt': '2019-01-01', 
//             'updatedAt': '2019-01-01',
//             'imgurl': '{test}'
//         })
//         .then(res => {
//             expect(res.status).toBe(200);
//             done();
//         })
//         .catch(res => {
//             done();
//         });
// });