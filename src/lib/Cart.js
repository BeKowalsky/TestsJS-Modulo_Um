import find from 'lodash/find';
import remove from 'lodash/remove';
import Dinero from 'dinero.js';

const Money = Dinero;

Money.defaultCurrency = 'BRL';
Money.defaultPrecision = 2;

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
      const amount = Money({ amount: item.quantity * item.product.price }); // Valor total
      let discount = Money({ amount: 0 }); // Desconto começa em 0

      if (
        item.condition &&
        item.condition.percentage &&
        item.quantity > item.condition.minimum
      ) {
        // Verifica se tem condição de desconto
        discount = amount.percentage(item.condition.percentage); // Valor da variável discount agora é o valor do desconto, transformado em porcentagem pela biblioteca
      }

      return acumulator.add(amount).subtract(discount); // Calcula o valor final e subtrai a porcentagem do desconto
    }, Money({ amount: 0 }));
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
