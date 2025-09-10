import 'dotenv/config';
import app from "./app.js";

app.listen(process.env.PORT, () => {
  console.log(
    `Servidor executando em :${
      process.env.PORT
    } - Ambiente: ${process.env.NODE_ENV}`,
  );
});
