
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
const supplierService = require ("../backend/services/supplier_services");

//--- TEST FOR POST PRODUCTS SERVICE 

test("objectWithoutInfo", ()=>{ 
  
supplierService.post(1,"mie","admi123" ,"heyho",123455,"mie@email.com","queens","phil","2019-01-01", "2019-01-01","{test}").then(data => {
        expect(data).toBe(undefined)
    })
})


test("objectWithInfo", ()=>{
    supplierService.post(1,"mie","admi123" ,"heyho",123455,"mie@email.com","queens","phil","2019-01-01", "2019-01-01","{test}" ).then(data => {
           // expect(data).toBe(data)
            expect(data).toEqual({supplierId : 1, productName :"Charles and Keith",productDesc : "Handbag" ,unitPrice: 70,color: "white",quantityPerUnit : 80,categoryName: "Handbag",categoryDesc: "test",imgurl: "{test}" })
        })
    })

//--- TEST FOR GET PRODUCTS SERVICE
test("objectWithoutInfo", ()=>{
supplierService.get(1,"mie","admi123" ,"heyho",123455,"mie@email.com","queens","phil","2019-01-01", "2019-01-01","{test}" ).then(data => {
        expect(data).toBe(undefined)    
    })
})

test("objectWithInfo", ()=>{
    supplierService.get(1,"mie","admi123" ,"heyho",123455,"mie@email.com","queens","phil","2019-01-01", "2019-01-01","{test}" ).then(data => {
            expect(data).toEqual({supplierId : 1, productName :"Charles and Keith",productDesc : "Handbag" ,unitPrice: 70,color: "white",quantityPerUnit : 80,categoryName: "Handbag",categoryDesc: "test",imgurl: "{test}"  })
        })
    })
//--- TEST FOR UPDATE/PUT PRODUCTS SERVICEž
test("objectWithoutInfo", ()=>{
    supplierService.put(1,"mie","admi123" ,"heyho",123455,"mie@email.com","queens","phil","2019-01-01", "2019-01-01","{test}" ).then(data => {
            expect(data).toBe(undefined)
        })
    })
    
test("objectWithInfo", ()=>{

    supplierService.put(1,"mie","admi123" ,"heyho",123455,"mie@email.com","queens","phil","2019-01-01", "2019-01-01","{test}" ).then(data => {
                expect(data).toEqual({supplierId : 1, productName :"Charles and Keith",productDesc : "Handbag" ,unitPrice: 70,color: "white",quantityPerUnit : 80,categoryName: "Handbag",categoryDesc: "test",imgurl: "{test}"   })
            })
        })

//--- TEST FOR DELETE PRODUCTS SERVICE
test("objectWithoutInfo", ()=>{
    supplierService.delete(1,"mie","admi123" ,"heyho",123455,"mie@email.com","queens","phil","2019-01-01", "2019-01-01","{test}" ).then(data => {
            expect(data).toBe(undefined)
        })
    })
test("objectWithInfo", ()=>{
        supplierService.delete(1,"mie","admi123" ,"heyho",123455,"mie@email.com","queens","phil","2019-01-01", "2019-01-01","{test}" ).then(data => {
                expect(data).toEqual({supplierId : 1, productName :"Charles and Keith",productDesc : "Handbag" ,unitPrice: 70,color: "white",quantityPerUnit : 80,categoryName: "Handbag",categoryDesc: "test",imgurl: "{test}"   })
            })
        })

