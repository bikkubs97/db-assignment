Answers are based on mongodb and mongoose.

1. Explain the relationship between the "Product" and "Product_Category" entities from the above diagram.

 Each product has a product category filed, which specifies the category of the product. The field references a specific document (a category) in the ProductCategory collection. Many prodcuts can be of same category. This establishes a many to one relationship. in my schema, I used the type of the field as object id and it references the product category collection.
 
2. How could you ensure that each product in the "Product" table has a valid category assigned to it?

We can use schema validation, we can set the required field of the category to true. For proper validation , we can write a piece of program that checks the value (wheather the category exists or not ) before the document is inserted at application level. If the category not exisists we can throw an error.

3. Create schema in any Database script or any ORM (Object Relational Mapping).
Please check schema.js , I used mongodb and mongoose.