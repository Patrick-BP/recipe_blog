package com.perscholas.recipe.blog.DTO;

import com.sun.jdi.LongType;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.time.LocalDateTime;

@AllArgsConstructor
@NoArgsConstructor
@Setter
@Getter
public class CommentResponseDTO {

    private Long id;
    private String comment_text;
    private String user_name;
    private Long User_id;
    private LocalDateTime createdAt;

}
