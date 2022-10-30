// // console.log("Hey there");
// // console.log("Hey there");
// // console.log("Hey there");
// // console.log("Hey there");
// // console.log("Hey there");
// // let day=1;
// // let name="David";
// // console.log(name);
// // let firstName="Newz";
// // let Surname="BeBe";
// // console.log(Surname,firstName);
// // console.log(typeof firstName);
// // console.log(firstName[0]);
// // console.log(firstName.length);
// // console.log(firstName.toUpperCase());
// // console.log(firstName.toLowerCase());
// // let text=" How do you do? ";
// // console.log(text.trimEnd());

// let height="tall";
// let name="Joey";
// let age=55;

// console.log(`His name is ${name} and he is ${age} years old.
// ${name} is also a ${height} man.`);
// // alert('The best ever!!!');
// console.log("Best deals");
// console.error('Why na');
// console.warn('Omo take ya time o');
// let babay="Joey";
// let num=5;
// let flow=true;
// let yo;
// let float=1.5;

// console.log(typeof babay);
// console.log(typeof num);
// console.log(typeof flow);
// console.log(typeof float);
// console.log(typeof yo);

// let man="John";
// let age=35;
// let address="NewYork";
// let status="Single and not searching";
// let conc=`His name is ${man}, he is ${age} years old.

// ${man} lives and works in ${address} and he is ${status}.`;

// console.log(conc);
// console.log(conc.length);
// console.log(status.toUpperCase());
// console.log(man.toLowerCase());
// console.log(man.substring(0,3).toUpperCase());
// console.log(address.substring(0,6).toLowerCase());
// console.log(address);

// let futurearray="Baba, Best, Booboo, Nayou, WOOW";
// console.log(futurearray.split(', '));
// console.log(typeof futurearray);
// console.log(Array.isArray(futurearray));

// // let babaArray=new Array("Flow","Show","Blow");
// let babaArray=["Flow","Show","Blow"];
// console.log(babaArray);
// console.log(babaArray[1]);
// console.log(babaArray[3]="Snow");
// console.log(babaArray);
// console.log(babaArray.push("Dow"));
// console.log(babaArray[1]="Know");
// console.log(babaArray);
// console.log(babaArray.unshift("Knows"));
// console.log(babaArray);
// console.log(babaArray.pop());
// console.log(babaArray);
// console.log(Array.isArray(babaArray));
// console.log(babaArray.indexOf("Snow"));
// let babaObj={
//     firstName:"Jerry",
//     lastName:"Terrence",
//     username:"J.T",
//     Hobbies:["Worshipping God","Cycling","Eating","Singing"],
//     Contact_Details:{
//         address:"North Western",
//         phone:"53535555656",
//         office_address:"South Western"
//     }
// }

// console.log(babaObj);
// console.log(babaObj.firstName);
// console.log(babaObj.Hobbies[2]);
// console.log(babaObj.lastName,
// babaObj.username, babaObj.Contact_Details.address);

// let { firstName }=babaObj;
// console.log(firstName);
// let { Contact_Details }=babaObj;
// console.log(Contact_Details.address);
// console.log();
// console.log(babaObj.email="baba@yahoo.com");
// console.log(babaObj);
// console.log(babaObj.Hobbies.push("Praising"));
// console.log(babaObj);
// console.log(babaObj.Contact_Details.business="New Southern");
// console.log(babaObj);

// let newObj=[
//   {
// First_Week:"Dance",
// Second_Week:"Run",
// Third_Week:"Sports"
//   },
//   {
//     First_Week:"Run",
//     Second_Week:"Dance",
//     Third_Week:"Sports"
//       },
//     {
//         First_Week:"Sports",
//         Second_Week:"Run",
//         Third_Week:"Dance"
//      }
// ]
// console.log(newObj[1].First_Week);

// for (let x = 0; x < 10; x++) {
//   console.log(x);
// }

// const cars = ["Honda", "Hyundai", "Toyota", "Mercedes"];
// // for(let x=0; x<cars.length; x++){
// //   console.log(cars[x]);
// // }
// cars.forEach(function (cozy) {
//   console.log(cozy);
// });

// let classmates=["Dave","Uche","Quam"];

// let x=0;

// while(x < classmates.length){
//   console.log(classmates[x]);
//   x++;
// }

// let classmates=["Dave","Uche","Quam"];

// let x=0;

// do{
//   console.log(classmates[x]);
//   x++;
// }
// while(x < classmates.length);

// const password='TechStud';

// if(password.length>=8){
//   console.log('Password is long enough');
// }
// else{
//   console.log('Password is not long enough');
// }

let ClientPassword = ["Username", "First Name", "Last Name", "Email"];
let input = "";

if (input === ClientPassword[0]) {
  console.log("Your password is correct");
} else if (input === ClientPassword[1]) {
  console.log("Your password is correct");
} else if (input === ClientPassword[2]) {
  console.log("Your password is correct");
} else if (input === ClientPassword[3]) {
  console.log("Your password is correct");
} else {
  console.log("Incorrect login details");
}
