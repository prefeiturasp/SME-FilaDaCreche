
[![Maintainability](https://api.codeclimate.com/v1/badges/73b1c40a9707c01deb1e/maintainability)](https://codeclimate.com/github/prefeiturasp/SME-FilaDaCreche/maintainability)

# Pátio Digital

_“Recurso público retorna ao público”._

Nós somos o **Pátio Digital**, uma iniciativa da Secretaria Municipal de Educação de São Paulo que, por meio do fortalecimento da transparência, da participação social e do desenvolvimento de novas tecnologias, aproxima diferentes grupos da sociedade civil por um objetivo maior: a melhoria da educação na cidade de São Paulo.  

<a href="url"><img src="http://patiodigital.prefeitura.sp.gov.br/wp-content/uploads/sites/4/2018/04/logo_fila.jpg" align="left" height="100" width="200" ></a>

# Fila da Creche
</br>

## Conteúdo

1. [Sobre o Fila da creche](#sobre-o-fila-da-creche)         5. [Instalação](#instalação)
2. [Comunicação](#comunicação)                               6. [Build e Deploy](#build-e-deploy)
3. [Como contribuir](#como-contribuir)                       7. [Testes](#testes)
4. [Organização do projeto](#organização-do-projeto)         8. [Repositório relacionado](#repositório-relacionado)


## Sobre o Fila da Creche

Para que os pais e famílias possam se programar e acompanhar a geração de vagas na educação infantil, a Secretaria Municipal de Educação de São Paulo, por meio da iniciativa de governo aberto [Pátio Digital](http://patiodigital.prefeitura.sp.gov.br/), lançou uma ferramenta online inédita que permite saber como está a espera de acordo com o endereço fornecido e a faixa etária informada. 
http://filadacreche.sme.prefeitura.sp.gov.br


## Comunicação

| Canal de comunicação | Objetivos |
|----------------------|-----------|
| [Issues do Github](https://github.com/prefeiturasp/SME-FilaDaCreche/issues) | - Sugestão de novas funcionalidades<br> - Reportar bugs<br> - Discussões técnicas |
| [Telegram](https://t.me/patiodigital ) | - Comunicar novidades sobre os projetos<br> - Movimentar a comunidade<br>  - Falar tópicos que **não** demandem discussões profundas |

Qualquer outro grupo de discussão não é reconhecido oficialmente.


## Como contribuir

Contribuições são **super bem vindas**! Se você tem vontade de construir o
Fila da creche conosco, veja o nosso [guia de contribuição](./CONTRIBUTING.md)
onde explicamos detalhadamente como trabalhamos e de que formas você pode nos
ajudar a alcançar nossos objetivos. Lembrando que todos devem seguir 
nosso [código de conduta](./CODEOFCONDUCT.md).

### Passos iniciais para contribuir

- Melhorar a qualidade de código
- Iniciar a escrita de testes unitários
- Transferir front para o github pages
- Iniciar escrita de testes funcionais
- Melhorar documentação de maneira enxuta


## Organização do projeto

  * Dependências estão citadas no arquivo Package.json
  * Arquivo .env gerência as variáveis de ambiente  
  * Nâo de push no arquivo .env para o git se necessário crie um arquivo .gitignore
  * Gerenciamento de estados de componentes globais é feito através do Redux
 
 
## Instalação 

1. Crie um arquivo de texto chamado `.env` seguindo o exemplo`.env.sample`.
2. `npm install` cria a pasta node_modules e baixa as dependências do arquivo Package.json
3. `npm start` executa o projeto em [http://localhost:3000](http://localhost:3000)


## Build e Deploy

1. `npm run build` cria o arquivo para produção na pasta `build`.<br>
Ele agrupa corretamente o React em modo de produção e otimiza o build para obter o melhor desempenho.<br>
A compilação é reduzida e os nomes de arquivos posssuem hashes.<br>
Seu aplicativo está pronto para ser implantado!

2. `npm run deploy` cria e implanta o aplicativo no GitHub Pages.


## Testes

1. `npm test` executa os testes presentes no arquivo`.test.js`.


## Repositório relacionado

[SME Fila da creche API](https://github.com/prefeiturasp/SME-fila-da-creche-API)
 
---

Baseado no Readme do [i-educar](https://github.com/portabilis/i-educar)


