import find from 'lodash/find';
import remove from 'lodash/remove';
import Dinero from 'dinero.js';

const Money = Dinero; //Atribui todos os valores de 'Dinero' para 'Money', serve para na hora de usar, ao invés de colocar 'Dinero', coloca 'Money'

Money.defaultCurrency = 'BRL'; // Padrão em reais
Money.defaultPrecision = 2; // Até 2 casas após vírgula

export default class Cart {
  items = [];

  add(item) {
    const itemToFind = { product: item.product };

    if (find(this.items, itemToFind)) {
      remove(this.items, itemToFind);
    }

    this.items.push(item);
  }

  remove(product) {
    remove(this.items, { product });
  }

  getTotal() {
    return this.items.reduce((acumulator, item) => {
      return acumulator.add(
        //Acumulator agora usa o add para fazer o cálculo ao passar pelos itens do array
        Money({ amount: item.quantity * item.product.price }),
      );
    }, Money({ amount: 0 })); // Mudou de 0 para R$0.0
  }

  summary() {
    const total = this.getTotal().getAmount();
    const items = this.items;

    return {
      total,
      items,
    };
  }

  checkout() {
    const { total, items } = this.summary();

    this.items = [];

    return {
      total,
      items,
    };
  }
}
