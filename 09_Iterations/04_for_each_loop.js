const programming = ['JS', 'Python', 'Ruby', 'Java', 'C++'];

programming.forEach(function (element) {
    // console.log(element);
}) //callback functions doesn't have a name in their definition

programming.forEach( (element) => {
    // console.log(element);
})

function printMe(item) {
    // console.log(item);
}

programming.forEach(printMe); //just the reference, no execution

programming.forEach( (item, index, arr) => {
    console.log(item, index, arr);
})
/*
JS 0 [ 'JS', 'Python', 'Ruby', 'Java', 'C++' ]
Python 1 [ 'JS', 'Python', 'Ruby', 'Java', 'C++' ]
Ruby 2 [ 'JS', 'Python', 'Ruby', 'Java', 'C++' ]
Java 3 [ 'JS', 'Python', 'Ruby', 'Java', 'C++' ]
C++ 4 [ 'JS', 'Python', 'Ruby', 'Java', 'C++' ]
*/

const myProjects = [
    {
        projectName: 'Expense Tracker',
        projectLanguage: 'JavaScript',
        status: 'In Progress'
    },
    {
        projectName: 'Hand Gesture Based Calculator',
        projectLanguage: 'Python',
        status: 'Completed'
    },
    {
        projectName: 'Video Automation',
        projectLanguage: 'Python',
        status: 'In Progress'
    }
]

//now let's iterate

myProjects.forEach( (item) => {
    console.log(`Project Name ${item.projectName}`);
    console.log(`Language ${item.projectLanguage}`);
    console.log(`Status ${item.status}`);
    console.log();
})

//for each doesn't return anything