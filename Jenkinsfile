pipeline {
    agent any  
    environment {
        dockerImage = 'node:14'  // Chọn phiên bản Docker image phù hợp với ứng dụng của bạn
    }
    stages {
        stage('Clone stage') {
            steps {
                echo 'Hello sếp Nam đẹp trai thông minh học giỏi'
            }
        }
        stage('Build stage') {
            steps {
                script {
                    // Sử dụng Docker image đã khai báo trong môi trường
                    docker.withRegistry('https://index.docker.io/v1/', 'docker-hub') {
                        // Build Docker image
                        sh "docker build -t hhainam/nodejs-test:v2 ."
                        // Đẩy Docker image lên Docker registry
                        sh "docker push hhainam/nodejs-test:v2"
                    }
                }
            }
        }
    }
}
