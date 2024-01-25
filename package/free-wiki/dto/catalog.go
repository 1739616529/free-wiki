package dto

type QueryCatalogDTO struct {
	Id  uint `json:"id" validate:"required_without=pre"`
	Pre uint `json:"pre" validate:"required_without=id"`
}

type CreateCatalogDTO struct {
	Label      string  `json:"label" validate:"lt=100,required"`
	Type       string  `json:"type" validate:"catalogType,required"`
	Descriptor *string `json:"descriptor"`
	Pre        *uint   `json:"pre"`
}
