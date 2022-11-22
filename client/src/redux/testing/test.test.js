// import { suma } from "../funcionsuma/suma"
 import filtroCreado from "../actions/actions"
// it("debe devolver una suma",()=>{
//     expect(suma(1,2)).toBe(3)
// })






 it ("Debe devolver un type q sea igual a FILTRO_POR_CREACION",() =>{
 expect(filtroCreado(value)).toBE(FILTRO_POR_CREACION)

})