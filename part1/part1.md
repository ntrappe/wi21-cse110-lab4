# Part 1 Responses

**Question 1:** *What will happen at line 11 and why?* <br/>
If this were a traditional language like C++ then any variable declared within the scope of a for loop cannot be accessed by a command outside. However, this is Javascript and var declarations are hoisted. This means that the `var i` is still visible outside of the loop to the rest of the function. The log command is like a print statement so line 11 prints the value of i after the for loop ends. The for loop ends when `i >= prices.length` so it will end when i equals `prices.length`. Therefore,this line logs the value of `prices.length`.

**Question 2:** *What will happen at line 12 and why?* <br/>
Unlike to the previous question, `console.log(discountedPrice);` will result in an error. `discountedPrice` is declared with `let` within the scope of the for loop. Therefore, it can only be accessed within the loop. Since the log command is outside, it has no access to that variable so it doesn't know what it's being asked to log, and, therefore, provides a not-defined error.

**Question 3:** *What will happen at line 13 and why?* <br/>
Line 13, `console.log(finalPrice);` will log, or print, the value of `finalPrice`. In this case, `finalPrice` will be the discounted price of the last item in the prices array. By discounted, we mean that we will have taken the last element in the prices array, applied the discount (e.g. if 50% off of $2 then $1), and rounded it to the nearest whole number.

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
Line 11 logs--or prints--the value of i. The for loop ends when `i >= prices.length`. Given that `prices.length = 3`, the loop ends when i is 3. Therefore, this line logs 3.

**Question 6:**

