package service

import (
	"free-wiki/db"
	"free-wiki/dto"
	"free-wiki/entity"
)

type CatalogService struct {
}

func (r *CatalogService) QueryCatalog(query *dto.QueryCatalogDTO) []entity.CatalogEntity {

	var catalogList []entity.CatalogEntity
	db.Engine.Where("id = ?, pre = ?", query.Id, query.Pre).Query(&catalogList)

	return catalogList
}
