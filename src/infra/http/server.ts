import { app } from "./app"

app.listen(
    process.env.PORT || 3000,
    () => {console.log(`listening on https://localhost:${process.env.PORT || 3000}`)},
)