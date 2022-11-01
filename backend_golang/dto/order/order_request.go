package orderdto

type CreateOrderRequest struct {
	Qty        int `json:"qty" form:"qty" validate:"required"`
	CartID     int `json:"cart_id" form:"cart_id" `
	Product_id int `json:"product_id" form:"product_id" `
}
