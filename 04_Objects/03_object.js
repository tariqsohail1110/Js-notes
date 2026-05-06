//Object destructuring

const course = {
    courseName: 'Machine Learning Advanced Concepts',
    duration: '3 Months',
    price: 99
}

const { courseName } = course;
const { duration } = course;
const { price } = course; 

console.log(`The course ${courseName}, contains real world ML projects to gain hands on practice, with in Just ${duration}, at a very reasonable price of ${price}$`);