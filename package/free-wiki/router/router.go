package router

import "github.com/gin-gonic/gin"

func CreateRouter() *gin.Engine {
	r := gin.Default()

	CreateCatalogRouter(r)
	return r
}
