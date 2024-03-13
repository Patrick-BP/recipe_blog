package com.perscholas.recipe.blog.Controllers;

import com.perscholas.recipe.blog.DTO.LoginResponseDTO;
import com.perscholas.recipe.blog.DTO.RegistrationDTO;
import com.perscholas.recipe.blog.models.User;
import com.perscholas.recipe.blog.services.AuthenticationService;
import com.perscholas.recipe.blog.services.UserService;
import jakarta.servlet.Registration;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;
@CrossOrigin("*")
@RestController
@RequestMapping("/api")
public class UserController {

    @Autowired
    UserService userService;
    @Autowired
    AuthenticationService authenticationService;


    @GetMapping("/user/{id}")
    public ResponseEntity<User> getUserById(@PathVariable Long id){
        return userService.getUserById(id);
    }
    @GetMapping("/user/all")
    public List<User> getAllUsers(){
        List<User> usersList = userService.getAllUsers();
       return usersList;
    }
    @PostMapping("/auth/register")
    public void createUser(@RequestBody RegistrationDTO user){
        authenticationService.registerUser(user.getName(), user.getEmail(), user.getPassword());
    }

    @PostMapping("/auth/login")
    public LoginResponseDTO loginUser(@RequestBody RegistrationDTO body){
        return authenticationService.login(body.getEmail(), body.getPassword());
    }
}
