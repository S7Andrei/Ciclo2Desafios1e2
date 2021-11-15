window.onload=function(){

       function localizar(dados){


         for (let campo in dados) {
            if(document.querySelector(`#${campo}`)){
               document.querySelector(`#${campo}`).value=dados[campo]
            }

            
        }
       }
     

      let dadosCep=async function(cep){
         
        let url=`https://viacep.com.br/ws/${cep}/json/` 

        let dadosFetch=await fetch(url,{
           method:'GET',
           mode:'cors',
           headers:{
            'Access-Control-Allow-Origin': '*',
            'Content-Type': 'application/json',
           }
        })

        let dadosJson=await dadosFetch.json()

         localizar(dadosJson)

      }

    
   const btnBuscar =document.querySelector('#btn')

   const cxCep =document.querySelector('#cep')
   
   btnBuscar.addEventListener('click',()=>{

        dadosCep(cxCep)

   })


}