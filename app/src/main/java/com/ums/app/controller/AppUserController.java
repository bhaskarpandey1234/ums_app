package com.ums.app.controller;

import com.ums.app.dto.UserRequestDTO;
import com.ums.app.dto.UserResponseDTO;
import com.ums.app.service.AppUserService;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("api/users")
@RequiredArgsConstructor
public class AppUserController {

    @Autowired
    private final AppUserService appUserService;

    @GetMapping
    public ResponseEntity<List<UserResponseDTO>> getAllUsers(){
        return appUserService.getAllUsers();
    }

    @PostMapping
    public ResponseEntity<UserResponseDTO> createUser(@Valid @RequestBody UserRequestDTO userRequestDTO) {
        return appUserService.createUser(userRequestDTO);
    }

    @PutMapping("/{userId}")
    public ResponseEntity<UserResponseDTO> updateUser(@PathVariable String userId, @Valid @RequestBody UserRequestDTO userRequestDTO) {
        return appUserService.updateUser(userId, userRequestDTO);
    }

    @DeleteMapping("/{userId}")
    public ResponseEntity<Void> deleteUser(@PathVariable String userId) {
        return appUserService.deleteUser(userId);
    }
}
