if(1+1 > 5){
    console.log("True fact!");
  } else {
    console.log("LIES!")
  }

  if(4+5 <= 20){
    console.log("True fact!");
  } else {
    console.log("LIES!")
  }

  if(6-2 >= 0){
    console.log("True fact!");
  } else {
    console.log("LIES!")
  }

  let likesDogs = true || false

  if(likesDogs === true){
    console.log("You're a dog person!")
  } else {
    console.log("You're a cat person!")
  }

  const person = {
    firstName: "Austin",
    lastName: "Preece",
    age: 27,
    eyeColor: "blue",
    lang:  "English"
  };

  
  if (person.lang === "English") {
    console.log(`Hello ${person.firstName}!`)
  } else if (person.lang === "Spanish") {
    console.log(`Hola, ${person.firstName}`)
  } else if (person.lang === "Bonjour") {
    console.log(`Bonjour ${person.firstName}`)
  } else {
    console.log("Are you an alien?")
  }

  let grade = 85

  if(grade >= 0 && grade <= 69){
    console.log("You got an F!")
  } else if (grade >= 70 && grade <= 76) {
    console.log("You got a D!")
  } else if (grade >= 77 && grade <= 84) {
    console.log("You got a C!")
  } else if (grade >= 84 && grade <= 92) {
    console.log("You got a B!")
  } else if (grade >= 93 && grade <= 100) {
    console.log("You got an A!")
  } else {
    console.log("Try again!")
  }