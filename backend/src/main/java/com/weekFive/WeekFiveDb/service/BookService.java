package com.weekFive.WeekFiveDb.service;

import com.weekFive.WeekFiveDb.model.Book;
import com.weekFive.WeekFiveDb.repository.BookRepository;
import org.springframework.stereotype.Service;
import java.util.List;
import java.util.Optional;

@Service
public class BookService {

    private final BookRepository bookRepository;

    public BookService(BookRepository bookRepository) {
        this.bookRepository = bookRepository;
    }

    public Book addBook(Book book) {
        return bookRepository.save(book);
    }

    public List<Book> getAllBooks() {
        return bookRepository.findAll();
    }

    public List<Book> getAvailableBooks() {
        return bookRepository.findByAvailableTrue();
    }

    public void borrowBook(Long bookId) {
        Book book = bookRepository.findById(bookId)
                .orElseThrow(() -> new RuntimeException("Book not found"));

        if (!book.isAvailable()) {
            throw new RuntimeException("Book is already borrowed");
        }

        book.setAvailable(false);
        bookRepository.save(book);
    }

    public Book returnBook(Long id) {
        Book book = bookRepository.findById(id).orElseThrow();
        book.setAvailable(true);
        return bookRepository.save(book);
    }

    public Optional<Book> getBookById(Long id) {
        return bookRepository.findById(id);
    }

}
