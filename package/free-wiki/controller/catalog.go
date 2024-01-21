package controller

import (
	"fmt"
	"free-wiki/dto"
	"free-wiki/service"
	"github.com/kataras/iris/v12"
)

type CatalogController struct {
	/* dependencies */
	Ctx            iris.Context
	CatalogService service.CatalogService
}

func (s *CatalogController) PostQuery() string {

	var query dto.QueryCatalogDTO
	err := s.Ctx.ReadJSON(&query)
	fmt.Println(err)
	return s.CatalogService.Query()
}
