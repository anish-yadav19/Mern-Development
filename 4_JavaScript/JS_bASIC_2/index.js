// console.log('lets start');


/*
// object creation
const rectangle = {
    length:1,
    breadth:2,

    draw : function() {
        console.log('drawing rectangle');
    }
}; 
*/

/*
// factory function
function createRectangle()
{
    return rectangle = {
        length:1,
        breadth:2,
    
        // draw : function() {
        //     console.log('drawing rectangle');
        // }

        draw()
        {
            console.log('drawing rectanle');
        }
    }; 
}


function createRectangle(length, breadth)
{
    return rectangle = {
        length,
        breadth,
    
        // draw : function() {
        //     console.log('drawing rectangle');
        // }

        draw()
        {
            console.log('drawing rectanle');
        }
    }; 
}


// let rectangleObj = createRectangle();
let rectangleObj1 = createRectangle(5,8);
console.log(rectangleObj1);
console.log(rectangleObj1.draw());

let rectangleObj2 = createRectangle(20,47);
*/


/*
// constructor function

function Rectangle()
{
    this.length = 2;
    this.breadth = 5;
    this.draw = function()
    {
        console.log('Drawing');
    };
}

// object creation by using constructor function

let rectangleObj4 = new Rectangle();

console.log(rectangleObj4);

rectangleObj4.color = 'Yellow';
console.log(rectangleObj4);

// rectangle.length;
// rectangle.breadth;
// rectangle.draw();
  
*/

let rectangle = 
{
    length:2,
    breadth:4

};

// for-in loop
// for(let key in rectangle)
//     {

//         // keys are reflected though key variable
//         // values are reflected through rectangle[key]
//         console.log(key,rectangle[key]);
//     }


// for-of loop

// for(let key of rectangle)
//     {
//         console.log(key) // it will print error
//     }

for(let key of Object.keys(rectangle))
    {
        console.log(key);
    }

    for(let key of Object.entries(rectangle))
        {
            console.log(key);
        }