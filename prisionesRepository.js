export class PrisionesRepository {
  prisiones = [
    {
      id: 1,
      prisioneros: [],
    },
    {
      id: 2,
      prisioneros: [3],
    },
    {
      id: 3,
      prisioneros: [],
    },
  ];

  obtenerTodos() {
    return this.prisiones;
  }

  obtenerPorId(id) {
    return this.prisiones.find((prision) => prision.id == id);
  }

  encarcelar(idPresion, idMafioso) {
    this.obtenerPorId(idPresion).prisioneros.push(idMafioso);
  }
}
