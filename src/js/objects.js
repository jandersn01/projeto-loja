const lojas = [
    {
      id: 'SoFarAway',
      images: [
        'imgs/SoFarAway/tenispreto.jpg',
        'imgs/SoFarAway/tenisesportebranco.jpg',
        'imgs/SoFarAway/teniscalcado.jpg',
      ],
      name: 'SoFarAway',
    }, {
        id: 'raza',
        images: [
          'imgs/RaZa/vestidobranco.jpg',
          'imgs/RaZa/vestidorosa.jpg',
          'imgs/RaZa/vestidopreto.jpg',
        ],
        name: 'RaZa',  
    } , {
        id: 'todress',
        images: [
          'imgs/ToDress/casacobranco.jpg',
          'imgs/ToDress/casacobege.jpg',
          'imgs/ToDress/casacopreto.jpg',
        ],
        name: 'ToDress',  
    } ,
    {
        id: 'caretome',
        images: [
          'imgs/CareToMe/perfumemarrom.jpg',
          'imgs/CareToMe/perfumeroxo.jpg',
          'imgs/CareToMe/perfumevinho.jpg',
        ],
        name: 'CareToMe',  
    } 
     , {
        id: 'watchu',
        images: [
          'imgs/Watchu/camisa.jpg',
          'imgs/Watchu/conjunto.jpg',
          'imgs/Watchu/shortverde.jpg',
        ],
        name: 'Watchu',  
    } ];

const produtos = [
  {
    id: '01',
    images:'imgs/produtos/camisaregatamasc.jpg',
    name: 'Camisa Regata',
    preco: '20,00',
    preconum: 20

  },
  {
    id: '02',
    images:'imgs/produtos/correntesinox.jpg',
    name: 'Corrente inox',
    preco: '14,49',
    preconum: 14.49

  },
  {
    id: '03',
    images: 'imgs/produtos/calcacargofeminina.webp',
    name: 'Calça Cargo',
    preco: '78,00',
    preconum: 78

  },
  {
    id: '04',
    images: 'imgs/produtos/oculoslupa.jpg',
    name: 'Oculos Lupa',
    preco: '20,00',
    preconum: 20

  },
  {
    id: '05',
    images: 'imgs/produtos/tensifemininobranco.jpg',
    name: 'Tênis feminino',
    preco: '169,45',
    preconum: 169.45

  },
  {
    id: '06',
    images: 'imgs/produtos/kitcamisastreino.jpg',
    name: 'Kit Camisa treino',
    preco: '49,99',
    preconum: 49.99

  },
  {
    id: '07',
    images: 'imgs/produtos/saiagotica.jpg',
    name: 'Saia Gótica',
    preco: '60,00',
    preconum: 60

  },
  {
    id: '08',
    images: 'imgs/produtos/mochilaescolarfeminina.webp',
    name: 'Mochila Escolar',
    preco: '53,69',
    preconum: 53.69

  },
  {
    id: '09',
    images: 'imgs/produtos/moletomlanadelrey.jpg',
    name: 'Moleton LDR',
    preco: '60,00',
    preconum: 60

  },
  {
    id: '10',
    images: 'imgs/produtos/camisasanimepreta.jpg',
    name: 'Camisa Anime',
    preco: '30,00',
    preconum: 30

  },
]

const promocoes = [
  {
    id: '01',
    images: 'imgs/ofertas/furadeira.jpg',
    name: 'Furadeira Elétrica',
    preco: 'R$305,00',
    promo: 'R$266,99'

  },
  {
    id: '02',
    images: 'imgs/ofertas/camisabeisebol.jpg',
    name: 'Camisa Beisebol',
    preco: 'R$70,00',
    promo: 'R$60,00'
  },
  {
    id: '03',
    images: 'imgs/ofertas/relogiofemino.jpg',
    name: 'Relógio Feminino Dourado',
    preco: 'R$25,00',
    promo: 'R$17,65'
  },
  {
    id: '04',
    images: 'imgs/ofertas/pincelmaquiagem.webp',
    name: 'Pinceis de Maquiagem',
    preco: 'R$20,00',
    promo: 'R$15,00'
  },
  {
    id: '05',
    images: 'imgs/ofertas/boné.jpg',
    name: 'Camisa Anime',
    preco: 'R$30,00',
    promo: 'R$25,00'
  },

]

let itensdocarrinho = []

let img1 = [{
  images: 'imgs/anuncio/criancas na piscina.webp',
  name: 'Crianças bem vestidas com roupas de verao'
}]

let img2 = [{
  images: 'imgs/anuncio/Roupas-para-trabalhar-no-verao.jpg',
  name: 'mulheres bem vestidas com roupas de verao'
}]
  
  export  {produtos,lojas,itensdocarrinho,promocoes, img1,img2};