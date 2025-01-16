package com.ums.app.service;

import com.ums.app.dto.UserRequestDTO;
import com.ums.app.dto.UserResponseDTO;
import com.ums.app.exception.InvalidRequestException;
import com.ums.app.exception.UserNotFoundException;
import com.ums.app.exception.UsernameAlreadyExistsException;
import com.ums.app.model.AppUser;
import com.ums.app.repository.AppUserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.List;
import java.util.UUID;
import java.util.stream.Collectors;

@Service
public class AppUserService {

    @Autowired
    AppUserRepository appUserRepository;

    public ResponseEntity<UserResponseDTO> createUser(UserRequestDTO userRequestDTO) {
        if (userRequestDTO.getUsername() == null || userRequestDTO.getUsername().isBlank()) {
            throw new InvalidRequestException("Username is required");
        }
        if(appUserRepository.findByUsername(userRequestDTO.getUsername()).isPresent()){
            throw new UsernameAlreadyExistsException("Username '" + userRequestDTO.getUsername() + "' already exists");
        }
        if (userRequestDTO.getAge() <= 0) {
            throw new InvalidRequestException("Age must be a positive number");
        }
        if (userRequestDTO.getHobbies() == null || userRequestDTO.getHobbies().isEmpty()) {
            throw new InvalidRequestException("Hobby list cannot be empty");
        }
        AppUser user = convertToEntity(userRequestDTO);
        AppUser savedUser = appUserRepository.save(user);
        return ResponseEntity.status(HttpStatus.CREATED).body(convertToResponseDTO(savedUser));
    }
    public ResponseEntity<UserResponseDTO> updateUser(String id, UserRequestDTO userRequestDTO) {
        if (userRequestDTO.getUsername() == null || userRequestDTO.getUsername().isBlank()) {
            throw new InvalidRequestException("Username is required");
        }
        if (userRequestDTO.getAge() <= 0) {
            throw new InvalidRequestException("Age must be a positive number");
        }
        if (userRequestDTO.getHobbies() == null || userRequestDTO.getHobbies().isEmpty()) {
            throw new InvalidRequestException("Hobby list cannot be empty");
        }
        AppUser existingUser = appUserRepository.findById(id)
                .orElseThrow(() -> new UserNotFoundException("User with ID " + id + " not found"));

        existingUser.setUsername(userRequestDTO.getUsername());
        existingUser.setAge(userRequestDTO.getAge());
        existingUser.setHobbies(userRequestDTO.getHobbies());

        AppUser updatedUser = appUserRepository.save(existingUser);
        return ResponseEntity.ok(convertToResponseDTO(updatedUser));

    }

    public ResponseEntity<List<UserResponseDTO>> getAllUsers() {
        List<UserResponseDTO> users= appUserRepository.findAll()
                .stream().map(this::convertToResponseDTO).collect(Collectors.toList());
        return ResponseEntity.status(HttpStatus.OK).body(users);
    }
    public ResponseEntity<Void> deleteUser(String id) {
        AppUser user = appUserRepository.findById(id)
                .orElseThrow(() -> new UserNotFoundException("User with ID " + id + " not found"));

        appUserRepository.delete(user);
        return ResponseEntity.noContent()
                .header("Message", "User with ID " + id + " successfully deleted")
                .build();
    }

    private AppUser convertToEntity(UserRequestDTO dto) {
        AppUser user = new AppUser();
        user.setUsername(dto.getUsername());
        user.setAge(dto.getAge());
        user.setHobbies(dto.getHobbies());
        user.setActive(true);
        user.setCreatedAt(LocalDateTime.now());
        return user;
    }

    private UserResponseDTO convertToResponseDTO(AppUser user) {
        UserResponseDTO response = new UserResponseDTO();
        response.setId(user.getId());
        response.setUsername(user.getUsername());
        response.setAge(user.getAge());
        response.setHobbies(user.getHobbies());
        response.setActive(user.isActive());
        response.setCreatedAt(user.getCreatedAt());
        return response;
    }
}
