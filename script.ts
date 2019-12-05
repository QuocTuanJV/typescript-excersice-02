let count = 50;
if (count > 0) {
    count--;
} else {
    count = 0;
}
console.log(count);
 // loop
console.log("for loop");

const keys = "abcdef";
for(let idx=0;idx <keys.length; idx++){
    console.log(keys[idx]);
}

console.log("for-of loop")
for(const item of keys){
    console.log(item);
}
console.log("Object")
const user = {
    name:'Bob',
    age:55
};
for(const key in user){
    console.log(`${key} : ${user[key]}`);
}