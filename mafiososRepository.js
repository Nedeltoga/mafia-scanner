export class MafiososRepository {
  ultimaId = 4;
  mafiosos = [
    {
      id: 1,
      nombre: "Thomas Shelby",
      estado: "Busca y captura",
      edad: 30,
      descripcion:
        "Líder de los Picky Blinders. Se vio por ultima vez en Birmingham.",
    },
    {
      id: 2,
      nombre: "Tony Montana",
      estado: "Muerto",
      edad: 45,
      descripcion: "Líder del narcotráfico. Murió en una pelea de bandas.",
    },
    {
      id: 3,
      nombre: "Jonny Pepperonni",
      estado: "Preso",
      edad: 37,
      descripcion:
        "Líder de la mafia del chorizo aunque se rumorea que le gusta mas la mortadela.",
    },
  ];

  crear(nombre, estado, edad, descripcion) {
    this.ultimaId++;
    this.actualizar(this.ultimaId, nombre, estado, edad, descripcion);
  }

  obtenerTodos() {
    return this.mafiosos;
  }

  obtenerPorId(id) {
    return this.mafiosos.find((mafioso) => mafioso.id == id);
  }

  actualizar(id, nombre, estado, edad, descripcion) {
    this.eliminarPorId(id);
    this.mafiosos.push({
      id,
      nombre,
      estado,
      edad,
      descripcion,
    });
  }

  eliminarPorId(id) {
    this.mafiosos = this.mafiosos.filter((mafioso) => {
      return mafioso.id != id;
    });
  }
}
