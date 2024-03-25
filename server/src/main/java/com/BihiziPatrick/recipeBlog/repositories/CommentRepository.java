package com.perscholas.recipe.blog.repositories;

import com.perscholas.recipe.blog.models.Comment;
import com.perscholas.recipe.blog.models.Recipe;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface CommentRepository extends JpaRepository<Comment, Long> {
    List<Comment> findCommentByRecipe(Optional<Recipe> recipe);
}
