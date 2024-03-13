package com.perscholas.recipe.blog.services;

import com.perscholas.recipe.blog.models.Recipe;
import com.perscholas.recipe.blog.models.Role;
import com.perscholas.recipe.blog.models.User;
import com.perscholas.recipe.blog.repositories.RecipeRepository;
import com.perscholas.recipe.blog.repositories.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.context.config.ConfigDataResourceNotFoundException;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.web.client.ResourceAccessException;

import java.util.ArrayList;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

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
//    public List<Recipe> getRecipeByUser(Long id){
//        List<Recipe> userRecipesList = new ArrayList<>();
//        User user = userRepository.findUserById(id);
//
//        recipeRepository.findRecipeByUser(user).forEach(userRecipesList::add);
//        return userRecipesList;
//    }

    public void createRecipe(Recipe recipe){
        Recipe newRecipe = new Recipe();
        newRecipe.setTitle(recipe.getTitle());
        newRecipe.setDescription(recipe.getDescription());
        newRecipe.setInstructions(recipe.getInstructions());
        recipeRepository.save(newRecipe);
    }


}
