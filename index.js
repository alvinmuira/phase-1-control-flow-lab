function scuberGreetingForFeet(){
  // Write your code here!
  let feet;
  let scuberGreetingForFeet ;
  if  (feet <= 400) {
    scuberGreetingForFeet= 'This one is on me!';
  } else if (feet <= 2000) {
    scuberGreetingForFeet = 'That will be twenty bucks.';
  } else if (feet>2500) {
    scuberGreetingForFeet ='No can do.';
  } else {
    scuberGreetingForFeet ='I will gladly take your thirty bucks.';
  }
}

function ternaryCheckCity(){
  // Write your code here!
  let city;
  let ternaryCheckCity;
  if (city === 'NYC') {
    ternaryCheckCity = 'Ok, sounds good.';
  } else {
    ternaryCheckCity ='No go.';
  }
}

function switchOnCharmFromTip(){
  // Write your code here!
  let tip;
  let switchOnCharmFromTip;
  if (tip==='generous') {
    switchOnCharmFromTip = 'Thank you so much.';
  } else if (tip==='not as generous') {
    switchOnCharmFromTip = 'Thank you.';
  } else if (tip ==='thanks for everything') {
    switchOnCharmFromTip = 'Bye.';
  }
}
console.log(scuberGreetingForFeet);
console.log(ternaryCheckCity);
console.log(switchOnCharmFromTip);