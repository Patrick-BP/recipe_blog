package com.BihiziPatrick.recipeBlog.Controllers;

import com.BihiziPatrick.recipeBlog.DTO.LoginResponseDTO;
import com.BihiziPatrick.recipeBlog.DTO.RegistrationDTO;
import com.BihiziPatrick.recipeBlog.DTO.UserResponseDTO;
import com.BihiziPatrick.recipeBlog.models.Role;
import com.BihiziPatrick.recipeBlog.models.User;
import com.BihiziPatrick.recipeBlog.services.AuthenticationService;
import com.BihiziPatrick.recipeBlog.services.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Set;

@CrossOrigin(origins = "http://localhost:3000")
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
    public List<UserResponseDTO> getAllUsers(){
        List<UserResponseDTO> usersList = userService.getAllUsers();
      return usersList;
    }
    @PostMapping("/auth/register")
    public ResponseEntity<String> createUser(@RequestBody RegistrationDTO user){
       return authenticationService.registerUser(user.getName(), user.getEmail(), user.getPassword());
    }

    @PostMapping("/auth/login")
    public LoginResponseDTO loginUser(@RequestBody RegistrationDTO body){
        return authenticationService.login(body.getEmail(), body.getPassword());
    }
    @PutMapping("/admin/user/{id}")
    public ResponseEntity<String> updateRole(@PathVariable Long id, @RequestBody Set<Role> role){
        return userService.changeRoles(id, role);
    }
}
