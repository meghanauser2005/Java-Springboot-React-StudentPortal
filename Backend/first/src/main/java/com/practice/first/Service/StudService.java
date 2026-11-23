package com.practice.first.Service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.practice.first.Model.Student;
import com.practice.first.Repository.StudRepository;

@Service
public class StudService{
    private final StudRepository studRepository;
    public StudService(StudRepository studRepository){
        this.studRepository=studRepository;
    }
    public Student createStudent(Student student){
        return studRepository.save(student);
    }
    public List<Student> getAllStudents(){
        return studRepository.findAll();
    }
    public Student updateStudent(Long id,Student student){
        Student exist=studRepository.findById(id).orElse(null);
        if(exist!=null){
            exist.setUsername(student.getUsername());
            exist.setPassword(student.getPassword());
            return studRepository.save(exist);
        }
        return null;
    }
    public void deleteStudent(Long id){
        studRepository.deleteById(id);
    }
}