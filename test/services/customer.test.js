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
const customerService = require ('../../backend/services/customer_services'); 

test("objectWithoutInfo", ()=>{
customerService.custCreate("Mie", 123, "mie@email.com", "Queens", "NYC", "NYC", 59679).then(data => {
        expect(data).toBe(undefined)
        //expect(data).toEqual({userName : "Mie", userPassword : 10383, email : "lara@email.com", billingAdd : "Brooklyn", city: "NYC", state: "NYC", creditCard: 01010 })
    })
})

