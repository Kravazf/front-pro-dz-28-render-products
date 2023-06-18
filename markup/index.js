// Створити функцію-конструкцію Product, яка має наступні аргументи: категорія, тип, ціна та присвоїти її полям об'єкту відповідні ключі.

// Кожен об'єкт, створений функцією-конструктором, повинен мати функцію render, яка повинна повертати рядок вигляду 

// `<tr>
// 	<td><img src="images/kitchen/grater.svg" alt="терка" width="50" height="50"></td>
// 	<td>терка</td>
// 	<td>10 USD</td>
// </tr>'

// Всі продукти повинні бути створені за допомогою функції-конструктора Product і для всіх викликаємо метод render().

// В результаті на сторінці повинна з'явитися таблиця з виведенням даних про всі товари.

let kitchenProducts = [
	{
		type: 'grater',
		price: 10
	},
	{
		type: 'pastry-bag',
		price: 25
	},
	{
		type: 'scale',
		price: 5
	},
	{
		type: 'whisk',
		price: 15
	}
];

let devicesProducts = [
	{
		type: 'desktop',
		price: [100,1000]
	},
	{
		type: 'laptop',
		price: [50,1500]
	},
	{
		type: 'smartphone',
		price: [80,2000]
	},
	{
		type: 'tablet',
		price: [20,1300]
	}
];

let cosmeticsProducts = [
	{
		type: 'blush',
		price: 100
	},
	{
		type: 'eyeshadow',
		price: 50
	},
	{
		type: 'lipstick',
		price: 80
	},
	{
		type: 'nail-polish',
		price: 200
	},
	{
		type: 'perfume',
		price: 300,
	}
];

function Product (category, type, price) {
	this.category = category;
	this.type = type;
	this.price = price;

	this.renderSting = function () {
		return `
		<tr>
			<td>
				<img src="images/${this.category}/${this.type}.svg" alt="${this.type}">
			</td>
			<td>${this.type}</td>
			<td>${this.price} USD</td>
		</tr>
		`
	};
};

let tableRows = '';

kitchenProducts
	.map(function (item) {
    return new Product ('kitchen', item.type, item.price);
  })
  .forEach(function(item) {
    tableRows += item.renderSting();
  });

devicesProducts
  .map(function (item) {
    let price = Array.isArray(item.price) ? item.price.join('-') : item.price;
    return new Product ('devices', item.type, price);
  })
  .forEach(function(item) {
    tableRows += item.renderSting();
  });

cosmeticsProducts
  .map(function (item) {
    
    return new Product ('cosmetics', item.type, item.price);
  })
  .forEach(function(item) {
    tableRows += item.renderSting();
  });
 
document.write(`
  <table>
    <tr>
      <th>Image</th>
      <th>Name</th>
      <th>Price</th>
    </tr>
    ${tableRows}
  </table>
`);


