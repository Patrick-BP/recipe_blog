package com.perscholas.recipe.blog.repositories;

import com.perscholas.recipe.blog.models.Recipe;
import com.perscholas.recipe.blog.models.User;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;
import java.util.Optional;

public interface RecipeRepository extends JpaRepository<Recipe, Long> {
    Recipe findRecipeById(Long recipe_id);
    List<Recipe> findRecipeByUser(Optional<User> user);
}
