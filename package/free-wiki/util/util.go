package util

import (
	"encoding/json"
)

func JsonToMap[T string | int64](jsonData []byte) (m map[string]T, err error) {
	err = json.Unmarshal(jsonData, &m)

	return
}
