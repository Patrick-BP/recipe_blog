package com.perscholas.recipe.blog.Controllers;

import com.perscholas.recipe.blog.DTO.RecipeResponseDTO;
import com.perscholas.recipe.blog.models.Recipe;
import com.perscholas.recipe.blog.services.RecipeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.stream.Collectors;


@RestController
@RequestMapping("/api/recipe")
@CrossOrigin(origins = "http://localhost:3000")
public class recipeController {

    @Autowired
    RecipeService recipeService;

    @GetMapping("/{id}")
    public Recipe getRecipeById(@PathVariable Long id){
        return recipeService.getRecipeById(id);
    }
    @GetMapping("/all")
    public List<RecipeResponseDTO> getAllRecipes(){
       return recipeService.getAllRecipes().stream().map(recipe2->{
            RecipeResponseDTO recipeDTO = new RecipeResponseDTO();
            recipeDTO.setId(recipe2.getId());
            recipeDTO.setTitle(recipe2.getTitle());
            recipeDTO.setDescription(recipe2.getDescription());
            recipeDTO.setInstructions(recipe2.getInstructions());
            recipeDTO.setImage(recipe2.getImage());
            recipeDTO.setUser_id(recipe2.getUser().getId());
            recipeDTO.setUser_name(recipe2.getUser().getName());
            recipeDTO.setCreatedAt(recipe2.getCreatedAt());
            recipeDTO.setCategory(recipe2.getCategory());
            recipeDTO.setIngredients(recipe2.getIngredients());
            return recipeDTO;
        }).collect(Collectors.toList());

    }

    @GetMapping("/user/{id}")
    public  List<RecipeResponseDTO> getUserRecipes(@PathVariable Long id){

        return recipeService.getRecipeByUser(id).stream().map(recipe->{
            RecipeResponseDTO recipeDTO = new RecipeResponseDTO();
            recipeDTO.setId(recipe.getId());
            recipeDTO.setTitle(recipe.getTitle());
            recipeDTO.setDescription(recipe.getDescription());
            recipeDTO.setInstructions(recipe.getInstructions());
            recipeDTO.setImage(recipe.getImage());
            recipeDTO.setUser_id(recipe.getUser().getId());
            recipeDTO.setUser_name(recipe.getUser().getName());
            recipeDTO.setCreatedAt(recipe.getCreatedAt());
            recipeDTO.setCategory(recipe.getCategory());
            recipeDTO.setIngredients(recipe.getIngredients());
            return recipeDTO;
        }).collect(Collectors.toList());
    }
    @PostMapping("/new")
    public ResponseEntity<String> createRecipe(@RequestBody Recipe recipe){
        System.out.println(recipe);
       return recipeService.createRecipe(recipe);
    }
    @PutMapping("/update/recipe")
    public ResponseEntity<String> updateRecipe(@RequestBody Recipe recipe){
        return recipeService.updateRecipe(recipe);
    }

    @DeleteMapping("/del/{id}")
    public void deleteRecipe(@PathVariable Long id){
        recipeService.deleteRecipe(id);
    }
}
