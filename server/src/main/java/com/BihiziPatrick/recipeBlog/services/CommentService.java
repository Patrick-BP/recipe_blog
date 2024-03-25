package com.BihiziPatrick.recipeBlog.services;

import com.BihiziPatrick.recipeBlog.models.Comment;
import com.BihiziPatrick.recipeBlog.models.Recipe;
import com.BihiziPatrick.recipeBlog.repositories.CommentRepository;
import com.BihiziPatrick.recipeBlog.repositories.RecipeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
public class CommentService {

    @Autowired
    CommentRepository commentRepository;
    @Autowired
    private RecipeRepository recipeRepository;

    public CommentService(CommentRepository commentRepository, RecipeRepository recipeRepository) {
        this.commentRepository = commentRepository;
        this.recipeRepository = recipeRepository;
    }

    public ResponseEntity<String> newComment(Comment comment){
        System.out.println(comment);
        try{
            Comment newComment = new Comment();
            newComment.setComment_text(comment.getComment_text());
            newComment.setUser(comment.getUser());
            newComment.setRecipe(comment.getRecipe());
            commentRepository.save(newComment);
            return ResponseEntity.ok("comment posted");
        }catch(Exception e){
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Something went wrong");
        }

    }

    public List<Comment> getAllCommentByRecipe(Long recipe_id){
            Optional<Recipe> findRecipe = Optional.ofNullable(recipeRepository.findById(recipe_id).orElseThrow(() -> new RuntimeException("Recipe Not Found")));
            List<Comment> comments = new ArrayList<>();
            commentRepository.findCommentByRecipe(findRecipe).forEach(comments::add);
            return comments;

    }

    public ResponseEntity<String> deleteComment( Long comment_id){
        try{
            commentRepository.deleteById(comment_id);
            return ResponseEntity.ok("comment deleted");
        }catch(Exception e){
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Something went wrong");
        }

    }

}
