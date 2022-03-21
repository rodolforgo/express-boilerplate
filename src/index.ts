import { app } from "./app";
import { userRouter } from "./routes/router";

app.use('/user', userRouter);

