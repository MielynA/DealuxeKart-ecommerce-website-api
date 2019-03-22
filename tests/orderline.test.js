jest.mock('pg-promise');
const pgp = require('pg-promise');

pgp.mockImplementation(() => {
    return function() {
        return {
            none: () => Promise.resolve(),
            one: () => Promise.resolve(),
            
        }
    }
})
const orderLineService = require('../backend/services/orderline_service')

//--- TEST FOR POST PRODUCTS SERVICE 

test("objectWithoutInfo", ()=>{ 
   
orderLineService.post(1,1,30).then(data => {
        expect(data).toBe(undefined)
    })
})


test("objectWithInfo", ()=>{
    orderLineService.post(1,1,30 ).then(data => {
           // expect(data).toBe(data)
            expect(data).toEqual({ orderId: 1,productId: 1,quantity: 30})
        })
    })

//--- TEST FOR GET PRODUCTS SERVICE
test("objectWithoutInfo", ()=>{
orderLineService.get(1,1,30 ).then(data => {
        expect(data).toBe(undefined)    
    })
})

test("objectWithInfo", ()=>{
    orderLineService.get(1,1,30 ).then(data => {
            expect(data).toEqual({ orderId: 1,productId: 1,quantity: 30 })
        })
    })
//--- TEST FOR UPDATE/PUT PRODUCTS SERVICEž
test("objectWithoutInfo", ()=>{
    orderLineService.put(1,1,30 ).then(data => {
            expect(data).toBe(undefined)
        })
    })
    
test("objectWithInfo", ()=>{

    orderLineService.put(1,1,30 ).then(data => {
                expect(data).toEqual({ orderId: 1,productId: 1,quantity: 30  })
            })
        })

//--- TEST FOR DELETE PRODUCTS SERVICE
test("objectWithoutInfo", ()=>{
    orderLineService.delete(1,1,30 ).then(data => {
            expect(data).toBe(undefined)
        })
    })
test("objectWithInfo", ()=>{
        orderLineService.delete(1,1,30 ).then(data => {
                expect(data).toEqual({ orderId: 1,productId: 1,quantity: 30  })
            })
        })


        //process.on('unhandledRejection', (reason, p) => {
           //s console.log('Unhandled Rejection at: Promise', p, 'reason:', reason);
            // application specific logging, throwing an error, or other logic here
        //  });
          
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