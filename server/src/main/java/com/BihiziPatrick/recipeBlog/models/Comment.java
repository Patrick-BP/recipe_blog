package com.perscholas.recipe.blog.models;

import jakarta.persistence.*;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;
import java.util.Date;

@Entity
@NoArgsConstructor
@Data
public class Comment {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;
    @Column(nullable = false)
    private String comment_text;
    @Column(updatable = false, nullable = false)
    private LocalDateTime timestamp = LocalDateTime.now();
    @Column(insertable = false)
    private LocalDateTime lastModified = LocalDateTime.now();

    @ManyToOne
    @JoinColumn(name = "user_id")
    private User user;


    @ManyToOne
    @JoinColumn(name="recipe_id")
    private Recipe recipe;

}
