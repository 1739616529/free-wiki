package main

import (
	"fmt"
	"free-wiki/config"
	"free-wiki/router"
	"free-wiki/validate"
	"github.com/kataras/iris/v12"
)

func main() {

	var err error
	//test.BookDemo()
	app := iris.New()
	app.Validator = validate.GetValidate()
	router.CreateRouter(app)

	err = app.Listen(fmt.Sprintf(":%s", config.Config.Port))

	if err != nil {
		panic(fmt.Sprintf("iris app listen port %s error: %s", config.Config.Port, err.Error()))
	}
}
