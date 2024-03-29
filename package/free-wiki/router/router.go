package router

import (
	"free-wiki/controller"
	"github.com/kataras/iris/v12"
	"github.com/kataras/iris/v12/mvc"
)

func CreateRouter(app *iris.Application) {
	api := app.Party("/api")

	api.Use(iris.Compression)

	mvc.New(api.Party("/catalog")).Handle(new(controller.CatalogController))

}
