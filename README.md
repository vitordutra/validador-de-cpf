# Validador de CPF

<p align="center">
  <a href="" rel="noopener">
 <img src="https://ik.imagekit.io/nfbjje2exl/validador-cpf_GYoQsBZopi.png" alt="Screenshot do Validador de CPF"></a>
</p>

## 🧐 Sobre

Este validador de CPF foi construido com uma interface usando o framework CSS [Bootstrap](https://getbootstrap.com/) e com a regra de negócio para validação do CPF escrita em JavaScript.

## 🤖 Algoritmo
O CPF é formado por 11 dígitos numéricos que seguem a máscara "###.###.###-##", a verificação do CPF acontece utilizando os 9 primeiros dígitos e, com um cálculo simples, verificando se o resultado corresponde aos dois últimos dígitos (depois do sinal "-").

>Vamos usar como exemplo, um CPF fictício "529.982.247-25".

### Validação do primeiro dígito
Primeiramente multiplica-se os 9 primeiros dígitos pela sequência decrescente de números de 10 à 2 e soma os resultados. Assim:
>5 * 10 + 2 * 9 + 9 * 8 + 9 * 7 + 8 * 6 + 2 * 5 + 2 * 4 + 4 * 3 + 7 * 2

O resultado do nosso exemplo é:

>295

O próximo passo da verificação também é simples, basta multiplicarmos esse resultado por 10 e dividirmos por 11.

> 295 * 10 / 11

O resultado que nos interessa na verdade é o RESTO da divisão. Se ele for igual ao primeiro dígito verificador (primeiro dígito depois do '-'), a primeira parte da validação está correta.

**Observação Importante**: Se o resto da divisão for igual a 10, nós o consideramos como 0.

Vamos conferir o primeiro dígito verificador do nosso exemplo:

> O resultado da divisão acima é '268' e o RESTO é 2

Isso significa que o nosso CPF exemplo passou na validação do primeiro dígito.

### Validação do segundo dígito
A validação do segundo dígito é semelhante à primeira, porém vamos considerar os 9 primeiros dígitos, mais o primeiro dígito verificador, e vamos multiplicar esses 10 números pela sequencia decrescente de 11 a 2. Vejamos:

> 5 * 11 + 2 * 10 + 9 * 9 + 9 * 8 + 8 * 7 + 2 * 6 + 2 * 5 + 4 * 4 + 7 * 3 + 2 * 2

O resultado é:

>347

Seguindo o mesmo processo da primeira verificação, multiplicamos por 10 e dividimos por 11.

>347 * 10 / 11

Verificando o RESTO, como fizemos anteriormente, temos:

> O resultado da divisão é '315' e o RESTO é 5

Verificamos, se o resto corresponde ao segundo dígito verificador.

Com essa verificação, constatamos que o CPF 529.982.247-25 é válido.

### CPFs Inválidos Conhecidos

Existe alguns casos de CPFs que passam nessa validação mas que ainda são inválidos. É os caso dos CPFs com dígitos repetidos (111.111.111-11, 222.222.222-22, ...)

Esses CPF atendem à validação, mas ainda são considerados inválidos.

No nosso algoritmo, vamos verificar se todos os dígitos do CPF são iguais e, neste caso, considerar que ele é inválido.

Fonte: [Dicas de Programação - Validador de CPF](https://dicasdeprogramacao.com.br/algoritmo-para-validar-cpf/)
