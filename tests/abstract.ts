abstract class Animal{

        constructor( name:string){}
            abstract makesound():void;
             eat(){
                console.log(`$(this.name)`)
            }

}

class Dog extends Animal{

        makesound(): void {
            console.log(`$(this,name) is barking`)
        }
                dogfood():void{

                    console.log('Dog food is healthy')
                }



}

const dog=new Dog('Jimmy')
dog.dogfood()