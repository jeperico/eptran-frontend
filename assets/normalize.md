# Normalização de nomenclatura de imagens

O nome do arquivo de uma imagem deve ser capaz de se fazer auto-explicativo. O uso de boas práticas nos arquivos de imagens ajuda a manter um melhor entendimento do código e uma melhor arquitetura de projeto. Abaixo temos os padrões que devem ser seguidos dentro deste projeto.

## Nomes

    O nome auxilia em um melhor entendimento e maior semântica da aplicação.

- Deve ser uma explicação clara e objetiva da imagem, de no máximo 3 palavras;
- Deve seguir um padrão com imagens em um mesmo contexto;
- Deve ser totalmente em inglês;
- A separação das palavras deve sem feita com "-";
- Uso totalitario de `lower case`;
- Não deve conter acentuação;
- Não deve conter caracteres especiais;
- Números:
    - Devem ser utilizados em caso de elementos semelhantes e repetitivos;
    - Os nomes destas imagens devem ser iguais, excluindo os números;
    - Números menores que 10 devem iniciar com 0 (01, 02, 07);

## Extensão

    A utilização indevida e inconsciente de extensões de imagem resultam em erros de `build` e performance.

- Uso totalitario de `lower case`;

### Formatos:

- *SVG*: Imagens sem fundo, deve ser utilizado em icones e logos;
- *PNG*: Pequenas imagens mais complexas e sem fundo;
- *JPG*: Imagens quadriculares e com fundo, como backgrounds e fotos;

## Performance

    O tamanho e qualidade das imagens são pontos de atenção da performance da aplicação.