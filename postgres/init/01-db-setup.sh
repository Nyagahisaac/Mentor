psql -U postgres -c "CREATE USER mentor PASSWORD 'pass12232@fdjxfsdfd'"
psql -U postgres -c "CREATE DATABASE mentor OWNER mentor"
psql -U postgres -c "GRANT ALL PRIVILEGES ON DATABASE mentor TO mentor"