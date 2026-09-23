function dosomething(callback:()=>void):void{
    console.log("I am write  and calling callback function");

    callback();

}

function sayHello():any{
console.log('Hello')
}

//dosomething(sayHello) //passing sayhello funciton as a paramter sayhello not sayHello()
dosomething(sayHello())