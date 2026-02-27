git pull origin main
docker build -t portfolio-app .
docker stop portfolio-app 2>/dev/null
docker rm portfolio-app 2>/dev/null
docker run -d -p 8080:8080 --name portfolio-app --restart unless-stopped portfolio-app
