package com.BihiziPatrick.recipeBlog.repositories;

import com.BihiziPatrick.recipeBlog.models.Role;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;
@Repository
public interface RoleRepository extends JpaRepository<Role, Integer> {


    Optional<Role> findByAuthority(String authority);
}
