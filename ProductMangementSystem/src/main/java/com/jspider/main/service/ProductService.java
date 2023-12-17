package com.jspider.main.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.jspider.main.pojo.Product;
import com.jspider.main.repository.ProductRepository;
@Service
public class ProductService {

	@Autowired
	ProductRepository productRepository;

	public Product saveProduct(Product product) {
		Product product2=productRepository.save(product);
		return product2;
	}

	public List<Product> getAllProduct() {
		return productRepository.findAll();
	}

	public Product getProductById(int id) {
		return productRepository.getProductById(id);
	}

	public String deleteById(int id) {
		if(productRepository.findById(id) != null) {
			productRepository.deleteById(id);
			return "Product Delete Successfully..!";
		}
		return "Something wrong on server";
	}

}
