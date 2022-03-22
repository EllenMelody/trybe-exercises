const estudantes = [
    {
      nome: 'Joel',
      Projeto: 'Trybewarts',
      status: 98,
    },
    {
      nome: 'Mica',
      Projeto: 'Trybewarts',
      status: 100,
    },
    {
      nome: 'Hugonardo',
      Projeto: 'Trybewarts',
      status: 97,
    },
    {
      nome: 'Aninha',
      Projeto: 'Trybewarts',
      status: 100,
    },
    {
      nome: 'Joicy',
      Projeto: 'Trybewarts',
      status: 100,
    },
    {
      nome: 'Ronald',
      Projeto: 'Trybewarts',
      status: 75,
    },
  ];
  
  // 1 - Tivemos alguns problemas na nossa captura de dados das pessoas estudantes e esses dados estão desordenados, precisamos que eles estejam ordenados em ordem alfabetica.
  
  const resultado = estudantes.sort(function (a, b) {
      return (a.nome > b.nome) ? 1: ((b.nome > a.nome) ? -1 :0)
    //   se fosse apenas a e b no return viria o objeto
  });
  console.table(resultado);
  
  // 2 - Tivemos alguns problemas na nossa captura de dados das pessoas estudantes e esses dados estão desordenados, precisamos que eles estejam ordenados por status.
  const result = estudantes.sort(function (a, b) {
    return (a.status > b.status) ? 1: ((b.status > a.status) ? -1 :0)
  });

  console.table(result);