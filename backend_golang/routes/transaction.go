package routes

import (
	"backend/handlers"
	"backend/pkg/mysql"
	"backend/repositories"

	"github.com/gorilla/mux"
)

func TransactionRoutes(r *mux.Router) {
	transactionRepository := repositories.RepositoryCart(mysql.DB)
	h := handlers.HandlerTransaction(transactionRepository)

	r.HandleFunc("/transaction/{id}", h.GetTransaction).Methods("GET")
	r.HandleFunc("/transaction", h.CreateTransaction).Methods("POST")
	// r.HandleFunc("/cart/{id}", h.UpdateTransaction).Methods("PATCH")
	// r.HandleFunc("/cart/pending", h.FindPendingCart("GET"))
	// r.HandleFunc("/orders/{id}", h.GetOrderByCart).Methods("GET")
}
