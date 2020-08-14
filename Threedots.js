const ages = [12, 23, 22, 12, 21];
const ages2 = [15, 16, 17];
const ages3 = [25, 24, 29];
const allAges = ages.concat(ages2).concat([5]).concat(ages3);
// const allages2 = [ages, ages2, 5, ages3]
const allages2 = [...ages, ...ages2, 5, ...ages3]
// console.log(allages2);

const business = 650;
const minister = 450;
const shocib = 250;
const takapoisa = [650, 450, 250];
// const maximum = math.max(business, minister, shocib)
// const maximum = math.max(takapoisa);
const maximum = Math.max(...takapoisa);
console.log(maximum);