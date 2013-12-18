package main

import (
    "fmt"
		"net/http"
		"os"
//		"encoding/json"
)

const (
		PortVar = "VCAP_APP_PORT"
)

func main() {
	  port := os.Getenv(PortVar)

	  http.HandleFunc("/", hello)

		if port == "" {
        port = "8080"
		}

		http.ListenAndServe(":"+port, nil)
}

func hello(res http.ResponseWriter, req *http.Request) {
	  env := os.Environ() 

	  // Dump the ENV 
		fmt.Fprintln(res, "ENV:\n")
		for _, e := range env {
        fmt.Fprintln(res, e)
		}

		// Get vcap services and print it out
//		var m interface{}
		fmt.Fprintln(res, "\nVCAP_SERVICES\n")
		fmt.Fprintln(res, os.Getenv("VCAP_SERVICES") )
//		cloud_services := json.Unmarshal(ENV["VAP_SERVICES"], &m)
//		for key, val := range m {
//        switch vval := v.(type) {
//            case string:
//                fmt.Fprintln(key, "is string", vval)
//						case []interface{}:
//							  fmt.Fprintln(key, "is an array:")
//							  for i, u := range vval {
//                    fmt.Fprintln(i, u)
//							  }
//					  default:
//							fmt.Fprintln(key, "is of a type I don't know")
//				}
//		}
}
