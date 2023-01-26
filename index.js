const PORT = 3000;

const express = require("express");
const path = require("path");
const apiRoute = require("./routes/api")


const app = express();

app.use("/api", apiRoute)
app.use("/", express.static(path.join(__dirname, "public")));


app.listen(PORT, (err) => {
    if (err) {
        console.log(err);
    }
    else { console.log("server running on port:", PORT) }

}
)
