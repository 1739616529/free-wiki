package util

import "os"

func EnsureDir(dir string) (err error) {
	_, err = os.Stat(dir)

	if os.IsNotExist(err) {
		err = os.MkdirAll(dir, os.ModePerm)
	}
	return
}
