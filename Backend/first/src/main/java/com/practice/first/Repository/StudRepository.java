package com.practice.first.Repository;

import org.springframework.data.jpa.repository.JpaRepository;


import com.practice.first.Model.Student;

public interface StudRepository extends JpaRepository<Student,Long>{

}