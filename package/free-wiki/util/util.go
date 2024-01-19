package util

import (
	"encoding/json"
	"github.com/gin-gonic/gin"
)

func JsonToMap[T string | int64](jsonData []byte) map[string]T {
	var m map[string]T
	json.Unmarshal(jsonData, &m)
	return m
}

func PostJsonToMap[T string | int64](ctx *gin.Context) map[string]T {
	jsonData, _ := ctx.GetRawData()

	m := JsonToMap[T](jsonData)
	return m
}
