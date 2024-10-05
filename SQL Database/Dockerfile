FROM mysql:latest

# Set environment variables
ENV MYSQL_ROOT_PASSWORD=admin
ENV MYSQL_DATABASE=restaurant

# Copy the SQL dump file
COPY *.sql /docker-entrypoint-initdb.d/

# Expose the MySQL port
EXPOSE 3306