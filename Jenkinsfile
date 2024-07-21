pipeline {
    agent none  
    environment {
        DOCKER_IMAGE = "hhainam/namnodejs"
    }
    stages {
        stage('Clone stage') {
            steps {
                echo 'Hello sếp Nam đẹp trai thông minh học giỏi'
            }
        }

        stage("Test") {
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
        stage("build") {
            agent { node {label 'master'}}
            environment {
                DOCKER_TAG="${GIT_BRANCH.tokenize('/').pop()}-${GIT_COMMIT.substring(0,7)}"
            }
            steps {
                sh "docker build -t ${DOCKER_IMAGE}:${DOCKER_TAG} . "
                sh "docker image ls | grep ${DOCKER_IMAGE}"
                withCredentials([usernamePassword(credentialsId: 'docker-hub1', usernameVariable: 'DOCKER_USERNAME', passwordVariable: 'DOCKER_PASSWORD')]) {
                    sh 'echo $DOCKER_PASSWORD | docker login --username $DOCKER_USERNAME --password-stdin'
                    sh "docker push ${DOCKER_IMAGE}:${DOCKER_TAG}"
                }
                script {
                    if (GIT_BRANCH ==~ /.*main.*/){
                        sh "docker tag ${DOCKER_IMAGE}:${DOCKER_TAG} ${DOCKER_IMAGE}:latest"
                        sh "docker push ${DOCKER_IMAGE}:latest"
                        sh "docker image rm ${DOCKER_IMAGE}:latest"
                    }
                    
                }

                //clean to save disk
                sh "docker image rm ${DOCKER_IMAGE}:${DOCKER_TAG}"
            }
        }
    }
    
    post {
        success {
            echo "SUCCESSFUL"
        }
        failure {
            echo "FAILED"
        }
    }
}

        // stage('Build stage') {
        //     steps {
        //         withDockerRegistry(credentialsId: 'docker-hub1', url:'https://index.docker.io/v1/') {
        //             sh label: "",script: 'docker build -t hhainam/nodejs-test:v2 .'
        //             sh label: "",script: 'docker push hhainam/nodejs-test:v2'
        //         }
        //     }
        // }