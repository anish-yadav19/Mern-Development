

// document.addEventListener('click',function(){
//     console.log('I have cliked on the document');
// }
// );



// function eventFunction()
// {
//     console.log('I have cliked on the document');
// }

// document.addEventListener('click',eventFunction);

// document.removeEventListener('click',eventFunction); // it is removing 

// const content = document.querySelector('#wrapper');
// content.addEventListener('click',function(event)
// {
//     console.log(event);
// })

// let links = document.querySelector('a');
// let thirdlinks = links[2];
// thirdlinks.addEventListener('click',function(event)
// {
//     event.preventDefault();
// });

// avoid too many events
// let myDiv = document.createElement('div');

// for(let i = 1;i<=100;i++)
// {
//         let newElement = document.createElement('p');
//         newElement.textContent = 'This is para ' + i;

//         newElement.addEventListener('click', function(event)
//     {
//         console.log('I have clicked on para');
//     });
//     myDiv.appendChild(newElement);
// }
// document.body.appendChild(myDiv);
    

// optimise

// let myDiv = document.createElement('div');
// function para(event)
//     {
//         console.log('I have clicked on para');
//     }
// myDiv.addEventListener('click',para );
// for(let i = 1;i<=100;i++)
// {
//     let newElement = document.createElement('p');
//     newElement.textContent = 'This is para ' + i;

//     myDiv.appendChild(newElement);
// }
// document.body.appendChild(myDiv);
    

// by using taget 

let myDiv = document.createElement('div');
function parastatus(event)
    {
        console.log('para ' + event.target.textContent);
    }
myDiv.addEventListener('click',parastatus );
for(let i = 1;i<=100;i++)
{
    let newElement = document.createElement('p');
    newElement.textContent = 'This is para ' + i;

    myDiv.appendChild(newElement);
}
document.body.appendChild(myDiv);