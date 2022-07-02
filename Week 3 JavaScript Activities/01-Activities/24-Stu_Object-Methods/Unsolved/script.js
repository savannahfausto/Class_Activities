var chosenPet = "Lulu";

var shelter = {
  dogs: ["Mackie", "Bernice", "Cookie Monster", "Spot"],
  cats: ["Astrid", "Lulu", "Fluffy", "Mouser"],
  apptMessage: function () {
    console.log("Email us at meetafriend@waywardpets.com to make an appointment to meet your new friend.");
  }
};

//Debug the code below 

//erased .Lulu from chosenPet, added shelter. to apptMessage
function dogMessage() {
   console.log("Congrats! " + chosenPet + ", a great dog, is available for adoption!");
   shelter.apptMessage();
}

//added parenthesees after shelter.apptMessage to invoke function
function catMessage() {
  console.log("Congrats! " + chosenPet + ", an awesome cat, is available for adoption!");
  shelter.apptMessage();
}

//adds shelter. before dogs and before cats in if and else if statement respectively. otherwise just dogs and just cats is undefined
if (shelter.dogs.includes(chosenPet)) {
  dogMessage();
} else if (shelter.cats.includes(chosenPet)) {
  catMessage();
} else {
  //added.dogs to shelter and switched shelter and cats so it is shelter.cats and not cats.shelter
  console.log("It looks like the pet is not available.");
  console.log("Check out our featured dog, " + shelter.dogs[0] + ". or our featured cat, " + shelter.cats[1]);
}
  
