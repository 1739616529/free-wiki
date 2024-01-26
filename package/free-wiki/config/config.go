package config

import (
	"fmt"
	"free-wiki/util"
	"os"
	"path/filepath"
)

type BaseConfig struct {

	/* 服务端口号 */
	Port string

	/* 页面资源存放位置 */
	FreeWikiPath string

	/* db文件存储位置 */
	DbPath string

	/* 工作 环境 */
	WorkEnv string

	/* 工作 目录 */
	WorkDir string
}

var Config BaseConfig

func init() {

	var err error
	/* 工作目录 */
	workDir := os.Getenv("FREE_WIKI_WORK_DIR")
	if workDir == "" {
		workDir, _ = os.Getwd()

		if workDir == "" {
			panic("get workDir error")
		}
	}
	workDir = filepath.Join(workDir, "FREE_WIKI")
	err = util.EnsureDir(workDir)
	if err != nil {
		panic("init FREE_WIKI error")
	}

	/* 工作环境 */
	workEnv := os.Getenv("FREE_WIKI_WORK_ENV")
	if workEnv == "" {
		workEnv = "local"
	}
	dbPath := filepath.Join(workDir, fmt.Sprintf("%s.db", workEnv))

	port := os.Getenv("FREE_WIKI_WORK_PORT")
	if port == "" {
		port = "7001"
	}

	fmt.Println("Executable path:", dbPath)
	Config = BaseConfig{
		Port:         port,
		FreeWikiPath: workDir,
		DbPath:       dbPath,
		WorkEnv:      workDir,
		WorkDir:      workDir,
	}
}
