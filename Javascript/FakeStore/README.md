# Projeto Loja Virtual

Este projeto é uma loja virtual simples que consome uma API para obter uma gama de produtos. A loja permite que os usuários visualizem produtos e os adicionem a um carrinho de compras.

## Funcionalidades

- **Visualização de Produtos**: Os produtos são exibidos na página inicial da loja. Cada produto tem uma imagem, título, descrição e preço.
- **Carrinho de Compras**: Os usuários podem adicionar produtos ao carrinho de compras. O total do carrinho é atualizado automaticamente quando um produto é adicionado.

## Tecnologias Utilizadas

- **HTML**: Utilizado para estruturar o conteúdo da página.
- **CSS**: Usado para estilizar a página, incluindo o layout e a aparência dos produtos e do carrinho de compras.
- **JavaScript**: Usado para interagir com a API e manipular o DOM para atualizar a lista de produtos e o carrinho de compras.

## Detalhes Técnicos

O projeto utiliza a função `fetch` do JavaScript para consumir a API e obter os produtos. Cada produto é então renderizado na página usando JavaScript para criar elementos HTML dinamicamente.

Quando um usuário adiciona um produto ao carrinho de compras, o preço do produto é adicionado a uma variável `totalCarrinho`. Esta variável é então usada para atualizar o total exibido no carrinho de compras.

## Como Executar

1. Clone este repositório para a sua máquina local.
2. Abra o arquivo `store.html` em um navegador web.
3. Você deverá ver a lista de produtos e poderá adicionar produtos ao carrinho de compras.

## Contribuindo

Contribuições são bem-vindas! Por favor, abra um issue ou pull request para sugerir mudanças ou adições.

## Licença

Este projeto está licenciado sob a licença MIT.