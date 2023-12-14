import server from "./server";
import { config } from "dotenv";
config();
const port = process.env.PORT ?? 5000;

server.listen(port, () => {
  console.log("server started on port ", port);
});
