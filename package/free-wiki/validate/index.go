package validate

import (
	"github.com/go-playground/validator/v10"
	"github.com/sirupsen/logrus"
)

var Validate *validator.Validate

func GetValidate() *validator.Validate {
	if Validate == nil {
		Validate = validator.New()
	}
	return Validate
}

func RegisterValidation(tag string, fn validator.Func) {

	if err := GetValidate().RegisterValidation(tag, fn); err != nil {
		logrus.Fatalf("register validator for '%s' error: %v", tag, err)
	}
}
