import Cart from './Cart';

describe('Cart', () => {
  let cart;

  beforeEach(() => {
    //Antes de cada teste
    cart = new Cart();
  });

  it('should return 0 when getTotal() is executed in a newly created instance', () => {
    expect(cart.getTotal()).toEqual(0);
  });

  it('should multiply quantity and price and receive the total amount', () => {
    const item = {
      product: {
        title: 'Adidas running shoes - men',
        price: 35388, //353.88 | R$ 353,88
      },
      quantity: 2, //70776
    };

    cart.add(item);

    expect(cart.getTotal()).toEqual(70776);
  });
});
