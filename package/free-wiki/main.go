package main

import (
	"free-wiki/router"
)

func main() {
	r := router.CreateRouter()
	r.Run("127.0.0.1:7001")
}
