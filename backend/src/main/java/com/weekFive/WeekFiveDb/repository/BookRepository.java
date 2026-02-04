package com.weekFive.WeekFiveDb.repository;

import com.weekFive.WeekFiveDb.model.Book;
import org.springframework.data.jpa.repository.JpaRepository;
import java.util.List;

public interface BookRepository extends JpaRepository<Book, Long> {
    List<Book> findByAvailableTrue();
}
