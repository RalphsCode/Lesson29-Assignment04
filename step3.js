const fs = require('fs');
const axios = require('axios')

// Get the argunemts from node
const args = process.argv;

async function cat(file) {
    /* console.log's the contents of a passed in file. */
    try {
        const response = await fs.promises.readFile(file, 'utf8');
        return response; }
    catch {
        console.log("ERROR trying to access the file.")
    }
 
}  // END cat()


async function webcat(url) {
    /* console.log's the content of a passed in http webpage */
    try {
        const response = await axios.get(url);
        return(response.data);
    } 
    catch(err) {
        console.log("There was an error retreiving the data.", err);
        return null;
    }
}  // END webcat()


// Call the relevant function

if (args[2] == '--out') {
    if (args[4].includes('http') ) {  // arg includes http
        webcat(args[4])
        .then(data => {
            fs.writeFile(args[3], data, "utf8", function(err) {
                if (err) {
                  console.error(err);
                  process.exit(1);
                }
                console.log('Successfully wrote to file!');
              });
              ;
        })
        }
    else {
        cat(args[4])
        .then (data => {
            fs.writeFile(args[3], data, "utf8", function(err) {
                if (err) {
                  console.error(err);
                  process.exit(1);
                }
                console.log('Successfully wrote to file!');
              });
              ;
    } )
    } }

else if (args[2].includes('http') ) {  // arg includes http
    webcat(args[2])
    .then (data => {
        console.log(data);
    })
    
} else {
    cat(args[2])
    .then (response => {
        console.log(response);
    });
    }

