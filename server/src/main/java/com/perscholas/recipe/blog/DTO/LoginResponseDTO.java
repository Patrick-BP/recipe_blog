package com.perscholas.recipe.blog.DTO;

import com.perscholas.recipe.blog.models.User;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
public class LoginResponseDTO {
    private UserResponseDTO user;
    private String jwt;

}
