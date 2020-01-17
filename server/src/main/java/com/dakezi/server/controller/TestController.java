package com.dakezi.server.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping({"/api"})
public class TestController {

    public  TestController(){

    }
    @RequestMapping({"/invoke"})
    public String invoke(@RequestBody String req) {
        return "success";
    }
}
