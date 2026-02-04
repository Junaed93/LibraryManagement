package com.weekFive.WeekFiveDb.controller;

import com.weekFive.WeekFiveDb.model.Member;
import com.weekFive.WeekFiveDb.service.MemberService;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@RestController
@RequestMapping("/api/members")
@CrossOrigin(origins = "http://localhost:5173")
public class MemberController {

    private final MemberService memberService;

    public MemberController(MemberService memberService) {
        this.memberService = memberService;
    }

    @PostMapping
    public Member register(@RequestBody Member member) {
        return memberService.registerMember(member);
    }

    @GetMapping
    public List<Member> getAll() {
        return memberService.getAllMembers();
    }
}
