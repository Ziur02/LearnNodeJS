const fs = require("fs");

// if (!fs.existsSync("./new")) {
//     fs.mkdir("./new", (err) => {
//         if (err) throw err;
//         console.log("Directory created");
//     });
// }

// if (fs.existsSync("./new")) {
//     fs.rmdir("./new", (err) => {
//         if (err) throw err;
//         console.log("Directory removed");
//     });
// }

const fileOperations = async () => {
    try {
        await fs.promises.mkdir("./new");
        console.log("Directory created");
        await fs.promises.rmdir("./new");
        console.log("Directory removed");
    } catch (err) {
        console.error(err);
    }
};

fileOperations();
