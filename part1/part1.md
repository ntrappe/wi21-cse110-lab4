# Part 1 Responses

**Question 1:** *What will happen at line 11 and why?* <br/>
If this were a traditional language like C++ then any variable declared within the scope of a for loop cannot be accessed by a command outside. However, this is Javascript and var declarations are hoisted. This means that the `var i` is still visible outside of the loop to the rest of the function. The log command is like a print statement so line 11 prints the value of i after the for loop ends. The for loop ends when `i >= prices.length` so it will end when i equals `prices.length`. Therefore,this line logs the value of `prices.length`.

**Question 2:** *What will happen at line 12 and why?* <br/>
Unlike to the previous question, `console.log(discountedPrice);` will result in an error. `discountedPrice` is declared with `let` within the scope of the for loop. Therefore, it can only be accessed within the loop. Since the log command is outside, it has no access to that variable so it doesn't know what it's being asked to log, and, therefore, provides a not-defined error.

**Question 3:** *What will happen at line 13 and why?* <br/>
Line 13, `console.log(finalPrice);` will log, or print, the value of `finalPrice`. In this case, `finalPrice` will be the discounted price of the last item in the prices array. By discounted, we mean that we will have taken the last element in the prices array, applied the discount (e.g. if 50% off of $2 then $1), and rounded it to the nearest whole number. There are no errors because the variable and log command are withint the same scope (the function).

