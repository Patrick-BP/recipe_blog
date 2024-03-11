package com.perscholas.recipe.blog.DTO;

import com.perscholas.recipe.blog.models.Role;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;

import java.util.Set;

@AllArgsConstructor
@Setter
@Getter
public class UserResponseDTO {

    private Long id;
    private String name;
    private String email;
    private Set<Role> roles;

}
