var main = function () {
    "use strict";

    var arrayOfNumbers = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29];


    //0. Write a function that accepts an array of numbers as an argument and returns their sum:
    //a) Using For loop
    var sum = function (nums) {
        var sumSoFar = 0,
            i;

        for (i = 0; i < nums.length; i++) {
            sumSoFar = sumSoFar + nums[i];
        }
        return sumSoFar;
    };

    console.log("sum = " + sum(arrayOfNumbers));


    //b) Using forEach loop
    var sum2 = function (nums) {
        var sumSoFar = 0;

        nums.forEach(function (value) {
            sumSoFar = sumSoFar + value;
        });

        return sumSoFar;
    };

    console.log("sum2 = " + sum2(arrayOfNumbers));


    //c) Using an array function called reduce
    var sum3 = function (nums) {
        return nums.reduce(function (sumSoFar, value) {
            //debugger;
            return sumSoFar + value;
        }, 0);
    };

    console.log("sum3 = " + sum3(arrayOfNumbers));


    // 1. Write a function that accepts an array of numbers as an argument and returns their average.
    var average = function (nums) {
        var sumSoFar = 0,
            i,
            avg;

        //i'm using For loop to count the number of elements in array (i.e. "i" variable)
        for (i = 0; i < nums.length; i++) {
            sumSoFar = sumSoFar + nums[i];
        }

        if (i !== 0) {
            avg = sumSoFar / i;
        } else { avg = -1; }

        return avg;
    };

    console.log("average = " + average(arrayOfNumbers));


    //2. Write a function that accepts an array of numbers as an argument 
    //   and returns the largest number in the array.
    var largest = function (nums) {
        var largestNumber; //largest number in the array

        nums.forEach(function (value) {
            if (largestNumber === undefined || largestNumber < value) {
                largestNumber = value;
            }
        });

        return largestNumber;
    };

    console.log("largest = " + largest(arrayOfNumbers));


    //3. Write a function that accepts an array of numbers and returns true if it contains at
    //   least one even number, false otherwise.
    var oneEven = function (nums) {
        var isEven = false;

        nums.forEach(function (value) {
            if (value % 2 === 0) { isEven = true; }
        });

        return isEven;
    };

    console.log("array contains at least one even number = " + oneEven([2, 5, 11, 77]));
    console.log("array contains at least one even number = " + oneEven([1, 3, 5, 55]));

    //4. Write a function that accepts an array of numbers and returns true if every number
    //   is even, false otherwise.

    var allEven = function (nums) {
        var isEven = true;

        nums.forEach(function (value) {
            if (value % 2 !== 0) { isEven = false; }
        });

        return isEven;
    };

    console.log("array contains all even numbers: " + allEven([2, 4, 6, 12]));
    console.log("array contains all even numbers: " + allEven([2, 4, 6, 77]));

    //5. Write a function that accepts two arguments — an array of strings and a string—and
    //   returns true if the string is contained in the array, false otherwise.
    var arrayContains = function (nums, str) {
        var isContained = false;

        nums.forEach(function (value) {
            if (value === str) { isContained = true; }
        });

        return isContained;
    };

    console.log("the string is contained in the array: " + arrayContains(["hello", "world"], "hello"));
    console.log("the string is contained in the array: " + arrayContains(["hello", "world"], "goodbye"));
    console.log("the string is contained in the array: " + arrayContains(["hello", "world", "goodbye"], "goodbye"));


    //6. Write a function that is similar to the previous one, but returns true only if the
    //   array contains the given string at least TWICE:
    var arrayContainsTwo = function (nums, str) {
        var numberOfOccurence = 0,
            containsTwo = false;

        nums.forEach(function (value) {
            if (value === str) { numberOfOccurence++; }
        });
        if (numberOfOccurence >= 2) { containsTwo = true; }

        return containsTwo;
    };

    console.log("the array contains the given string at least twice: " + arrayContainsTwo(["a", "b", "a", "c"], "a"));
    console.log("the array contains the given string at least twice: " + arrayContainsTwo(["a", "b", "a", "c"], "b"));
    console.log("the array contains the given string at least twice: " + arrayContainsTwo(["a", "b", "a", "c", "a"], "a"));


    //6b. Write a function that is similar to the previous one, but returns true only if the
    //   array contains the given string at least THREE times:

    var arrayContainsThree = function (nums, str) {
        var numberOfOccurence = 0,
            containsThree = false;

        nums.forEach(function (value) {
            if (value === str) { numberOfOccurence++; }
        });
        if (numberOfOccurence >= 3) { containsThree = true; }

        return containsThree;
    };

    console.log("the array contains the given string at least three times: " + arrayContainsThree(["a", "b", "a", "c", "a"], "a"));


    //6c. Write a function that accepts three arguments and returns true if the
    //    array contains the element n times, where n is the third argument

    var arrayContainsNTimes = function (nums, str, nTimes) {
        var numberOfOccurence = 0,
            containsNTimes = false;

        nums.forEach(function (value) {
            if (value === str) { numberOfOccurence++; }
        });
        if (numberOfOccurence >= nTimes) { containsNTimes = true; }

        return containsNTimes;
    };

    console.log("the array contains the given string N times: ");
    console.log(arrayContainsNTimes(["a", "b", "a", "c", "a"], "a", 3));
    console.log(arrayContainsNTimes(["a", "b", "a", "c", "a"], "a", 2));
    console.log(arrayContainsNTimes(["a", "b", "a", "c", "a"], "a", 4));
    console.log(arrayContainsNTimes(["a", "b", "a", "c", "a"], "b", 2));
    console.log(arrayContainsNTimes(["a", "b", "a", "c", "a"], "b", 1));
    console.log(arrayContainsNTimes(["a", "b", "a", "c", "a"], "d", 0));

};

$(document).ready(main);
