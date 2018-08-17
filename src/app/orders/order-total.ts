export class OrderTotal {
	"customerID": string;
	"customerName": string;
	"lastName": string;
	"orders": Order[];
	"orderTotal": "$47.00"
}

export class Order {
	"productID": string;
	"productName": string;
	"date": string;
	"quantity": string;
	"unitePrice": string;
	"total": string
}
