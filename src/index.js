module.exports = function toReadable(number) {
    const strNum = String(number);
    let dozens;
    const dictionary = {
        0: "zero",
        1: "one",
        2: "two",
        3: "three",
        4: "four",
        5: "five",
        6: "six",
        7: "seven",
        8: "eight",
        9: "nine",
        10: "ten",
        11: "eleven",
        12: "twelve",
        13: "thirteen",
        14: "fourteen",
        15: "fifteen",
        16: "sixteen",
        17: "seventeen",
        18: "eighteen",
        19: "nineteen",
        20: "twenty",
        30: "thirty",
        40: "forty",
        50: "fifty",
        60: "sixty",
        70: "seventy",
        80: "eighty",
        90: "ninety",
        100: "hundred",
    };
    if (number === 0) return dictionary[number];

    const firstTwentyNums = (num) => dictionary[num];

    const firstHundredNums = (num) => {
        if (num[1] === "0") return dictionary[`${num[0]}0`];
        else return `${dictionary[`${num[0]}0`]} ${dictionary[num[1]]}`;
    };

    if (number >= 1 && number < 20) return firstTwentyNums(number);

    if (number >= 20 && number < 100) return firstHundredNums(String(number));

    if (number >= 100 && number < 1000) {
        if (number % 100 === 0)
            return `${dictionary[strNum[0]]} ${dictionary[100]}`;
        dozens = strNum.substring(1);
        if (+dozens >= 1 && +dozens < 20) {
            return `${dictionary[strNum[0]]} ${
                dictionary[100]
            } ${firstTwentyNums(+dozens)}`;
        }
        if (+dozens >= 20 && +dozens < 100) {
            return `${dictionary[strNum[0]]} ${
                dictionary[100]
            } ${firstHundredNums(dozens)}`;
        }
    }
};
