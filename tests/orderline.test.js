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

//--- TEST FOR POST ORDERLINE SERVICE 

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

//--- TEST FOR GET ORDERLINE SERVICE
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
//--- TEST FOR UPDATE/PUT ORDERLINE SERVICEž
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

//--- TEST FOR DELETE ORDERLINE SERVICE
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