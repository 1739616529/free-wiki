package dto

type QueryCatalogDTO struct {
	Id  uint `json:"id"`
	Pre uint `json:"pre"`
}

type CreateCatalogDTO struct {
	Label      string  `json:"label"`
	Type       string  `json:"type" validata:"contains='file'|'catalog',"`
	Descriptor *string `json:"descriptor"`
	Pre        *uint   `json:"pre"`
}
