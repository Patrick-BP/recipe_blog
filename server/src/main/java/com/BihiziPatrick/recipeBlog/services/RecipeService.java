package com.BihiziPatrick.recipeBlog.services;

import com.BihiziPatrick.recipeBlog.repositories.RecipeRepository;
import com.BihiziPatrick.recipeBlog.repositories.UserRepository;
import com.BihiziPatrick.recipeBlog.models.Recipe;
import com.BihiziPatrick.recipeBlog.models.User;
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

    public RecipeService(RecipeRepository recipeRepository, UserRepository userRepository) {
        this.recipeRepository = recipeRepository;
        this.userRepository = userRepository;
    }

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
        try{
            Recipe newRecipe = new Recipe();
            newRecipe.setTitle(recipe.getTitle());
            newRecipe.setDescription(recipe.getDescription());
            newRecipe.setInstructions(recipe.getInstructions());
            newRecipe.setImage(recipe.getImage());
            newRecipe.setUser(recipe.getUser());
            newRecipe.setCategory(recipe.getCategory());
            newRecipe.setIngredients(recipe.getIngredients());
            recipeRepository.save(newRecipe);
            return ResponseEntity.ok("New Recipe Added");
        }catch(Exception e){
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Something went wrong");
        }

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
            recipeToUpdate.setIngredients(recipe.getIngredients());
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
