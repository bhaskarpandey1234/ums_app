package com.ums.app.dto;

import lombok.Data;

import java.time.LocalDateTime;
import java.util.List;

@Data
public class UserResponseDTO {
    private String id;
    private String username;
    private int age;
    private List<String> hobbies;
    private boolean isActive;
    private LocalDateTime createdAt;
}