**Question 4:** *What will the function return if we call discountPrices([100, 200, 300], .5) ? Give a brief explanation.* <br/>
Given that the first function parameter is `prices` and we are passed `[100,200,300]` there are 3 items so the for loop will run from `i=0` to `i<3`. Therefore, it will iterate through each element of the given array. Let's just take a look at `i=0` and substitute the variable `discount` with the given vallue `0.5`: <br/>
```javascript
    let discountedPrice = prices[0] * (1-0.5); <br/>  
    // discountedPrice = 100 * (0.5) = 50  <br/>
    finalPrice = Math.round(50 * 100) / 100; <br/>          
    // finalPrice = (5000) / 100 = 50 <br/>
    discounted.push(finalPrice);
    // discounted = [50]
```
In line 6, we apply the discount to the current element in the `discountPrices` array. To apply a discount, we need to subtract the percentage of that discount from the original price, original_price * (1-discount) = discounted_price. In this case, we get 50 (because that's 50% off of 100). In line 7, we round to the nearest whole number. `Math.round(discountedPrice * 100)` ensures this. For example, `Math.round(.001 * 100) = 0`. In our case, we got 50. In line 8, we push the `finalPrice` to the empty array `discounted`. This simply adds our new discounted price to the array. After doing this, the array contains 50. <br/>
Once our function runs through the whole array, `[100,200,300]`, we update `discounted` such that `discounted = [50,100,150]` then return this array. Therefore, the functions returns `[50,100,150]`.

**Question 5:** *What will happen at line 11 and why?* <br/>
Line 11 cannot log the value of i at the end of the for loop because we now have i declared by `let i` which doesn't hoist the value. The log command is outside of the scope of the declaration of i so it has no access. We will get an "i is not defined" error.

**Question 6:** *What will happen at line 12 and why?* <br/>
Line 12 cannot log the value of `discountPrice` because the variable was declared with `let` within the for loop so its scope is limited to the loop. The log command is outside the scope and has no access so we get another "discountPrice is not defined" error.

**Question 7:** *What will happen at line 13 and why?* <br/>
Line 13 can log the value of `finalPrice`. Even though `finalPrice` was declared with `let`, its scope is the function `discountPrices` so the log command has access.

**Question 8:** *What will the function return for discountPrices([100, 200, 300], .5)? Give a brief explanation.* <br/>
The function will return `[50,100,150]`. This function does the exact same things as in Question 4. The only difference is whether variables were declared by `let` or `var`. While the log commands do not have access to `i` or `discountedPrice`, all of the calculations needed to output `discounted` (returned as [50,100,150]) are within the for loop and have the same scope and therefore access.

**Question 9:** *What will happen at line 11 and why?* <br/>
This line won't log the value of `i` because there's a glaring error that must be resolved first. This error is the assignment of `finalPrice` to a value. This variable was declared as a `const` which means it cannot be modified post-assignment. 

**Question 10:** *What will happen at line 12 and why?* <br/>
Assuming that the assignment error (from Q9) was resolved, line 12 will still result in an error. Line 12 is trying to log the value of `discountedPrice` however this varible was declared as a `const` within the for loop. A `const` declaration doesn't hoist the value so its scope is restricted to the loop it was placed in. Therefore, the log has no access to the variable and results in a not-defined error.

**Question 11:** *What will happen at line 13 and why?* <br/>
Let us first assume that the assignment error (from Q9) was resolved and the not-defined error (from Q10) was resolved. If this is the case, line 11 does not result in an error. We don't run into any scope issues because the variable we want to log, `finalPrice` is declared as a `const` within the function. Therefore, anything within the function has access. However, we declared that `const finalPrice = 0` and once a `const` variable has been assigned, it cannot be modified. Therefore, it will only ever have the value of 0. Line 13 will log 0.


**Question 12:** *What will the function return for discountPrices([100, 200, 300], .5)? Give a brief explanation.* <br/>
Let us assume that the assignment error (from Q9) was resolved and the not-defined error (from Q10) was resolved. As we mentioned in Q11, `finalPrice` has been set to 0, and as a `const` cannot be modified. This means that every iteration of the for loop, the line `discounted.push(finalPrice)` is adding `finalPrice` to the `discounted` array. We are adding 0 to the array each iteration then. So, the function will return `[0,0,0]`.

**Question 13:** *Given the above Object, write the notation for:*
1. Accessing the value of the name property in the student object: `student.name`
2. Accessing the value of the Grad Year property in the student object: `student['Grad Year']`
3. Calling the function for the greeting property in the student object: `student.greeting()`
4. Accessing the name property of the object in the Favorite Teacher property in student: `student['Favorite Teacher'].name`
5. Access the first index in the array of the courseLoad property of the student object: `student.courseLoad[0]` 

**Question 14:** <br/>
*Note: single (' ') and double (" ") quotes create string literals in Javascript (rather than char vs string distinction in other languages).* <br/>
1. `'3' + 2 = '32'` <br/>
   If any operand is a string in the case of a '+' operator, the other one is converted to a string. Therefore, we get string concatenation. <br/>
2. `'3' - 2 = 1` <br/>
   Other arithmetic operators, like '-', only work on digits so '3' is converted to a number and we see the subtraction of 2 from 3. <br/>
3. `3 + null = 3` <br/>
   In the case of the arithmetic, '+' operator, (without strings), null is converted to a number, 0, so we have 3 + 0.  <br/>
4. `'3' + null = '3null'` <br/>
   If any operand is a string in the case of a '+' operator, the other one is converted to a string. Therefore, we get string concatenation. <br/>
5. `true + 3 = 4` <br/>
   In the case of the arithmetic, '+' operator, (without strings), true is converted to its respective numeric value, 1, so we have 1 + 3.  <br/>
6. `false + null = 0` <br/>
   In the case of the arithmetic, '+' operator, (without strings), false is converted to its respective numeric value, 0, and null to 0 so we have 0 + 0.  <br/>
7. `"3" + undefined = '3undefined'` <br/>
   If any operand is a string in the case of a '+' operator, the other one is converted to a string. Therefore, we get string concatenation. <br/>
8. `"3" - undefined = NaN` <br/>
   The `undefined` keyword means that a variable has ot been assigned a value or declared. Arithmetic operators, like '-', only work on digits so "3" is converted to a number. However subtracting an unassigned value from a value results in `NaN`--"Not-a-Number"--because we cannot yield a meaningful result. <br/>

**Question 15:** <br/>
1. `'2' > 1 = true` <br/>
   For the comparator operator, when comparing values of different types (string vs number), any other values are converted to numbers. Therefore, '2' becomes 2 and 2 is greater than 1: true. <br/>
2. `'2' < '12' = false` <br/>
   When comparing values of the same type, if they are strings, they are compared character by character acording to their Unicode/ascii encoding. In this case, the first character in each string is '2' and '1'. '2' has a higher encoding than '1' and is larger. Therefore, this expression is false.  <br/>
3. `2 == '2' = true` <br/>
   For the regular equality operator, when comparing values of different types (string vs number), any other values are converted to numbers. Therefore, '2' becomes 2 and 2 does equal 2: true. <br/>
4. `2 === '2' = false` <br/>
   For the strict equality operator, it checks the values without type conversion. This means, we are comparing a number to a string, and as they are of different types, it immediately returns false. <br/>
5. `true == 2 = false` <br/>
   For the regular equality operator, when comparing values of different types (boolean vs number), any other values are converted to numbers. Therefore, true is converted to its respective numeric value, 1, and 1 is NOT equal to 2: true. <br/>
6. `true === Boolean(2) = true` <br/>
   The function, Boolean(), returns either true or false depending on the value of a variable, object, expression, etc. In the case of Boolean(2) it returns true. For the strict equality operator, we have no type conversion. However, the Boolean() method returns a bool. Therefore, we're comparing two bools: true and true. This results in true. <br/>

**Question 16:** *Explain the difference between the == and === operators.* <br/>
As we mentioned previously, the '==' is called a regular equlity operator. When comparing values of different types, it converts values. For example, given a bool and a number, the bool is converted to a number and the equality is evaluated for both numbers. The '===' is called a struct equality operator. It does NOT convert values of different types. For the previous example, a bool and number, it would immediately return false because they are of different types and cannot be compared.

**Question 17:** *From the code snippet below, explain what gets printed and why.* <br/>
Let's start with line 1: `if (2 == true)`. We are using a regular equality operator so it will converted the bool, true, to its respective numeric value, 1. So, we are actually asking if `2 == 1`. This is always going to be false so we will never enter line 2 `console.log('Hello!');`. In line 3, `else if(2)`, we are evaluating a single number. As long as this value is NOT 0, null, undefined, NaN, or "", it will be evaluated as true. Therefore, we will always go to line 4, `console.log('How are you?');`. We will never go into the else case because of line 3. To summarize, this code snippet will log "How are you?".

**Question 18:** *Given the below Object, write a for...in loop that will iterate through it and print out the value of the property if the property starts with the letter r, or if the value of that property is an odd number.* <br/>
Code is in `part1-question18.js`.

