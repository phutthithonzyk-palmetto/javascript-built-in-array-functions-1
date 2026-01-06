const students = [
  { name: "John", score: 80 },
  { name: "Jane", score: 90 },
  { name: "Jim", score: 85 },
  { name: "Joan", score: 95 },
];

function getAverageStudentScore(total,students,index,array) {
  // Start coding here
  if((index+1)<array.length)
  {
    return total + students.score
  }
  else
  {
    return (total + students.score)/(array.length)
  };
};

let averageScore = students.reduce(getAverageStudentScore,0); // Output: 87.5
console.log(averageScore);
