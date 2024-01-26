package controller

import (
	"free-wiki/dto"
	"free-wiki/entity"
	"free-wiki/service"
	"github.com/kataras/iris/v12"
)

type CatalogController struct {
	/* dependencies */
	Ctx iris.Context
	//CatalogService service.CatalogService
}

type Test struct {
	Id string `json:"id"`
}

func (s *CatalogController) PostQuery(query dto.QueryCatalogDTO) []entity.CatalogEntity {

	catalogService := service.CatalogService{}

	catalogList, _ := catalogService.QueryCatalog(&query)
	return catalogList
}
