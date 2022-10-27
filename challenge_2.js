/*
 Print hello world

 every second

 and stop after 5 time

 After 5 seconds, print "Done " and let the Node exit

*/

let counter =0;


const intervalId = setInterval(() =>{
//Declaring intervalId only becuase i need to end the interval when need is ppresene
    console.log("Hello World")
    counter+=1;

    if(counter==5)
    {
        console.log("Exiting");
        clearInterval(intervalId)
    }
},1000)