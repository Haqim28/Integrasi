package models

type Transaction struct {
	ID       int                  `json:"id" gorm:"primary_key:auto_increment"`
	UsersID  int                  `json:"user_id"`
	Users    UsersProfileResponse `json:"users" gorm:"constraint:OnDelete:SET NULL;"`
	Status   string               `json:"status"`
	Subtotal int                  `json:"subtotal"`
	CartID   int                  `json:"cart_id" `
	Cart     Cart                 `json:"cart"`
}
