package com.ums.app.model;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;
import java.util.UUID;
import java.util.*;

@AllArgsConstructor
@NoArgsConstructor
@Data
@Entity
public class AppUser {
    @Id
    @GeneratedValue(strategy = GenerationType.UUID)
    private String id;

    @Column(nullable = false, unique = true)
    private String username;

    @Column(nullable = false)
    private int age;

    @Column(nullable = false)
    private List<String> hobbies = new ArrayList<>();

    @Column(nullable = false)
    private boolean isActive = true;

//    @Column(updatable = false)
    private LocalDateTime createdAt;

}
