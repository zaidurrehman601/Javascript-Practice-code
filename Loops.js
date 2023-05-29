// For Loops
for (let i = 0; i < 5; i++) {
    console.log("Hello World");
    
}
// for loops 321 go
for (let j = 3; j > 0; j--) {
    console.log(j);
    
    
}


for (var i = 0; i <= 3; i++) {
    console.log("This is line ", i)
}
// while loops exercise
var counter= 3;
while (counter >0) {
    console.log(counter);
    counter -= 1;
}
console.log("Happy new year"); 


// nested loops 

for (var year = 2023; year < 2025; year++) {
    console.log("year",year);
    for (let month = 6; month < 9; month++) {
       console.log("month",month); 
    }  
}
/*
var cubes = "ABCDEFG"
for (let i = 0; i < cubes.length; i++) {
    var styles = "font-size: 40px; border-radius: 10px; border: 1px solid blue; background: pink; color: purple";
    console.log("%c",cubes[i],styles);
    
}*/

// Loops with Condition If Else
for (let i = 0; i < 11; i++) {
    
    if (i==1) {
        console.log("Gold Medal!");
    }
    else if (i==2) {
        console.log("Silver Medal!")
    }
    else if (i==3) {
        console.log("Bronze Medal!");
    }
    else{
        console.log(i);

    }
}
var i = 3;
var j = 5;

if(i == 3 && j < 5) {
  console.log("Hello");
} else {
  console.log("Goodbye");
}
