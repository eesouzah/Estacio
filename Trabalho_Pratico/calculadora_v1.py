# Variável para controlar se o usuário quer continuar
sair = 'n'  # n = não quer sair ainda

# Enquanto o usuário não quiser sair, a calculadora continua
while sair.lower() != 's':
    print('CALCULADORA SIMPLES')
    
    # Pegando os dois números do usuário
    numero1 = float(input('Digite o primeiro número: '))
    numero2 = float(input('Digite o segundo número: '))

    # Perguntando qual operação o usuário quer fazer
    print('Escolha a operação:')
    print('+ para adição')
    print('- para subtração')
    print('* para multiplicação')
    print('/ para divisão')

    operacao = input('Digite a operação desejada: ')

    # Verificando a opção escolhida
    if operacao == '+':
        resultado = numero1 + numero2
        print('Resultado:', resultado)
    elif operacao == '-':
        resultado = numero1 - numero2
        print('Resultado:', resultado)
    elif operacao == '*':
        resultado = numero1 * numero2
        print('Resultado:+', resultado)
    elif operacao == '/':
        if numero2 == 0:
            print('Não é possível dividir por zero.')
        else:
            resultado = numero1 / numero2
            print('Resultado:', resultado)
    else:
        print('Operação inválida.')

    # Pergunta se o usuário quer sair
    sair = input("Deseja sair? Digite S para sair ou N para continuar: ")

print('Calculadora encerrada.')