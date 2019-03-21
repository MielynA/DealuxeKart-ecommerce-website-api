jest.mock("pg-promise");
const pgp = require("pg-promise");

pgp.mockImplementation(() => {
    return function() {
        return {
            none: () => Promise.resolve(),
            one: () => Promise.resolve(),
            
        }
    }
})
const customerService = require ("../../backend/services/customer_services");
//--- TEST FOR POST CUSTOMER SERVICE 
test("objectWithoutInfo", ()=>{
   
customerService.post("Mie", "admin123", "mie@email.com", "queens", "nyc", "nyc" , 12945, "2019-01-01", "2019-01-01").then(data => {
        expect(data).toBe(undefined)
        //expect(data).toEqual({username : "Mie", password : 10383, email : "lara@email.com", billingAdd : "Brooklyn", city: "NYC", state: "NYC", creditCard: 01010 })
    })
})

test("objectWithInfo", ()=>{
    
    customerService.post("Mie", "admin123", "mie@email.com", "queens", "nyc", "nyc" , 12945, "2019-01-01", "2019-01-01").then(data => {
           // expect(data).toBe(data)
            expect(data).toEqual({username : "Mie", password : "admin123", email : "mie@email.com", billingAdd : "queens", city: "NYC", state: "NYC", creditCard: 12945, createdAt: "2019-01-01", updatedAt: "2019-01-01" , createdAt: "2019-01-01", updatedAt: "2019-01-01" })
        })
    })

//--- TEST FOR GET CUSTOMER SERVICE
test("objectWithoutInfo", ()=>{

customerService.get("Mie", "admin123", "mie@email.com", "queens", "nyc", "nyc" , 12945, "2019-01-01", "2019-01-01").then(data => {
        expect(data).toBe(undefined)
        //expect(data).toEqual({username : "Mie", password : 10383, email : "lara@email.com", billingAdd : "Brooklyn", city: "NYC", state: "NYC", creditCard: 01010 })
    })
})

test("objectWithInfo", ()=>{

    customerService.get("Mie", "admin123", "mie@email.com", "queens", "nyc", "nyc" , 12945, "2019-01-01", "2019-01-01").then(data => {
           // expect(data).toBe(data)
            expect(data).toEqual({username : "Mie", password : "admin123", email : "mie@email.com", billingAdd : "queens", city: "NYC", state: "NYC", creditCard: 12945, createdAt: "2019-01-01", updatedAt: "2019-01-01" })
        })
    })
//--- TEST FOR UPDATE/PUT CUSTOMER SERVICEž
test("objectWithoutInfo", ()=>{

    customerService.put("Mie", "admin123", "mie@email.com", "queens", "nyc", "nyc" , 12945, "2019-01-01", "2019-01-01").then(data => {
            expect(data).toBe(undefined)
            //expect(data).toEqual({username : "Mie", password : 10383, email : "lara@email.com", billingAdd : "Brooklyn", city: "NYC", state: "NYC", creditCard: 01010 })
        })
    })
    
test("objectWithInfo", ()=>{

    customerService.put("Mie", "admin123", "mie@email.com", "queens", "nyc", "nyc" , 12945, "2019-01-01", "2019-01-01").then(data => {
               // expect(data).toBe(data)
                expect(data).toEqual({username : "Mie", password : "admin123", email : "mie@email.com", billingAdd : "queens", city: "NYC", state: "NYC", creditCard: 12945, createdAt: "2019-01-01", updatedAt: "2019-01-01"  })
            })
        })

//--- TEST FOR DELETE CUSTOMER SERVICE
test("objectWithoutInfo", ()=>{
 
    customerService.delete("Mie", "admin123", "mie@email.com", "queens", "nyc", "nyc" , 12945, "2019-01-01", "2019-01-01").then(data => {
            expect(data).toBe(undefined)
            //expect(data).toEqual({username : "Mie", password : 10383, email : "lara@email.com", billingAdd : "Brooklyn", city: "NYC", state: "NYC", creditCard: 01010 })
        })
    })
test("objectWithInfo", ()=>{

        customerService.delete("Mie", "admin123", "mie@email.com", "queens", "nyc", "nyc" , 12945, "2019-01-01", "2019-01-01").then(data => {
               // expect(data).toBe(data)
                expect(data).toEqual({username : "Mie", password : "admin123", email : "mie@email.com", billingAdd : "queens", city: "NYC", state: "NYC", creditCard: 12945, createdAt: "2019-01-01", updatedAt: "2019-01-01"  })
            })
        })