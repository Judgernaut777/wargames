package helpers

import (
	"log"
	"os"

	"github.com/joho/godotenv"
)

func InitEnv() {
	err := godotenv.Load(".env")

	if err != nil {
		log.Fatalf("Error loading .env file")
	}
}

// GetEnv returns the value of the environment variable named by key.
// Exported so callers outside this package (e.g. main) can use it.
func GetEnv(key string) string {
	return os.Getenv(key)
}
