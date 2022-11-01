package cartdto

type CreateCartRequest struct {
	Qty    int `json:"qty" form:"qty" validate:"required"`
	UserID int `json:"user_id" form:"user_id" validate:"required"`
}
