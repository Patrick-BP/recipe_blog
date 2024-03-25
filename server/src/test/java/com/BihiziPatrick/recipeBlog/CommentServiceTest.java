package com.BihiziPatrick.recipeBlog;
import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.Mockito.*;

import com.BihiziPatrick.recipeBlog.models.Comment;
import com.BihiziPatrick.recipeBlog.models.Recipe;
import com.BihiziPatrick.recipeBlog.repositories.CommentRepository;
import com.BihiziPatrick.recipeBlog.repositories.RecipeRepository;
import com.BihiziPatrick.recipeBlog.services.CommentService;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;
public class CommentServiceTest {

    private CommentRepository commentRepository;
    private RecipeRepository recipeRepository;
    private CommentService commentService;

    @BeforeEach
    void setUp() {
        commentRepository = mock(CommentRepository.class);
        recipeRepository = mock(RecipeRepository.class);
        commentService = new CommentService(commentRepository, recipeRepository);
    }

    @Test
    void testNewComment_Success() {
        Comment comment = new Comment(); // Create a sample comment
        ResponseEntity<String> response = commentService.newComment(comment);
        assertEquals(HttpStatus.OK, response.getStatusCode());
        assertEquals("comment posted", response.getBody());
    }

    @Test
    void testNewComment_Exception() {
        Comment comment = new Comment(); // Create a sample comment
        when(commentRepository.save(any(Comment.class))).thenThrow(new RuntimeException());
        ResponseEntity<String> response = commentService.newComment(comment);
        assertEquals(HttpStatus.INTERNAL_SERVER_ERROR, response.getStatusCode());
        assertEquals("Something went wrong", response.getBody());
    }

    @Test
    void testGetAllCommentByRecipe() {
        Long recipeId = 1L;
        Recipe recipe = new Recipe(); // Create a sample recipe
        Optional<Recipe> optionalRecipe = Optional.of(recipe);
        when(recipeRepository.findById(recipeId)).thenReturn(optionalRecipe);
        List<Comment> expectedComments = new ArrayList<>();
        when(commentRepository.findCommentByRecipe(optionalRecipe)).thenReturn(expectedComments);
        List<Comment> actualComments = commentService.getAllCommentByRecipe(recipeId);
        assertEquals(expectedComments, actualComments);
    }

    @Test
    void testGetAllCommentByRecipe_RecipeNotFound() {
        Long recipeId = 1L;
        when(recipeRepository.findById(recipeId)).thenReturn(Optional.empty());
        assertThrows(RuntimeException.class, () -> commentService.getAllCommentByRecipe(recipeId));
    }

    @Test
    void testDeleteComment_Success() {
        Long commentId = 1L;
        ResponseEntity<String> response = commentService.deleteComment(commentId);
        assertEquals(HttpStatus.OK, response.getStatusCode());
        assertEquals("comment deleted", response.getBody());
    }

    @Test
    void testDeleteComment_Exception() {
        Long commentId = 1L;
        doThrow(new RuntimeException()).when(commentRepository).deleteById(commentId);
        ResponseEntity<String> response = commentService.deleteComment(commentId);
        assertEquals(HttpStatus.INTERNAL_SERVER_ERROR, response.getStatusCode());
        assertEquals("Something went wrong", response.getBody());
    }
}
