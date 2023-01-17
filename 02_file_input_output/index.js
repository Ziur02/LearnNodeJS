const fsPromises = require("fs").promises;
const path = require("path");

const fileOperations = async () => {
    try {
        const data = await fsPromises.readFile(path.join(__dirname, "files", "starter.txt"), "utf8");
        console.log(data);
        await fsPromises.unlink(path.join(__dirname, "files", "starter.txt")); // delete file
        await fsPromises.writeFile(path.join(__dirname, "files", "promiseWrite.txt"), data);
        await fsPromises.appendFile(path.join(__dirname, "files", "promiseWrite.txt"), "\n\nNice to meet you.");
        await fsPromises.rename(path.join(__dirname, "files", "promiseWrite.txt"), path.join(__dirname, "files", "promiseComplete.txt"));
        const newData = await fsPromises.readFile(path.join(__dirname, "files", "promiseComplete.txt"), "utf8");
        console.log(newData);
    } catch (err) {
        console.error(err);
    }
};

fileOperations();

// fs.readFile(path.join(__dirname, "files", "starter.txt"), "utf8", (err, data) => {
//     if (err) throw err;
//     console.log(data);
// });

console.log("Hello, where am I?");

// exit on uncaght errors
process.on("uncaughtException", (err) => {
    console.log(`There was an uncaught error: ${err}`);
    process.exit(1);
});

// callback hell
// fs.writeFile(path.join(__dirname, "files", "reply.txt"), "Nice to meet you.", (err, data) => {
//     if (err) throw err;
//     console.log("Write file complete");

//     fs.appendFile(path.join(__dirname, "files", "reply.txt"), "\n\nMe too.", (err, data) => {
//         if (err) throw err;
//         console.log("Append complete");

//         fs.rename(path.join(__dirname, "files", "reply.txt"), path.join(__dirname, "files", "newReply.txt"), (err, data) => {
//             if (err) throw err;
//             console.log("Rename complete");
//         });
//     });
// });
