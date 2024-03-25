package com.BihiziPatrick.recipeBlog;

import com.BihiziPatrick.recipeBlog.models.Recipe;
import com.BihiziPatrick.recipeBlog.models.User;
import com.BihiziPatrick.recipeBlog.repositories.RecipeRepository;
import com.BihiziPatrick.recipeBlog.repositories.UserRepository;
import com.BihiziPatrick.recipeBlog.services.RecipeService;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.Mockito;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.Mockito.*;

@SpringBootTest
class RecipeBlogApplicationTests {

	@Autowired
	RecipeRepository recipeRepository;

	@Autowired
	RecipeService recipeService;

	@Autowired
	UserRepository userRepository;




	@BeforeEach
	void setUp() {
		recipeRepository = mock(RecipeRepository.class);
		userRepository = mock(UserRepository.class);
		recipeService = new RecipeService(recipeRepository, userRepository);
	}

	@Test
	void testGetAllRecipes() {
		List<Recipe> expectedRecipes = new ArrayList<>();
		when(recipeRepository.findAll()).thenReturn(expectedRecipes);
		List<Recipe> actualRecipes = recipeService.getAllRecipes();
		assertEquals(expectedRecipes, actualRecipes);
	}

	@Test
	void testGetRecipeById() {
		Recipe expectedRecipe = new Recipe();
		Long id = 1L;
		when(recipeRepository.findRecipeById(id)).thenReturn(expectedRecipe);
		Recipe actualRecipe = recipeService.getRecipeById(id);
		assertEquals(expectedRecipe, actualRecipe);
	}
	@Test
	void testGetRecipeByUser() {
		Long userId = 1L;
		Optional<User> user = Optional.of(new User()); // Create a sample user
		when(userRepository.findById(userId)).thenReturn(user);
		List<Recipe> expectedRecipes = new ArrayList<>();
		when(recipeRepository.findRecipeByUser(user)).thenReturn(expectedRecipes);
		List<Recipe> actualRecipes = recipeService.getRecipeByUser(userId);
		assertEquals(expectedRecipes, actualRecipes);
	}

	@Test
	void testCreateRecipe_Success() {
		Recipe recipe = new Recipe(); // Create a sample recipe
		ResponseEntity<String> response = recipeService.createRecipe(recipe);
		assertEquals(HttpStatus.OK, response.getStatusCode());
		assertEquals("New Recipe Added", response.getBody());
	}

	@Test
	void testCreateRecipe_Exception() {
		Recipe recipe = new Recipe(); // Create a sample recipe
		when(recipeRepository.save(recipe)).thenThrow(new RuntimeException());
		ResponseEntity<String> response = recipeService.createRecipe(recipe);
		assertEquals(HttpStatus.INTERNAL_SERVER_ERROR, response.getStatusCode());
		assertEquals("Something went wrong", response.getBody());
	}

	@Test
	void testDeleteRecipe() {
		Long id = 1L;
		recipeService.deleteRecipe(id);
		verify(recipeRepository).deleteById(id);
	}

	@Test
	void testUpdateRecipe_Success() {
		Recipe recipe = new Recipe(); // Create a sample recipe
		when(recipeRepository.findById(recipe.getId())).thenReturn(Optional.of(recipe));
		ResponseEntity<String> response = recipeService.updateRecipe(recipe);
		assertEquals(HttpStatus.OK, response.getStatusCode());
		assertEquals("Recipe updated", response.getBody());
	}

	@Test
	void testUpdateRecipe_NotFound() {
		Recipe recipe = new Recipe(); // Create a sample recipe
		when(recipeRepository.findById(recipe.getId())).thenReturn(Optional.empty());
		assertThrows(RuntimeException.class, () -> recipeService.updateRecipe(recipe));
	}

	@Test
	void testUpdateRecipe_Exception() {
		Recipe recipe = new Recipe(); // Create a sample recipe
		when(recipeRepository.findById(recipe.getId())).thenReturn(Optional.of(recipe));
		when(recipeRepository.save(recipe)).thenThrow(new RuntimeException());
		ResponseEntity<String> response = recipeService.updateRecipe(recipe);
		assertEquals(HttpStatus.INTERNAL_SERVER_ERROR, response.getStatusCode());
		assertEquals("Something went wrong", response.getBody());
	}

}
