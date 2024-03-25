package com.BihiziPatrick.recipeBlog.DTO;

import com.BihiziPatrick.recipeBlog.models.Role;
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
