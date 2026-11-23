package com.practice.first.Controller;


import java.util.List;

import org.springframework.web.bind.annotation.*;

import com.practice.first.Model.Student;
import com.practice.first.Service.StudService;

@RestController
@RequestMapping("/students")
@CrossOrigin(origins="http://localhost:5173")
public class StudController{
    private final StudService studService;
    public StudController(StudService studService){
        this.studService=studService;
    }
    @PostMapping
    public Student createStudent(@RequestBody Student student){
        return studService.createStudent(student);
    }
    @GetMapping
    public List<Student> getStudents(){
        return studService.getAllStudents();
    }
    @PutMapping("/{id}")
    public Student updateStudent(@PathVariable Long id,
                                @RequestBody Student student){
        return studService.updateStudent(id,student);
    }
    
    @DeleteMapping("/{id}")
    public void deleteStudent(@PathVariable Long id){
        studService.deleteStudent(id);
    }
    
}
