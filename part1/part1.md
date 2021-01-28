# Part 1 Responses

#### Question 1:
*What will happen at line 11 and why?* <br/>
Line 11, `console.log(i);` will result in the error: "i is not defined" because we are trying to log, or print, the value i. However, *i* is only declared within the scope of the for loop so anything outside of it, like this log command, has no access to the variable.

#### Question 2:
*What will happen at line 12 and why?* <br/>
Similar to the previous question, `console.log(discountedPrice);` will result in an error. This is because we are trying to print the value of `discountedPrice` which we can see has been declared within the scope of the for loop. Since this logging occurs outside of the loop, it has no access to that variable so it doesn't know what it's being asked to log, and, therefore, provides a not-defined error.

#### Question 3:
*What will happen at line 13 and why?* <br/>
Line 13, `console.log(finalPrice);` will log, or print, the value of `finalPrice`. In this case, `finalPrice` will be the discounted price of the last item in the prices array. By discounted, we mean that we will have taken the last element in the prices array, applied the discount (e.g. if 50% off of $2 then $1), and rounded it to the nearest 2 decimal places (by dividing by 100).

