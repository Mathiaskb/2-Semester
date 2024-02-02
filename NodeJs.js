console.log("Hej med dig!");


// making triangle of #
let i = 0;
let n = "";

for(i; i<7;++i){
n += "#";
console.log(n);
}

// Making a chess board of #
for (i = 0; i < 8; ++i){
    if (i % 2 == 0)
    console.log("# # # #");
else
    console.log(" # # # #")
}

function renderPage(title, heading, demoString) {
    return `
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>${title}</title>
        </head>
        <body>
            <h1>${heading}</h1>
            <p>${demoString}</p>
            <script>
                // JavaScript code here
            </script>
        </body>
        </html>
    `;
}

