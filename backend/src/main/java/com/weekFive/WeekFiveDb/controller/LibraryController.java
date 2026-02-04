package com.weekFive.WeekFiveDb.controller;

import com.weekFive.WeekFiveDb.service.LibraryService;
import org.springframework.web.bind.annotation.*;
import java.util.Map;

@RestController
@RequestMapping("/api/library")
@CrossOrigin(origins = "http://localhost:5173")
public class LibraryController {

    private final LibraryService libraryService;

    public LibraryController(LibraryService libraryService) {
        this.libraryService = libraryService;
    }

    @PostMapping("/borrow")
    public void borrow(@RequestBody Map<String, Long> data) {
        libraryService.borrowBook(data.get("memberId"), data.get("bookId"));
    }

    @PostMapping("/return")
    public void returnBook(@RequestBody Map<String, Long> data) {
        libraryService.returnBook(data.get("memberId"), data.get("bookId"));
    }
}
