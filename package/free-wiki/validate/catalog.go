package validate

import "github.com/go-playground/validator/v10"

const (
	catalogType = "catalogType"
)

func init() {
	RegisterValidation(catalogType, CatalogType)
}

func CatalogType(fl validator.FieldLevel) bool {
	catalogType := fl.Field().String()
	return catalogType == "file" || catalogType == "catalog"
}
