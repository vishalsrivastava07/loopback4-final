CREATE TABLE Authors (
                       authorId UUID PRIMARY KEY DEFAULT gen_random_uuid(),
                       authorName VARCHAR(255) NOT NULL
);

CREATE TABLE Categories (
                          categoryId UUID PRIMARY KEY DEFAULT gen_random_uuid(),
                          genre VARCHAR(255) NOT NULL
);

CREATE TABLE Books (
                     bookId UUID PRIMARY KEY DEFAULT gen_random_uuid(),
                     title VARCHAR(100) NOT NULL,
                     isbn VARCHAR(20) NOT NULL,
                     publicationDate DATE NOT NULL,
                     price DECIMAL(10, 2) NOT NULL,
                     discountPrice DECIMAL(10, 2) DEFAULT 0,
                     quantity INT NOT NULL,
                     authorId UUID NOT NULL,
                     categoryId UUID NOT NULL,
                     FOREIGN KEY (authorId) REFERENCES Authors(authorId) ON DELETE CASCADE,
                     FOREIGN KEY (categoryId) REFERENCES Categories(categoryId) ON DELETE CASCADE
);
