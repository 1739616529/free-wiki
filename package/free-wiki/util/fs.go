package util

import "os"

func EnsureDir(dir string) {
	_, err := os.Stat(dir)

	if os.IsNotExist(err) {
		os.MkdirAll(dir, os.ModePerm)
	}
}
