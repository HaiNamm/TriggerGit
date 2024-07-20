pipeline {
    agent none

    environment {
      DOCKER_IMAGE = "hhainam/namnodejs"
    }
    stages {
        stage('Test') {
           agent {
                docker {
                image 'python:3.8-slim-buster'
                args '-u 0:0 -v /tmp:/root/.cache'
                }
            }
            steps {
                sh "pip install poetry"
                sh "poetry install"
                sh "poetry run pytest"
            }
        }

        stage('Build stage') {
            agent { node {label 'master'}}
            environment {
                DOCKER_TAG="${GIT_BRANCH.tokenize('/').pop()}-${GIT_COMMIT.substring(0,7)}"
            }
            steps {
                sh "docker build -t ${DOCKER_IMAGE}:${DOCKER_TAG} . "
                sh "docker tag ${DOCKER_IMAGE}:${DOCKER_TAG} ${DOCKER_IMAGE}:latest"
                sh "docker image ls | grep ${DOCKER_IMAGE}"
                withCredentials(credentialsId: 'docker-hub1', url:'https://index.docker.io/v1/') {
                    sh "docker push ${DOCKER_IMAGE}:${DOCKER_TAG}"
                }
                
                //clean to save disk
                sh "docker image rm ${DOCKER_IMAGE}:${DOCKER_TAG}"
            }           
        }
    }
}