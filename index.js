export const romanCalculator = (rom1, rom2) => {
  return convertNumber(convertNumeral(rom1) + convertNumeral(rom2));
}

const numList = {
  'M' : 1000,
  'CM': 900,
  'D' : 500,
  'CD' : 400,
  'C' : 100,
  'XC' : 90,
  'L' : 50,
  'XL' : 40,
  'X' : 10,
  'IX' : 9,
  'VIII' : 8,
  'VII' : 7,
  'VI': 6,
  'V' : 5,
  'IV' : 4,
  'III' : 3,
  'II' : 2,
  'I' : 1
}

const convertNumeral = (numeral) => {
  let num = 0;
  // for(let i in numList) {
  //   while(numeral.indexOf(numList[i] === 0)) {
  //     num += numList[i];
  //     numeral.replace(i, '');
  //   }
  // }
  return num;
};

const convertNumber = (num) => {
  let roman = '';
  for (let i in numList){
    if(numList[i] === num) {
      return roman + i;
    } else if (numList[i] < num) {
      roman += i;
      num -= numList[i];
    }
  }



};
