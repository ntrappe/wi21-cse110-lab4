# Part 3 Responses

#### Screenshots
Screenshot below show code to the left and the breakpoints and watch expressions to the right.

![breakpt](breakpt_watch.png)

The bug is that both "first number" and "second number" inputs are strings. When we hit this line `let result = num1 + num2`, the program tries to add the inputs. However, with the '+' operator, if a string is present, it does string concatenation. Rather than adding the numeric values of the first and second numbers, it concatenates them.

To fix this, we need to ensure that both inputs are converted to numbers so we do not do string concatenation.