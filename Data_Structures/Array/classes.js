class Player  {
  constructor(name, type){
    console.log('Player constructor =>', this)
    this.name = name;
    this.type = type
  }

  introduce(){
    console.log(`Hola yo soy ${this.name}, soy un ${this.type}`)
  }
}


class Wizzard extends Player {
  constructor(name, type){
    super(name, type);
    console.log('Wizzard constructor =>', this)
  }
  
  play() {
    console.log(`WEEEEEE soy un ${this.type}`)
  }
}

const wizzard1 = new Wizzard('Oscar', 'Dark magic')
const wizzard2 = new Wizzard('Carlos', 'White magic')