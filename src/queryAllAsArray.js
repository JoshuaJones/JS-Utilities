// https://remysharp.com/2016/10/10/one-devtools-trick
let $$ = (expr, ctx = document) => Array.from(ctx.querySelectorAll(expr));