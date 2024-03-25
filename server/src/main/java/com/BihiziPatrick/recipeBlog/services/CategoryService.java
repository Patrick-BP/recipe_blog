package com.perscholas.recipe.blog.services;

import com.perscholas.recipe.blog.models.Category;
import com.perscholas.recipe.blog.repositories.CategoryRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.NoSuchElementException;
import java.util.Optional;

@Service
public class CategoryService {

    @Autowired
    CategoryRepository categoryRepository;

    public void createCategory(Category category){
        Category newCategory = new Category();
        newCategory.setName(category.getName());
        categoryRepository.save(newCategory);
    }
    public List<Category> getAllCategories(){
      return  categoryRepository.findAll();
    }

    public Optional<Category> getCategoryById(Long id){
        return categoryRepository.findById(id);
    }
    public void DeleteCategory(Long id){
        categoryRepository.deleteById(id);
    }
    public ResponseEntity<String> updateCategory(Category category){
        Optional<Category> findCateg = categoryRepository.findById(category.getId());
        if(findCateg.isPresent()){
            try{
                Category categ = findCateg.get();
                categ.setName(category.getName());
                categoryRepository.save(category);
                return   ResponseEntity.ok("Categery has been updated");
            }catch(Exception e){
                return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Something went wrong");
            }

        }else {
            throw new NoSuchElementException("Category Not Found with name: "+ category.getName());
        }

    }

}
