package products.api;

import java.io.IOException;
import java.io.InputStream;
import java.util.List;

import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

import com.fasterxml.jackson.core.type.TypeReference;
import com.fasterxml.jackson.databind.ObjectMapper;


import products.api.models.Product;
import products.api.services.ProductService;

@SpringBootApplication
public class ProductsApplication {

	public static void main(String[] args) {
		SpringApplication.run(ProductsApplication.class, args);
	}

	@Bean
	CommandLineRunner initDatabase(ProductService productService){
		return args -> {
			ObjectMapper mapper = new ObjectMapper();
			TypeReference<List<Product>> typeReference = new TypeReference<List<Product>>(){};
			InputStream inputStream = TypeReference.class.getResourceAsStream("/data-set-example.json");

			try{
				List<Product> products = mapper.readValue(inputStream, typeReference);
				productService.save(products);
				System.out.println("JSON corretamente salvo para o banco de dados. Servidor pronto para a ação!");
			} catch(IOException e){
				System.out.println("Falha na transcrição do arquivo JSON para a base de dados: " + e.getMessage());
			}

		};
	}

}
