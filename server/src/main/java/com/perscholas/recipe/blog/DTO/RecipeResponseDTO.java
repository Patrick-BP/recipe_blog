package com.perscholas.recipe.blog.DTO;

import com.perscholas.recipe.blog.models.Category;
import com.perscholas.recipe.blog.models.Role;
import com.perscholas.recipe.blog.models.User;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.time.LocalDateTime;
import java.util.Set;
@AllArgsConstructor
@NoArgsConstructor
@Setter
@Getter
public class RecipeResponseDTO {
    private Long id;
    private String Title;
    private String image;
    private String description;
    private String instructions;
    private Long user_id;
    private String user_name;
    private LocalDateTime createdAt;
    private Category category;

}
