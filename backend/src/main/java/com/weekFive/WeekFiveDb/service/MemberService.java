package com.weekFive.WeekFiveDb.service;

import com.weekFive.WeekFiveDb.model.Member;
import com.weekFive.WeekFiveDb.repository.MemberRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.time.LocalDate;
import java.util.List;
import java.util.Optional;

@Service
public class MemberService {
    @Autowired
    private MemberRepository memberRepository;

    public Member registerMember(Member member) {
        if (memberRepository.findByEmail(member.getEmail()).isPresent()) {
            throw new RuntimeException("Email already registered");
        }
        if (member.getMembershipDate() == null) {
            member.setMembershipDate(LocalDate.now());
        }
        return memberRepository.save(member);
    }

    public List<Member> getAllMembers() {
        return memberRepository.findAll();
    }

    public Optional<Member> getMemberById(Long id) {
        return memberRepository.findById(id);
    }

    public Optional<Member> findByEmail(String email) {
        return memberRepository.findByEmail(email);
    }
}
