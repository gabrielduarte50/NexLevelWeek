import express from "express";
// Em TypeScript precisamos definir o tipo, diferentemente de JS
// Por isso usamos o formato usado acima. Além disso, alguns momentos temos
// que definir o codigo com outra biblioteca, além da biblio utilizada
import cors from "cors";
import path from "path";
import routes from "./routes";

const app = express();
app.use(cors()); //passamos o domminio do front end depois, assim libera usar a API
app.use(express.json()); //express entender body como JSON
app.use(routes);

app.use("/uploads", express.static(path.resolve(__dirname, "..", "uploads"))); //servir arquivos estaticos, como IMAGENS, PDFS
app.listen(3333);
