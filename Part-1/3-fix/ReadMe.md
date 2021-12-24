1. the javascript parser will automatically add a semicolon when parsing the sourse code,here in
   alert("Hello"), the next line starts with a new code, so the parser understands that there is no continuation
   of the previous code so it applies the seicolon automatically

2. in the second case the string is given in multi line, the parse automatically adds /n new line to it for every break
   it has taken, considering that the string has ended and new line starts

3. in the third case, multi line expression, the + operator will be considered as continuation when they are used at the
   beginning or at the end of the line, so the parser wont onsert semicolon automatically when the expression breaks
