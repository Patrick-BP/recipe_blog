package com.perscholas.recipe.blog.Controllers;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api")
@CrossOrigin("*")
public class AdminController {
    @GetMapping("/admin")
    public String HelloAdminController(){
        System.out.println("hello");
        return "Admin level access";
    }
}
