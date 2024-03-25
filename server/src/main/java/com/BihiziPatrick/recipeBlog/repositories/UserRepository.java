package com.BihiziPatrick.recipeBlog.repositories;

import com.BihiziPatrick.recipeBlog.models.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;
@Repository
public interface UserRepository extends JpaRepository<User, Long> {
    Optional<User>  findUserById(Long id);
    Optional<User> findUserByEmail(String email);
    Boolean existsByEmail(String email);

}
