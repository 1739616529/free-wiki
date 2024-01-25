package entity

import "free-wiki/db"

type CatalogEntity struct {
	db.Model
	Label       string  `json:"label,omitempty" xorm:"varchar(25) notnull"`
	Type        string  `json:"type,omitempty" xorm:"varchar(25) notnull"`
	Pre         *uint   `json:"pre,omitempty" xorm:"varchar(8)"`
	Description *string `json:"description,omitempty"xorm:"varchar(100)"`
}

func (e CatalogEntity) TableName() string {
	return "catalog"
}

func init() {
	db.SyncEntity(CatalogEntity{})
}
