export default class Cart {
  items = [];

  add(item) {
    this.items.push(item);
  }

  getTotal() {
    return this.items.reduce((acumulator, item) => {
      //Acumulator -> acumulador;
      return acumulator + item.quantity * item.product.price; //Calculo do valor total;
    }, 0); // 0 será o primeiro parâmetro do reduce, ou seja, inicia em 0;
  }
}
