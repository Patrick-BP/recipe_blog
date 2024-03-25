package com.perscholas.recipe.blog.repositories;

import com.perscholas.recipe.blog.models.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;
@Repository
public interface UserRepository extends JpaRepository<User, Long> {
    Optional<User>  findUserById(Long id);
    Optional<User> findUserByEmail(String email);
    Boolean existsByEmail(String email);

}
