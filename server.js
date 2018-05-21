'use strict';

// [START app]
if (process.env.NODE_ENV === "production") {
    require("@google/cloud-trace").start();
}

if (process.env.GCLOUD_PROJECT) {
    require("@google/cloud-debug").start();
}

const express = require('express');

const app = express();

app.get('/', (req, res) => {
    res.status(200).send('Hello, world!').end();
});

// Start the server
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log(`App listening on port ${PORT}`);
    console.log('Press Ctrl+C to quit.');
});
// [END app]


