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
This line won't log the value of `i` because there's a glaring error that must be resolved first. This error is the assignment of a `finalPrice` to a value. This variable was declared as a `const` which means it cannot be modified post-assignment. 

**Question 10:** *What will happen at line 12 and why?* <br/>
This line won't log the value of `discountPrice` because there's a glaring error that must be resolved first. This error is the assignment of a `finalPrice` to a value. This variable was declared as a `const` which means it cannot be modified post-assignment.

**Question 11:** *What will happen at line 13 and why?* <br/>
This line won't log the value of `finalPrice` because it is a const (cannot be modified post-assignment) and line 7 is trying to assign it which results in an error "invalid assignment to const". 

**Question 12:** *What will the function return for discountPrices([100, 200, 300], .5)? Give a brief explanation.* <br/>
The function cannot return a value because of the error that was mentioned in the previous three questions. The `const finalPrice` cannot have an assignment.

**Question 13:** *Given the above Object, write the notation for:*
1. Accessing the value of the name property in the student object: `student.name`
2. Accessing the value of the Grad Year property in the student object: `student['Grad Year']`
3. Calling the function for the greeting property in the student object: `student.greeting()`
4. Accessing the name property of the object in the Favorite Teacher property in student: `student['Favorite Teacher'].name`
5. Access the first index in the array of the courseLoad property of the student object: `student.courseLoad[0]`

