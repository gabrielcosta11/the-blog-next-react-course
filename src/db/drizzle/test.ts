import { drizzleDd } from "."
import { postsTable } from "./schemas"

(async () => {
    const posts = await drizzleDd.select().from(postsTable)

    console.log(posts)
})()