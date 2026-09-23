/*const people={ //Here people is object
    name :'tiger',
    age :30,

    greet:function(){
        //anonymous function as there is only function but no function name, here greet is key and valye is function
        //which is stored in greet
        console.log("test"+this.name);
    }
        


  
}*/
function animal(name:string){// function with name
    
  var x = 500   // function-scoped (var)
 let y = 400   // block-scoped (let) - scoped to the function body block
 const pi=3.14

if (x) {
    var x = 3     // ⚠️ SAME x as outside! var is function-scoped, not block-scoped
    y = 100   // ✅ NEW y, block-scoped only to this `if` block — shadows outer y
    
    console.log('Print value of:' + x)   // 3   (outer x already changed)
    console.log('Print value of:' + y)   // 40  (this is the inner y)
     console.log('Pi value is:' + pi)
}
  // 400  ✅ outer y is untouched
console.log("outerblock to Xs :" + x)   // 3    ⚠️ outer x got overwritten!
console.log("outerblock to Y :" + y)  
}
console.log (animal('tigetttt'))





