package com.perscholas.recipe.blog.models;

import jakarta.persistence.*;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;
import java.util.Set;

@Entity
@NoArgsConstructor
@Data
public class Recipe {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;
    @Column(nullable = false)
    private String title;
    @Column(nullable = false, columnDefinition = "TEXT")
    private String description;
    @Lob
    @Column(nullable = false)
    private String Instructions;
    @Column(nullable = false)
    private String image;
    @ManyToOne
    @JoinColumn(name = "user_id",nullable = false, updatable = false)
    private User user;

    @OneToMany(mappedBy = "recipe", cascade = CascadeType.ALL )
    private List<Ingredient> ingredientList;

    @OneToMany(mappedBy = "recipe", cascade = CascadeType.ALL )
    private List<Comment> commentList = new ArrayList<>();;


    @OneToOne
    private Category category;

    @Column(updatable = false)
    private LocalDateTime createdAt;
    @PrePersist
    protected void onCreate() {
        createdAt = LocalDateTime.now();
    }


}
