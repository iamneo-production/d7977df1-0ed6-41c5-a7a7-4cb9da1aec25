package com.examly.springapp;

import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.RequestMapping;

@RestController
public class HelloResources {

    @RequestMapping({"/hello"})
    public String hello(){
        return "Hello World";
    }
    
}
