const lojas = [
    {
      id: 'SoFarAway',
      images: [
        '../public/imgs/SoFarAway/tenispreto.jpg',
        '../public/imgs/SoFarAway/tenisesportebranco.jpg',
        '../public/imgs/SoFarAway/teniscalcado.jpg',
      ],
      name: 'SoFarAway',
    }, {
        id: 'raza',
        images: [
          '../public/imgs/RaZa/vestidobranco.jpg',
          '../public/imgs/RaZa/vestidorosa.jpg',
          '../public/imgs/RaZa/vestidopreto.jpg',
        ],
        name: 'RaZa',  
    } , {
        id: 'todress',
        images: [
          '../public/imgs/ToDress/casacobranco.jpg',
          '../public/imgs/ToDress/casacobege.jpg',
          '../public/imgs/ToDress/casacopreto.jpg',
        ],
        name: 'ToDress',  
    } ,
    {
        id: 'caretome',
        images: [
          '../public/imgs/CareToMe/perfumemarrom.jpg',
          '../public/imgs/CareToMe/perfumeroxo.jpg',
          '../public/imgs/CareToMe/perfumevinho.jpg',
        ],
        name: 'CareToMe',  
    } 
     , {
        id: 'watchu',
        images: [
          '../public/imgs/Watchu/camisa.jpg',
          '../public/imgs/Watchu/conjunto.jpg',
          '../public/imgs/Watchu/shortverde.jpg',
        ],
        name: 'Watchu',  
    } ];

const produtos = [
  {
    id: '01',
    images:'../public/imgs/produtos/camisaregatamasc.jpg',
    name: 'Camisa Regata',
    preco: 'R$20,00'

  },
  {
    id: '02',
    images:'../public/imgs/produtos/correntesinox.jpg',
    name: 'Corrente inox',
    preco: 'R$14,49'

  },
  {
    id: '03',
    images: '../public/imgs/produtos/calcacargofeminina.webp',
    name: 'Calça Cargo',
    preco: 'R$78,00'

  },
  {
    id: '04',
    images: '../public/imgs/produtos/oculoslupa.jpg',
    name: 'Oculos Lupa',
    preco: 'R$20,00'

  },
  {
    id: '05',
    images: '../public/imgs/produtos/tensifemininobranco.jpg',
    name: 'Tênis feminino',
    preco: 'R$169,45'

  },
  {
    id: '06',
    images: '../public/imgs/produtos/kitcamisastreino.jpg',
    name: 'Kit Camisa treino',
    preco: 'R$49,99'

  },
  {
    id: '07',
    images: '../public/imgs/produtos/saiagotica.jpg',
    name: 'Saia Gótica',
    preco: 'R$60,00'

  },
  {
    id: '08',
    images: '../public/imgs/produtos/mochilaescolarfeminina.webp',
    name: 'Mochila Escolar',
    preco: 'R$53,69'

  },
  {
    id: '09',
    images: '../public/imgs/produtos/moletomlanadelrey.jpg',
    name: 'Moleton LDR',
    preco: 'R$60,00'

  },
  {
    id: '10',
    images: '../public/imgs/produtos/camisasanimepreta.jpg',
    name: 'Camisa Anime',
    preco: 'R$30,00'

  },
]

const promocoes = [
  {
    id: '01',
    images: 'public/imgs/ofertas/furadeira.jpg',
    name: 'Furadeira Elétrica',
    preco: 'R$305,00',
    promo: 'R$266,99'

  },
  {
    id: '02',
    images: 'public/imgs/ofertas/camisabeisebol.jpg',
    name: 'Camisa Beisebol',
    preco: 'R$70,00',
    promo: 'R$60,00'
  },
  {
    id: '03',
    images: 'public/imgs/ofertas/relogiofemino.jpg',
    name: 'Relógio Feminino Dourado',
    preco: 'R$25,00',
    promo: 'R$17,65'
  },
  {
    id: '04',
    images: 'public/imgs/ofertas/pincelmaquiagem.webp',
    name: 'Pinceis de Maquiagem',
    preco: 'R$20,00',
    promo: 'R$15,00'
  },
  {
    id: '05',
    images: 'public/imgs/ofertas/boné.jpg',
    name: 'Camisa Anime',
    preco: 'R$30,00',
    promo: 'R$25,00'
  },

]

const itensdocarrinho = []
  
  export  {produtos,lojas,itensdocarrinho,promocoes};