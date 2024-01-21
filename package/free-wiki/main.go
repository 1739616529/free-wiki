package main

import (
	"fmt"
	"free-wiki/config"
	"free-wiki/router"
	"github.com/go-playground/validator/v10"
	"github.com/kataras/iris/v12"
)

func main() {
	app := iris.New()

	app.Validator = validator.New()

	router.CreateRouter(app)

	app.Listen(fmt.Sprintf(":%s", config.Config.Port))
}
