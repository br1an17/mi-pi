import React,{useState} from "react";


const Form= () =>{
    const [input,setInput] = useState({
        name:"",
        tipo:"",
        vida:"",
        ataque:"",
        defensa:"",
        velocidad:"",
        peso:"",
        altura:"",
    })

  const [errors,setErrors] = useState("")


    const handleSumbit = (event) =>{
        event.preventDefault()
    
const pokemon ={
    name:document.querySelector("input[name=`name`]").value,
    tipo:document.querySelector("input[name=`tipo`]").value,
    vida:document.querySelector("input[name=`vida`]").value,
    ataque:document.querySelector("input[name=`ataque`]").value,
    defensa:document.querySelector("input[name=`defensa`]").value,
    velocidad:document.querySelector("input[name=`velocidad`]").value,
    peso:document.querySelector("input[name=`peso`]").value,
    altura:document.querySelector("input[name=`altura`]").value,

}



    };

 const validateInput = (input) =>{
    
        const errors = {};
        if (!input.name || input.name.length < 3) {
          errors.name = "Debe tener un nombre de mas de tres letras";
        }
      
        if (!input.vida || input.vida < 0 || input.vida > 150) {
          errors.vida = "Debe tener vida entre 1 - 150";
        }
      
        if (!input.ataque || input.ataque < 0 || input.ataque > 150) {
          errors.ataque = "Debe tener ataque entre 1 - 150";
        }
      
        if (!input.defensa || input.defensa < 0 || input.defensa > 150) {
          errors.defensa = "Debe tener defensa entre 1 - 150";
        }
      
        if (!input.velocidad || input.velocidad < 0 || input.velocidad > 150) {
          errors.velocidad = "Debe tener velocidad entre 1 - 150";
        }
      
        if (input.tipo.length === 0) {
          errors.tipo = "Debe tener por lo menos un tipo";
        }
      
        return errors;



    }





    const handleForm =(event)=>{
        setInput({
            ...input,
            [event.target.name]:event.target.value

        })

     setErrors(validateInput(input))
    }

 

    return (


<div>
<h1> crear pokemon</h1>
  <form onSubmit={handleSumbit}/>

<div>
 <label htmlFor="nombre">Nombre: </label>
        <input type="text" name="name" value={input.name} onChange={handleForm}/>
</div>

<div>
<label htmlFor="tipo">Tipo: </label>
        <input type="text" name="tipo" value={input.tipo} onChange={handleForm}/>
</div>

<div>
<label htmlFor="vida">Vida: </label>
        <input type="text" name="vida" value={input.vida} onChange={handleForm}/>
</div>

<div>
<label htmlFor="ataque">Ataque: </label>
        <input type="text" name="ataque" value={input.ataque} onChange={handleForm}/>
</div>

<div>
<label htmlFor="defensa">Defensa: </label>
        <input type="text" name="defensa" value={input.defensa} onChange={handleForm}/>
</div>
<div>
<label htmlFor="altura">Altura: </label>
        <input type="text" name="altura" value={input.altura} onChange={handleForm}/>
</div>
<div>
<label htmlFor="velocidad">Velocidad: </label>
        <input type="text" name="velocidad" value={input.velocidad} onChange={handleForm}/>
</div>
<div>
<label htmlFor="peso">Peso: </label>
        <input type="text" name="peso" value={input.peso} onChange={handleForm}/>
</div>
    <button type="sumbit"> Crear un pokemon </button>
<form/>

</div>)}
export default Form;