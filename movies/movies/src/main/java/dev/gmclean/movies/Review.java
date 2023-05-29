package dev.gmclean.movies;


import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.bson.types.ObjectId;
import org.springframework.data.mongodb.core.mapping.Document;

@Data
@Document(collection = "reviews")
@AllArgsConstructor
@NoArgsConstructor
public class Review {
    private ObjectId id;
    private String body;


    public Review(String body) {
        this.body = body;
    }
}
