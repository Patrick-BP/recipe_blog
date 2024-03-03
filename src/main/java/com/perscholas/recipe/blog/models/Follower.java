package com.perscholas.recipe.blog.models;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@NoArgsConstructor
@Data
public class Follower {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;
    private Long follower_id;
    private Long following_id;
}
