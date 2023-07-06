'use strict';
/////////////////////////////////////////////////
// BANKIST APP

// Data

//one object for each account
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

const displayMovements=function(movements)
{
  containerMovements.innerHTML='';
  movements.forEach(function(mov,i)
  {
    
    const type= mov> 0 ? 'deposit' : 'withdrawal';
    const html=`
        <div class="movements__row">
          <div class="movements__type movements__type--${type}">${i+1} ${type}</div>
          <div class="movements__value">${mov}</div>
        </div>
    `;

    containerMovements.insertAdjacentHTML('afterbegin',html); //after beginning i need to add

  });
};
displayMovements(account1.movements);
// console.log(containerMovements.innerHTML);


const createUsernames=function(accs)
{
  accs.forEach(function(acc)
  {
    //no need to return modifying acc only
    acc.username=acc.owner
      .toLowerCase()
      .split(' ')
      .map(function(name)
      {
        return name[0];
      }).join('');
  })
};
// const user="Archie Saxena";

createUsernames(accounts);
console.log(accounts);



const calcprintbalance=function(movements)
{
  const balance=movements.reduce((acc,mov)=>acc+mov,0);
  labelBalance.textContent=`${balance} EUR`;
}
calcprintbalance(account1.movements);

hvhbbkmmkmkm
































/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

// const currencies = new Map([
//   ['USD', 'United States dollar'],
//   ['EUR', 'Euro'],
//   ['GBP', 'Pound sterling'],
// ]);

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

/////////////////////////////////////////////////


// const arr=[1,2,3,4,5];
// console.log(arr.slice(2));
// console.log(arr.at(0));
// console.log(arr.slice(-1)[0]);

// const movements=[200,450,-400,3000,-650,-130];
// for(const it of movements)
// for(const [i,mov] of movements.entries())
// {
//   if(it>0)
//   {
//     console.log("pos");
//   }
//   else{
//     console.log("neg");
//   }
// }
// console.log("FOR EACH");
// movements.forEach(function(it)
// {
//   if(it>0)
//   {
//     console.log("pos");
//   }
//   else{
//     console.log("neg");
//   }
// });

//rather than calling f(1) f(2) f(3)
// arr.forEach(function()
// {

// })


// const currencies = new Map([
//   ['USD', 'United States dollar'],
//   ['EUR', 'Euro'],
//   ['GBP', 'Pound sterling'],
// ]);
// currencies.forEach(function(val,key,map)
// {
//   console.log(`${key} : ${val}`);
// });


const eurotousd=1.1;
const movementsUSD=movements.map(function(mov)
{
  return mov*eurotousd;
});

console.log(movements);
console.log(movementsUSD);

// const movementsusd=[];
// for(const mov of movements)
// {
//   movements.push(mov*eurotousd);
// }
// console.log(movementsusd);



const deposits=movements.filter(function(mov)
{
  return mov>0;
});
console.log(movements);

const withdrawal=movements.filter(function(mov)
{
  return mov<0;
})
console.log(withdrawal);

