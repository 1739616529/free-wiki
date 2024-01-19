package router

import (
	"fmt"
	"free-wiki/controller"
	"github.com/gin-gonic/gin"
)

func CreateCatalogRouter(r *gin.Engine) {
	group := r.Group("/catalog")

	catalog := controller.New()

	fmt.Println("test")

	group.POST("/query", catalog.Query)
}
