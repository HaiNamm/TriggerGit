pipeline {
    agent none

    environment {
      DOCKER_IMAGE = "hhainam/namnodejs"
    }
    stages {
        stage('Test') {
            steps {
                script {
                    // Pull the Docker image
                    sh "docker pull python:3.8-slim-buster"

                    // Run the container with the specified image
                    sh '''
                    docker run --rm \
                        -v /tmp:/root/.cache \
                        -w /workspace \
                        python:3.8-slim-buster \
                        /bin/bash -c "
                        pip install poetry &&
                        poetry install &&
                        poetry run pytest
                    "
                    '''
                }
            }
        }

        stage('Build stage') {
            agent { label 'master'}
            environment {
                DOCKER_TAG="${GIT_BRANCH.tokenize('/').pop()}-${GIT_COMMIT.substring(0,7)}"
            }
            steps {
                sh "docker build -t ${DOCKER_IMAGE}:${DOCKER_TAG} . "
                sh "docker tag ${DOCKER_IMAGE}:${DOCKER_TAG} ${DOCKER_IMAGE}:latest"
                sh "docker image ls | grep ${DOCKER_IMAGE}"
                withDockerRegistry(credentialsId: 'docker-hub1', url:'https://index.docker.io/v1/') {
                    sh "docker push ${DOCKER_IMAGE}:${DOCKER_TAG}"
                }
                
                //clean to save disk
                sh "docker image rm ${DOCKER_IMAGE}:${DOCKER_TAG}"
            }           
        }
    }
}