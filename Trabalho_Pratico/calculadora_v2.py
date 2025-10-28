# Variável de controle 
saida = ''

# Função de adição
def adicao(a, b):
    return a + b

# Função de subtração
def subtracao(a, b):
    return a - b

# Função de multiplicação
def multiplicacao(a, b):
    return a * b

# Função de divisão
def divisao(a, b):
    if b == 0:
        return "Não foi possível realizar a divisão por 0"
    else:
        return a / b

# Função principal da calculadora
def calculadora(num1, num2, operacao):
    operacao = operacao.lower()  # Entrada do usuário
    if operacao == '+' or operacao == 'adicao':
        resultado = adicao(num1, num2)
    elif operacao == '-' or operacao == 'subtracao':
        resultado = subtracao(num1, num2)
    elif operacao == '*' or operacao == 'multiplicacao':
        resultado = multiplicacao(num1, num2)
    elif operacao == '/' or operacao == 'divisao':
        resultado = divisao(num1, num2)
    else:
        resultado = 'Operação inválida!'
    return resultado

# Laço de repetição para manter a calculadora em execução
while saida.lower() != 'n':
    try:
        # Capturando os dados
        numero1 = float(input('Digite o primeiro número: '))
        numero2 = float(input('Digite o segundo número: '))
        operacao = input('Digite a operação desejada (+, -, *, / ou nome): ')

        # Chamada da função calculadora
        resultado = calculadora(numero1, numero2, operacao)

        # Impressão do resultado
        print('Resultado da operação:', resultado)
    except ValueError:
        print("Erro: Você deve digitar apenas números válidos!")

    # Pergunta se deseja continuar
    saida = input('Deseja continuar? (S/N): ')
