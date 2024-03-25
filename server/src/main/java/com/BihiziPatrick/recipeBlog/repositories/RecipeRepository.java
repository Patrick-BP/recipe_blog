package com.BihiziPatrick.recipeBlog.repositories;

import com.BihiziPatrick.recipeBlog.models.Recipe;
import com.BihiziPatrick.recipeBlog.models.User;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;
import java.util.Optional;

public interface RecipeRepository extends JpaRepository<Recipe, Long> {
    Recipe findRecipeById(Long recipe_id);
    List<Recipe> findRecipeByUser(Optional<User> user);
}
