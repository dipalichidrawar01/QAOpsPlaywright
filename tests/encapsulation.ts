class Animal{

    private name:string
    private age:number
        constructor(name:string,age:number){

            this.name=name
            this.age=age

        }
    testname(){
        console.log(`${this.name} is encapsulation`)
    }

      testage(){
        console.log(`${this.age} is encapsulation`)
    }


}//End of Class Animal
const animal=new Animal('Remmy',10)
animal.testage()
animal.testname()