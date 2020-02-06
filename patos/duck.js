class Duck {
    quackBehavior;
    flyBehavior;
    setFlyBehavior = (flyBehavior) => {
        this.flyBehavior = flyBehavior;

    }
    setQuackBehavior = (quackBehavior) => {
        this.quackBehavior = quackBehavior;

    }
    performQuack = () => {
        this.quackBehavior.quak();
    }
    performFly = () => {
        this.flyBehavior.fly();
    }
    swim = () => {
        console.log('Estoy nadando');
    }
    display = () => {

    }

}
//las interfaces van a ser otras clases.
class VolarConCohetes {
    fly = () => {
        console.log('Con mis cohetes voy al infinito y mas allá...');
    }
}
class FlyWithWings {
    fly = () => {
        console.log('Vuelo alto...');
    }
}
class FlyNoWay {
    fly = () => {
        console.log('este pato no vuela.');
    }
}


//clases quak
class Quak {
    quak = () => {
        console.log('Quak, Quak');
    }
}
class Squeak {
    quak = () => {
        console.log('Squeak, Squeak');
    }
}
class MuteQuak {
    quak = () => {
        console.log('shhh calladito shhhh');
    }
}




//Herencia el mallard duck hereda los metodos de duck
class MallardDuck extends Duck {

    display = () => {
        console.log('look at me I am a Mallard Duck');
    }
}
class RedheadDuck extends Duck {

    display = () => {
        console.log('mira esta belleza peliroja');
    }
}
class CauchoDuck extends Duck {
    display = () => {
        console.log('pato de caucho solo sabe nadar');
    }
}
class CorchoDuck extends Duck {
    display = () => {
        console.log('pato de corcho solo sabe flotar');
    }
}