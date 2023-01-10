const user = {
    name: "John Doe",
    email: "doejohn@email.com",
    friends: [
        {
        name: "Mary",
        address: {
            street: "Some Street",
            number: 89
            }
        }
    ],
    age: 42,
    phone: {
      countryCode: "+55",
      ddd: "22",
      number: "998765432"
    }
  }
  
  //O encadeamento opcional serve para fazermos uma verificação na hora de encadear alguma coisa. 

  //Por exemplo, se tentarmos acessar uma propriedade que não existe, o javascript nos trará um erro e resultará no fim do programa 
  console.log(user.friends[0].phone.ddd) 


  /*Porem se usarmos o encadeamento opcional, ele irá fazer uma verificação antes de avançar para etapa que irá trazer o erro, e caso a verificação retorne um null ou undefined
    o encadeamento se encerrerá e inves de retornar um erro, irá retornar undefined */
  console.log(user.friends[0].phone?.ddd)

  console.log(user?.brothers?.length)
  console.log(user.phone.countryCode)
  
  //Tambem podemos usar o encadeamento opcional dentro de um array, para verificar se aquela posição existe 
  console.log(user.brothers?.[5].name)