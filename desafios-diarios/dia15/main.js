/* Um sistema de simulação de corridas precisa ser desenvolvido em Javascript utilizando três classes principais que se relacionam entre si: Passenger, Driver e Ride.

O passageiro (Passenger) deve ser iniciado apenas com seu nome e um histórico de corridas vazio (um array). O motorista (Driver) deve ser iniciado com seu nome, o modelo do carro e sua disponibilidade, que sempre começa como verdadeira (true). A corrida (Ride) precisa de um passageiro, um motorista, um destino e uma distância em quilômetros para ser criada, iniciando sempre com o status "requested" e o preço zerado.

Para as regras de negócio, o passageiro deve ter um método para solicitar corrida que recebe o motorista, o destino e a distância, cria a instância dessa corrida associando o próprio passageiro a ela, guarda essa corrida em seu histórico e a retorna. A corrida, por sua vez, deve ter um método para iniciar o trajeto, que muda seu status para "ongoing" e altera a disponibilidade do motorista para falso. Por fim, a corrida também deve ter um método para finalizar o trajeto, que calcula o preço cobrando dois reais e cinquenta centavos por quilômetro rodado, muda o status para "completed" e define que o motorista está disponível novamente (true). */

import { Passanger } from "./domain/passanger.js"
import { Ride } from "./domain/ride.js"
import { Driver } from "./domain/driver.js"

// 1. Instanciando os objetos
const passanger = new Passanger("Lucas")
const driver = new Driver("Rodrigo", "Toyota Corolla")

// 2. passanger solicita a corrida
const corrida = passanger.soliciteRun(driver, "Centro da Cidade", 10)

// 3. Executando o fluxo da corrida
corrida.startRide()
corrida.finishRide()

// 4. Exibindo o histórico do passanger e a corrida
console.log(passanger)
console.log(corrida)