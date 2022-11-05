package transactiondto

type CreateTransaction struct {
	Status   string `json:"status" form:"status" gorm:"type: varchar(255)"`
	CartID   int    `json:"cart_id" form:"cart_id" gorm:"type: int"`
	UserID   int    `json:"user_id" form:"user_id" gorm:"type: int"`
	SubTotal int    `json:"subtotal" form:"subtotal" gorm:"type: int"`
}

type UpdateTransactionRequest struct {
	Status string `json:"status" form:"status" gorm:"type: varchar(255)"`
	Qty    int    `json:"qty" form:"qty" gorm:"type: int"`
}
