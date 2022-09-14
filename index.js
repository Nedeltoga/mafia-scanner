import express, { response } from "express";
import bodyParser from "body-parser";
import { MafiososRepository } from "./mafiososRepository.js";
import { PrisionesRepository } from "./prisionesRepository.js";

const app = express();
const mafiososRepository = new MafiososRepository();
const prisionesRepository = new PrisionesRepository();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get("/mafiosos", (request, response) => {
  response.send(mafiososRepository.obtenerTodos());
});

app.post("/mafiosos", (request, response) => {
  mafiososRepository.crear(
    request.body.nombre,
    request.body.estado,
    request.body.edad,
    request.body.descripcion
  );
  response.send("Mafioso creado");
});

app.get("/mafiosos/:id", (request, response) => {
  const idMafioso = request.params["id"];
  const mafioso = mafiososRepository.obtenerPorId(idMafioso);
  response.send(mafioso);
});

app.delete("mafiosos/:id", (request, response) => {
  mafiososRepository.eliminarPorId(request.params.id);
  response.status(201).send("Mafioso eliminado");
});

app.put("/mafiosos/:idMafioso", (request, response) => {
  mafiososRepository.actualizar(
    request.params.idMafioso,
    request.body.nombre,
    request.body.estado,
    request.body.edad,
    request.body.descripcion
  );
  response.send(mafiososRepository.obtenerPorId(req.params.idMafioso));
});

app.get("/prisiones", (request, response) => {
  response.send(prisionesRepository.obtenerTodos());
});

app.get("/prisiones/:idPrision/prisioneros", (request, response) => {
  const infoPrision = prisionesRepository.obtenerPorId(
    request.params.idPrision
  );
  const prisioneros = infoPrision.prisioneros.map((prisionero) =>
    mafiososRepository.obtenerPorId(prisionero)
  );
  response.send(prisioneros);
});

app.post(
  "/prisiones/:idPrision/encarcerlar/:idMafioso",
  (request, response) => {
    prisionesRepository.encarcelar(
      req.params.idPrision,
      request.params.idMafioso
    );
    response.send("Mafioso encarcelado");
  }
);

app.listen(3000, () => {
  console.log("Mafia scanner: Buenos dias agente de la ley.");
  console.log("Mafia scanner: A que mafioso atraparemos hoy?");
});
