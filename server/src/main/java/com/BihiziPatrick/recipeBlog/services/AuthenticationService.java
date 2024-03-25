package com.perscholas.recipe.blog.services;

import com.perscholas.recipe.blog.DTO.LoginResponseDTO;
import com.perscholas.recipe.blog.DTO.UserResponseDTO;
import com.perscholas.recipe.blog.models.Role;
import com.perscholas.recipe.blog.models.User;
import com.perscholas.recipe.blog.repositories.RoleRepository;
import com.perscholas.recipe.blog.repositories.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.AuthenticationException;

import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.HashSet;
import java.util.Optional;
import java.util.Set;

@Service
@Transactional
public class AuthenticationService {
    @Autowired
    private UserRepository userRepository;

    @Autowired
    private RoleRepository roleRepository;

    @Autowired
    PasswordEncoder passwordEncoder;

    @Autowired
    private AuthenticationManager authenticationManager;

    @Autowired
    private TokenService tokenService;


    public ResponseEntity<String>  registerUser(String name, String email, String password){
       boolean findUser = userRepository.existsByEmail(email);

       if (findUser) {return ResponseEntity.status(HttpStatus.CONFLICT).body("Email already exist");}
        try {
            String encodedPassword = passwordEncoder.encode(password);
            Role userRole = roleRepository.findByAuthority("USER").get();
            Set<Role> authorities = new HashSet<>();
            authorities.add(userRole);
            User savedUser = userRepository.save(new User(name, email, encodedPassword, authorities));
            return ResponseEntity.ok().body("Account Created Successfully");
        }catch (Exception e){
            return ResponseEntity.status(500).body("Something went wrong");
        }
    }

    public LoginResponseDTO login(String email, String password){
        try{
            Authentication auth = authenticationManager.authenticate(
                    new UsernamePasswordAuthenticationToken(email, password)
            );
            String token = tokenService.generateJwt(auth);
            User user = userRepository.findUserByEmail(email).get();

            UserResponseDTO userInfo = new UserResponseDTO(user.getId(), user.getName(), user.getEmail(), (Set<Role>) user.getAuthorities());
            return  new LoginResponseDTO(userInfo, token);
        }catch (AuthenticationException e){

            return new LoginResponseDTO(null, "");
        }
    }
}
