package com.perscholas.recipe.blog.services;

import com.perscholas.recipe.blog.DTO.UserResponseDTO;
import com.perscholas.recipe.blog.exceptions.ResourceNotFoundException;
import com.perscholas.recipe.blog.models.Role;
import com.perscholas.recipe.blog.models.User;
import com.perscholas.recipe.blog.repositories.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.HashSet;
import java.util.List;
import java.util.Optional;
import java.util.Set;
import java.util.stream.Collectors;

@Service
public class UserService implements UserDetailsService {
    @Autowired
    private PasswordEncoder encoder;

    @Autowired
    UserRepository userRepository;

    public List<UserResponseDTO> getAllUsers(){

        return  userRepository.findAll().stream().map(user->{
            UserResponseDTO userRespoDTO = new UserResponseDTO();
            userRespoDTO.setId(user.getId());
            userRespoDTO.setName(user.getName());
            userRespoDTO.setEmail(user.getEmail());
            userRespoDTO.setRoles((Set<Role>) user.getAuthorities());

            return userRespoDTO;
        }).collect(Collectors.toList());

    }
    public ResponseEntity<User> getUserById(Long id){
        User user = userRepository.findUserById(id)
                .orElseThrow(()-> new ResourceNotFoundException("User not exit with id:" + id));
        return ResponseEntity.ok(user);
    }
    public void createUser(User user){
        User newUser = new User();
        newUser.setName(user.getName());
        newUser.setEmail(user.getEmail());
        newUser.setPassword(user.getPassword());
        userRepository.save(newUser);
    }

    @Override
    public UserDetails loadUserByUsername(String email) throws UsernameNotFoundException {
        return userRepository.findUserByEmail(email).orElseThrow(()-> new UsernameNotFoundException("Not user Found"));
    }

    public ResponseEntity<String> changeRoles(Long user_id, Set<Role> roles){
        try {
            Optional<User> findUser = Optional.ofNullable(userRepository.findUserById(user_id).orElseThrow(() -> new UsernameNotFoundException("Not user Found")));
            if(findUser.isPresent()){
                User user = findUser.get();
                user.setAuthorities(roles);
                userRepository.save(user);
                return ResponseEntity.ok("Roles updated successfully for user with ID: " + user_id);

            }else {
                return ResponseEntity.notFound().build();
            }
        }catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("An error occurred while updating roles.");
        }

    }
}
