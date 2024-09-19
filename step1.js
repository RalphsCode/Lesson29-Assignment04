const fs = require('fs');

const path = process.argv;

function cat() {
    try {
        fs.readFile(path[2], 'utf8', (err, data) => { 
            if(err) {
                console.log('ERROR:', err);
                process.exit(1);
                }
            console.log(data);
            } ) }
    catch {
        console.log("ERROR:", err)
    }
}

// Call the function
cat()