package com.perscholas.recipe.blog.models;

import jakarta.persistence.*;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@NoArgsConstructor
@Data
public class Ingredient {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;
    @Column(nullable = false)
    private String name;
    private float quantity;
    @ManyToOne
    @JoinColumn(name = "recipe_id")
    private Recipe recipe;
}
