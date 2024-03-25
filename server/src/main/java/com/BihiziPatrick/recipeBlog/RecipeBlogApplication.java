package com.BihiziPatrick.recipeBlog;

import com.BihiziPatrick.recipeBlog.models.Role;
import com.BihiziPatrick.recipeBlog.models.User;
import com.BihiziPatrick.recipeBlog.repositories.RoleRepository;
import com.BihiziPatrick.recipeBlog.repositories.UserRepository;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.security.crypto.password.PasswordEncoder;

import java.util.HashSet;
import java.util.Set;

@SpringBootApplication
public class RecipeBlogApplication {

	public static void main(String[] args) {
		SpringApplication.run(RecipeBlogApplication.class, args);
	}


	@Bean
	CommandLineRunner run(RoleRepository roleRepository, UserRepository userRepository, PasswordEncoder passwordEncoder){
		return args ->{
			if(roleRepository.findByAuthority("ADMIN").isPresent()) return;
			Role adminRole = roleRepository.save(new Role("ADMIN"));
			roleRepository.save(new Role("USER"));

			Set<Role> roles = new HashSet<>();
			roles.add(adminRole);

			User admin = new User("admin", "admin@gmail.com", passwordEncoder.encode("password"), roles);

			userRepository.save(admin);
		};
	}
}
