export class OrderTotal {
	"customerID": string;
	"customerName": string;
	"lastName": string;
	"orders": Order[];
	"orderTotal": string
}

export class Order {
	"productID": string;
	"productName": string;
	"date": string;
	"quantity": string;
	"unitePrice": string;
	"total": string
}
