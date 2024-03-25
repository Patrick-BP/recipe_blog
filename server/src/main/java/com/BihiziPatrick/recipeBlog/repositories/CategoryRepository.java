package com.BihiziPatrick.recipeBlog.repositories;

import com.BihiziPatrick.recipeBlog.models.Category;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface CategoryRepository extends JpaRepository<Category, Long> {

}
