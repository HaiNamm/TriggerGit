pipeline {
    agent any  
    stages {
        stage('Clone stage') {
            steps {
                echo 'Hello sếp Nam đẹp traithông minh học giỏi'
            }
        }
        stage('Build stage') {
            steps {
                withDockerRegistry(credentialsId: 'docker-hub1', url:'https://index.docker.io/v1/') {
                    sh label: "",script: 'docker build -t hhainam/nodejs-test:v2 .'
                    sh label: "",script: 'docker push hhainam/nodejs-test:v2'
                }
            }
        }
    }
}