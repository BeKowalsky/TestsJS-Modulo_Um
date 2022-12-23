import find from 'lodash/find';
import remove from 'lodash/remove';

export default class Cart {
  items = [];

  add(item) {
    const itemToFind = { product: item.product };

    if (find(this.items, itemToFind)) {
      //Retorna o primeiro item que corresponde ao valor, nesse caso primeira chamada da classe vai criar o item, então não cai no find, já a segunda vai ser existente, então cai nesse if;
      remove(this.items, itemToFind); // Remove o item que retornou no find;
    }

    this.items.push(item);
  }

  getTotal() {
    return this.items.reduce((acumulator, item) => {
      return acumulator + item.quantity * item.product.price;
    }, 0);
  }
}
