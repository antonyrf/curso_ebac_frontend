function CarroPadrao(fabricante, modelo, ano){
    this.fabricante = fabricante;
    this.modelo = modelo;
    this.ano = ano;
    this.carroAvenda = function(){
        if (this.ano < 2022) {
            console.log(`O carro ${this.modelo} ano ${this.ano} não está disponível para compra.`)
        }else{
            console.log(`O carro ${this.modelo} ano ${this.ano} se encontra dispnível para compra.`)
        }
    }
}

function CarroDeLuxo(fabricante, modelo, ano, carroceria, classe){
    CarroPadrao.call(this, fabricante, modelo, ano);
    this.carroceria = carroceria;
    this.classe = classe;
}

function CarroEsportivo(fabricante, modelo, ano, carroceria, tipo){
    CarroPadrao.call(this, fabricante, modelo, ano);
    this.carroceria = carroceria;
    this.tipo = tipo;
}

const carro1 = new CarroEsportivo('Chevrolet', 'Vectra', 2025, 'Sedan', 'Esportivo Capenga');
const carro2 = new CarroEsportivo('Fiat', 'Palio', 1997, 'Hatch', 'Esportivo invocado');
const carro3 = new CarroDeLuxo('Wolkswagen', 'Brasilia', 1918, 'Hatch', 'Alto luxo');


console.log(carro1);
console.log(carro2);
console.log(carro3);

carro1.carroAvenda();
carro2.carroAvenda();
carro3.carroAvenda();