package controller

import (
	"free-wiki/model"
	"free-wiki/util"
	"github.com/gin-gonic/gin"
)

type CatalogController struct {
	modelUser model.CatalogModel
}

func New() *CatalogController {
	return &CatalogController{
		modelUser: model.CatalogModel{},
	}
}

func (r *CatalogController) Query(c *gin.Context) {
	PostData := util.PostJsonToMap[int64](c)
	catalog, _ := r.modelUser.FindById(PostData["id"])

	c.JSON(util.ResponseJSON(catalog))
}
