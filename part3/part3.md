# Part 3 Responses

#### Screenshots
Screenshot below show code to the left and the breakpoints and watch expressions to the right.

![breakpt](breakpt_watch.png)

The bug is that both "first number" and "second number" inputs are strings. When we hit this line `let result = num1 + num2`, the program tries to add the inputs. However, with the '+' operator, if a string is present, it does string concatenation. Rather than adding the numeric values of the first and second numbers, it concatenates them.

To fix this, we need to ensure that both inputs are converted to numbers so we do not do string concatenation. We can use function like `Number()` which converst a string to a number or `parseInt()` that converts to a whole number.

```javascript
function calculateSum(num1, num2) {
    let result = Number(num1) + Number(num2)    // my fix
    return result
}
```