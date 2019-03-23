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
//--- TEST FOR POST CUSTOMER SERVICE 
test("objectWithoutInfo", ()=>{
   
customerService.post("Mie", 123, "mie@email.com", "Queens", "NYC", "NYC", 59679).then(data => {
        expect(data).toBe(undefined)
        //expect(data).toEqual({userName : "Mie", userPassword : 10383, email : "lara@email.com", billingAdd : "Brooklyn", city: "NYC", state: "NYC", creditCard: 01010 })
    })
})

test("objectWithInfo", ()=>{
   
    customerService.post("Mie", 123, "mie@email.com", "Queens", "NYC", "NYC", 59679).then(data => {
           // expect(data).toBe(data)
            expect(data).toEqual({userName : "Mie", userPassword : 123, email : "mie@email.com", billingAdd : "Queens", city: "NYC", state: "NYC", creditCard: 59679 })
        })
    })

//--- TEST FOR GET CUSTOMER SERVICE
test("objectWithoutInfo", ()=>{

customerService.get("Mie", 123, "mie@email.com", "Queens", "NYC", "NYC", 59679).then(data => {
        expect(data).toBe(undefined)
        //expect(data).toEqual({userName : "Mie", userPassword : 10383, email : "lara@email.com", billingAdd : "Brooklyn", city: "NYC", state: "NYC", creditCard: 01010 })
    })
})

test("objectWithInfo", ()=>{
   
    customerService.get("Mie", 123, "mie@email.com", "Queens", "NYC", "NYC", 59679).then(data => {
           // expect(data).toBe(data)
            expect(data).toEqual({userName : "Mie", userPassword : 123, email : "mie@email.com", billingAdd : "Queens", city: "NYC", state: "NYC", creditCard: 59679 })
        })
    })
//--- TEST FOR UPDATE/PUT CUSTOMER SERVICE 
test("objectWithoutInfo", ()=>{
    
    customerService.put("Mie", 123, "mie@email.com", "Queens", "NYC", "NYC", 59679).then(data => {
            expect(data).toBe(undefined)
            //expect(data).toEqual({userName : "Mie", userPassword : 10383, email : "lara@email.com", billingAdd : "Brooklyn", city: "NYC", state: "NYC", creditCard: 01010 })
        })
    })
    
test("objectWithInfo", ()=>{
 
    customerService.put("Mie", 123, "mie@email.com", "Queens", "NYC", "NYC", 59679).then(data => {
               // expect(data).toBe(data)
                expect(data).toEqual({userName : "Mie", userPassword : 123, email : "mie@email.com", billingAdd : "Queens", city: "NYC", state: "NYC", creditCard: 59679 })
            })
        })

//--- TEST FOR DELETE CUSTOMER SERVICE
test("objectWithoutInfo", ()=>{

    customerService.delete("Mie", 123, "mie@email.com", "Queens", "NYC", "NYC", 59679).then(data => {
            expect(data).toBe(undefined)
            //expect(data).toEqual({userName : "Mie", userPassword : 10383, email : "lara@email.com", billingAdd : "Brooklyn", city: "NYC", state: "NYC", creditCard: 01010 })
        })
    })
test("objectWithInfo", ()=>{
       
        customerService.delete("Mie", 123, "mie@email.com", "Queens", "NYC", "NYC", 59679).then(data => {
               // expect(data).toBe(data)
                expect(data).toEqual({userName : "Mie", userPassword : 123, email : "mie@email.com", billingAdd : "Queens", city: "NYC", state: "NYC", creditCard: 59679 })
            })
        })

const customerService = require ('../backend/services/customer_services');