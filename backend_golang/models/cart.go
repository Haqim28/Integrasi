package models

type Cart struct {
	ID     int                  `json:"id" gorm:"primary_key:auto_increment"`
	Status string               `json:"status" form:"status" gorm:"type: varchar(255)"`
	Qty    int                  `json:"qty" form:"qty"`
	UserID int                  `json:"user_id"`
	User   UsersProfileResponse `json:"user"`
	Order  []Order              `json:"order" `
}

type CartsResponse struct {
	ID     int                  `json:"id"`
	Status string               `json:"status"`
	Qty    string               `json:"qty"`
	UserID int                  `json:"user_id"`
	User   UsersProfileResponse `json:"user"`
}

func (CartsResponse) TableName() string {
	return "carts"
}
