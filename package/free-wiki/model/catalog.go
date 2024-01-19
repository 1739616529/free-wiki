package model

import "free-wiki/db"

type CatalogModel struct {
	ID          int64  `json:"id"`
	Label       string `json:"label"`
	Pid         int64  `json:"pid"`
	Description string `json:"description"`
}

func (r *CatalogModel) FindById(id int64) (
	catalog CatalogModel,
	err error,
) {

	var catalogItem CatalogModel
	db.Db.Where("id = ?", id).First(&catalog)

	return catalogItem, nil
}
