const express = require("express");
const path = require("path");

const app = express();

// Serve the main website
app.use(express.static(__dirname));

// Serve the files folder
app.use("/files", express.static(path.join(__dirname, "files")));

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});