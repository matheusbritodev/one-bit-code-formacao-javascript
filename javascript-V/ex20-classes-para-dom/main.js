/* Crie um conjunto de classes em javascript para auxiliar na interação com o DOM.

Você deverá criar, no mínimo, 4 classes diferentes:

    -Uma classe para um elemento genérico do DOM (dica: utilize o nome Component, pois o nome Element poderá gerar conflitos com a implementação do navegador).     
    
        *Essa classe deverá possuir um atributo privado para armazenar a referência ao elemento do DOM e um método de acesso para ler o valor desse atributo. Ela também deve possuir um método build para criar o elemento que deve ser chamado uma vez no construtor, mas também deve ser possível chamá-lo novamente através da instância.
    
        *Ela também deve possuir um método render para adicionar o elemento na página que poderá ser chamado pela instância a qualquer momento.
   
    - Uma classe específica para elementos input, que deve ser uma subclasse da classe Component.
    
    - Uma classe específica para elementos label, que deve ser uma subclasse da classe Component e no seu construtor deve ser possível indicar como primeiro parâmetro qual será o seu conteúdo em texto.
    
    - Uma classe específica para elementos form, que deve ser uma subclasse da classe Component e possuir um método para adicionar elementos como filhos (através das instâncias das classes Component e suas subclasses). */

import { FormElements } from "./domain/form.js" 
import { InputElements } from "./domain/input.js" 
import { LabelElements } from "./domain/label.js" 
import { Component } from "./domain/component.js"

// 1. Cria as instâncias
const meuForm = new FormElements()
const meuLabel = new LabelElements("Nome de Usuário: ")
const meuInput = new InputElements()

// 2. Coloca o label e o input dentro do formulário
meuForm.addElements(meuLabel)
meuForm.addElements(meuInput)

// 3. Renderiza o formulário inteiro na página (dentro do body)
meuForm.render(document.body)