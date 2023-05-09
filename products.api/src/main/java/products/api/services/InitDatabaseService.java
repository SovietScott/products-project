package products.api.services;

import java.io.IOException;
import java.io.InputStream;
import java.util.List;
import org.springframework.stereotype.Service;
import com.fasterxml.jackson.core.type.TypeReference;
import com.fasterxml.jackson.databind.ObjectMapper;
import products.api.models.Product;

@Service
public class InitDatabaseService {
	public void initDatabase(ProductService productService){
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

