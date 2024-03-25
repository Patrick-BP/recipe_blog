package com.perscholas.recipe.blog.DTO;

import com.perscholas.recipe.blog.models.Role;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.Set;

@AllArgsConstructor
@NoArgsConstructor
@Setter
@Getter
public class UserResponseDTO {

    private Long id;
    private String name;
    private String email;
    private Set<Role> roles;

}
