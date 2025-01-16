package com.ums.app.dto;

import jakarta.validation.constraints.NotBlank;
import lombok.Data;

import java.util.List;
@Data
public class UserRequestDTO {
    private String username;
    private int age;
    private List<@NotBlank(message = "Hobby cannot be blank")String> hobbies;
}
