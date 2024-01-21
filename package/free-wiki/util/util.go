package util

import (
	"encoding/json"
)

func JsonToMap[T string | int64](jsonData []byte) map[string]T {
	var m map[string]T
	json.Unmarshal(jsonData, &m)
	return m
}
