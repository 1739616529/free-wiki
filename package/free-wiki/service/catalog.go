package service

import (
	"free-wiki/db"
	"free-wiki/dto"
	"free-wiki/entity"
)

type CatalogService struct {
}

func (r *CatalogService) QueryCatalog(query *dto.QueryCatalogDTO) (catalogList []entity.CatalogEntity, err error) {

	_, err = db.Engine.Where("id = ?, pre = ?", query.Id, query.Pre).Query(&catalogList)

	return
}
