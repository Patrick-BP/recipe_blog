package com.BihiziPatrick.recipeBlog.Controllers;

import com.BihiziPatrick.recipeBlog.DTO.CommentResponseDTO;
import com.BihiziPatrick.recipeBlog.models.Comment;
import com.BihiziPatrick.recipeBlog.services.CommentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.stream.Collectors;
@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api/recipe/com")
public class CommentController {

    @Autowired
    CommentService commentService;

    @PostMapping("/new")
    public ResponseEntity<String> newComment(@RequestBody Comment comment){
        return commentService.newComment(comment);
    }
    @GetMapping("/all/{recipe_id}")
    public List<CommentResponseDTO> getAllCommentByRecipe(@PathVariable Long recipe_id){

        return commentService.getAllCommentByRecipe(recipe_id).stream().map(comment ->{
            CommentResponseDTO commentDTO = new CommentResponseDTO();
            commentDTO.setComment_text(comment.getComment_text());
            commentDTO.setId(comment.getId());
            commentDTO.setCreatedAt(comment.getTimestamp());
            commentDTO.setUser_id(comment.getUser().getId());
            commentDTO.setUser_name(comment.getUser().getName());
            return commentDTO;
        }).collect(Collectors.toList());

    }
    @DeleteMapping("/del/{comment_id}")
    public ResponseEntity<String> deleteComment(@PathVariable Long comment_id){
        return commentService.deleteComment(comment_id);
    }
}
