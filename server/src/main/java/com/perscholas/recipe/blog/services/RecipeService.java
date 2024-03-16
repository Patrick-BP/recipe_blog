package com.perscholas.recipe.blog.services;

import com.perscholas.recipe.blog.DTO.RecipeResponseDTO;
import com.perscholas.recipe.blog.models.Recipe;
import com.perscholas.recipe.blog.models.User;
import com.perscholas.recipe.blog.repositories.RecipeRepository;
import com.perscholas.recipe.blog.repositories.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.*;

@Service
public class RecipeService {



    @Autowired
    RecipeRepository recipeRepository;

    @Autowired
    UserRepository userRepository;
    public List<Recipe> getAllRecipes(){
        return recipeRepository.findAll();
    }
    public Recipe getRecipeById(Long id)  {
        return recipeRepository.findRecipeById(id);
    }
    public List<Recipe> getRecipeByUser(Long id){
       Optional<User> findUser = Optional.ofNullable(userRepository.findById(id).orElseThrow(() -> new RuntimeException("User Not Found")));
        List<Recipe> userRecipesList = new ArrayList<>();
        recipeRepository.findRecipeByUser(findUser).forEach(userRecipesList::add);
        return userRecipesList;
    }

    public ResponseEntity<String> createRecipe(Recipe recipe){
        Recipe newRecipe = new Recipe();
        newRecipe.setTitle(recipe.getTitle());
        newRecipe.setDescription(recipe.getDescription());
        newRecipe.setInstructions(recipe.getInstructions());
        newRecipe.setImage(recipe.getImage());
        newRecipe.setUser(recipe.getUser());
        newRecipe.setCategory(recipe.getCategory());
        recipeRepository.save(newRecipe);
        return ResponseEntity.ok("New Recipe Added");
    }

    public void deleteRecipe(Long id){
        recipeRepository.deleteById(id);
    }

    public ResponseEntity<String> updateRecipe(Recipe recipe){
        Optional<Recipe> optionalRecipe = recipeRepository.findById(recipe.getId());

        if (optionalRecipe.isPresent()) {
            Recipe recipeToUpdate = optionalRecipe.get();
            recipeToUpdate.setTitle(recipe.getTitle());
            recipeToUpdate.setDescription(recipe.getDescription());
            recipeToUpdate.setInstructions(recipe.getInstructions());
            recipeToUpdate.setImage(recipe.getImage());
            recipeToUpdate.setCategory(recipe.getCategory());
            try{
                recipeRepository.save(recipe);
                return  ResponseEntity.ok("Recipe updated");
            }catch(Exception e){
                return  ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Something went wrong");
            }


        } else {
            throw new RuntimeException("Recipe Not Found");
        }
    }
}
