package com.perscholas.recipe.blog.Controllers;

import com.perscholas.recipe.blog.models.Recipe;
import com.perscholas.recipe.blog.models.User;
import com.perscholas.recipe.blog.services.RecipeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/recipe")
public class recipeController {

    @Autowired
    RecipeService recipeService;

    @GetMapping("/{id}")
    public Recipe getRecipeById(@PathVariable Long id){
        return recipeService.getRecipeById(id);
    }
    @GetMapping("/all")
    public List<Recipe> getAllUsers(){
        List<Recipe> recipesList = recipeService.getAllRecipes();
        return recipesList;
    }
    @PostMapping("/new")
    public void createRecipe(@RequestBody Recipe recipe){
        recipeService.createRecipe(recipe);
    }
}
