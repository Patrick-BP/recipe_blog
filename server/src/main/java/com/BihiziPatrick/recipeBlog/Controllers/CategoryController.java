package com.BihiziPatrick.recipeBlog.Controllers;

import com.BihiziPatrick.recipeBlog.services.CategoryService;
import com.BihiziPatrick.recipeBlog.models.Category;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;


@RestController
@RequestMapping("/api")
@CrossOrigin(origins = "http://localhost:3000")
public class CategoryController {

    @Autowired
    CategoryService categoryService;



    @PostMapping("admin/categ/new")
    public ResponseEntity<String> createCategory(@RequestBody Category category){
        try {
            Category newCategory = new Category();
            newCategory.setName(category.getName());
            categoryService.createCategory(newCategory);
            return ResponseEntity.ok("Category Added");
        }catch (Exception e){
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Something went Wrong");
        }

    }



    @GetMapping("/recipe/categ/all")
    public ResponseEntity<List<Category>> getAllCategory(){
        try {
            return ResponseEntity.ok(categoryService.getAllCategories());
        }catch (Exception e){
            return ResponseEntity.status(HttpStatus.NOT_FOUND).build();
        }

    }
    @GetMapping("/recipe/categ/{id}")
    public ResponseEntity<Optional<Category>> getCategoryById(@PathVariable Long id){
        try {
            Optional<Category> findCateg = categoryService.getCategoryById(id);
            if(findCateg.isPresent()){
                return ResponseEntity.ok(findCateg);
            }else{
                return ResponseEntity.status(HttpStatus.NOT_FOUND).build();
            }

        }catch (Exception e){
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
        }

    }
    @DeleteMapping("admin/categ/del/{id}")
    public ResponseEntity<String> deleteCategoryById(@PathVariable Long id){
        try {
            Optional<Category> findCateg = categoryService.getCategoryById(id);
            if(findCateg.isPresent()){
                categoryService.DeleteCategory(id);
                return ResponseEntity.ok("Category " + findCateg.get().getName() + " was deleted");
            }else{
                return ResponseEntity.status(HttpStatus.NOT_FOUND).build();
            }

        }catch (Exception e){
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
        }

    }
    @PostMapping("admin/categ/update")
    public ResponseEntity<String> updateCategory(@RequestBody Category category){
        return categoryService.updateCategory(category);
    }
}
