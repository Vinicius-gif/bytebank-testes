import { calculaNovoSaldo } from './index'

describe('Quando eu realizo uma transação', () => {
    test('Que é um depósito, o saldo deve aumentar', () => {
        const valores = {
            transacao: 'Depósito',
            valor: 50
        }

        const novoSaldo = calculaNovoSaldo(valores, 100)

        expect(novoSaldo).toBe(150)
    })

    test('Que é uma transferência, o saldo deve diminuir', () => {
        const valores = {
            transacao: 'Transferência',
            valor: 50
        }

        const novoSaldo = calculaNovoSaldo(valores, 100)

        expect(novoSaldo).toBe(50)
    })
})

test('O valor do novo saldo deve ser retornado com o rendimento', () => {
    const calcularRendimento = jest.fn(saldo => saldo + saldo * 0.005)

    const saldo = 100

    const novoSaldo = calcularRendimento(saldo)

    expect(novoSaldo).toBe(100.5)
    expect(calcularRendimento).toBeCalled()
    expect(calcularRendimento).toBeCalledWith(saldo)
})