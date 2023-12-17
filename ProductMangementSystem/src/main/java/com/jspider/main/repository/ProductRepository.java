package com.jspider.main.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.jspider.main.pojo.Product;

public interface ProductRepository extends JpaRepository<Product, Integer>{

	Product getProductById(int id);

}
