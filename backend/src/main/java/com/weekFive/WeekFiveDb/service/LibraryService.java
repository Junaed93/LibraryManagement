package com.weekFive.WeekFiveDb.service;

import org.springframework.stereotype.Service;

@Service
public class LibraryService {

    private final BookService bookService;
    private final MemberService memberService;

    public LibraryService(BookService bookService, MemberService memberService) {
        this.bookService = bookService;
        this.memberService = memberService;
    }

    public void borrowBook(Long memberId, Long bookId) {
        memberService.getMemberById(memberId);
        bookService.borrowBook(bookId);
    }

    public void returnBook(Long memberId, Long bookId) {
        memberService.getMemberById(memberId);
        bookService.returnBook(bookId);
    }
}
