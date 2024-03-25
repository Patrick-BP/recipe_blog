package com.BihiziPatrick.recipeBlog.DTO;

import com.BihiziPatrick.recipeBlog.models.Category;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.time.LocalDateTime;

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
    private String ingredients;

}
