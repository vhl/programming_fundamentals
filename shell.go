package main

import (
  "fmt"
  "log"
  "os"
  "os/exec"
  "path/filepath"
)

func main() {
  // array for base filenames
  var base_names []string

  // change into image directory
  err := os.Chdir("image_batch")

  // get all png files
  files, err := filepath.Glob("*.png")

  // create an array of base filenames
  for _, file := range files {
    var name = file[0:len(file)-len(filepath.Ext(file))]
    base_names = append(base_names, name)
  }

  // convert each png image to jpg
  for _, name := range base_names {
    cmd := "convert"
    args := []string{fmt.Sprintf("%s.png", name), fmt.Sprintf("%s.jpg", name)}
    if err := exec.Command(cmd, args...).Run(); err != nil {
      fmt.Fprintln(os.Stderr, err)
      os.Exit(1)
    }
    fmt.Printf("Successfully converted %s.png to jpg\n", name)
  }

  if err != nil {
    log.Fatal(err)
  }

  // print filenames
  fmt.Println(filepath.Glob("*.png"))
}
