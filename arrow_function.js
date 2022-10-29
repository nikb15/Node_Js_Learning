/*
This is just a way to understand the function working in the normal way or using the arrow function 


*/

this .id='exports';

const testObj={
    func1: function()
    {
        console.log('func1:', this);
    },

    func2: () =>{
        console.log('func2:', this);
    }
}

testObj.func1();
testObj.func2()