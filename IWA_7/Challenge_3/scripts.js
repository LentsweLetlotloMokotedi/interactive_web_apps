const leoName = 'Leo';
const leoSurname = 'Musvaire     ';
const leoBalance = '-9394';

const sarahName = 'Sarah    ';
const sarahSurname = 'Kleinhans';
const sarahBalance = '-4582.21000111';

const divider = '----------------------------------';

// Only change below this line

const owed = parseFloat(leoBalance) + parseFloat(sarahBalance);
const leo = `${leoName} ${leoSurname.trim()} Owed R${sarahBalance}`;
const sarah = `${sarahName.trim()} ${sarahSurname} Owed R${leoBalance}`;
const total = "Total amount owed: ";
const result = `${leo}\n${sarah}\n${divider}\n${divider}\n${total}${owed}\n${divider}`;

console.log(result);
