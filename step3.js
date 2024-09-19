const fs = require('fs');
const axios = require('axios')

// Get the argunemts from node
const path = process.argv;

function cat() {
    /* console.log's the contents of a passed in file. */
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
}  // END cat()


async function webcat() {
    /* console.log's the content of a passed in http webpage */
    try {
        const resp = await axios.get(path[2]);
        console.log(resp.data);
    }
    catch(err) {
        console.log("There was an error retreiving the data.", err)
    }
}  // END webcat()


// Call the relevant function
if (path[2].includes('http') ) {  // arg includes http
    webcat()
} else {    // Regular system file passed in
    cat()
    }
