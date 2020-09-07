// lib/server.ts
import app from "./app";
import * as mongoose from "mongoose";

const PORT = 3500;
mongoose.set('useUnifiedTopology', true);

app.listen(PORT, () => {
    console.log('Express server listening on port ' + PORT);
})
