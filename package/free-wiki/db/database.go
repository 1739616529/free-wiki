package db

import (
	"fmt"
	"free-wiki/config"
	_ "github.com/mattn/go-sqlite3"
	"time"
	"xorm.io/xorm"
)

var Engine *xorm.Engine

func init() {
	var err error

	Engine, err = xorm.NewEngine("sqlite3", config.Config.DbPath)

	if err != nil {
		panic("create sqlite3 engine error: " + err.Error())
	}

	if config.Config.WorkEnv == "local" {
		Engine.ShowSQL(true)
	}

	Engine.SetMaxIdleConns(100)
	Engine.SetMaxOpenConns(10)
	Engine.SetConnMaxLifetime(time.Hour)
}

type Model struct {
	Id        uint      `json:"id,omitempty"`
	CreatedAt time.Time `json:"created_at"`
	UpdatedAt time.Time `json:"updated_at"`
	DeletedAt time.Time `json:"deleted_at"`
	Version   string    `json:"version,omitempty"`
}

func SyncEntity(entity interface{}) {
	err := Engine.Sync(entity)
	if err != nil {
		panic(fmt.Sprintf("sync table error: %s", entity))
	}
}
