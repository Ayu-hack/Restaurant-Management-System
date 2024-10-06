FROM mysql:latest

# Set environment variables
ENV MYSQL_ROOT_PASSWORD=root
ENV MYSQL_DATABASE=restaurant
ENV MYSQL_USER=admin
ENV MYSQL_PASSWORD=admin

# Copy the SQL dump file
COPY init.sql /docker-entrypoint-initdb.d/1.sql

# Expose the MySQL port
EXPOSE 3306