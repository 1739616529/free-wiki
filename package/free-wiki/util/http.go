package util

import (
	"github.com/gin-gonic/gin"
	"net/http"
)

func ResponseJSON(data interface{}) (int, any) {
	if data == nil {
		return http.StatusOK, gin.H{
			"code": 404,
			"msg":  "not found",
			"data": nil,
		}

	}

	return http.StatusOK, gin.H{
		"code": 200,
		"msg":  "ok",
		"data": data,
	}
}
