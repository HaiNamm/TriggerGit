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
                withDockerRegistry(credentialsId: 'docker-hub', url: 'https://index.docker.io/v1/') {
                    sh 'docker build -t hhainam/namnodejs:v2 .'
                    sh 'docker push hhainam/namnodejs:v2'
                }
            }
        }
    }
}