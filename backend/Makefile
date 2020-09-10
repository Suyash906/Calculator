docker-build:
	docker build -t suyash906/bevybackend:v1 .

docker-push:
	docker push suyash906/bevybackend:v1

docker-run:
	docker run --restart always --name bevybackend -td -p 80:3001 suyash906/bevybackend:v1