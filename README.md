# Ranking

Trabalho da faculdade em que fomos desafiados a criar um sistema de ranking que utiliza como base a estrutura de uma lista encadeada.

Este código implementa um sistema de ranking interativo em JavaScript usando o terminal como interface. 

FUNCIONALIDADES:

Ele permite ao usuário realizar as seguintes operações:

1. Inserir elementos no ranking: O usuário pode inserir um elemento e ele será adicionado ao ranking, que será reordenado em ordem ascendente.

2. Alterar elementos do ranking: O usuário pode selecionar um elemento existente no ranking por seu índice e substituir seu valor por um novo.

3. Remover elementos do ranking: O usuário pode selecionar um elemento existente no ranking por seu índice e removê-lo.

4. Alterar a ordem do ranking: O usuário pode escolher entre ordenar o ranking em ordem crescente ou decrescente. A ordem atual é exibida no menu.

5. Definir explicitamente a ordem do ranking: O usuário pode definir a ordem do ranking como ascendente ou descendente.

=====================================================================================================================================

O código utiliza o módulo `readline` para lidar com a entrada e saída do usuário. Ele exibe um menu de opções e aguarda a entrada do usuário. Com base na opção selecionada, o código chama a função correspondente para realizar a operação desejada. O ranking é armazenado em uma matriz e é reordenado sempre que ocorrem inserções, alterações ou mudanças na ordem.

Após cada operação, o ranking atualizado é exibido. O programa continua em execução até que o usuário escolha a opção "0", que encerra a execução do programa.
